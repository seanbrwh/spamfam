import { connect, connection, Connection, disconnect } from "mongoose";
import { UserModel } from "./users/users.model";

const { DB_NAME, DB_USER, DB_PASSWORD } = process.env;

let database: Connection;

export const connectDB = () => {
  const uri = `mongodb://${DB_USER}:${DB_PASSWORD}@127.0.0.1:27017/${DB_NAME}?retryWrites=true&w=majority`;

  if (database) {
    return;
  }

  connect(uri, {
    useNewUrlParser: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });

  database = connection;

  database.once("open", async () => {
    console.log("Connected to database");
  });

  database.on("error", () => {
    console.log("Error connecting to database");
  });
};

export const disconnectDB = () => {
  if (!database) {
    return;
  }
  disconnect();
};
