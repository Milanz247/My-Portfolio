import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/theme-provider";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import ClientWrapper from "@/components/ClientWrapper";
import { ScrollToTopButton } from "@/components/ScrollToTopButton";
import { Toaster } from "sonner";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: "Milan Madusanka | Full-Stack Developer & DevOps Engineer Portfolio",
  description: "Portfolio of Milan Madusanka - Full-Stack Developer specializing in React, Next.js, Laravel, and DevOps. 1.5+ years experience building scalable web applications and managing production infrastructure.",
  keywords: [
    "Full-Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Laravel Developer",
    "DevOps Engineer",
    "RHEL Administrator",
    "Web Developer Portfolio",
    "Sri Lanka Software Engineer"
  ],
  authors: [{ name: "Milan Madusanka", url: "https://github.com/Milanz247" }],
  creator: "Milan Madusanka",
  publisher: "Milan Madusanka",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://milanmadusanka.dev",
    title: "Milan Madusanka | Full-Stack Developer & DevOps Engineer",
    description: "Portfolio showcasing web development projects, system administration, and DevOps work. Specializing in React, Next.js, Laravel, and Linux systems.",
    siteName: "Milan Madusanka Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Milan Madusanka - Full-Stack Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Milan Madusanka | Full-Stack Developer & DevOps Engineer",
    description: "Portfolio showcasing web development projects and DevOps expertise",
    images: ["/og-image.png"],
    creator: "@milanmadusanka",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
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
            <Toaster position="top-right" richColors closeButton />
          </ClientWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
