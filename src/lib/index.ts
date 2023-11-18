import axios from 'axios';
import { createTransport } from 'nodemailer';
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

/**
 * NodeMailerクライアント
 */
export const TRANSPORTER = createTransport({
	service: 'Gmail',
	secure: true,
	auth: {
		user: env.CONTACT_FORM_RECEIVE_EMAIL,
		pass: env.GOOGLE_APP_PASSWORD
	}
});
