<li class="item">
	<slot />
</li>

<style lang="postcss">
	.item {
		@apply flex shrink-0 flex-col gap-y-1 items-center justify-center w-28 h-36 p-2 border-r text-center dark:border-lightWhite;
		&:last-child {
			@apply border-r-0;
		}
	}
</style>
