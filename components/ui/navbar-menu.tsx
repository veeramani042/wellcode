"use client";
import React, { useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Transition } from "framer-motion";
import { cn } from "@/lib/utils";

const transition: Transition = {
    type: "spring",
    mass: 0.5,
    damping: 11.5,
    stiffness: 100,
};

type MenuItemType = {
    menu_name: string;
    menu_link: string;
    icon?: string;
    sub_menus: MenuItemType[];
};

export const MenuItem = ({
    item,
}: {
    setActive: (item: string) => void;
    active: string | null;
    item: MenuItemType;
}) => {
    const [openMenu, setOpenMenu] = useState<MenuItemType | null>(null);
    const pathname = usePathname();
    const isActive =
        pathname === item.menu_link ||
        (item.menu_link !== "/" && pathname.startsWith(item.menu_link));


    return (
        <div
            className="relative cursor-pointer text-sm font-semibold z-1"
            onMouseEnter={() => { setOpenMenu(item); }}
            onMouseLeave={() => setOpenMenu(null)}
        >
            <Link
                className="block px-6 py-2 rounded-full transition-colors z-10"
                href={item.menu_link}
                aria-current={isActive ? "page" : undefined}
                scroll={true}
            >
                <motion.p transition={{ duration: 0.3 }} className={"dark:text-white"}>
                    {item.menu_name}
                </motion.p>
            </Link>

            {/* Dropdown */}
            <AnimatePresence>
                {(openMenu?.menu_name === item.menu_name && openMenu?.sub_menus?.length > 0) && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full md:-left-70 lg:-left-50 mt-2 md:w-[800px] lg:w-[900px] bg-neutral-900 shadow-md rounded-lg z-10000"
                    >
                        <div className="grid md:grid-cols-4 gap-5 p-4">
                            {item.sub_menus.map((subItem, subIdx) => (
                                <div
                                    // className={cn(subIdx && "col-span-3")}
                                    key={subIdx}
                                    onClick={e => setOpenMenu(null)}
                                >
                                    <Link
                                        href={openMenu?.menu_link + subItem.menu_link + "#content"}
                                        className={cn("block text-lg py-2 text-teal-600 hover:text-teal-600 transition", pathname.includes(subItem.menu_link) && "text-teal-600")}
                                    >
                                        {subItem.menu_name}
                                    </Link>
                                    <ul className="list-none pl-5 w-full">
                                        {subItem.sub_menus.map((el, i) => {

                                            return <li key={i} className="list-item" onClick={e => setOpenMenu(null)}>
                                                <Link
                                                    href={openMenu?.menu_link + el.menu_link + "#content"}
                                                    className={cn("block py-2 text-gray-300 hover:text-teal-600 transition", pathname.includes(el.menu_link) && "text-teal-600")}
                                                >
                                                    {el.menu_name}
                                                </Link>
                                            </li>
                                        })}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Lamp highlight */}
            {isActive && (
                <motion.div
                    layoutId="lamp"
                    className="absolute inset-0 w-full bg-primary/5 rounded-full -z-10"
                    initial={false}
                    transition={transition}
                >
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary rounded-t-full">
                        <div className="absolute w-12 h-6 bg-primary/20 rounded-full blur-md -top-2 -left-2" />
                        <div className="absolute w-8 h-6 bg-primary/20 rounded-full blur-md -top-1" />
                        <div className="absolute w-4 h-4 bg-primary/20 rounded-full blur-sm top-0 left-2" />
                    </div>
                </motion.div>
            )}
        </div>
    );
};

export const Menu = ({
    setActive,
    children,
}: {
    setActive: (item: string | null) => void;
    children: React.ReactNode;
}) => {
    return (
        <LayoutGroup>
            <div
                className="flex items-center gap-3 bg-background/5 border border-border backdrop-blur-lg py-1 px-1 rounded-full shadow-lg"
            >
                {children}
            </div>
        </LayoutGroup>
    );
};
