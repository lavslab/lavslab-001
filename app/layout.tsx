import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "mirror.exe ♡ | lavslab",
  description:
    "A little digital reminder — objects in mirror may be closer to their goals than they appear.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}