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

/**
 *
 * @param {id, name, email, phone, address} req.body
 */
const helper_Create_Profile_And_Add_To_MapProfile = (req) => {
  map_profile.set(req.body.id, {
    id: req.body.id,
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    address: req.body.address,
  });
};

const debug_show_Map_Profile_size = (input_text = "") => {
  console.log(`${input_text}map_profile.size = ${map_profile.size}`);
};

const debug_show_request_path = (input_text = "") => {
  console.log(`${input_text}req.path = ${req.path}`);
};

const debug_print_Map_Profile = (input_text = "") => {
  console.log(`${input_text}map_profile = `, map_profile);
};

app.use(express.urlencoded({ extended: true }));
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
    if (map_profile.has(req.body.id) === false) {
      //add the new profile to Map_Profile
      helper_Create_Profile_And_Add_To_MapProfile(req);

      debug_print_Map_Profile("/signup post - ");

      res.send({ status: "200", message: "Successfully posted profile" });
    } //end if
    else {
      // console.log("map_profile.size = ", map_profile.size);
      console.log("Failed to posted profile");
      res.send({ status: "300", message: "Failed to posted profile" });
    }
  });

app
  .route("/profile/:id")
  //get
  .get((req, res) => {
    if (map_profile.has(req.params.id)) {
      res.json(map_profile.get(req.params.id));
    } else {
      res.send({ status: "300", message: "Failed to retrieve profile" });
    }
  })
  //put
  .put((req, res) => {
    if (map_profile.has(req.body.id)) {
      map_profile.delete(req.body.id);
      helper_Create_Profile_And_Add_To_MapProfile(req);
      debug_print_Map_Profile("/profile/:id put - ");
      res.send({ status: "200", message: "Successfully update profile" });
    } else {
      res.send({ status: "300", message: "Failed to update profile" });
    }
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
  console.log("============================================");
  console.log("start express-app-backend at port ", PORT);
  //   console.log(data);
});
