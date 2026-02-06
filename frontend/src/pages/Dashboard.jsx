import StatItem from "../components/StatItem/StatItem";

export default function Dashboard({ user }) {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Bienvenido, {user?.nombre}!</p>
      <div className="market-stats">
        <StatItem label="Price" value="1.4842" />
        <StatItem label="24h Change" value="-3.72%" positive={false} />
        <StatItem label="24h Volume" value="26.94M USDC" />
      </div>
    </div>
  );
}
