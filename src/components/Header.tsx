
import Link from 'next/link';

const Header = () => (
  <header className="fixed top-0 left-0 w-full bg-black bg-opacity-50 backdrop-blur-md z-10">
    <div className="container mx-auto px-4 py-4 flex justify-between items-center">
      <Link href="/" className="text-2xl font-bold text-white">IA4PYMES</Link>
      <nav>
        <ul className="flex space-x-4">
          <li><Link href="#about" className="hover:text-blue-400 transition-colors">Sobre Nosotros</Link></li>
          <li><Link href="#services" className="hover:text-blue-400 transition-colors">Servicios</Link></li>
          <li><Link href="#contact" className="hover:text-blue-400 transition-colors">Contacto</Link></li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
