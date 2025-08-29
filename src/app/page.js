import HeroSection from "../components/HeroSection";
import Header from "../components/Header";
import Footer from "@/components/Footer";
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
      <Header />
      <HeroSection />
      <Trusted />
      <Services />
      <CTA />
      <WhyUs />
      <Testimonials />
      <Industries/>
      <SucessStory/>
      <OurAchievements/>
      <Footer />
      <main>

      </main>
    </>
  );
}
