const {Client} = require('pg')
const client = new Client({
  user: 'my_user',
  host: 'localhost',
  database: 'chatdatabase',
  password: 'root',
  port: 5432,
});
client.connect();

module.exports = {client}
