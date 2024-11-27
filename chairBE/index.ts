import express from "express";
import cors from "cors";
import router from "./route/chairRoute";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", router);
const PORT = process.env.PORT || 2701;

app.listen(PORT, () => {
  console.log(`server is connected to https://localhost:${PORT}`);
});
