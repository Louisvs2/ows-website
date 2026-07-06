import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const PLAYER_VIDEO = "https://media.base44.com/videos/public/6a4bbdb2a3cc8316b36507ce/aa076bc57_ScreenRecording_07-06-202617-29-49_1.mov";

export default function VideoSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-24 lg:py-32 bg-deep-carbon overflow-hidden">
      <div className="absolute inset-0 opacity-[0.05]" style={{
        backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
        backgroundSize: "80px 80px"
      }} />
      <div ref={ref} className="relative z-10 max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-10 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-ows-purple" />
            <span className="font-mono text-xs tracking-[0.25em] text-ows-purple uppercase">
              In Action
            </span>
            <div className="w-8 h-px bg-ows-purple" />
          </div>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-white leading-tight">
            See OWS in Motion
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="relative rounded-sm overflow-hidden border border-white/10 shadow-2xl bg-black"
        >
          <video
            controls
            playsInline
            className="w-full aspect-video object-contain bg-black"
            poster=""
          >
            <source src={PLAYER_VIDEO} type="video/mp4" />
          </video>
        </motion.div>
      </div>
    </section>
  );
}