import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const navigation = useNavigation();
  return (
    <View style={styles.continer}>
      <View style={styles.card}>
        <Text style={styles.title}>Feliz Aniversario Cunha 🎉</Text>
        <View style={{ justifyContent: "center", flex: 1 }}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Parabens")}
          >
            <Text style={styles.buttonText}>Parabéns!</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  continer: {
    flex: 1,
    backgroundColor: "#D3A0FC"
  },
  card: {
    backgroundColor: "#FE66C5",
    padding: 20,
    borderRadius: 50,
    height: "95%",
    width: "95%",
    marginHorizontal: 10,
    marginVertical: 20,
    opacity: 0.7,
    borderBottomWidth: 5,
    borderLeftWidth: 5,
    borderColor: "#000"
  },
  title: {
    color: "#fff",
    fontSize: 48,
    fontWeight: "bold"
  },
  button: {
    backgroundColor: "#744CFC",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    borderBottomWidth: 5,
    borderLeftWidth: 5,
    borderColor: "#000"
  },
  buttonText: {
    color: "#fff",
    fontSize: 40,
    fontWeight: "bold"
  }
});
