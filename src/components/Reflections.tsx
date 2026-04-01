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
        question: 'What were your expectations before joining?',
        answer:
          'Honestly, I expected it to be quite structured and corporate — lots of spreadsheets, ' +
          'supporting senior staff, and fairly observational work. I figured as an intern I\'d be ' +
          'doing the grunt work while the real decisions happened above me. I also assumed the ' +
          'technical side would be fairly straightforward — maybe some Excel cleaning and report templates.',
      },
      {
        question: 'What was the reality? How did it differ?',
        answer:
          'Way more dynamic than I expected. I was thrown into a live client engagement almost ' +
          'immediately — a Long Service Leave remediation project — and was actually responsible for ' +
          'outputs that fed directly into what the senior managers were presenting to clients. That was ' +
          'a bit of a shock at first.\n\n' +
          'The work was also a lot more technically involved than I\'d anticipated. I was writing SQL ' +
          'stored procedures, building Python automation scripts, and working with messy historical ' +
          'payroll data that needed careful reconciliation. Nobody handed me a clean dataset — you had ' +
          'to figure out what was wrong and fix it yourself.\n\n' +
          'The other thing I didn\'t expect was how much communication mattered. Not just email or ' +
          'status updates — but really being clear when something didn\'t add up, proactively flagging ' +
          'issues before they became problems, and knowing when to escalate versus when to work through ' +
          'something independently.',
      },
      {
        question: 'What were the most important lessons?',
        answer:
          'Three things stood out.\n\n' +
          'First — accountability in a compliance environment is real. In audit and advisory work, a ' +
          'small error in a dataset can cascade into a wrong client deliverable. I got much more ' +
          'disciplined about reviewing my own work before passing it on.\n\n' +
          'Second — asking the right question early saves everyone time. I\'d sometimes spend hours ' +
          'going down a path only to realise I\'d misunderstood the requirement. Learning to clarify ' +
          'upfront without it feeling like I didn\'t know what I was doing was a real skill to develop.\n\n' +
          'Third — the technical skills I\'d built at uni were actually useful in the real world, which ' +
          'was genuinely reassuring. But applying them in a professional context — with real deadlines, ' +
          'real clients, and real consequences — is a different kind of pressure than a uni assignment.',
      },
      {
        question: 'What is your value proposition to an employer?',
        answer:
          'I can move quickly on ambiguous problems. I\'m comfortable with messy data, incomplete ' +
          'requirements, and figuring things out without needing step-by-step instructions. That\'s ' +
          'partly from university, partly from running my own photography business, and partly from ' +
          'managing club finances and sponsorships where there\'s no one above you to ask.\n\n' +
          'On the technical side, I can write production-quality SQL and Python, I understand how ' +
          'to design data pipelines end to end, and I\'ve shipped real projects — not just tutorials. ' +
          'On the professional side, I\'ve worked in a high-stakes client environment and know what ' +
          'it means to produce work that others will put their name on.',
      },
      {
        question: 'How did this shape what roles you\'re interested in?',
        answer:
          'It confirmed that I don\'t want a purely back-end data role where I\'m just building pipelines ' +
          'in isolation. The part of KPMG I enjoyed most was when the analysis I\'d done actually meant ' +
          'something — when a reconciliation I\'d built caught an error that would have caused a real ' +
          'compliance issue. That intersection of technical rigour and business outcome is where I want to be.\n\n' +
          'I\'m drawn to roles in data engineering, analytics consulting, or applied ML — places where ' +
          'I\'m solving real problems, not just maintaining infrastructure. Graduate programs like ' +
          'Industrus Engineering appeal to me specifically because of that variety and the chance to ' +
          'contribute across different types of projects early on.',
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
        question: 'Why Data Engineering?',
        answer:
          'I\'d always been more interested in how systems work than memorising facts — I wanted to ' +
          'build things. Data Engineering felt like the right fit because it sits at the intersection ' +
          'of software, infrastructure, and analysis. It\'s not just coding for coding\'s sake; every ' +
          'system you build is eventually in service of a decision or an outcome.\n\n' +
          'I was also drawn to the breadth of it. The degree forced me to understand networking, ' +
          'cloud infrastructure, machine learning, and software development — which is exactly the ' +
          'kind of generalist-with-depth background I wanted going into the workforce.',
      },
      {
        question: 'What\'s been the most significant learning experience?',
        answer:
          'Honestly, running my own home server has probably taught me more than most of my coursework — ' +
          'not because the coursework wasn\'t good, but because when something breaks in production and ' +
          'it\'s your own system, you have to actually fix it. I\'ve set up TrueNAS, Pi-hole, Docker ' +
          'stacks, DNS routing, and self-hosted web apps. When something goes down, you debug it properly.\n\n' +
          'On the academic side, the cancer tumour detection project was a turning point. Getting to ' +
          '98% accuracy sounds impressive on a slide, but the process — iterating on the architecture, ' +
          'tuning augmentation pipelines, evaluating false negative rates in a medical context — taught ' +
          'me that building ML models is mostly careful engineering, not magic.\n\n' +
          'My Honours project on NLP-based document extraction is shaping up to be the most challenging ' +
          'thing I\'ve taken on. Working with real-world OCR text is genuinely messy, and the gap between ' +
          '"LLMs can do this" and "LLMs reliably do this under real conditions" is where the interesting ' +
          'research lives.',
      },
      {
        question: 'How have you grown as an engineering professional?',
        answer:
          'I\'ve got a lot more comfortable with uncertainty. Early on I wanted clear requirements and ' +
          'a defined path before starting anything. Now I\'m better at scoping a problem, making a ' +
          'reasonable decision with incomplete information, and iterating from there.\n\n' +
          'Managing the UTS Taekwondo Society finances for two years — 50+ members, competition travel, ' +
          'membership payments — gave me a real sense of what it means to be accountable to a group of ' +
          'people who are counting on you to have things sorted. That kind of low-drama reliability is ' +
          'something I\'ve tried to carry into technical work too.\n\n' +
          'The photography side has also shaped how I think about delivery. When you\'re the only ' +
          'photographer at a 15,000-person convention coordinating a team of OTD photographers, ' +
          'managing the archive, and making sure communication doesn\'t fall apart — you learn to stay ' +
          'calm, triage fast, and keep moving.',
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
          * Due to client confidentiality obligations, no workplace materials are included in the KPMG reflection.
        </p>
      </div>
    </section>
  )
}
