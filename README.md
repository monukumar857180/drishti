# DRISHTI — Transparent Governance for a Better India

A modern, lightweight, frontend-only government project monitoring dashboard built with **React + Vite**.

---

## 🚀 Getting Started

### Install Dependencies
```bash
npm install
```

### Start Development Server
```bash
npm run dev
```
Opens at **http://localhost:3000**

### Build for Production
```bash
npm run build
```
Outputs to the `dist/` folder, ready for Vercel deployment.

### Preview Production Build
```bash
npm run preview
```

---

## 📁 Project Structure

```
sih/
├── public/
├── src/
│   ├── assets/
│   │   ├── Emblem.jsx          # National Emblem SVG component
│   │   └── ViksitBharat.jsx    # Viksit Bharat graphic component
│   ├── components/
│   │   ├── Sidebar.jsx         # Dark navy sidebar with nav links
│   │   ├── Header.jsx          # Search, notifications, user menu
│   │   ├── Layout.jsx          # Main layout wrapper (Outlet + Footer)
│   │   ├── StatCard.jsx        # Dashboard KPI metric cards
│   │   ├── AlertTable.jsx      # Reusable risk alert table
│   │   ├── QuickActions.jsx    # 2x2 action button grid
│   │   ├── AddProjectModal.jsx # Project creation form modal
│   │   ├── AlertDetailModal.jsx # Alert detail popover modal
│   │   └── Toast.jsx           # Lightweight toast notification system
│   ├── pages/
│   │   ├── Dashboard.jsx       # / (Home)
│   │   ├── Projects.jsx        # /projects
│   │   ├── Alerts.jsx          # /alerts
│   │   ├── Reports.jsx         # /reports
│   │   └── Users.jsx           # /users
│   ├── data/
│   │   └── mockData.js         # All static mock data
│   ├── App.jsx                 # Root Router + shared state
│   ├── main.jsx                # React entry point
│   └── index.css               # Complete design system CSS
├── index.html
├── vite.config.js
├── vercel.json                 # SPA routing for Vercel
└── package.json
```

---

## 🎨 Design System

| Token | Value |
|---|---|
| Navy | `#0B2A52` |
| Dark Navy | `#071D3A` |
| Accent Blue | `#1468D8` |
| Accent Green | `#16A06A` |
| Accent Red | `#E53935` |
| Accent Orange | `#F59E0B` |
| Accent Purple | `#673AB7` |

Font: **Inter** (Google Fonts)

---

## 📦 Tech Stack

- **React 18** — UI framework
- **Vite 5** — Dev server & build tool
- **React Router v6** — Client-side routing
- **Lucide React** — Icon library
- **Vanilla CSS** — No Tailwind, no external UI lib

---

## 🌐 Deploy to Vercel

1. Push the project to a GitHub repository
2. Import the repository into [Vercel](https://vercel.com)
3. Vercel auto-detects Vite. Use default settings.
4. Click **Deploy**

The `vercel.json` file handles SPA routing automatically.

---

## 📋 Pages & Features

| Route | Page | Features |
|---|---|---|
| `/` | Dashboard | Stats, Recent Alerts, Quick Actions |
| `/projects` | Projects | Search, Status/Risk filters, Add Project |
| `/alerts` | Alerts | High/Medium/Low filters, Alert detail modal |
| `/reports` | Reports | 4 report cards with preview modal |
| `/users` | Users | Search, status filter, user detail modal |

---

## ⚠️ Notes

- **100% frontend-only** — no backend, database, or API calls
- Data resets on page refresh (React state only)
- For production use: connect to a government API backend

---

*© 2026 DRISHTI. Government of India. All rights reserved.*
