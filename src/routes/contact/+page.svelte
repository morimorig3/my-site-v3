<script lang="ts">
	import { superForm } from 'sveltekit-superforms/client';

	import type { ActionData, PageData } from './$types';

	import { page } from '$app/stores';
	import FloatingLabelInput from '$lib/component/FloatingLabelInput.svelte';
	import Head from '$lib/component/Head.svelte';
	import Spinner from '$lib/component/Icons/Spinner.svelte';
	import TextAreaInput from '$lib/component/TextAreaInput.svelte';
	import { contactFormSchema } from '$lib/schemas';

	export let data: PageData;
	export let form: ActionData;
	let isVisibleOverlay = false;
	let isVisibleModal = false;
	let formElement: HTMLFormElement;

	const {
		form: contactForm,
		enhance,
		errors,
		submitting,
		reset,
		validate
	} = superForm(data.form, {
		validators: contactFormSchema
	});
</script>

<Head
	pageTitle="Contact"
	description="morimorig3 へのお問い合わせページです"
	pathName={$page.url.pathname}
/>

{#if isVisibleModal}
	<button class="overlay">
		<div>
			<button
				on:click={() => {
					isVisibleOverlay = true;
					formElement.submit();
					isVisibleModal = false;
				}}>送信する</button
			>
			<button on:click={() => (isVisibleModal = false)}>閉じる</button>
		</div>
	</button>
{/if}

{#if isVisibleOverlay}
	<button class="overlay">
		{#if $submitting}
			<Spinner />
		{:else if form?.success}
			<div>
				<p>送信ありがとうございます。お問合せを受け付けました。</p>
				<button
					on:click={() => {
						isVisibleOverlay = false;
						reset();
					}}>閉じる</button
				>
			</div>
		{:else}
			<p>送信失敗</p>
			<button
				on:click={() => {
					isVisibleOverlay = false;
				}}>閉じる</button
			>
		{/if}
	</button>
{/if}

<div class="l-container py-6 tablet:py-8 laptop:py-10">
	<form
		class="max-w-screen-tablet mx-auto flex flex-col gap-y-8"
		method="POST"
		bind:this={formElement}
		use:enhance
	>
		<FloatingLabelInput
			label="Name"
			name="name"
			value={$contactForm.name}
			errorMessage={$errors.name}
		/>
		<FloatingLabelInput
			label="E-mail"
			name="email"
			value={$contactForm.email}
			errorMessage={$errors.email}
		/>
		<TextAreaInput
			placeholder="本文"
			name="message"
			value={$contactForm.message}
			errorMessage={$errors.message}
		/>
		<button
			on:click={async () => {
				const result = await validate();
				if (result.valid) {
					isVisibleModal = true;
				}
			}}
			class="w-full text-label font-bold border shadow rounded-md bg-white h-12 relative
			hover:bg-sky-50 dark:bg-divider dark:border-0 dark:hover:bg-lightBody">確認</button
		>
	</form>
</div>

<style lang="postcss">
	.overlay {
		@apply fixed w-screen h-screen top-0 left-0;
		z-index: 50;
		background-color: rgba(255, 255, 255, 0.9);
	}
</style>
