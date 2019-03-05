const fs = require("fs")
const path = require("path")
const LANGUAGES = [
  "en",
  "fi",
  "sv"
]


const tmp = lang => {
  let name = path.join(__dirname, `tmp.${lang}.${Date.now()}.js`)
    , fd = fs.openSync(name, "a+")
  return { fd, name }
}

const entry = lang => {
  let { fd, name } = tmp(lang)
  fs.writeSync(fd, `flowplayer.i18n['${lang}'] = require('./languages/${lang}')`)
  fs.close(fd)
  return name
}

const entries = Object.assign.apply({}, LANGUAGES.map(lang => ({ [`flowplayer.lang.${lang}`]: entry(lang)})))

module.exports = {
  entry: {
    ...entries,
    'flowplayer.lang.all': 'expose-loader?flowplayer.i18n!./index'
  }
}
