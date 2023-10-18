/**
 * GithubAPIの認証ユーザーのリポジトリ情報取得エンドポイント
 */
export const GET_USER_REPOS = 'GET /user/repos';

export const GITHUB_API_HEADERS = {
	'X-GitHub-Api-Version': '2022-11-28'
} as const;
