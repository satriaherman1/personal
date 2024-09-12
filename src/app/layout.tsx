import "@src/styles/global.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Satria Herman",
  description: "Professional Web Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` antialiased`}>{children}</body>
    </html>
  );
}
