import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// 🔁 Scroll-triggered typewriter (ONLY types, no delete)
const useTypeOnScroll = (text, delay = 100, triggerKey = 0) => {
  const [display, setDisplay] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setDisplay("");
    setIndex(0);
  }, [triggerKey]);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplay((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, delay);
      return () => clearTimeout(timeout);
    }
  }, [index, text, delay]);

  return display;
};

// 🔁 Type-once hook (for tagline)
const useTypeOnce = (text, delay = 30) => {
  const [display, setDisplay] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplay((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, delay);
      return () => clearTimeout(timeout);
    }
  }, [index, text, delay]);

  return display;
};

// 🔁 Role rotator
const TypewriterRotator = ({ words }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !deleting) {
      setTimeout(() => setDeleting(true), 1000);
      return;
    }
    if (subIndex === 0 && deleting) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => (deleting ? prev - 1 : prev + 1));
    }, deleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index]);

  useEffect(() => {
    const blinkInterval = setInterval(() => setBlink((b) => !b), 500);
    return () => clearInterval(blinkInterval);
  }, []);

  return (
    <h3 className="text-xl md:text-2xl font-mono text-white mt-4 min-h-[2.5rem]">
      {words[index].substring(0, subIndex)}
      <span className="text-green-400">{blink ? "|" : " "}</span>
    </h3>
  );
};

const Hero = () => {
  const { ref, inView } = useInView({ threshold: 0.6 });
  const [scrollKey, setScrollKey] = useState(0);

  useEffect(() => {
    if (inView) setScrollKey((prev) => prev + 1);
  }, [inView]);

  const typedName = useTypeOnScroll("Hi, I’m Dharmendra Kumar.", 80, scrollKey);
  const typedTagline = useTypeOnce(
    "A software developer focused on creating fast, clean, and modern web experiences.",
    25
  );

  return (
    <section
      ref={ref}
      className="relative min-h-screen overflow-hidden text-white flex items-center justify-center px-4 pt-24"
    >
      {/* 🖼 Background Image with Zoom on Scroll */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/assets/hero-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        initial={{ scale: 1 }}
        whileInView={{ scale: 1.2 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        viewport={{ once: false, amount: 0.6 }}
      />
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* ✨ Foreground Content */}
      <div className="z-20 text-center">
        <h1 className="text-4xl md:text-6xl font-light tracking-wide leading-snug min-h-[4rem]">
          {typedName}
        </h1>
        <p className="mt-4 text-lg text-gray-300 max-w-xl mx-auto min-h-[3rem]">
          {typedTagline}
        </p>

        <TypewriterRotator
          words={["Frontend Developer", "UI Designer", "Problem Solver"]}
        />

        {/* 🚀 Buttons */}
        <motion.div
          className="mt-6 flex gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <a
            href="#projects"
            className="px-6 py-3 border border-white text-white rounded-full font-semibold hover:bg-white hover:text-black transition"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-white text-white rounded-full font-semibold hover:bg-white hover:text-black transition"
          >
            Contact
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
