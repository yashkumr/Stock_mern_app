import express from "express";
import cors from "cors";
import morgan from "morgan"
import dotenv from "dotenv";
import colors from "colors"
import connectDb from "./config/connectDb.js";
import userRoute from "./routes/userRoute.js"
import transectionRoute from "./routes/transectionRoute.js";
import path from "path";

// config dot env file
dotenv.config();

//database call
connectDb();

const app = express();
//middlewares
 app.use(morgan("dev"));
 app.use(express.json());
 app.use(cors());
 app.use(express.static(path.join(__dirname, "./client/dist")));


 //routes
 app.use("/api/v1/users", userRoute)
 app.use("/api/v1/transection", transectionRoute);


 app.use(("*", function(req, res){
  res.sendFile(path.join(__dirname, "./client/dist/index.html"));
 }));

 const PORT = 8080 || process.env.PORT;

 
//listen server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });