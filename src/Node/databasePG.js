const {Client} = require('pg')
const client = new Client({
  user: 'my_user',
  host: 'localhost',
  database: 'chatdatabase',
  password: 'root',
  port: 5432,
});
client.connect();
const GetUsers = (req,res) => {
  client.query("Select * from chatusers",(err,results)=>{
  if(err){
    //error
  }
  else{
    res.status(200).send(results.rows)
  }
});
}
module.exports = {GetUsers}
