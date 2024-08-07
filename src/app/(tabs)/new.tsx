import { View, Text, Image, TextInput, Pressable } from "react-native";
import React, { useState } from "react";

export default function CreatePost() {
  const [caption, setCaption] = useState("");
  return (
    <View className="p-3 items-center flex-1 ">
      {/* image picker */}
      <Image
        source={{
          uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/4.jpg",
        }}
        className="w-52 aspect-[3/4]  rounded-lg shadow-md bg-slate-300"
      />

      <Text onPress={() => {}} className="text-blue-500 font-semibold m-5">
        Change
      </Text>

      {/* textinput for caption */}
      <TextInput
        onChangeText={(newValue) => setCaption(newValue)}
        value={caption}
        placeholder="what is on your mind"
        className=" w-full p-3 "
      />

      {/* button */}
      <View className="mt-auto w-full">
          <Pressable className="bg-blue-500 w-full p-3 items-center rounded-md">
        <Text className=" text-white font-semibold">Share Post</Text>
      </Pressable>  
      </View>
  
    </View>
  );
}
