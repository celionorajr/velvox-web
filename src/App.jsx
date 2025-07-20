import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { externalUrls } from './config';

export default function VelvoxPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const scrollToSection = (id) => {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
        setMobileMenuOpen(false);
      }
    };

    const links = document.querySelectorAll(".nav-link");
    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        scrollToSection(link.getAttribute("data-target"));
      });
    });

    return () => links.forEach(link => link.removeEventListener("click"));
  }, []);

  return (
    <div className="font-sans min-h-screen bg-gray-50">
      {/* Header */}
      <header className="fixed w-full bg-white shadow-sm z-50">
        <div className="container mx-auto px-4 sm:px-6">
          <nav className="flex justify-between items-center py-4">
            <a href="#home" className="flex items-center">
              <img 
                src="/logo.png" 
                alt="Velvox - Gestão de WhatsApp Business" 
                className="h-10 w-auto"
              />
            </a>

            {/* Menu Desktop */}
            <div className="hidden md:flex items-center space-x-6">
              <NavLink target="home">Home</NavLink>
              <NavLink target="ferramentas">Ferramentas</NavLink>
              <NavLink target="planos">Planos</NavLink>
              <Button 
                variant="outline" 
                onClick={() => window.location.href = externalUrls.login}
              >
                Login
              </Button>
              <Button 
                className="bg-[#6C30BF] text-white hover:bg-[#5F2DA6]"
                onClick={() => window.location.href = externalUrls.cadastro}
              >
                Cadastro
              </Button>
            </div>

            {/* Menu Mobile */}
            <button 
              className="md:hidden text-[#6C30BF]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
            >
              ☰
            </button>
          </nav>

          {/* Menu Mobile Expandido */}
          {mobileMenuOpen && (
            <div id="mobile-menu" className="md:hidden pb-4 space-y-3">
              <MobileNavLink target="home">Home</MobileNavLink>
              <MobileNavLink target="ferramentas">Ferramentas</MobileNavLink>
              <MobileNavLink target="planos">Planos</MobileNavLink>
              <div className="flex space-x-4 pt-2">
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => window.location.href = externalUrls.login}
                >
                  Login
                </Button>
                <Button 
                  className="w-full bg-[#6C30BF] text-white"
                  onClick={() => window.location.href = externalUrls.cadastro}
                >
                  Cadastro
                </Button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Conteúdo Principal */}
      <main className="pt-24 pb-16">
        {/* Seção Home */}
        <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#6C30BF] to-[#41BFBF] px-6 py-20">
          <div className="max-w-2xl text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Controle seus atendimentos no WhatsApp Business
            </h1>
            <p className="text-lg text-purple-100">
              Cadastre atendentes, defina setores, monitore relatórios e acompanhe seus atendimentos em tempo real.
            </p>
            <Button 
              variant="cta"
              className="text-lg px-8 py-4 rounded-full shadow-lg bg-[#6C30BF] hover:bg-[#5F2DA6] text-white"
              onClick={() => window.location.href = externalUrls.testeGratis}
            >
              Teste grátis por 7 dias
            </Button>
          </div>
        </section>

        {/* Seção Ferramentas */}
        <section id="ferramentas" className="min-h-screen px-6 py-20 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#6C30BF] to-[#05F2DB] mb-8">
              Ferramentas
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                "Dashboard em tempo real",
                "Setores e múltiplos atendentes",
                "Respostas automáticas e tags",
                "Relatórios de atendimento",
                "Mensagens ilimitadas",
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-4 bg-white p-6 rounded-xl shadow-sm">
                  <div className="bg-[#6C30BF] rounded-lg p-2">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-700 font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Seção Planos */}
        <section id="planos" className="min-h-screen px-6 py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#6C30BF] to-[#05F2DB] mb-8">
              Planos
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <PricingCard 
                title="Start" 
                price="49" 
                description="Ideal para pequenos negócios"
                features={["1 Atendente", "Setor único", "100 mensagens/dia", "Dashboard básico"]}
              />
              <PricingCard 
                title="Pro" 
                price="99" 
                description="Para equipes que crescem"
                features={["3 Atendentes", "3 Setores", "Mensagens ilimitadas", "Relatórios completos"]}
                featured
              />
              <PricingCard 
                title="Enterprise" 
                price="199" 
                description="Recursos avançados e suporte"
                features={["Atendentes ilimitados", "Setores ilimitados", "Suporte 24/7", "API de integração"]}
              />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#0D0D0D] text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <img src="/logo.png" alt="Velvox" className="h-10 w-auto mb-4"/>
              <p className="text-gray-400">
                Solução completa para gestão de WhatsApp Business.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Links Rápidos</h3>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-400 hover:text-white">Home</a></li>
                <li><a href="#ferramentas" className="text-gray-400 hover:text-white">Ferramentas</a></li>
                <li><a href="#planos" className="text-gray-400 hover:text-white">Planos</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Contato</h3>
              <ul className="space-y-2 text-gray-400">
                <li>contato@velvox.com.br</li>
                <li>(11) 99999-9999</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Redes Sociais</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">Instagram</a>
                <a href="#" className="text-gray-400 hover:text-white">LinkedIn</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            © {new Date().getFullYear()} Velvox. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}

// Componentes auxiliares
function NavLink({ children, target }) {
  return (
    <a 
      href={`#${target}`} 
      className="nav-link px-3 py-2 rounded-lg text-gray-700 hover:text-[#6C30BF] font-medium"
      data-target={target}
    >
      {children}
    </a>
  );
}

function MobileNavLink({ children, target }) {
  return (
    <a 
      href={`#${target}`} 
      className="nav-link block px-4 py-3 rounded-lg text-gray-700 hover:bg-[#f0e6ff] font-medium"
      data-target={target}
    >
      {children}
    </a>
  );
}

function PricingCard({ title, price, description, features, featured = false }) {
  return (
    <div className={`p-8 rounded-xl shadow-md ${featured ? "border-2 border-[#05F2DB] transform scale-105" : "bg-white"}`}>
      <h3 className="text-2xl font-bold text-[#5F2DA6]">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
      <p className="text-3xl font-bold mt-4 text-[#6C30BF]">R$ {price}/mês</p>
      <ul className="mt-6 space-y-3">
        {features.map((feature, i) => (
          <li key={i} className="flex items-center space-x-2 text-gray-700">
            <svg className="w-5 h-5 text-[#41BFBF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Button
        className={`w-full mt-8 ${featured ? "bg-[#6C30BF] text-white hover:bg-[#5F2DA6]" : "bg-gray-100 text-[#5F2DA6] hover:bg-gray-200"}`}
        onClick={() => window.location.href = `${externalUrls.planos}?plano=${title.toLowerCase()}`}
      >
        Assinar
      </Button>
    </div>
  );
}