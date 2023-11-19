<script lang="ts">
	export let handleClick: () => void;
	export let label = '';
</script>

<button
	on:click={handleClick}
	class="w-full text-label font-bold border shadow rounded-md bg-white h-12 relative
hover:bg-sky-50 dark:bg-divider dark:border-0 dark:hover:bg-lightBody"
	>{label}
	<slot />
</button>
