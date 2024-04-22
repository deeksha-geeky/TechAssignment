import { useCallback, useEffect, useState } from "react";
import { ActivityIndicator, Text, View } from "react-native";
import { GET_POSTS } from "../API/constants";

const Details = ({ postId }) => {
  const [postDetails, setPostDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchPostDetails = useCallback(async () => {
    setIsLoading(true);
    const response = await fetch(`${GET_POSTS}/${postId}`);
    const data = await response.json();
    setPostDetails(data);
    setIsLoading(false);
    console.log("Child component re-rendered");
  }, [postId]);

  useEffect(() => {
    fetchPostDetails();
  }, [fetchPostDetails]);

  if (isLoading) {
    return <ActivityIndicator />;
  }

  return (
    <View style={{ padding: 20 }}>
      <Text>{postDetails?.body}</Text>
    </View>
  );
};

export default Details;
