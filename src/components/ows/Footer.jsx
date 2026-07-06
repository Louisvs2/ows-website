import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import owsLogo from "@/assets/ows-logo.svg";

const QUICK_LINKS = [
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Global", href: "#global" },
];

export default function Footer() {
  return (
    <footer id="contact" className="relative bg-deep-carbon text-white">
      <div className="max-w-6xl mx-auto px-6 py-16 lg:py-20">
        {/* Top section */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <img
              src={owsLogo}
              alt="OWS - Made in Germany"
              className="h-16 w-auto mb-6"
            />
            <p className="text-white/40 text-sm leading-relaxed mb-4">
              Premier supplier of the highest quality German automotive additives, technical sprays, and lubricants.
            </p>
            <p className="font-mono text-[10px] text-ows-purple/80 tracking-[0.2em] uppercase">
              "Vitamins for your Car"
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-mono text-[10px] tracking-[0.3em] text-white/30 uppercase mb-6">Navigation</h4>
            <div className="space-y-3">
              {QUICK_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-sm text-white/50 hover:text-ows-purple transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Germany HQ */}
          <div>
            <h4 className="font-mono text-[10px] tracking-[0.3em] text-white/30 uppercase mb-6">Germany HQ</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-2.5">
                <MapPin size={14} className="text-ows-purple mt-0.5 flex-shrink-0" />
                <span className="text-sm text-white/50">Heinrich-Hertz-Straße 11, Kassel, Germany</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail size={14} className="text-ows-purple flex-shrink-0" />
                <a href="mailto:info@ows-germany.com" className="text-sm text-white/50 hover:text-ows-purple transition-colors">
                  info@ows-germany.com
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <Phone size={14} className="text-ows-purple mt-0.5 flex-shrink-0" />
                <div className="space-y-1">
                  <a href="tel:+4901735816688" className="block text-xs text-white/50 hover:text-ows-purple transition-colors font-mono">
                    +49 (0) 173 581 6688
                  </a>
                  <a href="tel:+4901626995005" className="block text-xs text-white/50 hover:text-ows-purple transition-colors font-mono">
                    +49 (0) 162 699 5005
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-[10px] text-white/20 tracking-wider">
            © {new Date().getFullYear()} OWS — Oder Was Sonst. Made in Germany.
          </p>
          <div className="flex items-center gap-6">
            <a href="mailto:info@ows-germany.com" className="font-mono text-[10px] text-white/20 hover:text-ows-purple transition-colors tracking-wider">
              Privacy Policy
            </a>
            <a href="mailto:info@ows-germany.com" className="font-mono text-[10px] text-white/20 hover:text-ows-purple transition-colors tracking-wider">
              Imprint
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}