import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import mysql from 'mysql';
dotenv.config();

const dbConnection = process.env.DB_CONNECTION;
if (!dbConnection) {
  throw new Error('DB_CONNECTION environment variable is not defined');
}
const db = mysql.createConnection(dbConnection);
db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL: ' + err.stack);
    return;
  }
  console.log('Connected to MySQL as ID ' + db.threadId);
});


// export default db;

const app = express();
const port = 5000;

app.get('/', (req, res) => {
  res.send('Hello, TypeScript Node Express!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});