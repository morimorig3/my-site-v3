<script lang="ts">
	import { page } from '$app/state';
	import Head from '$lib/component/Head.svelte';
	import WorkCardList from '$lib/component/WorkCardList/WorkCardList.svelte';
	import WorkCard from '$lib/component/WorkCardList/components/WorkCard.svelte';
	export let data;
	$: ({ workList } = data);
</script>

<Head
	pageTitle="Works"
	description="エンジニアとしての職務経歴を紹介しています。"
	pathName={page.url.pathname}
/>

<div class="l-container py-6 tablet:py-8 laptop:py-10">
	<WorkCardList>
		{#each workList as { slug, title, term, image }}
			<li>
				<WorkCard href={`/works/${slug}`} {title} {term} src={image} />
			</li>
		{/each}
	</WorkCardList>
</div>
