<script lang="ts">
	const SITE_NAME = 'morimorig3.com';
	export let pageTitle = '';
	export let description = '';
	export let pathName = '';

	$: title = pageTitle ? `${pageTitle} | ${SITE_NAME}` : SITE_NAME;
	$: url = `https://www.morimorig3.com${pathName}`;
	$: ogImage = 'https://www.morimorig3.com/ogp.png';
</script>

<svelte:head>
	<meta name="robots" content="index,follow" />
	<meta name="googlebot" content="index,follow" />
	<meta name="format-detection" content="telephone=no" />
	<title>{title}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href={url} />
	<!-- Facebook Open Graph -->
	<meta property="og:url" content={url} />
	<meta property="og:type" content="website" />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={ogImage} />
	<meta property="og:site_name" content="morimorig3.com" />
	<meta property="og:locale" content="ja_JP" />
	<!-- Twitter Cards -->
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:creator" content="@morimorig3" />
	<meta name="twitter:url" content={url} />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={ogImage} />

	<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
	<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
	<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
	<link rel="manifest" href="/site.webmanifest" />
	<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
	<meta name="msapplication-TileColor" content="#ffffff" />
	<meta name="theme-color" content="#ffffff" />
</svelte:head>
