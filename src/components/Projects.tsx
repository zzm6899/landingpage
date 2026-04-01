interface Project {
  name: string
  description: string
  tech: string[]
  highlight?: string
  link?: string
  icon: string
}

const PROJECTS: Project[] = [
  {
    name: 'ArcadeTracker',
    description:
      'Self-hosted balance tracking platform for Australian arcade cards (Koko Amusement & Timezone). ' +
      'Features automated polling every 5 minutes, spending analytics with Chart.js visualisations, ' +
      'a Discord bot with slash commands, and a mobile-responsive dark dashboard.',
    tech: ['Python', 'Flask', 'SQLite', 'Discord.py', 'Chart.js', 'Docker'],
    highlight: '⭐ 2 Stars',
    link: 'https://github.com/zzm6899/ArcadeTracker',
    icon: '🕹️',
  },
  {
    name: 'Watermark Vault (PhotoFlow)',
    description:
      'Full-stack self-hosted photography business platform for convention photographers. ' +
      'Handles end-to-end workflow: QR-code bookings, server-side watermarking via Sharp, ' +
      'gallery proofing with magic links, Stripe payments, digital contracts, and a PWA mobile capture app.',
    tech: ['React', 'TypeScript', 'Node.js', 'SQLite', 'Stripe', 'Docker', 'Tailwind'],
    highlight: '⭐ 1 Star',
    link: 'https://github.com/zzm6899/watermark-vault',
    icon: '📸',
  },
  {
    name: 'Medical Cancer Tumour Recognition',
    description:
      'TensorFlow and YOLOv5-based machine learning models for breast cancer detection from medical imaging. ' +
      'Achieved 98% accuracy through custom image augmentation pipelines, iterative hyperparameter tuning, ' +
      'and comprehensive model evaluation across validation datasets.',
    tech: ['Python', 'TensorFlow', 'YOLOv5', 'Computer Vision', 'ML'],
    highlight: '98% Accuracy',
    icon: '🧬',
  },
  {
    name: 'Home Server Infrastructure',
    description:
      'Designed and deployed a production-grade self-hosted server ecosystem running Pi-hole for ' +
      'network-level ad blocking, TrueNAS for NAS storage, Ubuntu-based networking tools, and ' +
      'Docker Compose stacks — including hosting this portfolio and ArcadeTracker.',
    tech: ['TrueNAS', 'Docker', 'Pi-hole', 'Networking', 'Ubuntu', 'DNS'],
    highlight: 'Self-Hosted',
    icon: '🖥️',
  },
  {
    name: 'Engineering Portfolio (This Site)',
    description:
      'Containerised React / TypeScript portfolio deployed via Docker and GitHub Container Registry. ' +
      'Features a multi-stage Dockerfile, GitHub Actions CI/CD pipeline for automated image builds, ' +
      'and a TrueNAS docker-compose configuration for self-hosted deployment with Nginx.',
    tech: ['React', 'TypeScript', 'Docker', 'Nginx', 'GitHub Actions', 'Vite'],
    highlight: 'CI/CD',
    link: 'https://github.com/zzm6899/landingpage',
    icon: '💻',
  },
  {
    name: 'Google Cloud Certification',
    description:
      'Actively preparing for the Google Cloud Associate Cloud Engineer certification. ' +
      'Hands-on labs covering GCP virtual machines, Kubernetes Engine, Cloud Storage, ' +
      'IAM policies, VPC networking, and cloud-native monitoring concepts.',
    tech: ['GCP', 'Kubernetes', 'Cloud IAM', 'Compute Engine', 'Cloud Storage'],
    highlight: 'In Progress',
    icon: '☁️',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <p className="section-label">03. Projects</p>
        <h2 className="section-title">Things I've Built</h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '15px', marginBottom: '40px', maxWidth: '600px' }}>
          A mix of professional tooling, ML research, and infrastructure projects — all built and deployed independently.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '20px',
        }}>
          {PROJECTS.map((project) => (
            <div key={project.name} className="card" style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '14px',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
            }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-3px)'
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)'
              }}
            >
              {/* Header row */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <span style={{ fontSize: '26px', lineHeight: 1 }}>{project.icon}</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  {project.highlight && (
                    <span style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '11px',
                      padding: '3px 8px',
                      borderRadius: '20px',
                      background: 'rgba(63,185,80,0.1)',
                      color: 'var(--accent-2)',
                      border: '1px solid rgba(63,185,80,0.3)',
                      whiteSpace: 'nowrap',
                    }}>
                      {project.highlight}
                    </span>
                  )}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="View on GitHub"
                      style={{
                        color: 'var(--text-secondary)',
                        fontSize: '16px',
                        lineHeight: 1,
                        transition: 'color 0.15s',
                        textDecoration: 'none',
                      }}
                      onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.color = 'var(--accent)')}
                      onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-secondary)')}
                    >
                      ↗
                    </a>
                  )}
                </div>
              </div>

              {/* Name */}
              <h3 style={{ fontSize: '16px', fontWeight: 700, lineHeight: 1.3, margin: 0 }}>
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'inherit', textDecoration: 'none' }}
                    onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.color = 'var(--accent)')}
                    onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.color = 'inherit')}
                  >
                    {project.name}
                  </a>
                ) : project.name}
              </h3>

              {/* Description */}
              <p style={{
                color: 'var(--text-secondary)',
                fontSize: '14px',
                lineHeight: 1.75,
                flex: 1,
                margin: 0,
              }}>
                {project.description}
              </p>

              {/* Tech tags */}
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '6px',
                paddingTop: '12px',
                borderTop: '1px solid var(--border)',
              }}>
                {project.tech.map(t => (
                  <span key={t} style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                    color: 'var(--text-secondary)',
                    background: 'var(--bg-secondary)',
                    padding: '2px 8px',
                    borderRadius: '4px',
                    border: '1px solid var(--border)',
                  }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* GitHub link */}
        <div style={{ marginTop: '40px', textAlign: 'center' }}>
          <a
            href="https://github.com/zzm6899"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
          >
            View all repos on GitHub ↗
          </a>
        </div>
      </div>
    </section>
  )
}
