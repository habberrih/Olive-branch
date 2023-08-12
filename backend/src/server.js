const http = require('http');
const app = require('./app');
const server = http.createServer(app);

const PORT = 5000;

const startServer = async () => {
  server.listen(PORT, () => {
    console.log(`Starting server on port ${PORT} ...`);
  });
};

startServer();
