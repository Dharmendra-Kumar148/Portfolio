import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-6 border-t border-white/10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start md:items-center">

        {/* ⬅️ Left Side - Name & Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold mb-1">Dharmendra Kumar</h3>
          <p className="text-gray-400 text-sm mb-6">
            Frontend Developer | React Enthusiast
          </p>

          <div className="text-sm space-y-3">
            <p className="flex items-center gap-2 text-gray-400">
              <Phone size={16} /> +91-6393830921
            </p>
            <p className="flex items-center gap-2 text-gray-400">
              <Mail size={16} />
              <a
                href="mailto:dharm25122000@email.com"
                className="hover:underline transition text-white"
              >
                dharm25122000@email.com
              </a>
            </p>
            <p className="flex items-center gap-2 text-gray-400">
              <MapPin size={16} /> Kanpur, Uttar Pradesh, India
            </p>
          </div>
        </motion.div>

        {/* ➡️ Right Side - Resume + Social */}
        <motion.div
          className="flex flex-col items-center md:items-end gap-4"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          {/* 📄 Resume */}
          <motion.a
            href="/assets/resume.pdf"
            download
            className="px-6 py-3 bg-gradient-to-r from-white via-gray-200 to-white text-black font-semibold rounded-full shadow-md hover:shadow-xl transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            Download Resume
          </motion.a>

          {/* 🌐 Social Icons */}
          <div>
            <p className="text-sm text-gray-400 mt-4 text-center md:text-right">
              Follow me on
            </p>
            <div className="flex gap-5 mt-2 justify-center md:justify-end">
              <motion.a
                href="https://github.com/Dharmendra-Kumar148"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                className="text-gray-400 hover:text-white transition"
              >
                <Github size={20} />
              </motion.a>
              <motion.a
                href="http://www.linkedin.com/in/dharmendra-kumar-7005871a7"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                className="text-gray-400 hover:text-white transition"
              >
                <Linkedin size={20} />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* © Bottom line */}
      <div className="text-center text-xs text-gray-500 mt-12 border-t border-white/10 pt-6">
        © {new Date().getFullYear()} Dharmendra Kumar. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
