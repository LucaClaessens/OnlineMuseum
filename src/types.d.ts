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

interface ObjectMetadataDb {
    exhibition: string;
    image: string;
    link: string;
    group: string;
}

interface ObjectMetadataGroup {
    key: string;
    objects: ObjectMetadata[];
}

interface ObjectMetadata {
    image: string;
    link: string;
}

interface ModelResource {
    image: string;
    link: string;
    name: string;
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

interface AmphoraFootnote {
    year: number;
    text: string;
}