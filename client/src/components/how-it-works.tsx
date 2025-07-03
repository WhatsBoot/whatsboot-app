import { motion } from "framer-motion";
import { Upload, Edit3, Send } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      icon: Upload,
      title: "Importe seus contatos",
      description: "Carregue sua lista de contatos em segundos através de arquivo Excel ou CSV",
      color: "bg-whatsapp"
    },
    {
      number: 2,
      icon: Edit3,
      title: "Crie sua campanha",
      description: "Desenvolva mensagens personalizadas com botões de ação e configure automações",
      color: "bg-blue-light"
    },
    {
      number: 3,
      icon: Send,
      title: "Dispare e acompanhe",
      description: "Envie para milhares de contatos e monitore resultados em tempo real",
      color: "bg-green-500"
    }
  ];

  return (
    <section id="como-funciona" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Como Funciona
          </h2>
          <p className="text-xl text-gray-600 mb-2">
            Simples em 3 passos
          </p>
          <p className="text-gray-500">
            Configure e comece a usar em poucos minutos. Nossa plataforma foi desenvolvida para ser intuitiva e eficaz.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className={`${step.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6`}>
                <span className="text-white text-2xl font-bold">{step.number}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
              <p className="text-gray-600">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
