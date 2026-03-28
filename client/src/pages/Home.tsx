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
            <img src="/assets/logo.png" alt="Raio-X Logo" className="h-10 w-auto" />
            <span className="font-bold text-xl tracking-tight text-white hidden sm:inline-block">RAIO-X DO DELIVERY</span>
          </div>
          <div className="flex items-center gap-4">
            <Button 
              onClick={handleCTA}
              className="bg-cyan-600 hover:bg-cyan-500 text-white font-bold px-6 py-2 rounded-full glow-blue transition-all duration-300"
            >
              ACESSAR AGORA
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium animate-pulse">
              <Zap className="w-4 h-4" />
              SISTEMA COMPLETO DE CONTROLE FINANCEIRO
            </div>
            
            <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
              Você pode estar vendendo muito… <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                e mesmo assim tendo prejuízo.
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
              O problema não é falta de venda. É falta de controle. Descubra exatamente quanto você ganha em cada pedido com um sistema que calcula tudo automaticamente.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
              <Button
                onClick={handleCTA}
                className="w-full sm:w-auto bg-cyan-600 hover:bg-cyan-500 text-white text-lg font-bold px-10 py-8 rounded-2xl glow-blue transition-all duration-300 transform hover:scale-105"
              >
                QUERO VER MEU LUCRO AGORA
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <a href="#como-funciona" className="text-slate-400 hover:text-white font-medium transition-colors flex items-center gap-2">
                Ver como funciona
                <MousePointer2 className="w-4 h-4" />
              </a>
            </div>

            <div className="mt-20 relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative bg-[#0f172a] rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
                <img 
                  src="/assets/print_menu.png" 
                  alt="Dashboard Sistema Raio-X" 
                  className="w-full h-auto opacity-90 group-hover:opacity-100 transition duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* restante igual... */}

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
              <h3 className="text-2xl font-bold">BÔNUS EXCLUSIVOS</h3>
              <ul className="space-y-4 relative z-10">
                <li className="flex items-center gap-3">
                  <div className="bg-white/20 p-1 rounded-full"><CheckCircle2 className="w-4 h-4" /></div>
                  <span>Sessão individual para configurar sua planilha corretamente</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="bg-white/20 p-1 rounded-full"><CheckCircle2 className="w-4 h-4" /></div>
                  <span>Suporte especializado via WhatsApp</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
