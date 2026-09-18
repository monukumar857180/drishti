import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Home, 
  FileText, 
  AlertTriangle, 
  BarChart2, 
  Users, 
  X 
} from 'lucide-react';
import { AshokaEmblem } from '../assets/Emblem';

const navItems = [
  { name: 'Dashboard', path: '/', icon: Home },
  { name: 'Projects', path: '/projects', icon: FileText },
  { name: 'Alerts', path: '/alerts', icon: AlertTriangle, badge: '3' },
  { name: 'Reports', path: '/reports', icon: BarChart2 },
  { name: 'Users', path: '/users', icon: Users }
];

export const Sidebar = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div 
          className="sidebar-backdrop" 
          onClick={onClose} 
          aria-hidden="true" 
        />
      )}

      <aside className={`sidebar ${isOpen ? 'mobile-open' : ''}`} aria-label="Main Navigation">
        <div className="sidebar-top">
          {/* Mobile close button */}
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '8px' }}>
            <button 
              className="mobile-menu-btn"
              onClick={onClose}
              style={{ color: '#94A3B8' }}
              aria-label="Close navigation sidebar"
            >
              <X size={20} />
            </button>
          </div>

          {/* Emblem & Branding matching reference */}
          <div className="brand-section">
            <div className="brand-emblem">
              <AshokaEmblem width={52} height={64} color="#FFFFFF" />
            </div>
            <h1 className="brand-title">DRISHTI</h1>
            <p className="brand-subtitle">Transparent Governance for a Better India</p>
          </div>

          {/* Navigation Links */}
          <nav>
            <ul className="nav-list">
              {navItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <li key={item.name}>
                    <NavLink
                      to={item.path}
                      end={item.path === '/'}
                      className={({ isActive }) => 
                        `nav-item-link ${isActive ? 'active' : ''}`
                      }
                      onClick={onClose}
                    >
                      <div className="nav-link-content">
                        <IconComponent size={19} strokeWidth={2} />
                        <span>{item.name}</span>
                      </div>
                      {item.badge && (
                        <span className="nav-badge">{item.badge}</span>
                      )}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        {/* Bottom Motto & Indian Tricolor line matching reference */}
        <div className="sidebar-bottom">
          <div className="sidebar-motto-title">Safer Projects</div>
          <div className="sidebar-motto-sub">Stronger India</div>
          <div className="tricolor-strip">
            <div className="tricolor-saffron"></div>
            <div className="tricolor-white"></div>
            <div className="tricolor-green"></div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
