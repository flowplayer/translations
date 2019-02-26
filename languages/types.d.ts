export interface CoreTranslations {
  exit_fullscreen: string,
  fullscreen: string,
  mute: string,
  pause: string,
  play: string,
  unmute: string,
  volume: string
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

export interface Translation {
  core: CoreTranslations,
  playlist: PlaylistTranslations,
  share: ShareTranslations,
  qsel: QualitySelectionTranslations,
  audio: AudioTranslations
}

