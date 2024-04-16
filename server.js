const express = require("express");
const app = express();
const path = require("path");
const { upload } = require("./middlewares/multerConfig");

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.post("/api/upload", upload.single("product-ingredients"), (req, res) => {
  console.log(req.body);
  console.log(req.file);
  res.redirect("/");
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000");
});

// const { GoogleGenerativeAI } = require("@google/generative-ai");
// const dotenv = require("dotenv");
// dotenv.config();
// // Access your API key as an environment variable (see "Set up your API key" above)
// const genAI = new GoogleGenerativeAI(process.env.API_KEY);

// async function run() {
//   // For text-only input, use the gemini-pro model
//   const model = genAI.getGenerativeModel({ model: "gemini-pro" });

//   const prompt =
//     "you are an expert nutritionist. As a nutritionist your task is to rate the food products based on their ingredients that i will provide you. You have to rate every ingredient out of 10. 10 for best and 1 for worst, along with you have to write the diseases the ingredient can cause if harmful both long term and short term effects. and based on the ingredients ratings finally rate the overall product out of 10. be specific write in points not in paragraph. Is that understood? ";

//   const prompt2 =
//     "Brand - Bonn Brown Bread Ingredients: Whole Wheat Flour - Atta (52.4%), Water, Sugar,Yeast, lodized Salt, Edible Sunflower Oil, Malt Extract, Vinegar, Emulsifier [472e], Preservatives [280, 281 & 200] and Antioxidant [300]. This bread claims to be Zero Added Maida, No Palm Oil, No added colour";

//   const result = await model.generateContent(prompt + prompt2);
//   const response = await result.response;
//   const text = response.text();
//   console.log(text);
// }

// run();
