const LINKS = [
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/zacmorgan1',
    href: 'https://www.linkedin.com/in/zacmorgan1/',
    icon: '🔗',
    desc: 'Connect professionally',
  },
  {
    label: 'GitHub',
    value: 'github.com/zzm6899',
    href: 'https://github.com/zzm6899',
    icon: '💻',
    desc: 'See my code & projects',
  },
  {
    label: 'Email',
    value: 'zacmorgan101@gmail.com',
    href: 'mailto:zacmorgan101@gmail.com',
    icon: '✉️',
    desc: 'Get in touch directly',
  },
  {
    label: 'Phone',
    value: '+61 490 163 783',
    href: 'tel:+61490163783',
    icon: '📱',
    desc: 'Available for calls',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <p className="section-label">06. Contact</p>
        <h2 className="section-title">Get In Touch</h2>

        <div style={{ maxWidth: '640px' }}>
          <p style={{
            color: 'var(--text-secondary)',
            fontSize: '17px',
            lineHeight: 1.8,
            marginBottom: '48px',
          }}>
            I am currently open to graduate roles, internships, and project collaborations in
            data engineering, analytics, and cloud infrastructure. Whether you have a question,
            an opportunity, or just want to say hi — my inbox is always open.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px', marginBottom: '48px' }}>
            {LINKS.map(link => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="card"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  textDecoration: 'none',
                  color: 'inherit',
                }}
              >
                <span style={{ fontSize: '28px' }}>{link.icon}</span>
                <div>
                  <div style={{ fontWeight: 600, fontSize: '14px', marginBottom: '2px' }}>{link.label}</div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--accent)' }}>
                    {link.value}
                  </div>
                  <div style={{ fontSize: '12px', color: 'var(--text-secondary)', marginTop: '2px' }}>
                    {link.desc}
                  </div>
                </div>
              </a>
            ))}
          </div>

          <a href="mailto:zacmorgan101@gmail.com" className="btn btn-primary" style={{ fontSize: '15px', padding: '14px 32px' }}>
            Say Hello ✉️
          </a>
        </div>
      </div>

      {/* Footer */}
      <div style={{
        marginTop: '96px',
        paddingTop: '32px',
        borderTop: '1px solid var(--border)',
        textAlign: 'center',
        color: 'var(--text-secondary)',
        fontFamily: 'var(--font-mono)',
        fontSize: '13px',
      }}>
        <div className="container">
          <p>Built with React + TypeScript · Containerised with Docker · Deployed via GitHub Actions</p>
          <p style={{ marginTop: '8px' }}>© {new Date().getFullYear()} Zac Morgan. All rights reserved.</p>
        </div>
      </div>
    </section>
  )
}
