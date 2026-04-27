"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function ContactSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("TRANSMISSION_SENT...");
    setTimeout(() => {
      alert(
        `TRANSMISSION RECEIVED!\n\nFrom: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}\n\nWe'll respond within 24-48 hours.`,
      );
      setFormData({ name: "", email: "", message: "" });
      setStatus("");
    }, 1000);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert(`Copied: ${text}`);
  };

  return (
    <section
      id="contact"
      className="py-32 px-6 md:px-20 bg-surface-container-low border-t border-outline-variant/10"
    >
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-20">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl font-headline font-bold tracking-tighter mb-8 leading-tight">
            READY_TO_INITIALIZE
            <br />
            NEW_PROJECTS?
          </h2>
          <p className="text-on-surface-variant mb-12">
            I am currently available for high-impact collaborations and
            architectural consultations. Reach out via the terminal or social
            nodes.
          </p>

          <div className="space-y-6">
            <button
              onClick={() => copyToClipboard("root@terminalvoid.sys")}
              className="flex items-center gap-6 group w-full"
            >
              <span className="material-symbols-outlined text-primary group-hover:scale-125 transition-transform">
                alternate_email
              </span>
              <span className="font-headline uppercase tracking-widest text-xs border-b border-outline-variant/30 pb-1">
                root@terminalvoid.sys
              </span>
            </button>

            <div className="flex items-center gap-6 group">
              <span className="material-symbols-outlined text-secondary group-hover:scale-125 transition-transform">
                location_on
              </span>
              <span className="font-headline uppercase tracking-widest text-xs border-b border-outline-variant/30 pb-1">
                NEO_TOKYO_VIRTUAL_DISTRICT
              </span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-surface p-6 md:p-10 border border-outline-variant/10"
        >
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="relative">
              <label className="font-headline text-[10px] tracking-[0.2em] uppercase text-primary mb-2 block">
                USER_NAME
              </label>
              <input
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full bg-transparent border-b border-outline-variant focus:border-primary focus:ring-0 transition-colors py-3 text-sm placeholder:text-outline-variant/40"
                placeholder="ENTER IDENTIFIER"
                type="text"
                required
              />
            </div>

            <div className="relative">
              <label className="font-headline text-[10px] tracking-[0.2em] uppercase text-primary mb-2 block">
                EMAIL_NODE
              </label>
              <input
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full bg-transparent border-b border-outline-variant focus:border-primary focus:ring-0 transition-colors py-3 text-sm placeholder:text-outline-variant/40"
                placeholder="ENTER COMMUNICATIONS PROTOCOL"
                type="email"
                required
              />
            </div>

            <div className="relative">
              <label className="font-headline text-[10px] tracking-[0.2em] uppercase text-primary mb-2 block">
                MESSAGE_PAYLOAD
              </label>
              <textarea
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full bg-transparent border-b border-outline-variant focus:border-primary focus:ring-0 transition-colors py-3 text-sm placeholder:text-outline-variant/40"
                placeholder="TRANSMIT DATA..."
                rows={4}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-on-primary py-5 font-headline font-bold uppercase tracking-widest hover:shadow-[0_0_20px_rgba(168,255,225,0.4)] transition-all magnetic-button"
              disabled={!!status}
            >
              {status || "SEND_TRANSMISSION"}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
