import express from "express";
import router from "./routes/routes.js";
import "dotenv/config";

const app = express();

app.use(express.static("public"));
app.use(router);

app.listen(process.env.PORT, () => {
  console.log("Server listening on port " + process.env.PORT);
});
