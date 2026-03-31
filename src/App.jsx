import { useState } from "react";
import SCPList from "./components/SCPList";
import SCPDetail from "./components/SCPDetail";
import "./App.css";

function App() {
  const [selectedScp, setSelectedScp] = useState(null);

  return (
    <div className="page-shell">
      <div className="app-layout">
        <aside className="sidebar">
          <div className="sidebar-top">
            <div className="logo-badge">SCP</div>
            <div>
              <h1 className="logo">SCP Archive</h1>
              <p className="subtitle">Secure • Contain • Protect</p>
            </div>
          </div>

          <div className="sidebar-divider"></div>

          <SCPList onSelect={setSelectedScp} selectedScp={selectedScp} />
        </aside>

        <main className="main-content">
          <div className="content-header">
            <h2>Database Overview</h2>
            <button className="status-pill">Classified Archive</button>
          </div>

          <SCPDetail scp={selectedScp} />
        </main>
      </div>
    </div>
  );
}

export default App;