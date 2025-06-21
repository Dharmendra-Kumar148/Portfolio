import { motion } from "framer-motion";

const techLogos = [
  { src: "/assets/tech/html.svg", alt: "HTML" },
  { src: "/assets/tech/css.svg", alt: "CSS" },
  { src: "/assets/tech/javascript.svg", alt: "JavaScript" },
  { src: "/assets/tech/react.svg", alt: "React" },
  { src: "/assets/tech/redux.svg", alt: "Redux" },
  { src: "/assets/tech/bootstrap.svg", alt: "Bootstrap" },
  { src: "/assets/tech/tailwind.svg", alt: "Tailwind" },
  { src: "/assets/tech/flutter.svg", alt: "Flutter" },
  { src: "/assets/tech/java.svg", alt: "Java" },
  { src: "/assets/tech/python.svg", alt: "Python" },
  { src: "/assets/tech/firebase.svg", alt: "Firebase" },
  { src: "/assets/tech/github.svg", alt: "GitHub" },
];

const TechStackGrid = () => {
  return (
    <section className="py-20 px-6 bg-black text-white">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <motion.h2
          className="text-4xl md:text-5xl font-semibold"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Tech Stack I Use
        </motion.h2>
        <p className="text-gray-400 mt-4 text-lg">
          These are the tools and technologies I regularly work with
        </p>
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 justify-items-center">
        {techLogos.map((logo, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            viewport={{ once: true }}
          >
            <img
              src={logo.src}
              alt={logo.alt}
              title={logo.alt}
              className="h-12 w-auto grayscale hover:grayscale-0 transition duration-300"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TechStackGrid;
