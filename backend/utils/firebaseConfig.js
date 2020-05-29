
const admin = require("firebase-admin");

const registrationToken = 'dnkH2fbzSeiiR3t9-R0JmF:APA91bHTnZ2nJhB-Ljz5JFQwYWIo9D4-LJD5C46zPVOJtnQhXBmHxYUzMfb-7FP9Kv1IM12YgYXgaTV7TB4haNkI1uMHaA3J3Ftf1xma3CBmERiK2LqAo-c067inAo0Ik8T0VPT94rCl';



exports.sendMessage = (message, token = registrationToken) => {
  const data = {
    data: {
      message: message
    },
    token: token
  };

  admin.messaging().send(data).then()
    .catch(err => console.log(err)
    )
}
