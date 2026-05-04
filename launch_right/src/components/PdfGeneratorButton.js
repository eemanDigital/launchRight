"use client";

import { useState } from "react";
import { DocumentTextIcon } from "@heroicons/react/24/outline";

export default function PdfGeneratorButton({ selectedDoc, formData, errors, onDownloadComplete }) {
  const [isGenerating, setIsGenerating] = useState(false);
  const [localErrors, setLocalErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    selectedDoc.fields.forEach((field) => {
      if (field.required && (!formData[field.name] || formData[field.name].trim() === "")) {
        newErrors[field.name] = "This field is required";
      }
    });
    setLocalErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleGenerate = async () => {
    if (!validateForm()) return;

    setIsGenerating(true);

    try {
      const { generatePDF } = await import("@/lib/pdfGenerator");
      const doc = await generatePDF(selectedDoc.id, formData);
      doc.save(`${selectedDoc.title.replace(/\s+/g, "-")}.pdf`);
      onDownloadComplete();
    } catch (err) {
      console.error("PDF generation failed:", err);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <button
      onClick={handleGenerate}
      disabled={isGenerating}
      className="flex-1 btn-gold disabled:opacity-60 disabled:cursor-not-allowed">
      {isGenerating ? (
        <span className="flex items-center gap-2">
          <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
          Generating PDF...
        </span>
      ) : (
        <span className="flex items-center gap-2 justify-center">
          <DocumentTextIcon className="w-4 h-4" />
          Generate & Download PDF
        </span>
      )}
    </button>
  );
}
