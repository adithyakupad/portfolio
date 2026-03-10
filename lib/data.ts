export const siteData = {
  name: "Adithya Upadhyayula",
  shortName: "Adithya",
  school: "Northview High School",
  gradYear: "2026",
  heroText:
    "I like working on projects that combine creativity and precision, especially when there is a clear objective or practical application. I enjoy pushing myself physically and participating in sports to keep active outside of school. In addition, I love music as a creative outlet and a means of relaxation. I enjoy striking a balance between staying motivated and giving myself time to think, whether I'm playing sports, listening to music, or brainstorming new ideas.",
  heroVision:
    "As a future medical professional, I aim to understand why health risks don't affect everyone equally and why systems often wait too long to act on those differences. I want to connect scientific insight with how decisions are actually made so early intervention and personalization are built into care, not treated as special cases.",
  quickBio:
    "I'm currently a student at Northview High School (Class of 2026) interested in medicine, biomedical research, and computational systems. Much of my work sits at the intersection of research and implementation. I've worked on coronary artery disease analysis in the Cardiovascular Fluid Mechanics Lab at Georgia Tech, studied ALS-associated mutations through structural bioinformatics, and helped launch community initiatives like Medipolitan and VT Seva. I'm especially interested in how we detect disease earlier, understand biological variation more deeply, and build systems that actually deliver care in the real world.",
  email: "adithya.k.upad@gmail.com",
  github: "https://github.com/adithyakupad",
  linkedin: "https://linkedin.com/in/adithyaupadhyayula",
  resume: "/resume.pdf",
  profileImage: "/images/profile.jpg",
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Resume", href: siteData.resume },
  { label: "Research", href: "#research" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Awards", href: "#awards" },
  { label: "Reflection", href: "#reflection" },
  { label: "Strengths", href: "#strengths" },
  { label: "Contact", href: "#contact" },
];

export const lanes = [
  {
    id: "biomedical",
    title: "Biomedical Research",
    description:
      "I work on questions in cardiovascular disease and neurodegeneration. In the Cardiovascular Fluid Mechanics Lab at Georgia Tech, I analyze coronary artery lesions and radiomic patterns to understand ischemic severity. In my independent research, I've studied how ALS-associated mutations in SOD1 affect protein structure.",
    icon: "Microscope",
    tags: ["Radiomics", "CAD", "ALS", "Structural Biology"],
    anchor: "#research",
  },
  {
    id: "computation",
    title: "Computational Systems",
    description:
      "I use programming and data analysis to explore biological questions. Much of my research involves building Python workflows for feature analysis, statistical comparisons, and visualization. I enjoy turning messy data into structured pipelines that help reveal patterns.",
    icon: "Terminal",
    tags: ["Python", "PyTorch", "pandas", "scikit-learn", "Data Pipelines"],
    anchor: "#projects",
  },
  {
    id: "service",
    title: "Service & Leadership",
    description:
      "Outside the lab, I work on community initiatives centered on health access and education. Through Medipolitan and VT Seva, I've helped organize projects that try to address real-world problems like affordability, distribution, and outreach.",
    icon: "Heart",
    tags: ["Medipolitan", "VT Seva", "HOSA", "Hospital Volunteering"],
    anchor: "#experience",
  },
];

export const research = [
  {
    id: "cvfm",
    label: "A",
    title: "Cardiovascular Fluid Mechanics Lab",
    org: "Georgia Institute of Technology",
    image: "/images/cad-research.jpg",
    question:
      "Can radiomic features from lesion imaging capture patterns that traditional anatomical measurements miss?",
    body: "In the Cardiovascular Fluid Mechanics Lab at Georgia Tech, I work on research related to coronary artery disease and lesion morphology. Coronary artery disease is often assessed using anatomical measurements, but the relationship between lesion structure and ischemic severity can be complex. Our work explores how radiomic features extracted from lesion imaging might help capture patterns that traditional measurements miss. By analyzing lesion morphology across different severity groups, we aim to understand whether structural features can provide additional insight into ischemic risk.",
    details: [
      "Analyzing coronary artery lesion morphology across severity groups",
      "Extracting and evaluating radiomic features from lesion imaging",
      "Comparing structural patterns against ischemic severity measures",
      "Building Python workflows for feature analysis and visualization",
    ],
    tags: ["CAD", "Radiomics", "FFR", "Ischemia", "Lesion Morphology"],
  },
  {
    id: "sod1",
    label: "B",
    title: "ALS / SOD1 Structural Modeling",
    org: "Independent Research",
    image: "/images/sod1-structure.jpg",
    question:
      "How do local structural changes in mutation-proximal regions reveal patterns that simple stability measurements miss?",
    body: "My independent research focuses on ALS and the structural consequences of mutations in the SOD1 protein. ALS-associated mutations can affect proteins in ways that aren't always captured by simple stability measurements. I became interested in how local structural changes, especially in surface pockets and mutation-proximal regions, might reveal different patterns of disruption. By studying mutation-specific structural effects, the goal is to better understand how protein geometry and mutation context interact in neurodegenerative disease.",
    details: [
      "Studying structural effects of ALS-associated SOD1 mutations",
      "Analyzing surface pockets and mutation-proximal regions",
      "Comparing local structural changes against global stability metrics",
      "Using PyMOL, fpocket, and FoldX for structural analysis",
      "Reviewing 120+ papers on ALS pathology and biomarker frameworks",
    ],
    tags: ["ALS", "SOD1", "Protein Structure", "Neurodegeneration", "Bioinformatics"],
  },
];

export const projects = [
  {
    id: "cad-pipeline",
    title: "CAD Radiomics Analysis Pipeline",
    subtitle: "Feature engineering and ML ranking for coronary lesion data",
    image: "/images/project-placeholder.jpg",
    description:
      "I built analysis workflows in Python to study lesion morphology and radiomic features in coronary artery disease datasets.",
    bullets: [
      "Radiomics feature filtering",
      "Statistical testing between severity groups",
      "Random forest feature ranking",
      "PCA visualization",
      "Clustering analysis of lesion morphology",
    ],
    tags: ["Python", "pandas", "scikit-learn", "Radiomics"],
  },
  {
    id: "lesion-morphology",
    title: "Lesion Morphology Analysis System",
    subtitle: "PCA and clustering for CAD severity stratification",
    image: "/images/project-placeholder.jpg",
    description:
      "To better understand ischemic severity, I worked on pipelines that compare lesion structural features across FFR groups.",
    bullets: [
      "Feature normalization",
      "Dimensionality reduction",
      "Clustering analysis",
      "Statistical comparison of lesion groups",
      "Visualization of structural variation",
    ],
    tags: ["Python", "scikit-learn", "PCA", "Clustering"],
  },
  {
    id: "sod1-scripts",
    title: "SOD1 Structural Analysis Scripts",
    subtitle: "Pocket geometry mapping for ALS mutation variants",
    image: "/images/project-placeholder.jpg",
    description:
      "For my ALS research, I used structural bioinformatics tools to analyze mutation-specific changes in protein geometry.",
    bullets: [
      "PyMOL structural alignment",
      "fpocket pocket detection",
      "SASA analysis",
      "Mutation-proximal pocket comparison",
      "FoldX stability calculations",
    ],
    tags: ["PyMOL", "fpocket", "FoldX", "Python", "SASA"],
  },
  {
    id: "als-biomarker",
    title: "ALS Biomarker Dataset Structuring",
    subtitle: "Literature synthesis and structured biomarker framework",
    image: "/images/project-placeholder.jpg",
    description:
      "While reviewing ALS literature, I organized biomarker information across many papers into a structured dataset.",
    bullets: [
      "Literature synthesis across 120+ papers",
      "Dataset organization",
      "Categorization of ALS biomarkers",
      "Structuring pathology information for analysis",
    ],
    tags: ["ALS", "Literature Review", "Biomarkers", "Data Structuring"],
  },
  {
    id: "medipolitan-ops",
    title: "Medipolitan Operations System",
    subtitle: "Logistics coordination for community health kit distribution",
    image: "/images/medipolitan.jpg",
    description:
      "As part of Medipolitan, I helped coordinate logistics for assembling and distributing low-cost first aid kits.",
    bullets: [
      "Organizing kit components",
      "Managing inventory",
      "Coordinating assembly",
      "Working with distribution partners",
    ],
    tags: ["Operations", "Community Health", "Logistics"],
  },
];

export const experience = [
  {
    id: "gt-lab",
    role: "AI/ML Research Intern",
    org: "Cardiovascular Fluid Mechanics Lab, Georgia Tech",
    type: "Research",
    description:
      "Analyzing coronary artery disease imaging data using radiomics, machine learning, and statistical methods to improve cardiovascular risk assessment.",
  },
  {
    id: "medipolitan",
    role: "Co-Founder",
    org: "Medipolitan",
    type: "Leadership",
    description:
      "Co-founded a student-led initiative to distribute low-cost health kits to underserved communities in Atlanta. Raised ~$1,000, assembled 150+ kits.",
  },
  {
    id: "vtseva",
    role: "Founder & President",
    org: "VT Seva Northview",
    type: "Leadership",
    description:
      "Founded and led the Northview chapter. Grew membership by 42, organized 3-5 events annually, raised $6,000+.",
  },
  {
    id: "hosa",
    role: "Reporter / VP of Outreach",
    org: "HOSA",
    type: "Leadership",
    description:
      "Co-led a $19,000 National Marrow Donor Program fundraiser. Organized physician panels and contributed to chapter growth.",
  },
  {
    id: "scioly",
    role: "Life Sciences Event Captain",
    org: "Science Olympiad",
    type: "Academic",
    description:
      "Authored 20 study guides, mentored teammates weekly, earned multiple top-five state placements in Anatomy & Physiology.",
  },
  {
    id: "hospital",
    role: "Hospital Volunteer",
    org: "Northeast Georgia Health System",
    type: "Service",
    description:
      "Supported patient services, NICU documentation workflows, medical instrument orders, and hospital logistics.",
  },
  {
    id: "music",
    role: "Carnatic Musician",
    org: "University of Silicon Andhra",
    type: "Personal",
    description:
      "12 years of Carnatic vocal training. Diploma from the University of Silicon Andhra.",
  },
  {
    id: "violin",
    role: "Violinist / Orchestra",
    org: "Orchestral Performance",
    type: "Personal",
    description:
      "Active in violin and orchestral performance. Ensemble collaboration across multiple productions.",
  },
];

export const awards = [
  {
    title: "National Merit Semifinalist",
    org: "National Merit Scholarship Corporation",
    detail: "Top ~16,000 students nationally based on PSAT/NMSQT performance",
  },
  {
    title: "USA Biology Olympiad",
    org: "Honorable Mention",
    detail: "Top 125 students nationally",
  },
  {
    title: "Georgia State Science Olympiad",
    org: "Anatomy & Physiology — 4th Place",
    detail: "State-level competition",
  },
  {
    title: "Presidential Volunteer Service Award",
    org: "Gold — Four-Time Recipient",
    detail: "Recognized for sustained, high-impact volunteer contributions",
  },
  {
    title: "GAPI-YPPI Scholarship",
    org: "Youth Physician Pipeline Initiative",
    detail: "Recipient of the GAPI scholarship supporting future physicians",
  },
];

export const strengths = [
  {
    name: "Competition",
    tagline: "I'm motivated by comparison and clear benchmarks.",
    reflection:
      "Competitive environments like Science Olympiad push me to get sharper and more disciplined. I like having something concrete to aim at. I push myself harder when I can measure progress against a goal or a standard.",
  },
  {
    name: "Significance",
    tagline: "I want the work I do to actually matter.",
    reflection:
      "I'm drawn to projects that feel meaningful. Whether it's research or community initiatives, I care about building things that have real impact.",
  },
  {
    name: "Command",
    tagline: "When something needs direction, I'm comfortable stepping up.",
    reflection:
      "This shows up most in leadership roles like VT Seva, where organizing events and moving people toward a clear plan mattered.",
  },
  {
    name: "Focus",
    tagline: "Once I commit to something, I can stay with it for a long time.",
    reflection:
      "Research projects often require sustained attention. I enjoy digging into complicated problems and sticking with them until they start to make sense.",
  },
  {
    name: "Activator",
    tagline: "I like starting things.",
    reflection:
      "Instead of waiting for perfect conditions, I usually prefer to begin and figure things out along the way. That mindset helped when launching Medipolitan.",
  },
];
