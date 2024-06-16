require("dotenv").config();

module.exports = {
  port: process.env.PORT || 3001,
  mongoURI: process.env.ME_CONFIG_MONGODB_URL || "mongodb://localhost/products",
  rabbitMQURI: process.env.RABBITMQ_URI || "amqp://localhost",
  exchangeName: "products",
  queueName: "products_queue",
};
