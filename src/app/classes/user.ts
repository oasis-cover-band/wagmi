
import { Accolade } from './accolade';

export interface User {
    /**
     * THESE FIELDS MODIFIED BY BACKEND ONLY.
     */
    // Address or name of the user.
    userId?: string;
    // Address of the user.
    walletAddress?: string;
    // Biography saved by the user.
    bio?: string;
    // Number of followers of this user.
    followers?: number;
    // Number of users this user is following.
    following?: number;
    // Thumbnail image representing user's avatar.
    avatarUri?: string;
    // Thumbnail image representing user's banner.
    bannerUri?: string;
    // Thumbnail image representing user's border.
    borderUri?: string;
    // Thumbnail image representing user's avatar accessory.
    accessoryUri?: string;
    // Array of user's accolades.
    accolades?: Accolade[];
    // First time the user ever logged in. (timestamp ISO string)
    joinDate?: string;
    // Number representation for the user's blockchain reputation. Can be negative
    reputation?: number;
    // List of addresses that this user considers their friend (different than following)
    friends: string[];
}