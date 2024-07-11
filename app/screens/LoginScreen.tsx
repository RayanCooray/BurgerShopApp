import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { NativeStackNavigationProp } from "react-native-screens/lib/typescript/native-stack/types";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { TextInput } from "react-native-gesture-handler";

export default function LoginScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const handleGoToHome = () => {
    // Navigate to the home screen or perform desired action
    navigation.goBack(); // Replace with your actual navigation logic
  };

  const handleLogin = () => {
    // Handle action for "Login"
    navigation.navigate("Menu"); // Replace with actual navigation logic
  };

  return (
    <LinearGradient
      colors={["#1C1D29", "#666"]}
      style={styles.container}
      start={{ x: 0.5, y: 1 }}
      end={{ x: 0.5, y: 0 }}
    >
      <TouchableOpacity style={styles.backArrow} onPress={handleGoToHome}>
        <Ionicons name="chevron-back-circle-outline" size={35} color="white" />
      </TouchableOpacity>

      <View style={styles.underbox}>
        <Text style={styles.loginText}>Login</Text>
        <Text style={styles.loginTextunder}>Continue with Google</Text>
        <Image
          source={require("../../assets/googlesignup.png")}
          style={styles.imageGoogle}
        ></Image>
        <TextInput
          style={styles.textinputEmail}
          placeholder="Email"
          placeholderTextColor={"white"}
        />
        <TouchableOpacity style={styles.buttonforgot} onPress={handleGoToHome}>
          <Text style={styles.textforgot} onPress={handleGoToHome}>
            Forgot Account?
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonLogin} onPress={handleLogin}>
          <Text style={styles.textLogin}>Login</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  textforgot: {
    color: "blue",
    fontSize: 15,
    position: "absolute",
    fontWeight: "200",
    top: 10,
    left: 50,
  },
  buttonforgot: {
    position: "absolute",
    top: 250,
    left: "25%",
    borderRadius: 7,
  },
  buttonLogin: {
    position: "absolute",
    height: 50,
    width: 200,
    top: 300,
    left: "25%",
    backgroundColor: "rgb(37, 99, 235)",
    borderRadius: 7,
  },
  textLogin: {
    position: "absolute",
    color: "white",
    fontSize: 20,
    fontWeight: "500",
    left: 70,
    top: 11,
  },
  loginTextunder: {
    color: "white",
    fontSize: 15,
    position: "absolute",
    fontWeight: "200",
    top: 160,
    left: 30,
  },
  loginText: {
    color: "white",
    fontSize: 30,
    position: "absolute",
    fontWeight: "700",
    top: 120,
    left: 30,
  },
  textinputEmail: {
    height: 50,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 16,
    borderRadius: 10,
    top: 190,
    width: 370,
    left: 23,
    paddingHorizontal: 8,
  },
  imageGoogle: {
    width: 50,
    height: 50,
    position: "absolute",
    left: "45%",
    top: "8%",
  },
  underbox: {
    position: "absolute",
    top: "45%",
    // left: '50%',
    // transform: [{ translateX: -50 }, { translateY: -50 }],
    width: "100%",
    height: 600,
    borderRadius: 7,
    backgroundColor: "#1C1D29",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  backArrow: {
    position: "absolute",
    right: "88%",
    bottom: "90%",
  },
});
