import React, { useState, useMemo } from 'react';
import { Search, FolderKanban, Plus, ChevronRight } from 'lucide-react';
import AddProjectModal from '../components/AddProjectModal';
import { useToast } from '../components/Toast';

const getRiskClass = (risk) => {
  switch (risk?.toLowerCase()) {
    case 'high': return 'risk-high';
    case 'medium': return 'risk-medium';
    default: return 'risk-low';
  }
};

const getStatusClass = (status) => {
  switch (status?.toLowerCase()) {
    case 'active': return 'status-active';
    case 'completed': return 'status-completed';
    case 'under review': return 'status-review';
    case 'planning': return 'status-planning';
    default: return '';
  }
};

const getProgressColor = (progress) => {
  if (progress >= 85) return '#16A06A';
  if (progress >= 50) return '#1468D8';
  return '#F59E0B';
};

const Projects = ({ projects, onAddProject }) => {
  const { showToast } = useToast();
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [riskFilter, setRiskFilter] = useState('All');
  const [showAddModal, setShowAddModal] = useState(false);

  const statusOptions = ['All', 'Active', 'Completed', 'Under Review', 'Planning'];
  const riskOptions = ['All', 'High', 'Medium', 'Low'];

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const matchesSearch =
        searchQuery.trim() === '' ||
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.lead?.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesStatus = statusFilter === 'All' || p.status === statusFilter;
      const matchesRisk = riskFilter === 'All' || p.risk === riskFilter;

      return matchesSearch && matchesStatus && matchesRisk;
    });
  }, [projects, searchQuery, statusFilter, riskFilter]);

  return (
    <>
      <div className="page-content">
        {/* Page Title */}
        <div className="dashboard-top">
          <div>
            <h2 className="page-title">Projects</h2>
            <p className="page-subtitle">Track and manage all government infrastructure projects.</p>
          </div>
          <button
            className="btn-primary"
            onClick={() => setShowAddModal(true)}
            style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
          >
            <Plus size={16} /> Add Project
          </button>
        </div>

        {/* Filters & Search Toolbar */}
        <div className="dashboard-card" style={{ padding: '16px 20px', marginBottom: '20px' }}>
          <div className="toolbar-container" style={{ marginBottom: 0 }}>
            {/* Search */}
            <div style={{ position: 'relative', flex: 1, maxWidth: '380px' }}>
              <div className="search-box">
                <Search size={17} color="#94A3B8" />
                <input
                  type="text"
                  className="search-input"
                  placeholder="Search projects, departments, officers…"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  aria-label="Search projects"
                />
              </div>
            </div>

            {/* Status Filter */}
            <div className="filter-group">
              {statusOptions.map((s) => (
                <button
                  key={s}
                  className={`filter-btn ${statusFilter === s ? 'active' : ''}`}
                  onClick={() => setStatusFilter(s)}
                >
                  {s}
                </button>
              ))}
            </div>

            {/* Risk Filter */}
            <div className="filter-group">
              {riskOptions.map((r) => (
                <button
                  key={r}
                  className={`filter-btn ${riskFilter === r ? 'active' : ''}`}
                  onClick={() => setRiskFilter(r)}
                >
                  {r}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div style={{ marginBottom: '14px', fontSize: '0.84rem', color: '#64748B', fontWeight: 500 }}>
          Showing {filtered.length} of {projects.length} projects
        </div>

        {/* Projects Table */}
        <div className="dashboard-card" style={{ padding: 0, overflow: 'hidden' }}>
          <div className="table-responsive">
            <table className="custom-table" role="table" aria-label="Projects Table">
              <thead>
                <tr>
                  <th>Project</th>
                  <th>Department</th>
                  <th>Status</th>
                  <th>Risk</th>
                  <th>Progress</th>
                  <th>Budget</th>
                  <th>Lead Officer</th>
                </tr>
              </thead>
              <tbody>
                {filtered.length === 0 ? (
                  <tr>
                    <td colSpan={7} style={{ textAlign: 'center', padding: '48px 20px', color: '#94A3B8' }}>
                      <FolderKanban size={36} style={{ margin: '0 auto 12px', display: 'block', color: '#CBD5E1' }} />
                      No projects found matching your filters.
                    </td>
                  </tr>
                ) : (
                  filtered.map((project) => (
                    <tr
                      key={project.id}
                      onClick={() => showToast(`Viewing: ${project.name}`, 'info')}
                      className="clickable-row"
                    >
                      <td>
                        <div className="project-name-cell">{project.name}</div>
                        <div style={{ fontSize: '0.74rem', color: '#94A3B8', marginTop: '2px' }}>{project.id}</div>
                      </td>
                      <td style={{ color: '#64748B', fontSize: '0.83rem', maxWidth: '180px' }}>{project.department}</td>
                      <td>
                        <span className={`status-pill ${getStatusClass(project.status)}`}>
                          {project.status}
                        </span>
                      </td>
                      <td>
                        <span className={`risk-badge ${getRiskClass(project.risk)}`}>
                          <span className="risk-dot"></span>
                          <span>{project.risk}</span>
                        </span>
                      </td>
                      <td>
                        <div className="progress-container">
                          <div className="progress-track">
                            <div
                              className="progress-fill"
                              style={{
                                width: `${project.progress}%`,
                                backgroundColor: getProgressColor(project.progress)
                              }}
                            />
                          </div>
                          <span className="progress-text">{project.progress}%</span>
                        </div>
                      </td>
                      <td style={{ fontSize: '0.83rem', color: '#475569', fontWeight: 500 }}>{project.budget}</td>
                      <td style={{ fontSize: '0.83rem', color: '#64748B' }}>{project.lead}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <AddProjectModal
        isOpen={showAddModal}
        onClose={() => setShowAddModal(false)}
        onAddProject={onAddProject}
      />
    </>
  );
};

export default Projects;
