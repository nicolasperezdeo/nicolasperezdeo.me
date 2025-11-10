export const profile = {
  name: 'Nicolas Perez de Olaguer',
  title: 'Senior Machine Learning Engineer',
  subtitle: 'Applied AI • MLOps • Generative AI',
  location: 'Berlin, Germany',
  email: 'nicolasperezdeo@gmail.com',
  linkedin: 'https://linkedin.com/in/nicolasperezdeolaguer',
  github: 'https://github.com/nicolasperezdeo',
  summary:
    'Senior Machine Learning Engineer with over five years of experience designing, deploying, and maintaining production-grade AI systems. Skilled in building scalable LLM and ML pipelines on AWS using Docker, Terraform, and MLflow. Currently focused on applied Generative AI and MLOps, integrating language and vision models into business workflows to deliver measurable value.',
  keywords: [
    'MLOps',
    'Generative AI',
    'LLM Pipelines',
    'Applied AI',
    'Computer Vision',
    'Cloud Architecture',
    'Model Deployment'
  ]
};

export const skills = [
  {
    category: 'Languages',
    items: ['Python', 'SQL', 'Bash']
  },
  {
    category: 'ML/DL Frameworks',
    items: ['PyTorch', 'TensorFlow', 'Scikit-learn']
  },
  {
    category: 'MLOps & Infrastructure',
    items: ['Docker', 'Terraform', 'MLflow', 'CI/CD', 'Model Monitoring']
  },
  {
    category: 'Cloud & Services',
    items: ['AWS (SageMaker, Bedrock, EC2, Lambda, CloudWatch)']
  },
  {
    category: 'Focus Areas',
    items: ['LLM Pipelines', 'NLP', 'Multimodal AI', 'Data Processing', 'Cloud Deployment']
  }
];

export const experiences = [
  {
    role: 'Machine Learning (Project Lead)',
    company: 'TeleMedC',
    location: 'Berlin / Hamburg',
    period: 'May 2023 — Jan 2025',
    highlights: [
      'Led design and deployment of a scalable ML platform on AWS using Docker, MLflow, and Terraform.',
      'Oversaw data workflows and production model rollouts across distributed teams, ensuring reliability and version control.',
      'Mentored junior engineers and set standards for code quality, CI/CD, and experiment tracking.'
    ]
  },
  {
    role: 'Machine Learning Engineer',
    company: 'TeleMedC',
    location: 'Hamburg',
    period: 'May 2021 — Apr 2023',
    highlights: [
      'Developed and deployed CNN-based image analysis systems with automated retraining pipelines on AWS SageMaker.',
      'Built reproducible data ingestion, validation, and evaluation processes serving 10k+ samples.'
    ]
  },
  {
    role: 'Machine Learning Engineer',
    company: '1000Shapes',
    location: 'Berlin',
    period: 'May 2019 — Aug 2020',
    highlights: [
      'Built 3D image analysis models for anatomical landmark detection and integrated them into SaaS workflows.'
    ]
  }
];

export const projects = [
  {
    name: 'PriceCogs — Record Valuation & Identification Toolkit',
    description:
      'End-to-end AI toolkit combining computer vision and LLMs for vinyl record identification and pricing.',
    highlights: [
      'Pipeline: OCR → LLM parsing (Gemini Pro / OpenAI) → retrieval & ranking → valuation engine.',
      'Engineering: Modular FastAPI backend, CLI, and Material Design web demo for containerized deployment.',
      'Stack: Python, FastAPI, OpenCV, pytesseract, OpenAI / Gemini API, AWS, Docker.'
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
    degree: 'Bachelor of Science in Telecommunications Engineering',
    institution: 'Universitat Pompeu Fabra',
    period: '2013 — 2017'
  }
];

export const publications = [
  {
    title: 'Method and device for automatic classification of cataracts',
    outlet: 'European Patent No. 23191211.4'
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
  }
];
