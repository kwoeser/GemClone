import express from "express";
import Imagekit from "imagekit";
import cors from "cors";

const port = process.env.PORT || 3000;
const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL,
  })
);

app.use(express.json());

// Handles image uploads NOT WORKING CURRENTLY
const imagekit = new Imagekit({
  urlEndpoint: process.env.VITE_IMAGE_KIT_ENDPOINT,
  publicKey: process.env.VITE_IMAGE_KIT_PUBLIC_KEY,
  privateKey: process.env.VITE_IMAGE_KIT_PRIVATE_KEY,
});

// GET REQUESTS
app.get("/api/upload", (req, res) => {
  const result = imagekit.getAuthenticationParameters();
  res.send(result);
});

app.listen(port, () => {
  console.log("Server running on port 3000");
  console.log("IMAGE KIT ENDPOINT:", process.env.VITE_IMAGE_KIT_ENDPOINT);
  console.log("IMAGE KIT PUBLIC KEY:", process.env.VITE_IMAGE_KIT_PUBLIC_KEY);
  console.log("IMAGE KIT PRIVATE KEY:", process.env.VITE_IMAGE_KIT_PRIVATE_KEY);
  console.log("Using Gemini API Key:", process.env.VITE_GEMINI_PUBLIC_KEY);
});
