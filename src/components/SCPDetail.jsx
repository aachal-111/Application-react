function SCPDetail({ scp }) {
  if (!scp) {
    return (
      <div className="scp-detail empty">
        <div className="empty-icon">♡</div>
        <h2>Select an SCP</h2>
        <p>Choose an item from the sidebar to view details.</p>
      </div>
    );
  }

  return (
    <div className="scp-detail">
      <div className="detail-hero">
        <div>
          <h2>{scp.item}</h2>
          <p className="scp-class">
            <strong>Object Class:</strong> {scp.objectClass}
          </p>
        </div>

        <div className="detail-tag"> Foundation Record</div>
      </div>

      {scp.image ? (
        <div className="image-frame">
          <img src={scp.image} alt={scp.item} className="scp-image" />
        </div>
      ) : (
        <div className="no-image-box">No image available</div>
      )}

      <div className="detail-grid">
        <div className="detail-block">
          <h3>Description</h3>
          <p>{scp.description}</p>
        </div>

        <div className="detail-block">
          <h3>Special Containment Procedures</h3>
          <p>{scp.specialContainmentProcedures}</p>
        </div>

        {scp.reference && (
          <div className="detail-block full-width">
            <h3>Addendum</h3>
            <p>{scp.reference}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default SCPDetail;