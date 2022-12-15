import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config()

mongoose.connect(`mongodb+srv://${process.env.USER_DB}:${process.env.PASSWORD_DB}@cluster0.opo12oq.mongodb.net/API-ECOMMERCE`)

let db = mongoose.connection;

export default db;
