import "./StatItem.css";

export default function StatItem({ label, value, change, positive }) {
  return (
    <div className="stat-item">
      <span className="stat-item-label">{label}</span>

      <div className="stat-item-values">
        <span className="stat-item-value">{value}</span>

        {change && (
          <span
            className={`stat-item-change ${
              positive ? "positive" : "negative"
            }`}
          >
            {change}
          </span>
        )}
      </div>
    </div>
  );
}
