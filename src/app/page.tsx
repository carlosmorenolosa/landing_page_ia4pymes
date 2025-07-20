import { FaBrain, FaUsers, FaChartLine, FaEnvelope } from 'react-icons/fa';

const HeroSection = () => (
  <section className="bg-gray-900 text-white text-center py-20">
    <h1 className="text-5xl font-bold mb-4">IA4PYMES</h1>
    <p className="text-xl mb-8">Soluciones de Inteligencia Artificial a medida para tu empresa</p>
    <a href="#contact" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Contacta con nosotros
    </a>
  </section>
);

const AboutSection = () => (
  <section id="about" className="py-20">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12">Sobre Nosotros</h2>
      <div className="flex flex-wrap justify-center gap-10">
        <div className="text-center">
          <img src="https://i.pravatar.cc/150?u=alejandro" alt="Alejandro Picallo" className="rounded-full mx-auto mb-4" />
          <h3 className="text-xl font-bold">Alejandro Picallo</h3>
        </div>
        <div className="text-center">
          <img src="https://i.pravatar.cc/150?u=carlos" alt="Carlos Moreno" className="rounded-full mx-auto mb-4" />
          <h3 className="text-xl font-bold">Carlos Moreno</h3>
        </div>
      </div>
    </div>
  </section>
);

const ServicesSection = () => (
  <section id="services" className="bg-gray-100 py-20">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12">Nuestros Servicios</h2>
      <div className="grid md:grid-cols-3 gap-8 text-center">
        <div>
          <FaBrain className="text-4xl text-blue-500 mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2">Análisis de Datos</h3>
          <p>Extraemos insights valiosos de tus datos para la toma de decisiones.</p>
        </div>
        <div>
          <FaUsers className="text-4xl text-blue-500 mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2">Modelos Predictivos</h3>
          <p>Anticipamos tendencias y comportamientos con modelos de machine learning.</p>
        </div>
        <div>
          <FaChartLine className="text-4xl text-blue-500 mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2">Optimización de Procesos</h3>
          <p>Automatizamos y optimizamos tus operaciones con IA.</p>
        </div>
      </div>
    </div>
  </section>
);

const ContactSection = () => (
  <section id="contact" className="py-20">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl font-bold mb-4">Contacta</h2>
      <p className="mb-8">¿Listo para llevar tu empresa al siguiente nivel con IA?</p>
      <a href="mailto:info@ia4pymes.com" className="text-xl text-blue-500 hover:underline">
        <FaEnvelope className="inline-block mr-2" /> info@ia4pymes.com
      </a>
    </div>
  </section>
);

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ContactSection />
    </main>
  );
}