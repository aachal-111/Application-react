import scpData from "../data/scpData.json";

function SCPList({ onSelect, selectedScp }) {
  return (
    <div className="scp-list">
      {scpData.map((scp, index) => {
        const isActive = selectedScp?.item === scp.item;

        return (
          <button
            key={index}
            className={`scp-card ${isActive ? "active" : ""}`}
            onClick={() => onSelect(scp)}
            type="button"
          >
            <div className="scp-card-top">
              <h3>{scp.item}</h3>
              <span className="heart-icon">♡</span>
            </div>

            <p>{scp.objectClass}</p>

            <div className="scp-meta">
              <span className="scp-badge">SCP FILE</span>
            </div>
          </button>
        );
      })}
    </div>
  );
}

export default SCPList;