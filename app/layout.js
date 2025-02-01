
import Header from "./components/Header";
import SmoothScroll from "./components/SmoothScroll";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <SmoothScroll>{children}</SmoothScroll>
        {/* {children} */}
      </body>
    </html>
  );
}
