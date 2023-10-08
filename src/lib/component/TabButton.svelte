<script lang="ts">
	export let handleClick: () => void;
	export let isActive = false;
	export let label = '';
</script>

<button on:click={handleClick}
	><span class:text-placeholder={!isActive} class="block p-3 text-label font-bold u-link-hover"
		>{label}</span
	></button
>
