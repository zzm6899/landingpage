import { useState } from 'react'

interface Reflection {
  id: string
  title: string
  subtitle: string
  date: string
  sections: { question: string; answer: string }[]
}

const REFLECTIONS: Reflection[] = [
  {
    id: 'kpmg',
    title: 'Internship Reflection',
    subtitle: 'KPMG Australia — Data Analyst Internship',
    date: 'Nov 2025 – Feb 2026',
    sections: [
      {
        question: 'What were your expectations about your internship before you joined?',
        answer:
          'Before commencing my internship at KPMG, I expected a highly structured corporate environment ' +
          'primarily focused on technical accounting and audit procedures. I anticipated that my role would ' +
          'involve supporting senior team members with spreadsheets, documentation reviews, and structured ' +
          'analytical tasks. I expected the work to be procedural, with clearly defined instructions and ' +
          'limited ambiguity. I also assumed that, as an intern, my responsibilities would be relatively ' +
          'observational and administrative in nature.',
      },
      {
        question: 'What was the reality? How was it different from your expectations?',
        answer:
          'The reality was far more dynamic and collaborative than I had anticipated. KPMG operates in a ' +
          'fast-paced, project-based environment where client demands and engagement timelines can shift quickly. ' +
          'Rather than working independently on isolated tasks, I was integrated into team-based engagements ' +
          'where communication, initiative, and adaptability were essential.\n\n' +
          'One of the most surprising aspects was the level of responsibility entrusted to interns. I was ' +
          'assigned meaningful work that contributed directly to engagement outcomes, requiring ownership and ' +
          'accountability. The workplace environment demanded proactive communication — asking questions, ' +
          'clarifying expectations, and ensuring alignment with team objectives. The experience highlighted ' +
          'that professional services is not just about technical competence, but also about stakeholder ' +
          'management, professionalism, and the ability to perform under pressure.',
      },
      {
        question: 'What lessons were the most important from your internship? Why were they important?',
        answer:
          'The most important lessons centred around accountability, communication, and adaptability.\n\n' +
          'Accountability was critical because even minor inaccuracies can have downstream effects in client ' +
          'deliverables. I learned the importance of reviewing my work thoroughly and taking full responsibility ' +
          'for outputs.\n\n' +
          'Communication proved equally essential. Clearly articulating findings, raising potential issues ' +
          'early, and collaborating effectively improved efficiency and reduced rework.\n\n' +
          'Adaptability became vital in managing shifting priorities and tight deadlines. In a project-based ' +
          'environment, being able to adjust quickly while maintaining quality is a key professional skill.\n\n' +
          'These lessons were important because they extended beyond technical knowledge — they shaped how I ' +
          'operate within a professional environment.',
      },
      {
        question: 'After your workplace experience, what would you say your value proposition would be to an employer?',
        answer:
          'Following this experience, my value proposition lies in my ability to combine analytical thinking ' +
          'with structured execution in high-performance environments. I bring strong technical foundations, ' +
          'attention to detail, and the ability to integrate quickly into collaborative teams.\n\n' +
          'I can demonstrate this through measurable engagement contributions, consistent academic performance ' +
          'in data and analytics subjects, and leadership involvement in extracurricular and professional ' +
          'activities. My internship experience shows that I can operate within compliance-driven environments, ' +
          'manage deadlines effectively, and communicate professionally with diverse stakeholders.',
      },
      {
        question: 'How did your internship influence the type of role in which you are interested?',
        answer:
          'The internship significantly clarified my career direction. I developed a strong interest in roles ' +
          'that blend analytical problem-solving with client interaction — particularly within advisory, ' +
          'assurance, or data-driven consulting environments.\n\n' +
          'Rather than pursuing purely technical roles isolated from business context, I am motivated toward ' +
          'positions where I can apply data and analytical skills to support strategic decision-making and ' +
          'organisational improvement. The experience confirmed that I thrive in environments that are ' +
          'structured yet dynamic, collaborative yet accountable — qualities that define professional services ' +
          'and advisory careers.',
      },
    ],
  },
  {
    id: 'academic',
    title: 'Academic & Personal Reflection',
    subtitle: 'University of Technology Sydney — Data Engineering Journey',
    date: '2023 – Present',
    sections: [
      {
        question: 'What motivated you to pursue Data Engineering?',
        answer:
          'My motivation for studying Data Engineering at UTS stems from a deep curiosity about how structured ' +
          'thinking and technology can solve real-world problems at scale. I am particularly drawn to the ' +
          'intersection of data systems, cloud infrastructure, and machine learning — areas where technical ' +
          'decisions have direct, measurable business outcomes.\n\n' +
          'I chose this degree because it offers both the rigour of engineering and the versatility of data ' +
          'science, preparing me to contribute across industries and domains.',
      },
      {
        question: 'What has been the most significant learning experience during your studies?',
        answer:
          'The most significant learning experience was developing my machine learning model for breast cancer ' +
          'tumour recognition. This project required me to independently research, design, and implement a ' +
          'TensorFlow-based pipeline achieving 98% detection accuracy. The process taught me disciplined ' +
          'problem-solving, iterative model evaluation, and the ethical weight of building systems that ' +
          'affect human lives.\n\n' +
          'Equally impactful was my home server project, where I applied classroom knowledge about networking ' +
          'and virtualisation to a live, production-like environment — reinforcing that theory and practice ' +
          'must always be connected.',
      },
      {
        question: 'How have you grown as an engineering professional?',
        answer:
          'I have grown from a technically curious student into a professional who understands that engineering ' +
          'is fundamentally about people — the teams you work within, the clients you serve, and the communities ' +
          'your systems affect.\n\n' +
          'My leadership roles as Treasurer and Sponsorship Director across UTS clubs, combined with my KPMG ' +
          'internship, have developed my capacity to manage competing priorities, negotiate outcomes, and ' +
          'communicate complex information clearly. I approach every challenge with a growth mindset and a ' +
          'commitment to producing high-quality, reliable work.',
      },
    ],
  },
]

export default function Reflections() {
  const [activeId, setActiveId] = useState('kpmg')
  const [openSection, setOpenSection] = useState<number | null>(0)

  const active = REFLECTIONS.find(r => r.id === activeId)!

  return (
    <section id="reflections" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <p className="section-label">04. Reflections</p>
        <h2 className="section-title">Professional Reflections</h2>

        {/* Tab selector */}
        <div style={{ display: 'flex', gap: '12px', marginBottom: '40px', flexWrap: 'wrap' }}>
          {REFLECTIONS.map(r => (
            <button
              key={r.id}
              onClick={() => { setActiveId(r.id); setOpenSection(0) }}
              style={{
                padding: '10px 20px',
                borderRadius: 'var(--radius)',
                border: '1px solid',
                borderColor: activeId === r.id ? 'var(--accent)' : 'var(--border)',
                background: activeId === r.id ? 'var(--accent-glow)' : 'transparent',
                color: activeId === r.id ? 'var(--accent)' : 'var(--text-secondary)',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: 600,
                transition: 'all 0.2s',
              }}
            >
              {r.title}
            </button>
          ))}
        </div>

        {/* Active reflection */}
        <div className="card" style={{ marginBottom: '0' }}>
          <div style={{ marginBottom: '28px', paddingBottom: '20px', borderBottom: '1px solid var(--border)' }}>
            <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '6px' }}>{active.title}</h3>
            <div style={{ color: 'var(--accent)', fontSize: '14px', marginBottom: '4px' }}>{active.subtitle}</div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--text-secondary)' }}>
              {active.date}
            </div>
          </div>

          {/* Accordion sections */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
            {active.sections.map((section, i) => (
              <div key={i} style={{ borderBottom: '1px solid var(--border)' }}>
                <button
                  onClick={() => setOpenSection(openSection === i ? null : i)}
                  style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '16px 0',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left',
                    color: 'var(--text-primary)',
                    fontWeight: 600,
                    fontSize: '15px',
                    gap: '12px',
                  }}
                >
                  <span>{section.question}</span>
                  <span style={{
                    color: 'var(--accent)',
                    fontSize: '18px',
                    flexShrink: 0,
                    transform: openSection === i ? 'rotate(45deg)' : 'rotate(0)',
                    transition: 'transform 0.2s',
                  }}>+</span>
                </button>
                {openSection === i && (
                  <div style={{
                    paddingBottom: '20px',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.9,
                    fontSize: '15px',
                    whiteSpace: 'pre-line',
                  }}>
                    {section.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <p style={{
          marginTop: '16px',
          fontSize: '12px',
          fontFamily: 'var(--font-mono)',
          color: 'var(--text-secondary)',
          fontStyle: 'italic',
        }}>
          * Due to client confidentiality and professional obligations, no workplace photos are included in the KPMG reflection.
        </p>
      </div>
    </section>
  )
}
