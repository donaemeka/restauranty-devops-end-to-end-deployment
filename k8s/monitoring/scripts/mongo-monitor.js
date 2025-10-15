const mongoose = require("mongoose");
const client = require("prom-client");

const mongoConnectionGauge = new client.Gauge({
  name: 'mongo_connection_status',
  help: 'Indicates MongoDB connection status: 1 for connected, 0 for disconnected'
});

const MONGO_URI = process.env.MONGODB_URI || "mongodb://mongodb:27017/restauranty";

mongoose
  .connect(MONGO_URI, {
    serverSelectionTimeoutMS: 30000,
    socketTimeoutMS: 45000,
    bufferCommands: false,
    maxPoolSize: 10,
  })
  .then((x) => {
    const dbName = x.connections[0].name;
    console.log(`Connected to Mongo! Database name: "${dbName}"`);
    mongoConnectionGauge.set(1);
  })
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
    mongoConnectionGauge.set(0);
  });

mongoose.connection.on('disconnected', () => {
  console.log("MongoDB disconnected");
  mongoConnectionGauge.set(0);
});

mongoose.connection.on('reconnected', () => {
  console.log("MongoDB reconnected");
  mongoConnectionGauge.set(1);
});
