const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const { sequelize } = require('./db/models');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const {restoreUser} = require('./auth');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const loginRouter = require('./routes/login');
const { csrfProtection, asyncHandler } = require('./routes/utils');
const signUpRouter = require('./routes/signup');
const moviesRouter = require('./routes/movies');
const searchRouter = require('./routes/search');
// const navbar = require('./navbar')

const logoutRouter = require('./routes/logout');


const app = express();

// view engine setup
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// app.use(navbar)
// set up session middleware
const store = new SequelizeStore({ db: sequelize });

app.use(
	session({
		secret: 'superSecret',
		store,
		saveUninitialized: false,
		resave: false,
		// secure: true
	})
);

// create Session table if it doesn't already exist
store.sync();




// routes



// routes

app.use('/', indexRouter);
app.use('/', restoreUser);
app.use('/login', loginRouter);
app.use('/users', usersRouter);
app.use('/signup', signUpRouter);
app.use('/login', loginRouter)
app.use('/users', usersRouter);
app.use('/movies', moviesRouter);
app.use('/search', searchRouter);
app.use('/logout', logoutRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
	next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render('error');
});

module.exports = app;
