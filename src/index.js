// require("dotenv").config({path: '../.env'});

import dotenv from "dotenv";
dotenv.config({
  path: "../.env",
});
// console.log(process.env);
// console.log("---------------------------------------------------");
// console.log(dotenv);

import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import connectDB from "./db/database.js";


// Approach-2 to connect database
connectDB();

// Approach-1 to connect database
/* 

import express from "express";
const app = express();

(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("error", (error) => {
      console.log("ERRRR :", error);
      throw error;
    });

    app.listen(process.env.PORT, () => {
      console.log(`App is listening on port ${process.env.PORT}`);
    });

  } catch (error) {
    console.error("ERROR : ", error);
    throw error;
  }
})();

*/
