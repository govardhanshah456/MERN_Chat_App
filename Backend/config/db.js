const mongoose = require("mongoose");

const ConnectDB = async () => {
  try {
    const conn = mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("DB Connected");
  } catch (err) {
    console.log(`Error:${err.message}`);
    process.exit();
  }
};
module.exports = ConnectDB;
