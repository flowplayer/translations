import { satisfies } from "semver"
import { Translation } from ".."
export default {
  ads: {
    ad: "广告",
    ads: "广告",
    advertisement: "广告",
    indicator: "广告",
  },
  audio: {
    button_txt: "声音",
    menu_title: "声音",
  },
  cc: {
    button: "字幕",
    menu_title: "字幕",
  },
  core: {
    exit_fullscreen: "退出全屏",
    fullscreen: "全屏",
    mute: "静音",
    pause: "暂停",
    play: "播放",
    unmute: "取消静音",
    volume: "音量",
  },
  ovp: {
    starting_in: "倒计时",
  },
  playlist: {
    cancel: "取消",
    up_next: "即将播放",
    autoplay: "自动播放"
  },
  qsel: {
    menu_title: "清晰度",
  },
  share: {
    clipboard_failure: "无法复制到剪贴板",
    clipboard_success: "已复制到剪贴板",
    embed: "嵌入",
    link: "链接",
    menu_title: "分享",
  },
  speed: {
    menu_title: "倍速"
  },
  vtsel: {
    button_txt: "视频",
    menu_title: "视频轨道",
  }
} satisfies Translation
