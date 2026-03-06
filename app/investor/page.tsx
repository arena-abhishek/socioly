import { Metadata } from "next";
import {Investor} from "@/components/sections/Investor";
import BreadcrumbSection from "@/components/ui/BreadcrumbSection";

export const metadata: Metadata = {
  title: "Investor Relations | Exato.ai",
  description:
    "Explore investor information, financial transparency, governance, and long-term value creation at Exato.ai.",
  keywords:
    "Investor Relations, Exato Investor, Financial Reports, Corporate Governance, Company Investors",
  openGraph: {
    title: "Investor Relations | Exato.ai",
    description:
      "Transparency, governance and long term value creation for investors.",
    type: "website",
  },
};

export default function Page() {
  return (
    <>
      {/* ✅ Breadcrumb SEO Friendly */}
      <BreadcrumbSection
        title="Investor Relations"
        items={[
          { label: "Home", href: "/" },
          { label: "Investor Relations" },
        ]}
      />

      {/* ✅ Investor Component */}
      <Investor />
    </>
  );
}