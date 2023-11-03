import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Resource List App",
  description: "App for managing resources such as URL, images",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
