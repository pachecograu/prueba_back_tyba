const {Client} = require('pg');
console.log(process.env.PGUSER)

export const client = new Client({
    user: process.env.PGUSER,
    host: 'localhost',
    database: 'test',
    password: process.env.PGPASSWORD,
    port: 5432,
  });
client.connect(function (err:any) {
    if (err) {
        console.error('error connectando: ' + err);
        return;
    }
    console.log('connected');
})

