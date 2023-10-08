<script lang="ts">
	import WorkCard from '$lib/component/WorkCard.svelte';
	export let data;
	$: ({ works } = data);
</script>

<div class="l-container py-6 tablet:py-8 laptop:py-10">
	<div class="grid tablet:grid-cols-2 laptop:grid-cols-3 gap-6 tablet:gap-8 laptop:gap-10">
		{#each works as { slug, title, term, image }}
			<WorkCard href={`/works/${slug}`} {title} {term} src={image} />
		{/each}
	</div>
</div>
