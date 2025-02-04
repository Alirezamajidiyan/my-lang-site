import Script from "next/script";
import Header from "./components/Header";
import SmoothScroll from "./components/SmoothScroll";
import "./globals.css";
import GoogleAnalytics from "./components/GoogleAnalytics";

export const metadata = {
  title: "Alireza Majidian | Fullstack MERN Developer",
  description:
    "Experienced Fullstack Developer specializing in MERN Stack (MongoDB, Express, React, Node.js), Next.js, and scalable web applications.",
  keywords: [
    "Fullstack Developer",
    "MERN Stack",
    "Next.js Developer",
    "React Developer",
    "Node.js",
    "JavaScript",
    "Web Development",
  ].join(", "),
  robots: "index, follow",
  openGraph: {
    type: "website",
    title: "Alireza Majidian | Fullstack MERN Developer",
    description:
      "Explore my portfolio showcasing MERN Stack projects, Next.js applications, and advanced web development skills.",
    images: ["https://yourwebsite.com/og-image.jpg"],
    url: "https://alirezamajidian.vercel.app/",
    siteName: "Alireza Majidian Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alireza Majidian | Fullstack MERN Developer",
    description:
      "Passionate Fullstack Developer with expertise in MongoDB, Express, React, and Node.js. Check out my latest projects!",
    images: ["https://yourwebsite.com/twitter-og-image.jpg"],
    creator: "@yourTwitterHandle",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  other: {
    "google-site-verification": "UsefY2aOqcC6dWs1j-A4-BwzBABZUMo2eq0YFK2xtjo",
  },
};

const GA_TRACKING_ID = "G-54VELCWS0L";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="referrer" content="no-referrer-when-downgrade" />
        {/* Google Analytics Script */}
        <Script
          strategy="beforeInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
        {/* Google Analytics noscript for non-JS browsers */}
        <noscript>
          <img
            src={`https://www.googletagmanager.com/ns.html?id=${GA_TRACKING_ID}`}
            height="1"
            width="1"
            style={{ display: "none" }}
            alt=""
          />
        </noscript>
      </head>
      <body>
        <GoogleAnalytics />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
