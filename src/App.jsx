import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function VelvoxPage() {
  useEffect(() => {
    const scrollToSection = (id) => {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    };

    const links = document.querySelectorAll(".nav-link");
    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        scrollToSection(link.getAttribute("data-target"));
      });
    });
  }, []);

  return (
    <div className="font-sans text-gray-900">
      <header className="fixed w-full bg-white shadow z-50">
        <nav className="flex justify-between items-center px-6 py-4">
          <h1 className="text-2xl font-bold text-purple-700">VELVOX</h1>
          <div className="space-x-4">
            <a href="#" className="nav-link" data-target="home">Home</a>
            <a href="#" className="nav-link" data-target="ferramentas">Ferramentas</a>
            <a href="#" className="nav-link" data-target="planos">Planos</a>
            <a href="#" className="nav-link" data-target="materiais">Material Grátis</a>
            <Button variant="outline">Login</Button>
            <Button className="bg-purple-700 text-white">Cadastro</Button>
          </div>
        </nav>
      </header>

      <main className="pt-24 space-y-32">
        <section id="home" className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
          <div className="max-w-2xl text-center space-y-6">
            <h2 className="text-4xl font-bold text-purple-700">Controle seus atendimentos no WhatsApp Business</h2>
            <p className="text-lg">
              Cadastre atendentes, defina setores, monitore relatórios e acompanhe seus atendimentos em tempo real com mensagens ilimitadas.
            </p>
            <Button className="bg-teal-500 text-white text-lg px-6 py-3 rounded-full">
              Teste grátis por 7 dias
            </Button>
          </div>
        </section>

        <section id="ferramentas" className="min-h-screen px-6 py-20 bg-white">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-semibold mb-4 text-purple-700">Ferramentas</h3>
            <ul className="list-disc ml-6 space-y-2 text-gray-800">
              <li>Dashboard em tempo real</li>
              <li>Setores e múltiplos atendentes</li>
              <li>Respostas automáticas e tags</li>
              <li>Relatórios de atendimento</li>
              <li>Mensagens ilimitadas</li>
            </ul>
          </div>
        </section>

        <section id="planos" className="min-h-screen px-6 py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-semibold mb-6 text-purple-700">Planos</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-white shadow rounded-xl">
                <h4 className="text-xl font-bold mb-2">Start</h4>
                <p className="mb-4">Ideal para pequenos negócios</p>
                <p className="text-2xl font-bold">R$ 49/mês</p>
              </div>
              <div className="p-6 bg-white shadow rounded-xl border-2 border-teal-500">
                <h4 className="text-xl font-bold mb-2">Pro</h4>
                <p className="mb-4">Para equipes que crescem</p>
                <p className="text-2xl font-bold">R$ 99/mês</p>
              </div>
              <div className="p-6 bg-white shadow rounded-xl">
                <h4 className="text-xl font-bold mb-2">Enterprise</h4>
                <p className="mb-4">Recursos avançados e suporte</p>
                <p className="text-2xl font-bold">R$ 199/mês</p>
              </div>
            </div>
          </div>
        </section>

        <section id="materiais" className="min-h-screen px-6 py-20 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-semibold mb-4 text-purple-700">Material Grátis</h3>
            <p className="text-gray-600">Em breve, disponibilizaremos e-books, templates e ferramentas gratuitas para turbinar seu atendimento.</p>
          </div>
        </section>
      </main>

      <footer className="bg-gray-100 py-6 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} Velvox. Todos os direitos reservados.
      </footer>
    </div>
  );
}
