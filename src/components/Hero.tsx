export default function Hero() {
  return (
    <section id="hero" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      paddingTop: '72px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background grid */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `
          linear-gradient(rgba(88,166,255,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(88,166,255,0.03) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
        pointerEvents: 'none',
      }} />

      {/* Gradient blob */}
      <div style={{
        position: 'absolute',
        top: '20%',
        right: '-10%',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(88,166,255,0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container">
        <div style={{ maxWidth: '700px' }}>
          <p style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '14px',
            color: 'var(--accent)',
            marginBottom: '20px',
            opacity: 0.9,
          }}>
            Hi, my name is
          </p>

          <h1 style={{
            fontSize: 'clamp(42px, 7vw, 72px)',
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: '-0.03em',
            color: 'var(--text-primary)',
            marginBottom: '8px',
          }}>
            Zac Morgan.
          </h1>

          <h2 style={{
            fontSize: 'clamp(32px, 5vw, 56px)',
            fontWeight: 700,
            lineHeight: 1.2,
            letterSpacing: '-0.02em',
            color: 'var(--text-secondary)',
            marginBottom: '28px',
          }}>
            I build data-driven systems.
          </h2>

          <p style={{
            fontSize: '18px',
            color: 'var(--text-secondary)',
            lineHeight: 1.8,
            maxWidth: '560px',
            marginBottom: '44px',
          }}>
            Data Engineering student at <span style={{ color: 'var(--text-primary)' }}>UTS</span> with
            hands-on experience at <span style={{ color: 'var(--text-primary)' }}>KPMG</span>.
            I build ML models, cloud infrastructure, and analytics pipelines that translate
            complex data into real-world business value.
          </p>

          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <a href="#experience" className="btn btn-primary">
              View My Work →
            </a>
            <a href="#contact" className="btn btn-outline">
              Get In Touch
            </a>
          </div>

          {/* Stats row */}
          <div style={{
            display: 'flex',
            gap: '40px',
            marginTop: '64px',
            paddingTop: '40px',
            borderTop: '1px solid var(--border)',
            flexWrap: 'wrap',
          }}>
            {[
              { value: '6.38', label: 'GPA at UTS' },
              { value: '98%', label: 'ML Model Accuracy' },
              { value: '3+', label: 'Years Experience' },
              { value: 'KPMG', label: 'Industry Experience' },
            ].map(stat => (
              <div key={stat.label}>
                <div style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '24px',
                  fontWeight: 700,
                  color: 'var(--accent)',
                }}>
                  {stat.value}
                </div>
                <div style={{
                  fontSize: '13px',
                  color: 'var(--text-secondary)',
                  marginTop: '2px',
                }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
