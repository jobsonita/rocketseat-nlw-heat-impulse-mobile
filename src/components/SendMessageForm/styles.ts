import { StyleSheet } from "react-native";
import { getBottomSpace } from "react-native-iphone-x-helper";

import { COLORS } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    height: 184,
    width: "100%",

    backgroundColor: COLORS.BLACK_TERTIARY,

    paddingBottom: getBottomSpace() + 16,
    paddingHorizontal: 24,
    paddingTop: 16,
  },
  input: {
    width: "100%",
    height: 88,

    color: COLORS.WHITE,
    textAlignVertical: "top",
  },
});
