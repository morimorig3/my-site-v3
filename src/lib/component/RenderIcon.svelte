<script lang="ts">
	import FaFlag from '$lib/component/Icons/FaFlag.svelte';
	import { ICON_MAP } from '$lib/const';
	type IconNameType = keyof typeof ICON_MAP;

	export let iconName: IconNameType = 'default';
	export let className = '';

	$: IconComponent = ICON_MAP[iconName] || FaFlag;
</script>

<IconComponent {className} />
