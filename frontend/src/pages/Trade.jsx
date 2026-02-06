

export default function Trade({ user }) {
  return (
    <div>
      <h1>Trade</h1>
      <p>Usuario: {user?.nombre}</p>

      <div style={{ marginTop: "20px" }}>
        <h2>BTC/USDC en tiempo real</h2>
      
      </div>
    </div>
  );
}
