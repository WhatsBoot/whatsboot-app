import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Shield, MessageCircle, Mail } from "lucide-react";
import { insertContactSchema, type InsertContact } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { formatWhatsAppNumber } from "@/lib/utils";

export default function ContactForm() {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<InsertContact>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      name: "",
      email: "",
      whatsapp: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: InsertContact) => {
      return await apiRequest("POST", "/api/contacts", data);
    },
    onSuccess: () => {
      setIsSubmitted(true);
      toast({
        title: "Conta criada com sucesso!",
        description: "Em breve entraremos em contato via WhatsApp para aprovação e liberação do acesso.",
      });
      form.reset();
    },
    onError: (error: any) => {
      toast({
        title: "Erro ao criar conta",
        description: error.message || "Tente novamente em alguns instantes.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContact) => {
    mutation.mutate(data);
  };

  const handleWhatsAppChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatWhatsAppNumber(e.target.value);
    form.setValue("whatsapp", formatted);
  };

  if (isSubmitted) {
    return (
      <section id="contato" className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Card className="max-w-md mx-auto">
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Conta Criada com Sucesso!
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Em breve entraremos em contato via WhatsApp para aprovação e liberação imediata do seu acesso.
                  </p>
                  <Button
                    onClick={() => setIsSubmitted(false)}
                    variant="outline"
                    className="w-full"
                  >
                    Criar Nova Conta
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* Contact Form */}
      <section id="contato" className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="bg-blue-dark w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="text-white h-8 w-8" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Garantia 7 Dias
            </h2>
            <p className="text-xl text-gray-600 mb-2">
              Crie sua conta e tenha acesso total
            </p>
            <p className="text-gray-500">
              Preencha os dados abaixo para criar sua conta. Após a compra, entre em contato via WhatsApp para aprovação e liberação imediata.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-sm font-medium text-gray-700 mb-2 block">
                      Nome completo
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Seu nome completo"
                      {...form.register("name")}
                      className="w-full"
                    />
                    {form.formState.errors.name && (
                      <p className="text-red-500 text-sm mt-1">{form.formState.errors.name.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className="text-sm font-medium text-gray-700 mb-2 block">
                      E-mail
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="seu@email.com"
                      {...form.register("email")}
                      className="w-full"
                    />
                    {form.formState.errors.email && (
                      <p className="text-red-500 text-sm mt-1">{form.formState.errors.email.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <Label htmlFor="whatsapp" className="text-sm font-medium text-gray-700 mb-2 block">
                      WhatsApp (com DDD)
                    </Label>
                    <Input
                      id="whatsapp"
                      type="tel"
                      placeholder="(11) 99999-9999"
                      {...form.register("whatsapp")}
                      onChange={handleWhatsAppChange}
                      className="w-full"
                    />
                    {form.formState.errors.whatsapp && (
                      <p className="text-red-500 text-sm mt-1">{form.formState.errors.whatsapp.message}</p>
                    )}
                  </div>
                  
                  <Button
                    type="submit"
                    disabled={mutation.isPending}
                    className="w-full bg-whatsapp text-white hover:bg-whatsapp-dark transform hover:scale-105 transition-all py-4 text-lg font-bold"
                  >
                    {mutation.isPending ? "Criando conta..." : "Criar Conta"}
                  </Button>
                  
                  <p className="text-center text-sm text-gray-500">
                    Ao criar sua conta, você concorda com nossos termos de uso. Garantia de 7 dias para devolução por qualquer motivo.
                  </p>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Fale Conosco
            </h2>
            <p className="text-xl text-gray-300 mb-2">
              Precisa de ajuda? Estamos aqui para você
            </p>
            <p className="text-gray-400">
              Nossa equipe está pronta para tirar suas dúvidas e ajudar você a escolher o melhor plano.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* WhatsApp Contact */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="bg-whatsapp text-white border-0 h-full">
                <CardContent className="p-8 text-center">
                  <MessageCircle className="h-12 w-12 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">WhatsApp</h3>
                  <p className="mb-6">Fale diretamente conosco</p>
                  <Button
                    asChild
                    className="bg-white text-whatsapp hover:bg-gray-100 font-bold"
                  >
                    <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
                      Chamar Agora
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
            
            {/* Email Contact */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="bg-blue-dark text-white border-0 h-full">
                <CardContent className="p-8 text-center">
                  <Mail className="h-12 w-12 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">E-mail</h3>
                  <p className="mb-6">Envie sua mensagem</p>
                  <Button
                    asChild
                    className="bg-white text-blue-dark hover:bg-gray-100 font-bold"
                  >
                    <a href="mailto:WhatsBoott@gmail.com">
                      WhatsBoott@gmail.com
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
