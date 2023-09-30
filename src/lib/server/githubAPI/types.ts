import type { GET_USER_REPOS } from './const';
import type { Endpoints } from '@octokit/types';

export type GitHubGetUserReposData = Endpoints[typeof GET_USER_REPOS]['response']['data'][number];
export type GitHubGetUserReposResponse = Endpoints[typeof GET_USER_REPOS]['response'];
export type GitHubGetUserReposParams = Endpoints[typeof GET_USER_REPOS]['parameters'];
