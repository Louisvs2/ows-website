import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Droplets, Fuel, Cog, Shield } from "lucide-react";

const CATEGORIES = [
  { icon: Droplets, title: "Additives", desc: "Engine oil and fuel system additives under our \"Vitamins for your Car\" trademark." },
  { icon: Cog, title: "Technical Sprays", desc: "Professional-grade technical spray can products for workshops and dealerships." },
  { icon: Shield, title: "Lubricants", desc: "High-performance racing and passenger car engine lubricants, fully synthetic formulas." },
  { icon: Fuel, title: "Auto Care", desc: "Premium auto care products engineered to German quality standards." },
];

export default function ProductsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="products" className="relative py-24 lg:py-32 bg-machined-aluminum/30">
      <div ref={ref} className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-ows-purple" />
            <span className="font-mono text-xs tracking-[0.25em] text-ows-purple uppercase">
              Products
            </span>
          </div>
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-deep-carbon leading-tight">
            Vitamins for your Car
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {CATEGORIES.map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="bg-white p-8 rounded-sm border border-machined-aluminum hover:border-ows-purple/30 transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-sm bg-ows-purple/10 flex items-center justify-center mb-5">
                  <Icon className="text-ows-purple" size={22} />
                </div>
                <h3 className="font-heading font-bold text-xl text-deep-carbon mb-2">{c.title}</h3>
                <p className="text-deep-carbon/50 leading-relaxed">{c.desc}</p>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-12"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-ows-purple text-white font-heading font-semibold text-sm tracking-wide rounded-sm hover:bg-ows-purple/90 transition-all duration-300"
          >
            Specify for your Fleet
          </a>
        </motion.div>
      </div>
    </section>
  );
}