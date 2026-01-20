import { Text, View } from "react-native";
import { LogoutButton } from "../(auth)/logout";

export default function Settings() {
  return (
    <View>
      <Text>Profile</Text>
      <LogoutButton/>
    </View>
  );
}
