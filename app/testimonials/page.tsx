import type { Metadata } from "next";
import TestimonialsHero from "./_components/TestimonialsHero";
import TestimonialCards from "./_components/TestimonialCards";

export const metadata: Metadata = {
  title: "Testimonials | Atlanta Construction Enterprises",
  description:
    "Read what our clients say about Atlanta Construction Enterprises — trusted residential and commercial contractor since 1998.",
};

export default function TestimonialsPage() {
  return (
    <>
      <TestimonialsHero />
      <TestimonialCards />
    </>
  );
}
