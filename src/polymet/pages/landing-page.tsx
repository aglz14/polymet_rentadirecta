
import HeroSection from "@/polymet/components/hero-section";
import FeaturesSection from "@/polymet/components/features-section";
import TestimonialsSection from "@/polymet/components/testimonials-section";
import CTASection from "@/polymet/components/cta-section";

export default function LandingPage() {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full max-w-screen-xl mx-auto px-4">
        <HeroSection />
        <FeaturesSection />
        <TestimonialsSection />
        <CTASection />
      </div>
    </div>
  );
}
