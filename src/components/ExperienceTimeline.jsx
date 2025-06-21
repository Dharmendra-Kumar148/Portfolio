import { motion } from "framer-motion";

const projects = [
  {
    year: "2025",
    title: "Image Search App",
    description:
      "Real-time search app with infinite scroll, download options, and responsive UI using React, Unsplash API, and Bootstrap.",
  },
  {
    year: "2024",
    title: "Student CRUD System",
    description:
      "A complete student management system built in React using JSON Server and React Router with full CRUD functionality.",
  },
  {
    year: "2023",
    title: "Daily Planner App",
    description:
      "To-do list app built with React using local state, hooks, and filtering features for everyday task management.",
  },
];

const ExperienceTimeline = () => {
  return (
    <section className="py-20 px-6 bg-black text-white">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-semibold text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          My Project Timeline
        </motion.h2>

        <div className="relative border-l border-white/20 ml-4">
          {projects.map((proj, idx) => (
            <motion.div
              key={idx}
              className="group mb-12 ml-6 relative pl-6"
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              viewport={{ once: false, amount: 0.5 }}
            >
              {/* Timeline Dot */}
              <div className="absolute w-4 h-4 bg-white rounded-full -left-[1.125rem] top-2 border-4 border-black group-hover:scale-125 transition-transform duration-300 shadow-md" />

              {/* Card */}
              <div className="bg-white/5 backdrop-blur-sm p-5 rounded-xl border border-white/10 shadow-md group-hover:scale-[1.03] group-hover:shadow-lg transition-transform duration-300">
                <p className="text-sm text-gray-400 mb-1">{proj.year}</p>
                <h3 className="text-xl font-semibold mb-1">{proj.title}</h3>
                <p className="text-gray-300 text-sm">{proj.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
