import { useState } from 'react'

interface Reflection {
  id: string
  title: string
  subtitle: string
  date: string
  sections: { question: string; answer: string }[]
  references?: string[]
}

const REFLECTIONS: Reflection[] = [
  {
    id: 'kpmg',
    title: 'Workplace Reflection',
    subtitle: 'KPMG Australia — Data Analyst Internship',
    date: 'Nov 2025 – Feb 2026',
    sections: [
      {
        question: 'What were your expectations before joining?',
        answer:
          'Before commencing my internship at KPMG Australia, I held a relatively narrow view of what professional services work would entail. I anticipated a highly structured environment centred on spreadsheet maintenance, documentation reviews, and administrative support for senior staff. I expected the work to be largely procedural, with well-defined instructions and limited scope for independent decision-making. More broadly, I assumed that as an intern my contributions would remain observational — useful to the team, but not consequential to the outcome of any real engagement.\n\n' +
          'I also carried assumptions about the pace of professional settings. Having only experienced university group projects, where timelines are relatively forgiving and expectations are clearly scaffolded, I presumed corporate work would follow a similar structure. These expectations, I would soon discover, were significantly misaligned with reality.',
      },
      {
        question: 'What was the reality? How did it differ from your expectations?',
        answer:
          'The reality of working at KPMG was far more demanding — and ultimately far more rewarding — than I had anticipated. Within my first week, I was integrated into a live client engagement: a Long Service Leave (LSL) remediation project requiring complex analysis of multi-year payroll datasets to identify and resolve entitlement discrepancies affecting real employees.\n\n' +
          'The work demanded independent technical judgement. I was not handed clean, structured data with a clear methodology to follow. Instead, I was expected to diagnose inconsistencies in source systems, design SQL schemas and stored procedures to handle that complexity, and write Python automation scripts that could be relied upon by senior managers in their own client-facing deliverables. The accountability this carried was something I had not fully anticipated, and I felt the weight of that responsibility acutely during the early weeks of the engagement.\n\n' +
          'I was also surprised by how central communication was to performing well. In a compliance-driven professional services context, an issue that is identified but not clearly escalated is, in practice, an issue that does not exist. Learning to communicate proactively — to articulate findings, flag ambiguities, and raise potential risks before they became problems — required a conscious shift in how I operated.',
      },
      {
        question: 'What lessons were the most important? Why?',
        answer:
          'Three lessons emerged as central to my development during this experience.\n\n' +
          'The first was the importance of professional accountability. Gibbs (1988) notes that reflective practice requires honest engagement with what did and did not go well. Early in the engagement, I made an error in a reconciliation query that produced incorrect figures before review. Though the error was caught and corrected, the experience reinforced that in a compliance-driven environment, the downstream consequences of inaccurate output are significant. I became considerably more disciplined in reviewing my own work before passing it on, adopting a habit of cross-referencing outputs against source data rather than assuming correctness.\n\n' +
          'The second lesson was about asking the right questions early. On more than one occasion, I spent extended time on an analytical path only to discover I had misunderstood the scope of a requirement. Learning to seek early clarification — without projecting a lack of competence — was a professional skill that required deliberate development. As Schön (1983) argues, the ability to reflect in action, to notice when a frame is not working and adjust accordingly, is a defining characteristic of professional practice.\n\n' +
          'The third lesson was that technical skills matter only when paired with the ability to communicate their outputs. Producing a well-designed SQL stored procedure has no value if the person relying on it cannot understand what it does or trust that it is correct. I learned to document my work clearly and translate technical processes into accessible language for non-technical stakeholders.',
      },
      {
        question: 'What is your value proposition to an employer?',
        answer:
          'Reflecting on this experience, I believe my value proposition to a prospective employer lies in the combination of technical capability and professional adaptability I have developed.\n\n' +
          'From a technical standpoint, I can work with messy, real-world data — not just classroom datasets. I understand how to design data pipelines end to end, write production-quality SQL and Python, and produce outputs that others can rely upon. These skills are grounded in a live, compliance-driven engagement rather than purely academic exercises.\n\n' +
          'From a professional standpoint, I have demonstrated the capacity to operate in high-stakes environments, manage competing priorities, and communicate meaningfully with diverse stakeholders. My broader experience — managing club finances for 50+ members, leading a photography team at 15,000-person events, and running my own freelance business — reinforces that I can take ownership, remain composed under pressure, and deliver consistently.\n\n' +
          'In short, I bring both the ability to do the work and the professional maturity to operate within a team that depends on that work.',
      },
      {
        question: 'How did this internship shape your career direction?',
        answer:
          'This experience clarified my professional direction in a meaningful way. Prior to the internship, I was drawn broadly to data and technology without a strong sense of the kind of environment in which I wanted to apply those skills. The internship helped me understand that what motivates me is not just the technical challenge itself, but the connection between that challenge and a real-world outcome.\n\n' +
          'Working on the LSL remediation engagement — knowing that the accuracy of my analysis directly affected the entitlements of real people — gave the work a sense of purpose I had not fully encountered in academic settings. I am now actively drawn to roles in data engineering, applied analytics, and consulting where the work I produce has tangible, meaningful impact: on clients, on organisations, or on communities.\n\n' +
          'The Industrus Engineering Graduate Program, for example, appeals to me specifically because of the breadth and social value of its projects — from renewable energy infrastructure to disaster recovery planning. These are environments where data, engineering, and human outcomes intersect, which is precisely where I want to contribute.',
      },
    ],
    references: [
      'Gibbs, G. (1988). Learning by doing: A guide to teaching and learning methods. Further Education Unit.',
      'Schön, D. A. (1983). The reflective practitioner: How professionals think in action. Basic Books.',
    ],
  },
  {
    id: 'academic',
    title: 'Academic & Personal Reflection',
    subtitle: 'University of Technology Sydney — Engineering Journey',
    date: '2023 – Present',
    sections: [
      {
        question: 'What motivated you to pursue Data Engineering?',
        answer:
          'My decision to study Data Engineering at the University of Technology Sydney was not the product of a single moment of clarity, but rather the gradual accumulation of experiences that pointed me toward a discipline where technical rigour and real-world application converge.\n\n' +
          'From a young age I was drawn to understanding how systems work beneath the surface — not just using technology, but designing and interrogating it. When I began exploring degree options, I found that Data Engineering offered something rare: the breadth of software development, the depth of data science, and the practical demands of infrastructure management. It was, in essence, an invitation to build things that mattered.\n\n' +
          'I was also motivated by the observation that data is increasingly the mechanism through which significant decisions — clinical, commercial, environmental, and social — are made. The opportunity to contribute meaningfully to that process felt both intellectually compelling and professionally purposeful. Moon (2004) argues that motivation grounded in personal meaning, rather than extrinsic reward alone, is foundational to deep and sustained learning. My experience has borne this out.',
      },
      {
        question: 'What has been the most significant learning experience?',
        answer:
          'Two experiences stand out as genuinely transformative.\n\n' +
          'The first was developing a machine learning model for breast cancer tumour recognition using TensorFlow and YOLOv5. What made this experience significant was not merely the technical achievement — achieving 98% detection accuracy — but the ethical dimension it surfaced. Working on a system designed to assist in medical diagnosis required me to sit with the weight of false negatives in a way that no other project had. I found myself thinking about what it means to build tools that affect human lives, and how that responsibility should shape every architectural decision. This was the moment I understood that engineering is not a neutral practice.\n\n' +
          'The second experience has been building and maintaining my home server infrastructure. Running TrueNAS, Pi-hole, Docker Compose stacks, and self-hosted applications in a live environment forced me to close the gap between theory and practice in a way that coursework alone could not. When a service fails at 11pm and you are the only person who can fix it, the learning is immediate and durable. Kolb (1984) describes this kind of direct, consequential experience as essential to the formation of genuine competence — and this environment has consistently provided it.\n\n' +
          'My current Honours research — investigating NLP and LLM techniques for structured extraction from OCR-generated documents — is extending this pattern. Working with real-world documents (receipts, invoices, forms) has confronted me with the genuine difficulty of the problem: OCR errors, inconsistent formatting, and the gap between what a language model can do in a demo and what it does reliably under production conditions.',
      },
      {
        question: 'How have you grown as an engineering professional?',
        answer:
          'Looking back across my university years, the most meaningful dimension of my growth has been the development of professional identity — a clearer sense of who I am as an engineer and what I stand for in a professional context.\n\n' +
          'Early in my studies, I equated professional competence almost entirely with technical skill. What I have come to understand, through my internship at KPMG, my leadership roles across UTS clubs, and my independent work as a photographer, is that technical skill is a necessary but insufficient condition for professional effectiveness. The capacity to lead under ambiguity, communicate with clarity, and take genuine ownership of outcomes is what distinguishes a competent technician from a trusted professional.\n\n' +
          'Managing the UTS Taekwondo Society finances for two years — overseeing 50+ members, competition travel, and membership operations — taught me that reliability is a form of leadership. People trust you not because of what you say, but because of what consistently happens when you are responsible for something. I have carried this understanding into every subsequent role.\n\n' +
          'Leading the On the Day (OTD) photography team at SMASH! Convention reinforced this further. Coordinating a team of photographers across a 15,000-person event, managing the photo archive, and keeping communications clear under pressure required the same kind of structured, calm execution that I now apply to technical work. I no longer see a separation between "soft" and "hard" skills — both are expressions of the same underlying discipline.\n\n' +
          'As Mezirow (1991) observed, transformative learning occurs when our assumptions are challenged in ways that require us to revise our understanding. My engineering journey has been a series of such transformations — each one expanding what I believe is possible and sharpening my sense of purpose.',
      },
    ],
    references: [
      'Kolb, D. A. (1984). Experiential learning: Experience as the source of learning and development. Prentice Hall.',
      'Mezirow, J. (1991). Transformative dimensions of adult learning. Jossey-Bass.',
      'Moon, J. A. (2004). A handbook of reflective and experiential learning: Theory and practice. RoutledgeFalmer.',
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
        <p style={{ color: 'var(--text-secondary)', fontSize: '15px', marginBottom: '40px', maxWidth: '680px' }}>
          Critical reflections on professional and personal growth as an engineer.
          Written using Gibbs' Reflective Cycle and Schön's reflective practice framework.
          All references formatted in <strong style={{ color: 'var(--text-primary)' }}>APA 7th Edition</strong>.
        </p>

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

          {/* References */}
          {active.references && (
            <div style={{
              marginTop: '28px',
              paddingTop: '20px',
              borderTop: '1px solid var(--border)',
            }}>
              <div style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '12px',
                color: 'var(--accent)',
                marginBottom: '12px',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
              }}>
                References (APA 7th Edition)
              </div>
              {active.references.map((ref, i) => (
                <p key={i} style={{
                  color: 'var(--text-secondary)',
                  fontSize: '13px',
                  lineHeight: 1.7,
                  marginBottom: i < active.references!.length - 1 ? '8px' : '0',
                  paddingLeft: '24px',
                  textIndent: '-24px',
                }}>
                  {ref}
                </p>
              ))}
            </div>
          )}
        </div>

        <p style={{
          marginTop: '16px',
          fontSize: '12px',
          fontFamily: 'var(--font-mono)',
          color: 'var(--text-secondary)',
          fontStyle: 'italic',
        }}>
          * Due to client confidentiality obligations, no workplace materials are included in the KPMG reflection.
        </p>
      </div>
    </section>
  )
}
