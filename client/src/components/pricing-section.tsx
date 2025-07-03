import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import CountdownTimer from "./countdown-timer";
import { CheckCircle, Target, Award } from "lucide-react";

export default function PricingSection() {
  const plans = [
    {
      name: "Básico - Mensal",
      originalPrice: "R$ 30",
      currentPrice: "R$ 25",
      period: "/mês",
      description: "Ideal para começar",
      features: [
        "Até 1.000 contatos",
        "5 campanhas por mês",
        "Suporte por email",
        "Relatórios básicos"
      ],
      badge: null,
      highlighted: false
    },
    {
      name: "Profissional - Trimestral",
      originalPrice: "R$ 90",
      currentPrice: "R$ 60",
      period: "/3 meses",
      description: "Economia de 33%",
      features: [
        "Até 5.000 contatos",
        "Campanhas ilimitadas",
        "Suporte prioritário",
        "Relatórios avançados",
        "Chatbot básico"
      ],
      badge: "🔥 MAIS VENDIDO",
      badgeText: "Melhor Oferta",
      highlighted: true
    },
    {
      name: "Enterprise - Semestral",
      originalPrice: "R$ 180",
      currentPrice: "R$ 100",
      period: "/6 meses",
      description: "Economia de 44%",
      features: [
        "Contatos ilimitados",
        "Campanhas ilimitadas",
        "Suporte 24/7",
        "Chatbot avançado",
        "Integrações customizadas"
      ],
      badge: null,
      badgeText: "Máximo Valor",
      highlighted: false
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Exclusive System Results */}
      <section className="py-16 bg-gradient-to-br from-whatsapp via-green-success to-blue-light">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              🚀 SISTEMA EXCLUSIVO - RESULTADOS GARANTIDOS
            </h2>
            <p className="text-xl text-white/90 mb-2">
              Veja como eliminar frustrações e multiplicar vendas em dias
            </p>
            <p className="text-white/80">
              <strong>Cada funcionalidade resolve um problema real</strong> que você enfrenta todos os dias. Resultados comprovados em +5.247 empresas que faturam milhões.
            </p>
          </motion.div>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "Importação Inteligente",
                subtitle: "Carregue milhares de contatos instantaneamente",
                features: [
                  "Sistema verifica automaticamente a validade dos números do WhatsApp",
                  "Elimina contatos duplicados automaticamente para listas limpas",
                  "Organize contatos com tags personalizadas para campanhas direcionadas"
                ],
                stats: { value: "10K+", label: "Contatos/min" }
              },
              {
                title: "Envio em Massa",
                subtitle: "Alcance milhares de clientes instantaneamente",
                features: [
                  "Use variáveis como nome, empresa e localização para mensagens únicas",
                  "Programe envios para horários de maior engajamento",
                  "Envie imagens, vídeos, documentos e áudios em massa"
                ],
                stats: { value: "99%", label: "Precisão" }
              },
              {
                title: "Chatbot Inteligente",
                subtitle: "Atendimento automatizado 24/7",
                features: [
                  "Configure respostas inteligentes para perguntas frequentes",
                  "Crie jornadas personalizadas para qualificar e converter leads",
                  "Veja exatamente como as mensagens aparecerão no WhatsApp"
                ],
                stats: { value: "24/7", label: "Disponível" }
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6"
              >
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-white/90 mb-6">{item.subtitle}</p>
                
                <div className="space-y-4 mb-6">
                  {item.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start text-white/90">
                      <CheckCircle className="text-yellow-accent h-5 w-5 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="bg-white/20 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-yellow-accent">{item.stats.value}</div>
                  <div className="text-sm text-white/90">{item.stats.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Limited Spots Warning */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-orange-accent rounded-xl p-8 text-center"
          >
            <h3 className="text-2xl font-bold text-white mb-4">⚠️ ATENÇÃO: Vagas Limitadas</h3>
            <p className="text-white/90 mb-6">
              <strong>Apenas 47 vagas restantes</strong> para acesso hoje. Após esgotar, próxima liberação apenas em 30 dias.
            </p>
            
            <div className="mb-6">
              <CountdownTimer className="mx-auto" />
            </div>
            
            <div className="mb-6">
              <p className="text-lg text-white font-bold mb-2">🔥 PROMOÇÃO RELÂMPAGO:</p>
              <p className="text-white/90">
                Quem comprar hoje <strong>ganha 50% desconto</strong> vitalício + <strong>3 meses grátis</strong> de suporte premium
              </p>
            </div>
            
            <Button
              onClick={() => scrollToSection("precos")}
              size="lg"
              className="bg-white text-orange-accent hover:bg-gray-100 font-bold"
            >
              CRIAR CONTA AGORA
            </Button>
            
            <p className="text-white/75 text-sm mt-4">
              ⏰ Oferta expira em 04h 23m • 7 dias para devolução • Acesso imediato
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section id="precos" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Planos e Preços
            </h2>
            <p className="text-xl text-gray-600 mb-6">
              Investimento que se paga em 7 dias
            </p>
            <div className="bg-gradient-to-r from-whatsapp to-green-600 text-white p-6 rounded-xl max-w-4xl mx-auto">
              <p className="text-lg mb-4">
                <strong>Promoção de lançamento:</strong> Desconto de até 44% + garantia de 7 dias para devolução. ROI médio de 387% no primeiro mês.
              </p>
              <div className="p-4 bg-yellow-400 text-gray-900 rounded-lg">
                <p className="font-bold flex items-center justify-center">
                  <Target className="h-5 w-5 mr-2" />
                  GARANTIA EXCLUSIVA DE RESULTADOS:
                </p>
                <p className="text-sm">Se não aumentar suas vendas em 30% nos primeiros 30 dias, <strong>devolvemos 100% + pagamos R$ 500</strong> pelo seu tempo perdido.</p>
              </div>
            </div>
            
            {/* Flash Countdown */}
            <div className="bg-red-600 text-white p-4 rounded-lg mt-6 inline-block">
              <p className="font-bold">🔥 ÚLTIMAS 04H 23M para garantir esta promoção!</p>
            </div>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative ${plan.highlighted ? 'transform scale-105' : ''}`}
              >
                <Card className={`h-full ${plan.highlighted ? 'border-2 border-whatsapp shadow-xl' : ''}`}>
                  {plan.badge && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-whatsapp text-white px-4 py-2 font-bold">
                        {plan.badge}
                      </Badge>
                    </div>
                  )}
                  
                  {plan.highlighted && (
                    <div className="absolute top-4 right-4 bg-red-600 text-white text-xs px-2 py-1 rounded">
                      04:23:14
                    </div>
                  )}
                  
                  <CardContent className="p-8 text-center h-full flex flex-col">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <div className="mb-4">
                      <span className="text-3xl font-bold text-gray-400 line-through">{plan.originalPrice}</span>
                      <span className="text-4xl font-bold text-whatsapp ml-2">{plan.currentPrice}</span>
                      <span className="text-gray-600">{plan.period}</span>
                    </div>
                    
                    {plan.description.includes('Economia') && (
                      <Badge 
                        variant="outline" 
                        className={`mb-6 ${plan.description.includes('33%') ? 'border-green-500 text-green-700' : 'border-blue-500 text-blue-700'}`}
                      >
                        {plan.description}
                      </Badge>
                    )}
                    
                    <ul className="space-y-3 text-left mb-8 flex-grow">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <CheckCircle className="text-whatsapp h-5 w-5 mr-3 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button 
                      className={`w-full ${plan.highlighted ? 'bg-whatsapp hover:bg-whatsapp-dark transform hover:scale-105' : 'bg-whatsapp hover:bg-whatsapp-dark'} transition-all`}
                    >
                      Comprar Agora
                    </Button>
                    
                    {plan.badgeText && (
                      <p className={`text-xs font-semibold mt-2 ${plan.highlighted ? 'text-whatsapp' : plan.badgeText === 'Máximo Valor' ? 'text-blue-600' : 'text-gray-600'}`}>
                        {plan.badgeText}
                      </p>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
