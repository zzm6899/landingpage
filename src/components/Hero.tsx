import { useState, useEffect } from 'react'

const ROLES = [
  'Data engineer.',
  'ML builder.',
  'Problem solver.',
  'Infrastructure nerd.',
]

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (isPaused) return
    const current = ROLES[roleIndex]

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        const next = current.slice(0, displayed.length + 1)
        setDisplayed(next)
        if (next === current) setIsPaused(true)
      } else {
        const next = current.slice(0, displayed.length - 1)
        setDisplayed(next)
        if (next === '') {
          setIsDeleting(false)
          setRoleIndex(prevIndex => (prevIndex + 1) % ROLES.length)
        }
      }
    }, isDeleting ? 45 : 70)

    return () => clearTimeout(timeout)
  }, [displayed, isDeleting, roleIndex, isPaused])

  useEffect(() => {
    if (!isPaused) return
    const timer = setTimeout(() => {
      setIsPaused(false)
      setIsDeleting(true)
    }, 2200)
    return () => clearTimeout(timer)
  }, [isPaused])
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

      {/* Gradient blob 1 */}
      <div className="hero-blob" style={{
        position: 'absolute',
        top: '20%',
        right: '-10%',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(88,166,255,0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Gradient blob 2 */}
      <div className="hero-blob-2" style={{
        position: 'absolute',
        bottom: '10%',
        left: '-8%',
        width: '380px',
        height: '380px',
        background: 'radial-gradient(circle, rgba(63,185,80,0.05) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container">
        <div style={{ maxWidth: '720px' }}>
          <p className="hero-intro" style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '14px',
            color: 'var(--accent)',
            marginBottom: '20px',
            opacity: 0.9,
          }}>
            Hi, my name is
          </p>

          <h1 className="hero-name" style={{
            fontSize: 'clamp(42px, 7vw, 72px)',
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: '-0.03em',
            color: 'var(--text-primary)',
            marginBottom: '8px',
          }}>
            Zac Morgan.
          </h1>

          <h2 className="hero-role" style={{
            fontSize: 'clamp(28px, 4.5vw, 52px)',
            fontWeight: 700,
            lineHeight: 1.2,
            letterSpacing: '-0.02em',
            color: 'var(--text-secondary)',
            marginBottom: '28px',
            minHeight: '1.2em',
          }}>
            {displayed}<span className="typewriter-cursor" />
          </h2>

          <p className="hero-desc" style={{
            fontSize: '17px',
            color: 'var(--text-secondary)',
            lineHeight: 1.85,
            maxWidth: '600px',
            marginBottom: '44px',
          }}>
            Final-year <span style={{ color: 'var(--text-primary)' }}>Data Engineering (Honours)</span> student
            at UTS with industry experience at{' '}
            <span style={{ color: 'var(--text-primary)' }}>KPMG Australia</span>.
            I build ML models, data pipelines, and self-hosted infrastructure — and lead teams
            both on the convention floor and in the boardroom.
          </p>

          <div className="hero-cta" style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <a href="#experience" className="btn btn-primary">
              View My Work →
            </a>
            <a href="#cover-letter" className="btn btn-outline">
              Cover Letter
            </a>
          </div>

          {/* Stats row */}
          <div className="hero-stats" style={{
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
              { value: '15k+', label: 'Event Attendees Led' },
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
