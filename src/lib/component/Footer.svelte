<script>
	import CopyRight from './CopyRight.svelte';
	import SNS from './SNS.svelte';
</script>

<footer class="bg-lightSecondary dark:bg-zinc-900">
	<div class="l-container py-6 tablet:py-8 laptop:py-6">
		<div class="flex flex-col justify-center items-center gap-y-6 laptop:flex-row laptop:gap-x-8">
			<CopyRight />
			<p class="text-divider dark:text-lightBody">
				<a
					class="text-divider hover:text-white text-label dark:text-lightBody dark:hover:text-divider"
					href="/privacy">プライバシーポリシー</a
				>
				・
				<a
					class="text-divider hover:text-white text-label dark:text-lightBody dark:hover:text-divider"
					href="https://forms.gle/zh6isNmxAAEhM2iR6"
					target="_blank"
					rel="noopener noreferrer">お問合せフォーム</a
				>
			</p>
			<div class="flex-1 justify-self-stretch self-stretch hidden laptop:block"></div>
			<SNS />
		</div>
	</div>
</footer>
