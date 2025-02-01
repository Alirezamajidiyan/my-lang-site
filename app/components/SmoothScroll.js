"use client";
import { useEffect } from "react";
import { scroller } from "react-scroll";

const SmoothScroll = ({ children }) => {
  useEffect(() => {
    scroller.scrollTo("top", { smooth: true, duration: 500 });
  }, []);

  return <main className="pt-20">{children}</main>;
};

export default SmoothScroll;
