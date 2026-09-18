import React, { useState } from 'react';
import { X, PlusCircle } from 'lucide-react';
import { useToast } from './Toast';

export const AddProjectModal = ({ isOpen, onClose, onAddProject }) => {
  const { showToast } = useToast();

  const [formData, setFormData] = useState({
    name: '',
    department: 'Ministry of Jal Shakti',
    risk: 'Medium',
    status: 'Active',
    progress: 50,
    budget: '₹ 1,000 Cr',
    targetDate: '31 Dec 2027',
    lead: 'Executive Engineer'
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'progress' ? Number(value) : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      showToast('Please enter a valid project name', 'alert');
      return;
    }

    const newProject = {
      id: `PRJ-${Date.now().toString().slice(-4)}`,
      name: formData.name.trim(),
      department: formData.department,
      risk: formData.risk,
      status: formData.status,
      progress: Number(formData.progress),
      budget: formData.budget || '₹ 500 Cr',
      targetDate: formData.targetDate || '31 Dec 2027',
      lead: formData.lead || 'Project Director'
    };

    onAddProject(newProject);
    showToast('Project added successfully', 'success');
    onClose();

    // Reset form
    setFormData({
      name: '',
      department: 'Ministry of Jal Shakti',
      risk: 'Medium',
      status: 'Active',
      progress: 50,
      budget: '₹ 1,000 Cr',
      targetDate: '31 Dec 2027',
      lead: 'Executive Engineer'
    });
  };

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <PlusCircle size={20} color="#1468D8" />
            <h2 className="modal-title">Add New Project</h2>
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close dialog">
            <X size={18} />
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="modal-body">
            <div className="form-group">
              <label className="form-label" htmlFor="projectName">Project Name *</label>
              <input
                id="projectName"
                name="name"
                type="text"
                className="form-input"
                placeholder="e.g. Clean Ganga Treatment Plant Phase 4"
                value={formData.name}
                onChange={handleChange}
                required
                autoFocus
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="projectDept">Department / Ministry</label>
              <select
                id="projectDept"
                name="department"
                className="form-select"
                value={formData.department}
                onChange={handleChange}
              >
                <option value="Ministry of Jal Shakti">Ministry of Jal Shakti</option>
                <option value="Ministry of Housing and Urban Affairs">Ministry of Housing and Urban Affairs</option>
                <option value="Ministry of Road Transport and Highways">Ministry of Road Transport and Highways</option>
                <option value="Ministry of Education">Ministry of Education</option>
                <option value="Ministry of Health and Family Welfare">Ministry of Health and Family Welfare</option>
                <option value="Ministry of New and Renewable Energy">Ministry of New and Renewable Energy</option>
                <option value="Ministry of Railways">Ministry of Railways</option>
                <option value="Ministry of Rural Development">Ministry of Rural Development</option>
              </select>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label className="form-label" htmlFor="projectRisk">Risk Level</label>
                <select
                  id="projectRisk"
                  name="risk"
                  className="form-select"
                  value={formData.risk}
                  onChange={handleChange}
                >
                  <option value="Low">Low Risk</option>
                  <option value="Medium">Medium Risk</option>
                  <option value="High">High Risk</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="projectStatus">Initial Status</label>
                <select
                  id="projectStatus"
                  name="status"
                  className="form-select"
                  value={formData.status}
                  onChange={handleChange}
                >
                  <option value="Active">Active</option>
                  <option value="Planning">Planning</option>
                  <option value="Under Review">Under Review</option>
                  <option value="Completed">Completed</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                <label className="form-label" htmlFor="projectProgress" style={{ margin: 0 }}>Progress Completion</label>
                <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#1468D8' }}>{formData.progress}%</span>
              </div>
              <input
                id="projectProgress"
                name="progress"
                type="range"
                min="0"
                max="100"
                style={{ width: '100%', cursor: 'pointer', accentColor: '#1468D8' }}
                value={formData.progress}
                onChange={handleChange}
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label className="form-label" htmlFor="projectBudget">Budget Allocated</label>
                <input
                  id="projectBudget"
                  name="budget"
                  type="text"
                  className="form-input"
                  placeholder="e.g. ₹ 750 Cr"
                  value={formData.budget}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="projectLead">Project Officer</label>
                <input
                  id="projectLead"
                  name="lead"
                  type="text"
                  className="form-input"
                  placeholder="e.g. Smt. Neha Joshi"
                  value={formData.lead}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <div className="modal-footer">
            <button type="button" className="btn-secondary" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="btn-primary">
              Save Project
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProjectModal;
