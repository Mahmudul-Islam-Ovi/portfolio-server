const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
 const userRouter = require('./routes/user.route');
 const fileUpload = require('express-fileupload');


const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(fileUpload());


// password = apBUdRZa6ixAtjRZ
// user = message

 
app.use('/',userRouter);

// home route
app.get('/',(req, res) => {
    res.send('Server is On  ')
})

// route not found

app.use((req, res, next) => {
    res.status(404).send('Not Found')
})

// server error

app.use((err,req, res, next) => {
    res.status(500).send(' please try again')
})

module.exports = app;