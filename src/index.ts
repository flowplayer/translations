import cs from "./languages/cs"
import de from "./languages/de"
import en from "./languages/en"
import es from "./languages/es"
import fi from "./languages/fi"
import fr from "./languages/fr"
import gr from "./languages/gr"
import he from "./languages/he"
import nb from "./languages/nb"
import nl from "./languages/nl"
import nn from "./languages/nn"
import oc from "./languages/oc"
import pl from "./languages/pl"
import pt from "./languages/pt"
import sk from "./languages/sk"
import sv from "./languages/sv"
import tlh from "./languages/tlh"
import tr from "./languages/tr"
import zh from "./languages/zh"

export interface CoreTranslations {
  exit_fullscreen: string,
  fullscreen: string,
  mute: string,
  pause: string,
  seconds?: string,
  timeline_aria_label?: string,
  play: string,
  unmute: string,
  volume: string,
}

export interface ChromecastTranslations {
  start: string,
  stop: string
}

export interface PlaylistTranslations {
  up_next: string,
  cancel: string
}

export interface ShareTranslations {
  clipboard_failure: string,
  clipboard_success: string,
  embed: string,
  link: string,
  menu_title: string
}

export interface QualitySelectionTranslations {
  menu_title: string
}

export interface AudioTranslations {
  button_txt: string,
  menu_title: string
}

export interface VideoTrackSelection {
  button_txt: string,
  menu_title: string
}

export interface SpeedTranslations {
  menu_title: string;
}

export interface CCTranslations {
  button    : string,
  menu_title: string,
  options   ?: string,
  reset     ?: string,
  tracks    ?: string,
  properties?: StylePropertiesTranslations,
  colors    ?: ColorsTranslations,
  fontFamily?: FontFamilyTranslations,
  edgeStyle ?: EdgeStyleTranslations
}

export interface StylePropertiesTranslations {
  fontSize           : string,
  fontFamily         : string,
  fontColor          : string,
  fontOpacity        : string,
  backgroundColor    : string,
  backgroundOpacity  : string,
  characterEdgeStyle : string,
  reset              : string
}

export interface ColorsTranslations {
  White  : string,
  Yellow : string,
  Green  : string,
  Cyan   : string,
  Blue   : string,
  Magenta: string,
  Red    : string,
  Black  : string,
}

export interface FontFamilyTranslations {
  "Monospaced Serif": string,
  "Proportional Serif": string,
  "Monospaced Sans-Serif": string,
  "Proportional Sans-Serif": string,
  Casual: string,
  Cursive: string,
}

export interface EdgeStyleTranslations {
  None: string,
  Raised: string,
  Depressed: string,
  Outline: string
  "Drop shadow": string,
}

export interface AdsTranslations {
  ad: string,
  ads: string,
  advertisement: string,
  indicator?: string
}

export interface OVPTranslations {
  starting_in: string
}

export interface Translation {
  chromecast?: ChromecastTranslations
  core: CoreTranslations,
  playlist: PlaylistTranslations,
  share: ShareTranslations,
  qsel: QualitySelectionTranslations,
  vtsel?: VideoTrackSelection,
  audio: AudioTranslations,
  speed?: SpeedTranslations,
  ads?: AdsTranslations,
  ovp: OVPTranslations,
  cc: CCTranslations
}

export {
  cs,
  de,
  en,
  es,
  fi,
  fr,
  gr,
  he,
  nb,
  nl,
  nn,
  oc,
  pl,
  pt,
  sk,
  sv,
  tlh,
  tr,
  zh
}
