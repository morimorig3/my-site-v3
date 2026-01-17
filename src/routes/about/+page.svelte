<script>
	import { page } from '$app/state';
	import Chronology from '$lib/component/Chronology/Chronology.svelte';
	import Head from '$lib/component/Head.svelte';

	export let data;
	$: ({ historyList } = data);
</script>

<Head
	pageTitle="About"
	description="morimorig3 の簡単な経歴を紹介しています。"
	pathName={page.url.pathname}
/>

<div class="l-container py-6 tablet:py-8 laptop:py-10">
	<Chronology {historyList} />
</div>
