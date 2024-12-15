import { View, Text, StyleSheet, ImageBackground,Pressable } from "react-native";
import { Link } from "expo-router";
import React from "react";
import BackgroundImage from "@/assets/images/background.png";

const index = () => {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.image} source={BackgroundImage} resizeMode="cover">
        <Text style={styles.title}>Coffee shop</Text>
        <Link href="/contact" style={{marginHorizontal:'auto'}} asChild>
        <Pressable style={styles.button}>
<Text style={styles.buttonText}>Contact Us</Text>
        </Pressable>
         
        </Link>
      </ImageBackground>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    flex: 1,
    justifyContent: "center",
  },
  button:{
height:60,
justifyContent: "center",
borderRadius:20,
backgroundColor:"rgba(0,0,0,0.75)",
padding:6
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    padding: 4,
  },
  title: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
    marginBottom: 120,
  },
});
