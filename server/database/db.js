import mongoose from "mongoose";

const Connection = async (username, password) => {
  const URL = `mongodb://${username}:${password}@cluster0-shard-00-00.bzmmg.mongodb.net:27017,cluster0-shard-00-01.bzmmg.mongodb.net:27017,cluster0-shard-00-02.bzmmg.mongodb.net:27017/APPCHAT(RABBITTALK)?ssl=true&replicaSet=atlas-cg8gnp-shard-0&authSource=admin&retryWrites=true&w=majority`;
  try {
    await mongoose.connect(URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("databade is connected");
  } catch (error) {
    console.log("error while connecting to database", error);
  }
};

export default Connection;
