const mongoose = require("mongoose");

const AvatarSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: true
    },
    path: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true,
    toObject: { virtuals: true },
    toJSON: { virtuals: true }
  }
);

AvatarSchema.virtual("url").get(function() {
  const url = process.env.APP_URL || "http://localhost:3000";

  return `${url}/files/${encodeURIComponent(this.path)}`;
});

module.exports = mongoose.model("Avatar", AvatarSchema);
