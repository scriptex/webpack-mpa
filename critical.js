const critical = require('critical');

critical.generate({
	src: 'index.html',
	css: ['assets/dist/app.css'],
	target: 'assets/dist/critical.css',
	width: 1440,
	height: 900
});
