// Mock data for DRISHTI Government Project Monitoring Dashboard

export const initialStats = {
  totalProjects: 248,
  activeProjects: 186,
  highRiskProjects: 24,
  resolvedCases: 112,
  currentDate: "Thu, 18 Sep 2026"
};

export const initialAlerts = [
  {
    id: "ALT-101",
    project: "Rural Water Supply Scheme",
    riskLevel: "High",
    date: "18 Sep 2026",
    department: "Ministry of Jal Shakti",
    category: "Supply Chain & Pipeline Delay",
    description: "Groundwater pipeline work in Zone 4 delayed by 4 weeks due to vendor supply stoppage. Requires immediate inter-ministerial clearance.",
    assignedOfficer: "Rajesh Varma, Chief Engineer",
    status: "Pending Action"
  },
  {
    id: "ALT-102",
    project: "Smart City Infrastructure",
    riskLevel: "Medium",
    date: "17 Sep 2026",
    department: "Ministry of Housing and Urban Affairs",
    category: "Civic Traffic Rerouting",
    description: "Fiber-optic laying and surveillance camera installation causing traffic congestion in central commercial district.",
    assignedOfficer: "Priya Sundaram, Director Urban Works",
    status: "Under Review"
  },
  {
    id: "ALT-103",
    project: "National Highway Expansion",
    riskLevel: "High",
    date: "16 Sep 2026",
    department: "Ministry of Road Transport and Highways",
    category: "Land Acquisition Dispute",
    description: "Stretch km 142-158 facing land demarcation arbitration. Construction machinery idle for 5 consecutive days.",
    assignedOfficer: "Col. Sanjeev Nair, NHAI Project Head",
    status: "Urgent Escalation"
  },
  {
    id: "ALT-104",
    project: "Digital Education Initiative",
    riskLevel: "Medium",
    date: "15 Sep 2026",
    department: "Ministry of Education",
    category: "Hardware Distribution",
    description: "Tablet dispatch delayed for 142 rural secondary schools across 3 eastern districts. Quality check ongoing.",
    assignedOfficer: "Ananya Mukherjee, Joint Secretary",
    status: "In Progress"
  },
  {
    id: "ALT-105",
    project: "Rural Health Center Upgrade",
    riskLevel: "Low",
    date: "14 Sep 2026",
    department: "Ministry of Health and Family Welfare",
    category: "Equipment Delivery",
    description: "Ultrasound and diagnostic equipment arriving next Monday. Civil room preparation 98% completed.",
    assignedOfficer: "Dr. Arvind Shinde, Health Officer",
    status: "Scheduled"
  },
  {
    id: "ALT-106",
    project: "Solar Energy Grid Phase II",
    riskLevel: "High",
    date: "13 Sep 2026",
    department: "Ministry of New and Renewable Energy",
    category: "Grid Synchronization",
    description: "Substation transformer overload observed during preliminary load testing. Power evacuation halted.",
    assignedOfficer: "Kavita Rao, Principal Grid Engineer",
    status: "Technical Inspection"
  },
  {
    id: "ALT-107",
    project: "Dedicated Freight Corridor",
    riskLevel: "Medium",
    date: "12 Sep 2026",
    department: "Ministry of Railways",
    category: "Track Alignment",
    description: "Soil stabilization needed along 12 km section following monsoon rains. Budget reallocation requested.",
    assignedOfficer: "Vikas Sharma, Divisional Railway Manager",
    status: "Review Pending"
  },
  {
    id: "ALT-108",
    project: "Coastal Mangrove Restoration",
    riskLevel: "Low",
    date: "11 Sep 2026",
    department: "Ministry of Environment, Forest & Climate Change",
    category: "Seedling Nursery",
    description: "Sapling survival rate exceeds target by 14%. Second phase planting schedule confirmed for next month.",
    assignedOfficer: "Sunita Das, Conservator of Forests",
    status: "On Track"
  }
];

export const initialProjects = [
  {
    id: "PRJ-001",
    name: "Rural Water Supply Scheme",
    department: "Ministry of Jal Shakti",
    status: "Active",
    risk: "High",
    progress: 68,
    budget: "₹ 1,450 Cr",
    targetDate: "31 Dec 2026",
    lead: "Rajesh Varma"
  },
  {
    id: "PRJ-002",
    name: "Smart City Infrastructure",
    department: "Ministry of Housing and Urban Affairs",
    status: "Active",
    risk: "Medium",
    progress: 82,
    budget: "₹ 2,200 Cr",
    targetDate: "15 Mar 2027",
    lead: "Priya Sundaram"
  },
  {
    id: "PRJ-003",
    name: "National Highway Expansion",
    department: "Ministry of Road Transport and Highways",
    status: "Active",
    risk: "High",
    progress: 45,
    budget: "₹ 4,800 Cr",
    targetDate: "30 Jun 2027",
    lead: "Col. Sanjeev Nair"
  },
  {
    id: "PRJ-004",
    name: "Digital Education Initiative",
    department: "Ministry of Education",
    status: "Active",
    risk: "Medium",
    progress: 74,
    budget: "₹ 950 Cr",
    targetDate: "28 Feb 2027",
    lead: "Ananya Mukherjee"
  },
  {
    id: "PRJ-005",
    name: "Rural Health Center Upgrade",
    department: "Ministry of Health and Family Welfare",
    status: "Active",
    risk: "Low",
    progress: 92,
    budget: "₹ 620 Cr",
    targetDate: "15 Nov 2026",
    lead: "Dr. Arvind Shinde"
  },
  {
    id: "PRJ-006",
    name: "Solar Energy Grid Phase II",
    department: "Ministry of New and Renewable Energy",
    status: "Under Review",
    risk: "High",
    progress: 58,
    budget: "₹ 1,850 Cr",
    targetDate: "10 Jan 2027",
    lead: "Kavita Rao"
  },
  {
    id: "PRJ-007",
    name: "Dedicated Freight Corridor",
    department: "Ministry of Railways",
    status: "Active",
    risk: "Medium",
    progress: 63,
    budget: "₹ 8,100 Cr",
    targetDate: "31 Dec 2027",
    lead: "Vikas Sharma"
  },
  {
    id: "PRJ-008",
    name: "PM Gram Sadak Connectivity",
    department: "Ministry of Rural Development",
    status: "Completed",
    risk: "Low",
    progress: 100,
    budget: "₹ 3,400 Cr",
    targetDate: "01 Aug 2026",
    lead: "Deepak Chauhan"
  },
  {
    id: "PRJ-009",
    name: "Deep Ocean Exploration Mission",
    department: "Ministry of Earth Sciences",
    status: "Planning",
    risk: "Low",
    progress: 25,
    budget: "₹ 1,120 Cr",
    targetDate: "18 Sep 2028",
    lead: "Dr. Madhavan Kutty"
  }
];

export const initialReports = [
  {
    id: "REP-01",
    title: "Project Status Report",
    type: "Executive Summary",
    frequency: "Weekly",
    lastUpdated: "18 Sep 2026",
    size: "2.4 MB",
    description: "Consolidated health metrics, milestone progression, and budget utilization rates across 248 nationwide infrastructure projects.",
    highlights: [
      "186 projects currently active and advancing on schedule",
      "Overall national expenditure efficiency at 91.4%",
      "22 critical milestones successfully passed in Q3 2026"
    ]
  },
  {
    id: "REP-02",
    title: "Risk Analysis Report",
    type: "Risk & Mitigation",
    frequency: "Bi-weekly",
    lastUpdated: "17 Sep 2026",
    size: "3.1 MB",
    description: "Comprehensive risk matrix analyzing 24 high-risk projects, procurement bottlenecks, land clearances, and mitigation protocols.",
    highlights: [
      "24 high-priority bottlenecks identified across 6 key ministries",
      "Environmental clearance delays reduced by 35% compared to Q2",
      "Inter-ministerial task force dispatched to 4 priority corridors"
    ]
  },
  {
    id: "REP-03",
    title: "Monthly Progress Report",
    type: "Comprehensive Audit",
    frequency: "Monthly",
    lastUpdated: "15 Sep 2026",
    size: "5.8 MB",
    description: "Detailed department-wise breakdown of physical work executed versus targets for August-September 2026 cycle.",
    highlights: [
      "Rural connectivity improved across 14,000+ gram panchayats",
      "Jal Jeevan target achieved for 1.8M additional households",
      "Smart City surveillance integration reached 88% overall target"
    ]
  },
  {
    id: "REP-04",
    title: "Resolved Cases Report",
    type: "Resolution Log",
    frequency: "Monthly",
    lastUpdated: "14 Sep 2026",
    size: "1.9 MB",
    description: "Formal audit trail and sign-off records for 112 successfully de-escalated project grievances, contractual disputes, and delays.",
    highlights: [
      "112 grievances and contractual disputes formally resolved",
      "Average de-escalation response time dropped to 3.8 business days",
      "Zero litigation disputes pending in Ministry of Jal Shakti"
    ]
  }
];

export const initialUsers = [
  {
    id: "USR-001",
    name: "Rajesh Varma",
    email: "rajesh.varma@gov.in",
    department: "Ministry of Jal Shakti",
    role: "Chief Engineer",
    status: "Active",
    phone: "+91 98100 44210",
    clearance: "Level 4 (Directorate)",
    assignedProjects: 4
  },
  {
    id: "USR-002",
    name: "Priya Sundaram",
    email: "priya.sundaram@gov.in",
    department: "Ministry of Housing and Urban Affairs",
    role: "Director Urban Works",
    status: "Active",
    phone: "+91 98231 88921",
    clearance: "Level 4 (Directorate)",
    assignedProjects: 6
  },
  {
    id: "USR-003",
    name: "Col. Sanjeev Nair",
    email: "sanjeev.nair@nhai.gov.in",
    department: "Ministry of Road Transport and Highways",
    role: "NHAI Project Head",
    status: "Active",
    phone: "+91 97411 99203",
    clearance: "Level 5 (National)",
    assignedProjects: 8
  },
  {
    id: "USR-004",
    name: "Ananya Mukherjee",
    email: "ananya.m@nic.in",
    department: "Ministry of Education",
    role: "Joint Secretary",
    status: "Active",
    phone: "+91 99014 55309",
    clearance: "Level 5 (National)",
    assignedProjects: 5
  },
  {
    id: "USR-005",
    name: "Dr. Arvind Shinde",
    email: "arvind.shinde@mohfw.gov.in",
    department: "Ministry of Health and Family Welfare",
    role: "Health Project Officer",
    status: "Active",
    phone: "+91 94230 11928",
    clearance: "Level 3 (Regional)",
    assignedProjects: 3
  },
  {
    id: "USR-006",
    name: "Kavita Rao",
    email: "kavita.rao@mnre.gov.in",
    department: "Ministry of New and Renewable Energy",
    role: "Principal Grid Engineer",
    status: "On Leave",
    phone: "+91 91234 66789",
    clearance: "Level 3 (Regional)",
    assignedProjects: 2
  },
  {
    id: "USR-007",
    name: "Vikas Sharma",
    email: "vikas.sharma@railnet.gov.in",
    department: "Ministry of Railways",
    role: "Divisional Railway Manager",
    status: "Active",
    phone: "+91 98111 22334",
    clearance: "Level 4 (Directorate)",
    assignedProjects: 7
  },
  {
    id: "USR-008",
    name: "Deepak Chauhan",
    email: "deepak.c@rural.nic.in",
    department: "Ministry of Rural Development",
    role: "Monitoring Inspector",
    status: "Inactive",
    phone: "+91 98765 43210",
    clearance: "Level 2 (Field)",
    assignedProjects: 1
  }
];

export const sampleNotifications = [
  {
    id: "NOTIF-1",
    title: "High Risk Alert: Water Supply Scheme",
    time: "10 mins ago",
    unread: true,
    detail: "Pipeline work halted in Zone 4 due to vendor dispute."
  },
  {
    id: "NOTIF-2",
    title: "Land Demarcation Escalation: NHAI",
    time: "2 hours ago",
    unread: true,
    detail: "Stretch km 142-158 requires urgent inter-agency arbitration."
  },
  {
    id: "NOTIF-3",
    title: "Quarterly Target Achieved: PMGSY",
    time: "5 hours ago",
    unread: false,
    detail: "Rural road connectivity target reached 100% completion."
  }
];
