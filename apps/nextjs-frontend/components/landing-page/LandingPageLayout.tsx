import Canvas from "@/components/Canvas";
import CTA from "@/components/landing-page/CTA";
import Features from "@/components/landing-page/Features";
import Footer from "@/components/landing-page/Footer";
import Hero from "@/components/landing-page/Hero";
import HowItWorks from "@/components/landing-page/HowItWorks";
import Layout from "@/components/Layout";
import Image from "next/image";
import Bgcolor from "../bgcolor";
function LandingPageLayout() {
  return (

          <div className="min-h-screen">
            <Bgcolor>
          <Hero />
          <Features />
          <HowItWorks />
          <CTA />
          </Bgcolor>
          <Footer />
        </div>
  )
}

export default LandingPageLayout