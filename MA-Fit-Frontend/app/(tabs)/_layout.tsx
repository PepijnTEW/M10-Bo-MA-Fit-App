import AsyncStorage from "@react-native-async-storage/async-storage";
import { Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import api from "@/lib/api";
import { router } from "expo-router";
export default function Layout() {

  useEffect(()=>{
    async function checkToken(){
      const token = await AsyncStorage.getItem("token");
      
      if (!token) {
        router.replace("/login");
      }
      if (token) {
        api.defaults.headers.common.Authorization = 'Bearer ${token}';
        router.replace("/");
      }
    }
    checkToken();
  })

  return (
    <>
      <StatusBar style="light" />
      <Tabs screenOptions={{ headerShown: false }}></Tabs>
    </>
  );
}
