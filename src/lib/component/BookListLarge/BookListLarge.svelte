<script lang="ts">
	import BookCardLarge from './components/BookCardLarge.svelte';

	import type { ReviewedWith } from '$lib/server/books/types';
	import type { BookItem } from '$lib/server/googleBooks/types';
	export let bookItems: ReviewedWith<BookItem>[];
</script>

<ul class="flex gap-x-6 overflow-x-scroll">
	{#each bookItems as item}
		<li>
			<BookCardLarge bookItem={item} />
		</li>
	{/each}
</ul>
