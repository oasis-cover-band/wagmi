
import { Record } from './record';

export interface AccountInfo {
    /**
     * THESE FIELDS MODIFIED BY BACKEND ONLY.
     */
    // Address or name of the account.
    accountId?: string;
    // Address of the account.
    walletAddress?: string;
    // Biography saved by the account.
    bio?: string;
    // Number of followers of this account.
    followers?: number;
    // Number of accounts this account is following.
    following?: number;
    // Thumbnail image representing account's avatar.
    avatarUri?: string;
    // Thumbnail image representing account's banner.
    bannerUri?: string;
    // Thumbnail image representing account's border.
    borderUri?: string;
    // Thumbnail image representing account's avatar accessory.
    accessoryUri?: string;
    // Array of account's accolades.
    record?: Record[];
    // First time the account ever logged in. (timestamp ISO string)
    joinDate?: string;
    // Number representation for the account's blockchain reputation. Can be negative
    reputation?: number;
    // List of addresses that this account considers their friend (different than following)
    friends: string[];
}