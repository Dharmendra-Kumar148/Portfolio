import { motion } from "framer-motion";

const techLogos = [
  { src: "/assets/tech/html.svg", alt: "HTML" },
  { src: "/assets/tech/css.svg", alt: "CSS" },
  { src: "/assets/tech/javascript.svg", alt: "JavaScript" },
  { src: "/assets/tech/react.svg", alt: "React" },
  { src: "/assets/tech/redux.svg", alt: "Redux" },
  { src: "/assets/tech/tailwind.svg", alt: "Tailwind" },
  { src: "/assets/tech/bootstrap.svg", alt: "Bootstrap" },
  { src: "/assets/tech/flutter.svg", alt: "Flutter" },
  { src: "/assets/tech/java.svg", alt: "Java" },
  { src: "/assets/tech/python.svg", alt: "Python" },
  { src: "/assets/tech/firebase.svg", alt: "Firebase" },
  { src: "/assets/tech/github.svg", alt: "GitHub" },
];

const TechStack = () => {
  return (
    <section className="relative py-24 px-6 bg-black text-white overflow-hidden">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <motion.h2
          className="text-4xl md:text-6xl font-light tracking-wide leading-snug"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Tech Stack I Love
        </motion.h2>
        <motion.p
          className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          From HTML to Firebase — I build smooth, scalable, and modern digital experiences using these tools.
        </motion.p>
      </div>

      {/* 🔁 Bug-free Scrolling Marquee with No Clipping */}
      <div className="relative w-screen overflow-hidden">
        <motion.div
          className="flex items-center gap-16 px-8"
          style={{ width: "max-content" }}
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {techLogos.map((logo, idx) => (
            <motion.div
              key={idx}
              className="transition-transform duration-300 ease-in-out"
              whileHover={{ scale: 1.1 }}
            >
              <div className="p-2 flex items-center justify-center">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  title={logo.alt}
                  loading="lazy"
                  className="h-12 md:h-14 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
