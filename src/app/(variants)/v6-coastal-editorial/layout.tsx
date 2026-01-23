import type { Metadata } from "next";
import { DM_Serif_Display, Source_Sans_3 } from "next/font/google";

const dmSerif = DM_Serif_Display({
    weight: "400",
    subsets: ["latin"],
    display: "swap",
    variable: "--font-display",
});

const sourceSans = Source_Sans_3({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-body",
});

export const metadata: Metadata = {
    title: "Eco One Water | V6 Coastal Editorial",
    description: "Premium water treatment services for Florida homeowners.",
};

export default function V6Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div
            className={`${dmSerif.variable} ${sourceSans.variable}`}
            style={{
                "--color-accent": "#1A6B6D",
                "--color-accent-hover": "#145555",
                "--color-sand": "#D4C4A8",
                "--color-sand-light": "#E8DFD0",
                "--color-surface": "#FAF8F5",
                "--color-surface-alt": "#F5F2ED",
                "--color-text": "#2D3436",
                "--color-text-heading": "#1A1A1A",
                "--color-text-muted": "#6B7280",
            } as React.CSSProperties}
        >
            {children}
        </div>
    );
}
