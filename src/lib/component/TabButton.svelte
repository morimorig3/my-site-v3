<script lang="ts">
	export let handleClick: () => void;
	export let isActive = false;
	export let label = '';
</script>

<button on:click={handleClick}
	><span
		class:text-placeholder={!isActive}
		class:bg-bgSecondary={!isActive}
		class:dark:bg-divider={isActive}
		class="block p-3 text-label font-bold hover:bg-sky-50 dark:hover:bg-divider">{label}</span
	></button
>
