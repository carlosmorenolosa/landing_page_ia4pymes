
import { FaBrain, FaUsers, FaChartLine } from 'react-icons/fa';

const Services = () => (
  <section id="services" className="py-20">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center text-white mb-12">Nuestros Servicios</h2>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg text-center hover:bg-gray-700 transition-colors">
          <FaBrain className="text-5xl text-blue-400 mx-auto mb-6" />
          <h3 className="text-2xl font-bold text-white mb-4">Análisis de Datos</h3>
          <p className="text-gray-300">Extraemos insights valiosos de tus datos para la toma de decisiones.</p>
        </div>
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg text-center hover:bg-gray-700 transition-colors">
          <FaUsers className="text-5xl text-blue-400 mx-auto mb-6" />
          <h3 className="text-2xl font-bold text-white mb-4">Modelos Predictivos</h3>
          <p className="text-gray-300">Anticipamos tendencias y comportamientos con modelos de machine learning.</p>
        </div>
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg text-center hover:bg-gray-700 transition-colors">
          <FaChartLine className="text-5xl text-blue-400 mx-auto mb-6" />
          <h3 className="text-2xl font-bold text-white mb-4">Optimización de Procesos</h3>
          <p className="text-gray-300">Automatizamos y optimizamos tus operaciones con IA.</p>
        </div>
      </div>
    </div>
  </section>
);

export default Services;
