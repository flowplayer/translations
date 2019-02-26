const LANGUAGES = [
  "en",
  "fi",
  "sv"
]

const entries = Object.assign.apply({}, LANGUAGES.map(lang => ({ [`flowplayer.lang.${lang}`]: `expose-loader?flowplayer.i18n.${lang}!./languages/${lang}`})))

module.exports = {
  entry: entries
}
