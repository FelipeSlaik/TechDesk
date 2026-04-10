import { useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Chamados from "./components/Chamados";
import Dashboard from "./components/Dashboard";

function App() {
  const [pagina, setPagina] = useState("dashboard");
  const [chamados, setChamados] = useState([
    { titulo: "erro no login", status: "aberto", id: 1 },
    { titulo: "Bug na tela", status: "aberto", id: 2 },
    { titulo: "Sistema lento", status: "aberto", id: 3 },
  ]);
  const [novoChamado, setNovoChamado] = useState("");
  const [filtro, setFiltro] = useState("todos");

  const abertos = chamados.filter(
    (chamado) => chamado.status === "aberto"
  ).length;

  const resolvidos = chamados.filter(
    (chamado) => chamado.status === "resolvido"
  ).length;

  return (
    <div className="flex p-4 space-y-3">
      <Sidebar pagina={pagina} setPagina={setPagina} />

      <div className="flex-1 h-screen flex flex-col">
        <Header pagina={pagina} />

        <main className="flex-1 bg-gray-200 p-4">
          {pagina === "dashboard" && (
            <Dashboard abertos={abertos} resolvidos={resolvidos} />
          )}

          {pagina === "chamados" && (
            <Chamados
              chamados={chamados}
              setChamados={setChamados}
              novoChamado={novoChamado}
              setNovoChamado={setNovoChamado}
              filtro={filtro}
              setFiltro={setFiltro}
            />
          )}
        </main>
      </div>
    </div>
  );
}

export default App;