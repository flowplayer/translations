import { type RollupOptions } from "rollup"
import dts from "rollup-plugin-dts"
//import { nodeResolve } from "@rollup/plugin-node-resolve"
import commonjs from "@rollup/plugin-commonjs"
import typescript from "rollup-plugin-ts"
import fs from "fs"
import path from "path"
import pkg from "./package.json"

const plugins = 
  [ commonjs()
  , typescript({tsconfig: 
      { allowJs: false
      , noImplicitAny: true
      , moduleResolution: "Node"
      , resolveJsonModule: true
      , allowSyntheticDefaultImports: true
      , declaration: true
      , declarationDir: "./dist/dts"
      , emitDeclarationOnly: true
      }
    })
  ]

const umd = (input : string, file : string, name : string) : RollupOptions => {
  return {
    input,
    output: {
      file,
      format: 'umd',
      name
    },
    plugins
  }
}

const cjs = (input : string, file : string) : RollupOptions => {
  return {
    input,
    output: {
      file,
      format: 'cjs',
    },
    plugins
  }
}

const iife = (input : string, file : string) : RollupOptions => {
  return {
    input,
    output: {
      file,
      format: 'iife',
    },
    plugins
  }
}

const esm = (input : string, file : string) : RollupOptions => {
  return {
    input,
    output: {
      file,
      format: 'esm',
    },
    plugins
  }
}

const targets = 
  [ iife("src/iife.ts", "dist/flowplayer.lang.all.js") // for cdn iife
  , cjs("src/index.ts", pkg.main)
  , esm("src/index.ts", pkg.module)
  ]

const langDir = "src/languages"

const languages = fs.readdirSync(langDir)

languages.forEach(lang => {
  const input = path.join(langDir, lang)
  const langCode = lang.split(".")[0]!
  const esmOutput = path.join("dist", "esm", `${langCode}.js`)
  const umdOutput = path.join("dist", `${langCode}.js`)
  const umdConst = `flowplayer.i18n.${langCode}`
  targets.push(umd(input, umdOutput, umdConst))
  targets.push(esm(input, esmOutput))
})

export default targets as RollupOptions[]