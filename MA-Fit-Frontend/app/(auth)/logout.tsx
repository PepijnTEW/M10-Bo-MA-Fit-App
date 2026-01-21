import AsyncStorage from "@react-native-async-storage/async-storage";
import { Text, Pressable } from "react-native";
import { router } from "expo-router";
import api from "@/lib/api";
import { useAppStyles } from "@/styles/style";

export default function LogoutButton(){
    const STYLE = useAppStyles();

    async function logout() {
        try {
            await api.post("/auth/logout");
        }catch{}

        await AsyncStorage.removeItem("token");

        delete api.defaults.headers.common.Authorization;

        router.replace("/login");
    }

    return (
        <Pressable onPress={logout} style={STYLE.button}>
            <Text style={STYLE.buttonText}>Logout</Text>
        </Pressable>
    )
}