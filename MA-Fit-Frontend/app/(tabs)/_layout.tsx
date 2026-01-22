import AsyncStorage from "@react-native-async-storage/async-storage";
import { Tabs, router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import api from "@/lib/api";
import Head from "expo-router/head";

export default function Layout() {

  useEffect(()=>{
    async function checkToken(){
      const token = await AsyncStorage.getItem("token");
      
      if (!token) {
        router.replace("/login");
        return
      }
      api.defaults.headers.common.Authorization = 'Bearer ${token}';
      router.replace("/");
    }
    checkToken();
  })

  return (
    <>
      <Head>
        <title>MA Fit – Mental Awareness App</title>
        <meta
          name="description"
          content="MA Fit helpt gebruikers hun mentale welzijn te verbeteren via check-ins, 8 breinpijlers en challenges."
        />
      </Head>
      <StatusBar style="light" />
      <Tabs screenOptions={{ headerShown: false }}></Tabs>
    </>
  );
}
