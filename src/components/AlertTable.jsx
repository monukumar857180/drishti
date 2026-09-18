import React from 'react';
import { Link } from 'react-router-dom';

export const AlertTable = ({ alerts = [], onSelectAlert, showHeader = true, limit = 5 }) => {
  const displayAlerts = limit ? alerts.slice(0, limit) : alerts;

  const getRiskClass = (level) => {
    switch (level?.toLowerCase()) {
      case 'high':
        return 'risk-high';
      case 'medium':
        return 'risk-medium';
      case 'low':
      default:
        return 'risk-low';
    }
  };

  return (
    <div className="table-responsive">
      <table className="custom-table" role="table" aria-label="Recent Alerts">
        <thead>
          <tr>
            <th>Project</th>
            <th>Risk Level</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {displayAlerts.map((alert) => (
            <tr 
              key={alert.id || alert.project} 
              onClick={() => onSelectAlert && onSelectAlert(alert)}
              className="clickable-row"
              title="Click to view alert details"
            >
              <td className="project-name-cell">{alert.project}</td>
              <td>
                <span className={`risk-badge ${getRiskClass(alert.riskLevel)}`}>
                  <span className="risk-dot"></span>
                  <span>{alert.riskLevel}</span>
                </span>
              </td>
              <td style={{ color: '#64748B', whiteSpace: 'nowrap' }}>{alert.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AlertTable;
