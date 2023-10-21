<script lang="ts">
	import { LANGUAGE_COLOR_CODES } from './const';

	export let language: string;

	const DEFAULT_COLOR = '#1A1A1C';

	type LanguageColorCodeType = keyof typeof LANGUAGE_COLOR_CODES;

	function hasLangColor(string: string): string is LanguageColorCodeType {
		return Object.keys(LANGUAGE_COLOR_CODES).includes(string);
	}

	$: langColor = hasLangColor(language) ? LANGUAGE_COLOR_CODES[language] : DEFAULT_COLOR;
</script>

<p class="flex gap-x-1 items-center text-label font-bold dark:text-lightWhite">
	<span style:background-color={langColor} class="language-icon" />
	{language}
</p>

<style lang="postcss">
	.language-icon {
		width: 16px;
		height: 16px;
		@apply rounded-full;
	}
</style>
