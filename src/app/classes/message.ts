export interface Message {
    // 
    messageAttachments?: Blob[];
    // 
    messageContent?: string;
    // 
    senderAddress?: string;
    // 
    recipientAddress?: string;
    // 
    messageTime?: string;
}
