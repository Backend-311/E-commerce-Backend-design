import dotenv from "dotenv";
dotenv.config();


if (!process.env.MONGO_URI) {
    throw new Error("Unable to process MONGO_URI variable in .env file,[By me]");
};
if(!process.env.IMAGEKIT_PRIVATE_KEY){
    throw new Error("Unable to process IMAGEKIT_PRIVATE_KEY variable in .env file,[By me]");
}

const config = {
    MONGO_URI: process.env.MONGO_URI,
    IMAGEKIT_PRIVATE_KEY : process.env.IMAGEKIT_PRIVATE_KEY
};

export default config;

