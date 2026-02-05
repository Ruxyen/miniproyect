function Markets() {
  const markets = [
    { pair: "BTC-USD", price: "42,150", change: "+1.24%" },
    { pair: "ETH-USD", price: "2,310", change: "-0.42%" }
  ];

  return (
    <>
      <h1>Markets</h1>

      <table className="table">
        <thead>
          <tr>
            <th>Market</th>
            <th>Price</th>
            <th>24h</th>
          </tr>
        </thead>
        <tbody>
          {markets.map((m) => (
            <tr key={m.pair}>
              <td>{m.pair}</td>
              <td>${m.price}</td>
              <td className={m.change.startsWith("+") ? "positive" : "negative"}>
                {m.change}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Markets;
