import React from 'react';
import { X, AlertTriangle, Building, Calendar, User, CheckCircle2 } from 'lucide-react';
import { useToast } from './Toast';

export const AlertDetailModal = ({ alert, onClose, onResolve }) => {
  const { showToast } = useToast();

  if (!alert) return null;

  const handleResolve = () => {
    if (onResolve) onResolve(alert.id);
    showToast(`Alert for "${alert.project}" marked as resolved`, 'success');
    onClose();
  };

  const handleEscalate = () => {
    showToast(`Escalation dispatch sent to ${alert.department}`, 'info');
  };

  const getRiskColor = (level) => {
    switch (level?.toLowerCase()) {
      case 'high': return '#DC2626';
      case 'medium': return '#D97706';
      default: return '#16A06A';
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <AlertTriangle size={20} color={getRiskColor(alert.riskLevel)} />
            <h2 className="modal-title">Alert Details: {alert.id || 'INC-01'}</h2>
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close dialog">
            <X size={18} />
          </button>
        </div>

        <div className="modal-body">
          <div style={{ marginBottom: '16px' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#071D3A', marginBottom: '6px' }}>
              {alert.project}
            </h3>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
              <span className={`risk-badge risk-${alert.riskLevel.toLowerCase()}`}>
                <span className="risk-dot"></span>
                <span>{alert.riskLevel} Risk</span>
              </span>
              <span className="status-pill status-review">
                {alert.status || 'Active Monitoring'}
              </span>
            </div>
          </div>

          <div style={{ background: '#F8FAFC', padding: '14px', borderRadius: '8px', border: '1px solid #E2E8F0', marginBottom: '16px' }}>
            <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#64748B', textTransform: 'uppercase', marginBottom: '4px' }}>
              Issue Summary & Impact
            </div>
            <p style={{ fontSize: '0.88rem', color: '#1E293B', lineHeight: '1.5' }}>
              {alert.description || 'Discrepancy detected during milestone inspection. Required immediate clearance.'}
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', fontSize: '0.85rem' }}>
            <div>
              <div style={{ color: '#64748B', fontSize: '0.76rem', display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '2px' }}>
                <Building size={14} /> Department
              </div>
              <div style={{ fontWeight: 600, color: '#071D3A' }}>{alert.department || 'National Project Cell'}</div>
            </div>

            <div>
              <div style={{ color: '#64748B', fontSize: '0.76rem', display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '2px' }}>
                <Calendar size={14} /> Logged Date
              </div>
              <div style={{ fontWeight: 600, color: '#071D3A' }}>{alert.date}</div>
            </div>

            <div>
              <div style={{ color: '#64748B', fontSize: '0.76rem', display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '2px' }}>
                <User size={14} /> Assigned Officer
              </div>
              <div style={{ fontWeight: 600, color: '#071D3A' }}>{alert.assignedOfficer || 'Director General'}</div>
            </div>

            <div>
              <div style={{ color: '#64748B', fontSize: '0.76rem', display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '2px' }}>
                Classification
              </div>
              <div style={{ fontWeight: 600, color: '#071D3A' }}>{alert.category || 'Quality Audit'}</div>
            </div>
          </div>
        </div>

        <div className="modal-footer">
          <button type="button" className="btn-secondary" onClick={handleEscalate}>
            Escalate Notice
          </button>
          <button type="button" className="btn-primary" onClick={handleResolve}>
            <CheckCircle2 size={16} />
            Acknowledge & Resolve
          </button>
        </div>
      </div>
    </div>
  );
};

export default AlertDetailModal;
