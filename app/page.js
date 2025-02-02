"use client";

import Head from "next/head";
import dynamic from "next/dynamic";
import Loading from "./components/Loading";
import ScrollToTopButton from "./components/ScrollToTopButton";

const About = dynamic(() => import("./components/About"), {
  ssr: false,
  loading: () => <Loading />,
});
const Portfolio = dynamic(() => import("./components/Portfolio"), {
  ssr: false,
  loading: () => <Loading />,
});
const Skills = dynamic(() => import("./components/Skills"), {
  ssr: false,
  loading: () => <Loading />,
});
const Blog = dynamic(() => import("./components/Blog"), {
  ssr: false,
  loading: () => <Loading />,
});
const Contact = dynamic(() => import("./components/Contact"), {
  ssr: false,
  loading: () => <Loading />,
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Alireza Majidian</title>
        <meta
          name="description"
          content="Personal website of Alireza Majidian, a passionate web developer specializing in Next.js, React, and Tailwind CSS."
        />
        <meta property="og:title" content="Alireza Majidian | Web Developer" />
        <meta
          property="og:description"
          content="Explore my web development projects including Next.js, React, and more."
        />
        <meta
          property="og:image"
          content="https://yourwebsite.com/og-image.jpg"
        />
      </Head>

      <About />
      <Portfolio />
      <Skills />
      <Blog />
      <Contact />
      <ScrollToTopButton />
    </>
  );
}
