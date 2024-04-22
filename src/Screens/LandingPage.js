import React, { useState, useEffect } from "react";
import { StyleSheet, FlatList } from "react-native";
import Item from "../Components/Item";
import { GET_POSTS } from "../API/constants";

const LandingPage = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await fetch(GET_POSTS);
    const data = await response.json();
    return data;
  };

  useEffect(() => {
    const getData = async () => {
      const fetchedData = await fetchData();
      setData(fetchedData);
    };
    getData();
  }, []);

  const renderItem = ({ item }) => <Item item={item} />;

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
};

export default LandingPage;
