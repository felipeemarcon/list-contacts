const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true
    },
    cel_phone: {
      type: String,
      require: false
    },
    email: {
      type: String,
      required: true
    },
    address: {
      type: String
    },
    avatar: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Avatar"
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Contact", ContactSchema);
