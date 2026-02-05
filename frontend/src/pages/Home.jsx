import StatCard from "../components/StatCard";

export default function Home() {
  return (
    <div>
      <h1>Dashboard</h1>

      <div className="grid">
        <StatCard title="Usuarios activos" value="124" />
        <StatCard title="Operaciones" value="3,421" />
        <StatCard title="Volumen" value="€12,430" />
      </div>
    </div>
  );
}
