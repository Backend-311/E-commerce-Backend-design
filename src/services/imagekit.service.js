import { ImageKit } from "@imagekit/nodejs/client.js";
import config from "../config/config.js";

const imagekit = new ImageKit({
    privateKey: config.IMAGEKIT_PRIVATE_KEY
})

async function uploadImage(buffer){
    try{
        const result = await imagekit.files.upload({
            file: buffer.toString("base64"),
            fileName: "image",
            folder: "E-commerce_project_images"
        });
        return result;

    }catch(error_relatedTo_uploading_image){
        console.error("Unable to upload image on ImageKit,[By me]",error_relatedTo_uploading_image);
    };
    
}
export default uploadImage;