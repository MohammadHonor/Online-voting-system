import { v2 as cloudinary } from "cloudinary";
import fs from 'fs';
          
cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SEC 
});

const uploadOnCloudinary = async(localPath)=>{

  try {
    if(!localPath)return "Pahtproblem"
    
    const response = await cloudinary.uploader.upload(localPath,{
      resource_type:"auto"
    } )
   return response.url;
  } catch (error) {
    fs.unlinkSync(localPath);
     console.log(`uploadoncloudinary error:${error}`)
  }

}

export default uploadOnCloudinary;