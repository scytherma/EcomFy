import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import { 
  CheckCircle2, 
  Sparkles, 
  Users, 
  TrendingUp, 
  Clock, 
  Gift,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Play,
  Star,
  Award,
  BookOpen,
  Zap,
  Target,
  MessageCircle,
  Mail,
  Phone,
  Loader2,
  Store,
  Lock,
  Megaphone,
  Rocket,
  Globe,
} from "lucide-react";
import { SiShopee, SiAmazon, SiTiktok, SiWhatsapp, SiLinktree } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { insertContactLeadSchema } from "@shared/schema";
import useEmblaCarousel from "embla-carousel-react";

import heroBanner from "@assets/hero_1764108857538.png";
import heroBannerMobile from "@assets/Hero-celular_1764113847231.png";
import ecomfyLogo from "@assets/LOGO ECOMFY TRP_1764111230989.png";
import mentorDiogo from "@assets/Mentor diogo_1763848325108.jpg";
import mentorOliveira from "@assets/MENTOR OLIVEIRAa_1763852347253.png";
import dashboardImage from "@assets/generated_images/E-commerce_sales_dashboard_interface_424066ef.png";
import learningImage from "@assets/generated_images/e-commerce_mastery_learning_journey_illustration.png";
import testimonialWoman from "@assets/generated_images/Student_testimonial_portrait_woman_f0a043ed.png";
import testimonialMan from "@assets/generated_images/Student_testimonial_portrait_man_ee5ff9bd.png";
import testimonialAngelo from "/images/testimonial-angelo.jpg";
import testimonialHugo from "/images/testimonial-hugo.jpg";
import bonusSupportVip from "/images/bonus-support-vip.png";
import bonusGroupsVip from "/images/bonus-groups-vip.png";
import bonusProductsChampions from "/images/bonus-products-champions.png";
import bonusSuppliers from "/images/bonus-suppliers.png";
import bonusExclusiveMaterials from "/images/bonus-exclusive-materials.png";
import bonusSuppliesPackaging from "/images/bonus-supplies-packaging.png";
import objectiveSectionBg from "/images/objective-section-bg.png";
import mercadoLivreLogo from "@assets/ml roc_1763860918953.png";
import mercadoLivreLogoColor from "@assets/420-4206772_mercado-livre-logo-mercadolibre-inc_1763877352782.png";
import ttkshpLogo from "@assets/ttkshp_1763877896397.png";

// Module images
import moduleImage1 from "@assets/generated_images/mercado_livre_pro_module.png";
import moduleImage2 from "@assets/generated_images/shopee_expert_module.png";
import moduleImage3 from "@assets/generated_images/tiktok_shop_master_module.png";
import moduleImage4 from "@assets/generated_images/amazon_advanced_module.png";
import moduleImage5 from "@assets/generated_images/content_and_traffic_module.png";
import moduleImage6 from "@assets/generated_images/scaling_and_automation_module.png";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  initial: {},
  whileInView: {},
  viewport: { once: true },
};

const staggerItem = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export default function Home() {
  const { toast } = useToast();
  const [isScrolling, setIsScrolling] = useState(false);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const onSelect = () => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  };

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);
  
  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      setIsScrolling(true);
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 1000);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);
  
  const [timeLeft, setTimeLeft] = useState({
    hours: 12,
    minutes: 34,
    seconds: 56,
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const contactMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: (response: any) => {
      toast({
        title: "Mensagem enviada!",
        description: response.message || "Entraremos em contato em breve.",
        variant: "default",
      });
      setFormData({ name: "", email: "", phone: "", message: "" });
    },
    onError: (error: any) => {
      toast({
        title: "Erro ao enviar mensagem",
        description: error.message || "Por favor, tente novamente.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate with Zod before sending
    const validation = insertContactLeadSchema.safeParse(formData);
    
    if (!validation.success) {
      const firstError = validation.error.errors[0];
      toast({
        title: "Erro de validação",
        description: firstError.message,
        variant: "destructive",
      });
      return;
    }
    
    contactMutation.mutate(validation.data);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours--;
            }
          }
        }
        
        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const platforms = [
    { 
      name: "Shopee", 
      icon: SiShopee, 
      color: "#EE4D2D",
      description: "Aprenda estratégias avançadas para dominar a Shopee e aumentar suas vendas"
    },
    { 
      name: "Mercado Livre", 
      image: mercadoLivreLogoColor,
      color: "#FFE600",
      description: "Técnicas comprovadas para se destacar no maior marketplace da América Latina"
    },
    { 
      name: "Amazon", 
      icon: SiAmazon, 
      color: "#FF9900",
      description: "Domine a Amazon Brasil e escale seu negócio com estratégias profissionais"
    },
    { 
      name: "TikTok Shop", 
      image: ttkshpLogo, 
      color: "#000000",
      description: "Aproveite a explosão do TikTok Shop e venda através de conteúdo viral"
    },
  ];

  const objectives = [
    "Identificar produtos vencedores com validação de mercado + análise de demanda comprovada",
    "Criar anúncios high-converting que geram 3-5x ROI com copywriting estratégico",
    "Dominar precificação psicológica + margem de lucro real (não é ganhar volume perdendo na margem)",
    "Escalar de R$ 5mil para R$ 100mil/mês com sistemas replicáveis e automáticos",
    "Otimizar logística, estoque inteligente e gestão de fornecedores para lucro máximo",
    "Construir marca irrefutável que fideliza clientes e gera vendas repetidas",
  ];

  const carouselModules = [
    { 
      image: moduleImage1,
      title: "Mercado Livre Pro"
    },
    { 
      image: moduleImage2,
      title: "Shopee Expert"
    },
    { 
      image: moduleImage3,
      title: "TikTok Shop Master"
    },
    { 
      image: moduleImage4,
      title: "Amazon Advanced"
    },
    { 
      image: moduleImage5,
      title: "Conteúdo & Tráfego Multicanal"
    },
    { 
      image: moduleImage6,
      title: "Escala & Automação"
    },
  ];

  const bonuses = [
    { 
      title: "Lista de 500+ Produtos Testados", 
      value: "R$ 997",
      description: "Produtos validados com histórico de vendas comprovado"
    },
    { 
      title: "Suporte VIP no WhatsApp", 
      value: "R$ 497",
      description: "Tire dúvidas direto com nossa equipe de especialistas"
    },
    { 
      title: "Comunidade Exclusiva", 
      value: "R$ 397",
      description: "Network com outros empreendedores de sucesso"
    },
  ];

  const testimonials = [
    {
      name: "Ângelo",
      result: "R$ 45.000/mês",
      image: testimonialAngelo,
      text: "Só acompanhando as lives do Diogo e trocando algumas mensagens já bati R$ 45 mil por mês na Shopee. Saí do zero, hoje vivo disso."
    },
    {
      name: "Hugo",
      result: "R$ 90.000/mês",
      image: testimonialHugo,
      text: "O Oliveira e o Diogo me ajudaram muito nas lives e nas mensagens. As estratégias que eles passaram foram essenciais pra eu escalar. Hoje bato R$ 90 mil/mês e sigo firme rumo aos 6 dígitos."
    },
    {
      name: "Vinicius",
      result: "R$ 50.000/mês",
      image: testimonialMan,
      text: "O Oliveira é o cara que mais me ajudou a destravar. As estratégias que ele passa no grupo de mentorados e nas calls ao vivo fizeram minha operação virar outra. Hoje rodo R$ 50 mil/mês com consistência e margem alta."
    },
  ];

  const faqs = [
    {
      question: "Preciso de experiência prévia para começar?",
      answer: "Não! O curso foi desenvolvido para iniciantes. Começamos do absoluto zero e te levamos até estratégias avançadas de forma gradual e didática."
    },
    {
      question: "Quanto tempo leva para ter os primeiros resultados?",
      answer: "Com dedicação, você pode fazer suas primeiras vendas em 15-30 dias. Temos alunos que começaram a vender já na segunda semana do curso."
    },
    {
      question: "Preciso de muito dinheiro para investir em estoque?",
      answer: "Não necessariamente! Ensinamos estratégias de dropshipping e low ticket que permitem começar com investimento mínimo."
    },
    {
      question: "O curso tem garantia?",
      answer: "Sim! Você tem 7 dias de garantia incondicional. Se não gostar por qualquer motivo, devolvemos 100% do seu investimento."
    },
    {
      question: "Como funciona o acesso ao curso?",
      answer: "O acesso é vitalício! Você poderá assistir as aulas quantas vezes quiser, no seu ritmo, de qualquer dispositivo."
    },
    {
      question: "Terei suporte dos mentores?",
      answer: "Sim! Você terá acesso ao grupo VIP no WhatsApp onde nossa equipe responde dúvidas diariamente."
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      
      {/* Hero Section - Mobile */}
      <section className="relative w-full overflow-hidden bg-black md:hidden" style={{aspectRatio: '800 / 1232'}}>
        <div className="absolute inset-0" style={{backgroundImage: `url(${heroBannerMobile})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}} />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" aria-hidden="true" />

        <div className="absolute inset-0 w-full px-4 pt-28 flex flex-col items-center justify-center">
          <img src={ecomfyLogo} alt="EcomFy Logo" className="h-8" />
        </div>

        <div className="absolute inset-0 w-full px-4 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-auto mb-4"
          >
            <h1 className="font-bold text-white mb-1 text-center max-w-sm" style={{fontSize: '1.1rem', lineHeight: '1.4rem'}}>
              Chegou a hora de conhecer o segredo<br />
              das <span className="bg-gradient-to-r from-[#c898ff] via-[#7c2eff] to-[#870aff] bg-clip-text text-transparent font-bold">empresas que crescem diariamente e lucram muito nas 4 gigantes do e-commerce</span> brasileiro.
            </h1>
            <p className="text-gray-300 text-xs mb-4 text-center max-w-sm">
              Prepare-se: dia <span className="bg-gradient-to-r from-[#c898ff] via-[#7c2eff] to-[#870aff] bg-clip-text text-transparent font-bold">12/12</span> a EcomFy abre as portas e revela tudo
            </p>
          </motion.div>
          <motion.div 
            className="flex flex-col gap-3 w-full max-w-sm mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
          >
            <a href="https://pay.cakto.com.br/trrf6yf" className="w-full">
              <Button 
                size="default"
                className="w-full px-6 py-3 text-base font-bold bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-purple-500/60 transition-all duration-300"
                data-testid="button-cta-hero"
              >
                <Sparkles className="mr-3 h-5 w-5" />
                Entrar para EcomFy
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Hero Section - Desktop */}
      <section className="relative w-full overflow-hidden bg-black hidden md:block" style={{aspectRatio: '1920 / 1080'}}>
        <div className="absolute inset-0" style={{backgroundImage: `url(${heroBanner})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}} />
        
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent" aria-hidden="true" />

        <div className="absolute inset-0 w-full px-4 sm:px-6 lg:px-8 pt-32 flex flex-col items-start">
          <img src={ecomfyLogo} alt="EcomFy Logo" className="h-12" />
        </div>

        <div className="absolute inset-0 w-full px-4 sm:px-6 lg:px-8 pt-48 flex flex-col items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-bold text-white mb-4 max-w-3xl" style={{fontSize: '2.0rem', lineHeight: '2.1rem'}}>
              Chegou a hora de conhecer o segredo<br />
              das <span className="bg-gradient-to-r from-[#c898ff] via-[#7c2eff] to-[#870aff] bg-clip-text text-transparent font-bold">empresas que crescem diariamente e lucram muito nas 4 gigantes do e-commerce</span> brasileiro.
            </h1>
            <p className="text-gray-300 text-sm mb-8 max-w-3xl">
              Prepare-se: dia <span className="bg-gradient-to-r from-[#c898ff] via-[#7c2eff] to-[#870aff] bg-clip-text text-transparent font-bold">12/12</span> a EcomFy abre as portas e revela tudo
            </p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-1 sm:gap-2 max-w-xl mt-40 mb-auto"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-full sm:w-auto"
              >
                <a href="https://pay.cakto.com.br/trrf6yf" className="w-full">
                  <Button 
                    size="lg"
                    className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-6 text-base sm:text-lg font-bold bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-purple-500/60 transition-all duration-300 whitespace-nowrap"
                    data-testid="button-cta-hero"
                  >
                    <Sparkles className="mr-3 h-6 w-6 sm:h-7 sm:w-7" />
                    Entrar para EcomFy
                  </Button>
                </a>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-full sm:w-auto"
              >
                <a href="https://wa.me/5511948889811?text=Oi%2C%20vim%20do%20site!%20Estou%20quase%20decidindo%20entrar%20na%20EcomFy%2C%20mas%20queria%20tirar%20uma%20d%C3%BAvida%20r%C3%A1pida%20antes%20de%20garantir%20minha%20vaga" target="_blank" rel="noopener noreferrer" className="w-full">
                  <Button 
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-6 text-base sm:text-lg font-bold bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white/20 whitespace-nowrap"
                    data-testid="button-whatsapp-hero"
                  >
                    <SiWhatsapp className="mr-3 h-6 w-6 sm:h-7 sm:w-7" />
                    Tirar dúvidas
                  </Button>
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent" aria-hidden="true" />

      {/* About EcomFy Section - Mobile */}
      <section 
        id="objetivo"
        className="md:hidden relative overflow-hidden" 
        style={{
          backgroundImage: `url(/images/objetivo-mobile.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundColor: 'rgb(5, 4, 8)',
          aspectRatio: '800 / 2600'
        }}
      >
        <div className="absolute inset-0 bg-black/70" aria-hidden="true" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-16">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-start">
            {/* Left Content with Border */}
            <motion.div
              {...fadeInUp}
              className="w-full lg:w-2/3 border-l-4 border-primary pl-6"
            >
              <div className="text-sm font-bold text-primary mb-4 tracking-wider">
                OBJETIVO
              </div>

              <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                <span className="text-white">Qual é o objetivo da</span> <span className="text-primary">EcomFy?</span>
              </h2>

              <div className="text-gray-300 text-sm space-y-5">
                <p>
                  Um dos maiores desafios de quem quer começar ou evoluir no e-commerce de verdade é saber exatamente onde, como e o que vender sem perder tempo e dinheiro. Foi pensando nisso que <span className="text-primary font-bold">Diogo e Oliveira</span>, dois mentores que já faturaram <span className="text-primary font-bold">múltiplos 7 dígitos</span> no Mercado Livre, Shopee, TikTok Shop e Amazon, criaram a <span className="text-primary font-bold">EcomFy</span>.
                </p>

                <p>
                  A EcomFy é o <span className="text-primary font-bold">treinamento mais completo e atualizado do Brasil</span> para dominar as 4 plataformas que realmente mandam no mercado hoje. O foco é <span className="text-primary font-bold">te levar do absoluto zero até o nível avançado</span> com aulas práticas, diretas ao ponto e baseadas no passo a passo que nós mesmos usamos para construir e escalar nossas lojas.
                </p>

                <p>
                  Você vai aprender a <span className="text-primary font-bold">encontrar produtos vencedores, criar anúncios que convertem de verdade, dominar tráfego pago e orgânico, precificar com margem alta, gerenciar estoque e logística e escalar suas vendas de forma sustentável</span>.
                </p>

                <p>
                  Serve tanto para <span className="text-primary font-bold">quem nunca vendeu nada online</span> e quer começar do jeito certo, quanto para quem já tem loja e precisa <span className="text-primary font-bold">explodir o faturamento em 2025</span>. Tudo isso com potencial de virar sua <span className="text-primary font-bold">principal fonte de renda</span> ou a evolução real do seu negócio atual.
                </p>

                <p>
                  Mais do que vender coisinhas na internet, na EcomFy você <span className="text-primary font-bold">constrói um negócio sólido, previsível e altamente lucrativo</span>.
                </p>
              </div>
            </motion.div>

            {/* Right Image Placeholder - Transparent */}
            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.2 }}
              className="w-full lg:w-1/3"
            >
              <div className="relative w-full aspect-[3/4] rounded-lg overflow-hidden" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* About EcomFy Section - Desktop */}
      <section 
        id="objetivo"
        className="hidden md:block py-20 relative overflow-hidden" 
        style={{
          backgroundImage: `url(${objectiveSectionBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundColor: 'rgb(5, 4, 8)'
        }}
      >
        <div className="absolute inset-0 bg-black/70" aria-hidden="true" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-8 items-center justify-start">
            {/* Left Content with Border */}
            <motion.div
              {...fadeInUp}
              className="w-full lg:w-2/3 border-l-4 border-primary pl-8"
            >
              <div className="text-sm font-bold text-primary mb-4 tracking-wider">
                OBJETIVO
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                <span className="text-white">Qual é o objetivo da</span> <span className="text-primary">EcomFy?</span>
              </h2>

              <div className="text-gray-300 text-base space-y-6">
                <p>
                  Um dos maiores desafios de quem quer começar ou evoluir no e-commerce de verdade é saber exatamente onde, como e o que vender sem perder tempo e dinheiro. Foi pensando nisso que <span className="text-primary font-bold">Diogo e Oliveira</span>, dois mentores que já faturaram <span className="text-primary font-bold">múltiplos 7 dígitos</span> no Mercado Livre, Shopee, TikTok Shop e Amazon, criaram a <span className="text-primary font-bold">EcomFy</span>.
                </p>

                <p>
                  A EcomFy é o <span className="text-primary font-bold">treinamento mais completo e atualizado do Brasil</span> para dominar as 4 plataformas que realmente mandam no mercado hoje. O foco é <span className="text-primary font-bold">te levar do absoluto zero até o nível avançado</span> com aulas práticas, diretas ao ponto e baseadas no passo a passo que nós mesmos usamos para construir e escalar nossas lojas.
                </p>

                <p>
                  Você vai aprender a <span className="text-primary font-bold">encontrar produtos vencedores, criar anúncios que convertem de verdade, dominar tráfego pago e orgânico, precificar com margem alta, gerenciar estoque e logística e escalar suas vendas de forma sustentável</span>.
                </p>

                <p>
                  Serve tanto para <span className="text-primary font-bold">quem nunca vendeu nada online</span> e quer começar do jeito certo, quanto para quem já tem loja e precisa <span className="text-primary font-bold">explodir o faturamento em 2025</span>. Tudo isso com potencial de virar sua <span className="text-primary font-bold">principal fonte de renda</span> ou a evolução real do seu negócio atual.
                </p>

                <p>
                  Mais do que vender coisinhas na internet, na EcomFy você <span className="text-primary font-bold">constrói um negócio sólido, previsível e altamente lucrativo</span>.
                </p>
              </div>
            </motion.div>

            {/* Right Image Placeholder - Transparent */}
            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.2 }}
              className="w-full lg:w-1/3"
            >
              <div className="relative w-full aspect-[3/4] rounded-lg overflow-hidden" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" aria-hidden="true" />

      {/* Platform Showcase */}
      <section className="py-20" style={{backgroundColor: 'rgb(5, 4, 8)'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
              Shopee, Mercado Livre, Amazon e TikTok Shop, <span className="bg-gradient-to-r from-[#c898ff] via-[#7c2eff] to-[#870aff] text-transparent bg-clip-text">domine todas de uma vez</span>
            </h2>
            <p className="text-xl text-gray-400">
              Passo a passo testado e validado nas 4 maiores plataformas do e-commerce
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {platforms.map((platform, index) => (
              <motion.div
                key={platform.name}
                variants={staggerItem}
                transition={{ delay: index * 0.1 }}
                className="h-full"
              >
                <Card 
                  className="group bg-white/5 backdrop-blur-md border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30 border-t-4 border-t-transparent hover:border-t-purple-500 h-full flex flex-col"
                  data-testid={`card-platform-${platform.name.toLowerCase().replace(' ', '-')}`}
                >
                  <CardContent className="p-8 text-center flex-1 flex flex-col justify-center">
                    <div className="mb-4 flex justify-center">
                      {platform.image ? (
                        <motion.img 
                          src={platform.image}
                          alt={`Logo do ${platform.name}`}
                          className="w-16 h-16 transition-all duration-300 object-contain"
                          animate={{ filter: isScrolling ? "grayscale(0%)" : "grayscale(100%)" }}
                          whileHover={{ filter: "grayscale(0%)" }}
                          initial={{ filter: "grayscale(100%)" }}
                        />
                      ) : platform.icon ? (
                        <motion.div
                          animate={{ filter: isScrolling ? "grayscale(0%)" : "grayscale(100%)" }}
                          whileHover={{ filter: "grayscale(0%)" }}
                          initial={{ filter: "grayscale(100%)" }}
                        >
                          <platform.icon 
                            className="w-16 h-16 transition-all duration-300"
                            style={{ color: platform.color }}
                          />
                        </motion.div>
                      ) : (
                        <div 
                          className="w-16 h-16 rounded-lg flex items-center justify-center text-2xl font-bold transition-all duration-300 grayscale group-hover:grayscale-0"
                          style={{ backgroundColor: platform.color, color: "#000" }}
                        >
                          ML
                        </div>
                      )}
                    </div>
                    <h3 className="font-heading text-2xl font-bold text-white mb-3">
                      {platform.name}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {platform.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" aria-hidden="true" />

      {/* Course Modules Carousel */}
      <section className="py-16 relative overflow-visible" style={{backgroundColor: 'rgb(5, 4, 8)'}}>
        <div className="absolute -top-64 -right-32 w-[700px] h-[700px] bg-purple-500/20 rounded-full blur-3xl pointer-events-none" style={{ zIndex: 0 }} aria-hidden="true" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            {...fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
              O Que Você Vai Aprender
            </h2>
            <p className="text-xl text-gray-400">
              Transforme-se em um especialista em e-commerce com nosso método passo a passo
            </p>
          </motion.div>

          <div className="flex items-center justify-center gap-4 md:gap-8">
            {/* Left Arrow */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollPrev}
              disabled={!canScrollPrev}
              className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full border-2 border-purple-500/50 text-white hover:border-purple-400 hover:bg-purple-500/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              data-testid="button-carousel-prev"
              aria-label="Ver módulos anteriores"
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>

            {/* Carousel Container */}
            <div className="flex-1 overflow-hidden" ref={emblaRef}>
              <div className="flex gap-6">
                {carouselModules.map((module, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 px-6"
                    data-testid={`carousel-slide-${index}`}
                  >
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="h-full"
                    >
                      <Card className="group relative w-full h-72 rounded-lg border-2 border-purple-500/50 hover:border-purple-400 transition-all duration-300 overflow-hidden hover:shadow-2xl hover:shadow-purple-500/30 flex flex-col">
                        {/* Full Image Only */}
                        {module.image && (
                          <div className="relative w-full h-full overflow-hidden">
                            <img 
                              src={module.image} 
                              alt={`Módulo ${module.title}`}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                          </div>
                        )}
                      </Card>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Arrow */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollNext}
              disabled={!canScrollNext}
              className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full border-2 border-purple-500/50 text-white hover:border-purple-400 hover:bg-purple-500/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              data-testid="button-carousel-next"
              aria-label="Ver próximos módulos"
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" aria-hidden="true" />

      {/* Mentors Section */}
      <section className="py-12" style={{backgroundColor: 'rgb(5, 4, 8)'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
              Conheça Seus Mentores
            </h2>
            <p className="text-xl text-gray-400">
              Aprenda com quem já percorreu o caminho do sucesso
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { 
                name: "Diogo", 
                title: "Especialista em Shopee e Mercado Livre",
                experience: "4 anos",
                sales: "R$ 100k/Mês",
                image: mentorDiogo
              },
              { 
                name: "Oliveira", 
                title: "Especialista em TikTok Shop e Amazon",
                experience: "5 anos",
                sales: "R$ 600k/Mês",
                image: mentorOliveira
              },
            ].map((mentor, index) => (
              <motion.div
                key={mentor.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
              >
                <Card 
                  className="group bg-white/5 backdrop-blur-md border-white/10 hover:scale-102 transition-all duration-300 overflow-hidden"
                  data-testid={`card-mentor-${index}`}
                >
                  <CardContent className="p-0">
                    <motion.div 
                      className="relative overflow-hidden"
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.8, delay: index * 0.2 + 0.1 }}
                    >
                      <img 
                        src={mentor.image} 
                        alt={`Foto profissional do mentor ${mentor.name}, ${mentor.title}`}
                        className="w-full h-96 object-cover group-hover:brightness-110 transition-all duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-purple-900/40 to-transparent" aria-hidden="true" />
                      
                      <motion.div 
                        className="absolute bottom-0 left-0 right-0 p-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                      >
                        <motion.h3 
                          className="font-heading text-3xl font-bold text-white mb-2"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true, margin: "-50px" }}
                          transition={{ duration: 0.5, delay: index * 0.2 + 0.4 }}
                        >
                          {mentor.name}
                        </motion.h3>
                        <motion.p 
                          className="text-purple-300 text-lg mb-4"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true, margin: "-50px" }}
                          transition={{ duration: 0.5, delay: index * 0.2 + 0.5 }}
                        >
                          {mentor.title}
                        </motion.p>
                        
                        <motion.div 
                          className="flex gap-6"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true, margin: "-50px" }}
                          transition={{ duration: 0.5, delay: index * 0.2 + 0.6 }}
                        >
                          <div>
                            <p className="text-gray-300 text-sm">Experiência</p>
                            <p className="text-white text-xl font-bold">{mentor.experience}</p>
                          </div>
                          <div>
                            <p className="text-gray-300 text-sm">Faturamento Gerado</p>
                            <p className="text-white text-xl font-bold">{mentor.sales}</p>
                          </div>
                        </motion.div>
                      </motion.div>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" aria-hidden="true" />

      {/* What's Included */}
      <section className="py-16 relative overflow-hidden" style={{backgroundColor: 'rgb(5, 4, 8)'}}>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/15 rounded-full blur-3xl -z-10" aria-hidden="true" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            {...fadeInUp}
            className="text-center mb-20"
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-white to-purple-300 bg-clip-text text-transparent mb-4">
              O Que Está Incluso
            </h2>
            <p className="text-xl text-gray-300">
              Pacote Completo Para Seu Sucesso no E-Commerce
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { 
                item: "Comunidade Ecomfy", 
                description: "Conexão com outros empreendedores",
                icon: (
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                  </svg>
                )
              },
              { 
                item: "Suporte Individual", 
                description: "Mentores disponíveis quando você precisa",
                icon: (
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12h-8v-2h8v2zm0-4h-8V8h8v2z"/>
                  </svg>
                )
              },
              { 
                item: "+ de 40 Aulas em Vídeos", 
                description: "Conteúdo completo e atualizado sempre",
                icon: (
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                )
              },
              { 
                item: "Mentoria em Grupo", 
                description: "Sessões ao vivo com os especialistas",
                icon: (
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
                  </svg>
                )
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                data-testid={`included-item-${index}`}
              >
                <Card className="group relative h-full bg-white/5 backdrop-blur-md border border-white/10 hover:border-purple-500/50 transition-all duration-300 overflow-hidden hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-purple-500/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" aria-hidden="true" />
                  
                  <CardContent className="p-6 relative z-10 flex flex-col h-full">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      {feature.icon}
                    </div>
                    <h3 className="font-heading text-lg font-bold text-white mb-2">
                      {feature.item}
                    </h3>
                    <p className="text-purple-200 text-sm flex-grow">
                      {feature.description}
                    </p>
                    <div className="mt-4 pt-4 border-t border-purple-400/20 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-purple-400" />
                      <span className="text-xs text-purple-300 font-medium">Incluído</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" aria-hidden="true" />

      {/* Exclusive Bonuses Section */}
      <section className="py-20" style={{backgroundColor: 'rgb(5, 4, 8)'}}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeInUp}
            className="text-center mb-16"
          >
            <Badge className="mb-4 px-6 py-2 text-sm font-semibold bg-primary/20 border border-primary text-primary">
              BÔNUS
            </Badge>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
              E para garantir que você tenha <br className="hidden md:block" />
              <span className="text-white">tudo o que precisa, </span><span className="text-primary">separamos</span>
              <br />
              <span className="text-white">alguns </span><span className="text-primary">bônus exclusivos!</span>
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {[
              {
                title: "Suporte Individual VIP",
                description: "Acesso direto a um e a minha equipe e através de um número exclusivo WhatsApp com devoluções e é qual em cada etapa do seu jornada no Eco Drop sempre que precisar.",
                image: bonusSupportVip
              },
              {
                title: "Grupos de Alunos VIP",
                description: "Acesso exclusivo a grupos no WhatsApp e Telegram para trocar networking com outros alunos, obter novas estratégias e receber suporte direto com especialistas.",
                image: bonusGroupsVip
              },
              {
                title: "Lista de Produtos Campeões",
                description: "Acesso a 100+ produtos de alta demanda à bolsa concorrência prontos para vender.",
                image: bonusProductsChampions
              },
              {
                title: "Lista de Fornecedores",
                description: "Mais de 100 fornecedores, importadores e distribuidores nacionais e internacionais.",
                image: bonusSuppliers
              },
              {
                title: "Lista de Insumos e embalagem",
                description: "Tudo que você poderá utilizar na sua operação, desde impressoras térmicos acessíveis à plástico bolha.",
                image: bonusSuppliesPackaging
              },
              {
                title: "Materiais Exclusivos",
                description: "Tenho acesso a PDFs, Mapas Mentais, Roteiros de Aulas e Planilhas para otimizar seus resultados.",
                image: bonusExclusiveMaterials
              }
            ].map((bonus, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                transition={{ delay: index * 0.1 }}
                className="h-full"
              >
                <div 
                  className="group relative h-80 rounded-lg overflow-hidden cursor-pointer hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300"
                  data-testid={`card-bonus-${index}`}
                >
                  {/* Background Image */}
                  <img 
                    src={bonus.image}
                    alt={bonus.title}
                    className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                  
                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-black/70 group-hover:bg-black/60 transition-all duration-300" />
                  
                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <h3 className="font-heading text-xl md:text-2xl font-bold text-primary leading-tight mb-3">
                      {bonus.title}
                    </h3>
                    
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {bonus.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" aria-hidden="true" />

      {/* Testimonials */}
      <section id="depoimentos" className="py-12" style={{backgroundColor: 'rgb(5, 4, 8)'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
              Resultados Reais dos Nossos Alunos
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Mais de R$ 350 Mil em faturamento gerado
            </p>
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#c898ff] via-[#7c2eff] to-[#870aff] px-8 py-4 rounded-full">
              <TrendingUp className="w-6 h-6 text-white" />
              <span className="text-white text-2xl font-bold">R$ 350K+ em Vendas</span>
            </div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                variants={staggerItem}
                transition={{ delay: index * 0.1 }}
              >
                <Card 
                  className="bg-white/5 backdrop-blur-md border-white/10 hover:scale-105 transition-all duration-300 h-full"
                  data-testid={`card-testimonial-${index}`}
                >
                  <CardContent className="p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <img 
                        src={testimonial.image} 
                        alt={`Foto de ${testimonial.name}, aluno(a) que alcançou ${testimonial.result}`}
                        className="w-16 h-16 rounded-full object-cover border-2 border-purple-500"
                      />
                      <div>
                        <h4 className="font-bold text-white text-lg">{testimonial.name}</h4>
                        <p className="text-primary font-semibold">{testimonial.result}</p>
                      </div>
                    </div>
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-300 leading-relaxed italic">
                      "{testimonial.text}"
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" aria-hidden="true" />

      {/* Pricing Section */}
      <section className="py-12 relative overflow-visible" style={{backgroundColor: 'rgb(5, 4, 8)'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            {...fadeInUp}
            className="mb-16 text-center"
          >
            <div className="mb-6">
              <Badge className="px-4 py-2 text-xs font-bold bg-primary/20 text-primary border border-primary">
                INVESTIMENTO
              </Badge>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#c898ff] via-[#7c2eff] to-[#870aff] bg-clip-text text-transparent leading-tight">
              Agora que viu tudo que vai receber, quanto acha que isso custaria?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Benefits List */}
            <motion.div
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h3 
                variants={staggerItem}
                className="text-2xl font-bold bg-gradient-to-r from-[#c898ff] via-[#7c2eff] to-[#870aff] bg-clip-text text-transparent mb-8"
              >
                Relembrado tudo que você terá direito:
              </motion.h3>
              <div className="space-y-4">
                {[
                  'Plataforma com +150 aulas e 50 módulos',
                  'Suporte individual VIP',
                  'Acesso aos Grupos VIP (WhatsApp e Telegram)',
                  'Lista de Produtos Campeões',
                  'Lista de Fornecedores (Nacionais e Internacionais)',
                  'Lista de insumos e embalagens para utilizar em sua operação',
                  'Material Exclusivo (PDFs, Mapas Mentais, Roteiros e Planilhas)'
                ].map((item, index) => (
                  <motion.div 
                    key={index} 
                    variants={staggerItem}
                    className="flex items-start gap-3"
                  >
                    <div className="flex-shrink-0 mt-1">
                      <svg className="h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-gray-300 text-base">
                      {item}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right: Pricing Card */}
            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.2 }}
              className="relative z-20"
            >
              <Card className="bg-gradient-to-br from-gray-900 to-gray-800 backdrop-blur-md border-2 border-purple-500/50 shadow-2xl shadow-purple-500/30">
                <CardContent className="p-12">
                  <div className="text-center mb-8">
                    <div className="mb-6 flex justify-center">
                      <img 
                        src={ecomfyLogo} 
                        alt="Logo EcomFy" 
                        className="h-12 object-contain"
                      />
                    </div>
                    <p className="text-gray-400 text-sm mb-4">de R$ 497 por apenas</p>
                    <div className="mb-6 flex items-baseline justify-center gap-2">
                      <span className="text-sm md:text-sm text-gray-300">12x</span>
                      <span className="text-4xl md:text-6xl font-black bg-gradient-to-r from-[#c898ff] to-[#7c2eff] bg-clip-text text-transparent">
                        R$ 46,16
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm">
                      ou R$ 397 à vista
                    </p>
                  </div>

                  <div className="space-y-3 flex flex-col items-center">
                    <a href="https://pay.cakto.com.br/trrf6yf" className="block w-full">
                      <Button 
                        size="lg"
                        className="font-bold bg-primary hover:bg-primary/90 shadow-2xl hover:shadow-purple-500/50 animate-pulse-glow w-full"
                        data-testid="button-cta-pricing"
                      >
                        <Sparkles className="mr-2 h-5 w-5" />
                        Quero meu lugar na EcomFy
                      </Button>
                    </a>
                    
                    <a href="https://wa.me/5511948889811?text=Oi%2C%20vim%20do%20site!%20Estou%20quase%20decidindo%20entrar%20na%20EcomFy%2C%20mas%20queria%20tirar%20uma%20d%C3%BAvida%20r%C3%A1pida%20antes%20de%20garantir%20minha%20vaga" target="_blank" rel="noopener noreferrer" className="block w-full">
                      <Button 
                        size="lg"
                        variant="outline"
                        className="font-semibold bg-green-600 hover:bg-green-700 text-white border-green-600 w-full"
                        data-testid="button-whatsapp-pricing"
                      >
                        <MessageCircle className="mr-2 h-5 w-5" />
                        Falar com Especialista EcomFy
                      </Button>
                    </a>
                  </div>

                  <div className="mt-8 text-center">
                    <p className="text-gray-400 text-sm mb-4 flex items-center justify-center gap-2">
                      <Lock className="h-4 w-4 text-white" />
                      Garantia EcomFy · 7 dias ou seu dinheiro de volta
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-8" style={{backgroundColor: 'rgb(5, 4, 8)'}} aria-hidden="true" />

      {/* FAQ */}
      <section id="faq" className="py-24" style={{backgroundColor: 'rgb(5, 4, 8)'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column */}
            <motion.div
              {...fadeInUp}
              className="flex flex-col items-center lg:items-start"
            >
              {/* Logo/Title */}
              <div className="mb-12">
                <h2 className="font-heading text-6xl md:text-7xl font-bold bg-gradient-to-r from-[#c898ff] via-[#7c2eff] to-[#870aff] bg-clip-text text-transparent mb-0">
                  FAQ
                </h2>
                <p className="text-gray-400 text-sm">Perguntas frequentes</p>
              </div>

              {/* Subtitle */}
              <h3 className="text-2xl font-bold mb-2">
                <span className="bg-gradient-to-r from-[#c898ff] via-[#7c2eff] to-[#870aff] bg-clip-text text-transparent">
                  Ainda com dúvida?
                </span>
              </h3>

              {/* WhatsApp Box */}
              <a 
                href="https://wa.me/5511948889811?text=Oi%2C%20vim%20do%20site!%20Estou%20quase%20decidindo%20entrar%20na%20EcomFy%2C%20mas%20queria%20tirar%20uma%20d%C3%BAvida%20r%C3%A1pida%20antes%20de%20garantir%20minha%20vaga"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 mb-12 w-full max-w-xs hover:border-green-500/50 transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <div className="bg-green-500/20 p-4 rounded-full flex-shrink-0">
                      <SiWhatsapp className="h-6 w-6 text-green-400" />
                    </div>
                    <div>
                      <p className="text-green-400 font-semibold text-sm">Atendimento por WhatsApp</p>
                      <p className="text-gray-300 text-xs mt-1">CLIQUE PARA FALAR</p>
                    </div>
                  </div>
                </motion.div>
              </a>

              {/* Logo Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <img src={ecomfyLogo} alt="EcomFy" className="h-32 w-32 object-contain" />
              </motion.div>
            </motion.div>

            {/* Right Column - FAQ Accordion */}
            <motion.div
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="lg:col-span-2"
            >
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    variants={staggerItem}
                  >
                    <AccordionItem 
                      value={`item-${index}`}
                      className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg px-6 data-[state=open]:border-purple-500/50 data-[state=open]:bg-white/10"
                      data-testid={`faq-item-${index}`}
                    >
                      <AccordionTrigger className="text-left text-white hover:text-purple-400 text-base font-semibold py-5 group">
                        <span className="flex items-center gap-3">
                          <span className="text-primary text-lg group-hover:text-purple-300">+</span>
                          {faq.question}
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-300 text-sm leading-relaxed pb-5 pl-8">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" aria-hidden="true" />

      {/* Footer */}
      <footer className="py-16" style={{backgroundColor: 'rgb(5, 4, 8)'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
              <p className="text-gray-400 mb-6">
                Transformando vidas através do e-commerce. Aprenda a vender nas maiores plataformas do Brasil.
              </p>
              <div className="flex gap-4">
                <a 
                  href="https://linktr.ee/EcomFyof" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors"
                  data-testid="link-linktree"
                >
                  <SiLinktree className="w-5 h-5 text-white" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Links Rápidos</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#objetivo" className="text-gray-400 hover:text-purple-400 transition-colors">
                    Sobre o Curso
                  </a>
                </li>
                <li>
                  <a href="#depoimentos" className="text-gray-400 hover:text-purple-400 transition-colors">
                    Depoimentos
                  </a>
                </li>
                <li>
                  <a href="#faq" className="text-gray-400 hover:text-purple-400 transition-colors">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                    Política de Privacidade
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                    Termos de Uso
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Contato</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-gray-400">
                  <Mail className="w-5 h-5 text-purple-400" />
                  contato@ecomfy.com.br
                </li>
                <li className="flex items-center gap-3 text-gray-400">
                  <Phone className="w-5 h-5 text-purple-400" />
                  (11) 9488-89811
                </li>
                <li>
                  <a 
                    href="https://wa.me/5511948889811?text=Oi%2C%20vim%20do%20site!%20Estou%20quase%20decidindo%20entrar%20na%20EcomFy%2C%20mas%20queria%20tirar%20uma%20d%C3%BAvida%20r%C3%A1pida%20antes%20de%20garantir%20minha%20vaga" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    <MessageCircle className="w-5 h-5 text-purple-400" />
                    WhatsApp Business
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8">
            <p className="text-center text-gray-500 text-sm">
              © 2024 EcomFy. Todos os direitos reservados.
            </p>
            <p className="text-center text-gray-600 text-xs mt-2">
              Este site não é afiliado ao Facebook, Google, Shopee, Mercado Livre, Amazon ou TikTok. 
              Após fechar a compra neste site, você será direcionado para a plataforma de membros.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
