import React from "react";
import { View, Text, StyleSheet } from "react-native";

const EditProfile = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Edit Profile Screen</Text>
      {/* Tambahkan komponen form atau lainnya sesuai kebutuhan */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  text: {
    fontFamily: "Inter_600SemiBold",
    color: "#333333",
    fontSize: 24,
  },
});

export default EditProfile;
