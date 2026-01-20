import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import api from "@/lib/api";
import { router } from "expo-router";
import { STYLE } from "@/styles/style";

export default function RegisterForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string|null>(null);

    async function handleLogin() {
        setLoading(true);
        setError(null);

        if (password == confirmPassword){
            try {
                const RES = await api.post("/auth/register", {name, email, password, password_confirmation: confirmPassword});
                const TOKEN = RES.data.token;

                await AsyncStorage.setItem('token', TOKEN);
                api.defaults.headers.common.Authorization = 'Bearer ${TOKEN}';
                
                router.replace("/");
            }catch (e:any){
                setError('Oeps iets ging fout');
            }finally {
                setLoading(false);
            }
        }else {
            console.log("fuck you");
        }

    }

    return (
        <View style={STYLE.content}>
        <View style={STYLE.box}>
            <Text style={STYLE.boxTitle}>Username</Text>
            <TextInput style={STYLE.textInput}
            value={name}
            onChangeText={setName}/>
        </View>
        <View style={STYLE.box}>
            <Text style={STYLE.boxTitle}>E-mail</Text>
            <TextInput
                style={STYLE.textInput}
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
                keyboardType="email-address"/>
        </View>
        <View style={STYLE.box}>
            <Text style={STYLE.boxTitle}>Wachtwoord</Text>
            <TextInput
                style={STYLE.textInput}
                value={password}
                onChangeText={setPassword}
                secureTextEntry/>

            <Text style={STYLE.boxTitle}>Confirm wachtwoord</Text>
            <TextInput
                style={STYLE.textInput}
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry/>
        </View>
        <Text>Heb je al een account?</Text>
              <Button title="Login" onPress={()=>{router.replace("/login")}}/>
            <Button title="Register" onPress={handleLogin} />
        </View>
    );
}
