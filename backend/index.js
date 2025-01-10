import express from "express";
import Imagekit from "imagekit"

const port = process.env.PORT || 3000;
const app = express();


// Handles image uploads
const imagekit = new Imagekit({
  urlEndpoint: process.env.IMAGE_KIT_ENDPOINT,
  publicKey: process.env.IMAGE_KIT_PUBLIC_KEY,
  privateKey: process.env.IMAGE_KIT_PRIVATE_KEY,
});

// GET REQUESTS
app.get("/api/upload", (req, res)=> {
    const result = imagekit.getAuthenticationParameters();
    res.send(result);
})


app.listen(port, ()=> {
    console.log("Server running on port 3000")

})