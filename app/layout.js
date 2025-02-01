import { NextSeo } from "next-seo";
import SEO from "./seo.config";
import Header from "./components/Header";
import SmoothScroll from "./components/SmoothScroll";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NextSeo {...SEO} />
        <Header />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
