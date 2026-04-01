export default function CoverLetter() {
  const criteria = [
    {
      number: '3.1',
      criterion: 'Commitment to Ethical Conduct & Professional Accountability',
      s: 'During my internship at KPMG Australia, I worked on a Long Service Leave remediation engagement where accurate, compliant reporting was critical to protecting employee entitlements.',
      t: 'I was required to handle sensitive payroll data responsibly and ensure all analytical outputs met strict audit and compliance standards.',
      a: 'I followed KPMG\'s professional standards throughout — maintaining data confidentiality, documenting every transformation step for auditability, and escalating discrepancies to senior managers rather than resolving them in ways that could obscure issues.',
      r: 'My outputs passed internal review without amendment and were used directly in client-facing deliverables, demonstrating a consistent commitment to accuracy, transparency, and ethical practice in a compliance-driven environment.',
    },
    {
      number: '3.2',
      criterion: 'Effective Communication with Engineers & Cross-Discipline Stakeholders',
      s: 'As Treasurer and Sponsorship Director across multiple UTS clubs, I regularly communicated with corporate partners — including TimeZone, HobbyCo, CrunchyRoll, Hoyts, and Kinokuniya — who had no background in the student context I was operating within.',
      t: 'My goal was to negotiate multi-event sponsorship agreements and maintain ongoing relationships to secure sustained funding.',
      a: 'I prepared tailored sponsorship proposals that translated our club\'s value proposition into business outcomes relevant to each brand. I also adapted my communication style when briefing club committees — presenting financial summaries in plain language and strategic terms rather than raw numbers.',
      r: 'I successfully secured multi-event agreements with several major brands, funding high-quality events for hundreds of UTS students and building lasting partnerships that carried across consecutive academic years.',
    },
    {
      number: '3.3',
      criterion: 'Creative, Innovative & Proactive Engagement',
      s: 'Outside of university and work, I identified a gap in available tooling for tracking arcade card balances across multiple Australian arcade chains (Koko Amusement and Timezone).',
      t: 'I wanted to build a self-hosted solution that aggregated balance data, tracked spending patterns, and delivered insights through a web dashboard and Discord bot.',
      a: 'I independently designed and built ArcadeTracker — a Python/Flask application with automated polling, web scraping, OAuth-based API integration, SQLite storage, and a Chart.js dashboard — packaging it in Docker for portability. I took the initiative from concept to deployment without any brief or external requirement.',
      r: 'The project is now live on my home server, actively tracking multiple cards with 5-minute polling intervals, Discord slash commands, and leaderboard features. It demonstrates my ability to identify problems proactively and ship complete solutions independently.',
    },
    {
      number: '3.4',
      criterion: 'Ability to Use & Manage Information',
      s: 'During my KPMG engagement, I was responsible for analysing large historical payroll datasets spanning multiple years to identify and resolve entitlement discrepancies.',
      t: 'I needed to design reliable data pipelines that could extract, clean, and reconcile information across inconsistently structured source systems under tight delivery timelines.',
      a: 'I developed optimised SQL stored procedures and Python scripts to automate the extraction and transformation process, implementing systematic cross-referencing to surface discrepancies and generate audit-ready reconciliation reports.',
      r: 'My pipelines materially improved reporting speed and accuracy. The outputs I produced were incorporated directly into senior engagement manager deliverables — demonstrating that I can manage complex information flows at a professional standard.',
    },
    {
      number: '3.5',
      criterion: 'Managing Own Performance in a Professional Environment',
      s: 'As a final-year Data Engineering student at UTS (GPA 6.38) while simultaneously working at KPMG, I had to balance significant academic and professional demands across concurrent deadlines.',
      t: 'I needed to consistently meet both university deliverables and client-facing work obligations without allowing either to suffer.',
      a: 'I developed structured personal workflows — prioritising tasks by urgency and impact, maintaining clear progress tracking, and proactively communicating blockers to both academic supervisors and KPMG managers before they became issues.',
      r: 'I maintained academic performance above a credit-distinction average while delivering professional-standard outputs at KPMG on time. This balance reflects my ability to self-manage and perform reliably across multiple high-stakes obligations simultaneously.',
    },
    {
      number: '3.6',
      criterion: 'Teamwork & Leadership',
      s: 'Across two years serving on UTS club executive committees — including as Treasurer and Sponsorship Director — I worked within and led small cross-functional teams responsible for running large-scale events.',
      t: 'My role required coordinating between logistics, marketing, and finance subgroups while maintaining accountability for the financial health of the club.',
      a: 'I led sponsorship strategy, delegated financial reporting responsibilities, ran structured committee meetings, and mentored incoming executive members in financial management processes. When conflicts arose between subcommittees, I facilitated resolutions that kept the wider team aligned.',
      r: 'The clubs I supported successfully ran multiple major events per semester. My leadership in the sponsorship and finance domain directly enabled growth in both event quality and membership numbers year-on-year.',
    },
  ]

  return (
    <section id="cover-letter" className="section">
      <div className="container">
        <p className="section-label">05. Cover Letter</p>
        <h2 className="section-title">Cover Letter</h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '15px', marginBottom: '40px', maxWidth: '680px' }}>
          Addressed to <strong style={{ color: 'var(--text-primary)' }}>Industrus Engineering</strong> — Graduate Engineer Program.
          Written using the <strong style={{ color: 'var(--text-primary)' }}>STAR method</strong> to address all six selection criteria.
        </p>

        <div className="card" style={{ maxWidth: '820px', lineHeight: 1.9 }}>
          {/* Letter header */}
          <div style={{ marginBottom: '32px', paddingBottom: '24px', borderBottom: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
            <div>
              <div style={{ fontWeight: 700, fontSize: '18px', marginBottom: '4px' }}>Zac Morgan</div>
              <div style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>Sydney, NSW, Australia</div>
              <div style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>
                <a href="mailto:Zacmorgan101@gmail.com">Zacmorgan101@gmail.com</a> · +61 490 163 783
              </div>
              <div style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>
                <a href="https://www.linkedin.com/in/zacmorgan1/" target="_blank" rel="noopener noreferrer">
                  linkedin.com/in/zacmorgan1
                </a>
              </div>
            </div>
            <div style={{ textAlign: 'right', color: 'var(--text-secondary)', fontSize: '14px' }}>
              <div style={{ fontWeight: 600, color: 'var(--text-primary)' }}>Industrus Engineering</div>
              <div>Graduate Engineer Program</div>
              <div>April 2026</div>
            </div>
          </div>

          <p style={{ marginBottom: '20px', color: 'var(--text-secondary)' }}>
            Dear Hiring Manager,
          </p>

          <p style={{ marginBottom: '28px', color: 'var(--text-secondary)' }}>
            I am writing to apply for the{' '}
            <strong style={{ color: 'var(--text-primary)' }}>Graduate Engineer</strong> role at{' '}
            <strong style={{ color: 'var(--text-primary)' }}>Industrus Engineering</strong>. As a
            final-year Bachelor of Data Science Engineering (Honours) student at the University of Technology
            Sydney — maintaining a GPA of 6.38 — with hands-on industry experience at KPMG Australia and a
            track record of delivering independent technical projects, I am confident I can contribute
            meaningfully to Industrus's innovative engineering consulting work from day one.
          </p>

          {/* Selection criteria */}
          <div style={{ marginBottom: '28px' }}>
            {criteria.map((block, i) => (
              <div key={i} style={{
                marginBottom: '20px',
                padding: '22px',
                background: 'var(--bg-secondary)',
                borderRadius: 'var(--radius)',
                borderLeft: '3px solid var(--accent)',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px', flexWrap: 'wrap' }}>
                  <span style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                    padding: '2px 8px',
                    borderRadius: '20px',
                    background: 'rgba(88,166,255,0.12)',
                    color: 'var(--accent)',
                    border: '1px solid rgba(88,166,255,0.25)',
                    whiteSpace: 'nowrap',
                  }}>
                    Criterion {block.number}
                  </span>
                  <h4 style={{ color: 'var(--text-primary)', fontSize: '14px', fontWeight: 600, margin: 0 }}>
                    {block.criterion}
                  </h4>
                </div>
                {(['Situation', 'Task', 'Action', 'Result'] as const).map((label, j) => (
                  <p key={label} style={{ color: 'var(--text-secondary)', marginBottom: j < 3 ? '10px' : '0', fontSize: '14px', lineHeight: 1.75 }}>
                    <strong style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-mono)', fontSize: '12px' }}>{label}: </strong>
                    {[block.s, block.t, block.a, block.r][j]}
                  </p>
                ))}
              </div>
            ))}
          </div>

          <p style={{ marginBottom: '20px', color: 'var(--text-secondary)' }}>
            I am genuinely excited by Industrus's breadth of work — from renewable energy infrastructure
            to disaster recovery technology to sustainable construction. The Graduate Program's rotational
            structure aligns perfectly with my goal of building deep, cross-domain engineering experience
            early in my career. I am available at your earliest convenience and can be reached at{' '}
            <a href="mailto:Zacmorgan101@gmail.com">Zacmorgan101@gmail.com</a> or +61 490 163 783.
          </p>

          <p style={{ color: 'var(--text-secondary)', marginBottom: '8px' }}>Yours sincerely,</p>
          <p style={{ fontWeight: 700, fontSize: '16px' }}>Zac Morgan</p>

          <div style={{
            marginTop: '32px',
            paddingTop: '20px',
            borderTop: '1px solid var(--border)',
            fontSize: '13px',
            fontFamily: 'var(--font-mono)',
            color: 'var(--text-secondary)',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}>
            <span style={{ color: 'var(--accent)' }}>ℹ</span>
            STAR method applied to all 6 Industrus Engineering selection criteria (3.1 – 3.6)
          </div>
        </div>
      </div>
    </section>
  )
}
