import express from "express";
import {
  check_Login,
  profile_getProfile,
  profile_addProfile,
  profile_modifyProfile,
  product_getAllProduct,
  product_getProductByID,
  product_addNewProduct,
  product_modifyProductByID,
  product_deleteProductByID,
} from "./src/controller/controller.js";

const app = express();
const PORT = 4000;

app.get("/", (req, res) => {
  res.send(`backend on port ${PORT}`);
});

app
  .route("/login")
  //post
  .post((req, res) => {
    res.send(`post request sucessfully on port ${PORT}`);
  });

app
  .route("/signup")
  //post
  .post((req, res) => {
    res.send(`post request sucessfully on port ${PORT}`);
  });

app
  .route("/profile")
  //get
  .get((req, res) => {
    res.send(`get request sucessfully on port ${PORT}`);
  })
  //put
  .put((req, res) => {
    res.send(`put request sucessfully on port ${PORT}`);
  });

app
  .route("/product")
  //get
  .get((req, res) => {
    res.send(`get request sucessfully on port ${PORT}`);
  });

app
  .route("/product/:id")
  //get
  .get((req, res) => {
    res.send(`get request sucessfully on port ${PORT}`);
  })
  //post
  .post((req, res) => {
    res.send(`post request sucessfully on port ${PORT}`);
  })
  //put
  .put((req, res) => {
    res.send(`put request sucessfully on port ${PORT}`);
  })
  //delete
  .delete((req, res) => {
    res.send(`delete request sucessfully on port ${PORT}`);
  });

app.listen(PORT, () => {
  console.log("express-app-backend at port ", PORT);
  //   console.log(data);
});
