import en from "./languages/en"
import fi from "./languages/fi"
import sv from "./languages/sv"

export {
  en,
  fi,
  sv
}

var all = {
  en: en,
  fi: fi,
  sv: sv
}

if (typeof flowplayer !== "undefined") flowplayer.util.extend(flowplayer.i18n, all)
