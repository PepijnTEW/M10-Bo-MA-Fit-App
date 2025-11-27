// app/index.tsx
import { View, Text, StyleSheet, StatusBar } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Text style={styles.title}>MA Fit</Text>
      <Text style={styles.subtitle}>
        Check-in met je mentale gezondheid via de 8 Brain Balance pijlers.
      </Text>
      <Text style={styles.placeholder}>
        Hier komen straks: pijler-kaarten, daily quote, en een grote “Check-in”
        knop.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f172a",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#e5e7eb",
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    color: "#9ca3af",
    textAlign: "center",
    marginBottom: 24,
  },
  placeholder: {
    fontSize: 14,
    color: "#6b7280",
    textAlign: "center",
  },
});
