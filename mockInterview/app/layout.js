import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "AI Interview Mocker",
    description: "Mock Interview Preparation with AI",
};

export default function RootLayout({ children }) {
    return (
        <ClerkProvider>
            <html lang="en">
                <body className={inter.className}>
                    <Toaster />
                    {children}
                </body>
            </html>
        </ClerkProvider>
    );
}
