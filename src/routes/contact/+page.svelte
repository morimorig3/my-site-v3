<script lang="ts">
	import { superForm } from 'sveltekit-superforms';
	import { zod4Client } from 'sveltekit-superforms/adapters';

	import AlertPopup from './components/AlertPopup.svelte';
	import ConfirmPopup from './components/ConfirmPopup.svelte';
	import ContactMessageConfirm from './components/ContactMessageConfirm.svelte';

	import type { ActionData, PageData } from './$types';
	import type { MouseEventHandler } from 'svelte/elements';

	import { page } from '$app/state';
	import CustomButton from '$lib/component/CustomButton/CustomButton.svelte';
	import FloatingLabelInput from '$lib/component/FloatingLabelInput.svelte';
	import Head from '$lib/component/Head.svelte';
	import Spinner from '$lib/component/Icons/Spinner.svelte';
	import ModalWrapper from '$lib/component/ModalWrapper.svelte';
	import TextAreaInput from '$lib/component/TextAreaInput.svelte';
	import { contactFormSchema } from '$lib/schemas';

	export let data: PageData;
	export let form: ActionData;
	let isVisibleOverlay = false;
	let isVisibleDialog = false;
	let formElement: HTMLFormElement;

	const {
		form: contactForm,
		enhance,
		errors,
		submitting,
		validateForm,
		reset
	} = superForm(data.form, {
		validators: zod4Client(contactFormSchema)
	});

	const openDialog = () => {
		isVisibleDialog = true;
		isVisibleOverlay = true;
	};
	const closeDialog = () => (isVisibleDialog = false);
	const closeOverlay = () => {
		isVisibleDialog = false;
		isVisibleOverlay = false;
	};
	/**
	 * 確認ボタン押下ハンドラ
	 */
	const handleClickConfirm: MouseEventHandler<HTMLButtonElement> = async (event) => {
		event.preventDefault();
		const result = await validateForm({ update: true });
		if (result.valid) {
			openDialog();
		}
	};

	/**
	 * 確認モーダルで送信ボタン押下ハンドラ
	 */
	const handleSubmit: MouseEventHandler<HTMLButtonElement> = () => {
		closeDialog();
		formElement.requestSubmit();
	};

	/**
	 * 問い合わせ送信完了時のハンドラ
	 */
	const handleSubmitComplete = () => {
		closeOverlay();
		reset();
	};

	/**
	 * オーバーレイ押下ハンドラ
	 */
	$: handleClickOverlay = $submitting
		? () => undefined
		: form?.success
			? handleSubmitComplete
			: closeOverlay;
</script>

<Head
	pageTitle="Contact"
	description="morimorig3 へのお問い合わせページです"
	pathName={page.url.pathname}
/>

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
			errorMessage={$errors.name}
			bind:value={$contactForm.name}
		/>
		<FloatingLabelInput
			label="E-mail"
			name="email"
			errorMessage={$errors.email}
			bind:value={$contactForm.email}
		/>
		<TextAreaInput
			placeholder="本文"
			name="message"
			bind:value={$contactForm.message}
			errorMessage={$errors.message}
		/>
		<CustomButton handleClick={handleClickConfirm} label="確認" />
	</form>
	{#if isVisibleOverlay}
		<ModalWrapper handleCloseModal={handleClickOverlay} isOpen={isVisibleOverlay}>
			{#if isVisibleDialog}
				<ConfirmPopup {handleSubmit} handleClickCancel={closeOverlay}>
					<ContactMessageConfirm contactForm={$contactForm} />
				</ConfirmPopup>
			{:else if $submitting}
				<Spinner />
			{:else if form?.success}
				<AlertPopup
					text="送信ありがとうございます。お問合せを受け付けました。"
					label="閉じる"
					handleClickButton={handleSubmitComplete}
				/>
			{:else}
				<AlertPopup
					text="送信失敗に失敗しました。恐れ入りますが時間を空けてから再度お試しください。"
					label="閉じる"
					handleClickButton={closeOverlay}
				/>
			{/if}
		</ModalWrapper>
	{/if}
</div>
