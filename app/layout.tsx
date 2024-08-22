import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import Link from "next/link";

import clsx from "clsx";

import Logo from "@/public/svg/Logo";
import AppContext from "@/context/AppContext";

const josefin_sans = Josefin_Sans({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Chefs Kiss",
  description: "Your fridge manager",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx("h-screen", josefin_sans.className)}>
        <div className="relative h-full w-full bg-pink">
          <div className="flex absolute justify-center items-center flex-col gap-4 bottom-0 h-full left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#E4D00A,transparent)]">
            <Link href="/" className="fixed top-0">
              <Logo />
            </Link>
            <div className="top-20 h-full w-full max-w-full">
              <AppContext>{children}</AppContext>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
