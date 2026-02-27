const express = require('express');
const app = express();

// Verification comment for CI/CD deployment test
app.get('/', (req, res) => res.send('Hello CI/CD!'));

app.listen(3000, () => console.log('Server on port 3000'));
