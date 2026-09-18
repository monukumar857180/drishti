import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Projects from './pages/Projects';
import Alerts from './pages/Alerts';
import Reports from './pages/Reports';
import Users from './pages/Users';
import { ToastProvider } from './components/Toast';
import { initialProjects, initialAlerts } from './data/mockData';

const App = () => {
  // Shared state: projects and alerts can be mutated from Dashboard / Projects page
  const [projects, setProjects] = useState(initialProjects);
  const [alerts, setAlerts] = useState(initialAlerts);

  const handleAddProject = (newProject) => {
    setProjects((prev) => [newProject, ...prev]);
  };

  return (
    <ToastProvider>
      <BrowserRouter>
        <Routes>
          <Route
            element={
              <Layout
                projects={projects}
                alerts={alerts}
                onAddProject={handleAddProject}
              />
            }
          >
            <Route
              path="/"
              element={
                <Dashboard
                  alerts={alerts}
                  projects={projects}
                  onAddProject={handleAddProject}
                />
              }
            />
            <Route
              path="/projects"
              element={
                <Projects
                  projects={projects}
                  onAddProject={handleAddProject}
                />
              }
            />
            <Route
              path="/alerts"
              element={<Alerts alerts={alerts} />}
            />
            <Route path="/reports" element={<Reports />} />
            <Route path="/users" element={<Users />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ToastProvider>
  );
};

export default App;
