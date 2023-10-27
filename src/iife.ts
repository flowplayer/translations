import * as langs from "./index"

interface IFlowplayer {
  (): void;
  i18n?: Record<string, any>
}

type FlowplayerUMDStates =
  | void
  | IFlowplayer

declare const flowplayer: FlowplayerUMDStates

const def = () : void => {
  if ( typeof flowplayer == "function" && flowplayer.i18n) return void Object.assign(flowplayer.i18n, langs)
}

~(function __main() : void {
  if (typeof flowplayer == "function" && flowplayer.i18n) return void def()
  window.addEventListener("flowplayer:umd", def)
}())

