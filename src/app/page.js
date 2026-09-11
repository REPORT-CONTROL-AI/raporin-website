import HeroSection from "../components/HeroSection.jsx";
import FeaturesSection from "../components/FeaturesSection.jsx";
import HowItWorks from "../components/HowItWorks.jsx";
import TestimonialsSection from "../components/TestimonialsSection.jsx";
import FAQSection from "../components/FAQSection.jsx";
import Footer from "../components/Footer.jsx";
import PricingSection from "../components/PricingSection.jsx";
import ContactSection from "../components/ContactSection.jsx";
import FaqSchema from "../components/FaqSchema.jsx";
import ProductOverview from "../components/ProductOverview";
import ProductSchema from "../components/ProductSchema";

export default function HomePage() {
  return (
    <main>
      <FaqSchema />
      <ProductSchema />
      <div className="pt-20">
        <HeroSection />
        <div className="mx-auto max-w-5xl px-6 py-12">
          <ProductOverview />
        </div>
        <FeaturesSection />
        <HowItWorks />
        <TestimonialsSection />
        <PricingSection />
        <FAQSection />
        <ContactSection />
        <Footer />
      </div>
    </main>
  );
}
