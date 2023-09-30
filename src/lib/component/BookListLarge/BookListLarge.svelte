<script lang="ts">
	import BookCardLarge from './components/BookCardLarge.svelte';

	import type { BookItems, ReviewedWith } from '$lib/server/books/types';
	export let bookItems: ReviewedWith<BookItems>[];
</script>

<ul class="flex gap-x-6 overflow-x-scroll">
	{#each bookItems as item}
		<li>
			<BookCardLarge bookItem={item} />
		</li>
	{/each}
</ul>
