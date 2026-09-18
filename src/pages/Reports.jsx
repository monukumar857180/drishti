import React, { useState } from 'react';
import { X, BarChart2, FileText, TrendingUp, CheckSquare, ChevronRight } from 'lucide-react';
import { initialReports } from '../data/mockData';
import { useToast } from '../components/Toast';

const reportIcons = {
  'REP-01': FileText,
  'REP-02': BarChart2,
  'REP-03': TrendingUp,
  'REP-04': CheckSquare,
};

const reportColors = {
  'REP-01': { bg: '#EBF3FD', icon: '#1468D8', border: '#D4E5FA' },
  'REP-02': { bg: '#FEECEC', icon: '#DC2626', border: '#FCD8D8' },
  'REP-03': { bg: '#E8F8F0', icon: '#16A06A', border: '#CDEEDF' },
  'REP-04': { bg: '#F3E8FF', icon: '#673AB7', border: '#E9D5FF' },
};

// Report Preview Modal
const ReportPreviewModal = ({ report, onClose }) => {
  if (!report) return null;
  const IconComp = reportIcons[report.id] || FileText;
  const color = reportColors[report.id] || reportColors['REP-01'];

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-content" style={{ maxWidth: '560px' }} onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ background: color.bg, border: `1px solid ${color.border}`, borderRadius: '8px', padding: '8px', display: 'flex' }}>
              <IconComp size={20} color={color.icon} />
            </div>
            <h2 className="modal-title">{report.title}</h2>
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close report preview">
            <X size={18} />
          </button>
        </div>

        <div className="modal-body">
          {/* Report Meta */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px', marginBottom: '20px' }}>
            {[
              { label: 'Type', value: report.type },
              { label: 'Frequency', value: report.frequency },
              { label: 'Last Updated', value: report.lastUpdated },
            ].map((m) => (
              <div key={m.label} style={{ background: '#F8FAFC', padding: '10px 12px', borderRadius: '8px', border: '1px solid #E2E8F0' }}>
                <div style={{ fontSize: '0.7rem', fontWeight: 700, color: '#94A3B8', textTransform: 'uppercase', marginBottom: '2px' }}>{m.label}</div>
                <div style={{ fontSize: '0.86rem', fontWeight: 600, color: '#1E293B' }}>{m.value}</div>
              </div>
            ))}
          </div>

          {/* Description */}
          <div style={{ marginBottom: '20px' }}>
            <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#64748B', marginBottom: '6px', textTransform: 'uppercase' }}>Summary</div>
            <p style={{ fontSize: '0.88rem', color: '#334155', lineHeight: '1.6' }}>{report.description}</p>
          </div>

          {/* Key Highlights */}
          <div>
            <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#64748B', marginBottom: '8px', textTransform: 'uppercase' }}>Key Highlights</div>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px', listStyle: 'none' }}>
              {report.highlights.map((h, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.86rem', color: '#334155' }}>
                  <span style={{ color: color.icon, fontWeight: 700, marginTop: '1px', flexShrink: 0 }}>✓</span>
                  {h}
                </li>
              ))}
            </ul>
          </div>

          {/* Preview Notice */}
          <div style={{
            marginTop: '20px', padding: '12px 14px', background: '#F0F7FF',
            borderRadius: '8px', border: '1px solid #DBEAFE',
            fontSize: '0.82rem', color: '#1E40AF',
            display: 'flex', alignItems: 'center', gap: '8px'
          }}>
            <BarChart2 size={16} />
            Report preview opened. Full PDF export available in production build.
          </div>
        </div>

        <div className="modal-footer">
          <button className="btn-secondary" onClick={onClose}>Close</button>
          <button
            className="btn-primary"
            onClick={() => alert('PDF export will be available in the production system.')}
          >
            Export PDF
          </button>
        </div>
      </div>
    </div>
  );
};

const Reports = () => {
  const { showToast } = useToast();
  const [selectedReport, setSelectedReport] = useState(null);

  const handleViewReport = (report) => {
    setSelectedReport(report);
    showToast('Report preview opened', 'info');
  };

  return (
    <>
      <div className="page-content">
        <div className="dashboard-top">
          <div>
            <h2 className="page-title">Reports</h2>
            <p className="page-subtitle">Access and preview government project monitoring reports.</p>
          </div>
        </div>

        <div className="reports-grid">
          {initialReports.map((report) => {
            const IconComp = reportIcons[report.id] || FileText;
            const color = reportColors[report.id] || reportColors['REP-01'];

            return (
              <div key={report.id} className="report-card">
                <div className="report-card-top">
                  <div className="report-badge-row">
                    <span className="report-type-badge">{report.type}</span>
                    <span className="report-date">Updated: {report.lastUpdated}</span>
                  </div>

                  {/* Icon + Title */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
                    <div style={{
                      background: color.bg,
                      border: `1px solid ${color.border}`,
                      borderRadius: '10px',
                      width: '44px', height: '44px',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <IconComp size={22} color={color.icon} />
                    </div>
                    <h3 className="report-title" style={{ marginBottom: 0 }}>{report.title}</h3>
                  </div>

                  <p className="report-desc">{report.description}</p>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '16px', paddingTop: '16px', borderTop: '1px solid #F1F5F9' }}>
                  <div style={{ display: 'flex', gap: '12px' }}>
                    <span style={{ fontSize: '0.76rem', color: '#64748B' }}>Frequency: <strong>{report.frequency}</strong></span>
                    <span style={{ fontSize: '0.76rem', color: '#64748B' }}>Size: <strong>{report.size}</strong></span>
                  </div>
                  <button
                    className="btn-primary"
                    onClick={() => handleViewReport(report)}
                    style={{ gap: '4px', padding: '7px 14px', fontSize: '0.82rem' }}
                  >
                    View Report <ChevronRight size={14} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {selectedReport && (
        <ReportPreviewModal
          report={selectedReport}
          onClose={() => setSelectedReport(null)}
        />
      )}
    </>
  );
};

export default Reports;
