import Table from "../components/Table";

export default function Portfolio({ user }) {
  // Datos de ejemplo
  const assets = [
    { id: 1, name: "BTC", amount: 0.25, value: "7,100 USDC" },
    { id: 2, name: "ETH", amount: 1.5, value: "2,760 USDC" },
  ];

  return (
    <div>
      <h1>Portfolio</h1>
      <p>Usuario: {user?.nombre}</p>

      <Table
        columns={["Activo", "Cantidad", "Valor"]}
        data={assets.map(a => [a.name, a.amount, a.value])}
      />
    </div>
  );
}
