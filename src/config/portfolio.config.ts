// Portfolio Configuration - Customize everything from this single file
export const portfolioConfig = {
  // Personal Information
  personal: {
    name: "r3tract0 </>",
    title: "Bot Creator",
    tagline: "Hello, I'm r3tract0, a professional bot creator to help servers from being nuked. I also help in managing server. I am the manager of IndraX bot!",
    email: "hrishithpujari@gmail.com",
    location: "India",
    avatar: "/src/assets/r3tract0.png"
  },

  // SEO & Meta
  seo: {
    title: "r3tract0 </>",
    description: "Professional bot creator creating modern applications. View my portfolio showcasing recent projects and technical expertise.",
    keywords: ["bot creator", "discord.py", "python", "node.js", "discord bots", "automation"],
    ogImage: "/og-image.png"
  },

  // Theme & Design
  theme: {
    primaryColor: "120 100% 50%", // Terminal green
    accentColor: "0 0% 100%", // White
    backgroundColor: "0 0% 4%", // Deep black
    terminalColors: {
      window: "0 0% 12%",
      border: "0 0% 20%",
      header: "0 0% 8%"
    },
    animations: {
      typingSpeed: 50,
      staggerDelay: 0.1,
      transitionDuration: 300,
      hoverScale: 1.05
    }
  },

  // Navigation
  navigation: {
    showScrollProgress: true,
    smoothScroll: true,
    sections: ["about", "skills", "projects", "contact"]
  },

  // Skills Configuration
  skills: [
    { name: "React", category: "Frontend", level: 95 },
    { name: "TypeScript", category: "Language", level: 90 },
    { name: "Node.js", category: "Backend", level: 85 },
    { name: "Python", category: "Language", level: 80 },
    { name: "Databases", category: "Backend", level: 68 },
    { name: "UI/UX", category: "Design", level: 95 },
    { name: "Infrastructure", category: "DevOps", level: 94 },
    { name: "DevOps", category: "DevOps", level: 70 }
  ],

  // Projects Configuration
  projects: [
    {
      name: "Leviathan",
      year: "2026",
      description: "An antinuke discord bot, with many other features.",
      tags: ["Anti-Wizz", "Discord", "antinuke"],
      status: "production",
      featured: true,
      links: {
        github: "https://dsc.gg/botleviathan",
        live: "https://dsc.gg/botleviathan"
      }
    },
    {
      name: "Lex",
      year: "2026", 
      description: "A comprehensive development platform and community hub for programmers and coders.",
      tags: ["Nodejs", "Antinuke", "WIP"],
      status: "production",
      featured: true,
      links: {
        github: "https://dsc.gg/rynxsupport",
        live: "https://dsc.gg/rynxsupport"
      }
    },
    ],

  // Social Links
  social: {
    github: "https://github.com/swagchintu09",
    linkedin: "https://dsc.gg/rynxsupport",
    twitter: "https://dsc.gg/rynxsupport",
    youtube: "https://youtube.com/@aerox-devs?si=PfSlKrjWD_pV2SXb",
    email: "swagchintu09@gmail.com"
  },

  // Content Sections
  content: {
    about: {
      title: "About Me",
      paragraphs: [
        "I am a dedicated bot creator with expertise in creating efficient, user-friendly applications. I focus on delivering high-quality solutions that meet business requirements and exceed user expectations.",
        "I stay current with industry trends and best practices, continuously expanding my technical skills to provide the most effective solutions for each project."
      ],
      availability: "Currently available for new projects"
    },
    contact: {
      title: "Get In Touch",
      description: "I am always interested in discussing new opportunities and projects. Feel free to reach out to explore how we can work together.",
      cta: "Thank you for visiting my portfolio!"
    }
  },

  // Feature Flags
  features: {
    particles: true,
    matrixRain: true,
    soundEffects: false,
    darkMode: true, // Always dark for terminal theme
    analytics: false,
    showCodeButtons: false // Toggle to show/hide code buttons in projects
  }
};
