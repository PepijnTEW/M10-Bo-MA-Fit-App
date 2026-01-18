import { Text, View, Button, ScrollView, FlatList} from "react-native";
import React, { useState, useEffect} from "react";
import { STYLE } from "@/styles/style";
import Pijler from "@/components/pijler";
import Challenge from "@/components/challenge";
import api from "@/lib/api";



export default function Home() {
  const [pillars, setPillars] = useState<Pillar[]>([]);
  const [activePijler, setActivePijler] = useState<Pillar | null>(null);

  type Pillar = {
  id: number;
  name: string;
  slug: string;
  color: string;
  description: string;
  needed_value: number;
};

  useEffect(() => {
  api.get("/pillars").then((res) => {
    setPillars(res.data);
  });
}, []);

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
            {pillars.slice(0,4).map((p) => (
              <Pijler
                key={p.id}
                value={0}
                amount={p.needed_value}
                title={p.name}
                color={p.color}
                isActive={activePijler?.id === p.id}
                onOpen={() => setActivePijler(p)}/>
            ))}
          </View>
          <View style={[STYLE.pijlerRow]}>
              {pillars.slice(4,8).map((p) => (
                <Pijler
                  key={p.id}
                  value={0}
                  amount={p.needed_value}
                  title={p.name}
                  color={p.color}
                  isActive={activePijler?.id === p.id}
                  onOpen={() => setActivePijler(p)}/>
            ))}
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
              Informatie over: {activePijler.name}
            </Text>
            <Text style={{ fontSize: 12, marginTop: 4 }}>{activePijler.description}</Text>
          </View>
        </View>
      )}
    </View>
  );
}
