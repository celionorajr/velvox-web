import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

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
    <div className="font-sans bg-gradient-to-b from-[#f9f9f9] to-[#e6f2f2] min-h-screen">
      <header className="fixed w-full bg-white shadow-sm z-50">
        <div className="container mx-auto px-4 sm:px-6">
          <nav className="flex justify-between items-center py-4">
            <a href="#home" className="flex items-center space-x-2">
              {/* Somente imagem OU texto - escolha uma opção */}
              <img 
                src="/logo.png" 
                alt="Velvox" 
                className="h-8 w-auto"
              />
            </a>

            <div className="hidden md:flex items-center space-x-6">
              <NavLink target="home">Home</NavLink>
              <NavLink target="ferramentas">Ferramentas</NavLink>
              <NavLink target="planos">Planos</NavLink>
              <NavLink target="materiais">Material Grátis</NavLink>
              <Button variant="outline">Login</Button>
              <Button className="bg-gradient-to-r from-[#6C30BF] to-[#41BFBF] text-white hover:from-[#5F2DA6] hover:to-[#05F2DB]">
                Cadastro
              </Button>
            </div>

            <button 
              className="md:hidden text-[#6C30BF] focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </nav>

          {mobileMenuOpen && (
            <div className="md:hidden pb-4 space-y-3">
              <MobileNavLink target="home">Home</MobileNavLink>
              <MobileNavLink target="ferramentas">Ferramentas</MobileNavLink>
              <MobileNavLink target="planos">Planos</MobileNavLink>
              <MobileNavLink target="materiais">Material Grátis</MobileNavLink>
              <div className="flex space-x-4 pt-2">
                <Button variant="outline" className="w-full">Login</Button>
                <Button className="w-full bg-gradient-to-r from-[#6C30BF] to-[#41BFBF] text-white">
                  Cadastro
                </Button>
              </div>
            </div>
          )}
        </div>
      </header>

      <main className="pt-24 pb-16">
        <Section id="home" gradient="from-[#6C30BF] to-[#41BFBF]">
          <div className="max-w-2xl text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Controle seus atendimentos no WhatsApp Business
            </h1>
            <p className="text-lg text-purple-100">
              Cadastre atendentes, defina setores, monitore relatórios e acompanhe seus atendimentos em tempo real com mensagens ilimitadas.
            </p>
            <Button className="bg-white text-[#5F2DA6] hover:bg-gray-100 text-lg px-8 py-4 rounded-full shadow-lg border border-[#5F2DA6]">
              Teste grátis por 7 dias
            </Button>
          </div>
        </Section>

        <Section id="ferramentas" bg="bg-white">
          <div className="max-w-4xl mx-auto">
            <SectionTitle>Ferramentas</SectionTitle>
            <div className="grid md:grid-cols-2 gap-8 mt-8">
              {[
                "Dashboard em tempo real",
                "Setores e múltiplos atendentes",
                "Respostas automáticas e tags",
                "Relatórios de atendimento",
                "Mensagens ilimitadas"
              ].map((item, index) => (
                <FeatureCard key={index} index={index}>
                  {item}
                </FeatureCard>
              ))}
            </div>
          </div>
        </Section>

        <Section id="planos" bg="bg-gray-50">
          <div className="max-w-6xl mx-auto text-center">
            <SectionTitle>Planos</SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
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
        </Section>

        <Section id="materiais" bg="bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <SectionTitle>Material Grátis</SectionTitle>
            <p className="text-gray-600 mt-4">
              Em breve disponibilizaremos materiais gratuitos para melhorar seu atendimento.
            </p>
          </div>
        </Section>
      </main>

      <footer className="bg-[#0D0D0D] text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <div className="flex justify-center mb-6">
            <img src="/logo.png" alt="Velvox" className="h-10 w-auto"/>
          </div>
          <p className="text-gray-400">
            © {new Date().getFullYear()} Velvox. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}

// (Manter os componentes auxiliares NavLink, MobileNavLink, Section, etc. sem alterações)