import { Cloudinary } from "@cloudinary/url-gen";

export const cld = new Cloudinary({
  cloud: {
    cloudName: process.env.EXPO_PUBLIC_CLOUDINARY_CLOUD_NAME,
  },
});

export const uploadImage = async (file: string) => {
  // if (!image) return;

  const data = new FormData();
  data.append("file", {
    uri: file,
    type: "image/jpeg", // Adjust if the image type is different
    name: "upload.jpg",
  });
  data.append("upload_preset", "Default"); // Your upload preset
  data.append("cloud_name", "dumugthvw"); // Your cloud name

  try {
    const response = await fetch(
      "https://api.cloudinary.com/v1_1/dumugthvw/image/upload",
      {
        method: "POST",
        body: data,
      }
    );

    const result = await response.json();
    console.log("Upload successful:", result.public_id);
    return result.secure_url;
  } catch (error) {
    console.error("Upload failed:", error);
  }
};
