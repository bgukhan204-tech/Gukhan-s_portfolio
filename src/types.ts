export interface ArchitectureNode {
  id: string;
  label: string;
  sublabel?: string;
  type: 'input' | 'process' | 'model' | 'database' | 'output';
}

export interface ArchitectureConnection {
  from: string;
  to: string;
  label?: string;
}

export interface ArchitectureDiagram {
  title: string;
  nodes: ArchitectureNode[];
  connections: ArchitectureConnection[];
}

export interface ProjectMetric {
  label: string;
  value: string;
  accent: 'cyan' | 'purple' | 'emerald';
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: 'AI & ML' | 'Full-Stack' | 'Edge & Computer Vision' | 'Data Systems';
  description: string;
  detailedCaseStudy: {
    problem: string;
    solution: string;
    algorithms: string[];
    performanceGains: string;
    challengesOvercome: string;
  };
  architecture: ArchitectureDiagram;
  techStack: string[];
  metrics: ProjectMetric[];
  githubUrl: string;
  liveDemoUrl?: string;
  demoType: 'deepfake-detector' | 'phishing-detector' | 'spring-checkout' | 'defect-scanner' | 'rag-retriever';
  featured: boolean;
}

export interface SkillItem {
  name: string;
  level: number; // 0-100
  category: 'AI/ML' | 'Backend' | 'Frontend' | 'Tools & Cloud' | 'Data';
  experienceYears: string;
  status: 'OPTIMAL' | 'STABLE' | 'ACTIVE';
  tags: string[];
}

export interface RadarDataPoint {
  dimension: string;
  score: number;
  benchmark: number;
  description: string;
}

export interface TimelineEntry {
  id: string;
  type: 'education' | 'internship' | 'research' | 'leadership';
  role: string;
  organization: string;
  location: string;
  period: string;
  keyTakeaway: string;
  achievements: string[];
  techStack: string[];
  verifiedStatus?: string;
}

export interface SystemMetric {
  label: string;
  value: string;
  change: string;
  status: 'nominal' | 'elevated' | 'optimal';
  icon: string;
}
