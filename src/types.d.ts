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
  cancel: string,
  autoplay: string,
  now_playing?: string
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
