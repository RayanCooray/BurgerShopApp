import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { NativeStackNavigationProp } from "react-native-screens/lib/typescript/native-stack/types";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

export default function ProfilePage() {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  function handleEdit() {
    navigation.navigate("Menu");
  }

  const handleSubmit = () => {
    if (!firstName || !lastName || !email || !password) {
      setError("All fields are required");
      return;
    }
    // Handle form submission
    console.log("Form submitted", { firstName, lastName, email, password });
    setError(null);
  };

  return (
    <View style={styles.container}>
      <Ionicons
        name="arrow-back-circle-outline"
        size={24}
        color="black"
        onPress={() => navigation.navigate("Home")}
      />
      <Text style={styles.header}>Profile</Text>

      <View>
        <Image
          source={require("../../assets/img.jpg")}
          style={styles.profileImage}
        />
      </View>
      <TouchableOpacity style={styles.pen}>
        <View>
          <AntDesign
            name="folderopen"
            style={styles.penIcon}
            size={24}
            color="black"
          />
        </View>
      </TouchableOpacity>
      <TextInput
        style={styles.input}
        placeholder="First Name"
        value={firstName}
        onChangeText={setFirstName}
      />
      <TextInput
        style={styles.input}
        placeholder="Last Name"
        value={lastName}
        onChangeText={setLastName}
      />
      <TextInput style={styles.input} placeholder="Address" />
      <TextInput style={styles.input} placeholder="Province" />
      <TextInput style={styles.input} placeholder="Number" />
      <TouchableOpacity style={styles.payButton} onPress={handleEdit}>
        <Text style={styles.buttonText}>Edit Changes</Text>
      </TouchableOpacity>

      <Text style={styles.joionedDate}>Joined Since 2024</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  penIcon: {
    position: "absolute",
    left: 10,
    top: 7,
  },
  pen: {
    position: "absolute",
    left: 230,
    top: 200,
    width: 40,
    height: 40,
    backgroundColor: "#FFAF32",
    borderRadius: 100,
  },
  profileImage: {
    position: "absolute",
    width: 150,
    height: 150,
    borderRadius: 100,
    left: 100,
  },
  joionedDate: {
    fontSize: 17,
    fontWeight: "500",
    color: "black",
    position: "absolute",
    left: 15,
    top: 700,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 16,
    borderRadius: 50,
    top: 170,

    paddingHorizontal: 8,
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  header: {
    left: 30,
    bottom: 25,
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  payButton: {
    backgroundColor: "#FFAF32",
    padding: 15,
    borderRadius: 30,
    top: 170,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
