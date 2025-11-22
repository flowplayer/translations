import cs from "./languages/cs"
import da from "./languages/da"
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
import hi from "./languages/hi"
/**
 * @public
 */
export interface CoreTranslations {
  exit_fullscreen: string,
  fullscreen: string,
  mute: string,
  muted?: string, // aria-label for the volume button when muted
  pause: string,
  seconds?: string,
  timeline_aria_label?: string,
  play: string,
  unmute: string,
  volume: string,
  close?: string, // (float-on-scroll plugin) Hide floating player in 
  "skip-next"?: string, // (playlist plugin) Go to the next media 
  "skip-prev"?: string // (playlist plugin)  Go to the previous media
}

/**
 * @public
 */
export interface ChromecastTranslations {
  start: string,
  stop: string,
  message?: string // text reporting current connection state
}

/**
 * @public
 */
export interface PlaylistTranslations {
  up_next: string,
  cancel: string,
  autoplay: string,
  now_playing?: string, // text showing which video is playing now
  turn_off_autoplay?: string, // checkbox to turn off/on autoplay
  playlist?: string // default title for unnamed playlist
}

/**
 * @public
 */
export interface ShareTranslations {
  clipboard_failure: string,
  clipboard_success: string,
  embed: string,
  link: string,
  menu_title: string
}

/**
 * @public
 */
export interface QualitySelectionTranslations {
  menu_title: string
}

/**
 * @public
 */
export interface AudioTranslations {
  button_txt: string,
  menu_title: string
}

/**
 * @public
 */
export interface VideoTrackSelection {
  button_txt: string,
  menu_title: string
}

/**
 * @public
 */
export interface SpeedTranslations {
  menu_title: string;
}

/**
 * @public
 */
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

/**
 * @public
 */
export interface StylePropertiesTranslations {
  fontSize           : string,
  fontFamily         : string,
  fontColor          : string,
  fontOpacity        : string,
  backgroundColor    : string,
  backgroundOpacity  : string,
  characterEdgeStyle : string,
}

/**
 * @public
 */
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

/**
 * @public
 */
export interface FontFamilyTranslations {
  "Monospaced Serif": string,
  "Proportional Serif": string,
  "Monospaced Sans-Serif": string,
  "Proportional Sans-Serif": string,
  Casual: string,
  Cursive: string,
}

/**
 * @public
 */
export interface EdgeStyleTranslations {
  None: string,
  Raised: string,
  Depressed: string,
  Outline: string
  "Drop shadow": string,
}

/**
 * @public
 */
export interface AdsTranslations {
  ad: string,
  ads: string,
  advertisement: string,
  indicator?: string, // text indicating to the users that an ad is currently running
  adchoices?: string // text for customizing Google Ads preferences
}

/**
 * @public
 */
export interface OVPTranslations {
  starting_in: string
}

/**
 * @public
 */
export interface RTSTranslations {
  millicast?: {
    inactive?: string // text that is shown to the user when broadcast becomes inactive
  }
}

/**
 * @public
 */
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
  cc: CCTranslations,
  rts?: RTSTranslations
}

export {
  cs,
  da,
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
  zh,
  hi
}
