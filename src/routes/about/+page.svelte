<script>
	import Chronology from '$lib/component/Chronology/Chronology.svelte';
	export let data;
	$: ({ historyList } = data);
</script>

<div class="l-container py-6 tablet:py-8 laptop:py-10">
	<Chronology {historyList} />
</div>
