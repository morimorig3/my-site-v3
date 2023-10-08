import FaBuildings from './component/Icons/FaBuildings.svelte';
import FaCode from './component/Icons/FaCode.svelte';
import FaDev from './component/Icons/FaDev.svelte';
import FaFlag from './component/Icons/FaFlag.svelte';
import FaLocationDot from './component/Icons/FaLocationDot.svelte';
import FaPeopleGroup from './component/Icons/FaPeopleGroup.svelte';
import SiAdobeIllustrator from './component/Icons/SiAdobeIllustrator.svelte';
import SiCss3 from './component/Icons/SiCss3.svelte';
import SiHtml5 from './component/Icons/SiHtml5.svelte';

export const NAVIGATION_LIST = [
	{
		path: '/about',
		title: 'About'
	},
	{
		path: '/develop',
		title: 'Develop'
	},
	{
		path: '/works',
		title: 'Works'
	},
	{
		path: '/books',
		title: 'Books'
	}
] as const;

export const ICON_MAP = {
	SiHtml5: SiHtml5,
	SiCss3: SiCss3,
	SiAdobeIllustrator: SiAdobeIllustrator,
	FaBuildings: FaBuildings,
	FaLocationDot: FaLocationDot,
	FaDev: FaDev,
	FaPeopleGroup: FaPeopleGroup,
	FaCode: FaCode,
	default: FaFlag
} as const;
