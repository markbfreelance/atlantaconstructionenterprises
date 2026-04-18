import type { Metadata } from "next";
import AboutHero from "./_components/AboutHero";
import TeamSection from "./_components/TeamSection";
import CompanyInfo from "./_components/CompanyInfo";

export const metadata: Metadata = {
  title: "About Us | Atlanta Construction Enterprises",
  description:
    "Learn about Atlanta Construction Enterprises — a licensed Georgia general contractor serving the Atlanta area since 1998.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <TeamSection />
      <CompanyInfo />
    </>
  );
}
