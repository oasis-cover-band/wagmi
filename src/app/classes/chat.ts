import { Message } from "./message";

export interface Chat {
    // this wallet address is lower numeric value than walletAddress1
    walletAddress0?: string;
    // this wallet address is higher numeric value than walletAddress0
    walletAddress1?: string;
    // array of Message objects
    messages?: Message[];
}
