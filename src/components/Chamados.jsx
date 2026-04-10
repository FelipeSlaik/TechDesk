function Chamados({
  chamados,
  setChamados,
  novoChamado,
  setNovoChamado,
  filtro,
  setFiltro,
}) {
  const chamadosFiltrados =
    filtro === "todos"
      ? chamados
      : chamados.filter((chamado) => chamado.status === filtro);

  return (
    <div>
      <input
        className="p-2 border rounded w-64 mb-4 placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-gray-300"
        placeholder="Digite um chamado"
        value={novoChamado}
        onChange={(e) => setNovoChamado(e.target.value)}
      />

      <button
        className={`p-1 rounded ml-2 cursor-pointer ${
          !novoChamado.trim() ? "bg-gray-400" : "bg-blue-500 text-white"
        }`}
        disabled={!novoChamado.trim()}
        onClick={() => {
          if (!novoChamado.trim()) return;

          setChamados([
            ...chamados,
            { id: Date.now(), titulo: novoChamado, status: "aberto" },
          ]);
          setNovoChamado("");
        }}
      >
        Adicionar
      </button>

      <div className="flex gap-2 mb-4 mt-2">
        <button className={`px-3 py-1 rounded cursor-pointer ${filtro === "todos" ? "bg-gray-800 text-white" : "bg-white"}`} onClick={() => setFiltro("todos")}>Todos</button>
        <button className={`px-3 py-1 rounded cursor-pointer ${filtro === "aberto" ? "bg-gray-800 text-white" : "bg-white"}`} onClick={() => setFiltro("aberto")}>Abertos</button>
        <button className={`px-3 py-1 rounded cursor-pointer ${filtro === "resolvido" ? "bg-gray-800 text-white" : "bg-white"}`} onClick={() => setFiltro("resolvido")}>Resolvidos</button>
      </div>

      {chamadosFiltrados.map((item) => (
        <div
          key={item.id}
          className={`p-4 mb-3 rounded shadow flex justify-between ${
            item.status === "aberto" ? "bg-yellow-100" : "bg-green-100"
          }`}
        >
          <div>
            <h2>{item.titulo}</h2>
            <p>Status: {item.status}</p>
          </div>

          <button
          className={`px-3 py-1 rounded text-white cursor-pointer hover:opacity-80 ${item.status === "aberto" ? "bg-yellow-500" : "bg-green-500"}`}
            onClick={() =>
              setChamados(
                chamados.map((chamado) =>
                  chamado.id !== item.id
                    ? chamado
                    : {
                        ...chamado,
                        status:
                          chamado.status === "aberto" ? "resolvido" : "aberto",
                      }
                )
              )
            }
          >
            {item.status === "aberto" ? "Resolver" : "Reabrir"}
          </button>
        </div>
      ))}
    </div>
  );
}

export default Chamados;