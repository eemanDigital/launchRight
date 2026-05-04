"use client";

import dynamic from "next/dynamic";

const DocumentGeneratorClient = dynamic(
  () => import("@/components/DocumentGeneratorClient"),
  { ssr: false }
);

export default function DocGenClientWrapper() {
  return <DocumentGeneratorClient />;
}
