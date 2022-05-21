export interface Record {
    // Accolade identifier.
    id: number;
    // Accolade type. (-1 = negative, 0 = neutral, 1 = positive) TODO: enum
    type: number;
    // Description of the accolade.
    description: string;
    // Thumbnail image representing the accolade.
    thumbnailUri: string;
}
