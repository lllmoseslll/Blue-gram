import { View, Text, Image, TextInput } from "react-native";
import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import Button from "~/src/component/Button";

export default function ProfileScreen() {
  const [image, setImage] = useState<string | null>(null);
  const [username, setUsername] = useState("");

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };
  return (
    <View className="p-5 flex-1">
      {/* avator image picker */}

      {image ? (
        <Image
          source={{ uri: image }}
          className="w-52 aspect-square self-center rounded-full shadow-md bg-slate-300"
        />
      ) : (
        <View className="w-52 aspect-square self-center rounded-full shadow-md bg-slate-300" />
      )}
      <Text
        onPress={pickImage}
        className="text-blue-500 font-semibold self-center m-5"
      >
        Change
      </Text>

      {/* form */}
      <Text className="mb-2 text-gray-500 font-semibold">Username</Text>
      <TextInput
        placeholder="username"
        value={username}
        onChangeText={setUsername}
        className="border border-gray-300 p-3 rounded-md shadow-lg"
      />
      {/* button */}
      <View className="gap-3 mt-[90%]">
        <Button title="Update Profile" />
        <Button title="Sign Out" />
      </View>
    </View>
  );
}
