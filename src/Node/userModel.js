const Pool = require('pg').Pool
const pool = new Pool({
  user: 'my_user',
  host: 'localhost',
  database: 'chatdatabase',
  password: 'root',
  port: 5432,
});

const getUsers = function(){
    return new Promise(function(resolve, reject) {
      pool.query('SELECT * FROM chatUsers ORDER BY id ASC', (error, results) => {
        if (error) {
          reject(error)
        }
        resolve(results.rows);
      })
    }) 
  }
  module.exports = {getUsers: getUsers}