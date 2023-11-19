<script lang="ts">
	export let label = '';
	export let name = '';
	export let value = '';
	export let errorMessage = [''];
</script>

<div class="floating-input">
	<input
		class="floating-input__input"
		type="text"
		autocomplete="off"
		aria-invalid={errorMessage ? 'true' : undefined}
		placeholder={label}
		{name}
		bind:value
	/>
	<label class="floating-input__label" for={label}>{label}</label>
	{#if errorMessage}<span class="invalid">{errorMessage}</span>{/if}
</div>

<style lang="postcss">
	.floating-input {
		@apply relative dark:text-lightBody;
		&__input {
			@apply w-full h-full p-2 pt-4 border-b bg-transparent dark:border-placeholder;
			&:focus {
				@apply border-body outline-none dark:border-white;
			}
			&::placeholder {
				color: transparent;
			}
			&:-internal-autofill-selected {
				@apply bg-transparent;
			}
			&:focus + .floating-input__label,
			&:not(:placeholder-shown) + .floating-input__label {
				transform: translateY(-100%) scale(0.75);
			}
		}
		&__label {
			position: absolute;
			top: theme(space.4);
			left: 0;
			color: theme(colors.placeholder);
			pointer-events: none;
			transform-origin: left center;
			transition: transform 250ms;
		}
	}
</style>
