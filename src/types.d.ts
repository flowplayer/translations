export interface CoreTranslations {
  exit_fullscreen: string,
  fullscreen: string,
  mute: string,
  pause: string,
  play: string,
  unmute: string,
  volume: string,
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
  button: string,
  menu_title: string
}

export interface SubtitleTranslations {
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
  white  : string,
  yellow : string,
  green  : string,
  cyan   : string,
  blue   : string,
  magenta: string,
  red    : string,
  black  : string,
}

export interface FontFamilyTranslations {
  monospaced_serif        : string,
  proportional_serif      : string,
  monospaced_sans_serif    : string,
  proportional_sans_serif  : string,
  casual                 : string,
  cursive                : string,
}

export interface EdgeStyleTranslations {
  none      : string
  drop_shadow: string
  raised    : string
  depressed : string
  outline   : string
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
  core: CoreTranslations,
  subtitles?: SubtitleTranslations,
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
