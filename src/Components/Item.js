import React, { useMemo, useState } from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import Details from "../Screens/Details";

const Item = ({ item }) => {
  const [currentId, setCurrentId] = useState(null);
  const calculateDetails = (item) => {
    // Simulate heavy computation by delaying for 1 second
    console.log("Heavy computation started");
    const startTime = performance.now();
    const delay = new Promise((resolve) => setTimeout(resolve, 1000));
    delay.then(() => {
      console.log(
        `Heavy computation for item ${item.id} took ${
          (performance.now() - startTime) / 1000
        } seconds`
      );
    });
    return `Additional details for post ${item.id}`;
  };

  useMemo(() => calculateDetails(item), [item]);

  const handleItemPress = (item) => {
    setCurrentId(item?.id);
  };

  return (
    <View style={styles.container}>
      <Text>ID: {item?.id}</Text>
      <Text>Title: {item?.title}</Text>
      <Pressable onPress={() => handleItemPress(item)}>
        <Text>View Details</Text>
      </Pressable>
      {currentId === item?.id && <Details postId={item.id} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 10, borderBottomWidth: 1, borderColor: "#ccc" },
});
export default Item;
