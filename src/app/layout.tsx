import "@src/styles/global.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Satria Herman",
  description: "Professional Web Developer",
  icons: {
    icon: "/favicon/favicon.png", // Ganti dengan path ikon Anda
    shortcut: "/favicon/favicon.ico", // Ganti dengan path ikon Anda
    apple: "/favicon/apple-icon.png", // Ganti dengan path ikon Apple Anda
  },
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
