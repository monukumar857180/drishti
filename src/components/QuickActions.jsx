import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, FileText, Bell, Users } from 'lucide-react';

export const QuickActions = ({ onOpenAddProject }) => {
  const navigate = useNavigate();

  return (
    <div className="quick-actions-grid">
      {/* 1. Add Project */}
      <button 
        className="quick-action-btn action-card-blue"
        onClick={onOpenAddProject}
        aria-label="Add Project"
      >
        <div className="action-icon-circle circle-blue">
          <Plus size={22} strokeWidth={2.5} />
        </div>
        <span className="action-label">Add Project</span>
      </button>

      {/* 2. View Reports */}
      <button 
        className="quick-action-btn action-card-green"
        onClick={() => navigate('/reports')}
        aria-label="View Reports"
      >
        <div className="action-icon-circle circle-green">
          <FileText size={20} strokeWidth={2.2} />
        </div>
        <span className="action-label">View Reports</span>
      </button>

      {/* 3. Check Alerts */}
      <button 
        className="quick-action-btn action-card-yellow"
        onClick={() => navigate('/alerts')}
        aria-label="Check Alerts"
      >
        <div className="action-icon-circle circle-yellow">
          <Bell size={20} strokeWidth={2.2} />
        </div>
        <span className="action-label">Check Alerts</span>
      </button>

      {/* 4. Manage Users */}
      <button 
        className="quick-action-btn action-card-purple"
        onClick={() => navigate('/users')}
        aria-label="Manage Users"
      >
        <div className="action-icon-circle circle-purple">
          <Users size={20} strokeWidth={2.2} />
        </div>
        <span className="action-label">Manage Users</span>
      </button>
    </div>
  );
};

export default QuickActions;
