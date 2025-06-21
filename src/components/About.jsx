import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

const reasons = [
  "Clean & Scalable Code",
  "Pixel-Perfect UI Design",
  "Strong Communication Skills",
  "Quick Learner & Adaptive",
  "API Integration Expert",
  "Responsive First Approach",
  "Agile Development Mindset",
];

const About = () => {
  return (
    <section
      id="about"
      className="relative py-24 px-6 bg-black text-white overflow-hidden"
    >
      <div className="max-w-6xl mx-auto text-center">

        {/* ✅ Dancing Avatar Animation */}
        <Tilt
          tiltMaxAngleX={20}
          tiltMaxAngleY={20}
          perspective={1200}
          scale={1.05}
          transitionSpeed={700}
          gyroscope={true}
          className="w-fit mx-auto mb-8"
        >
          <motion.img
            src="/assets/avatar.png"
            alt="Dharmendra Kumar"
            className="w-32 h-32 rounded-full object-contain shadow-md"
            animate={{
              rotate: [0, 3, -3, 3, 0],
              scale: [1, 1.05, 0.98, 1.02, 1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </Tilt>

        {/* Heading */}
        <motion.h2
          className="text-4xl md:text-5xl font-semibold mb-4 bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          About Me
        </motion.h2>

        <motion.p
          className="text-gray-400 max-w-3xl mx-auto text-lg mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          I’m Dharmendra Kumar, a passionate and detail-oriented developer who crafts fast, scalable, and clean interfaces using modern tools. I enjoy building sleek UIs, solving problems, and collaborating in high-energy teams.
        </motion.p>

        <div className="h-1 w-24 mx-auto bg-gradient-to-r from-white via-gray-400 to-white rounded-full mb-12" />

        {/* Education & Skills */}
        <div className="grid md:grid-cols-2 gap-12 text-left text-sm text-gray-300">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <h3 className="text-xl font-semibold mb-3 text-white border-b border-white/10 pb-2">
              🎓 Education
            </h3>
            <p>
              MCA, 2024<br />
              <span className="text-gray-400 text-sm">
                Dr. A.P.J. Abdul Kalam Technical University, Lucknow
              </span>
            </p>
            <p className="mt-4">
              BCA, 2021<br />
              <span className="text-gray-400 text-sm">
                C.S.J.M. University, Kanpur
              </span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <h3 className="text-xl font-semibold mb-3 text-white border-b border-white/10 pb-2">
              🛠 Skills
            </h3>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Languages:</strong> C++, C, Java, Python, Dart, JavaScript</li>
              <li><strong>Web:</strong> HTML, CSS, React.js, Redux, Bootstrap, Tailwind</li>
              <li><strong>Mobile:</strong> Flutter</li>
              <li><strong>Concepts:</strong> DSA, OOPs, Problem Solving</li>
              <li><strong>Soft Skills:</strong> Team Collaboration, Communication</li>
            </ul>
          </motion.div>
        </div>

        {/* 🧠 Why Work With Me – Marquee Scroll */}
        <div className="mt-20">
          <h3 className="text-2xl font-semibold mb-4">Why Work With Me?</h3>
          <div className="relative w-full overflow-hidden">
            <motion.div
              className="flex gap-6 w-max px-4"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {reasons.concat(reasons).map((reason, idx) => (
                <div
                  key={idx}
                  className="px-6 py-3 bg-white/10 border border-white/10 rounded-full text-sm backdrop-blur-md shadow-md hover:scale-105 transition whitespace-nowrap"
                >
                  {reason}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
