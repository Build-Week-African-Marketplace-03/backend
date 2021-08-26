import express from "express";
import data from "./data/MOCK_DATA.json";

const app = express();
const PORT = 3000;

//load a static file from public folder with "/" path
app.use(express.static("public"));
//visit http://localhost:3000/tent.jpg to load tend.jpg

//load a static file from images folder with "/images" path
app.use("/images", express.static("images"));
//visit http://localhost:3000/images/rocket.jpg to load rocket.jpg

//--------------route for getting data-----------------
app.get(
  "/",
  (req, response) => {
    response.send(`a get request with / route on port ${PORT}`);
    //visit localhost:3000
    //receive "a get request with / route on port 3000"

    //jump to the next function
    next();
  },
  (req, response) => {
    //step 1 - get data from a database

    //step 2a - if retrieve data successfully, return data to the front end
    response.json(data); //send json file to front end

    //step 2b - if fail to retrieve data from database, return error
  }
);

//--------------route for post data-----------------
app.post("/newItem", (req, rep) => {
  rep.send(`a post request with /newItem route on port ${PORT}`);
});

//--------------route for put data-----------------
app.put("/item", (req, rep) => {
  rep.send(`a put request with /item route on port ${PORT}`);
});

//--------------route for delete data-----------------
app.delete("/item", (req, rep) => {
  rep.send(`a delete request with /item route on port ${PORT}`);
});

//--------------------------------------------------
//get data using "/user/:id" route
app.get(
  "/user/:id",
  (req, reesponse, next) => {
    console.log(req.params.id);
    const user_id = Number(req.params.id) - 1;
    console.log("user_id = ", user_id);
    reesponse.send(data[user_id]);
    //go to the next function, jump to the next function
    next();
  },
  (req, rep, next) => {
    console.log("did you get the right data?");
  },
  (req, rep) => {
    rep.end();
  }
);

//--------------------------------------------------
//allow user to downlaod rocket.jpg through path "/download"
app.get(
  "/download",
  (req, response, next) => {
    response.download("images/rocket.jpg");
    next();
  },
  (req, response) => {
    response.sendStatus(200);
    console.log("user downloaded rocket.jpg");
  }
);

//--------------------------------------------------
// render component to the front end
// app.get(
//   "/template",
//   (req, response, next) => {
//     response.render("users", {
//       users: "users",
//       title: "EJS example",
//       header: "Some users",
//     });
//     next();
//   },
//   (req, response) => {
//     console.log("user rendered a template");
//   }
// );

//--------------------------------------------------
//use path "/error" to redirect to another page link
app.get("/error", (req, response) => {
  response.redirect("https://www.google.com");
});

//---------start the app----------------------------
app.listen(PORT, () => {
  console.log("express-app-sample at port ", PORT);
  //   console.log(data);
});
