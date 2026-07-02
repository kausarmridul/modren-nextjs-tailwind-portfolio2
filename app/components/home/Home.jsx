"use client";
import React, { useEffect } from "react";
import Hero from "./hero/Hero";
import Services from "./services/Services";
import Resume from "./resume/Resume";
import Projects from "./projects/Projects";
import Skills from "./skills/Skills";
import Review from "./review/Review";
import Blog from "./blog/Blog";
import Contact from "./contact/Contact";
import ResponsiveNav from "./navbar/ResponsiveNav";
import Footer from "./footer/Footer";
import ScrollToTop from "../helper/ScrollToTop";
import { ToastContainer } from "react-toastify";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    const initAOS = async () => {
      await import("aos");
      AOS.init({
        duration: 1000,
        easing: "ease",
        once: true,
        anchorPlacement: "top-bottom",
      });
    };
    initAOS();
  }, []);
  return (
    <div className="overflow-hidden">
      <ToastContainer autoClose={3000} theme="dark" />
      <ResponsiveNav />
      <Hero />
      <Services />
      <Resume />
      <Projects />
      <Skills />
      <Review />
      <Blog />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Home;
