import { View, Text, Image, TextInput, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import * as ImagePicker from "expo-image-picker";
import Button from "~/src/component/Button";

export default function CreatePost() {
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState<string | null>(null);

  useEffect(() => {
    if (!image) {
      pickImage();
    }
  }, [image]);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [5, 4],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };
  return (
    <View className="p-3 items-center flex-1 ">
      {/* image picker */}
      {image ? (
        <Image
          source={{ uri: image }}
          className="w-52 aspect-[3/4]  rounded-lg shadow-md bg-slate-300"
        />
      ) : (
        <View className="w-52 aspect-[3/4]  rounded-lg shadow-md bg-slate-300" />
      )}

      <Text onPress={pickImage} className="text-blue-500 font-semibold m-5">
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
        {/* <Pressable className="bg-blue-500 w-full p-3 items-center rounded-md">
          <Text className=" text-white font-semibold">Share Post</Text>
        </Pressable> */}
        <Button title={"Share Post"} />
      </View>
    </View>
  );
}
