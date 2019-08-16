// Здесь просто вместо app используем app1
const express = require('express');
const port = 3000;
const app = express();

app.use('/', require('../middlewares/app1'));

app.listen(port, () => {
    console.log(`Server is listening on ${port}`);
});
