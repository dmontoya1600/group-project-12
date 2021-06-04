const db = require('./db/models');

const loginUser = (req, res, user) => {
	req.session.auth = {
		userId: user.id,
	};
};

const userAccessOnly = (req, res) => {
	if(!req.session.auth) {
		res.redirect('/login')
	}
}

const logoutUser = (req, res, user) => {
	delete req.session.auth;
};

const requireAuth = (req, res, next) => {
	if (!res.locals.authenticated) {
		return res.redirect('/login');
	}
	return next();
};

const restoreUser = async (req, res, next) => {

	if (req.session.auth) {
		const { userId } = req.session.auth;

		try {
			const user = await db.User.findByPk(userId);

			if (user) {
				res.locals.authenticated = true;
				res.locals.user = user;
				next();
			}
		} catch (err) {
			res.locals.authenticated = false;
			next(err);
		}
	} else {
		res.locals.authenticated = false;
		next();
	}
};

module.exports = {
	loginUser,
	logoutUser,
	requireAuth,
	restoreUser,
	userAccessOnly
};
