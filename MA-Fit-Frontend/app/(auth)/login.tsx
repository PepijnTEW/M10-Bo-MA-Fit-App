import { Text, View, Button } from "react-native";
import { useAppStyles } from "@/styles/style";
import LoginForm from "@/components/loginform";

export default function login()
{
    const STYLE = useAppStyles();
    return(
        <View style={STYLE.screen}>
            <View style={STYLE.container}>
                <View style={STYLE.header}>
                    <Text style={STYLE.title}>Login</Text>
                </View>
            <LoginForm/>
            </View>
        </View>
    )
}