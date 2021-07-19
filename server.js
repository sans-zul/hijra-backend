require('dotenv').config()
const createError = require('http-errors');
const express = require('express');
const session = require('express-session');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const flash = require('express-flash');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true
}));

app.use(logger('dev'));
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({
  extended: true
}));
app.use(cors());
app.use(flash());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  require('./starter').locals(res);
  if (req.user) {
    res.locals.user = req.user;
  }
  next();
});

global.__basedir = __dirname;
app.use('/api', require('./routes/api'));
app.use('/', require('./routes/index'));
app.use('/', require('./routes/web'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;