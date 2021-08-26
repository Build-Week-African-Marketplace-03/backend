import express from "express";

const app = express();
const PORT = 4000;

app.get("/", (req, res) => {
  res.send(`backend on port ${PORT}`);
});

app.route("/login").post((req, res) => {
  res.send(`post request sucessfully on port ${PORT}`);
});

app.listen(PORT, () => {
  console.log("express-app-backend at port ", PORT);
  //   console.log(data);
});
