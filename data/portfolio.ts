export const profile = {
  name: 'MD NOMAN BISWAS SIBLY',
  email: 'mdnomanbiswassibly@gmail.com',
  github: 'https://github.com/Md-Noman-Biswas',
  linkedin: 'https://www.linkedin.com/in/md-noman-biswas-sibly/',
  location: 'Jhenaidah District, Bangladesh',
  headline: 'Electrical and Computer Engineering Student',
  summary:
    'Third-year Electrical and Computer Engineering student at RUET with a strong focus on deep learning and computer vision. Co-author of a Q1 Springer journal review article, with ongoing work in medical image classification and vision-language model surveys. Actively seeking research-oriented graduate opportunities in AI-driven systems.',
};

export const education = [
  {
    period: '2022 - Present',
    institution: 'Rajshahi University of Engineering & Technology (RUET)',
    program: 'B.Sc. in Electrical and Computer Engineering',
    detail: 'Rajshahi, Bangladesh',
    expectedGraduation: 'Relevant Coursework: Machine Learning, Data Structures & Algorithms, DSP, Computer Architecture, Control Systems, Embedded Systems',
  },
];

export const skills = {
  Programming: [
    { name: 'C++', level: 90 },
    { name: 'Python', level: 92 },
    { name: 'Embedded C', level: 84 },
    { name: 'SQL', level: 80 },
  ],
  'ML/AI': [
    { name: 'TensorFlow', level: 86 },
    { name: 'Scikit-learn', level: 89 },
    { name: 'YOLOv8', level: 82 },
    { name: 'Computer Vision', level: 88 },
  ],
  Tools: [
    { name: 'Git', level: 88 },
    { name: 'Linux', level: 82 },
    { name: 'Jupyter', level: 90 },
    { name: 'Pandas / NumPy', level: 90 },
  ],
};

export const projects = [
  {
    title: 'ATmega Neural Network - Digit Recognition',
    description:
      'Built a lightweight neural network running on an ATmega microcontroller to classify digits from a custom 4×4 dataset, optimizing computation and memory for embedded inference.',
    technologies: ['Embedded C', 'Python', 'Microcontrollers'],
    github: 'https://github.com/Md-Noman-Biswas/ATmega-NeuralNetwork-DigitRecognizer',
  },
  {
    title: 'Applied Machine Learning Projects',
    description:
      'Implemented ML models for cardiovascular disease prediction, rainfall classification, breast cancer detection, and SONAR classification with preprocessing, feature engineering, and evaluation.',
    technologies: ['Python', 'Scikit-learn', 'Pandas', 'NumPy'],
    github: 'https://github.com/Md-Noman-Biswas/Machine-Learning-Projects',
  },
  {
    title: 'Football Club Logo Detection (YOLOv8)',
    description:
      'Developed a YOLOv8-based object detection model to identify and classify football club logos, including dataset preparation and inference pipeline development.',
    technologies: ['Python', 'YOLOv8', 'Computer Vision'],
    github: 'https://github.com/Md-Noman-Biswas/Football-Club-Detection',
  },
];

export const researchInterests = ['Deep Learning', 'Computer Vision', 'Vision-Language Models', 'Medical Image Analysis'];

export const researchMetrics = [
  { label: 'Accepted Q1 Paper', value: '1 (Springer: Neural Computing and Applications)' },
  { label: 'Ongoing Research Tracks', value: '2 (VLM Survey, Medical Imaging)' },
  { label: 'Problems Solved', value: '1000+ (Codeforces/CP practice)' },
];

export const researchPapers = [
  {
    title: 'A Comprehensive Review of Convolutional Neural Networks: Foundations, Enhancements, and Applications',
    venue: 'Accepted · Neural Computing and Applications (Springer, Q1, IF 5.102)',
    authors: 'Co-author',
    abstract:
      'Comprehensive review covering CNN foundations, major architectural enhancements, and practical applications across modern AI tasks.',
    tags: ['CV'],
    pdf: '/paper-placeholder.pdf',
  },
  {
    title: 'Vision-Language Model Review (CLIP, BLIP-2, LLaVA)',
    venue: 'Ongoing Research',
    authors: 'MD Noman Biswas Sibly',
    abstract:
      'Ongoing survey and comparative analysis of representative vision-language model families, emphasizing architecture, alignment objectives, and evaluation patterns.',
    tags: ['CV'],
    pdf: '/paper-placeholder.pdf',
  },
  {
    title: 'CNN-Based Medical Image Classification for Gallbladder Disease',
    venue: 'Ongoing Research',
    authors: 'MD Noman Biswas Sibly',
    abstract:
      'Investigating gallbladder disease classification with CNNs, including GAN-assisted augmentation and robustness-oriented validation strategies.',
    tags: ['CV'],
    pdf: '/paper-placeholder.pdf',
  },
];

export const researchTimeline = [
  { year: '2024', event: 'Co-authored a CNN review article accepted in Neural Computing and Applications (Springer, Q1).' },
  { year: '2025', event: 'Started a comparative Vision-Language Model survey covering CLIP, BLIP-2, and LLaVA.' },
  { year: '2025 - Present', event: 'Working on CNN-based gallbladder medical image classification with GAN-assisted augmentation.' },
];

export const platforms = ['Codeforces (Pupil)', 'LeetCode', 'CodeChef'];

export const experiences = [
  {
    role: 'AI & Machine Learning Training',
    organization: 'BDSET',
    detail: 'Engaged in intensive hands-on AI/ML training focused on data-driven modeling and practical applications using Python and modern ML frameworks.',
    period: 'Ongoing',
  },
  {
    role: 'Programming Mentor',
    organization: 'RUET Analytical Programming Lab',
    detail: 'Taught programming fundamentals, algorithms, debugging, and problem-solving strategies.',
    period: 'Past - Present',
  },
  {
    role: 'Independent ML Developer',
    organization: 'Open Source',
    detail: 'Built and shared end-to-end ML/DL implementations using TensorFlow and Scikit-learn.',
    period: 'Ongoing',
  },
];
