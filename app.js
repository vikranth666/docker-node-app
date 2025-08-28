// app.js
const http = require('http');
const mongoose = require("mongoose");

const server = http.createServer((req, res) => {
  res.end('Hello from Node.jssss inside Docker!\n');
});

server.listen(5500, () => {
  console.log('Server running on port 5500');
});

mongoose.connect("mongodb://mongo:27017/mydatabase")
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch(err => console.error(err));
