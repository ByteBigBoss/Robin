import type { Metadata } from "next";

import "@/styles/globals.css";
import { poppins } from "@/lib/fonts";
import { SiteMetadata } from "@/config/site";

import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';


export const metadata: Metadata = {
  title: SiteMetadata.title,
  description: SiteMetadata.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} flex flex-col items-center`} suppressHydrationWarning>
        <PrimeReactProvider>
          <main className=" mx-auto w-full h-auto  text-white min-h-screen bg-[#000000] overflow-x-hidden">
            {children}
          </main>
        </PrimeReactProvider>
      </body>
    </html>
  );
}
