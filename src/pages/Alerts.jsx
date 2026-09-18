import React, { useState, useMemo } from 'react';
import AlertDetailModal from '../components/AlertDetailModal';
import { Bell } from 'lucide-react';

const getRiskClass = (level) => {
  switch (level?.toLowerCase()) {
    case 'high': return 'risk-high';
    case 'medium': return 'risk-medium';
    default: return 'risk-low';
  }
};

const Alerts = ({ alerts }) => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedAlert, setSelectedAlert] = useState(null);

  const filterOptions = ['All', 'High', 'Medium', 'Low'];

  const filtered = useMemo(() => {
    if (activeFilter === 'All') return alerts;
    return alerts.filter((a) => a.riskLevel === activeFilter);
  }, [alerts, activeFilter]);

  const highCount = alerts.filter(a => a.riskLevel === 'High').length;
  const mediumCount = alerts.filter(a => a.riskLevel === 'Medium').length;
  const lowCount = alerts.filter(a => a.riskLevel === 'Low').length;

  const countForFilter = (f) => {
    if (f === 'All') return alerts.length;
    if (f === 'High') return highCount;
    if (f === 'Medium') return mediumCount;
    return lowCount;
  };

  return (
    <>
      <div className="page-content">
        <div className="dashboard-top">
          <div>
            <h2 className="page-title">Alerts</h2>
            <p className="page-subtitle">Monitor and act on project risk alerts across all ministries.</p>
          </div>
          <div style={{ display: 'flex', gap: '12px' }}>
            <div style={{ background: '#FEECEC', padding: '8px 14px', borderRadius: '8px', textAlign: 'center' }}>
              <div style={{ fontSize: '1.3rem', fontWeight: 800, color: '#DC2626' }}>{highCount}</div>
              <div style={{ fontSize: '0.72rem', color: '#DC2626', fontWeight: 600 }}>High</div>
            </div>
            <div style={{ background: '#FEF3C7', padding: '8px 14px', borderRadius: '8px', textAlign: 'center' }}>
              <div style={{ fontSize: '1.3rem', fontWeight: 800, color: '#D97706' }}>{mediumCount}</div>
              <div style={{ fontSize: '0.72rem', color: '#D97706', fontWeight: 600 }}>Medium</div>
            </div>
            <div style={{ background: '#E8F8F0', padding: '8px 14px', borderRadius: '8px', textAlign: 'center' }}>
              <div style={{ fontSize: '1.3rem', fontWeight: 800, color: '#16A06A' }}>{lowCount}</div>
              <div style={{ fontSize: '0.72rem', color: '#16A06A', fontWeight: 600 }}>Low</div>
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="dashboard-card" style={{ padding: '14px 20px', marginBottom: '20px' }}>
          <div className="filter-group">
            {filterOptions.map((f) => (
              <button
                key={f}
                className={`filter-btn ${activeFilter === f ? 'active' : ''}`}
                onClick={() => setActiveFilter(f)}
              >
                {f}
                <span
                  style={{
                    marginLeft: '6px',
                    background: activeFilter === f ? 'rgba(255,255,255,0.3)' : '#E2E8F0',
                    color: activeFilter === f ? '#fff' : '#64748B',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    padding: '1px 6px',
                    borderRadius: '8px'
                  }}
                >
                  {countForFilter(f)}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Alerts Table */}
        <div className="dashboard-card" style={{ padding: 0, overflow: 'hidden' }}>
          <div className="table-responsive">
            <table className="custom-table" role="table" aria-label="All Alerts">
              <thead>
                <tr>
                  <th>Alert ID</th>
                  <th>Project</th>
                  <th>Department</th>
                  <th>Category</th>
                  <th>Risk Level</th>
                  <th>Status</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {filtered.length === 0 ? (
                  <tr>
                    <td colSpan={7} style={{ textAlign: 'center', padding: '48px 20px', color: '#94A3B8' }}>
                      <Bell size={36} style={{ margin: '0 auto 12px', display: 'block', color: '#CBD5E1' }} />
                      No {activeFilter !== 'All' ? activeFilter.toLowerCase() + ' ' : ''}alerts found.
                    </td>
                  </tr>
                ) : (
                  filtered.map((alert) => (
                    <tr
                      key={alert.id}
                      className="clickable-row"
                      onClick={() => setSelectedAlert(alert)}
                      title="Click for alert details"
                    >
                      <td style={{ fontSize: '0.8rem', color: '#94A3B8', fontWeight: 600, fontFamily: 'monospace' }}>
                        {alert.id}
                      </td>
                      <td className="project-name-cell">{alert.project}</td>
                      <td style={{ fontSize: '0.82rem', color: '#64748B', maxWidth: '180px' }}>{alert.department}</td>
                      <td style={{ fontSize: '0.82rem', color: '#475569' }}>{alert.category}</td>
                      <td>
                        <span className={`risk-badge ${getRiskClass(alert.riskLevel)}`}>
                          <span className="risk-dot"></span>
                          <span>{alert.riskLevel}</span>
                        </span>
                      </td>
                      <td>
                        <span className="status-pill" style={{
                          background: alert.status === 'Urgent Escalation' ? '#FEE2E2' : undefined,
                          color: alert.status === 'Urgent Escalation' ? '#B91C1C' : undefined
                        }}>
                          {alert.status}
                        </span>
                      </td>
                      <td style={{ color: '#64748B', whiteSpace: 'nowrap', fontSize: '0.83rem' }}>{alert.date}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {selectedAlert && (
        <AlertDetailModal
          alert={selectedAlert}
          onClose={() => setSelectedAlert(null)}
        />
      )}
    </>
  );
};

export default Alerts;
