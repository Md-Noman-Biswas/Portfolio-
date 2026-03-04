export type EducationItem = {
  period: string;
  institution: string;
  program: string;
  detail: string;
  expectedGraduation: string;
};

export type SkillItem = {
  name: string;
  level: number;
};

export type ProjectItem = {
  title: string;
  description: string;
  technologies: string[];
  github: string;
  demo?: string;
};

export const profile = {
  name: 'Full Name Placeholder',
  email: 'email@example.com',
  github: 'https://github.com/placeholder',
  linkedin: 'https://linkedin.com/in/placeholder',
};

export const education: EducationItem[] = [
  {
    period: '2022 - Present',
    institution: 'University Name Placeholder',
    program: 'B.Sc. in Electrical and Computer Engineering',
    detail: 'Specialization in Artificial Intelligence and Machine Learning',
    expectedGraduation: 'Expected Graduation: 2027',
  },
];

export const skills: Record<string, SkillItem[]> = {
  Programming: [
    { name: 'C++', level: 88 },
    { name: 'Python', level: 92 },
    { name: 'SQL', level: 82 },
    { name: 'Assembly', level: 67 },
  ],
  'ML/AI': [
    { name: 'PyTorch', level: 86 },
    { name: 'TensorFlow', level: 80 },
    { name: 'Scikit-learn', level: 89 },
  ],
  Tools: [
    { name: 'Git', level: 86 },
    { name: 'Linux', level: 81 },
    { name: 'VS Code', level: 90 },
  ],
  Databases: [
    { name: 'PostgreSQL', level: 78 },
    { name: 'MySQL', level: 79 },
  ],
};

export const projects: ProjectItem[] = [
  {
    title: 'Digit Recognition Project',
    description:
      'Built a robust handwritten digit classification pipeline with end-to-end preprocessing, model experimentation, and deployment-ready evaluation metrics.',
    technologies: ['Python', 'PyTorch', 'OpenCV'],
    github: 'https://github.com/placeholder/digit-recognition',
    demo: 'https://demo-placeholder.com/digit-recognition',
  },
  {
    title: 'Database Backend Project',
    description:
      'Designed and implemented a normalized relational backend with secure APIs and optimized query patterns for scalable educational workloads.',
    technologies: ['PostgreSQL', 'SQL', 'Node.js'],
    github: 'https://github.com/placeholder/database-backend',
  },
  {
    title: 'Machine Learning Coursework Projects',
    description:
      'A curated collection of academic ML projects featuring classification, regression, and representation learning experiments with detailed reports.',
    technologies: ['Scikit-learn', 'TensorFlow', 'Jupyter'],
    github: 'https://github.com/placeholder/ml-coursework',
    demo: 'https://demo-placeholder.com/ml-coursework',
  },
];

export const researchInterests = ['Self-Supervised Learning', 'Geospatial Analysis', 'Representation Learning', 'Computer Vision'];

export const researchTimeline = [
  { year: '2024 Q1', event: 'Surveyed recent literature on self-supervised representation learning.' },
  { year: '2024 Q3', event: 'Implemented baseline contrastive learning methods for remote sensing imagery.' },
  { year: '2025 Q1', event: 'Evaluating geospatial transfer learning benchmarks across multimodal datasets.' },
];

export const platforms = ['Codeforces', 'LeetCode', 'CodeChef'];

export const metrics = {
  projectsCompleted: projects.length,
  coursesFinished: 12,
};
