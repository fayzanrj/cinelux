import Navbar from "@/components/navbar/Navbar";
import COLORS from "@/constants/Colors";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";
import Providers from "@/context/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cinelux",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Providers>
          <Toaster
            toastOptions={{
              style: {
                backgroundColor: COLORS.secondaryBG,
                color: "#ffffff",
              },
            }}
          />
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
