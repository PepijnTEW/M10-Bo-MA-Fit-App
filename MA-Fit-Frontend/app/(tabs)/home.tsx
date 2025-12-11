import { Text, View, Button, ScrollView } from "react-native";
import React, { useState } from "react";
import { STYLE } from "@/styles/style";
import Pijler from "@/components/pijler";
import Challenge from "@/components/challenge";

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
            color={"#FF00E6"}
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
              value={8}
              amount={10}
              title="Beweging"
              color="#4CAF50"
              isActive={activePijler === "beweging"}
              onOpen={() => setActivePijler("beweging")}
            />
            <Pijler
              value={7}
              amount={10}
              title="Voeding"
              color="#FF9800"
              isActive={activePijler === "voeding"}
              onOpen={() => setActivePijler("voeding")}
            />
            <Pijler
              value={7}
              amount={10}
              title="Ontspanning"
              color="#03A9F4"
              isActive={activePijler === "ontspanning"}
              onOpen={() => setActivePijler("ontspanning")}
            />
            <Pijler
              value={7}
              amount={10}
              title="Slaap"
              color="#3F51B5"
              isActive={activePijler === "slaap"}
              onOpen={() => setActivePijler("slaap")}
            />
          </View>
          <View style={[STYLE.pijlerRow]}>
            <Pijler
              value={7}
              amount={10}
              title="Sociaal"
              color="#FFEB3B"
              isActive={activePijler === "sociaal"}
              onOpen={() => setActivePijler("sociaal")}
            />
            <Pijler
              value={7}
              amount={10}
              title="Structuur"
              color="#607D8B"
              isActive={activePijler === "structuur"}
              onOpen={() => setActivePijler("structuur")}
            />
            <Pijler
              value={7}
              amount={10}
              title="Mindset"
              color="#E91E63"
              isActive={activePijler === "mindset"}
              onOpen={() => setActivePijler("mindset")}
            />
            <Pijler
              value={7}
              amount={10}
              title="Focus"
              color="#9C27B0"
              isActive={activePijler === "focus"}
              onOpen={() => setActivePijler("focus")}
            />
          </View>
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
            <Text style={{ fontSize: 12, marginTop: 4 }}>sigma sigma</Text>
          </View>
        </View>
      )}
    </View>
  );
}
