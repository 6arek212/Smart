const app = require("./app");
const debug = require("debug")("node-angular");
const http = require("http");
const https = require('https');







const normalizePort = val => {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
};

const onError = error => {
  if (error.syscall !== "listen") {
    throw error;
  }
  const bind = typeof port === "string" ? "pipe " + port : "port " + port;
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
};

const onListening = () => {
  const addr = server.address();
  const bind = typeof port === "string" ? "pipe " + addr : "port " + port;
  debug("Listening on " + bind);
  console.log('server started', port)
};

const port = normalizePort(process.env.PORT || "3000");
app.set("port", port);

const server = http.createServer(app);
server.on("error", onError);
server.on("listening", onListening);
server.listen(port);


//----------------------- Sockt Io--------------------------


const io = require('socket.io')(server);
const Request = require('./models/request')
const Message = require('./models/message')

const checkAuthSocket = require('./middleware/check-auth-socket')


const changeStream = Request.watch();
const messagesListener = Message.watch();


const nsp = io.of('/requests');
nsp.use(checkAuthSocket)
  .on('connection', function (socket) {
    console.log('admin is connected to requests sockets', io.engine.clientsCount);
    socket.on("disconnect", (data) => {
      console.log('disconnected from requests ', nsp.server.engine.clientsCount - 1);
    })
  });

changeStream.on('change', (change) => {
  console.log('change in requests data');
  nsp.emit('requestsChanged', change);
});



const messagesSocket = io.of('/messages');
messagesSocket
  .on('connection', function (socket) {
    console.log('connected to messages', io.engine.clientsCount);
    socket.on("disconnect", (data) => {
      console.log('disconnected from messages', messagesSocket.server.engine.clientsCount);
    })
  });

messagesListener.on('change', (change) => {
  console.log('change in messsages data');
  messagesSocket.emit('messageChange', change);
});







