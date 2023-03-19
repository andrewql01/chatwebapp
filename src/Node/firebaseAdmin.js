var admin = require("firebase-admin");
var {client} = require("./databasePG");
var serviceAccount = require("./service/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://chat-web-app-ab848-default-rtdb.europe-west1.firebasedatabase.app"
})

admin.auth().listUsers()
    .then((listUsersResult) => {
        listUsersResult.users.forEach((userRecord) => {
            const user = userRecord.toJSON();
            client.query('INSERT INTO chatUsers (id, name, email) VALUES ($1, $2, $3)', [user.uid, user.email, user.displayName], (err,res) => {
                if(err){
                    //error
                    console.log('error')
                  }
                else{
                    //success
                    console.log('success inserting users')
                }
            })
        });
    })
    .catch((error) => {
        console.log('Error listing users: ', error)
    });