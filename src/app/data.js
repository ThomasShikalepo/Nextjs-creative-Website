/*
Websites:

- https://github.com/pmndrs/gltfjsx (GLTF JSX for 3D Models)
- https://lucide.dev/icons/ (Lucide Icons)
- https://github.com/anuraghazra/github-readme-stats (Github Readme Stats)
- https://skillicons.dev (Skill Icons to show skills)
- https://github-readme-streak-stats.herokuapp.com (Github Readme Streak Stats)

:root {
  --background: 27 27 27;
  --foreground: 225 225 225;
  --muted: 115 115 115;
  --accent: 254 254 91; #FEFE5B
}

*/

export const projectsData = [
  {
    id: 1,
    name: "Distributed Patient Management Microservices System",
    description:
      "A healthcare backend built with Java, Spring Boot, PostgreSQL, Docker, Kafka, and gRPC using a microservices architecture. The system includes Patient, Billing, Analytics, and API Gateway services, supporting inter-service communication, event-driven workflows, and scalable backend design.",
    date: "2026-03-01",
    demoLink: "https://github.com/ThomasShikalepo",
  },
  {
    id: 2,
    name: "AI Route Optimization for Newspaper Distribution",
    description:
      "A logistics optimization solution developed for a hackathon using Python, pandas, OR-Tools, and Mapbox APIs. The system cleans and analyzes real vehicle tracking data, extracts delivery stops, builds distance matrices, and generates optimized delivery routes to reduce travel distance, idle time, and fuel usage.",
    date: "2026-03-15",
    demoLink: "https://github.com/ThomasShikalepo",
  },
  {
    id: 3,
    name: "Okaluli Admin Dashboard and User Management System",
    description:
      "An admin dashboard designed to monitor platform activity, manage users, view chat history, search users by number, and present both live and historical system data. The project focuses on better data visibility, responsive design, and practical admin workflows.",
    date: "2026-03-20",
    demoLink: "https://github.com/ThomasShikalepo/okaluli_online_version",
  },
  {
    id: 4,
    name: "Immersive 3D Developer Portfolio",
    description:
      "A modern portfolio website built with Next.js, Three.js, Tailwind CSS, and interactive 3D elements to showcase projects, skills, and developer identity. The site focuses on immersive presentation, responsive design, and strong visual storytelling.",
    date: "2026-03-10",
    demoLink: "https://thomasdeon.netlify.app",
  },
  {
    id: 5,
    name: "Local AI Voice Assistant",
    description:
      "A desktop-based AI assistant project built to explore local LLMs, speech workflows, and voice interaction. The system integrates model inference, speech output, and assistant-style interaction while experimenting with practical offline AI on limited hardware.",
    date: "2026-03-19",
    demoLink: "https://github.com/ThomasShikalepo",
  },
  {
    id: 6,
    name: "Football Match Analysis Using AI and Computer Vision",
    description:
      "A computer vision project for analyzing football matches by detecting and tracking players, referees, and the ball to generate match insights. The project applies AI techniques to sports analysis and performance observation.",
    date: "2025-11-20",
    demoLink: "https://github.com/ThomasShikalepo",
  },
];

export const BtnList = [
  { label: "Home", link: "/", icon: "home", newTab: false },
  { label: "About", link: "/about", icon: "about", newTab: false },
  { label: "Projects", link: "/projects", icon: "projects", newTab: false },
  { label: "Contact", link: "/contact", icon: "contact", newTab: false },
  {
    label: "Github",
    link: "https://github.com/ThomasShikalepo",
    icon: "github",
    newTab: true,
  },
  {
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/thomas-shikalepo",
    icon: "linkedin",
    newTab: true,
  },
  {
    label: "X",
    link: "https://x.com/Thomas882289040",
    icon: "twitter",
    newTab: true,
  },
  {
    label: "Resume",
    link: "/Thomas Shikalepo - CV.pdf",
    icon: "resume",
    newTab: true,
  },
];


