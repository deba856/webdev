import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv"
import cors from "cors"



const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = process.env.PORT || 3000;

dotenv.config()
app.use(cors())

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
  });
app.get("/teams", (req, res) => {
    res.sendFile(__dirname + "/teams.html");
  });



app.listen(PORT, () => {
    console.log(`Listening on port ${port}`);
  });
  