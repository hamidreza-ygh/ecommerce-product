const express = require("express");
const cors = require('cors');
const mongoose = require("mongoose");
const config = require("./config");
const MessageBroker = require("./utils/messageBroker");
const productsRouter = require("./routes/productRoutes");
require("dotenv").config();

class App {
  constructor() {
    this.app = express();
    this.cors = cors();
    this.connectDB();
    this.setMiddlewares();
    this.setRoutes();
    this.setupMessageBroker();
  }

  // async connectDB() {
  //   await mongoose.connect(config.mongoURI, {
  //     useNewUrlParser: true,
  //     useUnifiedTopology: true,
  //   });
  //   console.log("MongoDB connected");
  // }
  async connectDB() {
    try{
      await mongoose.connect(config.mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log("MongoDB connected");
    } catch(error) {
      console.log("MongoDB error:", error);
    }
    
  }

  async disconnectDB() {
    await mongoose.disconnect();
    console.log("MongoDB disconnected");
  }

  setMiddlewares() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
  }

  
  setRoutes() {
    // this.app.use((req, res) => {
    //   res.setHeader("Access-Control-Allow-Origin", "*");
    //   // res.setHeader("Access-Control-Allow-Credentials", "true");
    //   // res.setHeader("Access-Control-Max-Age", "1800");
    //   res.setHeader("Access-Control-Allow-Headers", "content-type");
    //   res.setHeader("Access-Control-Allow-Headers", "authorization");
    //   res.setHeader("Access-Control-Allow-Methods","PUT, POST, GET, DELETE, PATCH, OPTIONS");
    // })
    // this.app.use(this.cors);
    this.app.use("/products", productsRouter);
  }

  setupMessageBroker() {
    MessageBroker.connect();
  }

  start() {
    this.server = this.app.listen(3001, () =>
      console.log("Server started on port 3001")
    );
  }

  async stop() {
    await mongoose.disconnect();
    this.server.close();
    console.log("Server stopped");
  }
}

module.exports = App;
