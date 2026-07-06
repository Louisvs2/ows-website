import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Phone, Mail, Globe } from "lucide-react";

const OFFICES = [
  {
    region: "GERMANY",
    code: "DE",
    label: "HQ",
    company: "OWS Oder Was Sonst GmbH",
    address: "Heinrich-Hertz-Straße 11, Kassel, Germany",
    email: "info@ows-germany.com",
    phones: ["+49 (0) 173 581 6688", "+49 (0) 162 699 5005"],
  },
  {
    region: "SINGAPORE",
    code: "SG",
    label: "Asia HQ",
    company: "Our Workshop System (S) Pte Ltd",
    address: "107 Tuas View Walk 1, Singapore 637730",
    email: "info@ows-germany.com",
    phones: ["+65 6452 3209", "+65 6452 0586"],
  },
  {
    region: "DUBAI",
    code: "AE",
    label: "Middle East",
    company: "OWS Our Workshop System FZE",
    address: "SAIF Executive Office P8-05-07, Dubai",
    email: "info@ows-germany.com",
    phones: ["+971 56 327 5858", "+971 50 860 7568"],
  },
  {
    region: "PHILIPPINES",
    code: "PH",
    label: "Southeast Asia",
    company: "OWS Automotive Lubricants Trading",
    address: "#85 Sta Catalina St Banawe, Quezon City, Philippines",
    email: "info_phil@ows-germany.com",
    phones: ["+632 419 5856", "+632 417 7699"],
  },
];

export default function GlobalSection() {
  const [active, setActive] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const office = OFFICES[active];

  return (
    <section id="global" className="relative py-24 lg:py-32 bg-white">
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
              Global Presence
            </span>
          </div>
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-deep-carbon leading-tight">
            Worldwide Network
          </h2>
        </motion.div>

        {/* Region tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          {OFFICES.map((o, i) => (
            <motion.button
              key={o.code}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08 }}
              onClick={() => setActive(i)}
              className={`flex items-center gap-3 p-4 rounded-sm text-left transition-all duration-300 ${
                active === i
                  ? "bg-ows-purple text-white"
                  : "bg-machined-aluminum/40 text-deep-carbon hover:bg-machined-aluminum"
              }`}
            >
              <span className="font-mono text-xs font-bold">{o.code}</span>
              <span className="font-heading font-semibold text-sm">{o.region}</span>
            </motion.button>
          ))}
        </div>

        {/* Detail Card */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-machined-aluminum/30 border border-machined-aluminum rounded-sm p-8 lg:p-10"
        >
          <div className="flex items-center gap-3 mb-6">
            <Globe className="text-ows-purple" size={18} />
            <span className="font-mono text-sm text-ows-purple">{office.region} — {office.label}</span>
          </div>

          <h3 className="font-heading font-bold text-2xl text-deep-carbon mb-6">{office.company}</h3>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <MapPin className="text-ows-purple mt-0.5 flex-shrink-0" size={16} />
              <span className="text-deep-carbon/60 text-sm">{office.address}</span>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="text-ows-purple mt-0.5 flex-shrink-0" size={16} />
              <a href={`mailto:${office.email}`} className="text-deep-carbon/60 text-sm hover:text-ows-purple transition-colors">
                {office.email}
              </a>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="text-ows-purple mt-0.5 flex-shrink-0" size={16} />
              <div className="space-y-1">
                {office.phones.map((p) => (
                  <a key={p} href={`tel:${p.replace(/\s/g, "")}`} className="block text-deep-carbon/60 text-sm hover:text-ows-purple transition-colors font-mono text-xs">
                    {p}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}