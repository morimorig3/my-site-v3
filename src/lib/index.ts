import axios from 'axios';
import { Octokit } from 'octokit';

import { env } from '$env/dynamic/private';

/**
 * GithubAPIクライアント定義
 */
export const OCTOKIT = new Octokit({
	auth: env.GITHUB_PERSONAL_ACCESS_TOKENS
});

/**
 * Axiosクライアント定義
 */
export const AXIOS = axios.create();
