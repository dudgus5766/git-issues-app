import { IconAssets } from '../assets';

export type IconSourceType = (typeof IconAssets)[keyof typeof IconAssets];
