import { Text, View, ScrollView, Pressable} from "react-native";
import React, { useState, useEffect} from "react";
import { BlurView } from "expo-blur";
import api from "@/lib/api";
import { useAppStyles } from "@/styles/style";
import Pijler from "@/components/pijler";
import Challenge from "@/components/challenge";

type Pillar = {
  id: number;
  name: string;
  slug: string;
  color: string;
  description: string;
  needed_value: number;
};

type Notification = {
  id: number;
  title: string;
  content: string;
}

type Challange = {
  id: number;
  name: string;
  needed_value: number;
}

export default function Home() {
  const [pillars, setPillars] = useState<Pillar[]>([]);
  const [notifications, setNotifications] = useState<Notification>();
  const [challenges, setChallenges] = useState<Challange[]>([]);
  const [activePijler, setActivePijler] = useState<Pillar | null>(null);

  const STYLE = useAppStyles();

  let pijlerValues = [1,2,3,4,5,6,7,8];

  async function fetchData() {
    const [pillarRes , notificationsRes, challengesRes] = await Promise.all([
      api.get("/pillars"),
      api.get("/notifications"),
      api.get("/challenges")
    ]);
    setPillars(pillarRes.data);
    setChallenges(challengesRes.data);
    if (notificationsRes.data.length > 0) {
      const i = Math.floor(Math.random() * notificationsRes.data.length);
      setNotifications(notificationsRes.data[i])
    }
  }
  
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View style={STYLE.screen}>
      <View style={STYLE.container}>
        <View style={STYLE.header}>
        <Text style={STYLE.title}>MA Fit App</Text>
        <View style={STYLE.headerRow}>
          <Text>{notifications?.content}</Text>
          {/* <Pressable onPress={() => { console.log("Pressed");}} style={STYLE.button}>
            <Text style={STYLE.buttonText}>Check in</Text>
          </Pressable> */}
        </View>
      </View>
      <View style={STYLE.content}>
        <View style={[STYLE.pijlerSection, STYLE.box]}>
          <Text style={STYLE.boxTitle}>8 Brein pijlers</Text>
          <View style={[STYLE.pijlerRow]}>
            {pillars.slice(0,4).map((p, i) => (
              <Pijler
                key={p.id}
                value={pijlerValues[i]}
                amount={p.needed_value}
                title={p.name}
                color={p.color}
                isActive={activePijler?.id === p.id}
                onOpen={() => setActivePijler(p)}/>
            ))}
          </View>
          <View style={[STYLE.pijlerRow]}>
              {pillars.slice(4,8).map((p, i) => (
                <Pijler
                  key={p.id}
                  value={pijlerValues[i+4]}
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
            {challenges.map((c) => (
            <Challenge
              key={c.id}
              title={c.name}
              goal={c.needed_value}
              value={4}
            />
          ))}
          </ScrollView>
        </View>
      </View>

      {activePijler && (
        <BlurView
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
            <Text style={{ fontWeight: "600", marginTop: 8 }}>
              Informatie over: {activePijler.name}
            </Text>
            <Text style={{ fontSize: 12, marginTop: 4 }}>{activePijler.description}</Text>
            <Pressable onPress={() => setActivePijler(null)} style={STYLE.button}>
              <Text style={STYLE.buttonText}>X</Text>
            </Pressable>
          </View>
        </BlurView>
      )}
      </View>
    </View>
  );
}
