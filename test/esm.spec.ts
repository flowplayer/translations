import test from "ava"
import fs from "fs"
import path from "path"
import vm from "vm"

const langDir = path.join(process.cwd(), "src", "languages")
const esmDist = path.join(process.cwd(), "dist", "esm")
const srcLangs   = fs.readdirSync(langDir)
const distLangs  = fs.readdirSync(esmDist)

test("expect number of compiled language files == number of typescript lang files", async t => {
  // do not account for flowplayer.langs.all.js file
  // but also kind of account for it ;-)
  const expectedNumberWithoutAll = distLangs.length - 1
  t.assert(srcLangs.length == expectedNumberWithoutAll, 
    `only found ${srcLangs.length} src langs vs ${distLangs.length} dist files`)
})

srcLangs.forEach(lang => {
  const langCode = lang.split(".")[0]
  test(`${langCode} has default export`, async t => {
    try {
      const distFile = path.join(esmDist, `flowplayer.lang.${langCode}.js`)
      const compiledContents = await fs.readFileSync(distFile).toString()
      // this mocks the behavior of a browser-like http import
      const browserLikeModule = new vm.SourceTextModule(compiledContents, {identifier: distFile})
      // this dummy import will throw a syntax error like a browser would
      // when the compiled contents of a language do not have a default export
      // this behavior is as close to the esm embed system as we can possibly get without puppeteer
      const script = new vm.SourceTextModule(`import lang from "flowplayer.lang.${langCode}.js"`, {identifier: langCode})
      // tell the wrapper script where to "link" (resolve) its singular import
      // this is where the error would usually be thrown if the builds are broken
      await script.link(async (specifier, referencingModule)=> browserLikeModule)
      // evaluate it for good measure
      await script.evaluate()
      // silence is golden
      t.pass()
    } catch (err) {
      t.fail(err.message)
    }
  })
})