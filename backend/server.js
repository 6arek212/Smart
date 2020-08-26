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
const Notification = require('./models/notification')
const Log = require('./models/logs')
const NumOf = require('./models/numOf')

const checkAuthSocket = require('./middleware/check-auth-socket')

const numOfListener = NumOf.watch()
const changeStream = Request.watch();
const messagesListener = Notification.watch();
const logListener = Log.watch()

const nsp = io.of('/requests');
nsp.use(checkAuthSocket)
  .on('connection', function (socket) {
    console.log('admin is connected to requests sockets', nsp.server.engine.clientsCount);
    socket.on("disconnect", (data) => {
      console.log('disconnected from requests ', nsp.server.engine.clientsCount - 1);
    })
  });

changeStream.on('change', (change) => {
  console.log('change in requests data');
  nsp.emit('requestsChanged', change);
});



const notificationsSocket = io.of('/notifications');
notificationsSocket
  .on('connection', function (socket) {
    console.log('connected to notifications', notificationsSocket.server.engine.clientsCount);
    socket.on("disconnect", (data) => {
      console.log('disconnected from notifications', notificationsSocket.server.engine.clientsCount);
    })
  });

messagesListener.on('change', (change) => {
  console.log('change in notification data');
  notificationsSocket.emit('notificationChange', change);
});



const functions = require('./utils/functions')

const analyticsSocket = io.of('/analytics');
analyticsSocket
  .on('connection', function (socket) {
    console.log('connected to analytics', analyticsSocket.server.engine.clientsCount);
    socket.on("disconnect", (data) => {
      console.log('disconnected from analytics', analyticsSocket.server.engine.clientsCount-1);
    })
  });

logListener.on('change', (change) => {
  console.log('change in analytics data');
  functions.getAnalytics().then(res => {
    analyticsSocket.emit('analyticsChange', res);
  })
});





const numOfSocket = io.of('/numOf');
numOfSocket
  .on('connection', function (socket) {
    console.log('connected to numOf', numOfSocket.server.engine.clientsCount);
    socket.on("disconnect", (data) => {
      console.log('disconnected from numOf', numOfSocket.server.engine.clientsCount-1);
    })
  });

numOfListener.on('change', (change) => {
  console.log('change in numOf data');
  functions.getNumOf().then(res => {
    numOfSocket.emit('numOfChange', res);
  })
});
