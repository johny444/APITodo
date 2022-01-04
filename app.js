var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors= require('cors');
app.use(cors());
var path = require('path');
var logger = require('morgan');


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var UserRouter = require('./routes/usersRouter');
var NoteRouter = require('./routes/noteRouter');
var indexRouter=require('./routes/index');
app.use('/users',UserRouter);
app.use('/note',NoteRouter);
app.use('/',indexRouter);

const port=3000

app.listen(port, () => {
    console.log(`Node App is running on port ${port}`);
})
module.exports = app;
