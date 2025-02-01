"use client"; // 👈 این مهم است!

import dynamic from "next/dynamic";
import Loading from "./components/Loading";
import { NextSeo } from "next-seo";

// استفاده از dynamic با ssr: false
const About = dynamic(() => import("./components/About"), {
  ssr: false,
  loading: () => <Loading />, // تعیین صفحه لودینگ
});
const Portfolio = dynamic(() => import("./components/Portfolio"), {
  ssr: false,
  loading: () => <Loading />, // تعیین صفحه لودینگ
});
const Skills = dynamic(() => import("./components/Skills"), {
  ssr: false,
  loading: () => <Loading />, // تعیین صفحه لودینگ
});
const Blog = dynamic(() => import("./components/Blog"), {
  ssr: false,
  loading: () => <Loading />, // تعیین صفحه لودینگ
});
const Contact = dynamic(() => import("./components/Contact"), {
  ssr: false,
  loading: () => <Loading />, // تعیین صفحه لودینگ
});

import SEO from "./seo.config";

export default function Home() {
  return (
    <>
      {/* اضافه کردن NextSeo درست در اینجا */}
      {/* <NextSeo {...SEO} /> */}
      <About />
      <Portfolio />
      <Skills />
      <Blog />
      <Contact />
    </>
  );
}
