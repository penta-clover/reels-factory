import { z } from "zod";
import {
  AbsoluteFill} from "remotion";
import { CompositionProps } from "../../../types/constants";
import { loadFont } from "@remotion/google-fonts/Inter";
import React from "react";
import { DailyEmotionVideo } from "../components/DailyEmotionV1";

loadFont("normal", {
  subsets: ["latin"],
  weights: ["400", "700"],
});
export const Main = ({ title }: z.infer<typeof CompositionProps>) => {
  return (
    <AbsoluteFill className="bg-white">
      <DailyEmotionVideo />
    </AbsoluteFill>
  );
};
