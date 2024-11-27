import express from "express";
import cors from "cors";
import router from "./route/creamRoute";

const app = express();
app.use(cors());

const PORT = process.env.PORT || 1212;

app.use(express.json());
app.use("/api", router);

app.listen(PORT, () => {
  console.log(`server is connected tp https:${PORT}`);
});
