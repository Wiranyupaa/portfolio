"use client";
import { useEffect } from "react";
import React from "react";
import { Html, Head, Main, NextScript } from "next/document";

export default function document() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;

      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);
  return (
    <Html lang="en">
      <Head />
      <body className=" font-primary">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
