<script>
	export let title = '';
	export let term = '';
</script>

<div class="flex flex-col gap-y-2">
	<div>
		<p class="text-label font-bold">{title}</p>
		{#if term}
			<p class="text-label-sm text-placeholder">{term}</p>
		{/if}
		{#if $$slots.icons}
			<ul class="flex gap-x-2 py-1">
				<slot name="icons" />
			</ul>
		{/if}
	</div>
	{#if $$slots.description}
		<slot name="description" />
	{/if}
</div>
