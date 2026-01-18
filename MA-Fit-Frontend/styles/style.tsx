import { StyleSheet } from "react-native";
import { COLORS } from "./colors";
export const STYLE = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: 12,
  },

  header: {
    paddingHorizontal: 4,
    paddingTop: 4,
    paddingBottom: 12,
  },

  title: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 4,
    color: COLORS.text,
  },

  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  content: {
    flex: 1,
    flexDirection: "column",
  },

  box: {
    marginHorizontal: 4,
    marginVertical: 6,
    padding: 12,
    borderRadius: 16,
    backgroundColor: COLORS.cardBackground,
    shadowColor: "#000",
    shadowRadius: 8,
    shadowOpacity: 0.06,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },

  boxTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: COLORS.text,
    textAlign: "center",
    marginBottom: 8,
  },

  pijlerSection: {
    flex: 0.6,
  },

  pijlerRow: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },

  pijlerContainer: {
    flex: 1,
    alignItems: "center",
  },

  pijler: {
    height: "80%",
    width: 28,
    borderRadius: 999,
    backgroundColor: COLORS.pillarTrack,
    borderStyle: "solid",
    borderColor: COLORS.borderLight,
    borderWidth: 1,
    justifyContent: "flex-end",
    overflow: "hidden",
  },

  innerFill: {
    width: "100%",
    borderRadius: 999,
  },

  challangeSection: {
    flex: 0.4,
  },

  challangeContainer: {
    backgroundColor: COLORS.cardBackground,
    gap: 6,
  },

  challangeTitle: {
    fontSize: 14,
    fontWeight: "500",
    color: COLORS.textMuted,
    marginBottom: 4,
  },

  challangeProgress: {
    borderRadius: 999,
    backgroundColor: COLORS.pillarTrack,
    height: 10,
    width: "100%",
    overflow: "hidden",
  },

  textInput: {
    marginHorizontal: 4,
    marginVertical: 6,
    padding: 12,
    borderRadius: 16,
    backgroundColor: COLORS.cardBackground,
    borderStyle: "solid",
    borderColor: COLORS.borderLight,
    borderWidth: 2,
    shadowColor: "#000",
    shadowRadius: 8,
    shadowOpacity: 0.06,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  }
});
