import type { Metadata } from "next";
import ContactHero from "./_components/ContactHero";
import ContactForm from "./_components/ContactForm";
import CompanyFacts from "./_components/CompanyFacts";
import MapEmbed from "./_components/MapEmbed";

export const metadata: Metadata = {
  title: "Contact Us | Atlanta Construction Enterprises",
  description:
    "Contact Atlanta Construction Enterprises for a free consultation and estimate. Located in Powder Springs, Georgia.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactForm />
      <CompanyFacts />
      <MapEmbed />
    </>
  );
}
