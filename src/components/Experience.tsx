interface Job {
  title: string
  company: string
  period: string
  type: string
  points: string[]
}

const EXPERIENCE: Job[] = [
  {
    title: 'Data Analyst',
    company: 'KPMG Australia',
    period: 'Nov 2025 – Feb 2026',
    type: 'Internship',
    points: [
      'Performed Long Service Leave (LSL) remediation analysis, validating historical payroll and entitlement data to ensure regulatory compliance.',
      'Designed and optimised SQL database schemas, stored procedures, and automation workflows to improve data processing efficiency.',
      'Conducted complex data analysis using SQL queries and Excel, identifying discrepancies and producing reconciliation reports for stakeholders.',
      'Developed Python scripts and internal application tools to automate data extraction, transformation, and export processes.',
      'Collaborated within cross-functional project teams to deliver high-quality analytical outputs under tight project deadlines.',
    ],
  },
  {
    title: 'Event / Personal Photographer',
    company: 'Zac Morgan Photography',
    period: 'Apr 2024 – Present',
    type: 'Freelance',
    points: [
      'Captured large-scale conventions and entertainment events including SMASH! (15,000+ attendees) and the FLOW! Japanese band tour.',
      'Photographed 30+ weddings and private events, performing high-quality, natural imagery aligned with client expectations.',
      'Negotiated multi-event contracts with Asahi Beverages and Navarra Venues, driving client acquisition and long-term partnerships.',
      'Planned and executed event photography projects end-to-end, achieving 100% on-time delivery and high client satisfaction.',
    ],
  },
  {
    title: 'Product Recovery and Quality Co-Worker',
    company: 'IKEA',
    period: 'May 2023 – Jul 2024',
    type: 'Part-time',
    points: [
      'Led sustainability initiatives to refurbish returned and damaged furniture, increasing weekly recovery rates by 20%.',
      'Developed improved sorting workflows and repacking protocols, reducing processing times by 15%.',
      'Conducted regular audits achieving a 30% reduction in customer returns through increased compliance and product integrity.',
    ],
  },
]

const VOLUNTEERING = [
  {
    title: 'Rapid Response Team Member',
    org: 'SMASH! Convention',
    period: 'Dec 2024 – Present',
    desc: 'Coordinate event logistics and crowd management for conventions with 15,000+ attendees. Administer first aid and manage emergency incidents.',
  },
  {
    title: 'Treasurer & Sponsorship Director',
    org: 'UTS Clubs (Multiple)',
    period: 'Oct 2023 – Present',
    desc: 'Oversee club budgets and sponsorship agreements with brands including TimeZone, HobbyCo, CrunchyRoll, Hoyts, and Kinokuniya.',
  },
  {
    title: 'Member',
    org: 'National Youth Science Forum',
    period: 'Jan 2022 – Present',
    desc: 'Deliver prototype development and data modelling projects, conducting experimental research and building networks with industry leaders.',
  },
]

export default function Experience() {
  return (
    <section id="experience" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <p className="section-label">02. Experience</p>
        <h2 className="section-title">Where I've Worked</h2>

        {/* Work Experience */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '64px' }}>
          {EXPERIENCE.map((job) => (
            <div key={job.company} className="card">
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                flexWrap: 'wrap',
                gap: '8px',
                marginBottom: '16px',
              }}>
                <div>
                  <h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '4px' }}>
                    {job.title}{' '}
                    <span style={{ color: 'var(--accent)' }}>@ {job.company}</span>
                  </h3>
                  <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                    <span style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '13px',
                      color: 'var(--text-secondary)',
                    }}>
                      {job.period}
                    </span>
                    <span className="tag">{job.type}</span>
                  </div>
                </div>
              </div>
              <ul style={{
                listStyle: 'none',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
              }}>
                {job.points.map((point, i) => (
                  <li key={i} style={{
                    color: 'var(--text-secondary)',
                    fontSize: '15px',
                    lineHeight: 1.7,
                    paddingLeft: '18px',
                    position: 'relative',
                  }}>
                    <span style={{
                      position: 'absolute',
                      left: 0,
                      color: 'var(--accent)',
                    }}>▸</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Volunteering */}
        <p className="section-label">Volunteering & Leadership</p>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '20px',
        }}>
          {VOLUNTEERING.map((vol) => (
            <div key={vol.org} className="card">
              <div style={{ fontWeight: 600, marginBottom: '4px' }}>{vol.title}</div>
              <div style={{ color: 'var(--accent)', fontSize: '14px', marginBottom: '4px' }}>
                {vol.org}
              </div>
              <div style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '12px',
                color: 'var(--text-secondary)',
                marginBottom: '12px',
              }}>
                {vol.period}
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: 1.7 }}>
                {vol.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
