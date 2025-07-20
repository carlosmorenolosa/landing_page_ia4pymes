
import { FaEnvelope } from 'react-icons/fa';

const Contact = () => (
  <section id="contact" className="py-20 bg-gray-800">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-4xl font-bold text-white mb-4">Contacta con Nosotros</h2>
      <p className="text-lg text-gray-300 mb-8">¿Listo para empezar? Envíanos un mensaje.</p>
      <a href="mailto:info@ia4pymes.com" className="inline-flex items-center bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full transition-transform transform hover:scale-105">
        <FaEnvelope className="mr-3" /> info@ia4pymes.com
      </a>
    </div>
  </section>
);

export default Contact;
