import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/theme-provider";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import ClientWrapper from "@/components/ClientWrapper";
import { ScrollToTopButton } from "@/components/ScrollToTopButton";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My Portfolio - Software Engineer",
  description: "A passionate Software Engineer from Sri Lanka creating innovative web experiences",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth" suppressHydrationWarning>
      <body 
        className={`${inter.variable} ${firaCode.variable} antialiased`}
      >
        <ThemeProvider>
          <ClientWrapper>
            <AnimatedBackground /> 
            <Header />
            <main className="pt-24 overflow-x-hidden w-full max-w-full">{children}</main>
            <Footer />
            <ScrollToTopButton />
          </ClientWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
