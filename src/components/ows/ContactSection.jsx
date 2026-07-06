import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Send } from "lucide-react";

export default function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Website inquiry from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:info@ows-germany.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="relative py-24 lg:py-32 bg-white">
      <div ref={ref} className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-ows-purple" />
            <span className="font-mono text-xs tracking-[0.25em] text-ows-purple uppercase">
              Get In Touch
            </span>
          </div>
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-deep-carbon leading-tight">
            Let's Talk
          </h2>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          onSubmit={handleSubmit}
          className="bg-machined-aluminum/30 border border-machined-aluminum rounded-sm p-8 lg:p-10 space-y-6"
        >
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block font-mono text-xs tracking-wide text-deep-carbon/50 uppercase mb-2">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                className="w-full rounded-sm border border-machined-aluminum bg-white px-4 py-3 text-deep-carbon placeholder:text-deep-carbon/30 focus:outline-none focus:border-ows-purple transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block font-mono text-xs tracking-wide text-deep-carbon/50 uppercase mb-2">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                className="w-full rounded-sm border border-machined-aluminum bg-white px-4 py-3 text-deep-carbon placeholder:text-deep-carbon/30 focus:outline-none focus:border-ows-purple transition-colors"
                placeholder="you@example.com"
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block font-mono text-xs tracking-wide text-deep-carbon/50 uppercase mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={form.message}
              onChange={handleChange}
              className="w-full rounded-sm border border-machined-aluminum bg-white px-4 py-3 text-deep-carbon placeholder:text-deep-carbon/30 focus:outline-none focus:border-ows-purple transition-colors resize-none"
              placeholder="How can we help?"
            />
          </div>

          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-ows-purple text-white font-heading font-semibold text-sm tracking-wide rounded-sm hover:bg-ows-purple/90 transition-all duration-300"
          >
            Send Message
            <Send size={16} />
          </button>
        </motion.form>
      </div>
    </section>
  );
}
