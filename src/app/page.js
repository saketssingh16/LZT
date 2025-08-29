import HeroSection from "../components/HeroSection";
import Trusted from "@/components/Trusted";
import Services from "@/components/Services";
import CTA from "@/components/CTA";
import WhyUs from "../components/whyUs";
import Testimonials from "@/components/Testimonials";
import Industries from "@/components/Industries";
import SucessStory from "@/components/SucessStory";
import OurAchievements from "@/components/OurAchievements";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <Trusted />
      <Services />
      <CTA />
      <WhyUs />
      <Testimonials />
      <Industries/>
      <SucessStory/>
      <OurAchievements/>
      <main>

      </main>
    </>
  );
}
