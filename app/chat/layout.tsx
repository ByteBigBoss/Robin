import { SiteMetadata } from "@/config/site";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: SiteMetadata.pages.chat.title,
  description: SiteMetadata.pages.chat.description
};

export default function ChatLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
 <section>
    {children}
 </section>
  );
}
