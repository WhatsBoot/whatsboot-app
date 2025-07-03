import { motion } from "framer-motion";
import { Play, Shield, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function VideoSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-blue-dark via-blue-light to-whatsapp overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
            🎯 VEJA O SISTEMA EM AÇÃO
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-4 max-w-4xl mx-auto">
            Demonstração completa de como <span className="text-yellow-accent font-bold">multiplicar suas vendas</span> usando nossa automação inteligente
          </p>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            Assista agora e descubra os segredos que empresas milionárias usam para dominar o WhatsApp
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative max-w-4xl mx-auto mb-12"
        >
          {/* Video Container */}
          <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl">
            <div className="aspect-video">
              <iframe
                src="https://www.youtube.com/embed/85BCebzVSBE?rel=0&modestbranding=1&showinfo=0"
                title="WhatsBoot - Sistema de Automação WhatsApp"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
            
            {/* Video Overlay with Stats */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-yellow-accent">2.1M</div>
                  <div className="text-xs text-white/90">Faturamento Diário</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-yellow-accent">387%</div>
                  <div className="text-xs text-white/90">Aumento em Conversões</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-yellow-accent">94%</div>
                  <div className="text-xs text-white/90">Redução Trabalho Manual</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 mb-12"
        >
          {[
            {
              icon: TrendingUp,
              title: "Resultados Comprovados",
              description: "Mais de 5.247 empresas já faturam milhões usando nosso sistema",
              highlight: "5.247 empresas"
            },
            {
              icon: Shield,
              title: "Garantia Total",
              description: "7 dias para testar sem risco. Se não gostar, devolvemos 100%",
              highlight: "100% garantido"
            },
            {
              icon: Play,
              title: "Implementação Rápida",
              description: "Configure tudo em 24 horas e comece a vender no mesmo dia",
              highlight: "24 horas"
            }
          ].map((benefit, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="bg-yellow-accent/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="text-yellow-accent h-8 w-8" />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">{benefit.title}</h3>
              <p className="text-white/90 text-sm mb-2">{benefit.description}</p>
              <div className="text-yellow-accent font-bold text-sm">{benefit.highlight}</div>
            </div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              🚀 Pronto para Transformar Seu Negócio?
            </h3>
            <p className="text-white/90 mb-6 text-lg">
              Junte-se às empresas que já faturam milhões com automação WhatsApp
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => scrollToSection("precos")}
                size="lg"
                className="bg-yellow-accent text-gray-900 px-8 py-4 text-lg font-bold hover:bg-yellow-accent/90 transform hover:scale-105 transition-all shadow-lg"
              >
                COMEÇAR AGORA
              </Button>
              <Button
                onClick={() => scrollToSection("contato")}
                variant="outline"
                size="lg"
                className="bg-white/10 text-white border-white/30 px-8 py-4 text-lg font-bold hover:bg-white/20 transform hover:scale-105 transition-all"
              >
                Falar com Especialista
              </Button>
            </div>
            
            <p className="text-white/75 text-sm mt-4">
              ✅ Sem risco • ⚡ Acesso imediato • 🎯 Resultados garantidos
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}