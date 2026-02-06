import PropTypes from "prop-types";

import "./StatCard.css";

export default function StatCard({ label, value, subvalue }) {
  return (
    <article className="stat">
      <span className="stat-label">{label}</span>

      <div className="stat-main">
        <span className="stat-value">{value}</span>
        {subvalue && <span className="stat-subvalue">{subvalue}</span>}
      </div>
    </article>
  );
}


StatCard.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  icon: PropTypes.node,
  trend: PropTypes.number,
};
