const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from Azure VM!');
});

app.listen(3000, '0.0.0.0', () => {
  console.log('Server running at http://0.0.0.0:3000');
});



