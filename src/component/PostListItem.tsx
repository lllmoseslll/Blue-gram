import { Image, Text, View } from "react-native";
import { AntDesign, Ionicons, Feather } from "@expo/vector-icons";


export default function PostListItem({ post }) {
    
    return (
      <View className=" bg-white">
        <View className="p-3 flex-row gap-5 items-center">
          <Image
            source={{ uri: post.user.image_url }}
            className=" w-12 aspect-square rounded-full"
          />
          <Text className=" font-semibold ">{post.user.username}</Text>
        </View>
        <Image
          source={{ uri: post.image_url }}
          className="w-full aspect-[4/3]"
        />
        <View className="flex-row gap-3 p-3">
          <AntDesign name="hearto" size={24} />
          <Ionicons name="chatbubble-outline" size={24} />
          <Feather name="send" size={24} />
          <Feather name="bookmark" className=" ml-suto" size={24} />
        </View>
      </View>
    );
}