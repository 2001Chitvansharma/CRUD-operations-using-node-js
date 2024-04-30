const express = require("express");
const dotenv = require("dotenv");
const connectdb = require("./config/db")
const router =require("./routes/user")
dotenv.config();
const app = express();
app.use(express.json())
app.use ("/",router)

// Database
connectdb()
app.listen(process.env.PORT, () => {
console.log(`Server is running on port 8000`);
});