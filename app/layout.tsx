import { ThemeProvider } from "@/components/custom/theme-provider";
import { NavBar } from "@/components/ui/tubelight-navbar";
import ChatBox from "@/components/ui/chat-box";
import localFont from "next/font/local";
import type { Metadata } from "next";
import type { Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Wellcode Studio | Real Estate Photo Editing, Creative & Digital Solutions",
    description: "Wellcode Studio is a one-stop solution for professional real estate photo editing, image retouching, creative design, and custom software development to help businesses scale.",
};


export const viewport: Viewport = {
    themeColor: "#020617",
};


const polymath = localFont({
    src: [
        {
            path: "../public/font/Polymath-Light.otf",
            weight: "300",
            style: "normal",
        },
        {
            path: "../public/font/Polymath-Regular.otf",
            weight: "400",
            style: "normal",
        },
        {
            path: "../public/font/Polymath-Medium.otf",
            weight: "500",
            style: "normal",
        },
        {
            path: "../public/font/Polymath-Semibold.otf",
            weight: "600",
            style: "normal",
        },
        {
            path: "../public/font/Polymath-Black.otf",
            weight: "700",
            style: "normal",
        },
        {
            path: "../public/font/Polymath-Super.otf",
            weight: "800",
            style: "normal",
        },
    ],
    variable: "--font-polymath"
});

const haffer = localFont({
    src: [
        {
            path: "../public/font/Haffer-Light.otf",
            weight: "300",
            style: "normal",
        },
        {
            path: "../public/font/Haffer-Regular.otf",
            weight: "400",
            style: "normal",
        },
        {
            path: "../public/font/Haffer-Medium.otf",
            weight: "500",
            style: "normal",
        },
        {
            path: "../public/font/Haffer-SemiBold.otf",
            weight: "600",
            style: "normal",
        },
        {
            path: "../public/font/Haffer-Bold.otf",
            weight: "700",
            style: "normal",
        },
        {
            path: "../public/font/Haffer-Bold.otf",
            weight: "800",
            style: "normal",
        },
    ],
    variable: "--font-haffer"
});


export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning suppressContentEditableWarning>
            <head />
            <body className={`min-h-screen max-w-screen overflow-x-hidden font-sans ${polymath.variable} ${haffer.variable} antialiased`}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    enableSystem
                    disableTransitionOnChange
                >
                    <NavBar />
                    {children}
                    <ChatBox />
                </ThemeProvider>
            </body>
        </html>
    );
}
