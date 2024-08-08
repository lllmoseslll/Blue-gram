import { Image, Text, useWindowDimensions, View } from "react-native";
import { AntDesign, Ionicons, Feather } from "@expo/vector-icons";
import { AdvancedImage } from "cloudinary-react-native";
import { Cloudinary } from "@cloudinary/url-gen";
// Import required actions and qualifiers.
import { thumbnail } from "@cloudinary/url-gen/actions/resize";
import { byRadius } from "@cloudinary/url-gen/actions/roundCorners";
import { focusOn } from "@cloudinary/url-gen/qualifiers/gravity";
import { FocusOn } from "@cloudinary/url-gen/qualifiers/focusOn";
import { cld } from "../lib/cloudinary";

export default function PostListItem({ post }) {
  // const { width } = useWindowDimensions();

  const myImage = cld.image(post.image);
  myImage.resize(thumbnail().width(500).height(500));

  const avatar = cld.image(post.user.avatar_url);
  avatar.resize(
    thumbnail().width(48).height(48).gravity(focusOn(FocusOn.face()))
  ); // Round the corners.

  return (
    <View className=" bg-white">
      <View className="p-3 flex-row gap-5 items-center">
        <AdvancedImage
          cldImg={avatar}
          className=" w-12 aspect-square rounded-full"
        />
        <Text className=" font-semibold ">{post.user.username}</Text>
      </View>
      {/* content */}
      <AdvancedImage cldImg={myImage} className="w-full aspect-[4/3]" />
      {/* <Image source={{ uri: post.image_url }} className="w-full aspect-[4/3]" /> */}
      <View className="flex-row gap-3 p-3">
        <AntDesign name="hearto" size={24} />
        <Ionicons name="chatbubble-outline" size={24} />
        <Feather name="send" size={24} />
        <Feather name="bookmark" className=" " size={24} />
      </View>
    </View>
  );
}
