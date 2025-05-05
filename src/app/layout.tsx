import { inter, poppins } from "./fonts";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Abel Dutra UI",
  description: "Software Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
