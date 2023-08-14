"use client";
import { useEffect } from "react";
import { ThemeProvider } from "next-themes";
import AOS from "aos";
import "aos/dist/aos.css";

type Props = {
  children: React.ReactNode;
};
export default function Providers({ children }: Props) {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
}
