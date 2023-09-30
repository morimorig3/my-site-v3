<script lang="ts">
	import { filterTopics } from '../../../../store';

	export let topics: string[];
</script>

<ul class="flex gap-x-2 gap-y-1 flex-wrap">
	{#each topics as topic}
		<li>
			<button
				class:isPressed={$filterTopics.includes(topic)}
				class="topic u-link-hover"
				on:click={() => filterTopics.add(topic)}>#{topic}</button
			>
		</li>
	{/each}
</ul>

<style lang="postcss">
	.isPressed {
		@apply bg-sky-50;
	}
</style>
