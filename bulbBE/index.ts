import router from "./route/BagRoute";
import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", router);

const PORT = process.env.PORT || 4444;

app.listen(PORT, () => {
  console.log(`server is connected to https://localhost:${PORT}`);
});
