// (arquivo completo já ajustado)

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

      {/* resto do código igual */}

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
                  <div className="bg-white/20 p-1 rounded-full">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span>
                    1 hora de consultoria estratégica individual comigo para ajustar sua planilha e aumentar seu lucro na prática
                  </span>
                </li>

                <li className="flex items-center gap-3">
                  <div className="bg-white/20 p-1 rounded-full">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span>Suporte especializado via WhatsApp</span>
                </li>
              </ul>

              <div className="pt-4">
                <p className="text-sm opacity-80 italic">
                  * Acesso imediato após confirmação do pagamento.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLOCO CONSULTORIA (AJUSTADO) */}
      <div className="mt-10 p-6 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 border-2 border-cyan-500 rounded-2xl relative overflow-hidden group">
        <div className="relative z-10 space-y-3">
          <p className="text-white font-bold text-lg leading-relaxed">
            Você também recebe <span className="text-cyan-300">1 hora de consultoria estratégica individual comigo</span>, onde eu vou analisar seu delivery, ajustar sua planilha com você e te mostrar exatamente onde está o seu lucro — e onde você está perdendo dinheiro.
          </p>
        </div>
      </div>

      {/* resto do código igual */}
    </div>
  );
}
