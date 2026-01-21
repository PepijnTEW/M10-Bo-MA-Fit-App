import React, { useState } from "react";
import { View, Text, TextInput, Button, Pressable } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import api from "@/lib/api";
import { useAppStyles } from "@/styles/style";

export default function RegisterForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string|null>(null);

    const STYLE = useAppStyles();

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
        <View style={STYLE.buttonRow}>
            <View>
                <Text>Heb je al een account?</Text>
                <Pressable onPress={()=>{router.replace("/login")}} style={STYLE.secondaryButton}>
                    <Text style={STYLE.secondaryButtonText}>Login</Text>
                </Pressable>
            </View>
            <View>
                <Pressable onPress={handleLogin} style={STYLE.button}>
                    <Text style={STYLE.buttonText}>Register</Text>
                </Pressable>
            </View>
        </View>            
    </View>
    );
}
