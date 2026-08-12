import type { Metadata } from "next";
import { Inter, Hanken_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
});

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-hanken-grotesk',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  variable: '--font-jetbrains-mono',
});

export const metadata: Metadata = {
  title: "Ravly Ramdhani - Backend-focused Full Stack Developer",
  description: "Computer Engineering student and Full Stack Developer specializing in backend systems, blockchain, and modern web development. View my portfolio and projects.",
  keywords: ["Full Stack Developer", "Backend Developer", "Web Development", "Blockchain", "Portfolio", "Ravly Ramdhani"],
  authors: [{ name: "Ravly Ramdhani" }],
  openGraph: {
    title: "Ravly Ramdhani - Backend-focused Full Stack Developer",
    description: "Computer Engineering student and Full Stack Developer specializing in backend systems, blockchain, and modern web development.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${hankenGrotesk.variable} ${jetbrainsMono.variable} antialiased`}>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
