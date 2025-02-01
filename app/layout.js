import Head from "next/head";
import Header from "./components/Header";
import SmoothScroll from "./components/SmoothScroll";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Head>
          <meta
            name="description"
            content="A passionate web developer specializing in Next.js, React, and Tailwind CSS."
          />
          <meta name="robots" content="index, follow" />
          <meta property="og:type" content="website" />
          <meta
            property="og:title"
            content="Alireza Majidian | Web Developer"
          />
          <meta
            property="og:description"
            content="Personal website of Alireza Majidian, a passionate web developer."
          />
          <meta
            property="og:image"
            content="https://yourwebsite.com/og-image.jpg"
          />
          <meta property="og:url" content="https://yourwebsite.com" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="Alireza Majidian | Web Developer"
          />
          <meta
            name="twitter:description"
            content="Personal website of Alireza Majidian"
          />
          <meta
            name="twitter:image"
            content="https://yourwebsite.com/twitter-og-image.jpg"
          />
        </Head>
        <Header />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
