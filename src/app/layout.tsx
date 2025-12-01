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
    icon: [
      { url: "/favicon/web-app-manifest-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon/web-app-manifest-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/favicon/web-app-manifest-192x192.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/manifest.json",
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
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://milanmadusanka.dev/#person",
        "name": "Milan Madusanka",
        "url": "https://milanmadusanka.dev",
        "image": {
          "@type": "ImageObject",
          "url": "https://milanmadusanka.dev/og-image.png",
          "width": 1200,
          "height": 630
        },
        "sameAs": [
          "https://github.com/Milanz247",
          "https://twitter.com/milanmadusanka"
        ],
        "jobTitle": "Full-Stack Developer & DevOps Engineer",
        "worksFor": {
          "@type": "Organization",
          "name": "Milan Madusanka"
        },
        "description": "Full-Stack Developer specializing in React, Next.js, Laravel, and DevOps with 1.5+ years experience"
      },
      {
        "@type": "WebSite",
        "@id": "https://milanmadusanka.dev/#website",
        "url": "https://milanmadusanka.dev",
        "name": "Milan Madusanka Portfolio",
        "description": "Portfolio of Milan Madusanka - Full-Stack Developer specializing in React, Next.js, Laravel, and DevOps",
        "publisher": {
          "@id": "https://milanmadusanka.dev/#person"
        },
        "inLanguage": "en-US"
      },
      {
        "@type": "Organization",
        "@id": "https://milanmadusanka.dev/#organization",
        "name": "Milan Madusanka",
        "url": "https://milanmadusanka.dev",
        "logo": {
          "@type": "ImageObject",
          "url": "https://milanmadusanka.dev/favicon/web-app-manifest-512x512.png"
        },
        "sameAs": [
          "https://github.com/Milanz247"
        ]
      }
    ]
  };

  return (
    <html lang="en" className="!scroll-smooth" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#667eea" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
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
