import React from "react";
import { StyleSheet, View } from "react-native";
import Video from "react-native-video";

export default function VideoPlayer() {
  return (
    <View style={styles.container}>
      <Video
        source={require("./YATOS_FURY.mp4")} // Renomeie o arquivo para usar underscore ou camelCase
        style={styles.video}
        controls={true}
        resizeMode="cover"
        repeat={true}
        onError={(e) => console.log(e)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000" // Fundo preto para melhor visualização do vídeo
  },
  video: {
    width: "100%", // Ajuste conforme necessário para melhor visualização
    height: 300 // Ajuste conforme necessário para melhor visualização
  }
});
