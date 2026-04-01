const SKILLS = {
  Technical: ['Python', 'Java', 'TensorFlow', 'YOLOv5', 'NLP / LLMs', 'SQL', 'GCP', 'Docker', 'Networking', 'Data Analytics'],
  'Soft Skills': ['Project Management', 'Stakeholder Communication', 'Problem-Solving', 'Client Engagement', 'Team Leadership'],
  'Currently Working On': ['Honours NLP Research', 'Advanced ML Pipelines', 'Sports & Event Photography'],
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
              Alongside my studies I have built real industry experience at{' '}
              <span style={{ color: 'var(--text-primary)' }}>KPMG Australia</span>,
              contributed to Honours research in NLP and document intelligence, and run my own
              photography business as a core team member at Oceania-wide sports events and
              major conventions like{' '}
              <span style={{ color: 'var(--text-primary)' }}>SMASH!</span>.
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.9 }}>
              Beyond technical work, I have led teams — as Treasurer of the UTS Taekwondo Society,
              Sponsorship Director across multiple clubs, and OTD Photographer Lead at large-scale events.
              I approach every challenge with curiosity, pragmatism, and a drive to actually ship things.
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
                href="mailto:zacmorgan101@gmail.com"
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
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <span className="tag">GPA: 6.38</span>
                <span className="tag">WAM: 85.14</span>
                <span className="tag">Honours Pending</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
