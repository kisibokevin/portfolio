import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
    variable: "--font-poppins",
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    subsets: ["latin"],
})

export const metadata: Metadata = {
    title: "Kisibo Kevin Portfolio",
    description: "Kevin Newton Kisibo - Portfolio",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className=''>
            <body
				className={`${poppins.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
