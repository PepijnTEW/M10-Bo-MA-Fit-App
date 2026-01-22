import { StyleSheet, useWindowDimensions } from "react-native";
import { COLORS } from "./colors";

export function useAppStyles()
{
  const {width} = useWindowDimensions();
  const isTablet = width >= 768;

return StyleSheet.create ({
  screen: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: isTablet ? 20 : 12,
  },

  container: {
    width: "100%",
    ...(isTablet ? { maxWidth: 800, alignSelf: "center" } : null),
    height: "100%",
  },

  header: {
    paddingHorizontal: 4,
    paddingTop: 4,
    paddingBottom: 12,
    padding: isTablet ? 20 : 12,
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

  row:{
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    gap: isTablet ? 28 : 16, 
  },

  buttonRow:{
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
    gap: isTablet ? 28 : 16, 
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
    justifyContent: "center",
    gap: isTablet ? 28 : 16, 
  },

  pijlerContainer: {
    flex: 1,
    alignItems: "center",
  },

  pijler: {
    height: "80%",
    width: 25,
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
    color: COLORS.text,
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
  },

  button: {
    backgroundColor: COLORS.primary,
    paddingVertical: 14,
    paddingHorizontal: 18,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.12,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
  },

  secondaryButton: {
    backgroundColor: COLORS.background,
    paddingVertical: 14,
    paddingHorizontal: 18,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1.5,
    borderColor: COLORS.borderLight,
  },

  buttonText: {
    fontWeight: "700",
    fontSize: 15,
    color: "#FFFFFF",
  },

  secondaryButtonText: {
    fontWeight: "600",
    fontSize: 15,
    color: COLORS.primary,
  },
}
)}