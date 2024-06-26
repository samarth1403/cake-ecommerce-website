import cloudinary from 'cloudinary';//cloudinary : used to upload image and video

cloudinary.config({ 
  cloud_name: 'dkddmjgqj', 
  api_key: '415787228682624', 
  api_secret: 'AGrOcz3xOPhwBfDwEk5ERQD4twM' 
});

cloudinary.v2.uploader.upload(
  "my_image.jpg",
  { timeout: 120000 },
  function (error, result) {}
);

export const cloudinaryUploadImage = async(fileToUploads) => {
   return new Promise((resolve) => {
     cloudinary.uploader.upload(fileToUploads, (result) => {
       resolve(
         {
           url: result.secure_url,
           asset_id: result.asset_id,
           public_id: result.public_id,
         },
         {
           resource_type: "auto",
         }
       );
     });
   });
}

export const cloudinaryDeleteImage = async (fileToDelete) => {
  return new Promise((resolve) => {
    cloudinary.uploader.destroy(fileToDelete, (result) => {
      resolve(
        {
          url: result.secure_url,
          asset_id: result.asset_id,
          public_id: result.public_id,
        },
        {
          resource_type: "auto",
        }
      );
    });
  });
};