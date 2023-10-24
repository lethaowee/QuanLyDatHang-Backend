const dotenv = require('dotenv');
const con = require('./models/database.js');

dotenv.config({ path: './config.env' });

const app = require('./app.js');
const port = process.env.PORT || 3000;


con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
