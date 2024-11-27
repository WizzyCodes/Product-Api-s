import express from "express";
import cors from "cors";
import router from "./route/phoneRoute";

const app = express();
app.use(cors());

const PORT = process.env.PORT || 2382;

app.use(express.json());
app.use("/api", router);

app.listen(PORT, () => {
  console.log(`server is connected to https://localhost:${PORT}`);
});
