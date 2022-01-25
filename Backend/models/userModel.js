const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");
const userSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    pic: {
      type: String,
      default: "https://img.icons8.com/ios-filled/344/drag-gender-neutral.png",
    },
  },
  {
    timestamps: true,
  }
);

userSchema.methods.matchPassword = async function (pass) {
  return await bcrypt.compare(pass, this.password);
};
userSchema.pre("save", async function (next) {
  if (!this.isModified) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model("User", userSchema);
module.exports = User;
