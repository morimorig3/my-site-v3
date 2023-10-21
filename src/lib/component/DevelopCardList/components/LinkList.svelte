<script lang="ts">
	import FaGithub from '$lib/component/Icons/FaGithub.svelte';
	import FaPlay from '$lib/component/Icons/FaPlay.svelte';

	export let homepageHref: string | null;
	export let htmlHref: string | null;
</script>

<ul class="flex gap-x-2">
	<li>
		{#if homepageHref}
			<a
				target="_blank"
				rel="noopener noreferrer"
				href={homepageHref}
				class="u-circle-icon hover:bg-sky-50 dark:bg-lightWhite dark:hover:bg-lightBody"
			>
				<FaPlay className="h-3 fill-body" />
			</a>
		{:else}
			<span class="u-circle-icon">
				<FaPlay className="h-3 fill-disabled " />
			</span>
		{/if}
	</li>
	<li>
		{#if htmlHref}
			<a
				target="_blank"
				rel="noopener noreferrer"
				href={htmlHref}
				class="u-circle-icon hover:bg-sky-50 dark:bg-lightWhite dark:hover:bg-lightBody"
			>
				<FaGithub className="h-5 fill-body " />
			</a>
		{:else}
			<span class="u-circle-icon">
				<FaGithub className="h-5 fill-disabled" />
			</span>
		{/if}
	</li>
</ul>
