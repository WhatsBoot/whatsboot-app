import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  BarChart3, 
  Send, 
  Bot, 
  Upload, 
  TrendingUp, 
  Settings,
  Users,
  CheckCircle
} from "lucide-react";

export default function DashboardSection() {
  const features = [
    {
      icon: Upload,
      title: "Importação Inteligente",
      description: "Carregue listas de contatos via Excel/CSV com validação automática de números e remoção de duplicatas.",
      items: [
        "Validação automática de números",
        "Remoção de duplicatas",
        "Organização por tags"
      ],
      stats: { value: "10K+", label: "Contatos/min" }
    },
    {
      icon: TrendingUp,
      title: "Relatórios Avançados",
      description: "Análise completa de performance com gráficos interativos e exportação de dados.",
      items: [
        "Taxa de entrega por campanha",
        "Horários de maior engajamento",
        "ROI das campanhas"
      ],
      stats: { value: "99%", label: "Precisão" }
    },
    {
      icon: Settings,
      title: "Gestão Profissional",
      description: "Painel administrativo completo com controle de usuários e permissões avançadas.",
      items: [
        "Múltiplos usuários",
        "Controle de permissões",
        "Auditoria de ações"
      ],
      stats: { value: "24/7", label: "Disponível" }
    }
  ];

  return (
    <section id="dashboard" className="py-16 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Dashboard Profissional
          </h2>
          <p className="text-xl text-gray-300 mb-2">
            Conheça o painel de controle mais avançado do mercado
          </p>
          <p className="text-gray-400">
            Após a assinatura, você terá acesso a um dashboard completo com todas as ferramentas necessárias para automatizar e escalar suas vendas no WhatsApp.
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Dashboard Features */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Dashboard com Métricas em Tempo Real</h3>
              <p className="text-gray-300">
                Visualize estatísticas completas: total de mensagens enviadas, taxa de entrega, campanhas ativas, contatos importados e performance geral da sua automação.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Criador de Campanhas Avançado</h3>
              <p className="text-gray-300">
                Interface intuitiva para criar campanhas personalizadas com segmentação de público, agendamento, mensagens com mídia e acompanhamento de resultados.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Chatbot com Interface Visual</h3>
              <p className="text-gray-300">
                Configure respostas automáticas com preview em tempo real de como as mensagens aparecerão no WhatsApp. Crie fluxos de conversação inteligentes.
              </p>
            </div>
          </motion.div>
          
          {/* Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="shadow-2xl border-0 overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800">
              <CardContent className="p-0">
                {/* Header */}
                <div className="bg-gradient-to-r from-whatsapp to-blue-light p-6 text-white">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-xl font-bold">Dashboard Principal</h4>
                    <Badge className="bg-white/20 text-white border-0">Visão geral completa</Badge>
                  </div>
                  
                  {/* Live Stats */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-3xl font-black text-yellow-accent">25K+</div>
                      <div className="text-sm opacity-90">Mensagens Hoje</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-black text-yellow-accent">95%</div>
                      <div className="text-sm opacity-90">Taxa Entrega</div>
                    </div>
                  </div>
                </div>
                
                {/* Dashboard Content */}
                <div className="p-6 space-y-4">
                  {/* Active Features */}
                  <div className="space-y-3">
                    <div className="flex items-center p-4 bg-gradient-to-r from-whatsapp/10 to-green-success/10 rounded-xl border border-whatsapp/20">
                      <div className="bg-whatsapp p-2 rounded-lg mr-4">
                        <Send className="text-white h-5 w-5" />
                      </div>
                      <div className="flex-1">
                        <span className="text-white font-semibold">Campanhas Ativas</span>
                        <div className="text-green-400 text-sm">3 executando agora</div>
                      </div>
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    </div>
                    
                    <div className="flex items-center p-4 bg-gradient-to-r from-blue-light/10 to-purple-accent/10 rounded-xl border border-blue-light/20">
                      <div className="bg-blue-light p-2 rounded-lg mr-4">
                        <Users className="text-white h-5 w-5" />
                      </div>
                      <div className="flex-1">
                        <span className="text-white font-semibold">Gestão de Contatos</span>
                        <div className="text-blue-300 text-sm">12.5K contatos ativos</div>
                      </div>
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                    </div>
                    
                    <div className="flex items-center p-4 bg-gradient-to-r from-purple-accent/10 to-whatsapp/10 rounded-xl border border-purple-accent/20">
                      <div className="bg-purple-accent p-2 rounded-lg mr-4">
                        <Bot className="text-white h-5 w-5" />
                      </div>
                      <div className="flex-1">
                        <span className="text-white font-semibold">Chatbot Configurado</span>
                        <div className="text-purple-300 text-sm">Respondendo 24/7</div>
                      </div>
                      <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
        
        {/* Additional Features */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-whatsapp/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="text-whatsapp h-8 w-8" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">{feature.title}</h4>
              <p className="text-gray-300 text-sm mb-4">{feature.description}</p>
              <ul className="text-gray-400 text-xs space-y-1 mb-4">
                {feature.items.map((item, itemIndex) => (
                  <li key={itemIndex}>• {item}</li>
                ))}
              </ul>
              <div className="bg-white/10 rounded-lg p-3">
                <div className="text-xl font-bold text-whatsapp">{feature.stats.value}</div>
                <div className="text-xs text-gray-300">{feature.stats.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
