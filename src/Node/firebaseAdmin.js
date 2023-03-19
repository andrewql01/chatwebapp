const {initializeApp} = require('firebase-admin/app')

const app = initializeApp();

app.auth().listUsers()
    .then((listUsersResult) => {
        listUsersResult.users.forEach((userRecord) => {
            console.log('user',userRecord.toJSON());
        });
    })
    .catch((error) => {
        console.log('Error listing users: ', error)
    });