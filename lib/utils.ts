import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { CategoryType } from "./model";
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export const sections = [
    {
        id: 1,
        title: "Realestate services",
        subtitle: "Pushing Boundaries",
        description:
            "We believe in creating technology that transforms how people live and work. Our journey begins with a vision of better systems.",
        image: "https://images.pexels.com/photos/3288100/pexels-photo-3288100.png",
        images: [
            {
                "imgSrc": "https://outsourceimages.com/wp-content/uploads/2024/11/Outsource-images-Video-Editing-After.jpg",
                "alt": "Video editing result - After"
            },
            {
                "imgSrc": "https://outsourceimages.com/wp-content/uploads/2024/11/IMG_0261a.jpg",
                "alt": "Portrait photo enhancement"
            },
            {
                "imgSrc": "https://outsourceimages.com/wp-content/uploads/2024/11/Outsource-images-Wedding-Photo-Enhancement-After.jpg",
                "alt": "Wedding photo enhancement - After"
            },
            {
                "imgSrc": "https://outsourceimages.com/wp-content/uploads/2024/11/TSM_6351_LowRes-scaled-1.jpg",
                "alt": "Interior real estate editing"
            },
            {
                "imgSrc": "https://outsourceimages.com/wp-content/uploads/2024/11/STAGING_IMG_1718_Staging_LowRes-scaled-1.jpg",
                "alt": "Real estate staging enhanced"
            },
            {
                "imgSrc": "https://outsourceimages.com/wp-content/uploads/2024/11/Outsource-images-Real-Estate-Image-Editing-After-1.jpg",
                "alt": "Real estate image editing - After 1"
            },
            {
                "imgSrc": "https://outsourceimages.com/wp-content/uploads/2024/11/Outsource-images-Digital-Photo-Enhancement-After.jpg",
                "alt": "Digital photo enhancement - After"
            },
            {
                "imgSrc": "https://outsourceimages.com/wp-content/uploads/2024/11/Outsource-images-HDR-Blending-After.jpg",
                "alt": "HDR blending photo - After"
            },
            {
                "imgSrc": "https://outsourceimages.com/wp-content/uploads/2024/11/Outsource-images-Image-De-Cluttering-After.jpg",
                "alt": "Image decluttering - After"
            },
            {
                "imgSrc": "https://outsourceimages.com/wp-content/uploads/2024/11/Outsource-images-Real-Estate-Image-Editing-After.jpg",
                "alt": "Real estate image editing - After"
            },
            {
                "imgSrc": "https://outsourceimages.com/wp-content/uploads/2024/11/Outsource-images-Sky-Replacement-After.jpg",
                "alt": "Sky replacement - After"
            }
        ]
        ,
        bgColor: "lime"
    },
    {
        id: 2,
        title: "Image Editing",
        subtitle: "Building Networks",
        description:
            "Every node in our network represents a life touched, a problem solved, a future brightened through meaningful connections.",
        image: "https://images.pexels.com/photos/5900817/pexels-photo-5900817.jpeg",
        images: [
            {
                "imgSrc": "https://outsource-infotech.com/wp-content/uploads/2023/12/8.webp",
                "alt": "Real estate interior photo"
            },
            {
                "imgSrc": "https://outsource-infotech.com/wp-content/uploads/2023/12/DSC07718.webp",
                "alt": "Modern living room interior"
            },
            {
                "imgSrc": "https://outsource-infotech.com/wp-content/uploads/2023/12/DSC07567.webp",
                "alt": "Luxury residential interior"
            },
            {
                "imgSrc": "https://outsource-infotech.com/wp-content/uploads/2023/12/DSC09296.webp",
                "alt": "Real estate bedroom photograph"
            },
            {
                "imgSrc": "https://outsource-infotech.com/wp-content/uploads/2023/12/DSC07600.webp",
                "alt": "High-end interior architecture photo"
            },
            {
                "imgSrc": "https://outsource-infotech.com/wp-content/uploads/2023/12/L1200335a.webp",
                "alt": "Property interior wide shot"
            },
            {
                "imgSrc": "https://outsource-infotech.com/wp-content/uploads/2023/12/DSC_4048a.webp",
                "alt": "Real estate front yard exterior"
            },
            {
                "imgSrc": "https://outsource-infotech.com/wp-content/uploads/2023/12/DSC05829a_1.webp",
                "alt": "Interior hallway real estate photo"
            },
            {
                "imgSrc": "https://outsource-infotech.com/wp-content/uploads/2023/12/DSC07615.webp",
                "alt": "Kitchen real estate photo"
            },
            {
                "imgSrc": "https://outsource-infotech.com/wp-content/uploads/2023/12/DSC05813a_.webp",
                "alt": "Residential living room shot"
            },
            {
                "imgSrc": "https://outsource-infotech.com/wp-content/uploads/2023/12/230221-05909-HDR-79a.webp",
                "alt": "HDR blended real estate interior"
            },
            {
                "imgSrc": "https://outsource-infotech.com/wp-content/uploads/2023/12/048backa.webp",
                "alt": "Beautiful exterior landscape"
            },
            {
                "imgSrc": "https://outsource-infotech.com/wp-content/uploads/2023/12/L1200708a.webp",
                "alt": "Real estate exterior evening view"
            }
        ]

        ,
        bgColor: "violet"
    },
    {
        id: 3,
        title: "Software Development",
        subtitle: "Seamless Experience",
        description:
            "Like waves in an ocean, our solutions move with natural fluidity, adapting to challenges and flowing around obstacles.",
        image: "https://images.pexels.com/photos/7027981/pexels-photo-7027981.jpeg",

        images: [
            {
                "imgSrc": "https://outsource-infotech.com/wp-content/uploads/2024/07/pexels-thisisengineering-3861972-scaled.jpg",
                "alt": "Team working with engineering technology"
            },
            {
                "imgSrc": "https://outsource-infotech.com/wp-content/uploads/2024/07/pexels-ketut-subiyanto-4126724-scaled.jpg",
                "alt": "Professional workspace with laptop"
            },
            {
                "imgSrc": "https://outsource-infotech.com/wp-content/uploads/2024/07/pexels-cottonbro-5082579-1-scaled.jpg",
                "alt": "Creative team collaboration session"
            },
            {
                "imgSrc": "https://outsource-infotech.com/wp-content/uploads/2024/07/pexels-fauxels-3182800.jpg",
                "alt": "Business meeting and team discussion"
            },
            {
                "imgSrc": "https://images.pexels.com/photos/3861967/pexels-photo-3861967.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "alt": "Before Image 6"
            },
            {
                "imgSrc": "https://images.pexels.com/photos/574077/pexels-photo-574077.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "alt": "Before Image 7"
            },
            {
                "imgSrc": "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "alt": "Before Image 8"
            },
            {
                "imgSrc": "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "alt": "Before Image 9"
            },
            {
                "imgSrc": "https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "alt": "Before Image 10"
            },
            {
                "imgSrc": "https://images.pexels.com/photos/2102416/pexels-photo-2102416.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "alt": "Before Image 11"
            },
            {
                "imgSrc": "https://images.pexels.com/photos/3861943/pexels-photo-3861943.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "alt": "Before Image 12"
            }
        ]
        ,
        bgColor: "rose"
    },
    {
        id: 4,
        title: "AI Development",
        subtitle: "Infinite Possibilities",
        description:
            "The universe is vast, and so are the opportunities. We reach for the stars to bring innovation back to Earth.",
        image: "https://images.pexels.com/photos/6035367/pexels-photo-6035367.jpeg",
        images: [
            {
                "imgSrc": "https://images.pexels.com/photos/2085831/pexels-photo-2085831.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "alt": "Before Image 1"
            },
            {
                "imgSrc": "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "alt": "Before Image 2"
            },
            {
                "imgSrc": "https://images.pexels.com/photos/1933900/pexels-photo-1933900.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "alt": "Before Image 3"
            },
            {
                "imgSrc": "https://images.pexels.com/photos/2061168/pexels-photo-2061168.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "alt": "Before Image 4"
            },
            {
                "imgSrc": "https://images.pexels.com/photos/8386364/pexels-photo-8386364.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "alt": "Before Image 5"
            },
            {
                "imgSrc": "https://images.pexels.com/photos/1921326/pexels-photo-1921326.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "alt": "Before Image 6"
            },
            {
                "imgSrc": "https://images.pexels.com/photos/8386369/pexels-photo-8386369.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "alt": "Before Image 7"
            },
            {
                "imgSrc": "https://images.pexels.com/photos/1036642/pexels-photo-1036642.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "alt": "Before Image 8"
            },
            {
                "imgSrc": "https://images.pexels.com/photos/3913025/pexels-photo-3913025.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "alt": "Before Image 9"
            },
            {
                "imgSrc": "https://images.pexels.com/photos/8438979/pexels-photo-8438979.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "alt": "Before Image 10"
            },
            {
                "imgSrc": "https://images.pexels.com/photos/35088937/pexels-photo-35088937/free-photo-of-man-experiencing-virtual-reality-indoors.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "alt": "Before Image 11"
            },
            {
                "imgSrc": "https://images.pexels.com/photos/7432113/pexels-photo-7432113.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "alt": "Before Image 12"
            }
        ]
        ,
        bgColor: "oragne"
    },
];

export const services = [
    {
        service_name: "Real Estate Image Editing",
        sub_title: "Transforming property visuals with precision",
        description: "Enhance real estate images to showcase properties in their best light, attracting buyers and investors.",
        class: "",
        deliverables: [
            {
                title: "HDR Blending",
                sub_title: "Rich, dynamic visuals",
                description: "Merge multiple exposures to create balanced, high-quality real estate images with vibrant detail.",
                images: [],
                videos: [],
                class: ""
            },
            {
                title: "Day to Dusk",
                sub_title: "Twilight transformations",
                description: "Convert daytime property photos into beautiful evening or twilight scenes for dramatic effect.",
                images: [],
                videos: [],
                class: ""
            },
            {
                title: "Virtual Staging",
                sub_title: "Furnished to impress",
                description: "Digitally stage empty properties to show their potential, boosting engagement and appeal.",
                images: [],
                videos: [],
                class: "HOT"
            },
            {
                title: "Drone/Aerial Editing",
                sub_title: "From above, perfected",
                description: "Enhance aerial photos captured by drones for real estate or landscape presentations.",
                images: [],
                videos: [],
                class: ""
            },
            {
                title: "Panorama Stitching",
                sub_title: "Seamless wide views",
                description: "Combine multiple images into breathtaking panoramic shots for real estate showcases.",
                images: [],
                videos: [],
                class: ""
            },
            {
                title: "Video Editing",
                sub_title: "Smooth cinematic tours",
                description: "Polish property videos with professional editing for promotional or virtual tours.",
                images: [],
                videos: [],
                class: ""
            },
            {
                title: "3D Rendering",
                sub_title: "Virtual realism",
                description: "Create photorealistic 3D models of properties for marketing and visualization.",
                images: [],
                videos: [],
                class: ""
            },
            {
                title: "Floor Plan",
                sub_title: "Clear, detailed layouts",
                description: "Design accurate and visually appealing floor plans for properties.",
                images: [],
                videos: [],
                class: ""
            },
            {
                title: "Item Removals",
                sub_title: "Clean, distraction-free visuals",
                description: "Remove unwanted objects from property images for a cleaner, professional look.",
                images: [],
                videos: [],
                class: ""
            }
        ]
    },
    {
        service_name: "Image Editing",
        sub_title: "Polished visuals for every need",
        description: "From portraits to products, we refine your images with professional precision.",
        class: "",
        deliverables: [
            {
                title: "Product Image Editing",
                sub_title: "Showcase with perfection",
                description: "Enhance product photos with retouching, color correction, and background optimization.",
                images: [],
                videos: [],
                class: ""
            },
            {
                title: "Portrait Retouching",
                sub_title: "Flawless personal imagery",
                description: "Refine portraits while keeping natural skin tones and features intact.",
                images: [],
                videos: [],
                class: ""
            },
            {
                title: "Fashion Image Editing",
                sub_title: "Stylish and crisp",
                description: "Edit fashion photography to highlight textures, colors, and design details.",
                images: [],
                videos: [],
                class: ""
            },
            {
                title: "Automobile Image Editing",
                sub_title: "Polished vehicles",
                description: "Enhance automotive photography to highlight design, colors, and shine.",
                images: [],
                videos: [],
                class: "HOT"
            }
        ]
    },
    {
        service_name: "Software / Apps",
        sub_title: "Custom digital solutions",
        description: "Develop scalable and intuitive software applications tailored to your business needs.",
        class: "",
        deliverables: [
            {
                title: "iOS/Android Apps",
                sub_title: "Native mobile experiences",
                description: "Build high-performance mobile apps for iOS and Android with smooth user experience.",
                images: [],
                videos: [],
                class: ""
            },
            {
                title: "Custom Software Development",
                sub_title: "Tailored for your business",
                description: "End-to-end software solutions designed to streamline your business processes.",
                images: [],
                videos: [],
                class: ""
            },
            {
                title: "E-Commerce & CMS",
                sub_title: "Smart online platforms",
                description: "Create e-commerce sites and content management systems with user-friendly interfaces.",
                images: [],
                videos: [],
                class: "HOT"
            }
        ]
    },
    {
        service_name: "Creative Services",
        sub_title: "Designs that captivate",
        description: "Innovative creative solutions including graphics, branding, and multimedia production.",
        class: "",
        deliverables: [
            {
                title: "Logo Creations",
                sub_title: "Unique brand identity",
                description: "Custom logo designs that reflect your brand’s personality and captivate your audience.",
                images: [],
                videos: [],
                class: ""
            },
            {
                title: "AI Model Training",
                sub_title: "Smarter solutions",
                description: "Training and fine-tuning AI models to deliver intelligent, adaptive, and efficient business outcomes.",
                images: [],
                videos: [],
                class: "HOT"
            },
            {
                title: "Data-Related Services",
                sub_title: "Insights that drive growth",
                description: "Comprehensive data solutions including analysis, visualization, and management to empower decision-making.",
                images: [],
                videos: [],
                class: ""
            }
        ]
    }

];

export const allServices = services.flatMap(service => service.deliverables);

export function slugify(title: string) {
    return title.toLowerCase().replace(/\s+/g, "-");
}
export const categories: CategoryType[] = [
    {
        id: 1,
        category_title: "Real Estate Image Editing",
        slug: "real-estate-image-editing",
        services: [
            {
                id: 1,
                service_name: "HDR Blending",
                slug: "hdr-blending",
                title: "HDR Blending",
                sub_title: "HDR Blending enhances the dynamic range of property photos by merging multiple exposures to create well-balanced images with rich details in both bright and dark areas.",
                features: "Exposure fusion; Preserve highlights and shadows; Natural-looking tone mapping; Batch processing support for high-volume edits.",
                images: "",
                taglines: "Bring out every detail in your property shots",
                search_keys: [
                    "hdr",
                    "blending",
                    "exposure fusion",
                    "real estate photos",
                    "tone mapping",
                    "photo enhancement",
                    "hdr blending",
                    "combine multiple exposures",
                    "balanced property photos",
                    "high dynamic range"
                ]
            },
            {
                id: 2,
                service_name: "Day to Dusk",
                slug: "day-to-dusk",
                title: "Day to Dusk Conversion",
                sub_title: "Turn bright daytime property photos into stunning twilight shots with realistic sky replacement, color grading for dusk tones, and interior lighting enhancement.",
                features: "Sky replacement with realistic lighting; Color grading for authentic dusk tones; Window glow and interior balance for a natural twilight effect.",
                images: "",
                taglines: "Turn ordinary daylight into stunning twilight",
                search_keys: [
                    "day",
                    "dusk",
                    "twilight conversion",
                    "sunset effect",
                    "real estate twilight",
                    "sky replacement",
                    "day to dusk",
                    "day to dusk conversion",
                    "transform daytime photos",
                    "twilight-ready listings"
                ]
            },
            {
                id: 3,
                service_name: "Virtual Staging",
                slug: "virtual-staging",
                title: "Virtual Staging",
                sub_title: "Virtual staging allows for digital furniture placement in empty rooms to showcase potential, helping buyers envision a space with real style.",
                features: "Photorealistic furniture placement; Style matching with design preferences; Multiple design options for a customized look; Scale and perspective correction to make everything feel natural.",
                images: "",
                taglines: "Sell faster with beautifully staged interiors",
                search_keys: [
                    "virtual",
                    "staging",
                    "interior design",
                    "real estate marketing",
                    "digital furniture",
                    "home visualization",
                    "virtual staging",
                    "digitally furnish",
                    "style empty rooms",
                    "photorealistic staging"
                ]
            },
            {
                id: 4,
                service_name: "Drone/Aerial Editing",
                slug: "drone-aerial-editing",
                title: "Drone & Aerial Editing",
                sub_title: "Enhance aerial property imagery with perspective correction, contrast adjustments, and object removal to provide a crisp and professional overview of the property.",
                features: "Sky touch-ups; Horizon leveling for straight lines; Object removal and background enhancement; High contrast for vivid, marketable aerial shots.",
                images: "",
                taglines: "Showcase listings with breathtaking aerial shots",
                search_keys: [
                    "drone",
                    "aerial",
                    "sky view",
                    "property aerial shots",
                    "real estate drone",
                    "landscape editing",
                    "drone aerial editing",
                    "enhance aerial imagery",
                    "overhead views",
                    "horizon leveling"
                ]
            },
            {
                id: 5,
                service_name: "Panorama Stitching",
                slug: "panorama-stitching",
                title: "Panorama Stitching",
                sub_title: "Seamlessly combine multiple frames to create wide or 360-degree property panoramas for a comprehensive view of large spaces.",
                features: "Seam alignment for smooth stitching; Exposure matching to avoid visible seams; Distortion correction to maintain natural proportions; High-resolution output for professional display.",
                images: "",
                taglines: "Capture the full scope of a property in one seamless image",
                search_keys: [
                    "panorama",
                    "stitching",
                    "wide angle",
                    "360 view",
                    "real estate panorama",
                    "image merging",
                    "panorama stitching",
                    "merge multiple frames",
                    "seamless panorama",
                    "360-degree panorama"
                ]
            },
            {
                id: 6,
                service_name: "Video Editing",
                slug: "video-editing",
                title: "Real Estate Video Editing",
                sub_title: "Turn property walkthroughs and promotional videos into visually compelling stories with professional editing, stabilization, and color grading.",
                features: "Stabilization to smooth shaky footage; Color grading to enhance visuals; Motion graphics for dynamic storytelling; Pacing and music synchronization for a captivating flow.",
                images: "",
                taglines: "Turn property footage into compelling listing videos",
                search_keys: [
                    "video",
                    "editing",
                    "real estate walkthrough",
                    "property video",
                    "motion graphics",
                    "color grading",
                    "video editing",
                    "polish walkthroughs",
                    "promo clips",
                    "listing videos"
                ]
            },
            {
                id: 7,
                service_name: "3D Rendering",
                slug: "3d-rendering",
                title: "3D Rendering & Visualization",
                sub_title: "Create photorealistic 3D renders of interiors and exteriors to showcase your property's design, whether for marketing or architectural proposals.",
                features: "Architectural visualization for realistic previews; Material and lighting setup for lifelike renders; Camera flythroughs for a virtual tour experience; Furniture and landscaping to match real-world aesthetics.",
                images: "",
                taglines: "Bring designs to life with realistic 3D visuals",
                search_keys: [
                    "3d",
                    "three",
                    "rendering",
                    "architectural visualization",
                    "real estate 3d",
                    "interior rendering",
                    "floor plan 3d",
                    "3d rendering",
                    "photorealistic rendering",
                    "3d visualization"
                ]
            },
            {
                id: 8,
                service_name: "Floor Plan",
                slug: "floor-plan",
                title: "Floor Plan Creation",
                sub_title: "Generate accurate and detailed 2D and 3D floor plans with measurements to help potential buyers visualize property layouts.",
                features: "Precise measurements for accuracy; 2D and 3D export for versatile use; Furniture placement for context; Printable and web-ready formats for easy sharing.",
                images: "",
                taglines: "Make layouts easy to understand at a glance",
                search_keys: [
                    "floor",
                    "plan",
                    "blueprint",
                    "real estate layout",
                    "2d floor plan",
                    "architectural drawing",
                    "floor plan",
                    "generate floor plans",
                    "2d and 3d floor plans",
                    "layout diagrams"
                ]
            },
            {
                id: 9,
                service_name: "Item Removals",
                slug: "item-removals",
                title: "Item & Clutter Removal",
                sub_title: "Remove unwanted objects and distractions from photos to present a clean, clutter-free image that highlights the property's best features.",
                features: "Object removal with background reconstruction; Shadow and reflection correction for a natural look; Batch cleanup for large volumes of photos.",
                images: "",
                taglines: "Clean images that let the property shine",
                search_keys: [
                    "item",
                    "removals",
                    "object removal",
                    "clutter removal",
                    "photo cleanup",
                    "real estate retouching",
                    "item removals",
                    "remove unwanted objects",
                    "clean market-ready photos",
                    "background reconstruction"
                ]
            }
        ]
    },
    {
        id: 2,
        category_title: "Image Editing",
        slug: "image-editing",
        services: [
            {
                id: 1,
                service_name: "Product Image Editing",
                slug: "product-image-editing",
                title: "Product Image Editing",
                sub_title: "Optimize product images for eCommerce platforms by removing backgrounds, enhancing colors, and ensuring compliance with marketplace guidelines for a polished and professional look.",
                features: "Background removal for a clean, white backdrop; Color correction to ensure accurate product representation; Shadow creation for depth; Batch resizing to handle large product collections.",
                images: "",
                taglines: "Make your products look their best online",
                search_keys: [
                    "product",
                    "image",
                    "editing",
                    "ecommerce photos",
                    "background removal",
                    "amazon product images",
                    "product image editing",
                    "optimize ecommerce photos",
                    "consistency and conversion",
                    "white-background compliance"
                ]
            },
            {
                id: 2,
                service_name: "Portrait Retouching",
                slug: "portrait-retouching",
                title: "Portrait Retouching",
                sub_title: "Enhance portraits with professional retouching that smooths skin, removes blemishes, and refines facial features, all while maintaining a natural look for headshots or personal photos.",
                features: "Skin smoothing for a flawless look; Blemish and imperfection removal; Dodge & burn for enhancing facial features; Eye and teeth enhancements for a polished finish.",
                images: "",
                taglines: "Polished portraits that still look real",
                search_keys: [
                    "portrait",
                    "retouching",
                    "skin smoothing",
                    "beauty editing",
                    "headshot enhancement",
                    "photoshop retouch",
                    "portrait retouching",
                    "professional retouching",
                    "natural finish",
                    "headshot polish"
                ]
            },
            {
                id: 3,
                service_name: "Fashion Image Editing",
                slug: "fashion-image-editing",
                title: "Fashion Image Editing",
                sub_title: "High-end editing services for fashion photos, including color grading, body adjustments, and background clean-up, ensuring images are ready for lookbooks, magazines, and online marketing.",
                features: "Color grading for a refined, high-fashion look; Body adjustments to enhance proportions and poses; Background and set clean-up for distraction-free visuals; High-end finishing for professional standards.",
                images: "",
                taglines: "Editorial-grade edits for fashion imagery",
                search_keys: [
                    "fashion",
                    "image",
                    "editing",
                    "model retouching",
                    "lookbook editing",
                    "magazine photos",
                    "fashion image editing",
                    "editorial retouching",
                    "high-end color grading",
                    "lookbook polish"
                ]
            },
            {
                id: 4,
                service_name: "Automobile Image Editing",
                slug: "automobile-image-editing",
                title: "Automobile Image Editing",
                sub_title: "Enhance vehicle photos by controlling reflections, adjusting colors, and replacing backgrounds to showcase cars in the best possible light for dealership listings and ads.",
                features: "Reflection and glare control for clear visuals; Color pop to make the car stand out; Background replacement to match the theme of the ad; Wheel and body touch-ups for detailed enhancement.",
                images: "",
                taglines: "Show cars at their best, every angle",
                search_keys: [
                    "automobile",
                    "car",
                    "image editing",
                    "vehicle retouching",
                    "car dealership photos",
                    "auto enhancement",
                    "automobile image editing",
                    "enhance vehicle photos",
                    "reflection control",
                    "background replacement"
                ]
            }
        ]
    },
    {
        id: 3,
        category_title: "Software / Apps",
        slug: "software-apps",
        services: [
            {
                id: 1,
                service_name: "iOS/Android Apps",
                slug: "ios-android-apps",
                title: "iOS & Android App Development",
                sub_title: "Design and develop custom mobile applications for both iOS and Android platforms, ensuring seamless performance and engaging user experiences with native and cross-platform solutions.",
                features: "UI/UX design for intuitive interfaces; Native and cross-platform development for wider reach; API integration for third-party services; App store deployment to launch your app to the world.",
                images: "",
                taglines: "Mobile apps that engage and perform",
                search_keys: [
                    "ios",
                    "android",
                    "app",
                    "apps",
                    "applications",
                    "mobile apps",
                    "app development",
                    "cross-platform apps",
                    "react native",
                    "ios android apps",
                    "native and cross-platform"
                ]
            },
            {
                id: 2,
                service_name: "Custom Software Development",
                slug: "custom-software-development",
                title: "Custom Software Development",
                sub_title: "Develop bespoke software solutions tailored to your business needs, from web-based applications to complex desktop solutions, helping streamline workflows and automate processes.",
                features: "Full-stack development for scalable solutions; Integration with existing systems for seamless data flow; Custom-built software to meet unique business requirements; Ongoing maintenance and support for long-term success.",
                images: "",
                taglines: "Software built around your business needs",
                search_keys: [
                    "custom",
                    "software",
                    "development",
                    "enterprise",
                    "enterprise apps",
                    "business solutions",
                    "web applications",
                    "web",
                    "website",
                    "applications",
                    "custom software development",
                    "tailored solutions"
                ]
            },
            {
                id: 3,
                service_name: "E-Commerce & CMS",
                slug: "e-commerce-&-cms",
                title: "E-Commerce & CMS Solutions",
                sub_title: "Build and customize powerful eCommerce platforms and Content Management Systems (CMS) to empower businesses, streamline operations, and drive online sales and content management.",
                features: "Shopify/WooCommerce/Headless setups for flexible commerce solutions; CMS customization for easy content management; Payment and shipping integration for seamless transactions; Basic SEO setup to improve site visibility.",
                images: "",
                taglines: "Commerce and content systems that convert",
                search_keys: [
                    "ecommerce",
                    "cms",
                    "shopify",
                    "woocommerce",
                    "wordpress",
                    "content management system",
                    "e-commerce & cms",
                    "online stores",
                    "cms customization",
                    "payment integration"
                ]
            }
        ]
    },
    {
        id: 4,
        category_title: "Creative Services",
        slug: "creative-services",
        services: [
            {
                id: 1,
                service_name: "Logo Creations",
                slug: "logo-creations",
                title: "Logo Design & Branding",
                sub_title: "Create unique and memorable logos that reflect your brand’s identity and leave a lasting impression. From concept to final design, we help craft your business's visual story.",
                features: "Concept exploration and idea generation; Vector logo creation for scalability; Brand guidelines for consistent use; Multiple revisions to refine the final design.",
                images: "",
                taglines: "Logos that tell your brand story",
                search_keys: [
                    "logo",
                    "creations",
                    "branding",
                    "graphic design",
                    "business identity",
                    "vector logo",
                    "logo design",
                    "visual identity",
                    "brand guidelines",
                    "memorable logos"
                ]
            },
            {
                id: 2,
                service_name: "AI Model Training",
                slug: "ai-model-training",
                title: "AI Model Training & Fine-Tuning",
                sub_title: "Train and fine-tune machine learning models tailored to your specific datasets and tasks. We help create intelligent models that can improve decision-making and automate processes.",
                features: "Data preparation and cleaning for accuracy; Model selection based on project needs; Building training pipelines for efficient learning; Evaluation and deployment for real-world use.",
                images: "",
                taglines: "Turn data into intelligent, task-ready models",
                search_keys: [
                    "ai",
                    "model",
                    "training",
                    "machine learning",
                    "deep learning",
                    "neural networks",
                    "ai model training",
                    "fine-tune models",
                    "training pipelines",
                    "data preparation"
                ]
            },
            {
                id: 3,
                service_name: "Data-Related Services",
                slug: "data-related-services",
                title: "Data Services & Visualization",
                sub_title: "Transform complex data into actionable insights with cleaning, analysis, and powerful visualizations that help businesses make informed decisions and identify trends.",
                features: "Data cleaning to remove inconsistencies; ETL (Extract, Transform, Load) processes for efficient data flow; Dashboards and visualizations for easy data interpretation; Statistical analysis to uncover insights.",
                images: "",
                taglines: "Make data understandable and actionable",
                search_keys: [
                    "data",
                    "services",
                    "data analysis",
                    "big data",
                    "data visualization",
                    "data cleaning",
                    "data services",
                    "dashboards",
                    "etl",
                    "statistical analysis"
                ]
            }
        ]
    }
];

export const servicesData = [
    {
        id: "real-estate",
        slug: "real-estate-services",
        title: "High-Conversion Property Imagery",
        tag: "real estate sector",
        cards: [
            {
                title: "HDR Blending",
                slug: "hdr-blending",
                description:
                    "We professionally blend multiple exposures to create naturally balanced real estate images with clear interiors and visible exterior views. Our HDR blending enhances lighting accuracy, preserves fine details, and delivers clean, market-ready visuals that strengthen listing performance and buyer trust.",
                features: ["Multi-Exposure Fusion", "Natural Tone Mapping", "Color & Exposure Balancing", "Highlight & Shadow Preservation"],
                feature_content: ["Combines ambient and flash exposures to achieve evenly lit interiors with realistic window visibility.", "Controls contrast and depth to maintain a clean, realistic look without artificial HDR effects.", "Corrects color casts and exposure inconsistencies for visually accurate and professional results.", "Retains detail in bright and dark areas, ensuring clarity across the entire image."],
                images: ["https://images.unsplash.com/photo-1688309100140-338102710c2f?q=80&w=687&auto=format&fit=crop"],
            },
            {
                title: "Day to Dusk",
                slug: "day-to-dusk",
                description:
                    "At Well Code Studio, we transform daytime property photos into warm, inviting dusk scenes that enhance mood and visual impact. Through realistic lighting, sky replacement, and color grading, our Day to Dusk editing helps listings stand out and create a strong emotional connection with buyers.",
                features: ["Dusk Sky Replacement", "Twilight Color Grading", "Interior & Exterior Light Activation", "Shadow & Atmosphere Refinement"],
                feature_content: ["Replaces flat daytime skies with realistic twilight skies featuring smooth gradients and natural light transitions.", "Applies warm, balanced tones to recreate the soft, inviting ambiance of sunset and early evening.", "Enhances window, porch, and exterior lighting to add depth, warmth, and a lived-in feel.", "Adjusts shadows and contrast to align with dusk lighting for a clean, realistic, and cohesive look."],
                images: ["https://images.unsplash.com/photo-1609286746288-221ff09244f9?q=80&w=1170&auto=format&fit=crop"],
            },
            {
                title: "Virtual Staging Services",
                slug: "virtual-staging",
                description:
                    "We digitally furnish empty or under-furnished spaces to create warm, visually engaging, and market-ready property images. Using professional 3D design and human-led staging, we help buyers visualize scale, purpose, and lifestyle—without the cost or delays of physical staging.",
                features: ["Photo-Realistic Furniture Placement", "Interior & Exterior Staging", "Space & Layout Optimization", "Style-Matched Design Consistency"],
                feature_content: ["Adds high-quality 3D furniture and décor that aligns perfectly with room scale, perspective, and lighting.", "Stages living spaces, bedrooms, balconies, patios, and outdoor areas to enhance overall property appeal.", "Strategically places furniture to highlight room flow, functionality, and usable space.", "Applies suitable design styles with accurate color and lighting adjustments for a natural, cohesive look."],
                images: ["https://images.unsplash.com/photo-1758525866839-2400536a6b1c?q=80&w=1632&auto=format&fit=crop"],
            },
            {
                title: "Drone & Aerial Image Editing",
                slug: "floor-plan",
                description:
                    "We enhance raw drone images to deliver clear, informative, and visually compelling aerial visuals. Our human-led editing improves clarity, balance, and focus—helping real estate professionals showcase property layout, surroundings, and location value with confidence.",
                features: ["Property Focus Enhancement", "Lot & Boundary Marking", "Landmark & Location Pinning", "Aerial Color & Perspective Correction"],
                feature_content: ["Reduces background distractions and enhances key property areas to guide viewer attention naturally.", "Accurately outlines plot lines and boundaries to clearly communicate land layout and property limits.", "Adds clean, balanced pin markers to highlight nearby amenities and points of interest.", "Corrects color, exposure, horizon, and perspective for realistic, well-balanced aerial imagery."],
                images: ["https://images.unsplash.com/photo-1646843602161-a30282505444?q=80&w=627&auto=format&fit=crop"],
            },
            {
                title: "Panorama Stitching Services",
                slug: "image-de-cluttering",
                description:
                    "We combine multiple overlapping images into seamless wide-angle and 360° panoramas that accurately showcase space, scale, and layout. Our human-led panorama stitching delivers distortion-free, high-resolution visuals ideal for real estate listings, virtual tours, and architectural presentations.",
                features: ["Seamless Image Alignment", "Color & Exposure Matching", "Distortion & Nadir Correction", "360° & Virtual Tour Ready Output"],
                feature_content: ["Precisely aligns and blends multiple frames to create smooth, natural-looking panoramic images.", "Balances tones, lighting, and exposure across all frames for visual consistency and realism.", "Removes warping, tripods, and base artifacts to ensure a clean and uninterrupted view.", "Creates high-resolution panoramas compatible with virtual tour platforms and marketing use."],
                images: ["https://images.unsplash.com/photo-1685337859637-d33a17dd5b92?q=80&w=1129&auto=format&fit=crop"],
            },
            {
                title: "Professional Video Editing",
                slug: "drone-or-aerial-editing",
                description:
                    "We transform raw footage into polished, engaging videos that communicate clearly and hold viewer attention. Our human-led video editing enhances visuals, audio, pacing, and storytelling—delivering professional videos ready for listings, marketing, and digital platforms.",
                features: ["Clean Cutting & Flow Structuring", "Color & Visual Consistency", "Audio Clarity Enhancement", "Motion Elements & Text Integration"],
                feature_content: ["Removes unnecessary footage and organizes scenes for smooth pacing and clear storytelling.", "Balances exposure and colors to maintain a professional, brand-aligned look throughout the video.", "Refines sound quality by reducing noise, balancing levels, and syncing voiceovers or music.", "Adds subtle transitions, titles, captions, and graphics to improve clarity and viewer engagement."],
                images: ["https://images.unsplash.com/photo-1683912777472-c5cb866d751a?q=80&w=1631&auto=format&fit=crop"],
            },
        ],
        // icon: Birdhouse,
        subtitle: "Showcase listings with immersive visuals that captivate buyers. Drive faster decisions and maximize property value",
    },

    {
        id: "imaging",
        slug: "imaging",
        title: "Premium Brand Imaging",
        tag: "commercial sector",
        cards: [
            {
                title: "Product Image Editing & Enhancement Services",
                slug: "automotive-synthesis",
                description:
                    "We professionally enhance product images to deliver clean, consistent, and conversion-focused visuals for e-commerce and digital marketplaces. Our product image editing improves clarity, accuracy, and presentation—helping brands build trust, stand out, and increase sales across platforms.",
                features: ["Background Cleanup & Isolation", "Color & Detail Enhancement", "Precision Retouching", "Platform-Ready Optimization"],
                feature_content: ["Remove’s distracting backgrounds and isolates products on clean white or custom backdrops that meet marketplace and brand standards.", "Corrects color, contrast, and exposure while refining textures and details to ensure accurate, visually appealing product representation.", "Eliminates dust, scratches, and minor imperfections without over-editing, keeping products realistic and professional.", "Crops, resizes, and formats images to match e-commerce platform guidelines for consistent, listing-ready output."],
                images: ["https://images.unsplash.com/photo-1744740618649-b324f7f1050d?q=80&w=880&auto=format&fit=crop"],
            },
            {
                title: "Portrait Retouching & Enhancement Services",
                slug: "fashion-editorial",
                description:
                    "We professionally retouch portraits to enhance natural beauty while preserving authenticity and individual character. Our portrait retouching delivers polished, realistic results ideal for professional profiles, fashion portfolios, corporate use, and personal imagery—without over-smoothing or artificial edits.",
                features: ["Natural Skin & Texture Refinement", "Facial Feature Enhancement", "Hair & Detail Cleanup", "Color & Lighting Balance"],
                feature_content: ["Smooths blemishes, uneven tones, and minor imperfections while retaining natural skin texture and realistic detail.", "Subtle refinement of eyes, lips, contours, and expressions to enhance balance and visual impact without altering identity.", "Refines hair volume, removes stray strands, and enhances fine details using precise masking techniques.", "Corrects skin tones and lighting inconsistencies to ensure clean, well-balanced portraits across all use cases."],
                images: ["https://images.unsplash.com/photo-1604074273911-6030c1fee7f6?q=80&w=687&auto=format&fit=crop"],
            },
            {
                title: "Fashion Image Editing Services",
                slug: "ios-android-app-development",
                description:
                    "We professionally edit fashion images to deliver polished, editorial-quality visuals that reflect style, elegance, and brand identity. Our fashion image editing enhances lighting, skin, fabrics, and colors while preserving realism—ideal for campaigns, portfolios, e-commerce, and publications.",
                features: ["Lighting & Shadow Refinement", "Color Accuracy & Tone Control", "Skin & Beauty Retouching", "Apparel & Fabric Enhancement"],
                feature_content: ["Enhances highlights and shadows to add depth, balance, and a premium studio-lit appearance.", "Corrects color casts and refines tones to ensure garments, accessories, and skin appear true-to-life across platforms.", "Refines skin texture and facial details while maintaining natural pores, contours, and expressions.", "Smooths wrinkles, enhances fabric texture, and sharpens garment details for clean, market-ready fashion visuals."],
                images: ["https://images.unsplash.com/photo-1679111745914-635371e09645?q=80&w=687&auto=format&fit=crop"],
            },
        ],
        // icon: Image,
        subtitle:
            "Elevate your corporate identity with striking visuals. Build trust and recognition across every touchpoint.",
    },
    {
        id: "software",
        slug: "software",
        title: "Enterprise Software Synthesis",
        tag: "tech sector",
        cards: [
            {
                title: "Custom Software Development Services",
                slug: "native-app-architecture",
                description:
                    "At Well Code Studio, we build custom software solutions that solve real business problems—not generic use cases. Our tailor-made software is designed around your workflows, goals, and future growth, helping you automate processes, improve efficiency, and scale with confidence. While AI-assisted tools support development speed, human expertise drives logic, architecture, and long-term reliability.",
                features: ["Tailor-Made Software Solutions", "Scalable & Future-Ready Architecture", "Secure & Reliable Development", "End-to-End Development & Support"],
                feature_content: ["We develop fully customized software built around your exact business needs—so your operations adapt to the software, not the other way around.", "Our software is designed to grow with your business, supporting increased users, data, and features without performance issues.", "We follow industry best practices to ensure data security, system stability, and dependable performance across all environments.", "From planning and development to deployment and ongoing support, we manage the complete software lifecycle for smooth, stress-free execution."],
                images: ["https://images.unsplash.com/photo-1690743300330-d190ad8f97dc?q=80&w=1170&auto=format&fit=crop"],
            },
            {
                title: "E-Commerce & CMS Development Services",
                slug: "custom-enterprise-cms",
                description:
                    "At Well Code Studio, we build powerful e-commerce and CMS platforms that help businesses sell online, manage content easily, and scale without limitations. Our solutions are designed for performance, security, and growth—combining human expertise with modern development practices to deliver platforms that convert visitors into customers.",
                features: ["Conversion-Optimized E-Commerce Development", "Scalable & Global-Ready Platforms", "Flexible & Easy-to-Manage CMS", "Secure, Reliable & Future-Proof Architecture"],
                feature_content: ["We build online stores focused on smooth navigation, secure payments, and optimized checkout flows that increase sales and reduce drop-offs.", "Our e-commerce and CMS solutions support multi-currency, international users, integrations, and future expansion without performance issues.", "We develop intuitive CMS systems that allow you to update content, products, and pages easily—without technical dependency.", "Every platform is built with strong security, fast performance, and scalable architecture to support long-term business growth."],
                images: ["https://images.unsplash.com/photo-1676276383594-2f1cdcdf9604?q=80&w=687&auto=format&fit=crop"],
            },
            {
                title: "Web Development Services",
                slug: "ai-automation-logic",
                description:
                    "At Well Code Studio, we build fast, secure, and scalable websites that help businesses grow online. Our web development solutions focus on performance, usability, and conversions—crafted by human experts for long-term success.",
                features: ["Custom & Scalable Development", "Conversion-Focused UI/UX", "Secure & High-Performance Build", "SEO & Mobile Optimized"],
                feature_content: ["Websites built specifically for your business goals, brand identity, and future growth.", "User-friendly layouts and clear journeys designed to turn visitors into leads and customers.", "Clean code, strong security practices, and optimized speed for reliable performance.", "Search-engine-friendly structure with responsive design for all devices."],
                images: ["https://plus.unsplash.com/premium_photo-1680608979589-e9349ed066d5?q=80&w=764&auto=format&fit=crop"],
            },
        ],
        subtitle: "Transform complex systems into clear, compelling stories. Communicate innovation with precision and impact.",
        // icon: Image,
    },
    {
        id: "creative",
        slug: "creative-services",
        title: "Identity & Asset Design",
        tag: "creative sector",
        cards: [
            {
                title: "Professional Logo Creation Services",
                slug: "logo-creation",
                description:
                    "We create custom, memorable logos that help businesses build strong brand recognition and instant trust. At Well Code Studio, our logo designs are crafted to reflect your brand’s identity, values, and long-term vision—perfect for startups, growing brands, and global businesses.",
                features: ["Custom & Brand-Focused Design", "Strategic Visual Identity", "Scalable for All Platforms", "Modern, Timeless & Memorable"],
                feature_content: ["Logos designed from scratch to match your brand personality, industry, and audience—no templates, no generic ideas.", "We blend creativity with branding strategy to ensure your logo communicates credibility, professionalism, and purpose.", "Your logo is delivered in high-quality formats that work seamlessly across websites, social media, print, and marketing materials.", "Clean, modern designs that stay relevant over time and help your brand stand out in competitive markets."],
                images: ["https://images.unsplash.com/photo-1764601841377-2fd86c9fd8bc?q=80&w=1160&auto=format&fit=crop"],
            },
            {
                title: "Professional Brochure & Flyer Design Services",
                slug: "digital-marketing",
                description:
                    "We design visually compelling brochures and flyers that clearly communicate your message and boost brand credibility. At Well Code Studio, our designs are crafted to support marketing, sales, and promotions—perfect for both digital sharing and high-quality print.",
                features: ["Clear Messaging & Smart Layouts", "Brand-Consistent Visual Design", "Print-Ready & Digital-Optimized", "Marketing-Driven Creative Approach"],
                feature_content: ["Well-structured designs that highlight your key offerings, making information easy to read and quick to understand.", "Every brochure and flyer aligns perfectly with your brand identity, colors, and tone for a professional, unified look.", "High-resolution designs delivered in formats ready for printing and digital distribution without quality loss.", "Designs focused on engagement and action—ideal for promotions, events, presentations, and sales campaigns."],
                images: ["https://images.unsplash.com/photo-1632910605645-7a2e40713db1?q=80&w=1170&auto=format&fit=crop"],
            },
        ],
        // icon: Codesandbox,
        subtitle:
            "Craft distinctive brand identities that resonate deeply. Deliver assets that inspire, engage, and endure.",
    },
]


