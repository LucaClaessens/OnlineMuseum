interface ExhibitionMetadata {
    artist: string;
    collectionId: string;
    exhibitionIndex: number;
    description: string;
    homepage: string;
    loadId: string;
    loadType: 'iframe' | 'component';
    objects: string[];
    slug: string;
    subsections: [{
        header: string,
        body: string
    }];
    title: string;
}

interface CollectionMetadata {
    daterange: {
        start: Date;
        end: Date;
    }
    length: number;
    title: string;
}

interface ObjectMetadata {
    exhibitions: string[];
    image: string;
    name: string;
    summary: string;
}

interface Amphora {
    amphoraImageUrl: string;
    emoji: string[];
    emojiImageUrl: string;
    name: string;
    origin: string;
    timePeriod: number;
    trackId: number;
}