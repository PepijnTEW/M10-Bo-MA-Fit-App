import { Text, View } from "react-native";
import LogoutButton from "../(auth)/logout";
import { useAppStyles } from "@/styles/style";

export default function Settings() {
  const STYLE = useAppStyles();

  return (
    <View style={STYLE.screen}>
      <View style={STYLE.container}>
        <View style={STYLE.header}>
          <Text style={STYLE.title}>Settings</Text>
          <Text>Account & sessie</Text>
        </View>
        <View style={STYLE.box}>
          <Text style={STYLE.boxTitle}>App</Text>
          <View style={STYLE.row}>
            <Text>Versie</Text>
            <Text>Alpha 1.0.0</Text>
          </View>
        </View>
          <LogoutButton />
      </View>
    </View>
  );
}
