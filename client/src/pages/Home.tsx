import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, TrendingUp, Lock, Zap, AlertTriangle, ArrowRight, MousePointer2 } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [showCheckout, setShowCheckout] = useState(false);

  const handleCTA = () => {
    window.open("https://pay.kiwify.com.br/ZGDv54o", "_blank");
  };

  return (
    <div className="min-h-screen bg-[#05070a] text-slate-100 selection:bg-cyan-500/30">
      
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-[#05070a]/80 backdrop-blur-md border-b border-white/5">
        <div className="container flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <img src="/assets/logo.png" alt="Raio-X Logo" className="h-10 w-auto" />
            <span className="font-bold text-xl tracking-tight text-white hidden sm:inline-block">
              RAIO-X DO DELIVERY
            </span>
          </div>
          <Button 
            onClick={handleCTA}
            className="bg-cyan-600 hover:bg-cyan-500 text-white font-bold px-6 py-2 rounded-full"
          >
            ACESSAR AGORA
          </Button>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-20 pb-32 text-center container">
        <h1 className="text-4xl md:text-6xl font-bold">
          Você pode estar vendendo muito… <br />
          <span className="text-cyan-400">
            e mesmo assim tendo prejuízo.
          </span>
        </h1>

        <p className="mt-6 text-slate-400 max-w-xl mx-auto">
          Descubra exatamente quanto você ganha em cada pedido com um sistema automático.
        </p>

        <Button
          onClick={handleCTA}
          className="mt-10 bg-cyan-600 hover:bg-cyan-500 text-white text-lg px-10 py-6 rounded-2xl"
        >
          QUERO VER MEU LUCRO
        </Button>
      </section>

      {/* O Que Você Recebe */}
      <section className="py-32 bg-slate-900/50">
        <div className="container text-center mb-16">
          <h2 className="text-4xl font-bold text-white">
            Você não está comprando uma planilha
          </h2>
          <p className="text-xl text-slate-400">
            Você está adquirindo um sistema completo
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">

          <div className="space-y-4">
            {[
              "Sistema completo em Excel (Premium)",
              "Planilha automatizada de precificação",
              "Dashboard de lucro e faturamento",
              "Gestão de custos fixos"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-4 bg-[#05070a] rounded-xl">
                <CheckCircle2 className="text-cyan-500 w-5 h-5" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* BONUS */}
          <div className="bg-gradient-to-br from-cyan-600 to-blue-700 p-8 rounded-3xl text-white">
            <h3 className="text-2xl font-bold mb-6">BÔNUS EXCLUSIVOS</h3>

            <ul className="space-y-4">

              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4" />
                <span>
                  Sessão individual para configurar sua planilha corretamente
                </span>
              </li>

              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4" />
                <span>
                  Suporte via WhatsApp
                </span>
              </li>

            </ul>
          </div>

        </div>
      </section>

    </div>
  );
}
