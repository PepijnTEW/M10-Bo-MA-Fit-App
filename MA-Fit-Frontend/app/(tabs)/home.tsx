import { Text, View, Button, StyleSheet, ScrollView } from "react-native";

export default function Home() {
  let value = 7;
  const fill = value / 10;
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
        <View style={[STYLE.pijlerSection, STYLE.box]}>
          <Text style={STYLE.boxTitle}>8 Brein pijlers</Text>
          <View style={[STYLE.pijlerRow]}>
            <View style={[STYLE.pijlerContainer]}>
              <View style={[STYLE.pijler]}>
                <View style={[STYLE.innerFill, { height: `${fill * 100}%` }]} />
              </View>
              <Text>Voeding</Text>
            </View>
            <View style={[STYLE.pijlerContainer]}>
              <View style={[STYLE.pijler]}></View>
              <Text>Beweging</Text>
            </View>
            <View style={[STYLE.pijlerContainer]}>
              <View style={[STYLE.pijler]}></View>
              <Text>Slaap</Text>
            </View>
            <View style={[STYLE.pijlerContainer]}>
              <View style={[STYLE.pijler]}></View>
              <Text>Mindset</Text>
            </View>
          </View>
          <View style={[STYLE.pijlerRow, {}]}>
            <View style={[STYLE.pijlerContainer]}>
              <View style={[STYLE.pijler]}></View>
              <Text>Stress</Text>
            </View>
            <View style={[STYLE.pijlerContainer]}>
              <View style={[STYLE.pijler]}></View>
              <Text>Sociaal</Text>
            </View>
            <View style={[STYLE.pijlerContainer]}>
              <View style={[STYLE.pijler]}></View>
              <Text>Omgeving</Text>
            </View>
            <View style={[STYLE.pijlerContainer]}>
              <View style={[STYLE.pijler]}></View>
              <Text>Zelfregie</Text>
            </View>
          </View>
        </View>
        <View style={[STYLE.challangeSection, STYLE.box]}>
          <Text style={STYLE.boxTitle}>Challenges</Text>
          <ScrollView>
            <View style={[STYLE.box, STYLE.challangeContainer]}>
              <Text style={[STYLE.challangeTitle]}>Challenge Title</Text>
              <View style={[STYLE.challangeProgress]}></View>
            </View>
            <View style={[STYLE.box, STYLE.challangeContainer]}>
              <Text style={[STYLE.challangeTitle]}>Challenge Title</Text>
              <View style={[STYLE.challangeProgress]}></View>
            </View>
            <View style={[STYLE.box, STYLE.challangeContainer]}>
              <Text style={[STYLE.challangeTitle]}>Challenge Title</Text>
              <View style={[STYLE.challangeProgress]}></View>
            </View>
            <View style={[STYLE.box, STYLE.challangeContainer]}>
              <Text style={[STYLE.challangeTitle]}>Challenge Title</Text>
              <View style={[STYLE.challangeProgress]}></View>
            </View>
            <View style={[STYLE.box, STYLE.challangeContainer]}>
              <Text style={[STYLE.challangeTitle]}>Challenge Title</Text>
              <View style={[STYLE.challangeProgress]}></View>
            </View>
          </ScrollView>
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
    margin: 5,
    padding: 5,
    borderRadius: 8,
    shadowRadius: 3,
    shadowOpacity: 0.3,
  },
  boxTitle: {
    fontSize: 18,
    fontWeight: "500",
    color: "black",
    textAlign: "center",
    marginBottom: 2.5,
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
    width: 25,
    borderRadius: 50,
    backgroundColor: "lightgray",
    borderStyle: "solid",
    borderColor: "black",
    borderWidth: 2,
    justifyContent: "flex-end",
    overflow: "hidden",
  },
  innerFill: {
    width: "100%",
    backgroundColor: "blue",
    borderRadius: 50,
  },
  challangeSection: { flex: 0.4 },
  challangeContainer: {
    backgroundColor: "lightgray",
    gap: 2,
  },
  challangeTitle: {},
  challangeProgress: {
    borderRadius: 50,
    backgroundColor: "white",
    height: 10,
    width: "100%",
  },
});
