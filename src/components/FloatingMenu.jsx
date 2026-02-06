import { useState } from "react";
import { FaArrowUp, FaHome, FaWhatsapp, FaBars } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function MenuFlutuante() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const voltarTopo = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-6 right-6 flex flex-col items-end gap-3 z-50 md:hidden">
      {open && (
        <>
          <button
            onClick={voltarTopo}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-yellow-400 text-black shadow-lg hover:bg-yellow-500 transition"
          >
            <FaArrowUp size={20} />
            <span className="text-sm font-bold">Topo</span>
          </button>

          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white shadow-lg hover:bg-blue-700 transition"
          >
            <FaHome size={20} />
            <span className="text-sm font-bold">Home</span>
          </button>

          <a
            href="https://wa.link/e8o7hw"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-green-600 text-white shadow-lg hover:bg-green-700 transition"
          >
            <FaWhatsapp size={22} />
            <span className="text-sm font-bold">Magrão</span>
          </a>

          <a
            href="https://wa.link/i6qgk5"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-green-500 text-white shadow-lg hover:bg-green-600 transition"
          >
            <FaWhatsapp size={22} />
            <span className="text-sm font-bold">Piscicultura</span>
          </a>
        </>
      )}

      <button
        onClick={() => setOpen(!open)}
        className="w-14 h-14 flex items-center justify-center rounded-full bg-orange-600 text-white shadow-lg hover:bg-orange-700 transition"
      >
        <FaBars size={22} />
      </button>
    </div>
  );
}
