import React, { useState } from "react"
import { StyleSheet, Text, TextInput, View } from "react-native";

export const Signup = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [country, setCountry] = useState('');

  const handleSignup = () => {
    console.log('hanle Signup');
  };

  const navigateToLogin = () => navigation.navigate('Login');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign up</Text>
      <TextInput 
        style={styles.input}
        placeholder="Username..."
        onChangeText={setUsername}
        value={username}
        placeholderTextColor="rgba(0, 0, 0, 0.4"
      />
      <TextInput 
        style={styles.input}
        placeholder="Email..."
        onChangeText={setEmail}
        value={email}
        placeholderTextColor="rgba(0, 0, 0, 0.4"
      />
      <TextInput 
        style={styles.input}
        placeholder="Password..."
        onChangeText={setPassword}
        value={password}
        placeholderTextColor="rgba(0, 0, 0, 0.4"
      />
      <TextInput
        style={styles.input}
        placeholder="Country..."
        onChangeText={setCountry}
        value={country}
        placeholderTextColor="rgba(0, 0, 0, 0.4)"
      />
      <TouchableOpacity style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>Signup</Text>
      </TouchableOpacity>

      <Text style={styles.signupText}>Already have an account?</Text>
      <TouchableOpacity onPress={navigateToLogin}>
        <Text style={styles.link}>Login</Text>
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
    fontWeight: 'bold'
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
    marginBottom: 20
  }
});