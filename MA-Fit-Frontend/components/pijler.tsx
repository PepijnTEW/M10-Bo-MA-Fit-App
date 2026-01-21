import { Text, View, Pressable } from "react-native";
import { useAppStyles } from "@/styles/style";
export default function Pijler({ value, amount, title, color, onOpen, }: { value: number; amount: number; title: string; color: string; isActive: boolean; onOpen: () => void;})
{
  const STYLE = useAppStyles();
  const fill = value / amount;

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
