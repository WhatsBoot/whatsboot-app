import { motion } from "framer-motion";
import CountdownTimer from "./countdown-timer";
import { Button } from "@/components/ui/button";
import { Shield, Clock, Users, TrendingUp } from "lucide-react";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const stats = [
    { icon: TrendingUp, value: "25K+", label: "Mensagens" },
    { icon: TrendingUp, value: "95%", label: "Entrega" },
    { icon: Users, value: "5.247", label: "Empresas Exclusivas" },
    { icon: TrendingUp, value: "97.3%", label: "Taxa Entrega" }
  ];

  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-blue-dark via-blue-light to-whatsapp overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Exclusive System Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center bg-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 pulse-glow"
        >
          🚨 SISTEMA EXCLUSIVO
        </motion.div>

        {/* Countdown Timer */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6"
        >
          <CountdownTimer />
        </motion.div>

        {/* Restricted Access Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white/10 backdrop-blur-sm text-white p-6 rounded-xl mb-8 max-w-3xl mx-auto"
        >
          <h3 className="text-xl font-bold mb-2">🔐 ACESSO RESTRITO - SISTEMA EXCLUSIVO</h3>
          <p className="text-white/90">
            Sistema ultra-exclusivo usado por apenas <strong>5.247 empresas no mundo</strong>. 
            <strong className="text-yellow-accent"> Garantia de 7 dias para devolução</strong> por qualquer motivo.
          </p>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight"
        >
          A Máquina de Vendas no WhatsApp<br />
          <span className="text-yellow-accent">Que Você Estava Esperando!</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-xl md:text-2xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed"
        >
          O sistema secreto que grandes empresas usam para dominar vendas no WhatsApp. 
          <strong className="text-yellow-accent"> Converta 387% mais leads</strong> e elimine 94% do trabalho manual.
        </motion.p>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="grid md:grid-cols-4 gap-4 mb-8 max-w-4xl mx-auto"
        >
          {stats.map((stat, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm p-4 rounded-lg text-white">
              <div className="text-2xl font-bold text-yellow-accent">{stat.value}</div>
              <div className="text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button
            onClick={() => scrollToSection("precos")}
            size="lg"
            className="bg-whatsapp text-white px-8 py-4 text-lg font-bold hover:bg-whatsapp-dark transform hover:scale-105 transition-all shadow-lg"
          >
            <Shield className="mr-2 h-5 w-5" />
            COMPRE AGORA COM GARANTIA
          </Button>
          <Button
            onClick={() => scrollToSection("contato")}
            variant="outline"
            size="lg"
            className="bg-white text-blue-dark px-8 py-4 text-lg font-bold hover:bg-gray-50 transform hover:scale-105 transition-all shadow-lg border-white"
          >
            Falar com Consultor
          </Button>
        </motion.div>

        {/* Guarantee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="mt-6 text-white/90"
        >
          <p className="text-sm">🛡️ Garantia de 7 dias para devolução por qualquer motivo</p>
          <p className="text-xs mt-2">✅ 100% Seguro • ⚡ Ativação Imediata • 🚫 Sem Compromisso</p>
        </motion.div>
      </div>
    </section>
  );
}
