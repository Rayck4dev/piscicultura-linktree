import { useState } from "react";
import { FaInstagram, FaPlay } from "react-icons/fa";
import catalogo from "../data/catalogo";
import FloatingMenu from "../components/FloatingMenu";

export default function Catalogo() {
  const [filtro, setFiltro] = useState("todos");

  const statusColors = {
    disponivel: "bg-green-600 text-white",
    em_breve: "bg-yellow-500 text-black",
    indisponivel: "bg-red-600 text-white",
  };

  const statusLabels = {
    disponivel: "Disponível",
    em_breve: "Em breve",
    indisponivel: "Indisponível",
  };

  const ordenados = [...catalogo].sort((a, b) => {
    const ordem = { disponivel: 1, em_breve: 2, indisponivel: 3 };
    return ordem[a.status] - ordem[b.status];
  });

  const filtrados =
    filtro === "todos"
      ? ordenados
      : ordenados.filter((peixe) => peixe.status === filtro);

  return (
    <div className="relative flex flex-col min-h-screen bg-gradient-to-b from-blue-900/40 to-green-900/40 p-6">
      <h1 className="font-title text-3xl text-green-800 mb-6 text-center">
        Catálogo
      </h1>

      <div className="flex flex-wrap justify-center gap-3 mb-6">
        <button
          onClick={() => setFiltro("todos")}
          className="flex-1 min-w-[120px] px-4 py-2 rounded-lg bg-gray-700 text-white hover:bg-gray-600"
        >
          Todos
        </button>
        <button
          onClick={() => setFiltro("disponivel")}
          className="flex-1 min-w-[120px] px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-500"
        >
          Disponíveis
        </button>
        <button
          onClick={() => setFiltro("em_breve")}
          className="flex-1 min-w-[120px] px-4 py-2 rounded-lg bg-yellow-500 text-black hover:bg-yellow-400"
        >
          Em breve
        </button>
        <button
          onClick={() => setFiltro("indisponivel")}
          className="flex-1 min-w-[120px] px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-500"
        >
          Indisponíveis
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtrados.map((peixe, index) => (
          <div
            key={index}
            className="relative bg-black/40 backdrop-blur-md rounded-xl shadow-lg p-3 sm:p-4 flex flex-col items-center"
          >
            {peixe.tipo === "img" && peixe.src ? (
              <img
                src={peixe.src}
                alt={peixe.nome}
                className="w-full h-56 sm:h-64 object-cover rounded-lg mb-3"
                loading="lazy"
              />
            ) : peixe.tipo === "video" && peixe.src ? (
              <div className="w-full mb-3">
                <video
                  src={peixe.src}
                  className="w-full h-56 sm:h-64 object-cover rounded-lg"
                  controls
                  preload="none"
                />
                <p className="flex items-center justify-center gap-2 text-xs sm:text-md text-blue-800 mt-2 font-bold">
                  Toque no <FaPlay className="text-base" /> para assistir
                </p>
              </div>
            ) : (
              <div className="w-full h-56 sm:h-64 flex items-center justify-center rounded-lg mb-3 bg-black/60 text-gray-300 font-bold">
                {statusLabels[peixe.status]}
              </div>
            )}

            {peixe.status === "disponivel" && peixe.preco && (
              <span
                className="absolute top-2 right-2 bg-green-600 text-white 
                   text-md sm:text-lg font-extrabold px-3 sm:px-4 py-1 
                   rounded-full shadow-lg"
              >
                {`R$ ${peixe.preco.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}`}
                / {peixe.tipoPreco === "milheiro" ? "milheiro" : "unidade"}
              </span>
            )}

            <h2 className="text-lg sm:text-2xl font-subtitle text-green-200 mb-2 text-center">
              {peixe.nome}
            </h2>

            {peixe.tamanho && peixe.status === "disponivel" && (
              <p className="text-md sm:text-base text-gray-200 mb-2">
                Tamanho: {peixe.tamanho}
              </p>
            )}

            <div className="flex flex-wrap gap-2 mt-2 justify-center">
              <span
                className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-md font-bold ${statusColors[peixe.status]}`}
              >
                {statusLabels[peixe.status]}
              </span>

              {peixe.status === "em_breve" && peixe.dias && (
                <span className="px-2 sm:px-3 py-1 rounded-full text-xs sm:text-md font-bold bg-blue-600 text-white">
                  Disponível em {peixe.dias} dias
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      <footer className="relative z-10 text-md text-black font-sans text-center py-6 mt-8">
        © 2026 Piscicultura Magrão Alevinos
        <div className="max-w-xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 text-center mt-2">
          <a
            href="https://instagram.com/raycka_dev"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-black font-subtitle font-bold text-md sm:text-base z-10"
          >
            <FaInstagram className="text-lg" /> Desenvolvido por{" "}
            <span className="underline">Raycka DevLab</span>
          </a>
        </div>
      </footer>
      <FloatingMenu />
    </div>
  );
}
