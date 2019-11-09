const express = require("express");

const route = express.Router();

const ContactController = require("./controllers/ContactController");

route.get("/", (req, res) => {
  res.send("App that list my contacts :)");
});

route.get("/contact", ContactController.index);
route.get("/contact/:id", ContactController.show);
route.post("/contact", ContactController.store);
route.put("/contact/:id", ContactController.update);
route.delete("/contact/:id", ContactController.destroy);

module.exports = route;
