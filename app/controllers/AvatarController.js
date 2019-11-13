const Contact = require("../models/Contact");
const Avatar = require("../models/Avatar");

class AvatarController {
  async store(req, res) {
    try {
      const contact = await Contact.findById(req.params.id);

      const avatar = await Avatar.create({
        title: req.file.originalname,
        path: req.file.key
      });

      contact.avatar = avatar;

      await contact.save();

      return res.json(avatar);
    } catch (err) {
      console.log(err);
      return res.status(400).send({ message: "An error ocurred." });
    }
  }
}

module.exports = new AvatarController();
