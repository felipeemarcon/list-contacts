const Contact = require("../models/Contact");

class ContactController {
  async index(req, res) {
    const contacts = await Contact.find({});

    try {
      return res.json(contacts);
    } catch (err) {
      res.status(400).send({ message: "An error occured. Try again." });
      console.error("Error", err);
    }
  }

  async store(req, res) {
    const contact = await Contact.create(req.body);

    return res.json(contact);
  }

  async show(req, res) {
    const contact = await Contact.findById(req.params.id);

    return res.json(contact);
  }

  async update(req, res) {
    const contact = await Contact.findByIdAndUpdate(req.params.id, req.body);

    return res.json(contact);
  }

  async destroy(req, res) {
    await Contact.findByIdAndRemove(req.params.id, function(err) {
      if (err) {
        return res.send({
          message: "An error has occurred. Verify the ID that was passed."
        });
      }
      return res.send({ message: "Contact success deleted." });
    });
  }
}

module.exports = new ContactController();
