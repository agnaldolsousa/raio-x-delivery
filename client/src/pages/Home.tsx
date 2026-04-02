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
            <span className="font-bold text-xl tracking-tight text-white hidden sm:inline-block">RAIO-X DO DELIVERY</span>
          </div>

          <Button
            onClick={handleCTA}
            className="bg-cyan-700 hover:bg-cyan-600 text-white font-bold px-6 py-2 rounded-full glow-blue transition-all duration-300"
          >
            ACESSAR AGORA
          </Button>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">

            <h1 className="text-3xl md:text-6xl font-extrabold text-white">
              Você pode estar vendendo muito… <br />
              <span className="text-cyan-400">e mesmo assim tendo prejuízo.</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto">
              Descubra exatamente quanto você ganha em cada pedido.
            </p>

            <Button
              onClick={handleCTA}
              className="bg-cyan-700 hover:bg-cyan-600 text-white text-lg font-bold px-8 py-6 rounded-2xl"
            >
              QUERO VER MEU LUCRO AGORA
            </Button>

          </div>
        </div>
      </section>

      {/* Oferta */}
      <section className="py-32">
        <div className="container text-center">

          <button
            onClick={handleCTA}
            className="px-6 bg-cyan-700 hover:bg-cyan-600 text-white text-lg font-black py-4 rounded-3xl"
          >
            QUERO MEU CONTROLE AGORA
          </button>

        </div>
      </section>

    </div>
  );
}
