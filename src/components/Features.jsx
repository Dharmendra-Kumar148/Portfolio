import { motion } from "framer-motion";
import {
  Smartphone,
  Zap,
  Code2,
  Plug,
  LayoutDashboard,
  Layers,
} from "lucide-react";

const features = [
  {
    title: "Responsive Design",
    description: "Ensures seamless experience across all devices.",
    icon: <Smartphone size={32} />,
  },
  {
    title: "Fast Performance",
    description: "Built using Vite + React for optimal speed and responsiveness.",
    icon: <Zap size={32} />,
  },
  {
    title: "Clean Code",
    description: "Organized, maintainable, and scalable code structure.",
    icon: <Code2 size={32} />,
  },
  {
    title: "API Integration",
    description: "Smooth and secure integration with REST APIs and Firebase.",
    icon: <Plug size={32} />,
  },
  {
    title: "UI Precision",
    description: "Pixel-perfect implementation with Tailwind & CSS best practices.",
    icon: <LayoutDashboard size={32} />,
  },
  {
    title: "Scalable Architecture",
    description: "Component-driven design supporting reuse and growth.",
    icon: <Layers size={32} />,
  },
];

const Features = () => {
  return (
    <section className="relative py-24 px-6 text-white overflow-hidden">
      {/* 🎥 Background Video */}
      <motion.video
        autoPlay
        muted
        loop
        playsInline
        src="/assets/features-bg.mp4"
        className="absolute inset-0 w-full h-full object-cover z-0"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      {/* 🖤 Overlay */}
      <div className="absolute inset-0 bg-black/70 z-0" />

      {/* 💎 Foreground Content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-semibold mb-6 bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          What Drives My Work
        </motion.h2>

        <motion.p
          className="text-lg text-gray-400 max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          I build interfaces that are fast, modern, and user-focused. Below are the core values I bring to every project.
        </motion.p>

        {/* ✨ Feature Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 perspective-1000">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl shadow-xl text-left transition-transform duration-300 transform-style-3d"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05, z: 50, y: -10 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: false, amount: 0.5 }}
              style={{
                transformStyle: "preserve-3d",
                backfaceVisibility: "hidden",
              }}
            >
              <div className="text-white mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
