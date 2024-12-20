import FaBuildings from './component/Icons/FaBuildings.svelte';
import FaCar from './component/Icons/FaCar.svelte';
import FaCode from './component/Icons/FaCode.svelte';
import FaDev from './component/Icons/FaDev.svelte';
import FaFlag from './component/Icons/FaFlag.svelte';
import FaJava from './component/Icons/FaJava.svelte';
import FaLocationDot from './component/Icons/FaLocationDot.svelte';
import FaPeopleGroup from './component/Icons/FaPeopleGroup.svelte';
import FaPhone from './component/Icons/FaPhone.svelte';
import FaScrewDriverWrench from './component/Icons/FaScrewDriverWrench.svelte';
import SiAdobeDreamWeaver from './component/Icons/SiAdobeDreamWeaver.svelte';
import SiAdobeIllustrator from './component/Icons/SiAdobeIllustrator.svelte';
import SiAdobePhotoShop from './component/Icons/SiAdobePhotoShop.svelte';
import SiAmazonWebServices from './component/Icons/SiAmazonWebServices.svelte';
import SiCss3 from './component/Icons/SiCss3.svelte';
import SiGatsby from './component/Icons/SiGatsby.svelte';
import SiGit from './component/Icons/SiGit.svelte';
import SiGitLab from './component/Icons/SiGitLab.svelte';
import SiGo from './component/Icons/SiGo.svelte';
import SiGulp from './component/Icons/SiGulp.svelte';
import SiHtml5 from './component/Icons/SiHtml5.svelte';
import SiJQuery from './component/Icons/SiJQuery.svelte';
import SiJs from './component/Icons/SiJs.svelte';
import SiNext from './component/Icons/SiNext.svelte';
import SiPostgresql from './component/Icons/SiPostgresql.svelte';
import SiReact from './component/Icons/SiReact.svelte';
import SiRealm from './component/Icons/SiRealm.svelte';
import SiRedmine from './component/Icons/SiRedmine.svelte';
import SiRedux from './component/Icons/SiRedux.svelte';
import SiSass from './component/Icons/SiSass.svelte';
import SiSpring from './component/Icons/SiSpring.svelte';
import SiSvelte from './component/Icons/SiSvelte.svelte';
import SiTerraform from './component/Icons/SiTerraform.svelte';
import SiTs from './component/Icons/SiTs.svelte';
import SiWordPress from './component/Icons/SiWordPress.svelte';

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
	},
	{
		path: '/contact',
		title: 'Contact'
	}
] as const;

export const ICON_MAP = {
	SiHtml5: SiHtml5,
	SiCss3: SiCss3,
	SiAdobeIllustrator: SiAdobeIllustrator,
	SiAdobePhotoShop: SiAdobePhotoShop,
	SiAdobeDreamWeaver: SiAdobeDreamWeaver,
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
	SiGit: SiGit,
	SiRealm: SiRealm,
	SiRedmine: SiRedmine,
	SiWordPress: SiWordPress,
	SiGulp: SiGulp,
	FaCar: FaCar,
	FaScrewDriverWrench: FaScrewDriverWrench,
	FaPhone: FaPhone,
	SiGo: SiGo,
	SiNext: SiNext,
	SiGatsby: SiGatsby,
	SiSvelte: SiSvelte,
	FaJava: FaJava,
	SiSpring: SiSpring,
	SiAmazonWebServices: SiAmazonWebServices,
	SiPostgresql: SiPostgresql,
	SiTerraform: SiTerraform,
	default: FaFlag
} as const;

export const ERROR_MESSAGE_COMMON = 'データの取得に失敗しました';

export const THEME = {
	DARK: 'dark',
	LIGHT: 'light'
} as const;

export const THEME_LOCAL_STORAGE_KEY = 'theme';
