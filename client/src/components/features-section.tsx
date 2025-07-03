import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Upload, 
  Send, 
  Target, 
  TrendingUp, 
  Settings, 
  Clock,
  CheckCircle,
  BarChart3,
  Bot,
  Users,
  Layers,
  FileText
} from "lucide-react";

export default function FeaturesSection() {
  const mainFeatures = [
    {
      icon: Upload,
      title: "Importe sua lista de contatos em segundos",
      description: "Carregue rapidamente milhares de contatos através de arquivos Excel ou CSV. Sistema intuitivo que organiza automaticamente seus dados.",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200"
    },
    {
      icon: Send,
      title: "Envio em massa de mensagens",
      description: "Alcance milhares de clientes simultaneamente com mensagens personalizadas. Sistema robusto para campanhas de grande escala.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200"
    },
    {
      icon: Target,
      title: "Alcance seu público de forma fácil",
      description: "Segmente audiências, crie grupos personalizados e direcione suas campanhas para o público certo na hora certa.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200"
    },
    {
      icon: TrendingUp,
      title: "Transforme seu WhatsApp em máquina de vendas",
      description: "Automatize processos de vendas, configure funis de conversão e transforme leads em clientes automaticamente.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200"
    },
    {
      icon: Settings,
      title: "Controle campanhas com facilidade",
      description: "Painel intuitivo para gerenciar todas suas campanhas, acompanhar métricas em tempo real e otimizar resultados.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200"
    },
    {
      icon: Clock,
      title: "Tempo livre para focar no que importa",
      description: "Automatize respostas, configure chatbots inteligentes e libere tempo para estratégias de crescimento do seu negócio.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200"
    }
  ];

  const additionalFeatures = [
    { icon: BarChart3, title: "Dashboard Completo", description: "Visão geral com métricas, estatísticas e acesso rápido a todas as funcionalidades", color: "text-whatsapp" },
    { icon: Send, title: "Gestão de Campanhas", description: "Crie, gerencie e monitore campanhas de envio em massa com segmentação avançada", color: "text-blue-light" },
    { icon: Bot, title: "Chatbot Inteligente", description: "Configure respostas automáticas, mensagens de boas-vindas e interações personalizadas", color: "text-purple-500" },
    { icon: Users, title: "Gestão de Contatos", description: "Importe, organize e gerencie sua base de contatos com tags e segmentação", color: "text-green-500" },
    { icon: Layers, title: "Gerenciamento de Grupos", description: "Organize e administre grupos do WhatsApp para campanhas direcionadas", color: "text-orange-500" },
    { icon: FileText, title: "Relatórios Detalhados", description: "Análises completas de performance, taxas de entrega e engajamento", color: "text-red-500" }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* What You'll Receive Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ⚡ O QUE VOCÊ VAI RECEBER:
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: TrendingUp, title: "Sistema que fatura R$ 2.1M/dia", color: "whatsapp", bg: "bg-gradient-to-br from-whatsapp to-green-success" },
              { icon: Bot, title: "Automação 100% inteligente", color: "blue-light", bg: "bg-gradient-to-br from-blue-light to-purple-accent" },
              { icon: Clock, title: "Acesso liberado em 24 horas", color: "green-success", bg: "bg-gradient-to-br from-green-success to-whatsapp" },
              { icon: Settings, title: "Suporte exclusivo VIP", color: "purple-accent", bg: "bg-gradient-to-br from-purple-accent to-blue-light" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full overflow-hidden border-0">
                  <CardContent className="p-0">
                    <div className={`${item.bg} h-20 flex items-center justify-center`}>
                      <item.icon className="text-white h-10 w-10" />
                    </div>
                    <div className="p-6 text-center">
                      <h3 className="font-bold text-gray-900 text-lg leading-tight">{item.title}</h3>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              🚫 Pare de sofrer com estes problemas:
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              { text: "Perder clientes por demora na resposta", impact: "Até 40% dos leads perdidos" },
              { text: "Trabalho manual repetitivo e cansativo", impact: "8h/dia desperdiçadas" },
              { text: "Leads quentes que viram leads frios", impact: "67% de conversão perdida" },
              { text: "Concorrência que vende mais que você", impact: "Mercado sendo dominado" }
            ].map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative overflow-hidden"
              >
                <Card className="border-l-4 border-l-red-500 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-red-500 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-xl font-bold">✕</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-900 text-lg mb-2">{problem.text}</h3>
                        <p className="text-red-600 font-semibold text-sm">{problem.impact}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Features Section */}
      <section id="recursos" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Recursos Poderosos
            </h2>
            <p className="text-xl text-gray-600 mb-2">
              Tudo que você precisa para automatizar seu WhatsApp
            </p>
            <p className="text-gray-500">
              Nossa plataforma oferece todas as ferramentas necessárias para transformar seu WhatsApp em uma poderosa ferramenta de vendas e atendimento.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-full overflow-hidden border-0">
                  <CardContent className="p-0">
                    <div className="relative">
                      <img 
                        src={feature.image} 
                        alt={feature.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                      <div className="absolute top-4 right-4">
                        <div className="bg-whatsapp text-white p-2 rounded-full">
                          <feature.icon className="h-5 w-5" />
                        </div>
                      </div>
                    </div>
                    <div className="p-6 bg-gradient-to-br from-gray-50 to-white">
                      <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                        {feature.description}
                      </p>
                      <button className="inline-flex items-center text-whatsapp font-semibold hover:text-whatsapp-dark transition-colors group">
                        Saiba mais 
                        <span className="ml-1 transform group-hover:translate-x-1 transition-transform">→</span>
                      </button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Complete Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Funcionalidades Completas
            </h2>
            <p className="text-xl text-gray-600 mb-2">
              Todas as ferramentas que você precisa em um só lugar
            </p>
            <p className="text-gray-500">
              Após a assinatura, você terá acesso completo a todas essas funcionalidades profissionais para maximizar seus resultados no WhatsApp.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {additionalFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="hover:shadow-lg transition-shadow h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <feature.icon className={`${feature.color} h-6 w-6 mr-3`} />
                      <h3 className="text-lg font-bold text-gray-900">{feature.title}</h3>
                    </div>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-whatsapp to-blue-light p-8 rounded-xl text-white">
              <h3 className="text-2xl font-bold mb-4">E muito mais funcionalidades!</h3>
              <div className="grid md:grid-cols-2 gap-4 text-left max-w-2xl mx-auto mb-6">
                {[
                  "Configurações avançadas",
                  "Suporte técnico",
                  "Atualizações automáticas",
                  "Backup de dados"
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <Button
                onClick={() => scrollToSection("precos")}
                className="bg-white text-whatsapp hover:bg-gray-100"
              >
                Ver Planos e Preços
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trusted Companies */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              🏆 Empresas do mesmo segmento que confiam em soluções similares
            </h2>
            <p className="text-gray-400">Tecnologias de automação utilizadas por grandes corporações</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center opacity-60"
          >
            {["NETFLIX", "amazon", "Microsoft", "Google", "Apple", "Spotify", "TESLA", "Uber"].map((company, index) => (
              <div key={index} className="text-center">
                <div className="text-white text-xl md:text-2xl font-bold">{company}</div>
              </div>
            ))}
          </motion.div>
          
          <p className="text-center text-gray-500 text-sm mt-8">
            * Representação visual de empresas globais que utilizam tecnologias de automação similares
          </p>
        </div>
      </section>
    </>
  );
}
