const fs = require("fs")
const os = require("os")
const path = require("path")
const LANGUAGES = [
    "cs",
    "de",
    "en",
    "es",
    "fi",
    "fr",
    "he",
    "nb",
    "nl",
    "nn",
    "oc",
    "pl",
    "pt",
    "sk",
    "sv",
    "tlh",
    "tr"
]


const tmp = lang => {
    let name = path.join(os.tmpdir(), `translations.${lang}.${Math.random()}.js`)
        , fd = fs.openSync(name, "a+")
    return {fd, name}
}

const projectDir = ()=> {
    return __dirname
}

const entry = (lang, is_esm) => {
    let {fd, name} = tmp(lang)
    fs.writeSync(fd, !is_esm
        ? `flowplayer.i18n['${lang}'] = require('${projectDir()}/languages/${lang}')`
        :  `import {${lang}} from '${projectDir()}/index'; export default ${lang}`
    )
    fs.close(fd)
    return name
}

const all = (is_esm) => {
    let {fd, name} = tmp("all")
    fs.writeSync(fd, is_esm
        ? `import * as all from '${projectDir()}/index'; export default all`
        : `import * as all from '${projectDir()}/index'; Object.assign(flowplayer.i18n, all);`
    )
    fs.close(fd)
    return name
}

const entries_umd = Object.assign.apply({}, LANGUAGES.map(lang => ({[`flowplayer.lang.${lang}`]: entry(lang)})))
const entries_esm = Object.assign.apply({}, LANGUAGES.map(lang => ({[`flowplayer.lang.${lang}`]: entry(lang, true)})))

module.exports = [{
    entry: {
        ...entries_umd,
        'flowplayer.lang.all': all()
    }, output: {
        path: path.resolve(__dirname, "dist")
    }
}, {
    entry: {
        ...entries_esm,
        'flowplayer.lang.all': all(true)
    }, output: {
        path: path.resolve(__dirname, "dist/esm"),
        library: {
            type: "module"
        }
    }, experiments: {
        outputModule: true
    }
}
]
