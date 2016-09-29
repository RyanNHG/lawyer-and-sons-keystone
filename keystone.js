var keystone = require('keystone');

keystone.init({

	'name': process.env.SITE_NAME || 'Docker | Keystone',

	'auto update': true,
	'mongo': process.env.MONGO_URI || 'mongodb://mongo/keystone',

	'session': true,
	'auth': true,
	'user model': 'User',
	'cookie secret': 'cookie-secret'

});

require('./models');

keystone.set('routes', require('./routes'));

keystone.set('nav', require('./routes/nav'));

keystone.start();
