import {Link, router, useRouter} from "expo-router";
import {useState} from "react";
import {View, Text, StyleSheet, TextInput, Button} from "react-native";
import {GestureHandlerRootView, ScrollView, TouchableOpacity} from "react-native-gesture-handler";
export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();


  function login() {
    if (username === "admin" && password === "admin") {
      router.push({
        pathname: "/Home",
        params: {username},
      });
    } else if (username === "" && password === "") {
      alert("Please enter username and password");
    } else if (username !== "admin" && password !== "admin") {
      alert("Invalid username and password");
    }
  }
  return (
    <GestureHandlerRootView>
      <ScrollView>
    <View style={styles.container}>
      <Text style={styles.text}>Login</Text>
      <TextInput
        style={styles.inputtext}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry={true}
        style={styles.inputtext}
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity style={styles.button} onPress={login}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
    </ScrollView>
    </GestureHandlerRootView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    color: "blue",
    fontWeight: "bold",
  },
  inputtext: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "gray",
    width: 200,
    height: 40,
    margin: 10,
    padding: 10,
  },
  button: {
    width: 200,
    height: 40,
    backgroundColor: "cyan",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    margin: 10,
  },
});
