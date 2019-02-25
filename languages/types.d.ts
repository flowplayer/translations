interface CoreTranslations {
  exit_fullscreen: string,
  fullscreen: string,
  mute: string,
  pause: string,
  play: string,
  unmute: string,
  volume: string
}

interface PlaylistTranslations {
  up_next: string,
  cancel: string
}

export interface Translation {
  core: CoreTranslations,
  playlist: PlaylistTranslations
}

