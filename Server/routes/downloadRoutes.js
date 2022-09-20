// uses router and fs for downloading the resume and profile pic

// for downloading file we can also directly use res.download(filePath) provided by express
const express = require("express");

const router = express.Router();

router.get("/resume/:file", (req, res) => {
  //This is useful for determining if a file exists, but says nothing about rwx permissions
  console.log("want to download resume")
  res.sendFile(`${req.params.file}`)
});

router.get("/profile/:file", (req, res) => {
  
  res.sendFile(`${req.params.file}`);
});

module.exports = router;
