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
            <img src="/assets/logo.png" alt="Raio-X Logo" className="h-10 w-auto" loading="lazy"/>
            <span className="font-bold text-xl tracking-tight text-white hidden sm:inline-block">RAIO-X DO DELIVERY</span>
          </div>
          <Button onClick={handleCTA} className="bg-cyan-700 hover:bg-cyan-600 text-white font-bold px-6 py-2 rounded-full">
            ACESSAR AGORA
          </Button>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-20 pb-32 text-center">
        <img
          src="/assets/print_menu.webp"
          width="300"
          height="600"
          className="mx-auto"
        />
      </section>

      {/* 🔥 PROBLEMA (CORRIGIDO AQUI) */}
      <section className="py-32">
        <div className="container grid md:grid-cols-2 gap-16">

          <div className="space-y-4">
            {[
              "Não sabe o lucro real",
              "Preço no achismo",
              "Não controla custos",
              "Perde dinheiro sem ver",
              "Sem ficha técnica"
            ].map((item, i) => (
              <div key={i} className="flex gap-3">
                <AlertTriangle className="text-red-500"/>
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* ✅ CORRETO */}
          <div>
            <img
              src="/assets/print_despesas.webp"
              width="300"
              height="600"
              alt="Controle de Despesas"
            />
          </div>

        </div>
      </section>

    </div>
  );
}
