<script lang="ts">
	export let isLarge = false;
</script>

<ul
	class:isLarge
	class="grid tablet:grid-cols-2 laptop:grid-cols-3 gap-6 tablet:gap-8 laptop:gap-10"
>
	<slot />
</ul>

<style lang="postcss">
	.isLarge {
		@apply grid tablet:grid-cols-1 laptop:grid-cols-2;
	}
</style>
