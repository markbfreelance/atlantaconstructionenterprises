import type { Metadata } from "next";
import ServicesHero from "./_components/ServicesHero";
import ServicesList from "./_components/ServicesList";
import HeavyEquipment from "./_components/HeavyEquipment";
import HVACSection from "./_components/HVACSection";

export const metadata: Metadata = {
  title: "Services | Atlanta Construction Enterprises",
  description:
    "Explore our full range of construction services including renovations, HVAC, electrical, plumbing, excavation, and more.",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesList />
      <HeavyEquipment />
      <HVACSection />
    </>
  );
}
