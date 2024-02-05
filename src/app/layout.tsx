import { MaxWidthWrapper } from "@/components/MaxWidthWrapper";
import PageWrapper from "@/components/PageWrapper";
import Header from "@/components/ui/Header";
import HeaderMobile from "@/components/ui/HeaderMobile";
import SideNav from "@/components/ui/SideNav";
import "@/styles/globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { cn } from "lib/utils";

import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Employ Pilot",
  description: "Jobs generated from ai",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={cn(
            "relative h-full font-sans antialiased",
            inter.variable,
          )}
        >
          <div className="flex">
            <SideNav />

            <main className="flex-1">
              <MaxWidthWrapper>
                <Header />
                <HeaderMobile />
                <PageWrapper>{children}</PageWrapper>
              </MaxWidthWrapper>
            </main>
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
