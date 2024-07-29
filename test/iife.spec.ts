import test from "ava"
import fs from "fs/promises"
import path from "path"
import vm from "vm"
import * as langs from "../src/index"

const mockWindow = ()=> ({
  listeners: [] as Array<{type: string, listener: any}>,
  addEventListener(type : string, listener : any) {
    this.listeners.push({type, listener})
  }
})

const mockFlowplayer = ()=> {
  const flowplayer = ()=> { throw new Error("flowplayer() was called during boot") }
  flowplayer.i18n = {}
  return {flowplayer}
}

const iifeFile = path.join(process.cwd(), "dist", "flowplayer.lang.all.js")

test("iife async works", async t => {
  const contents = await fs.readFile(iifeFile)
  const iife = new vm.Script(contents.toString())
  const window = mockWindow()
  await iife.runInNewContext({window})
  const [listener] = window.listeners
  t.is(listener.type, "flowplayer:umd")
})

test("iife sync works", async t => {
  const contents = await fs.readFile(iifeFile)
  const iife = new vm.Script(contents.toString())
  const window = mockWindow()
  const umd = mockFlowplayer()
  const browserEnv = {window, ...umd}
  await iife.runInNewContext(browserEnv)
  t.is(window.listeners.length, 0, "umd listener registered in sync environment")
  t.deepEqual(browserEnv.flowplayer.i18n, langs)
})