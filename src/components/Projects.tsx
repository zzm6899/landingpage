interface Project {
  name: string
  description: string
  tech: string[]
  highlight?: string
  link?: string
}

const PROJECTS: Project[] = [
  {
    name: 'Medical Cancer Tumour Recognition',
    description:
      'Developed TensorFlow and YOLOv5-based machine learning models for breast cancer detection. ' +
      'Achieved 98% accuracy in identifying cancerous tumours through deep learning model training, ' +
      'image augmentation pipelines, and comprehensive model evaluation.',
    tech: ['Python', 'TensorFlow', 'YOLOv5', 'Computer Vision', 'ML'],
    highlight: '98% Accuracy',
  },
  {
    name: 'Home Server System',
    description:
      'Designed and deployed a self-hosted home server ecosystem running DNS management, Pi-hole ' +
      'network-level ad blocking, TrueNAS for network-attached storage, and Ubuntu-based networking ' +
      'tools. This project mirrors production-grade infrastructure practices for hands-on development.',
    tech: ['TrueNAS', 'Docker', 'Pi-hole', 'Networking', 'Ubuntu', 'DNS'],
    highlight: 'Self-Hosted',
  },
  {
    name: 'Engineering Portfolio (This Site)',
    description:
      'Built a containerised React / TypeScript portfolio deployed via Docker and GitHub Container ' +
      'Registry. Features a multi-stage Dockerfile, GitHub Actions CI/CD pipeline for automated ' +
      'builds, and a TrueNAS-compatible docker-compose configuration for self-hosted deployment.',
    tech: ['React', 'TypeScript', 'Docker', 'Nginx', 'GitHub Actions', 'Vite'],
    highlight: 'CI/CD',
  },
  {
    name: 'Google Cloud Certification',
    description:
      'Actively preparing for the Google Cloud Associate Cloud Engineer certification. Gained ' +
      'practical experience with GCP virtual machines, Kubernetes Engine, Cloud Storage, IAM, ' +
      'and cloud networking concepts through hands-on labs and study materials.',
    tech: ['GCP', 'Kubernetes', 'Cloud IAM', 'Compute Engine', 'Cloud Storage'],
    highlight: 'In Progress',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <p className="section-label">03. Projects</p>
        <h2 className="section-title">Things I've Built</h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px',
        }}>
          {PROJECTS.map((project) => (
            <div key={project.name} className="card" style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
            }}>
              {/* Header */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <span style={{ fontSize: '28px' }}>
                  {project.name.includes('Cancer') ? '🧬' :
                   project.name.includes('Server') ? '🖥️' :
                   project.name.includes('Portfolio') ? '💻' : '☁️'}
                </span>
                {project.highlight && (
                  <span style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                    padding: '3px 8px',
                    borderRadius: '20px',
                    background: 'rgba(63,185,80,0.1)',
                    color: 'var(--accent-2)',
                    border: '1px solid rgba(63,185,80,0.3)',
                  }}>
                    {project.highlight}
                  </span>
                )}
              </div>

              {/* Name */}
              <h3 style={{ fontSize: '17px', fontWeight: 700, lineHeight: 1.3 }}>
                {project.name}
              </h3>

              {/* Description */}
              <p style={{
                color: 'var(--text-secondary)',
                fontSize: '14px',
                lineHeight: 1.8,
                flex: 1,
              }}>
                {project.description}
              </p>

              {/* Tech tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', paddingTop: '8px', borderTop: '1px solid var(--border)' }}>
                {project.tech.map(t => (
                  <span key={t} style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                    color: 'var(--text-secondary)',
                  }}>
                    {t}
                  </span>
                )).reduce((acc: React.ReactNode[], el, i, arr) => {
                  acc.push(el)
                  if (i < arr.length - 1) acc.push(
                    <span key={`sep-${i}`} style={{ color: 'var(--border)' }}>·</span>
                  )
                  return acc
                }, [])}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
