import React, { useState, useMemo } from 'react';
import { Search, X, Users as UsersIcon, Mail, Phone, Shield, FolderKanban } from 'lucide-react';
import { initialUsers } from '../data/mockData';
import { useToast } from '../components/Toast';

const getStatusClass = (status) => {
  switch (status?.toLowerCase()) {
    case 'active': return 'status-active';
    case 'on leave': return 'status-review';
    case 'inactive': return '';
    default: return '';
  }
};

const getInitials = (name) => {
  return name
    .split(' ')
    .filter(n => !n.startsWith('Col.') && !n.startsWith('Dr.') && !n.startsWith('Smt.'))
    .slice(0, 2)
    .map(n => n[0])
    .join('')
    .toUpperCase();
};

const avatarColors = [
  '#1468D8', '#16A06A', '#673AB7', '#E53935', '#F59E0B', '#0891B2', '#7C3AED', '#059669'
];

const UserDetailModal = ({ user, onClose }) => {
  if (!user) return null;
  const colorIdx = user.id ? parseInt(user.id.replace('USR-', '')) - 1 : 0;
  const bgColor = avatarColors[colorIdx % avatarColors.length];

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2 className="modal-title">User Details</h2>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close dialog">
            <X size={18} />
          </button>
        </div>
        <div className="modal-body">
          {/* User Avatar + Name Header */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px', padding: '16px', background: '#F8FAFC', borderRadius: '10px', border: '1px solid #E2E8F0' }}>
            <div style={{
              width: '54px', height: '54px', borderRadius: '50%',
              background: bgColor, color: '#fff',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '1.1rem', fontWeight: 800, flexShrink: 0
            }}>
              {getInitials(user.name)}
            </div>
            <div>
              <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#071D3A' }}>{user.name}</div>
              <div style={{ fontSize: '0.84rem', color: '#64748B' }}>{user.role}</div>
              <span className={`status-pill ${getStatusClass(user.status)}`} style={{ marginTop: '4px', display: 'inline-block' }}>
                {user.status}
              </span>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
            {[
              { icon: Mail, label: 'Email', value: user.email },
              { icon: Phone, label: 'Phone', value: user.phone },
              { icon: UsersIcon, label: 'Department', value: user.department },
              { icon: Shield, label: 'Security Clearance', value: user.clearance },
              { icon: FolderKanban, label: 'Assigned Projects', value: `${user.assignedProjects} Projects` },
              { icon: Shield, label: 'User ID', value: user.id },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} style={{ padding: '12px', background: '#F8FAFC', borderRadius: '8px', border: '1px solid #EDF2F7' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.72rem', fontWeight: 700, color: '#94A3B8', textTransform: 'uppercase', marginBottom: '4px' }}>
                  <Icon size={12} /> {label}
                </div>
                <div style={{ fontSize: '0.86rem', fontWeight: 600, color: '#1E293B', wordBreak: 'break-all' }}>{value}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="modal-footer">
          <button className="btn-secondary" onClick={onClose}>Close</button>
          <button className="btn-primary" onClick={onClose}>Send Message (Demo)</button>
        </div>
      </div>
    </div>
  );
};

const Users = () => {
  const { showToast } = useToast();
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [selectedUser, setSelectedUser] = useState(null);

  const statusOptions = ['All', 'Active', 'On Leave', 'Inactive'];

  const filtered = useMemo(() => {
    return initialUsers.filter((u) => {
      const matchesSearch =
        searchQuery.trim() === '' ||
        u.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        u.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
        u.role.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesStatus = statusFilter === 'All' || u.status === statusFilter;
      return matchesSearch && matchesStatus;
    });
  }, [searchQuery, statusFilter]);

  const handleViewUser = (user) => {
    setSelectedUser(user);
    showToast(`Viewing: ${user.name}`, 'info');
  };

  return (
    <>
      <div className="page-content">
        <div className="dashboard-top">
          <div>
            <h2 className="page-title">Users</h2>
            <p className="page-subtitle">Manage government officers and project stakeholders.</p>
          </div>
          <div style={{ background: '#F1F5F9', padding: '8px 16px', borderRadius: '8px', fontSize: '0.86rem', color: '#64748B', fontWeight: 500 }}>
            Total: <strong style={{ color: '#071D3A' }}>{initialUsers.length}</strong> officers registered
          </div>
        </div>

        {/* Toolbar */}
        <div className="dashboard-card" style={{ padding: '16px 20px', marginBottom: '20px' }}>
          <div className="toolbar-container" style={{ marginBottom: 0 }}>
            <div style={{ position: 'relative', flex: 1, maxWidth: '380px' }}>
              <div className="search-box">
                <Search size={17} color="#94A3B8" />
                <input
                  type="text"
                  className="search-input"
                  placeholder="Search by name, department, role…"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  aria-label="Search users"
                />
              </div>
            </div>
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
          </div>
        </div>

        {/* Users Table */}
        <div className="dashboard-card" style={{ padding: 0, overflow: 'hidden' }}>
          <div className="table-responsive">
            <table className="custom-table" role="table" aria-label="Users Table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Department</th>
                  <th>Role</th>
                  <th>Security Clearance</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {filtered.length === 0 ? (
                  <tr>
                    <td colSpan={6} style={{ textAlign: 'center', padding: '48px 20px', color: '#94A3B8' }}>
                      <UsersIcon size={36} style={{ margin: '0 auto 12px', display: 'block', color: '#CBD5E1' }} />
                      No users found.
                    </td>
                  </tr>
                ) : (
                  filtered.map((user, idx) => {
                    const bgColor = avatarColors[idx % avatarColors.length];
                    return (
                      <tr key={user.id}>
                        <td>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <div style={{
                              width: '34px', height: '34px', borderRadius: '50%',
                              background: bgColor, color: '#fff',
                              display: 'flex', alignItems: 'center', justifyContent: 'center',
                              fontSize: '0.78rem', fontWeight: 700, flexShrink: 0
                            }}>
                              {getInitials(user.name)}
                            </div>
                            <div>
                              <div className="project-name-cell" style={{ fontSize: '0.87rem' }}>{user.name}</div>
                              <div style={{ fontSize: '0.72rem', color: '#94A3B8' }}>{user.email}</div>
                            </div>
                          </div>
                        </td>
                        <td style={{ fontSize: '0.82rem', color: '#64748B', maxWidth: '180px' }}>{user.department}</td>
                        <td style={{ fontSize: '0.83rem', color: '#475569', fontWeight: 500 }}>{user.role}</td>
                        <td style={{ fontSize: '0.82rem', color: '#475569' }}>{user.clearance}</td>
                        <td>
                          <span className={`status-pill ${getStatusClass(user.status)}`}>{user.status}</span>
                        </td>
                        <td>
                          <button
                            className="btn-primary"
                            style={{ padding: '5px 12px', fontSize: '0.78rem' }}
                            onClick={() => handleViewUser(user)}
                          >
                            View Details
                          </button>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {selectedUser && (
        <UserDetailModal user={selectedUser} onClose={() => setSelectedUser(null)} />
      )}
    </>
  );
};

export default Users;
