import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";

const plusJakarta = Plus_Jakarta_Sans({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-plus-jakarta",
});

export const metadata: Metadata = {
    title: "Eco One Water | v5 Style Pass",
    description: "Premium water treatment services.",
};

export default function V5Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className={`${plusJakarta.variable} font-sans`}>
            {children}
        </div>
    );
}
