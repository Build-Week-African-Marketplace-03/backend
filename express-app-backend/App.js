import express, { json } from "express";
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
const map_profile = new Map();

// app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.raw());

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
    // console.log(
    //   "map_profile.has(req.params.id) === false return ",
    //   map_profile.has(req.params.id) === false
    // );
    console.log("req.body = ", req.body);
    // console.log("req.body.name = ", req.body.params.name);

    if (true) {
      // if (map_profile.has(req.params.id) === false) {
      // const { id, name, email, phone, address } = req.params.data;
      // map_profile.set(req.params.id, {
      // id: req.body["id"],
      // name: req.body.name,
      // email: req.body.email,
      // phone: req.body.phone,
      // address: req.body.address,
      // });
      console.log("map_profile.size = ", map_profile.size);
      console.log("map_profile = ", map_profile);
      res.send({ status: "200", message: "Successfully posted profile" });
    } //end if
    else {
      console.log("map_profile.size = ", map_profile.size);
      res.send({ status: "300", message: "Failed to posted profile" });
    }
  });

app
  .route("/profile/:id")
  //get
  .get((req, res) => {
    const { id } = req.params;
    console.log("req.params.route = ", req.params.route);
    console.log("map_profile.size = ", map_profile.size);
    console.log(map_profile);
    console.log("id = ", id);
    console.log("map_profile.has(id) = ", map_profile.has(id));
    if (map_profile.has(id)) {
      res.json(map_profile.get(id));
    } else {
      res.send({ status: "300", message: "Failed to retrieve profile" });
    }
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

/*-------------------------------------------------------------
  This is a custom built-in error handling
  put error handling app.listen
*/
app.use((error, request, response, next) => {
  //print out error.stack
  //   console.log(error.stack);
  //return error code
  response.status(500).send(`Red alert! Error occured on port ${PORT}`);
});

app.listen(PORT, () => {
  console.log("express-app-backend at port ", PORT);
  //   console.log(data);
});

/**
 *
 *
 */
