<script>
	import { page } from '$app/stores';
	import Head from '$lib/component/Head.svelte';
</script>

<Head
	pageTitle="Contact"
	description="morimorig3 へのお問い合わせページです"
	pathName={$page.url.pathname}
/>

<div class="l-container py-6 tablet:py-8 laptop:py-10">
	<form class="max-w-screen-tablet mx-auto flex flex-col gap-y-8" method="POST" action="/">
		<div class="floating-input">
			<input
				class="floating-input__input"
				type="text"
				id="name"
				placeholder="Name"
				autocomplete="off"
			/>
			<label class="floating-input__label" for="Name">Name</label>
		</div>
		<div class="floating-input">
			<input
				class="floating-input__input"
				type="text"
				id="email"
				placeholder="E-mail"
				autocomplete="off"
			/>
			<label class="floating-input__label" for="E-mail">E-mail</label>
		</div>
		<textarea class="textarea" name="message" placeholder="本文" />
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
</style>
