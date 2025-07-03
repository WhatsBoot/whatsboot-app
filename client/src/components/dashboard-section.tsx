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
            <Card className="shadow-2xl">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h4 className="text-lg font-bold text-gray-900">Dashboard Principal</h4>
                  <Badge variant="outline">Visão geral completa</Badge>
                </div>
                
                {/* Metrics Cards */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-whatsapp/10 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-whatsapp">25K+</div>
                    <div className="text-sm text-gray-600">Mensagens</div>
                  </div>
                  <div className="bg-blue-light/10 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-blue-light">95%</div>
                    <div className="text-sm text-gray-600">Entrega</div>
                  </div>
                </div>
                
                {/* Feature Buttons */}
                <div className="space-y-3">
                  <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                    <Send className="text-whatsapp h-5 w-5 mr-3" />
                    <span className="text-gray-900 font-medium">Campanhas Ativas</span>
                  </div>
                  <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                    <Users className="text-blue-light h-5 w-5 mr-3" />
                    <span className="text-gray-900 font-medium">Gestão de Contatos</span>
                  </div>
                  <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                    <Bot className="text-purple-500 h-5 w-5 mr-3" />
                    <span className="text-gray-900 font-medium">Chatbot Configurado</span>
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
