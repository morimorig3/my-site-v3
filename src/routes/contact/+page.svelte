<script lang="ts">
	import { superForm } from 'sveltekit-superforms/client';

	import type { PageData } from './$types';

	import { page } from '$app/stores';
	import Head from '$lib/component/Head.svelte';
	import { contactFormSchema } from '$lib/schemas';

	export let data: PageData;

	const { form, enhance, errors } = superForm(data.form, {
		validators: contactFormSchema
	});
</script>

<Head
	pageTitle="Contact"
	description="morimorig3 へのお問い合わせページです"
	pathName={$page.url.pathname}
/>

<div class="l-container py-6 tablet:py-8 laptop:py-10">
	<form
		class="max-w-screen-tablet mx-auto flex flex-col gap-y-8"
		method="POST"
		action="/contact"
		use:enhance
	>
		<div class="floating-input">
			<input
				class="floating-input__input"
				type="text"
				placeholder="Name"
				autocomplete="off"
				name="name"
				aria-invalid={$errors.name ? 'true' : undefined}
				bind:value={$form.name}
			/>
			<label class="floating-input__label" for="Name">Name</label>
			{#if $errors.name}<span class="invalid">{$errors.name}</span>{/if}
		</div>
		<div class="floating-input">
			<input
				class="floating-input__input"
				type="text"
				placeholder="E-mail"
				autocomplete="off"
				name="email"
				aria-invalid={$errors.email ? 'true' : undefined}
				bind:value={$form.email}
			/>
			<label class="floating-input__label" for="E-mail">E-mail</label>
			{#if $errors.email}<span class="invalid">{$errors.email}</span>{/if}
		</div>
		<div>
			<textarea
				class="textarea"
				placeholder="本文"
				name="message"
				aria-invalid={$errors.message ? 'true' : undefined}
				bind:value={$form.message}
			/>
			{#if $errors.message}<span class="invalid">{$errors.message}</span>{/if}
		</div>
		<button
			class="w-full text-label font-bold border shadow rounded-md bg-white h-12 relative hover:bg-sky-50 dark:bg-divider dark:border-0 dark:hover:bg-lightBody"
			>確認</button
		>
	</form>
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

	.textarea {
		min-height: 200px;
		@apply border rounded-md w-full p-2 bg-transparent dark:text-lightBody dark:border-placeholder;
		&::placeholder {
			@apply text-placeholder;
		}
		&:focus {
			@apply border-body outline-none dark:border-white;
		}
	}
	.invalid {
		@apply text-red-500 text-label-sm;
	}
</style>
