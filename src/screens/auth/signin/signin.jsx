import { 
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import React, { useState } from 'react';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import { useGetCountriesQuery, useSigninMutation } from "@src/store";

export const Login = ({ navigation }) => {
  useGetCountriesQuery();
  const [signin, { isLoading }] = useSigninMutation();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (!email || !password) return Alert.alert('Email and password are required');

    const data = {
      email,
      password,
      uuid: uuidv4(),
      time_zone: new Intl.DateTimeFormat().resolvedOptions().timeZone,
    };
    await signin(data);
  }

  const navigteToSignup = () => navigation.navigate('Signup');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput 
        style={styles.input}
        placeholder="Email..."
        onChangeText={setEmail}
        value={email}
        keyboardType="email-address"
        placeholderTextColor="rgba(0, 0, 0, 0.4"
      />
      <TextInput 
        style={styles.input}
        placeholder="Password..."
        onChangeText={setPassword}
        value={password}
        placeholderTextColor="rgba(0, 0, 0, 0.4"
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <Text style={styles.signupText}>Don&apos;t have an account?</Text>
      <TouchableOpacity onPress={navigteToSignup} disabled={isLoading}>
        <Text style={styles.link}>Sign up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'orange',
    borderRadius: 5,
    marginTop: 20,
    padding: 15
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center'
  },
  input: {
    borderColor: 'gray',
    borderRadius: 15,
    borderWidth: 1,
    fontSize: 18,
    height: 60,
    marginBottom: 20,
    paddingHorizontal: 10,
    width: '80%'
  },
  link: {
    color: 'blue',
    fontSize: 16,
    marginTop: 12
  },
  signupText: {
    fontSize: 16,
    marginTop: 40,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  }
})
