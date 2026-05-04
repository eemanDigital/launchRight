"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { documentTypes } from "@/data/documentTemplates";
import dynamic from "next/dynamic";
import { trackWhatsAppClick } from "@/lib/analytics";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  CheckIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

const PdfGeneratorButton = dynamic(
  () => import("@/components/PdfGeneratorButton"),
  { ssr: false, loading: () => <button className="flex-1 btn-gold" disabled>Loading...</button> }
);

export default function DocumentGeneratorClient() {
  const [selectedDoc, setSelectedDoc] = useState(null);
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  const [showUpsell, setShowUpsell] = useState(false);
  const [downloadComplete, setDownloadComplete] = useState(false);

  const handleSelectDoc = (doc) => {
    setSelectedDoc(doc);
    setFormData({});
    setErrors({});
    setShowUpsell(false);
    setDownloadComplete(false);
  };

  const handleBack = () => {
    setSelectedDoc(null);
    setFormData({});
    setErrors({});
    setDownloadComplete(false);
  };

  const handleInputChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleDownloadComplete = useCallback(() => {
    setShowUpsell(true);
    setDownloadComplete(true);
  }, []);

  return (
    <>
      <div className="container-wide py-12">
        <AnimatePresence mode="wait">
          {!selectedDoc ? (
            <motion.div
              key="grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {documentTypes.map((doc, index) => (
                <motion.button
                  key={doc.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 }}
                  onClick={() => handleSelectDoc(doc)}
                  className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-gold/30 hover:shadow-lg transition-all text-left group">
                  <div className="text-4xl mb-4">{doc.icon}</div>
                  <h3 className="text-xl font-bold text-navy mb-2 group-hover:text-gold transition-colors">
                    {doc.title}
                  </h3>
                  <p className="text-gray-500 text-sm">{doc.subtitle}</p>
                  <div className="mt-4 flex items-center gap-1 text-gold text-sm font-medium group-hover:gap-2 transition-all">
                    Generate <ArrowRightIcon className="w-4 h-4" />
                  </div>
                </motion.button>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="form"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="max-w-2xl mx-auto">
              <button
                onClick={handleBack}
                className="flex items-center gap-2 text-gray-500 hover:text-navy mb-8 transition-colors">
                <ArrowLeftIcon className="w-4 h-4" />
                Back to documents
              </button>

              <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl">{selectedDoc.icon}</span>
                  <div>
                    <h2 className="text-2xl font-bold text-navy">
                      {selectedDoc.title}
                    </h2>
                    <p className="text-gray-500 text-sm">
                      {selectedDoc.subtitle}
                    </p>
                  </div>
                </div>

                <div className="space-y-5">
                  {selectedDoc.fields.map((field) => (
                    <div key={field.name}>
                      <label className="block text-sm font-medium text-navy mb-1.5">
                        {field.label}
                        {field.required && <span className="text-red-500 ml-1">*</span>}
                      </label>

                      {field.type === "select" ? (
                        <select
                          value={formData[field.name] || ""}
                          onChange={(e) => handleInputChange(field.name, e.target.value)}
                          className={`w-full px-4 py-3 rounded-lg border ${
                            errors[field.name]
                              ? "border-red-300 bg-red-50"
                              : "border-gray-200 bg-gray-50"
                          } focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-all`}>
                          <option value="">Select an option</option>
                          {field.options.map((opt) => (
                            <option key={opt} value={opt}>{opt}</option>
                          ))}
                        </select>
                      ) : field.type === "textarea" ? (
                        <textarea
                          value={formData[field.name] || ""}
                          onChange={(e) => handleInputChange(field.name, e.target.value)}
                          placeholder={field.placeholder}
                          rows={3}
                          className={`w-full px-4 py-3 rounded-lg border ${
                            errors[field.name]
                              ? "border-red-300 bg-red-50"
                              : "border-gray-200 bg-gray-50"
                          } focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-all resize-none`}
                        />
                      ) : (
                        <input
                          type={field.type}
                          value={formData[field.name] || ""}
                          onChange={(e) => handleInputChange(field.name, e.target.value)}
                          placeholder={field.placeholder}
                          className={`w-full px-4 py-3 rounded-lg border ${
                            errors[field.name]
                              ? "border-red-300 bg-red-50"
                              : "border-gray-200 bg-gray-50"
                          } focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-all`}
                        />
                      )}

                      {errors[field.name] && (
                        <p className="text-red-500 text-xs mt-1">{errors[field.name]}</p>
                      )}
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex gap-4">
                  <button
                    onClick={handleBack}
                    className="px-6 py-3 border border-gray-200 rounded-lg text-gray-600 hover:border-gray-300 transition-colors">
                    Cancel
                  </button>
                  <PdfGeneratorButton
                    selectedDoc={selectedDoc}
                    formData={formData}
                    errors={errors}
                    onDownloadComplete={handleDownloadComplete}
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {showUpsell && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
              <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckIcon className="w-5 h-5 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-navy">Download Complete!</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Your document has been downloaded. This is a free template — would you like a lawyer-reviewed version tailored to your specific situation?
                </p>
                <div className="flex flex-col gap-3">
                  <a
                    href="https://wa.me/message/KTFL2G2JM3JTP1"
                    onClick={() => trackWhatsAppClick("DocGen Upsell Modal")}
                    className="btn-green text-center">
                    Get Lawyer-Reviewed Version
                  </a>
                  <button
                    onClick={() => setShowUpsell(false)}
                    className="text-gray-500 text-sm hover:text-navy transition-colors py-2">
                    Maybe later
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="bg-white border-t border-gray-100 py-12">
        <div className="container-wide text-center">
          <h3 className="text-xl font-bold text-navy mb-3">
            Need Something More Complex?
          </h3>
          <p className="text-gray-500 mb-6 max-w-lg mx-auto">
            Our document generator covers the most common legal documents. For bespoke contracts, shareholders agreements, or complex legal work, chat with us directly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/message/KTFL2G2JM3JTP1" onClick={() => trackWhatsAppClick("DocGen Footer CTA")} className="btn-primary">
              Chat With Us
            </a>
            <Link href="/services" className="btn-secondary">
              View Legal Services
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
