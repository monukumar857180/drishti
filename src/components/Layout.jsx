import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { Header } from './Header';

export const Layout = ({ projects, alerts, onAddProject }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="app-container">
      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />
      <div className="main-wrapper">
        <Header
          onToggleSidebar={() => setSidebarOpen(true)}
          projects={projects}
          alerts={alerts}
        />
        <main>
          <Outlet />
        </main>
        <footer className="footer">
          <span>© 2026 DRISHTI. Government of India. All rights reserved.</span>
          <div className="footer-links">
            <a href="#" className="footer-link">Privacy Policy</a>
            <span className="footer-sep">|</span>
            <a href="#" className="footer-link">Terms of Use</a>
            <span className="footer-sep">|</span>
            <a href="#" className="footer-link">Help</a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Layout;
