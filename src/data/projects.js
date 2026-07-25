const projects = [
  {
    id: 1,

    title: "Cyber Security Job Agent",

    subtitle: "Automated Daily Cybersecurity Job Finder",

    image: "/projects/job-agent.png",

    screenshots: [
      "/projects/job-agent/ss1.png",
      "/projects/job-agent/ss2.png",
      "/projects/job-agent/ss3.png",
      "/projects/job-agent/ss4.png",
    ],

    status: "Completed",

    badge: "🤖 Security Automation",

    difficulty: "★★★★★",

    duration: "30 Hours",

    category: "Automation",

    level: "Advanced",

    highlight:
      "Developed an automated cybersecurity job aggregation system that collects jobs from multiple platforms, filters duplicate listings, and delivers daily email reports.",

    description:
      "An intelligent automation tool that searches cybersecurity jobs from multiple platforms, filters relevant roles, removes duplicates, and sends daily email notifications.",

    tech: [
      "Python",
      "Selenium",
      "BeautifulSoup",
      "Requests",
      "Pandas",
      "SMTP",
    ],

    features: [
      "Automated Job Search",
      "Email Notifications",
      "Smart Filtering",
      "Duplicate Removal",
      "CSV Report Generation",
    ],

    github:
      "https://github.com/goswamikartikgiri8-web/CyberSecurityJobAgent",

    demo: "",
  },

  {
    id: 2,

    title: "Advanced Packet Sniffer",

    subtitle: "Python & Scapy Network Analyzer",

    image: "/projects/packet-sniffer.png",

    screenshots: [
      "/projects/packet-sniffer/ss1.png",
      "/projects/packet-sniffer/ss2.png",
      "/projects/packet-sniffer/ss3.png",
      "/projects/packet-sniffer/ss4.png",
      "/projects/packet-sniffer/ss5.png",
      "/projects/packet-sniffer/ss6.png",
      "/projects/packet-sniffer/ss7.png",
    ],

    status: "Completed",

    badge: "📡 Network Analysis",

    difficulty: "★★★★☆",

    duration: "20 Hours",

    category: "Network Security",

    level: "Intermediate",

    highlight:
      "Built from scratch using Python and Scapy to capture live packets, analyze protocols, generate statistics, and export network logs for security analysis.",

    description:
      "A Python-based packet sniffer that captures and analyzes live network traffic using Scapy. It identifies protocols, records packet information, and provides real-time traffic statistics.",

    tech: [
      "Python",
      "Scapy",
      "Socket",
      "Networking",
      "Tkinter",
    ],

    features: [
      "Live Packet Capture",
      "TCP / UDP / ICMP Detection",
      "Packet Statistics",
      "Traffic Logging",
      "Real-Time Analysis",
    ],

    github:
      "https://github.com/GoswamiKartikgiri/network-packet-sniffer",

    demo: "",
  },

  {
    id: 3,

    title: "Secure Multi-Factor Authentication System",

    subtitle: "Authentication & Identity Security",

    image: "/projects/mfa.png",

    screenshots: [
      "/projects/mfa/ss1.png",
      "/projects/mfa/ss2.png",
      "/projects/mfa/ss3.png",
      "/projects/mfa/ss4.png",
      "/projects/mfa/ss5.png",
      "/projects/mfa/ss6.png",
      "/projects/mfa/ss7.png",
    ],

    status: "Completed",

    badge: "🔐 Identity Security",

    difficulty: "★★★★★",

    duration: "25 Hours",

    category: "Web Security",

    level: "Advanced",

    highlight:
      "Implemented a secure authentication workflow using Time-based One-Time Passwords (TOTP), encrypted passwords, QR code enrollment, and secure session management.",

    description:
      "A secure authentication system implementing Time-based One-Time Passwords (TOTP) to strengthen account security through multi-factor authentication.",

    tech: [
      "Python",
      "Flask",
      "SQLite",
      "PyOTP",
      "HTML",
      "CSS",
    ],

    features: [
      "User Registration",
      "Secure Login",
      "QR Code Setup",
      "TOTP Authentication",
      "Password Hashing",
      "Secure Sessions",
    ],

    github:
      "https://github.com/GoswamiKartikgiri/Secure-Multi-Factor-Authentication-System",

    demo: "",
  },
];

export default projects;