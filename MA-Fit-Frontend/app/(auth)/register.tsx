import { Text, View, Button } from "react-native";
import { useAppStyles } from "@/styles/style";
import RegisterForm from "@/components/registerform";

export default function register()
{
    const STYLE = useAppStyles();
    return(
        <View style={STYLE.screen}>
            <View style={STYLE.container}>
                <View style={STYLE.header}>
                    <Text style={STYLE.title}>Register</Text>
                </View>
            <RegisterForm/>
            </View>
        </View>
    )
}