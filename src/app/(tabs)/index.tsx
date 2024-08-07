import { View, Text, Image, FlatList, FlatListComponent } from "react-native";
import React from "react";
import posts from "~/assets/data/posts.json";
// import { AntDesign, Ionicons, Feather } from "@expo/vector-icons";
import PostListItem from "~/src/component/PostListItem";

export default function FeedScreen() {
  return (
    <FlatList
      data={posts}
      renderItem={({ item }) => <PostListItem post={item} />}
      contentContainerStyle={{
        gap: 10,
        maxWidth: 512,
        width: "100%",
        alignItems: "center",
        alignSelf: "center",
      }}
      showsVerticalScrollIndicator={false}
    />
  );
}
