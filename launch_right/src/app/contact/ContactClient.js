"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ClockIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const services = [
    "CAC Business Registration",
    "Legal Documents",
    "Website Development",
    "Custom Software",
    "Compliance Services",
    "Other",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-surface">
      <Navbar />

      <div className="pt-24 pb-12 bg-navy">
        <div className="container-wide text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white">
            Get in Touch
          </h1>
          <p className="text-white/60 mt-4 max-w-xl mx-auto text-lg">
            Have a question or ready to start your project? We'd love to hear from you.
          </p>
        </div>
      </div>

      <div className="container-wide py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h2 className="text-xl font-bold text-navy mb-6">Contact Information</h2>
              <div className="space-y-4">
                <a
                  href="https://wa.me/message/KTFL2G2JM3JTP1"
                  className="flex items-start gap-4 p-4 bg-green/5 rounded-xl border border-green/10 hover:bg-green/10 transition-colors group">
                  <div className="w-10 h-10 bg-green/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-green" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.002a9.263 9.263 0 01-5.033-1.484l-.361-.214-3.76.982.998-3.677-.236-.375a9.286 9.286 0 01-1.438-4.946c0-5.139 4.19 9.321 9.334-9.321 2.495 0 4.838.967 6.601 2.722 1.764 1.755 2.734 4.097 2.734 6.599 0 5.139-4.19 9.321-9.334 9.321m8.949-16.459a11.301 11.301 0 00-8.949-4.324c-6.26 0-11.354 5.091-11.354 11.355 0 2.002.523 3.902 1.514 5.57L0 24l6.334-1.652a11.314 11.314 0 005.656 1.505c6.26 0 11.354-5.091 11.354-11.355 0-3.039-1.193-5.893-3.355-8.039" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-navy group-hover:text-green transition-colors">WhatsApp</p>
                    <p className="text-sm text-gray-500">Fastest response</p>
                  </div>
                </a>

                <a href="tel:08067234189" className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors group">
                  <div className="w-10 h-10 bg-navy/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <PhoneIcon className="w-5 h-5 text-navy" />
                  </div>
                  <div>
                    <p className="font-semibold text-navy">Phone</p>
                    <p className="text-sm text-gray-500">08067234189</p>
                  </div>
                </a>

                <a href="mailto:hello@juristech.com" className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors group">
                  <div className="w-10 h-10 bg-navy/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <EnvelopeIcon className="w-5 h-5 text-navy" />
                  </div>
                  <div>
                    <p className="font-semibold text-navy">Email</p>
                    <p className="text-sm text-gray-500">hello@juristech.com</p>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                  <div className="w-10 h-10 bg-navy/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPinIcon className="w-5 h-5 text-navy" />
                  </div>
                  <div>
                    <p className="font-semibold text-navy">Office</p>
                    <p className="text-sm text-gray-500">Suite 412, IT Igbani Street, MKK Plaza, Jabi Abuja</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-navy mb-4 flex items-center gap-2">
                <ClockIcon className="w-5 h-5 text-gold" />
                Office Hours
              </h3>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex justify-between p-3 bg-gray-50 rounded-lg">
                  <span>Monday – Friday</span>
                  <span className="font-medium">9:00 AM – 6:00 PM</span>
                </div>
                <div className="flex justify-between p-3 bg-gray-50 rounded-lg">
                  <span>Saturday</span>
                  <span className="font-medium">10:00 AM – 2:00 PM</span>
                </div>
                <div className="flex justify-between p-3 bg-gray-50 rounded-lg">
                  <span>Sunday</span>
                  <span className="font-medium text-red-500">Closed</span>
                </div>
              </div>
              <p className="text-xs text-gray-400 mt-2">All times in WAT (West Africa Time, UTC+1)</p>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
              <h2 className="text-xl font-bold text-navy mb-6">Send Us a Message</h2>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12">
                  <div className="w-16 h-16 bg-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircleIcon className="w-8 h-8 text-green" />
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-2">Message Sent!</h3>
                  <p className="text-gray-500 mb-6">
                    Thank you for reaching out. We'll get back to you within 24 hours.
                  </p>
                  <a
                    href="https://wa.me/message/KTFL2G2JM3JTP1"
                    className="btn-green">
                    Or chat with us on WhatsApp now
                  </a>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-navy mb-1.5">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-all"
                        placeholder="e.g. Amina Bello"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-navy mb-1.5">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-all"
                        placeholder="e.g. amina@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-navy mb-1.5">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-all"
                        placeholder="e.g. 08012345678"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-navy mb-1.5">
                        Service Interested In
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-all">
                        <option value="">Select a service</option>
                        {services.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-navy mb-1.5">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-all resize-none"
                      placeholder="Tell us about your project or question..."
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full md:w-auto">
                    Send Message
                  </button>
                </form>
              )}
            </div>

            <div className="mt-8 rounded-2xl overflow-hidden border border-gray-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.3!2d7.435!3d9.057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwMDMnMjUuMiJOIDfCsDI2JzA2LjAiRQ!5e0!3m2!1sen!2sng!4v1700000000000"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="JurisTech Office Location - Jabi, Abuja"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
