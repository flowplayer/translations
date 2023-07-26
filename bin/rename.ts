import { globby } from "globby"
import * as fs from "fs/promises"

(~async function main () {
  const mjs_files = await globby("dist/esm/**/*.mjs")

  await Promise.all(mjs_files.map(file => fs.rename(file, file.replace(/.mjs$/, ".js"))))
}())
