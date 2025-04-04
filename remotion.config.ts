// See all configuration options: https://remotion.dev/docs/config
// Each option also is available as a CLI flag: https://remotion.dev/docs/cli

// Note: When using the Node.JS APIs, the config file doesn't apply. Instead, pass options directly to the APIs

import { Config } from "@remotion/cli/config";
import { webpackOverride } from "./src/remotion/webpack-override.mjs";

import {DailyEmotionVideo} from './src/remotion/components/DailyEmotionV1';

export const compositions = [
  {
    id: 'DailyEmotionVideo',
    component: DailyEmotionVideo,
    durationInFrames: 210, // 예: 7초 (30fps 기준)
    fps: 30,
    width: 1080,
    height: 1920,
  },
  // 다른 컴포지션이 있다면 함께 등록
];

Config.setVideoImageFormat("jpeg");

Config.overrideWebpackConfig(webpackOverride);
