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
            <img src="/assets/logo.png" alt="Raio-X Logo" className="h-10 w-auto" loading="lazy" />
            <span className="font-bold text-xl tracking-tight text-white hidden sm:inline-block">
              RAIO-X DO DELIVERY
            </span>
          </div>

          <Button
            onClick={handleCTA}
            className="bg-cyan-600 hover:bg-cyan-500 text-white font-bold px-6 py-2 rounded-full glow-blue"
          >
            ACESSAR AGORA
          </Button>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="container text-center space-y-8">
          
          <h1 className="text-3xl md:text-6xl font-extrabold text-white">
            Você pode estar vendendo muito… <br />
            <span className="text-cyan-400">e mesmo assim tendo prejuízo.</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto">
            Descubra exatamente quanto você ganha em cada pedido.
          </p>

          <Button
            onClick={handleCTA}
            className="bg-cyan-600 hover:bg-cyan-500 text-white text-lg font-bold px-8 py-6 rounded-2xl"
          >
            QUERO VER MEU LUCRO AGORA
          </Button>

          {/* HERO IMAGE */}
          <div className="mt-20">
            <img
              src="/assets/print_menu.png"
              alt="Dashboard Sistema Raio-X"
              loading="eager"
              fetchPriority="high"
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* PROBLEMAS */}
      <section className="py-32">
        <div className="container grid md:grid-cols-2 gap-16 items-center">
          
          <div className="space-y-4">
            {[
              "Não sabe o lucro real",
              "Preço no achismo",
              "Perde dinheiro sem perceber"
            ].map((item, i) => (
              <div key={i} className="flex gap-3">
                <AlertTriangle className="text-red-500" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <img
            src="/assets/print_despesas.png"
            alt="Controle de Despesas"
            loading="lazy"
            className="w-full rounded-2xl"
          />
        </div>
      </section>

      {/* DEMONSTRAÇÃO */}
      <section className="py-32">
        <div className="container grid md:grid-cols-2 gap-12 items-center">
          
          <img
            src="/assets/print_faturamento.png"
            alt="Faturamento Mensal"
            loading="lazy"
            className="rounded-2xl shadow-2xl"
          />

          <div>
            <h2 className="text-4xl font-bold text-white">
              Veja seu faturamento claro
            </h2>
          </div>
        </div>
      </section>

      {/* AUTOR */}
      <section className="py-32">
        <div className="container grid md:grid-cols-2 gap-16 items-center">
          
          <img
            src="/assets/agnaldo.png"
            alt="Agnaldo Sousa"
            loading="lazy"
            className="rounded-3xl shadow-2xl"
          />

          <div>
            <h2 className="text-4xl font-bold text-white">
              Agnaldo Sousa
            </h2>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-24 text-center">
        <Button
          onClick={handleCTA}
          className="bg-cyan-600 hover:bg-cyan-500 text-white text-lg font-bold px-10 py-6 rounded-2xl"
        >
          QUERO MEU CONTROLE AGORA
        </Button>
      </section>

    </div>
  );
}
