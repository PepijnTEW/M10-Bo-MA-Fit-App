import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import api from "@/lib/api";
import { Button } from "react-native";

export function LogoutButton(){
    async function logout() {
        try {
            await api.post("/auth/logout");
        }catch{}

        await AsyncStorage.removeItem("token");

        delete api.defaults.headers.common.Authorization;

        router.replace("/login");
    }

    return (
        <Button
            title="Logout"
            color={"#FF00E6"}
            onPress={logout}
        />
    )
}