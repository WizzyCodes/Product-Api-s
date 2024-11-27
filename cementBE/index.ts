import router from "./route/milkRoute";
import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

const PORT = process.env.PORT || 4234;

app.use(express.json());
app.use("/api", router);

app.listen(PORT, () => {
  console.log(`server is connected to https://localhost:${PORT}`);
});
