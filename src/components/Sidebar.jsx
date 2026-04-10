function Sidebar({ pagina, setPagina }) {
  return (
    <div className="w-64 h-screen">
      <h1 className="text-3xl font-semibold">TechDesk</h1>
      <ul>
        <li
          onClick={() => setPagina("dashboard")}
          className={
            pagina === "dashboard"
              ? "bg-gray-800 text-amber-50"
              : "cursor-pointer"
          }
        >
          Dashboard
        </li>
        <li
          onClick={() => setPagina("chamados")}
          className={
            pagina === "chamados"
              ? "bg-gray-800 text-amber-50"
              : "cursor-pointer"
          }
        >
          Chamados
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;