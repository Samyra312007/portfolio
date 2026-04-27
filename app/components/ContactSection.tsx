"use client";

import { useState } from "react";

export default function ContactSection() {
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
        `TRANSMISSION RECEIVED!\n\nFrom: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`,
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
      className="py-32 px-6 md:px-20 bg-[#131319] border-t border-[#48474d]/10"
    >
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-20">
        <div>
          <h2 className="text-5xl font-headline font-bold tracking-tighter mb-8 leading-tight">
            READY_TO_INITIALIZE
            <br />
            NEW_PROJECTS?
          </h2>
          <p className="text-[#acaab1] mb-12">
            I am currently available for high-impact collaborations and
            architectural consultations.
          </p>

          <div className="space-y-6">
            <button
              onClick={() => copyToClipboard("root@terminalvoid.sys")}
              className="flex items-center gap-6 group w-full"
            >
              <span className="text-[#a8ffe1] group-hover:scale-125 transition-transform text-2xl">
                ✉️
              </span>
              <span className="font-headline uppercase tracking-widest text-xs border-b border-[#48474d]/30 pb-1">
                root@terminalvoid.sys
              </span>
            </button>

            <div className="flex items-center gap-6 group">
              <span className="text-[#ff51fa] group-hover:scale-125 transition-transform text-2xl">
                📍
              </span>
              <span className="font-headline uppercase tracking-widest text-xs border-b border-[#48474d]/30 pb-1">
                NEO_TOKYO_VIRTUAL_DISTRICT
              </span>
            </div>
          </div>
        </div>

        <div className="bg-[#0e0e13] p-6 md:p-10 border border-[#48474d]/10">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <label className="font-headline text-[10px] tracking-[0.2em] uppercase text-[#a8ffe1] mb-2 block">
                USER_NAME
              </label>
              <input
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full bg-transparent border-b border-[#48474d] focus:border-[#a8ffe1] focus:ring-0 transition-colors py-3 text-sm placeholder:text-[#48474d]/40"
                placeholder="ENTER IDENTIFIER"
                type="text"
                required
              />
            </div>

            <div>
              <label className="font-headline text-[10px] tracking-[0.2em] uppercase text-[#a8ffe1] mb-2 block">
                EMAIL_NODE
              </label>
              <input
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full bg-transparent border-b border-[#48474d] focus:border-[#a8ffe1] focus:ring-0 transition-colors py-3 text-sm placeholder:text-[#48474d]/40"
                placeholder="ENTER COMMUNICATIONS PROTOCOL"
                type="email"
                required
              />
            </div>

            <div>
              <label className="font-headline text-[10px] tracking-[0.2em] uppercase text-[#a8ffe1] mb-2 block">
                MESSAGE_PAYLOAD
              </label>
              <textarea
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full bg-transparent border-b border-[#48474d] focus:border-[#a8ffe1] focus:ring-0 transition-colors py-3 text-sm placeholder:text-[#48474d]/40"
                placeholder="TRANSMIT DATA..."
                rows={4}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#a8ffe1] text-[#00654f] py-5 font-headline font-bold uppercase tracking-widest hover:shadow-[0_0_20px_rgba(168,255,225,0.4)] transition-all"
              disabled={!!status}
            >
              {status || "SEND_TRANSMISSION"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
