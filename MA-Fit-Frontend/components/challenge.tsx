import { Text, View } from "react-native";
import { useAppStyles } from "@/styles/style";

export default function Challenge({ value, goal, title} : { value: number; goal: number; title: string;})
{
  const STYLE = useAppStyles()
  const fill = value / goal;

  return (
    <View style={[STYLE.box, STYLE.challangeContainer]}>
      <Text style={[STYLE.challangeTitle]}>{title}</Text>
      <View style={[STYLE.challangeProgress]}>
        <View
          style={[
            STYLE.innerFill,
            { width: `${fill * 100}%`, height: "100%", backgroundColor: "red" },
          ]}
        />
      </View>
    </View>
  );
}
