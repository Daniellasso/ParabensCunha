import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import Routes from "./src/routes";

export default function App() {
  return (
    <>
      <StatusBar backgroundColor="#7D20FF" barStyle="light-content" />
      <Routes />
    </>
  );
}
