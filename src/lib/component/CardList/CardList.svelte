<div class="list">
	<ul class="inner">
		<slot />
	</ul>
</div>

<style lang="postcss">
	.list {
		@apply overflow-x-scroll flex p-1;
	}
	.inner {
		@apply flex border rounded-md shadow;
	}
</style>
