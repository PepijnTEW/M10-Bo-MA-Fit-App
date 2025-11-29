import { Text, View, Button, StyleSheet } from "react-native";

export default function Home() {
  return (
    <View style={STYLE.screen}>
      <View style={STYLE.header}>
        <Text style={STYLE.title}>MA Fit App</Text>

        <View style={STYLE.headerRow}>
          <Text>Notification</Text>
          <Button
            title="Check in"
            onPress={() => {
              console.log("Pressed");
            }}
          />
        </View>
      </View>
      <View style={STYLE.content}>
        <View style={[STYLE.box, { backgroundColor: "blue" }]}>
          <Text style={STYLE.boxTitle}>Pijlers</Text>
        </View>
        <View style={[STYLE.box, { backgroundColor: "red" }]}>
          <Text style={STYLE.boxTitle}>Challenges</Text>
        </View>
      </View>
    </View>
  );
}
const STYLE = StyleSheet.create({
  screen: {
    flex: 1,
  },
  header: {
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    marginBottom: 8,
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
    flex: 1,
    margin: 10,
    padding: 10,
    borderRadius: 8,
    justifyContent: "center",
  },
  boxTitle: {
    fontSize: 18,
    fontWeight: "500",
    color: "#fff",
  },
});
