const fs = require("fs");
const cors = require("cors");
const express = require("express");
const axios = require("axios");
const qs = require("qs");

const PORT = 8000;
const app = express();

var o = {};

app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

app.post("/python",  (req, res) => {
  const data = qs.stringify({
    code: req.body.code,
    language: "py",
    input: "",
  });

  const config = {
    method: "post",
    url: "https://codex-api.herokuapp.com/",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data: data,
  };

   axios(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
       o = response.data;
    })
    .catch((error) => {
      console.log(error);
    });

   res.send(o);
});
