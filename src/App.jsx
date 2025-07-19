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
      {/* Header Responsivo */}
      <header className="fixed w-full bg-white shadow-sm z-50">
        <div className="container mx-auto px-4 sm:px-6">
          <nav className="flex justify-between items-center py-4">
            {/* Logo clicável */}
            <a href="#home" className="flex items-center space-x-2">
              <img 
                src="/logo.png" 
                alt="Velvox" 
                className="h-8 w-auto"
              />
              <span className="text-2xl font-bold bg-gradient-to-r from-[#6C30BF] to-[#05F2DB] bg-clip-text text-transparent">
                VELVOX
              </span>
            </a>

            {/* Menu Desktop */}
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

            {/* Botão Mobile */}
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

          {/* Menu Mobile */}
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
            <Button className="bg-white text-[#5F2DA6] hover:bg-gray-100 text-lg px-8 py-4 rounded-full shadow-lg">
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
                "Mensagens ilimitadas",
                "Integração com CRM"
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
              Baixe nossos recursos gratuitos para melhorar seu atendimento:
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <ResourceCard 
                title="Guia de Atendimento" 
                description="Melhores práticas para WhatsApp Business"
              />
              <ResourceCard 
                title="Modelos de Mensagem" 
                description="Respostas prontas para agilizar seu trabalho"
              />
            </div>
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

// Componentes auxiliares
function NavLink({ children, target }) {
  return (
    <a 
      href={`#${target}`} 
      className="nav-link px-3 py-2 rounded-lg text-gray-700 hover:text-[#6C30BF] transition-colors font-medium"
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
      className="nav-link block px-4 py-3 rounded-lg text-gray-700 hover:bg-[#f0e6ff] transition-colors font-medium"
      data-target={target}
    >
      {children}
    </a>
  );
}

function Section({ id, children, bg, gradient }) {
  const classes = [
    "min-h-screen px-6 py-20",
    bg || "",
    gradient ? `bg-gradient-to-r ${gradient}` : ""
  ].filter(Boolean).join(" ");

  return (
    <section id={id} className={classes}>
      {children}
    </section>
  );
}

function SectionTitle({ children }) {
  return (
    <h2 className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-[#6C30BF] to-[#05F2DB] bg-clip-text text-transparent">
      {children}
    </h2>
  );
}

function FeatureCard({ children, index }) {
  const colors = [
    "from-[#6C30BF] to-[#9b59d1]",
    "from-[#41BFBF] to-[#05F2DB]",
    "from-[#5F2DA6] to-[#8e44ad]"
  ];
  const color = colors[index % colors.length];
  
  return (
    <div className="flex items-start space-x-4 bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
      <div className={`bg-gradient-to-r ${color} rounded-lg p-2`}>
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <p className="text-gray-700 font-medium">{children}</p>
    </div>
  );
}

function PricingCard({ title, price, description, features, featured = false }) {
  return (
    <div className={`p-8 rounded-xl shadow-md ${featured ? "border-2 border-[#05F2DB] transform md:-translate-y-4" : "bg-white"}`}>
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
      <Button className={`w-full mt-8 ${featured ? "bg-gradient-to-r from-[#6C30BF] to-[#41BFBF] text-white" : "bg-gray-100 text-[#5F2DA6] hover:bg-gray-200"}`}>
        Assinar
      </Button>
    </div>
  );
}

function ResourceCard({ title, description }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-200">
      <h3 className="text-xl font-bold text-[#5F2DA6]">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
      <Button variant="outline" className="mt-4 w-full border-[#41BFBF] text-[#41BFBF] hover:bg-[#e6f7f7]">
        Baixar Agora
      </Button>
    </div>
  );
}