export const profile = {
  name: 'Nicolas Perez de Olaguer',
  title: 'Machine Learning Engineer',
  subtitle: 'MLOps • Computer Vision • Healthcare AI',
  location: 'Berlin, Germany',
  phone: '+34 662 169 554',
  email: 'nicolasperezdeo@gmail.com',
  linkedin: 'https://linkedin.com/in/nicolasperezdeolaguer',
  github: 'https://github.com/your-profile',
  summary:
    'Results-driven Machine Learning Engineer with 5+ years of experience architecting and deploying end-to-end computer vision systems in regulated medical environments. Passionate about building reliable ML platforms, advancing clinical diagnostics, and bridging research into production.',
  keywords: ['ML Engineering', 'MLOps', 'Computer Vision', 'Medical AI', 'Cloud Architecture']
};

export const skills = [
  {
    category: 'Programming & Libraries',
    items: ['Python', 'Pandas', 'NumPy', 'Scikit-learn']
  },
  {
    category: 'ML/DL Frameworks',
    items: ['TensorFlow', 'Keras', 'PyTorch']
  },
  {
    category: 'MLOps & Cloud',
    items: ['AWS (SageMaker, S3, EC2, CloudWatch)', 'Docker', 'MLflow', 'CI/CD', 'Terraform']
  },
  {
    category: 'Data & Databases',
    items: ['Data Pipelines', 'ETL', 'SQL']
  },
  {
    category: 'Core Competencies',
    items: ['Computer Vision', 'Model Deployment & Monitoring', 'Data Governance', 'Scalable Systems']
  }
];

export const experiences = [
  {
    role: 'Machine Learning Lead',
    company: 'TeleMedC',
    location: 'Berlin / Hamburg',
    period: 'May 2023 — Dec 2024',
    highlights: [
      'Overhauled ML training infrastructure with MLflow-based experiment tracking and data versioning on AWS, achieving full reproducibility and auditability.',
      'Scaled nationwide ML inference services for GP clinics with high availability and resilient performance under heavy clinical workloads.',
      'Established proactive model monitoring with AWS CloudWatch to detect data and concept drift, safeguarding deployed model accuracy.',
      'Cut inference latency by ~40% through model quantization and infrastructure optimization to enable near real-time clinical decision support.',
      'Optimized data processing and training pipelines to reduce cloud spend by ~20% while improving model performance.'
    ]
  },
  {
    role: 'Machine Learning Engineer',
    company: 'TeleMedC',
    location: 'Berlin / Hamburg',
    period: 'May 2021 — Apr 2023',
    highlights: [
      'Built and productionized a CNN-based cataract grading system that surpassed senior ophthalmologist benchmarks by 12%.',
      'Delivered the core ML technology that enabled TeleMedC’s entry into the German market across optic shops and GP clinics.',
      'Created a proprietary 10k-image clinical dataset with rigorous collection and annotation workflows for nurses and doctors.',
      'Applied targeted augmentation strategies that enabled robust model generalization across real-world imaging conditions.'
    ]
  },
  {
    role: 'Machine Learning Engineer',
    company: '1000Shapes',
    location: 'Berlin',
    period: 'May 2019 — Aug 2020',
    highlights: [
      'Designed a 3D anatomical landmark extraction model using heatmap regression and synthetic data to bootstrap scarce labels.',
      'Integrated the model into 2D/3D reconstruction pipelines, accelerating the flagship product’s initialization workflow.',
      'Reduced end-to-end reconstruction processing time by 20%, delivering substantial throughput gains for clinical users.'
    ]
  }
];

export const education = [
  {
    degree: 'Master of Science in Intelligent Adaptive Systems',
    institution: 'Universität Hamburg',
    period: '2017 — 2019'
  },
  {
    degree: 'Bachelor of Telematics Engineering',
    institution: 'Universitat Pompeu Fabra',
    period: '2013 — 2017'
  }
];

export const publications = [
  {
    title: 'Method and device for automatic classification of cataracts',
    outlet: 'European Patent T23340EP09864PT'
  },
  {
    title:
      'Implementing and evaluating a fully functional AI-enabled model for chronic eye disease screening in a real clinical environment',
    outlet: 'BMC Ophthalmology 24.1 (2024): 51'
  },
  {
    title:
      'VerSe: A Vertebrae labelling and segmentation benchmark for multi-detector CT images',
    outlet: 'Medical Image Analysis, Volume 73, 2021'
  },
  {
    title:
      'Driver Response Couplings Between Networks in Chimera States',
    outlet: 'XXXVII Dynamics Days Europe Book of Abstracts (2017)'
  }
];

