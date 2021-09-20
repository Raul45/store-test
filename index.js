const express = require('express');
const app = express();
import route from './src/routes/allRoutes'
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
require('./src/auth/passport');

route(app)
// Create a catch-all route for testing the installation.
// app.get('*', (req, res) => res.status(200).send({
//   message: 'Hello World!',
// }));

const port = 3000;

app.listen(port, () => {
  console.log('App is now running at port ', port)
})


module.exports = app