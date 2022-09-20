import { generate } from 'critical';

generate(
	{
		src: 'index.html',
		css: ['assets/dist/app.css'],
		target: 'assets/dist/critical.css',
		width: 1440,
		height: 900
	},
	(err, { css, html, uncritical }) => {
		console.log({ err, css, html, uncritical });
	}
);
