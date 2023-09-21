<script>
	import { NAVIGATION_LIST } from '$lib/const';
</script>

<nav>
	<ul class="grid gap-y-1">
		{#each NAVIGATION_LIST as { path, title }}
			<li>
				<a
					class="inline-block text-white text-label font-semibold u-underline-animation"
					href={path}>{title}</a
				>
			</li>
		{/each}
	</ul>
</nav>
