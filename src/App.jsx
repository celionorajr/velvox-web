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
                alt="Velvox" 
                className="h-10 w-auto"
              />
            </a>

            {/* Menu Desktop */}
            <div className="hidden md:flex items-center space-x-6">
              <NavLink target="home">Home</NavLink>
              <NavLink target="ferramentas">Ferramentas</NavLink>
              <NavLink target="planos">Planos</NavLink>
              <NavLink target="materiais">Material Grátis</NavLink>
              <Button 
                variant="outline" 
                onClick={() => window.location.href = externalUrls.login}
              >
                Login
              </Button>
              <Button 
                className="bg-primary text-white hover:bg-primary-dark"
                onClick={() => window.location.href = externalUrls.cadastro}
              >
                Cadastro
              </Button>
            </div>

            {/* Menu Mobile */}
            <button 
              className="md:hidden text-[#6C30BF]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              ☰
            </button>
          </nav>

          {/* Menu Mobile Expandido */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 space-y-3">
              <MobileNavLink target="home">Home</MobileNavLink>
              <MobileNavLink target="ferramentas">Ferramentas</MobileNavLink>
              <MobileNavLink target="planos">Planos</MobileNavLink>
              <MobileNavLink target="materiais">Material Grátis</MobileNavLink>
              <div className="flex space-x-4 pt-2">
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => window.location.href = externalUrls.login}
                >
                  Login
                </Button>
                <Button 
                  className="w-full bg-primary text-white"
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
              className="text-lg px-8 py-4 rounded-full shadow-lg"
              onClick={() => window.location.href = externalUrls.testeGratis}
            >
              Teste grátis por 7 dias
            </Button>
          </div>
        </section>

        {/* Seção Ferramentas */}
        <section id="ferramentas" className="min-h-screen px-6 py-20 bg-white">
          {/* ... (mantenha o conteúdo existente) ... */}
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
                features={["1 Atendente", "Setor único", "100 mensagens/dia"]}
              />
              <PricingCard 
                title="Pro" 
                price="99" 
                description="Para equipes que crescem"
                features={["3 Atendentes", "3 Setores", "Mensagens ilimitadas"]}
                featured
              />
              <PricingCard 
                title="Enterprise" 
                price="199" 
                description="Recursos avançados e suporte"
                features={["Atendentes ilimitados", "Setores ilimitados", "Suporte 24/7"]}
              />
            </div>
          </div>
        </section>

        {/* Seção Material Grátis */}
        <section id="materiais" className="min-h-screen px-6 py-20 bg-white">
          {/* ... (mantenha o conteúdo existente) ... */}
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#0D0D0D] text-white py-12">
        {/* ... (mantenha o conteúdo existente) ... */}
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
    <div className={`p-8 rounded-xl shadow-md ${featured ? "border-2 border-[#05F2DB]" : "bg-white"}`}>
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
        className={`w-full mt-8 ${featured ? "bg-[#6C30BF] text-white" : "bg-gray-100 text-[#5F2DA6]"}`}
        onClick={() => window.location.href = `${externalUrls.planos}?plano=${title.toLowerCase()}`}
      >
        Assinar
      </Button>
    </div>
  );
}