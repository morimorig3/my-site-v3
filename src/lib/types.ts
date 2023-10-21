import type { THEME } from './const';

export type Theme = (typeof THEME)[keyof typeof THEME];
