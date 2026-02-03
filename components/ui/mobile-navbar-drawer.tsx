"use client";

import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";

type MenuItemType = {
    menu_name: string;
    menu_link: string;
    icon?: string;
    sub_menus: MenuItemType[];
};

interface MobileDrawerProps {
    open: boolean;
    setOpen: (open: boolean) => void;
    menus: MenuItemType[];
    activeTab: string;
    setActiveTab: (tab: string) => void;
}

export default function MobileDrawer({
    open,
    setOpen,
    menus,
    activeTab,
    setActiveTab,
}: MobileDrawerProps) {
    const pathname = usePathname();

    return (
        <div
            className={cn(
                "bg-background/95 fixed top-14 bottom-0 left-0 right-0 z-50 md:hidden transition-transform duration-300",
                open ? "translate-x-0" : "translate-x-full"
            )}
        >
            <div className="overflow-y-auto h-fit max-h-[80vh] space-y-3 bg-black/50 backdrop-blur-3xl glass-scroll p-2">
                {menus.map((item) => (
                    <MobileMenuItem
                        key={item.menu_name}
                        item={item}
                        activeTab={activeTab}
                        setActiveTab={setActiveTab}
                        closeMenu={() => setOpen(false)}
                        pathname={pathname}
                    />
                ))}
            </div>
        </div>
    );
}

interface MobileMenuItemProps {
    item: {
        menu_name: string;
        menu_link: string;
        sub_menus: any[];
    };
    activeTab: string;
    setActiveTab: (name: string) => void;
    closeMenu: () => void;
    pathname: string;
}

function MobileMenuItem({
    item,
    activeTab,
    setActiveTab,
    closeMenu,
    pathname,
}: MobileMenuItemProps) {
    const [expanded, setExpanded] = useState(false);
    const hasSubs = item.sub_menus.length > 0;

    return (
        <div className="border-b border-border py-2 rounded-2xl m-2">
            <div className="flex items-center justify-between">
                {/* MAIN LINK (NO EXPAND) */}
                <Link
                    href={item.menu_link}
                    onClick={() => {
                        setActiveTab(item.menu_name);
                        closeMenu();
                    }}
                    className={cn(
                        "flex-1 text-sm font-semibold py-2 px-3 rounded-md transition",
                        "text-foreground/80 hover:text-primary"
                    )}
                >
                    {item.menu_name}
                </Link>

                {/* ONLY ARROW OPENS SUBMENU */}
                {hasSubs && (
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            setExpanded((prev) => !prev);
                        }}
                        className={cn(
                            "p-2 rounded-full transition-transform",
                            expanded && "rotate-90"
                        )}
                    >
                        <ChevronRight size={"18px"} />
                    </button>
                )}
            </div>

            {/* SUBMENU */}
            {hasSubs && expanded && (
                <div className="pl-4 mt-2 space-y-1">
                    {item.sub_menus.map((sub) => (
                        <SubMenuItem
                            key={sub.menu_name}
                            parentLink={item.menu_link}
                            sub={sub}
                            setActiveTab={setActiveTab}
                            closeMenu={closeMenu}
                            pathname={pathname}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

interface SubMenuItemProps {
    parentLink: string;
    sub: {
        menu_name: string;
        menu_link: string;
        sub_menus: any[];
    };
    setActiveTab: (name: string) => void;
    closeMenu: () => void;
    pathname: string;
}

function SubMenuItem({
    parentLink,
    sub,
    setActiveTab,
    closeMenu,
    pathname,
}: SubMenuItemProps) {
    const [expanded, setExpanded] = useState(false);
    const hasSubs = sub.sub_menus.length > 0;
    return (
        <div className="pt-1">
            <div className="flex items-center justify-between">
                {/* SUB MENU LINK (NO EXPAND) */}
                <Link
                    href={parentLink + sub.menu_link + "#content"}
                    onClick={() => {
                        setActiveTab(sub.menu_name);
                        closeMenu();
                    }}
                    className="flex-1 text-sm text-foreground/70 hover:text-primary py-1 px-3"
                >
                    {sub.menu_name}
                </Link>

                {/* ONLY ARROW OPENS INNER SUBMENU */}
                {hasSubs && (
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            setExpanded((prev) => !prev);
                        }}
                        className={cn(
                            "p-2 rounded-full transition-transform",
                            expanded && "rotate-90"
                        )}
                    >
                        <ChevronRight size={"18px"} />
                    </button>
                )}
            </div>

            {hasSubs && expanded && (
                <div className="pl-4">
                    {sub.sub_menus.map((third) => (
                        <Link
                            key={third.menu_name}
                            href={parentLink + third.menu_link + "#content"}
                            onClick={() => {
                                setActiveTab(third.menu_name);
                                closeMenu();
                            }}
                            className="block text-sm text-foreground/70 hover:text-primary py-1 px-3"
                        >
                            {third.menu_name}
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
}
