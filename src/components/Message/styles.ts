import { StyleSheet } from "react-native";

import { COLORS, FONTS } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: 36,
  },
  message: {
    marginBottom: 12,

    color: COLORS.WHITE,
    fontFamily: FONTS.REGULAR,
    fontSize: 15,
    lineHeight: 20,
  },
  footer: {
    width: "100%",

    alignItems: "center",
    flexDirection: "row",
  },
  userName: {
    marginLeft: 16,

    color: COLORS.WHITE,
    fontFamily: FONTS.REGULAR,
    fontSize: 15,
  },
});
