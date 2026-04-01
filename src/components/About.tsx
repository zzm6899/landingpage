const SKILLS = {
  Technical: ['Python', 'Java', 'TensorFlow', 'YOLOv5', 'SQL', 'GCP', 'Kubernetes', 'Docker', 'Networking', 'Data Analytics'],
  'Soft Skills': ['Project Management', 'Stakeholder Communication', 'Problem-Solving', 'Client Engagement', 'Entrepreneurship'],
  'Currently Learning': ['Google Cloud Associate Engineer', 'Advanced ML Pipelines', 'Kubernetes Orchestration'],
}

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <p className="section-label">01. About Me</p>
        <h2 className="section-title">Engineering Identity</h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '48px',
          alignItems: 'start',
        }}>
          {/* Bio */}
          <div>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.9, marginBottom: '20px' }}>
              I am a final-year Data Engineering student at the{' '}
              <span style={{ color: 'var(--text-primary)' }}>University of Technology Sydney</span>{' '}
              with a strong passion for building systems that create real-world impact. I chose this path
              because I am driven by the challenge of solving complex problems through data, technology,
              and structured thinking.
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.9, marginBottom: '20px' }}>
              Throughout my university journey, I have balanced technical development with leadership and
              professional experience — from contributing to analytical projects at{' '}
              <span style={{ color: 'var(--text-primary)' }}>KPMG</span>{' '}
              to cloud-based system designs and ML model development.
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.9 }}>
              Beyond academics, I am actively involved in leadership roles, event coordination, and
              entrepreneurship. I remain motivated, curious, and committed to continuous improvement —
              approaching every opportunity as a chance to grow both technically and personally.
            </p>

            <div style={{ marginTop: '32px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <a
                href="https://www.linkedin.com/in/zacmorgan1/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
                style={{ fontSize: '13px' }}
              >
                LinkedIn ↗
              </a>
              <a
                href="mailto:Zacmorgan101@gmail.com"
                className="btn btn-outline"
                style={{ fontSize: '13px' }}
              >
                Email Me
              </a>
            </div>
          </div>

          {/* Skills */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
            {Object.entries(SKILLS).map(([category, skills]) => (
              <div key={category} className="card">
                <h3 style={{
                  fontSize: '14px',
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--accent)',
                  marginBottom: '14px',
                }}>
                  {category}
                </h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {skills.map(skill => (
                    <span key={skill} className="tag">{skill}</span>
                  ))}
                </div>
              </div>
            ))}

            {/* Education card */}
            <div className="card" style={{ borderLeft: '3px solid var(--accent)' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--accent)', marginBottom: '6px' }}>
                Education
              </div>
              <div style={{ fontWeight: 600, marginBottom: '4px' }}>
                Bachelor of Data Science Engineering (Honours)
              </div>
              <div style={{ color: 'var(--text-secondary)', fontSize: '14px', marginBottom: '8px' }}>
                University of Technology Sydney · 2023 – 2026
              </div>
              <div style={{ display: 'flex', gap: '12px' }}>
                <span className="tag">GPA: 6.38</span>
                <span className="tag">WAM: 85.14</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
