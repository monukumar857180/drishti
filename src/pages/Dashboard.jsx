import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, FolderKanban, CheckCircle2, AlertTriangle, FileCheck2 } from 'lucide-react';
import StatCard from '../components/StatCard';
import AlertTable from '../components/AlertTable';
import QuickActions from '../components/QuickActions';
import AddProjectModal from '../components/AddProjectModal';
import AlertDetailModal from '../components/AlertDetailModal';
import { ViksitBharat } from '../assets/ViksitBharat';
import { initialStats } from '../data/mockData';

const Dashboard = ({ alerts, onAddProject }) => {
  const [showAddProject, setShowAddProject] = useState(false);
  const [selectedAlert, setSelectedAlert] = useState(null);

  return (
    <>
      <div className="page-content">
        {/* Welcome Header Row */}
        <div className="dashboard-top">
          <div>
            <h2 className="page-title">Welcome</h2>
            <p className="page-subtitle">Here's a quick overview of the projects.</p>
          </div>
          <div className="dashboard-meta-right">
            <div className="date-indicator">
              <Calendar size={16} color="#64748B" />
              <span>{initialStats.currentDate}</span>
            </div>
            <ViksitBharat />
          </div>
        </div>

        {/* Stat Cards */}
        <div className="stats-grid">
          <StatCard
            value={initialStats.totalProjects}
            label="Total Projects"
            icon={FolderKanban}
            colorVariant="blue"
          />
          <StatCard
            value={initialStats.activeProjects}
            label="Active Projects"
            icon={CheckCircle2}
            colorVariant="green"
          />
          <StatCard
            value={initialStats.highRiskProjects}
            label="High Risk Projects"
            icon={AlertTriangle}
            colorVariant="red"
          />
          <StatCard
            value={initialStats.resolvedCases}
            label="Resolved Cases"
            icon={FileCheck2}
            colorVariant="purple"
          />
        </div>

        {/* Main Content Grid: Alerts + Quick Actions */}
        <div className="dashboard-main-grid">
          {/* Recent Alerts Table */}
          <div className="dashboard-card">
            <div className="dashboard-card-header">
              <h3 className="card-title">Recent Alerts</h3>
              <Link to="/alerts" className="card-link">
                View All →
              </Link>
            </div>
            <AlertTable
              alerts={alerts}
              limit={5}
              onSelectAlert={(alert) => setSelectedAlert(alert)}
            />
          </div>

          {/* Quick Actions */}
          <div className="dashboard-card">
            <div className="dashboard-card-header">
              <h3 className="card-title">Quick Actions</h3>
            </div>
            <QuickActions onOpenAddProject={() => setShowAddProject(true)} />
          </div>
        </div>
      </div>

      {/* Add Project Modal */}
      <AddProjectModal
        isOpen={showAddProject}
        onClose={() => setShowAddProject(false)}
        onAddProject={onAddProject}
      />

      {/* Alert Detail Modal */}
      {selectedAlert && (
        <AlertDetailModal
          alert={selectedAlert}
          onClose={() => setSelectedAlert(null)}
        />
      )}
    </>
  );
};

export default Dashboard;
