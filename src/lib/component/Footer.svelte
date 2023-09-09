<script>
	import BIO from './BIO.svelte';
	import CopyRight from './CopyRight.svelte';
	import FooterNavigation from './FooterNavigation.svelte';
</script>

<footer>
	<div class="bg-bgSecondary">
		<div
			class="l-container py-6 tablet:py-8 laptop:py-10 flex gap-y-6 flex-col tablet:flex-row tablet:justify-between"
		>
			<FooterNavigation />
			<BIO />
		</div>
	</div>
	<div class="bg-slate-800 grid place-content-center">
		<CopyRight />
	</div>
</footer>
