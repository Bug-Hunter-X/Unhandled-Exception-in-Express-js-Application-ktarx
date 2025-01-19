const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  // This route will always return 200 OK even if an error occurs
  res.send('Hello World!');
});

app.get('/error', (req, res) => {
  // Simulate an error
  throw new Error('Something went wrong!');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});