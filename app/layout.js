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
    creator: "@yourTwitterHandle", // اگر دارید، اضافه کنید
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    // apple: "/apple-touch-icon.png",
  },
  other: {
    "google-site-verification": "UsefY2aOqcC6dWs1j-A4-BwzBABZUMo2eq0YFK2xtjo",
  },
};
import Header from "./components/Header";
import SmoothScroll from "./components/SmoothScroll";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* <Header /> */}
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
