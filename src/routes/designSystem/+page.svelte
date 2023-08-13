<h1>デザインシステム</h1>

<div>
	<h2>Text Colors</h2>
	<ul>
		<li class="flex items-center gap-4 square before:bg-textBody">
			<div>
				<p class="font-bold text-base">Text Body</p>
				<p class="text-textDescription text-sm">#1A1A1C</p>
			</div>
		</li>
		<li class="flex items-center gap-4 square before:bg-textDescription">
			<div>
				<p class="font-bold text-base">Text Description</p>
				<p class="text-textDescription text-sm">#626264</p>
			</div>
		</li>
		<li class="flex items-center gap-4 square before:bg-textPlaceholder">
			<div>
				<p class="font-bold text-base">Text Placeholder</p>
				<p class="text-textDescription text-sm">#757578</p>
			</div>
		</li>
	</ul>
	<h2>Background Colors</h2>
	<ul>
		<li class="flex items-center gap-4 square before:bg-bgPrimary">
			<div>
				<p class="font-bold text-base">BackGround Primary</p>
				<p class="text-textDescription text-sm">#FFFFFF</p>
			</div>
		</li>
		<li class="flex items-center gap-4 square before:bg-bgSecondary">
			<div>
				<p class="font-bold text-base">BackGround Secondary</p>
				<p class="text-textDescription text-sm">#F1F1F4</p>
			</div>
		</li>
		<li class="flex items-center gap-4 square before:bg-bgTertiary">
			<div>
				<p class="font-bold text-base">BackGround Tertiary</p>
				<p class="text-textDescription text-sm">#F8F8FB</p>
			</div>
		</li>
	</ul>
	<h2>Border Colors</h2>
	<ul>
		<li class="flex items-center gap-4 square before:!border-borderField">
			<div>
				<p class="font-bold text-base">Border Field</p>
				<p class="text-textDescription text-sm">#1A1A1C</p>
			</div>
		</li>
		<li class="flex items-center gap-4 square before:!border-borderDivider">
			<div>
				<p class="font-bold text-base">Border Divider</p>
				<p class="text-textDescription text-sm">#D8D8DB</p>
			</div>
		</li>
	</ul>
	<h2>Other Colors</h2>
	<ul>
		<li class="flex items-center gap-4 square before:!bg-primary">
			<div>
				<p class="font-bold text-base">Primary</p>
				<p class="text-textDescription text-sm">#1A1A1C</p>
			</div>
		</li>
		<li class="flex items-center gap-4 square before:!bg-disabled">
			<div>
				<p class="font-bold text-base">Disabled</p>
				<p class="text-textDescription text-sm">#D8D8DB</p>
			</div>
		</li>
	</ul>
</div>

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
