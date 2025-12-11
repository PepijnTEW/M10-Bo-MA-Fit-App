import { Text, View } from "react-native";
import { STYLE } from "@/styles/style";
export default function Challenge({
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
