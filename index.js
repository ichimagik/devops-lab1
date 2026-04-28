const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("DevOps Lab funcionando 🚀");
});

app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

app.listen(3000, () => {
  console.log("App corriendo en puerto 3000");
});
