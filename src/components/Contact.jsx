import { useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { toast, Toaster } from "react-hot-toast";

const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const Contact = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    toast.promise(
      emailjs.sendForm(
        "service_c3ghz4e",
        "template_dc2474r",
        formRef.current,
        PUBLIC_KEY
      ),
      {
        loading: "Sending...",
        success: "Message sent successfully!",
        error: "Something went wrong. Please try again.",
      }
    );

    formRef.current.reset();
  };

  return (
    <section
      id="contact"
      className="relative py-20 px-6 text-white overflow-hidden"
    >
      {/* 🎥 Background Video */}
      <motion.video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/assets/contact-bg.mp4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      {/* 🖤 Overlay */}
      <div className="absolute inset-0 bg-black/70 z-0" />

      {/* ✉️ Toaster */}
      <Toaster position="top-right" toastOptions={{ duration: 4000 }} />

      {/* 📝 Content */}
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-semibold mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Let’s Connect
        </motion.h2>

        <p className="text-gray-300 mb-8 text-lg">
          Have a question, idea, or project? Feel free to reach out and I’ll get back to you as soon as possible.
        </p>

        <form ref={formRef} onSubmit={sendEmail} className="space-y-6 text-left">
          {[
            { name: "name", type: "text", placeholder: "Your Name", delay: 0 },
            { name: "email", type: "email", placeholder: "Your Email", delay: 0.1 },
            { name: "phone", type: "tel", placeholder: "Your Phone Number", delay: 0.2 },
            { name: "subject", type: "text", placeholder: "Subject", delay: 0.3 },
          ].map(({ name, type, placeholder, delay }) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay }}
              viewport={{ once: false, amount: 0.5 }}
            >
              <input
                type={type}
                name={name}
                placeholder={placeholder}
                required
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none hover:border-white/40 hover:shadow-lg transition duration-300 transform hover:-translate-y-1 hover:scale-105"
              />
            </motion.div>
          ))}

          {/* Message */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: false, amount: 0.5 }}
          >
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              required
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none hover:border-white/40 hover:shadow-lg transition duration-300 transform hover:-translate-y-1 hover:scale-105"
            />
          </motion.div>

          {/* Hidden Timestamp */}
          <input type="hidden" name="time" value={new Date().toLocaleString()} />

          {/* Submit Button */}
          <motion.button
            type="submit"
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="px-6 py-3 bg-gradient-to-r from-white to-gray-200 text-black font-semibold rounded-full shadow-md hover:shadow-xl transition"
          >
            Send Message
          </motion.button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
