import mongoose from "mongoose";

class MongooseService {
  private count = 0;
  private mongooseOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,
  };

  constructor() {
    this.connectWithRetry();
  }

  getMongoose() {
    return mongoose;
  }

  connectWithRetry = () => {
    console.log("Attempting MongoDB connection (will retry if needed)");

    mongoose
      .connect("mongodb://localhost:27017/api-db", this.mongooseOptions)
      .then(() => console.log("MongoDB connected"))
      .catch((error) => {
        const TIMEOUT_SECONDS = 5;

        console.log(
          `MongoDB connection unsuccessful (will retry #${this
            .count++}) after ${TIMEOUT_SECONDS} seconds: `,
          error
        );

        setTimeout(() => {
          this.connectWithRetry();
        }, TIMEOUT_SECONDS * 1000);
      });
  };
}

export default new MongooseService();
