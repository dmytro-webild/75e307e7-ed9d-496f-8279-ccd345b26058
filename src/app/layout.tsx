import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { DM_Sans } from "next/font/google";



export const metadata: Metadata = {
  title: 'CareTech IT Solutions | Best Laptop Service Center in Calicut',
  description: 'CareTech IT Solutions provides reliable laptop, printer, and projector repair services in Calicut. Fast turnaround, expert technicians, and affordable pricing.',
  keywords: ["laptop service calicut, repair shop kozhikode, macbook repair calicut, dell service center, printer repair calicut"],
  openGraph: {
    "title": "CareTech IT Solutions | Top Rated Repair",
    "description": "Leading laptop and printer service center in Kozhikode.",
    "siteName": "CareTech IT Solutions",
    "type": "website"
  },
};

const dmSans = DM_Sans({ variable: "--font-dm-sans", subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${dmSans.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
