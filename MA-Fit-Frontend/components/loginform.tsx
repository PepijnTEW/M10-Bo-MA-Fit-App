import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { STYLE } from "@/styles/style";
import api from "@/lib/api";
import { router } from "expo-router";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string|null>(null);
  
  async function handleLogin() {
    setLoading(true);
    setError(null);
    try {
      const RES = await api.post("/auth/login", {email, password});
      const TOKEN = RES.data.token;

      await AsyncStorage.setItem('token', TOKEN);
      api.defaults.headers.common.Authorization = 'Bearer ${TOKEN}';

      router.replace("/");
    }catch (e:any){
      setError('Inloggen mislukt');
    }finally {
      setLoading(false);
    }
  }

  return (
    <View style={STYLE.content}>
    <View style={STYLE.box}>
        <Text style={STYLE.boxTitle}>E-mail</Text>
        <TextInput
            style={STYLE.textInput}
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            keyboardType="email-address"
        />
    </View>
    <View style={STYLE.box}>
        <Text style={STYLE.boxTitle}>Wachtwoord</Text>
        <TextInput
            style={STYLE.textInput}
            value={password}
            onChangeText={setPassword}
            secureTextEntry
      />
    </View>
      <Text>Geen account?</Text>
      <Button title="Register" onPress={()=>{router.replace("/register")}}/>
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}
