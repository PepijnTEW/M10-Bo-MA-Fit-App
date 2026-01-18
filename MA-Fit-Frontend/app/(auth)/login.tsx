import { Text, View, Button } from "react-native";
import { STYLE } from "@/styles/style";
import LoginForm from "@/components/loginform";

export default function login()
{
    return(
        <View style={STYLE.screen}>
            <View style={STYLE.header}>
                <Text style={STYLE.title}>Login</Text>
            </View>
            <LoginForm/>
        </View>
    )
}