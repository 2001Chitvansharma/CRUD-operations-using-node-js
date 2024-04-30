const mongoose = require("mongoose")

const connectdb = async () => {
    try {
      await mongoose.connect(process.env.DB_URL);
      console.log("Database is connected successfully");
    } catch (error) {
      console.log(error.message);
    }
  };
  

module.exports=connectdb