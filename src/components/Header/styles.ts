import { StyleSheet } from "react-native";

import { COLORS, FONTS } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    width: "100%",

    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",

    paddingHorizontal: 20,
  },
  logoutButton: {
    alignItems: "center",
    flexDirection: "row",
  },
  logoutText: {
    marginRight: 20,

    color: COLORS.WHITE,
    fontFamily: FONTS.REGULAR,
    fontSize: 15,
  },
});
