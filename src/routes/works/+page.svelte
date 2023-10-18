<script lang="ts">
	import WorkCardList from '$lib/component/WorkCardList/WorkCardList.svelte';
	import WorkCard from '$lib/component/WorkCardList/components/WorkCard.svelte';
	export let data;
	$: ({ workList } = data);
</script>

<div class="l-container py-6 tablet:py-8 laptop:py-10">
	<WorkCardList>
		{#each workList as { slug, title, term, image }}
			<li>
				<WorkCard href={`/works/${slug}`} {title} {term} src={image} />
			</li>
		{/each}
	</WorkCardList>
</div>
