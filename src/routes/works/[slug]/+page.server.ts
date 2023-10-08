import { error } from '@sveltejs/kit';

import type { ICON_MAP } from '$lib/const';
import type { PageServerLoad } from './$types';

interface Post {
	image: string;
	title: string;
	term: string;
	stacks: Card[];
	features: Card[];
	descriptions: Description[];
}

interface Card {
	iconName: IconNameType;
	title?: string;
	label: string;
}

interface Description {
	label: string;
	body: string[];
}

type IconNameType = keyof typeof ICON_MAP;

export const load: PageServerLoad = async () => {
	const post: Post = {
		image: '/works_web-engineer_01.jpg',
		term: 'Jan. 2019 ~ Sep. 2019',
		title: 'コーダー',
		stacks: [
			{
				iconName: 'SiHtml5',
				label: 'HTML'
			},
			{
				iconName: 'SiCss3',
				label: 'CSS'
			},
			{
				iconName: 'SiAdobeIllustrator',
				label: 'Illustrator'
			}
		],
		features: [
			{
				iconName: 'FaLocationDot',
				title: '勤務地',
				label: '大阪'
			},
			{
				iconName: 'FaBuildings',
				title: '勤務形態',
				label: 'オフィス'
			},
			{
				iconName: 'FaDev',
				title: '開発体制',
				label: 'ウォーターフォール'
			},
			{
				iconName: 'FaPeopleGroup',
				title: 'チーム',
				label: '1人'
			},
			{
				iconName: 'FaCode',
				title: '主要スキル',
				label: 'CSS'
			}
		],
		descriptions: [
			{
				label: 'PR',
				body: ['静的なhtmlとcssがメインでインタラクティブの表現にはjQueryを使用していました。']
			},
			{
				label: '概要',
				body: [
					'バナー制作やコンテンツ追加・差し替えなどのWebサイト運用業務に携わりました',
					'クライアント担当者・Webディレクター・デザイナー・エンジニアのそれぞれ1人ずつで'
				]
			}
		]
	};

	if (post) {
		return post;
	}

	throw error(404, 'Not found');
};
