import FaBuildings from './component/Icons/FaBuildings.svelte';
import FaCode from './component/Icons/FaCode.svelte';
import FaDev from './component/Icons/FaDev.svelte';
import FaFlag from './component/Icons/FaFlag.svelte';
import FaLocationDot from './component/Icons/FaLocationDot.svelte';
import FaPeopleGroup from './component/Icons/FaPeopleGroup.svelte';
import SiAdobeIllustrator from './component/Icons/SiAdobeIllustrator.svelte';
import SiCss3 from './component/Icons/SiCss3.svelte';
import SiGitLab from './component/Icons/SiGitLab.svelte';
import SiHtml5 from './component/Icons/SiHtml5.svelte';
import SiJQuery from './component/Icons/SiJQuery.svelte';
import SiJs from './component/Icons/SiJs.svelte';
import SiReact from './component/Icons/SiReact.svelte';
import SiRealm from './component/Icons/SiRealm.svelte';
import SiRedmine from './component/Icons/SiRedmine.svelte';
import SiRedux from './component/Icons/SiRedux.svelte';
import SiSass from './component/Icons/SiSass.svelte';
import SiTs from './component/Icons/SiTs.svelte';

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
	SiSass: SiSass,
	SiJs: SiJs,
	SiJQuery: SiJQuery,
	SiReact: SiReact,
	SiTs: SiTs,
	SiRedux: SiRedux,
	SiGitLab: SiGitLab,
	SiRealm: SiRealm,
	SiRedmine: SiRedmine,
	default: FaFlag
} as const;
