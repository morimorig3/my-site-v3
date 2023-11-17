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
	<form method="POST" action="/">
		<div class="floating-input">
			<input class="floating-input__input" type="text" id="name" placeholder="Name" />
			<label class="floating-input__label" for="Name">Name</label>
		</div>
		<div class="floating-input">
			<input class="floating-input__input" type="text" id="email" placeholder="E-mail" />
			<label class="floating-input__label" for="E-mail">E-mail</label>
		</div>
		<label>
			内容
			<textarea name="message" />
		</label>
		<button>送信</button>
	</form>
</div>

<style lang="postcss">
	.floating-input {
		@apply relative;
		&__input {
			@apply w-full h-full pb-2 pt-4 border-b;
			&:focus {
				@apply border-body outline-none;
			}
			&::placeholder {
				color: transparent;
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
