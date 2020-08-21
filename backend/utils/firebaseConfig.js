
const admin = require("firebase-admin");
const serviceAccount = require('../utils/key');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://notification-api-23c28.firebaseio.com"
});


const registrationToken = 'c9iActLbTSGX2S7QL1jfRr:APA91bFsBruSu0OjC8NBCrWO8xAPmrRydWpjaQ9-znym0XY5USoeu18jXXYid3Oj8PsBXhbeaDE5o-qDQxnKU1jIGuDXuGnu68JUX5Gyv4-HocuEK8abJaf5-Zb4uJq8goPoGq9ibsoG';


exports.sendMessage = (title, message, token = registrationToken) => {
  console.log('sending notification');

  // var payload = {
  //   notification: {
  //     title: title,
  //     body: message
  //   }
  // };

  var message = {
    data: {
      title: title,
      body: message
    }

  };

  admin.messaging().sendToDevice(token, message).then(res => {
   // console.log('notification sent', res);

  })
    .catch(err => console.log(err)
    )
}


