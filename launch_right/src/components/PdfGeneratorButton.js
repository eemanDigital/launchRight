"use client";

import { useState } from "react";
import { DocumentTextIcon, ExclamationTriangleIcon } from "@heroicons/react/24/outline";

export default function PdfGeneratorButton({ selectedDoc, formData, errors, onDownloadComplete }) {
  const [isGenerating, setIsGenerating] = useState(false);
  const [localErrors, setLocalErrors] = useState({});
  const [genError, setGenError] = useState(null);

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
    setGenError(null);

    try {
      const { generatePDF } = await import("@/lib/pdfGenerator");
      const doc = await generatePDF(selectedDoc.id, formData);
      doc.save(`${selectedDoc.title.replace(/\s+/g, "-")}.pdf`);
      onDownloadComplete();
    } catch (err) {
      console.error("PDF generation failed:", err);
      setGenError(err.message || "Failed to generate PDF. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="flex-1">
      <button
        onClick={handleGenerate}
        disabled={isGenerating}
        className="w-full btn-gold disabled:opacity-60 disabled:cursor-not-allowed">
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
      {genError && (
        <div className="mt-3 flex items-start gap-2 text-red-600 text-sm bg-red-50 rounded-lg p-3">
          <ExclamationTriangleIcon className="w-4 h-4 flex-shrink-0 mt-0.5" />
          <span>{genError}</span>
        </div>
      )}
    </div>
  );
}
