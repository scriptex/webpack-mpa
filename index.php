<?php
function critical_css($path = '/assets/dist/critical.css') {
	$critical = __DIR__ . $path;

	if ( file_exists($critical) ) {
		$critical_css = file_get_contents($critical);

		echo '<style type="text/css" id="critical-css">' . $critical_css . '</style>';
	}
}

function autoversion($url) {
	echo $url . '?v=' . filemtime(__DIR__ . DIRECTORY_SEPARATOR . $url);
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />

	<title>{ Project Name }</title>

	<!--
	For more info about the favicons and meta tags below see
	https://github.com/audreyr/favicon-cheat-sheet
	-->
	<link rel="apple-touch-icon" sizes="57x57" href="/assets/images/favicon/apple-touch-icon-57x57.png" />
	<link rel="apple-touch-icon" sizes="114x114" href="/assets/images/favicon/apple-touch-icon-114x114.png" />
	<link rel="apple-touch-icon" sizes="72x72" href="/assets/images/favicon/apple-touch-icon-72x72.png" />
	<link rel="apple-touch-icon" sizes="144x144" href="/assets/images/favicon/apple-touch-icon-144x144.png" />
	<link rel="apple-touch-icon" sizes="60x60" href="/assets/images/favicon/apple-touch-icon-60x60.png" />
	<link rel="apple-touch-icon" sizes="120x120" href="/assets/images/favicon/apple-touch-icon-120x120.png" />
	<link rel="apple-touch-icon" sizes="76x76" href="/assets/images/favicon/apple-touch-icon-76x76.png" />
	<link rel="apple-touch-icon" sizes="152x152" href="/assets/images/favicon/apple-touch-icon-152x152.png" />
	<link rel="icon" type="image/png" href="/assets/images/favicon/favicon-196x196.png" sizes="196x196" />
	<link rel="icon" type="image/png" href="/assets/images/favicon/favicon-96x96.png" sizes="96x96" />
	<link rel="icon" type="image/png" href="/assets/images/favicon/favicon-32x32.png" sizes="32x32" />
	<link rel="icon" type="image/png" href="/assets/images/favicon/favicon-16x16.png" sizes="16x16" />
	<link rel="icon" type="image/png" href="/assets/images/favicon/favicon-128.png" sizes="128x128" />
	<link rel="shortcut icon" type="image/x-icon" href="/assets/images/favicon/favicon.ico" />
	<meta name="application-name" content="{ Project Name }"/>
	<meta name="msapplication-TileColor" content="#000000" />
	<meta name="msapplication-TileImage" content="/assets/images/favicon/mstile-144x144.png" />
	<meta name="msapplication-square70x70logo" content="/assets/images/favicon/mstile-70x70.png" />
	<meta name="msapplication-square150x150logo" content="/assets/images/favicon/mstile-150x150.png" />
	<meta name="msapplication-wide310x150logo" content="/assets/images/favicon/mstile-310x150.png" />
	<meta name="msapplication-square310x310logo" content="/assets/images/favicon/mstile-310x310.png" />
	<meta name="msapplication-config" content="/config.xml" />
	<meta name="theme-color" content="#000000" />

	<?php critical_css(); ?>

	<link rel="stylesheet" href="<?php autoversion('/assets/dist/app.css'); ?>" />
</head>
<body>
	<script src="<?php autoversion('/assets/dist/app.js'); ?>" async defer></script>
</body>
</html>
