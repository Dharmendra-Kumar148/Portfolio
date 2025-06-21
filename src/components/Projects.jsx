import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "CRUD operations",
    description:
      "This project is a student management system where you can view, add, edit, and delete student records. It uses React, React Router, and JSON Server for full CRUD functionality.",
    link: "https://github.com/Dharmendra-Kumar148/student-portal.git",
  },
  {
    title: "Image Search",
    description:
      "A real-time image search app with infinite scroll, Bootstrap UI, and download options in various sizes. Built using React, Axios, and a REST API.",
    link: "https://github.com/Dharmendra-Kumar148/gptsearch.git",
    liveDemo: "https://gptsearch-ten.vercel.app/",
  },
  {
    title: "Daily Planner",
    description:
      "A responsive to-do app built with React. Features include task filtering, sorting, and a clear-all button. Strengthened skills in hooks, state, and UI design.",
    link: "https://github.com/Dharmendra-Kumar148/react-to-do.git",
  },
];

const Projects = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.3 });

  useEffect(() => {
    if (inView) {
      controls.start({
        scale: [1, 1.2, 1],
        transition: {
          duration: 10,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        },
      });
    } else {
      controls.stop();
    }
  }, [inView, controls]);

  return (
    <section
      id="projects"
      className="relative min-h-screen py-20 px-6 text-white overflow-hidden bg-black"
    >
      {/* 🔄 Apple-style dark video background */}
      <motion.div ref={ref} className="absolute inset-0 z-0" animate={controls}>
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          src="/assets/projects-bg.mp4"
        />
      </motion.div>

      {/* 🖤 Keep dark overlay */}
      <div className="absolute inset-0 bg-black/80 z-0" />

      {/* ✨ Foreground content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-semibold mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          My Projects
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              className="group bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-2xl shadow-md text-left transition duration-300"
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(255, 255, 255, 0.2)",
              }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              viewport={{ once: false, amount: 0.5 }}
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-4 text-sm">{project.description}</p>

              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-white text-black text-sm rounded-full hover:bg-gray-200 transition"
                >
                  <Github size={16} /> GitHub
                </a>

                {project.liveDemo && (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 border border-white text-white text-sm rounded-full hover:bg-white hover:text-black transition"
                  >
                    <ExternalLink size={16} /> Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
