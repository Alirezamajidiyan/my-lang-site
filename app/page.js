"use client";

import dynamic from "next/dynamic";
import Loading from "./components/Loading";
import ScrollToTopButton from "./components/ScrollToTopButton";

const Header = dynamic(() => import("./components/Header"), {
  ssr: false,
  loading: () => <Loading />,
});
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
      <Header />
      <About />
      <Portfolio />
      <Skills />
      <Blog />
      <Contact />
      <ScrollToTopButton />
    </>
  );
}
