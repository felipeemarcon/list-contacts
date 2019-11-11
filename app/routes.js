const express = require("express");
const multer = require("multer");
const multerConfig = require("./config/multer");

const route = express.Router();

const ContactController = require("./controllers/ContactController");
const AvatarController = require("./controllers/AvatarController");

route.get("/", (req, res) => {
  res.send("App that list my contacts :)");
});

route.get("/contact", ContactController.index);
route.get("/contact/:id", ContactController.show);
route.post("/contact", ContactController.store);
route.put("/contact/:id", ContactController.update);
route.delete("/contact/:id", ContactController.destroy);

route.post(
  "/contact/:id/avatar",
  multer(multerConfig).single("avatar"),
  AvatarController.store
);

module.exports = route;
