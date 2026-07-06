import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Eye, Target, Award } from "lucide-react";

function AnimatedBlock({ children, delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay }}
    >
      {children}
    </motion.div>
  );
}

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 lg:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Tag */}
        <AnimatedBlock>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-ows-purple" />
            <span className="font-mono text-xs tracking-[0.25em] text-ows-purple uppercase">
              About OWS
            </span>
          </div>
        </AnimatedBlock>

        {/* Story */}
        <div className="max-w-4xl">
          <AnimatedBlock delay={0.1}>
            <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-deep-carbon leading-tight mb-8">
              Crafting Excellence in
              <span className="text-ows-purple"> Lubricants & Additives</span>
            </h2>
          </AnimatedBlock>
          <AnimatedBlock delay={0.2}>
            <p className="text-lg text-deep-carbon/70 leading-relaxed mb-6">
              OWS, in German, is an abbreviation for "Oder Was Sonst" meaning "Or What Else?" The company was started by Klaus Bosshammer with the goal to become the premier supplier of the highest quality German products used by the automotive industry, focusing on additives, technical spray can products and lubricants.
            </p>
          </AnimatedBlock>
          <AnimatedBlock delay={0.3}>
            <p className="text-lg text-deep-carbon/70 leading-relaxed mb-8">
              When we first came into the market, we introduced our additives under our "Vitamins for your Car" trademark. Through the efforts of our sales force, a large percentage of the automotive industry now uses our additives regularly as part of their service. OWS is the leading supplier of additives and technical spray cans to many of the official motorcar dealerships.
            </p>
          </AnimatedBlock>
          <AnimatedBlock delay={0.4}>
            <div className="flex items-center gap-2">
              <Award className="text-ows-purple" size={18} />
              <span className="font-mono text-xs text-deep-carbon/50 tracking-wide">MADE IN GERMANY</span>
            </div>
          </AnimatedBlock>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8 mt-16">
          <AnimatedBlock delay={0.1}>
            <div className="p-8 rounded-sm h-full bg-machined-aluminum/30 border border-machined-aluminum">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-sm bg-ows-purple/10 flex items-center justify-center">
                  <Eye className="text-ows-purple" size={20} />
                </div>
                <h3 className="font-heading font-bold text-xl text-deep-carbon">Our Vision</h3>
              </div>
              <p className="text-deep-carbon/60 leading-relaxed">
                To lead the industry with innovative performance systems and high-performance racing lubricants. We are committed to excellence, ensuring our products deliver superior quality and reliability, empowering customers with advanced solutions that enhance efficiency and performance.
              </p>
            </div>
          </AnimatedBlock>

          <AnimatedBlock delay={0.2}>
            <div className="p-8 rounded-sm h-full bg-machined-aluminum/30 border border-machined-aluminum">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-sm bg-ows-purple/10 flex items-center justify-center">
                  <Target className="text-ows-purple" size={20} />
                </div>
                <h3 className="font-heading font-bold text-xl text-deep-carbon">Our Mission</h3>
              </div>
              <p className="text-deep-carbon/60 leading-relaxed">
                To revolutionize the industry through innovation, quality, and performance. We deliver exceptional products and services that exceed expectations, dedicated to continuous improvement, sustainability, and fostering a community built on trust and excellence.
              </p>
            </div>
          </AnimatedBlock>
        </div>
      </div>
    </section>
  );
}