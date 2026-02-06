import StatItem from "../components/StatItem/StatItem";

function MarketHeaderStats() {
  return (
    <div className="market-stats">
      <StatItem
        label="Price"
        value="1.4842"
      />

      <StatItem
        label="24h Change"
        value="-3.72%"
        change=""
        positive={false}
      />

      <StatItem
        label="24h Volume"
        value="26.94M USDC"
      />
    </div>
  );
}

export default MarketHeaderStats;