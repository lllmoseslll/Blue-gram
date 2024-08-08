import { View, Text, Image, TextInput } from "react-native";
import React, { useEffect, useState } from "react";
import * as ImagePicker from "expo-image-picker";
import Button from "~/src/component/Button";
import { uploadImage } from "~/src/lib/cloudinary";

export default function CreatePost() {
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState<string | null>(null);

  useEffect(() => {
    if (!image) {
      pickImage();
    }
  }, [image]);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [5, 4],
      quality: 0.5,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };


  const createPost = async () => {
    if (!image) return;
    const imageUrl = await uploadImage(image);
    if (imageUrl) {
      console.log("Post created with image URL:", imageUrl);
      // Save post in your database with imageUrl and caption
    }
  };

  return (
    <View className="p-3 items-center flex-1">
      {/* Image picker */}
      {image ? (
        <Image
          source={{ uri: image }}
          className="w-52 aspect-[3/4] rounded-lg shadow-md bg-slate-300"
        />
      ) : (
        <View className="w-52 aspect-[3/4] rounded-lg shadow-md bg-slate-300" />
      )}

      <Text onPress={pickImage} className="text-blue-500 font-semibold m-5">
        Change
      </Text>

      {/* TextInput for caption */}
      <TextInput
        onChangeText={setCaption}
        value={caption}
        placeholder="What is on your mind"
        className="w-full p-3"
      />

      {/* Button */}
      <View className="mt-auto w-full">
        <Button title={"Share Post"} onPress={createPost} />
      </View>
    </View>
  );
}
