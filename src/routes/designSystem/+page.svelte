<h1 class="text-2xl font-bold py-4 tablet:py-6">デザインシステム</h1>

<section>
	<h2 class="font-bold text-xl py-4">Colors</h2>
	<div class="grid grid-cols-1 gap-4 tablet:grid-cols-2 laptop:grid-cols-3">
		<div>
			<h3 class="text-lg font-bold">Text Colors</h3>
			<ul>
				<li class="flex items-center gap-4 square before:bg-textBody">
					<div>
						<p class="text-base">Body</p>
						<p class="text-textDescription text-sm">#1A1A1C</p>
					</div>
				</li>
				<li class="flex items-center gap-4 square before:bg-textDescription">
					<div>
						<p class="text-base">Description</p>
						<p class="text-textDescription text-sm">#626264</p>
					</div>
				</li>
				<li class="flex items-center gap-4 square before:bg-textPlaceholder">
					<div>
						<p class="text-base">Placeholder</p>
						<p class="text-textDescription text-sm">#757578</p>
					</div>
				</li>
			</ul>
		</div>
		<div>
			<h3 class="text-lg font-bold">Background</h3>
			<ul>
				<li class="flex items-center gap-4 square before:bg-bgPrimary">
					<div>
						<p class="text-base">Primary</p>
						<p class="text-textDescription text-sm">#FFFFFF</p>
					</div>
				</li>
				<li class="flex items-center gap-4 square before:bg-bgSecondary">
					<div>
						<p class="text-base">Secondary</p>
						<p class="text-textDescription text-sm">#F1F1F4</p>
					</div>
				</li>
				<li class="flex items-center gap-4 square before:bg-bgTertiary">
					<div>
						<p class="text-base">Tertiary</p>
						<p class="text-textDescription text-sm">#F8F8FB</p>
					</div>
				</li>
			</ul>
		</div>
		<div>
			<h3 class="text-lg font-bold">Border Colors</h3>
			<ul>
				<li class="flex items-center gap-4 square before:!border-borderField">
					<div>
						<p class="text-base">Field</p>
						<p class="text-textDescription text-sm">#1A1A1C</p>
					</div>
				</li>
				<li class="flex items-center gap-4 square before:!border-borderDivider">
					<div>
						<p class="text-base">Divider</p>
						<p class="text-textDescription text-sm">#D8D8DB</p>
					</div>
				</li>
			</ul>
		</div>
		<div>
			<h3 class="text-lg font-bold">Other Colors</h3>
			<ul>
				<li class="flex items-center gap-4 square before:!bg-primary">
					<div>
						<p class="text-base">Primary</p>
						<p class="text-textDescription text-sm">#1A1A1C</p>
					</div>
				</li>
				<li class="flex items-center gap-4 square before:!bg-disabled">
					<div>
						<p class="text-base">Disabled</p>
						<p class="text-textDescription text-sm">#D8D8DB</p>
					</div>
				</li>
			</ul>
		</div>
	</div>
</section>
<section>
	<h2 class="font-bold text-xl py-4">Typography</h2>
	<div class="grid grid-cols-1 gap-4 tablet:grid-cols-2 laptop:grid-cols-3">
		<div>
			<h3 class="text-lg font-bold">Font</h3>
			<ul>
				<li class="flex items-center gap-4">
					<div>
						<p class="text-2xl font-normal">Noto Sans Japanese</p>
						<p class="text-textDescription text-base">400</p>
					</div>
				</li>
				<li class="flex items-center gap-4">
					<div>
						<p class="text-2xl font-medium">Noto Sans Japanese</p>
						<p class="text-textDescription text-base">500</p>
					</div>
				</li>
				<li class="flex items-center gap-4">
					<div>
						<p class="text-2xl font-bold">Noto Sans Japanese</p>
						<p class="text-textDescription text-base">700</p>
					</div>
				</li>
			</ul>
		</div>
	</div>
</section>

<style>
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
