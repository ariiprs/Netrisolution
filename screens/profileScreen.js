import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Button, Separator as CustomSeparator } from "../components";

const ProfileScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Profile</Text>
      </View>
      <View style={styles.profileContainer}>
        <Image
          source={require('../assets/pp.png')}
          style={styles.avatar}
        />
        <Text style={styles.name}>Rizki</Text>
        <Text style={styles.email}>rizki@gmail.com</Text>
      </View>
      <CustomSeparator h={50} />
      <View style={styles.actionsContainer}>
        <Button
          text={"Edit Profile"}
          op={() => navigation.navigate("EditProfile")}
          full={true}
        />
        <CustomSeparator h={20} />
        <Button
          text={"Keluar"}
          op={() => navigation.navigate("Login")}
          full={true}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: "#ffffff",
  },
  headerContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  headerText: {
    fontFamily: "Inter_600SemiBold",
    color: "#774494",
    fontSize: 30,
  },
  profileContainer: {
    alignItems: "center",
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  name: {
    fontFamily: "Inter_600SemiBold",
    color: "#333333",
    fontSize: 24,
  },
  email: {
    fontFamily: "Inter_400Regular",
    color: "#666666",
    fontSize: 18,
    marginBottom: 20,
  },
  actionsContainer: {
    alignItems: "center",
  },
});

export default ProfileScreen;
