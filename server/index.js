const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const cors = require("cors");

const app = express();
//use express.json() to get data into json format
app.use(express.json());
//Port
const PORT = process.env.PORT || 5500;

//use cors
app.use(cors());

//import routes
const TodoItemRoute = require("./routes/todoItems");

//connect to mongodb ..
// mongoose
//   .connect(
//     "DB_CONNECT"
//   )
//   .then(() => console.log("Database connected"))
//   .catch((err) => console.log(err));

try {
    mongoose.connect(process.env.DB_CONNECT, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }, () =>
      console.log("connected"));
  } catch (error) {
    console.log("could not connect");
  }

// const connect = async () => {
//     return mongoose.connect(process.env.DB_CONNECT)
//     .catch((e)=>{
//         console.log(e,"error")
//     })
// }

app.use("/", TodoItemRoute);

//connect to server
app.listen(PORT, () => console.log("Server connected"));
// mongodb+srv://ankit:<password>@cluster0.rrtc5u1.mongodb.net/?retryWrites=true&w=majority