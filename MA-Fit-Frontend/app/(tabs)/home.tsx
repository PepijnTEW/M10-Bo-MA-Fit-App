import {
  Text,
  View,
  Button,
  StyleSheet,
  ScrollView,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { COLORS } from "../../styles/colors";
function Pijler({
  value,
  title,
  color,
  onOpen,
}: {
  value: number;
  title: string;
  color: string;
  isActive: boolean;
  onOpen: () => void;
}) {
  const fill = value / 10;
  return (
    <Pressable style={[STYLE.pijlerContainer]} onPress={onOpen}>
      <View style={[STYLE.pijler]}>
        <View
          style={[
            STYLE.innerFill,
            { height: `${fill * 100}%`, backgroundColor: color },
          ]}
        />
      </View>
      <Text>{title}</Text>
    </Pressable>
  );
}
function Challenge({
  value,
  goal,
  title,
  color,
}: {
  value: number;
  goal: number;
  title: string;
  color: string;
}) {
  const fill = value / goal;
  return (
    <View style={[STYLE.box, STYLE.challangeContainer]}>
      <Text style={[STYLE.challangeTitle]}>{title}</Text>
      <View style={[STYLE.challangeProgress]}>
        <View
          style={[
            STYLE.innerFill,
            { width: `${fill * 100}%`, height: "100%", backgroundColor: color },
          ]}
        />
      </View>
    </View>
  );
}
export default function Home() {
  const [activePijler, setActivePijler] = useState<string | null>(null);
  return (
    <View style={STYLE.screen}>
      <View style={STYLE.header}>
        <Text style={STYLE.title}>MA Fit App</Text>
        <View style={STYLE.headerRow}>
          <Text>Notification</Text>
          <Button
            title="Check in"
            color={COLORS.primary}
            onPress={() => {
              console.log("Pressed");
            }}
          />
        </View>
      </View>
      <View style={STYLE.content}>
        <View style={[STYLE.pijlerSection, STYLE.box]}>
          <Text style={STYLE.boxTitle}>8 Brein pijlers</Text>
          <View style={[STYLE.pijlerRow]}>
            <Pijler
              value={7}
              title="Voeding"
              color="red"
              isActive={activePijler === "Voeding"}
              onOpen={() => setActivePijler("Voeding")}
            />
            <Pijler
              value={7}
              title="test"
              color="red"
              isActive={activePijler === "test"}
              onOpen={() => setActivePijler("test")}
            />
            <Pijler
              value={7}
              title="test2"
              color="red"
              isActive={activePijler === "test2"}
              onOpen={() => setActivePijler("test2")}
            />
          </View>
          <View style={[STYLE.pijlerRow]}></View>
        </View>
        <View style={[STYLE.challangeSection, STYLE.box]}>
          <Text style={STYLE.boxTitle}>Challenges</Text>
          <ScrollView>
            <Challenge value={1} goal={3} title="3 dagen focus" color="red" />
            <Challenge
              value={4}
              goal={5}
              title="5 dagen slaap routine"
              color="red"
            />
            <Challenge
              value={2}
              goal={7}
              title="7 dagen stress less"
              color="red"
            />
          </ScrollView>
        </View>
      </View>

      {activePijler && (
        <View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0,0,0,0.5)",
            zIndex: 999,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              backgroundColor: "white",
              padding: 20,
              borderRadius: 12,
              width: "80%",
            }}
          >
            <Button title="X" onPress={() => setActivePijler(null)} />
            <Text style={{ fontWeight: "600", marginTop: 8 }}>
              Informatie over: {activePijler}
            </Text>
            <Text style={{ fontSize: 12, marginTop: 4 }}>
              Hier kun je later echte tips/tekst per pijler zetten.
            </Text>
          </View>
        </View>
      )}
    </View>
  );
}
const STYLE = StyleSheet.create({
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
});
