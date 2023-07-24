import { View, Text as RnText, StyleSheet } from "react-native";
import React from "react";
import { colors } from "../../theme/colors";
import { typography } from "../../theme/typography";
import { presets } from "./text.preset";

export default function Text({ children , preset="default", style}) {
    const textStyle= StyleSheet.compose(presets[preset], style)
  return <RnText style={textStyle}>{children}</RnText>;
}
