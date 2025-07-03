import { motion } from "framer-motion";
import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import FeaturesSection from "@/components/features-section";
import VideoSection from "@/components/video-section";
import HowItWorks from "@/components/how-it-works";
import DashboardSection from "@/components/dashboard-section";
import PricingSection from "@/components/pricing-section";
import ContactForm from "@/components/contact-form";
import { MessageCircle } from "lucide-react";

export default function Landing() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <VideoSection />
      <HowItWorks />
      <DashboardSection />
      <PricingSection />
      <ContactForm />
      
      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-center"
          >
            <div className="flex items-center mb-4 md:mb-0">
              <MessageCircle className="text-whatsapp h-8 w-8 mr-2" />
              <span className="text-xl font-bold text-white">WhatsBoot</span>
            </div>
            
            <div className="text-gray-400 text-sm text-center md:text-right">
              <p>&copy; 2024 WhatsBoot. Todos os direitos reservados.</p>
              <p className="mt-1">A Máquina de Vendas no WhatsApp</p>
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}
