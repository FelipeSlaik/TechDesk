function Dashboard({ abertos, resolvidos }) {
  return (
    <div className="flex gap-4 flex-col">
                  <div className="flex gap-4">
                    <div className="bg-yellow-50 p-4 rounded shadow w-52">
                      <p className="text-sm">Chamados Abertos:</p>
                      <h2 className="text-2xl font-bold">{abertos}</h2>
                    </div>
    
                    <div className="bg-green-50 p-4 rounded shadow w-52">
                      <p className="text-sm">Chamados Resolvidos:</p>
                      <h2 className="text-2xl font-bold">{resolvidos}</h2>
                    </div>
                  </div>
                </div>
  );
}

export default Dashboard;