import "./globals.css";
import { Inter } from "next/font/google";
import { Metadata } from "next";

import Providers from "@/providers/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "creative-sam-portfolio",
  description: "A Portfolio to showcase my current project and what I do",
};

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={inter.className}
        data-aos-easing="ease"
        data-aos-duration="400"
        data-aos-delay="0"
      >
        <Providers>{children}</Providers>
        {modal}
      </body>
    </html>
  );
}
