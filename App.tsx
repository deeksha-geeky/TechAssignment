import React, { useState, useEffect, useMemo, useCallback } from "react";
import { Text, View, ActivityIndicator, StyleSheet } from "react-native";
import LandingPage from "./src/Screens/LandingPage.js";
import { GET_POSTS } from "./src/API/constants";

const fetchData = async () => {
  const response = await fetch(GET_POSTS);
  const data = await response.json();
  return data;
};

const App = () => {
  return (
    <View style={styles.container}>
      <LandingPage />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
  },
});

export default App;
