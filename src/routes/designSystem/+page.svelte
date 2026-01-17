<script>
	import { page } from '$app/state';
	import Head from '$lib/component/Head.svelte';
</script>

<Head pageTitle="デザインシステム" pathName={page.url.pathname} />

<div class="l-container py-6 tablet:py-8 laptop:py-10">
	<h1 class="text-heading-1 mb-4 tablet:mb-6">デザインシステム</h1>
	<section>
		<h2 class="font-bold text-heading-2 py-4">Colors</h2>
		<div class="grid grid-cols-1 gap-4 tablet:grid-cols-2 laptop:grid-cols-3">
			<div>
				<h3 class="text-heading-3">Text Colors</h3>
				<ul>
					<li class="flex items-center gap-4 square before:bg-body">
						<div>
							<p class="text-label font-medium">Body</p>
							<p class="text-description text-label">#1A1A1C</p>
						</div>
					</li>
					<li class="flex items-center gap-4 square before:bg-description">
						<div>
							<p class="text-label font-medium">Description</p>
							<p class="text-description text-label">#626264</p>
						</div>
					</li>
					<li class="flex items-center gap-4 square before:bg-placeholder">
						<div>
							<p class="text-label font-medium">Placeholder</p>
							<p class="text-description text-label">#757578</p>
						</div>
					</li>
				</ul>
			</div>
			<div>
				<h3 class="text-heading-3">Background</h3>
				<ul>
					<li class="flex items-center gap-4 square before:bg-bgPrimary">
						<div>
							<p class="text-label font-medium">Primary</p>
							<p class="text-description text-label">#FFFFFF</p>
						</div>
					</li>
					<li class="flex items-center gap-4 square before:bg-bgSecondary">
						<div>
							<p class="text-label font-medium">Secondary</p>
							<p class="text-description text-label">#F1F1F4</p>
						</div>
					</li>
					<li class="flex items-center gap-4 square before:bg-bgTertiary">
						<div>
							<p class="text-label font-medium">Tertiary</p>
							<p class="text-description text-label">#F8F8FB</p>
						</div>
					</li>
				</ul>
			</div>
			<div>
				<h3 class="text-heading-3">Border Colors</h3>
				<ul>
					<li class="flex items-center gap-4 square before:!border-field">
						<div>
							<p class="text-label font-medium">Field</p>
							<p class="text-description text-label">#1A1A1C</p>
						</div>
					</li>
					<li class="flex items-center gap-4 square before:!border-divider">
						<div>
							<p class="text-label font-medium">Divider</p>
							<p class="text-description text-label">#D8D8DB</p>
						</div>
					</li>
				</ul>
			</div>
			<div>
				<h3 class="text-heading-3">Other Colors</h3>
				<ul>
					<li class="flex items-center gap-4 square before:!bg-primary">
						<div>
							<p class="text-base">Primary</p>
							<p class="text-description text-label">#2563EB</p>
						</div>
					</li>
					<li class="flex items-center gap-4 square before:!bg-disabled">
						<div>
							<p class="text-base">Disabled</p>
							<p class="text-description text-label">#D8D8DB</p>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</section>
	<section>
		<h2 class="font-bold text-heading-2 py-4">Typography</h2>
		<div class="grid grid-cols-1 gap-4 tablet:grid-cols-2 laptop:grid-cols-3">
			<div>
				<h3 class="text-heading-3">Font</h3>
				<ul>
					<li>
						<div>
							<p class="text-2xl font-normal">Noto Sans Japanese</p>
							<p class="text-description text-label">400</p>
						</div>
					</li>
					<li>
						<div>
							<p class="text-2xl font-medium">Noto Sans Japanese</p>
							<p class="text-description text-label">500</p>
						</div>
					</li>
					<li>
						<div>
							<p class="text-2xl font-bold">Noto Sans Japanese</p>
							<p class="text-description text-label">700</p>
						</div>
					</li>
				</ul>
			</div>
			<div>
				<h3 class="text-heading-3">Heading</h3>
				<ul>
					<li>
						<p class="text-heading-1">Heading 1</p>
						<p class="text-description text-label">32px</p>
					</li>
					<li>
						<p class="text-heading-2">Heading 2</p>
						<p class="text-description text-label">28px</p>
					</li>
					<li>
						<p class="text-heading-3">Heading 3</p>
						<p class="text-description text-label">24px</p>
					</li>
					<li>
						<p class="text-heading-4">Heading 4</p>
						<p class="text-description text-label">20px</p>
					</li>
					<li>
						<p class="text-heading-5">Heading 5</p>
						<p class="text-description text-label">16px</p>
					</li>
				</ul>
			</div>
			<div>
				<h3 class="text-heading-3">Other Style</h3>
				<ul>
					<li>
						<p class="text-body">本文</p>
						<p class="text-description text-label">16px</p>
					</li>
					<li>
						<p class="text-body-sm">本文S</p>
						<p class="text-description text-label">14px</p>
					</li>
					<li>
						<p class="text-label">ラベル</p>
						<p class="text-description text-label">14px</p>
					</li>
					<li>
						<p class="text-label-sm">ラベルS</p>
						<p class="text-description text-label">12px</p>
					</li>
					<li>
						<p class="text-caption">説明</p>
						<p class="text-description text-label">12px</p>
					</li>
					<li>
						<p class="text-caption-sm">説明S</p>
						<p class="text-description text-label">10px</p>
					</li>
					<li>
						<p class="text-title">タイトル</p>
						<p class="text-description text-label">32px / 700</p>
					</li>
					<li>
						<p class="text-subtitle">サブタイトル</p>
						<p class="text-description text-label">20px / 700</p>
					</li>
				</ul>
			</div>
		</div>
	</section>
	<section>
		<h2 class="font-bold text-heading-2 py-4">Breakpoint</h2>
		<ul class="grid grid-cols-1 gap-4 tablet:grid-cols-2 laptop:grid-cols-3">
			<li>
				<p class="text-subtitle">スマートフォン</p>
				<p class="text-description text-label">〜519px</p>
			</li>
			<li>
				<p class="text-subtitle">タブレット</p>
				<p class="text-description text-label">520px〜959px</p>
			</li>
			<li>
				<p class="text-subtitle">デスクトップ</p>
				<p class="text-description text-label">960px〜</p>
			</li>
		</ul>
	</section>
</div>

<style lang="postcss">
	section + section {
		margin-top: theme(space.6);
	}
	.square::before {
		content: '';
		display: block;
		width: 32px;
		height: 32px;
		border-radius: 5px;
		border-width: 2px;
		border-color: transparent;
	}
</style>
