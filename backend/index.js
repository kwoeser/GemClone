import express from "express";
import Imagekit from "imagekit";
import cors from "cors";
import mongoose from "mongoose";
import Chat from "./models/chat.js";
import UserChats from "./models/userChats.js";

const port = process.env.PORT || 3000;
const app = express();


app.use(
  cors({
    origin:process.env.CLIENT_URL,
}));


app.use (express.json())


const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI)
    console.log("CONNECTED TO MONGODB")
  } catch (err) {
    console.log(err)
  }
}


// Handles image uploads
const imagekit = new Imagekit({
  urlEndpoint: process.env.VITE_IMAGE_KIT_ENDPOINT,
  publicKey: process.env.VITE_IMAGE_KIT_PUBLIC_KEY,
  privateKey: process.env.VITE_IMAGE_KIT_PRIVATE_KEY,
});

// GET REQUESTS
app.get("/api/upload", (req, res)=> {
    const result = imagekit.getAuthenticationParameters();
    res.send(result);
})



// POST REQUESTS
app.get("/api/chats", async (req, res)=> {
  const {userId, text} = req.body;
  
  try {

    // CREATE A NEW CHAT
    const newChat = new Chat({
      userId: userId,
      history: [{ role: "user", parts: [{ text }] }],
    });

    const savedChat = await newChat.save();

    // CHECK IF THE USERCHATS EXISTS
    const userChats = await UserChats.find({ userId: userId });

    // IF DOESN'T EXIST CREATE A NEW ONE AND ADD THE CHAT IN THE CHATS ARRAY
    if (!userChats.length) {
      const newUserChats = new UserChats({
        userId: userId,
        chats: [
          {
            _id: savedChat._id,
            title: text.substring(0, 40),
          },
        ],
      });

      await newUserChats.save();
    } else {
      // IF EXISTS, PUSH THE CHAT TO THE EXISTING ARRAY
      await UserChats.updateOne(
        { userId: userId },
        {
          $push: {
            chats: {
              _id: savedChat._id,
              title: text.substring(0, 40),
            },
          },
        }
      );

      res.status(201).send(newChat._id);
    }


  } catch (err) {
    console.log(err);
    res.status(500).send("Error creating chat!");
  }

})


app.listen(port, ()=> {
    connect()
    console.log("Server running on port 3000")
    console.log("IMAGE KIT ENDPOINT:", process.env.VITE_IMAGE_KIT_ENDPOINT);
    console.log("IMAGE KIT PUBLIC KEY:", process.env.VITE_IMAGE_KIT_PUBLIC_KEY);
    console.log("IMAGE KIT PRIVATE KEY:", process.env.VITE_IMAGE_KIT_PRIVATE_KEY);
    console.log("Using Gemini API Key:", process.env.VITE_GEMINI_PUBLIC_KEY);

})