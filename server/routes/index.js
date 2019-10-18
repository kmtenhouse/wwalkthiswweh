"use strict";

const router = require("express").Router();

//const apiRoutes = require("./api");
//API ROUTES (if applicable)
//router.use("/api", apiRoutes);

//MAIN ROUTES
// If no API routes are hit, send the React app
router.use((req, res) =>
  res.sendFile(path.join(__dirname, "../client/build/index.html"))
);

module.exports = router;
