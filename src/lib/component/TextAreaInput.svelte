<script lang="ts">
	export let placeholder = '';
	export let name = '';
	export let value = '';
	export let errorMessage = [''];
</script>

<div>
	<textarea
		class="textarea"
		aria-invalid={errorMessage ? 'true' : undefined}
		bind:value
		{placeholder}
		{name}
	></textarea>
	{#if errorMessage}<span class="text-red-500 text-label-sm">{errorMessage}</span>{/if}
</div>

<style lang="postcss">
	.textarea {
		min-height: 200px;
		@apply border rounded-md w-full p-2 bg-transparent;
		&::placeholder {
			@apply text-placeholder;
		}
		&:focus {
			@apply border-body outline-none;
		}
	}
	:global(.dark) .textarea {
		@apply text-lightBody border-placeholder;
		&:focus {
			@apply border-white;
		}
	}
</style>
