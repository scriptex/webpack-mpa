import { generate } from 'critical';

generate({
	src: 'index.html',
	css: ['assets/dist/app.css'],
	target: 'assets/dist/critical.css',
	width: 1440,
	height: 900
}).then(({ css, html, uncritical }) => {
    console.log({ css, html, uncritical })
});