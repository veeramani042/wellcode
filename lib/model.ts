import { LucideIcon } from "lucide-react"

export type ServiceType = {
    id: number
    service_name: string
    slug: string,
    search_keys: string[],
    title: string,
    sub_title: string
    features: string
    images: string,
    taglines: string,
}

export type CategoryType = {
    id: number
    category_title: string
    slug: string,
    services: ServiceType[]
}

export interface ServiceCard {
    title: string;
    description: string;
    features?: string[]; // optional, because some cards don't have features
    feature_content?: string[]; // optional, because some cards don't have features
    images: string[],
    slug: string
}

export interface ServiceSection {
    id: string;
    title: string;
    tag: string;
    background?: string; // optional, some sections have background
    cards: ServiceCard[];
    subtitle: string,
    icon?: LucideIcon,
    slug: string
}

/* =========================================================
   Page Content Types (SSG Friendly)
   ========================================================= */

export type PagesContent = ServiceInformation[];

/* =========================================================
   Root Page Type
   ========================================================= */

export type ServiceInformation = {
    service_title: string,
    meta_titles: string[];
    meta_descriptions: string[];
    meta_schema?: any;
    slug: string;
    link?: ContentLink
    header: HeaderSection;
    media: Media;
    general_info?: GeneralInfoSection | null;
    our_works?: OurWorksSection | null;
    ai_works?: AiWorksSection | null;
    process?: ProcessSection | null;
    suitable_users?: SuitableUsersSection | null;
    usecase?: UseCaseSection | null;
    footer?: FooterSection | null;
};

/* =========================================================
   Header
   ========================================================= */

export type HeaderSection = {
    title: string;
    sub_title?: string;
    descriptions: string[];
    link?: ContentLink
};

/* =========================================================
   General Info
   ========================================================= */
export type ContentLink = {
    text: string;
    slug: string;
};

[]

export type GeneralInfoSection = {
    title: string;
    descriptions: string[];
    link?: ContentLink
    sub_section?: {
        title: string;
        descriptions?: string[];
        list?: Array<
            | string
            | {
                title: string;
                descriptions: string[];
                link?: ContentLink
            }
        >;
        link?: ContentLink
        phrase_text?: string;
    };
};

/* =========================================================
   Our Works
   ========================================================= */

export type OurWorksSection = {
    title: string;
    descriptions: string[];
    link?: ContentLink
    include?: {
        title: string;
        deliverables: string[];
        phrase_text?: string;
        link?: ContentLink
    } | null;
    list?: OurWorksItem[] | string[] | null;
    phrase_text?: string;
};

export type OurWorksItem = {
    title: string;
    descriptions?: string[];
    link?: ContentLink // supports spelling variation in data
    includes?: string[];
    image?: MediaItem | null
};

/* =========================================================
   AI Works
   ========================================================= */

export type AiWorksSection = {
    title: string;
    descriptions: string[];
    link?: ContentLink
    comparison?: {
        title: string;
        human_title?: string
        human_list?: Array<
            | string
            | {
                title: string;
                descriptions: string[];
                link?: ContentLink
            }
        >
        list: Array<
            | string
            | {
                title: string;
                descriptions: string[];
                link?: ContentLink
            }
        >;
        phrase_text?: string;
        link?: ContentLink
    };
};

/* =========================================================
   Process
   ========================================================= */

export type ProcessSection = {
    title: string;
    descriptions: string[];
    link?: ContentLink
    steps: ProcessStep[];
};

export type ProcessStep = {
    title: string;
    descriptions: string[];
    link?: ContentLink
};

/* =========================================================
   Suitable Users
   ========================================================= */

export type SuitableUsersSection = {
    title: string;
    descriptions: string[];
    users: string[];
    phrase_text?: string;
    link?: ContentLink
};

/* =========================================================
   Use Case
   ========================================================= */

export type UseCaseSection = {
    title: string;
    descriptions: string[];
    list: Array<
        | string
        | {
            title: string;
            descriptions: string[];
            link?: ContentLink
        }
    >;
    phrase_text?: string;
    link?: ContentLink
};

/* =========================================================
   Footer
   ========================================================= */

export type FooterSection = {
    title: string;
    descriptions: string[];
    link?: ContentLink
};

// Base type for any media item
export type MediaItem = {
    title: string
    filepath: string
    alt: string
}

// Comparison type
export type MediaComparison = {
    before: MediaItem
    after: MediaItem
}

// Main media type
export type Media = {
    images: MediaItem[]
    videos: MediaItem[]
    comparison: MediaComparison | null
}
