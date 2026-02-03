"use client"
import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { useMounted } from "@/hooks/use-mounted";
import { cn } from "@/lib/utils"
import { useScroll } from '@/components/ui/use-scroll';
import { ShinyButton } from "./shiny-button"
import { useScrollDirection } from "@/hooks/use-scroll-direction"
import { usePathname, useRouter } from "next/navigation"
import { Menu, MenuItem } from "./navbar-menu";
import { useMediaQuery } from "@/hooks/use-media-query"
import Image from "next/image"
import MobileDrawer from "./mobile-navbar-drawer";

interface NavBarProps {
    className?: string
}

const menus = [
    {
        menu_name: "Home",
        menu_link: "/",
        icon: "",
        sub_menus: []
    },
    {
        menu_name: "Services",
        menu_link: "/services",
        icon: "",
        sub_menus: [
            {
                menu_name: "Real Estate Image Editing",
                menu_link: "/real-estate-services",
                icon: "",
                sub_menus: [
                    {
                        menu_name: "HDR Blending",
                        menu_link: "/hdr-blending",
                        icon: "",
                        sub_menus: []
                    },
                    {
                        menu_name: "Day to Dusk",
                        menu_link: "/day-to-dusk",
                        icon: "",
                        sub_menus: []
                    },
                    {
                        menu_name: "Virtual Staging",
                        menu_link: "/virtual-staging",
                        icon: "",
                        sub_menus: []
                    },
                    {
                        menu_name: "Drone/Aerial Editing",
                        menu_link: "/drone-or-aerial-editing",
                        icon: "",
                        sub_menus: []
                    },
                    {
                        menu_name: "Panorama Stitching",
                        menu_link: "/panorama-stitching",
                        icon: "",
                        sub_menus: []
                    },
                    {
                        menu_name: "Video Editing",
                        menu_link: "/video-editing",
                        icon: "",
                        sub_menus: []
                    },
                    {
                        menu_name: "3D Rendering",
                        menu_link: "/3d-redering",
                        icon: "",
                        sub_menus: []
                    },
                    {
                        menu_name: "Floor Plan",
                        menu_link: "/floor-plan",
                        icon: "",
                        sub_menus: []
                    },
                    {
                        menu_name: "Item Removals",
                        menu_link: "/item-removal",
                        icon: "",
                        sub_menus: []
                    },
                    {
                        menu_name: "Virtual Tour",
                        menu_link: "/virtual-tour",
                        icon: "",
                        sub_menus: []
                    },
                    {
                        menu_name: "Sky Replacement",
                        menu_link: "/sky-replacement",
                        icon: "",
                        sub_menus: []
                    },
                    {
                        menu_name: "Photo Clipping Path",
                        menu_link: "/photo-clipping-path",
                        icon: "",
                        sub_menus: []
                    },
                    {
                        menu_name: "Image De-Cluttering",
                        menu_link: "/image-de-cluttering",
                        icon: "",
                        sub_menus: []
                    },
                    {
                        menu_name: "360 Image Enhancement",
                        menu_link: "/360-image-enhancement",
                        icon: "",
                        sub_menus: []
                    },
                    {
                        menu_name: "MLS Compliant Real Estate",
                        menu_link: "/mls-compliant-real-estate",
                        icon: "",
                        sub_menus: []
                    },
                    {
                        menu_name: "Real Estate Branding Marketing Design",
                        menu_link: "/real-estate-branding-marketing-design",
                        icon: "",
                        sub_menus: []
                    },
                ]
            },
            {
                menu_name: "Digital Product Development",
                menu_link: "/custom-digital-product-development",
                icon: "",
                sub_menus: [
                    {
                        menu_name: "iOS/Android Apps",
                        menu_link: "/ios-android-app-development",
                        icon: "",
                        sub_menus: []
                    },
                    {
                        menu_name: "Custom Software Development",
                        menu_link: "/custom-software-development",
                        icon: "",
                        sub_menus: []
                    },
                    {
                        menu_name: "E-Commerce & CMS",
                        menu_link: "/e-commerce-cms",
                        icon: "",
                        sub_menus: []
                    },
                    {
                        menu_name: "Web Development",
                        menu_link: "/web-development",
                        icon: "",
                        sub_menus: []
                    },
                    {
                        menu_name: "Website Maintenance Support",
                        menu_link: "/website-maintenance-support",
                        icon: "",
                        sub_menus: []
                    },
                    {
                        menu_name: "Cloud Migration Management",
                        menu_link: "/cloud-migration-management",
                        icon: "",
                        sub_menus: []
                    },
                    {
                        menu_name: "API Development Integration",
                        menu_link: "/api-development-integration",
                        icon: "",
                        sub_menus: []
                    },
                    {
                        menu_name: "Saas Application Development",
                        menu_link: "/saas-application-development",
                        icon: "",
                        sub_menus: []
                    },
                ]
            },
            {
                menu_name: "Creative Services",
                menu_link: "/creative-services",
                icon: "",
                sub_menus: [
                    {
                        menu_name: "Logo Creation",
                        menu_link: "/logo-creation",
                        icon: "",
                        sub_menus: []
                    },
                    {
                        menu_name: "Brochure/Flyer",
                        menu_link: "/brochure-flyer",
                        icon: "",
                        sub_menus: []
                    },
                    {
                        menu_name: "Data Management",
                        menu_link: "/data-management",
                        icon: "",
                        sub_menus: []
                    },
                    {
                        menu_name: "Video Services",
                        menu_link: "/video-services",
                        icon: "",
                        sub_menus: []
                    },
                    {
                        menu_name: "E-Commerce",
                        menu_link: "/e-commerce",
                        icon: "",
                        sub_menus: []
                    },
                    {
                        menu_name: "UI/UX Design",
                        menu_link: "/ui-ux-design",
                        icon: "",
                        sub_menus: []
                    },
                    {
                        menu_name: "Drand Identity Design",
                        menu_link: "/brand-identity-design",
                        icon: "",
                        sub_menus: []
                    },
                    {
                        menu_name: "Website UI Redesign",
                        menu_link: "/website-ui-redesign",
                        icon: "",
                        sub_menus: []
                    },
                    {
                        menu_name: "Digital Marketing",
                        menu_link: "/digital-marketing",
                        icon: "",
                        sub_menus: []
                    },
                ]
            },
            {
                menu_name: "Image Editing",
                menu_link: "/image-editing",
                icon: "",
                sub_menus: [
                    {
                        menu_name: "Product Image Editing/Enhancement",
                        menu_link: "/product-image-editing-enhancement",
                        icon: "",
                        sub_menus: []
                    },
                    {
                        menu_name: "Portrait Retouching/Enhancement",
                        menu_link: "/portrait-retouching-enhancement",
                        icon: "",
                        sub_menus: []
                    },
                    {
                        menu_name: "Fashion Image Editing",
                        menu_link: "/fashion-image-editing",
                        icon: "",
                        sub_menus: []
                    },
                    {
                        menu_name: "Automobile Image Editing",
                        menu_link: "/automobile-image-editing",
                        icon: "",
                        sub_menus: []
                    },
                    {
                        menu_name: "Photo Manipulation",
                        menu_link: "/photo-manipulation",
                        icon: "",
                        sub_menus: []
                    },
                    {
                        menu_name: "Image Masking",
                        menu_link: "/image-masking",
                        icon: "",
                        sub_menus: []
                    },
                    {
                        menu_name: "Wedding Photo Enhancement ",
                        menu_link: "/wedding-photo-enhancement",
                        icon: "",
                        sub_menus: []
                    },
                    {
                        menu_name: "Mobile Photo Editing",
                        menu_link: "/mobile-photo-editing",
                        icon: "",
                        sub_menus: []
                    },
                    {
                        menu_name: "High-End Manual Photo Retouching",
                        menu_link: "/high-end-manual-photo-retouching",
                        icon: "",
                        sub_menus: []
                    },
                    {
                        menu_name: "Bulk Ecommerce Image Editing",
                        menu_link: "/bulk-ecommerce-image-editing",
                        icon: "",
                        sub_menus: []
                    },
                    {
                        menu_name: "Image Quality Audit & Optimization",
                        menu_link: "/image-quality-audit-optimization",
                        icon: "",
                        sub_menus: []
                    },
                ]
            },
        ]
    },
    {
        menu_name: "About us",
        menu_link: "/about",
        icon: "",
        sub_menus: [

        ]
    },
    {
        menu_name: "Contact",
        menu_link: "/contact",
        icon: "",
        sub_menus: [

        ]
    },
]

export function NavBar({ }: NavBarProps) {
    const pathname = usePathname();
    const router = useRouter()
    const direction = useScrollDirection();
    const scrolled = useScroll(10);
    const [activeTab, setActiveTab] = useState(menus[0].menu_name);
    const [active, setActive] = useState<string | null>(null);
    const [open, setOpen] = useState(false);
    const isMobile = useMediaQuery("(max-width: 759px)")

    useEffect(() => {
        if (typeof window !== "undefined") {
            document.body.style.overflow = open ? "hidden" : "";
            const current = menus.find((m) => m.menu_link === pathname);
            if (current) setActiveTab(current.menu_name);
        }

        return () => {
            if (typeof window !== "undefined") {
                document.body.style.overflow = "";
            }
        };
    }, [open, pathname]);


    return (
        <motion.header
            animate={{
                y: direction === "down" && !open ? -80 : 0,
                opacity: direction === "down" && !open ? 0 : 1,
            }}
            transition={{ type: "spring", stiffness: 240, damping: 26 }}
            className={cn(
                "top-5 left-1/2 -translate-x-1/2 w-screen max-w-5xl z-50 mx-auto fixed md:rounded-md md:border py-0 md:py-2",
                scrolled && !open && "fixed bg-background/30 backdrop-blur-lg border-border shadow px-2"
            )}
        >
            <nav
                className={cn(
                    "flex h-14 w-full items-center justify-between px-4 md:h-12 md:transition-all md:ease-out",
                    { "md:px-2": scrolled }
                )}
            >
                <Link href="/" className="flex gap-2 items-center">
                    <Image
                        width={50}
                        height={50}
                        src={"/wcs_logo.png"}
                        alt="Wellcode"
                        className="max-w-8 object-contain"
                    />
                    <h6 className="text-xl font-semibold">Wellcode</h6>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex">
                    <Menu setActive={setActive}>
                        {menus.map((el) => (
                            <MenuItem
                                key={el.menu_name}
                                setActive={setActive}
                                active={active}
                                item={el}
                            />
                        ))}
                    </Menu>
                </div>

                {/* Mobile Buttons */}
                <div className="flex gap-1 items-center">
                    <ShinyButton onClick={() => router.push("/contact")}>Get Free Quote</ShinyButton>

                    <div className="md:hidden">
                        <ShinyButton
                            aria-label="Toggle Menu"
                            onClick={() => setOpen((prev) => !prev)}
                            className="px-3 rounded-md border"
                        >
                            {open ? "✖" : "☰"}
                        </ShinyButton>
                    </div>
                </div>
            </nav>

            {/* Mobile Nav Drawer (always in DOM but toggled) */}
            <MobileDrawer
                open={open}
                key={String(open)}
                setOpen={setOpen}
                menus={menus}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            />
        </motion.header>
    );

}

export const WordmarkIcon = (props: React.ComponentProps<"svg">) => (
    <svg viewBox="0 0 84 24" fill="currentColor" {...props}>
        <path d="M45.035 23.984c-1.34-.062-2.566-.441-3.777-1.16-1.938-1.152-3.465-3.187-4.02-5.36..." />
    </svg>
);
