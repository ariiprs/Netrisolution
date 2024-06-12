import React from "react";
import { View, Text, Image, StyleSheet, ScrollView, Dimensions } from "react-native";

const { height } = Dimensions.get("window");

const NewsDetailScreen = ({ route }) => {
  const { berita } = route.params;

  return (
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Image source={{ uri: berita.img }} style={styles.image} />
        <View style={styles.contentWrapper}>
          <Text style={styles.title}>{berita.judul}</Text>
          <Text style={styles.subtitle}>{berita.subJudul}</Text>
          <View style={styles.contentContainer}>
            <Text style={styles.content}>{berita.deskripsi || "Konten lengkap berita bisa ditampilkan di sini..."}</Text>
          </View>
        </View>
      </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: "#f0f0f5",
  },
  image: {
    width: "100%",
    height: height / 3,
    marginBottom: 5,
    marginTop: 10,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#ddd",
  },
  contentWrapper: {
    padding: 15,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#2c3e50",
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 20,
    color: "#34495e",
    marginBottom: 12,
    fontStyle: "italic",
  },
  contentContainer: {
    backgroundColor: "#ffffff",
    padding: 20,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 6,
    marginBottom: 25,
    borderLeftWidth: 5,
    borderLeftColor: "#eea08a",
  },
  content: {
    fontSize: 18,
    color: "#2c3e50",
    lineHeight: 28,
    textAlign: "justify",
    letterSpacing: 0.5,
  },
});

export default NewsDetailScreen;
