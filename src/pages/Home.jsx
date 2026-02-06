import {
  FaFish,
  FaWhatsapp,
  FaInstagram,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Home() {
  return (
    <div
      className="relative flex flex-col h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/fundopisc.jpg')" }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/40 to-green-900/40"></div>

      <div className="relative z-10 flex flex-col items-center justify-center flex-grow p-6">
        <img
          src="/logopisc.png"
          alt="Logo Piscicultura Magrão Alevinos"
          className="w-28 h-28 mb-4 rounded-md border-2 border-gray shadow-lg"
        />

        <h1 className="font-title text-3xl text-green-200 mb-6 text-center tracking-wide drop-shadow-md">
          Piscicultura Magrão Alevinos
        </h1>

        <p className="font-subtitle text-blue-950 font-semibold mb-8 text-center">
          Produtividade e Qualidade para a sua Piscicultura!
        </p>
        
        <a
          href="/catalogo"
          className="w-full max-w-sm flex items-center justify-center gap-3 
                     bg-blue-600 text-white font-subtitle rounded-xl shadow-lg 
                     p-4 mb-4 transition transform hover:scale-105 active:scale-95"
        >
          <FaFish size={22} />
          Catálogo de Peixes
        </a>

        <a
          href="https://www.google.com/maps/place/Piscicultura+Magr%C3%A3o+Alevinos,+Rolim+de+Moura+-+RO"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full max-w-sm flex items-center justify-center gap-3 
                     bg-green-700 text-white font-subtitle rounded-xl shadow-lg 
                     p-4 mb-4 transition transform hover:scale-105 active:scale-95"
        >
          <FaMapMarkerAlt size={22} />
          Localização
        </a>

        <a
          href="https://wa.link/e8o7hw"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full max-w-sm flex items-center justify-center gap-3 
                     bg-green-600 text-white font-subtitle rounded-xl shadow-lg 
                     p-4 mb-4 transition transform hover:scale-105 active:scale-95"
        >
          <FaWhatsapp size={22} />
          Contato (Magrão)
        </a>

        <a
          href="https://wa.link/i6qgk5"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full max-w-sm flex items-center justify-center gap-3 
                     bg-green-500 text-white font-subtitle rounded-xl shadow-lg 
                     p-4 mb-4 transition transform hover:scale-105 active:scale-95"
        >
          <FaWhatsapp size={22} />
          Contato (Piscicultura)
        </a>

        <a
          href="https://instagram.com/piscicultura_magraoalevinos_"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full max-w-sm flex items-center justify-center gap-3 
                     bg-pink-600 text-white font-subtitle rounded-xl shadow-lg 
                     p-4 mb-4 transition transform hover:scale-105 active:scale-95"
        >
          <FaInstagram size={22} />
          Instagram
        </a>
      </div>

      <footer className="relative z-10 text-sm text-gray-200 font-sans text-center py-6">
        © 2026 Piscicultura Magrão Alevinos
        <div className="max-w-xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 text-center mt-2">
          <a
            href="https://instagram.com/raycka_dev"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-200 hover:text-green-300 transition-colors duration-300 font-subtitle font-bold text-sm sm:text-base z-10"
          >
            <FaInstagram className="text-lg" /> Desenvolvido por{" "}
            <span className="underline">Raycka DevLab</span>
          </a>
        </div>
      </footer>
    </div>
  );
}
