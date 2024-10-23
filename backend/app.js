import express from "express";
const port =  3012;
const app = express();
import cors from "cors"; //for cross origin connection
import bodyParser from "body-parser";
import connectDB from "./database.js"; //connect with the mongodb
import { router as leadRouter } from "./routes/lead.js"; //lead routes
import { router as campaignRouter } from "./routes/campaign.js"; //campaign routes


connectDB()
  .then(() => console.log("Connected to the database"))
  .catch((err) => console.log("Can't connect with db, with error:", err));

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use("/lead", leadRouter);
app.use("/camp", campaignRouter);


// to re-initialise the database
// app.get("/init", async (req, res) => {
//   try {
//     await Campaign.deleteMany();
//     await Campaign.insertMany(campaigns);
//     await Lead.deleteMany();
//     await Lead.insertMany(leads);
//   } catch (err) {
//     console.log("Encounter error:", err);
//   }
// });

app.all("*", (req, res) => {
  res.send(
    `Page not found, paste the link to redirect to home http:localhost:${port}/camp/info`
  );
});

app.listen(port, () => {
  console.log(`the server is listen at http://localhost:${port}`);
});
