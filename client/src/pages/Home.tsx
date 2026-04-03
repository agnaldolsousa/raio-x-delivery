import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, TrendingUp, Lock, Zap, AlertTriangle, ArrowRight, MousePointer2 } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [showCheckout, setShowCheckout] = useState(false);

  const handleCTA = () => {
    // Redirecionamento para checkout Kiwify
    window.open("https://pay.kiwify.com.br/ZGDv54o", "_blank");
  };

  return (
    <div className="min-h-screen bg-[#05070a] text-slate-100 selection:bg-cyan-500/30">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-[#05070a]/80 backdrop-blur-md border-b border-white/5">
        <div className="container flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <img
              src="/assets/logo.png"
              alt="Raio-X Logo"
              className="h-10 w-auto"
              loading="lazy"
            />
            <span className="font-bold text-xl tracking-tight text-white hidden sm:inline-block">RAIO-X DO DELIVERY</span>
          </div>
          <div className="flex items-center gap-4">
            <Button
              onClick={handleCTA}
              className="bg-cyan-700 hover:bg-cyan-600 text-white font-bold px-6 py-2 rounded-full glow-blue transition-all duration-300"
            >
              ACESSAR AGORA
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        {/* Background Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium animate-pulse">
              <Zap className="w-4 h-4" />
              SISTEMA COMPLETO DE CONTROLE FINANCEIRO
            </div>

            <h1 className="text-3xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Você pode estar vendendo muito… <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                e mesmo assim tendo prejuízo.
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
              O problema não é falta de venda. É falta de controle. Descubra exatamente quanto você ganha em cada pedido com um sistema que calcula tudo automaticamente.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4 px-4">
              <Button
                onClick={handleCTA}
                className="w-auto sm:w-auto bg-cyan-700 hover:bg-cyan-600 text-white text-base md:text-lg font-bold px-6 md:px-10 py-5 md:py-8 rounded-2xl glow-blue transition-all duration-300 transform hover:scale-105"
              >
                QUERO VER MEU LUCRO AGORA      
              </Button>
              <a href="#como-funciona" className="text-slate-400 hover:text-white font-medium transition-colors flex items-center gap-2">
                Ver como funciona
                <MousePointer2 className="w-4 h-4" />
              </a>
            </div>

            {/* Hero Image / Dashboard Preview */}
            <div className="mt-20 relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative bg-[#0f172a] rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
                <img
                  src="/assets/print_menu.webp"
                  alt="Dashboard Sistema Raio-X"
                  width={300}
                  height={600}
                  className="w-full h-auto opacity-90 group-hover:opacity-100 transition duration-500"
                  loading="eager"
                  fetchPriority="high"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quebra de Crença */}
      <section className="py-24 bg-slate-900/50 border-y border-white/5 relative">
        <div className="container text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              "Se você não sabe exatamente quanto lucra por produto… <span className="text-cyan-400">você está no escuro.</span>"
            </h2>
            <p className="text-xl text-slate-400">
              A maioria dos donos de delivery precifica errado, ignora custos e perde dinheiro sem perceber.
            </p>
          </div>
        </div>
      </section>

      {/* Problemas Section */}
      <section className="py-32 relative">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-white">
                O iFood e a maquininha de cartão ficam com <span className="text-red-500">todo o seu lucro?</span>
              </h2>
              <div className="space-y-4">
                {[
                  "Não sabe o lucro real de cada prato",
                  "Preço baseado no 'achismo' ou no concorrente",
                  "Não controla custos fixos e variáveis",
                  "Perde dinheiro com taxas abusivas sem perceber",
                  "Não tem ficha técnica organizada"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
                    <AlertTriangle className="w-5 h-5 text-red-500 shrink-0" />
                    <span className="text-slate-300 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-red-500/10 blur-[100px] rounded-full" />
              <div className="relative rounded-2xl border border-red-500/20 overflow-hidden">
                <img
                  src="/assets/print_despesas.webp"
                  alt="Controle de Despesas"
                  width={300}
                  height={600}
                  className="w-full h-auto grayscale hover:grayscale-0 transition duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#05070a] via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solução Section */}
      <section id="como-funciona" className="py-32 bg-gradient-to-b from-transparent to-cyan-500/5">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-white">Agora imagine ter tudo isso em um único sistema</h2>
            <p className="text-xl text-slate-400">
              O Sistema Raio-X do Delivery mostra exatamente onde está seu lucro — e onde você está perdendo dinheiro.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 bg-slate-900/50 border-white/10 hover:border-cyan-500/50 transition-all group">
              <div className="w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Lucro Real</h3>
              <p className="text-slate-400">Saiba exatamente quanto sobra no bolso após todas as taxas e custos.</p>
            </Card>
            <Card className="p-8 bg-slate-900/50 border-white/10 hover:border-cyan-500/50 transition-all group">
              <div className="w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Zap className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Tudo Automático</h3>
              <p className="text-slate-400">Você só preenche os campos básicos — o sistema faz todos os cálculos complexos.</p>
            </Card>
            <Card className="p-8 bg-slate-900/50 border-white/10 hover:border-cyan-500/50 transition-all group">
              <div className="w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <CheckCircle2 className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Decisão Baseada em Dados</h3>
              <p className="text-slate-400">Pare de chutar preços e comece a gerir seu delivery como uma empresa profissional.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Demonstração Section */}
      <section className="py-32">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative">
              <div className="absolute -inset-4 bg-cyan-500/20 blur-2xl rounded-full" />
              <img
                src="/assets/print_faturamento.webp"
                alt="Faturamento Mensal"
                width={300}
                height={600}
                className="relative rounded-2xl border border-white/10 shadow-2xl"
                loading="lazy"
              />
            </div>
            <div className="order-1 md:order-2 space-y-8">
              <h2 className="text-4xl font-bold text-white">Visualização Clara do Seu Faturamento</h2>
              <p className="text-xl text-slate-400 leading-relaxed">
                Acompanhe o crescimento do seu negócio mês a mês com gráficos automáticos. O sistema integra faturamento, custos fixos e margens de lucro em uma única tela.
              </p>
              <div className="bg-cyan-500/10 border border-cyan-500/20 p-6 rounded-2xl">
                <p className="text-cyan-400 font-bold italic">"Tudo automático. Você só preenche — o sistema faz o resto."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Autoridade Section - Agnaldo */}
      <section className="py-32 bg-slate-900/50 border-y border-white/5">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative group order-2 md:order-1">
              <div className="absolute -inset-1 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-3xl blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
              <img
                src="/assets/agnaldo.webp"
                alt="Agnaldo Sousa - Chef e Criador do Raio-X do Delivery"
                width={300}
                height={300}
                className="relative rounded-3xl shadow-2xl w-full h-auto border border-white/10"
                loading="lazy"
              />
            </div>
            <div className="order-1 md:order-2 space-y-6">
              <div className="inline-block px-4 py-2 bg-cyan-500/10 rounded-full border border-cyan-500/20">
                <span className="text-sm font-semibold text-cyan-400">👨‍🍳 Quem Criou Isso</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white">Agnaldo Sousa</h2>
              <div className="space-y-4 text-slate-300 leading-relaxed">
                <p>
                  Atuo há mais de <strong>10 anos no mercado gastronômico</strong>, unindo experiência prática em operações de alimentação com formação técnica sólida. Sou formado em <strong>Gastronomia pela Universidade Anhanguera</strong>, com pós-graduação em Cozinha Brasileira e especialização pelo SENAC Águas de São Pedro.
                </p>
                <p>
                  Durante <strong>4 anos à frente do Menu Brasileiro</strong>, meu delivery, vivenciei na prática os desafios reais de operação. Percebi um padrão que se repetia: restaurantes com boa comida e boas vendas, mas que ainda assim não conseguiam lucrar.
                </p>
                <p>
                  Isso me direcionou para um foco diferente: <strong>gestão, precificação e estrutura financeira no delivery</strong>. Após analisar diversas operações e revisar inúmeras planilhas financeiras, desenvolvi o <strong>Método Raio-X do Delivery</strong> — capaz de revelar com clareza para onde o dinheiro realmente estava indo.
                </p>
                <p className="text-cyan-400 font-semibold pt-4">
                  Criei o Raio-X do Delivery para compartilhar essa visão com você porque percebi que o maior problema do delivery não é falta de clientes, mas <strong>falta de visão financeira</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* O Que Você Recebe */}
      <section className="py-32 bg-slate-900/50">
        <div className="container">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-bold text-white">Você não está comprando uma planilha</h2>
            <p className="text-xl text-slate-400">Você está adquirindo um sistema completo de controle do seu delivery</p>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              {[
                "Sistema completo em Excel (Premium)",
                "Planilha automatizada de precificação",
                "Estrutura pronta para qualquer nicho",
                "Dashboard de lucro e faturamento",
                "Gestão simplificada de custos fixos"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-[#05070a] border border-white/5">
                  <CheckCircle2 className="w-5 h-5 text-cyan-500" />
                  <span className="text-slate-200">{item}</span>
                </div>
              ))}
            </div>
            <div className="bg-gradient-to-br from-cyan-600 to-blue-700 p-8 rounded-3xl text-white space-y-6 relative overflow-hidden group">
              <Zap className="absolute -top-4 -right-4 w-32 h-32 opacity-10 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold">BÔNUS EXCLUSIVOS</h3>
              <ul className="space-y-4 relative z-10">
                <li className="flex items-center gap-3">
                  <div className="bg-white/20 p-1 rounded-full"><CheckCircle2 className="w-4 h-4" /></div>
                  <span>1 hora de consultoria estratégica individual comigo para ajustar sua planilha e aumentar seu lucro na prática</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="bg-white/20 p-1 rounded-full"><CheckCircle2 className="w-4 h-4" /></div>
                  <span>Suporte especializado via WhatsApp</span>
                </li>
              </ul>
              <div className="pt-4">
                <p className="text-sm opacity-80 italic">* Acesso imediato após confirmação do pagamento.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Oferta Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-cyan-500/5" />
        <div className="container relative z-10">
          <div className="max-w-2xl mx-auto bg-[#0f172a] border border-cyan-500/30 rounded-[40px] px-6 py-8 md:p-12 text-center shadow-[0_0_50px_rgba(0,210,255,0.1)]">
            <h2 className="text-3xl font-bold text-white mb-2">Acesso completo ao</h2>
            <h3 className="text-4xl md:text-5xl font-black text-cyan-400 mb-8 tracking-tighter">SISTEMA RAIO-X DO DELIVERY</h3>

            <div className="space-y-4 mb-10">
              <p className="text-slate-400 line-through text-xl">De R$ 197,00</p>
              <div className="flex items-center justify-center gap-2">
                <span className="text-2xl font-bold text-white">Por apenas</span>
                <span className="text-6xl font-black text-white">R$ 39,97</span>
              </div>
              <p className="text-cyan-400 font-bold tracking-widest uppercase text-sm">Pagamento único. Acesso imediato.</p>
            </div>

            <button
              onClick={handleCTA}
              className="w-auto mx-auto block px-6 bg-cyan-700 hover:bg-cyan-600 text-white text-lg font-black py-4 md:py-6 rounded-3xl glow-blue transition-all"
            >
              QUERO MEU CONTROLE AGORA
            </button>

            {/* Bloco de Consultoria Destacado */}
            <div className="mt-10 p-6 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 border-2 border-cyan-500 rounded-2xl relative overflow-hidden group">
              <div className="absolute -top-1 -right-1 w-20 h-20 bg-cyan-500/30 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />
              <div className="relative z-10 space-y-3">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <TrendingUp className="w-6 h-6 text-cyan-400" />
                  <span className="text-sm font-bold text-cyan-400 uppercase tracking-widest">BONUS EXCLUSIVO</span>
                </div>
                <p className="text-white font-bold text-lg leading-relaxed">
                  Você também recebe <span className="text-cyan-300">1 hora de consultoria estratégica individual comigo</span>.
                </p>
                <p className="text-white font-semibold text-[15px] md:text-lg leading-7 md:leading-relaxed">
                  Vou analisar seu delivery com você, ajustar sua planilha e te mostrar onde está o seu lucro — e onde você está perdendo dinheiro.
                </p>
                <p className="text-xs text-slate-400 italic pt-2">
                  Após a compra, você receberá instruções para agendamento.
                </p>
              </div>
            </div>

            <div className="mt-8 flex items-center justify-center gap-6 text-slate-500">
              <div className="flex items-center gap-1">
                <Lock className="w-4 h-4" />
                <span className="text-xs font-bold">COMPRA SEGURA</span>
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4" />
                <span className="text-xs font-bold">GARANTIA DE 7 DIAS</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 border-t border-white/5">
        <div className="container text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold text-white max-w-4xl mx-auto">
            Ou você controla seus números… <br />
            <span className="text-slate-500">ou continua trabalhando no escuro.</span>
          </h2>
          <p className="text-slate-400 text-xl">Pare de trabalhar para o iFood e comece a ver a cor do seu dinheiro.</p>
          <div className="pt-4">
            <Button
              onClick={handleCTA}
              variant="link"
              className="text-cyan-400 hover:text-cyan-300 text-lg font-bold underline decoration-2 underline-offset-8"
            >
              Sim, eu quero dominar meus números agora →
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 bg-[#05070a]">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <img
              src="/assets/logo.png"
              alt="Raio-X Logo"
              className="h-8 opacity-50"
              loading="lazy"
            />
            <span className="text-slate-500 text-sm font-medium">© 2026 Raio-X do Delivery. Todos os direitos reservados.</span>
          </div>
          <div className="flex gap-8 text-slate-500 text-sm">
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
