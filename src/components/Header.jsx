import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Search, 
  Bell, 
  ChevronDown, 
  Menu, 
  User, 
  Settings, 
  LogOut, 
  FolderKanban, 
  AlertCircle 
} from 'lucide-react';
import { sampleNotifications } from '../data/mockData';
import { useToast } from './Toast';

export const Header = ({ onToggleSidebar, projects = [], alerts = [] }) => {
  const navigate = useNavigate();
  const { showToast } = useToast();

  const [searchQuery, setSearchQuery] = useState('');
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);

  const searchRef = useRef(null);
  const notifRef = useRef(null);
  const userMenuRef = useRef(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSearchResults(false);
      }
      if (notifRef.current && !notifRef.current.contains(event.target)) {
        setShowNotifications(false);
      }
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setShowUserMenu(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Filter projects and alerts based on search query
  const filteredProjects = searchQuery.trim() === '' ? [] : projects.filter(p => 
    p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.department.toLowerCase().includes(searchQuery.toLowerCase())
  ).slice(0, 4);

  const filteredAlerts = searchQuery.trim() === '' ? [] : alerts.filter(a =>
    a.project.toLowerCase().includes(searchQuery.toLowerCase()) ||
    a.riskLevel.toLowerCase().includes(searchQuery.toLowerCase()) ||
    a.category?.toLowerCase().includes(searchQuery.toLowerCase())
  ).slice(0, 4);

  const hasResults = filteredProjects.length > 0 || filteredAlerts.length > 0;

  const handleSelectProject = (project) => {
    setSearchQuery('');
    setShowSearchResults(false);
    navigate('/projects');
    showToast(`Navigated to ${project.name}`, 'info');
  };

  const handleSelectAlert = (alert) => {
    setSearchQuery('');
    setShowSearchResults(false);
    navigate('/alerts');
    showToast(`Alert selected: ${alert.project}`, 'info');
  };

  const handleNotificationClick = () => {
    setShowNotifications(false);
    navigate('/alerts');
    showToast('Navigated to Alerts view', 'info');
  };

  const handleMenuAction = (actionName) => {
    setShowUserMenu(false);
    if (actionName === 'logout') {
      showToast('Demo mode: User session is managed locally in prototype', 'info');
    } else {
      showToast(`${actionName} opened (Demo mode)`, 'info');
    }
  };

  return (
    <header className="header" role="banner">
      <div className="header-left">
        <button 
          className="mobile-menu-btn" 
          onClick={onToggleSidebar}
          aria-label="Toggle navigation menu"
        >
          <Menu size={22} />
        </button>

        {/* Search Bar with live preview */}
        <div className="search-container" ref={searchRef}>
          <div className="search-box">
            <Search size={18} color="#94A3B8" />
            <input 
              type="text" 
              className="search-input" 
              placeholder="Search projects, reports..." 
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setShowSearchResults(true);
              }}
              onFocus={() => setShowSearchResults(true)}
              aria-label="Search projects, reports"
            />
          </div>

          {/* Search Dropdown */}
          {showSearchResults && searchQuery.trim().length > 0 && (
            <div className="search-results-dropdown">
              {hasResults ? (
                <>
                  {filteredProjects.length > 0 && (
                    <div>
                      <div className="search-group-title">Projects</div>
                      {filteredProjects.map((p) => (
                        <div 
                          key={p.id} 
                          className="search-result-item"
                          onClick={() => handleSelectProject(p)}
                        >
                          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <FolderKanban size={16} color="#1468D8" />
                            <span className="search-result-name">{p.name}</span>
                          </div>
                          <span className="search-result-meta">{p.risk} Risk</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {filteredAlerts.length > 0 && (
                    <div style={{ marginTop: '8px' }}>
                      <div className="search-group-title">Alerts</div>
                      {filteredAlerts.map((a) => (
                        <div 
                          key={a.id} 
                          className="search-result-item"
                          onClick={() => handleSelectAlert(a)}
                        >
                          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <AlertCircle size={16} color={a.riskLevel === 'High' ? '#E53935' : '#F59E0B'} />
                            <span className="search-result-name">{a.project}</span>
                          </div>
                          <span className="search-result-meta">{a.riskLevel}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <div style={{ padding: '16px 12px', textAlign: 'center', fontSize: '0.85rem', color: '#64748B' }}>
                  No matching projects or alerts found for "{searchQuery}"
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="header-right">
        {/* Notifications Bell */}
        <div style={{ position: 'relative' }} ref={notifRef}>
          <button 
            className="header-icon-btn" 
            onClick={() => setShowNotifications(!showNotifications)}
            aria-label="Notifications - 3 unread"
          >
            <Bell size={20} />
            <span className="header-badge">3</span>
          </button>

          {showNotifications && (
            <div 
              className="dropdown-menu notif-dropdown"
              style={{ 
                right: 0, 
                left: 'auto',
                maxWidth: 'min(320px, calc(100vw - 16px))'
              }}
            >
              <div className="dropdown-header">
                Notifications (3 New)
              </div>
              {sampleNotifications.map((notif) => (
                <div 
                  key={notif.id} 
                  className={`notif-item ${notif.unread ? 'unread' : ''}`}
                  onClick={handleNotificationClick}
                >
                  <div className="notif-title">{notif.title}</div>
                  <div className="notif-detail">{notif.detail}</div>
                  <div className="notif-time">{notif.time}</div>
                </div>
              ))}
              <div style={{ padding: '8px', textAlign: 'center' }}>
                <button 
                  style={{ fontSize: '0.8rem', color: '#1468D8', fontWeight: 600 }}
                  onClick={handleNotificationClick}
                >
                  View all alerts →
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Government Profile / Menu */}
        <div style={{ position: 'relative' }} ref={userMenuRef}>
          <button 
            className="user-profile-btn" 
            onClick={() => setShowUserMenu(!showUserMenu)}
            aria-label="User profile menu"
          >
            <div className="user-avatar-circle">
              <User size={18} />
            </div>
            <span className="user-label">Government</span>
            <ChevronDown size={16} color="#64748B" />
          </button>

          {showUserMenu && (
            <div className="dropdown-menu">
              <div className="dropdown-header">
                Signed in as Government Admin
              </div>
              <button 
                className="dropdown-item" 
                onClick={() => handleMenuAction('Profile')}
              >
                <User size={16} color="#64748B" />
                <span>Profile</span>
              </button>
              <button 
                className="dropdown-item" 
                onClick={() => handleMenuAction('Settings')}
              >
                <Settings size={16} color="#64748B" />
                <span>Settings</span>
              </button>
              <div style={{ height: '1px', background: '#EDF2F7', margin: '4px 0' }}></div>
              <button 
                className="dropdown-item" 
                style={{ color: '#E53935' }}
                onClick={() => handleMenuAction('logout')}
              >
                <LogOut size={16} color="#E53935" />
                <span>Logout</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
