import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import owsLogo from "@/assets/ows-logo.png";

const BG_VIDEO = "/hero-video.mp4";
const BG_VIDEO_POSTER = "/hero-poster.jpg";

export default function HeroSection() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    // Belt-and-suspenders autoplay kick: some mobile browsers ignore the
    // autoplay attribute unless muted is also set as a DOM property (not
    // just an attribute) before play() is requested.
    video.muted = true;
    video.play().catch(() => {});
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-deep-carbon">
      {/* Background Video */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster={BG_VIDEO_POSTER}
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={BG_VIDEO} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-r from-deep-carbon/80 via-deep-carbon/40 to-deep-carbon/10" />
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
        backgroundSize: "80px 80px"
      }} />
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-ows-purple/30 rounded-full blur-[90px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full pt-32 pb-20">
        <div className="max-w-3xl">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-10"
          >
            <img
              src={owsLogo}
              alt="OWS - Made in Germany"
              className="h-24 lg:h-28 w-auto"
            />
          </motion.div>

          {/* Tag */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-8 h-px bg-fuchsia-300" />
            <span className="font-mono text-xs tracking-[0.25em] text-fuchsia-300 font-semibold uppercase">
              Oder Was Sonst
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="font-heading font-bold text-4xl md:text-6xl lg:text-7xl text-white leading-[1.05] mb-6"
          >
            We Make Auto Repair
            <br />
            <span className="text-ows-purple">More Convenient</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-lg md:text-xl text-white/60 max-w-xl mb-10 leading-relaxed"
          >
            German-engineered additives, lubricants & technical sprays — "Vitamins for your Car," trusted by official dealerships worldwide.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#products"
              className="inline-flex items-center justify-center px-8 py-4 bg-ows-purple text-white font-heading font-semibold text-sm tracking-wide rounded-sm hover:bg-ows-purple/90 transition-all duration-300"
            >
              Explore Products
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center px-8 py-4 border border-white/20 text-white font-heading font-semibold text-sm tracking-wide rounded-sm hover:border-white/50 hover:bg-white/5 transition-all duration-300"
            >
              Our Story
            </a>
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/30 hover:text-ows-purple transition-colors hidden lg:block"
        aria-label="Scroll down"
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <ChevronDown size={24} />
        </motion.div>
      </motion.a>
    </section>
  );
}