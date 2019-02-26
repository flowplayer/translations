const LANGUAGES = [
  "en",
  "fi"
]

const entries = Object.assign.apply({}, LANGUAGES.map(lang => ({ [`flowplayer.lang.${lang}.js`]: `expose-loader?flowplayer.i18n.${lang}!./languages/${lang}`})))

console.log('entries', entries);

module.exports = {
  entry: entries
}
