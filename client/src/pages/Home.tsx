import { Button } from "@/components/ui/button";

export default function Home() {
  const handleCTA = () => {
    window.open("https://pay.kiwify.com.br/ZGDv54o", "_blank");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-4 text-center">
      
      <h1 className="text-2xl md:text-4xl font-bold mb-4">
        Seu delivery até fatura… <br />
        e mesmo assim o dinheiro some no fim do mês.
      </h1>

      <p className="text-sm md:text-lg text-gray-300 mb-6">
        Você não sabe onde está perdendo dinheiro — e isso está te impedindo de crescer.
      </p>

      <Button
        onClick={handleCTA}
        className="w-full max-w-[320px] mx-auto bg-cyan-700 hover:bg-cyan-600 text-white text-sm md:text-lg font-bold px-4 py-3 rounded-2xl glow-blue transition-all duration-300 whitespace-normal text-center leading-tight"
      >
        <span className="block md:hidden">
          PARAR DE PERDER DINHEIRO
        </span>
        <span className="hidden md:block">
          QUERO DESCOBRIR ONDE ESTOU PERDENDO DINHEIRO
        </span>
      </Button>

      <p className="text-xs text-gray-400 mt-3">
        Veja em menos de 2 minutos como funciona
      </p>

    </div>
  );
}
