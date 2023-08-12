<h1>デザインシステム</h1>

<div>
	<h2>Text Colors</h2>
	<ul>
		<li class="flex square before:bg-textBody">
			<div>
				<p class="font-bold">Text Body</p>
				<p class="text-textDescription">#1A1A1C</p>
			</div>
		</li>
		<li class="flex square before:bg-textDescription">
			<div>
				<p class="font-bold">Text Description</p>
				<p class="text-textDescription">#626264</p>
			</div>
		</li>
		<li class="flex square before:bg-textPlaceholder">
			<div>
				<p class="font-bold">Text Placeholder</p>
				<p class="text-textDescription">#757578</p>
			</div>
		</li>
	</ul>
	<h2>Background Colors</h2>
	<ul>
		<li class="flex square before:bg-bgPrimary">
			<div>
				<p class="font-bold">BackGround Primary</p>
				<p class="text-textDescription">#FFFFFF</p>
			</div>
		</li>
		<li class="flex square before:bg-bgSecondary">
			<div>
				<p class="font-bold">BackGround Secondary</p>
				<p class="text-textDescription">#F1F1F4</p>
			</div>
		</li>
		<li class="flex square before:bg-bgTertiary">
			<div>
				<p class="font-bold">BackGround Tertiary</p>
				<p class="text-textDescription">#F8F8FB</p>
			</div>
		</li>
	</ul>
	<h2>Border Colors</h2>
	<ul>
		<li class="flex square before:!border-borderField">
			<div>
				<p class="font-bold">Border Field</p>
				<p class="text-textDescription">#1A1A1C</p>
			</div>
		</li>
		<li class="flex square before:!border-borderDivider">
			<div>
				<p class="font-bold">Border Divider</p>
				<p class="text-textDescription">#D8D8DB</p>
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
