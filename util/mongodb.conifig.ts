import mongoose from "mongoose";

interface Options {
  useNewUrlParser: boolean;
  useUnifiedTopology: boolean;
  autoIndex: boolean;
  connectTimeoutMS: number;
  poolSize: number;
}

export const initMongo = () => {
  const opts: Options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoIndex: false,
    connectTimeoutMS: 10000,
    poolSize: 5,
  };
  mongoose.Promise = global.Promise;
  mongoose.connect(
    "mongodb+srv://praveshk:Babu2012@hackathon.g63c2.mongodb.net/hackathon",
    opts
  );
};
