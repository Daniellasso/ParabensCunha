import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

export default function Parabens({ navigation }) {
  return (
    <View style={styles.continer}>
      <View style={styles.card}>
        <Text style={styles.title}>
          Feliz Aniversario Cunha que esse seu dia seja repleto de momentos
          alegres e inesquecíveis, que esse seu novo ano de vida você possa
          aproveitar ao maximos essa nova fazer que começou. Feliz Aniversario
          Cunha 🎉
        </Text>
        <TouchableOpacity
          style={{ height: "100%" }}
          onPress={() => navigation.navigate("Home")}
        >
          <View style={styles.image}>
            <Image
              style={styles.image}
              source={require("./assets/image.png")}
            />
          </View>
        </TouchableOpacity>
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
    borderBottomWidth: 5,
    borderLeftWidth: 5,
    borderColor: "#000"
  },
  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold"
  },
  image: {
    width: "100%",
    height: "80%",
    borderRadius: 50,
    marginTop: 10
  }
});
