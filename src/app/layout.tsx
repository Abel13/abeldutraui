import type { Metadata } from "next";
import { Raleway, Yanone_Kaffeesatz } from "next/font/google";
import "./globals.css";

const raleway = Raleway({ subsets: ["latin"] });
const yanoneKaffeesatz = Yanone_Kaffeesatz({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Abel Dutra UI",
  description: "Personal website of Abel Dutra",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={yanoneKaffeesatz.className}>
      <body className={raleway.className}>{children}</body>
    </html>
  );
}
