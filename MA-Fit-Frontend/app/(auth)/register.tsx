import { Text, View, Button } from "react-native";
import { STYLE } from "@/styles/style";
import RegisterForm from "@/components/registerform";

export default function register()
{
    return(
        <View style={STYLE.screen}>
            <View style={STYLE.header}>
                <Text style={STYLE.title}>Register</Text>
            </View>
            <RegisterForm/>
        </View>
    )
}