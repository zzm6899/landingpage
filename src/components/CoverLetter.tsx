export default function CoverLetter() {
  const criteria = [
    {
      number: '3.1',
      criterion: 'Commitment to Ethical Conduct & Professional Accountability',
      body: [
        'During my internship at KPMG Australia, I was assigned to a Long Service Leave (LSL) remediation engagement in which accurate, compliant reporting was essential to protecting employee entitlements across a client organisation. The sensitivity of this work — involving historical payroll data belonging to real employees — required that every analytical output be handled with the highest degree of professional care.',
        'In practice, this meant adhering strictly to KPMG\'s data governance standards: maintaining confidentiality throughout, documenting every data transformation step for audit traceability, and escalating identified discrepancies to senior engagement managers through the appropriate channels rather than resolving them unilaterally. I was acutely aware that the decisions I made in how I treated that data had downstream consequences for people whose entitlements depended on the accuracy of the analysis.',
        'The outcomes of this approach were measurable. My outputs passed internal quality review without amendment and were incorporated directly into client-facing deliverables presented by senior managers. This experience gave me a grounded understanding of what professional accountability looks like in a compliance-driven environment — not as an abstract principle, but as a daily practice with real consequences.',
      ],
    },
    {
      number: '3.2',
      criterion: 'Effective Communication with Engineers & Cross-Discipline Stakeholders',
      body: [
        'In my role as Treasurer and Sponsorship Director across multiple UTS clubs, I was regularly required to communicate across very different audiences — from student committee members with limited financial background to senior representatives of corporate brands including TimeZone, HobbyCo, CrunchyRoll, Hoyts, and Kinokuniya. The central challenge in each case was translating the same underlying information into a form that was meaningful and actionable for the specific audience.',
        'For corporate partners, I prepared tailored sponsorship proposals that reframed our club\'s value proposition in terms of audience reach, brand visibility, and measurable event outcomes. For internal committees, I adapted financial reports into plain-language summaries that supported clear decision-making without requiring accounting expertise. In both contexts, effective communication required not just clarity of expression, but genuine attention to what the other party needed to know.',
        'This approach produced tangible results. I successfully negotiated multi-event sponsorship agreements with several major brands, securing funding that enabled high-quality events for hundreds of UTS students and building partnerships that extended across consecutive academic years. These outcomes demonstrated that cross-disciplinary communication, when approached with intentionality, is itself a strategic capability.',
      ],
    },
    {
      number: '3.3',
      criterion: 'Creative, Innovative & Proactive Engagement',
      body: [
        'My engagement with creative and innovative problem-solving is perhaps best illustrated through a project I initiated entirely independently. I identified a practical gap: there was no consolidated tool available for tracking card balances across multiple Australian arcade chains — specifically Koko Amusement and Timezone. Rather than accepting this as a limitation, I treated it as an engineering problem worth solving.',
        'I designed and built ArcadeTracker from the ground up: a self-hosted Python/Flask application incorporating automated polling at five-minute intervals, web scraping for Koko cards, OAuth-based API integration for Timezone, SQLite storage for historical data, Chart.js visualisations for spending analytics, and a Discord bot with slash commands and leaderboard functionality. The entire system was containerised in Docker for portable deployment. No brief existed for this project; the decision to build it, define its scope, and see it through to production was entirely mine.',
        'ArcadeTracker is now live on my home server and actively in use. The project demonstrates my capacity to identify a problem proactively, conceptualise an end-to-end solution, and deliver a working product without external direction — which I understand to be precisely the kind of initiative that distinguishes a strong graduate engineer in a consulting environment.',
      ],
    },
    {
      number: '3.4',
      criterion: 'Ability to Use & Manage Information',
      body: [
        'During my KPMG engagement, I was responsible for analysing multi-year historical payroll datasets to identify and resolve Long Service Leave entitlement discrepancies. The challenge was not simply one of scale — it was one of complexity. Source systems were inconsistently structured, data definitions varied across time periods, and the reconciliation logic required careful cross-referencing of records that did not map cleanly to one another.',
        'To address this, I designed and built a data pipeline using optimised SQL stored procedures and Python automation scripts that extracted, transformed, and reconciled the relevant information in a repeatable, auditable manner. I implemented systematic cross-referencing checks to surface discrepancies before they reached the reporting stage, and structured my outputs as audit-ready reconciliation reports that could be reviewed and trusted by senior managers without requiring them to interrogate the underlying logic themselves.',
        'The pipeline I developed materially improved both the speed and accuracy of the engagement\'s reporting outputs. That those outputs were subsequently used directly in client-facing deliverables reflects the degree to which I was able to manage information at a professional standard — not merely processing data, but engineering a reliable system for transforming it into something decision-makers could act upon.',
      ],
    },
    {
      number: '3.5',
      criterion: 'Managing Own Performance in a Professional Environment',
      body: [
        'During the final year of my Bachelor of Data Science Engineering (Honours) at UTS, I simultaneously undertook a full-time internship at KPMG Australia. This arrangement required managing significant and concurrent obligations: university assignments and Honours research on one side, and client-facing analytical work with professional deadlines on the other.',
        'I approached this challenge by developing structured personal workflows. I maintained explicit task prioritisation systems, distinguished between urgent and high-impact work, tracked progress against both academic and professional milestones, and communicated proactively with both my academic supervisors and KPMG team leads when workload pressures emerged — rather than allowing them to accumulate silently.',
        'The results were consistent performance across both environments. I maintained a GPA of 6.38 and a WAM of 85.14 while delivering professional-standard outputs at KPMG on time throughout the engagement. This experience has given me confidence that I can sustain performance under genuine pressure — not by eliminating that pressure, but by managing it with discipline and transparency.',
      ],
    },
    {
      number: '3.6',
      criterion: 'Teamwork & Leadership',
      body: [
        'My experience in team leadership spans both formal roles and operational environments. As Treasurer and Sponsorship Director for multiple UTS clubs over two years, I worked within and led cross-functional executive committees responsible for organising large-scale student events. My responsibilities extended across sponsorship strategy, financial oversight, committee coordination, and the mentoring of incoming executive members in financial management processes.',
        'In practice, leadership in these settings required more than task delegation. It required building trust within a volunteer team, facilitating constructive resolution when subcommittees held competing priorities, and maintaining accountability for outcomes even when those outcomes depended on the efforts of others. I also led the On the Day (OTD) photography team at SMASH! Convention — coordinating a group of photographers across a 15,000-person event, managing archive logistics, and ensuring clear communications were maintained throughout.',
        'The clubs I supported consistently delivered high-quality events across multiple semesters, with measurable growth in both attendance and membership. The OTD team I led produced a complete, well-organised photo archive under time pressure. These outcomes reflect not just my capacity to function as a team member, but my ability to set direction, sustain team cohesion, and be accountable for collective results.',
      ],
    },
  ]

  return (
    <section id="cover-letter" className="section">
      <div className="container">
        <p className="section-label">05. Cover Letter</p>
        <h2 className="section-title">Cover Letter</h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '15px', marginBottom: '40px', maxWidth: '680px' }}>
          Addressed to <strong style={{ color: 'var(--text-primary)' }}>Industrus Engineering</strong> — Graduate Engineer Program.
          Written using the <strong style={{ color: 'var(--text-primary)' }}>STAR method</strong> to address all six selection criteria (3.1 – 3.6).
        </p>

        <div className="card" style={{ maxWidth: '820px', lineHeight: 1.9 }}>
          {/* Letter header */}
          <div style={{
            marginBottom: '32px',
            paddingBottom: '24px',
            borderBottom: '1px solid var(--border)',
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '12px',
          }}>
            <div>
              <div style={{ fontWeight: 700, fontSize: '18px', marginBottom: '4px' }}>Zac Morgan</div>
              <div style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>Sydney, NSW, Australia</div>
              <div style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>
                <a href="mailto:zacmorgan101@gmail.com">zacmorgan101@gmail.com</a> · +61 490 163 783
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

          {/* Salutation */}
          <p style={{ marginBottom: '20px', color: 'var(--text-secondary)' }}>
            Dear Hiring Manager,
          </p>

          {/* Opening paragraph */}
          <p style={{ marginBottom: '28px', color: 'var(--text-secondary)', fontSize: '15px', lineHeight: 1.85 }}>
            I am writing to express my strong interest in the{' '}
            <strong style={{ color: 'var(--text-primary)' }}>Graduate Engineer</strong> position at{' '}
            <strong style={{ color: 'var(--text-primary)' }}>Industrus Engineering</strong>. As a final-year
            Bachelor of Data Science Engineering (Honours) student at the University of Technology Sydney,
            maintaining a GPA of 6.38, I bring a combination of academic rigour, hands-on industry experience
            at KPMG Australia, and a demonstrated capacity to deliver independently in complex, multi-stakeholder
            environments. I am confident in my ability to contribute meaningfully to Industrus's work from the
            outset of the program. The following addresses each of the advertised selection criteria in turn.
          </p>

          {/* Selection criteria — paragraph-based STAR */}
          <div style={{ marginBottom: '28px' }}>
            {criteria.map((block, i) => (
              <div key={i} style={{
                marginBottom: '24px',
                padding: '24px',
                background: 'var(--bg-secondary)',
                borderRadius: 'var(--radius)',
                borderLeft: '3px solid var(--accent)',
              }}>
                {/* Criterion header */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px', flexWrap: 'wrap' }}>
                  <span style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                    padding: '2px 9px',
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
                {/* Paragraph-based body */}
                {block.body.map((para, j) => (
                  <p key={j} style={{
                    color: 'var(--text-secondary)',
                    fontSize: '14px',
                    lineHeight: 1.85,
                    marginBottom: j < block.body.length - 1 ? '14px' : '0',
                  }}>
                    {para}
                  </p>
                ))}
              </div>
            ))}
          </div>

          {/* Closing paragraph */}
          <p style={{ marginBottom: '20px', color: 'var(--text-secondary)', fontSize: '15px', lineHeight: 1.85 }}>
            I am genuinely excited by the scope and social value of Industrus Engineering's project work —
            from advising on Australia's largest renewable energy infrastructure to applying digital technology
            in disaster recovery and designing landmark sustainable buildings. The Graduate Program's structured
            rotation across project roles and divisions aligns precisely with my goal of developing broad,
            cross-domain engineering expertise early in my career. I would welcome the opportunity to discuss
            my application further and am available at your earliest convenience.
          </p>

          {/* Sign-off */}
          <p style={{ color: 'var(--text-secondary)', marginBottom: '4px' }}>Yours sincerely,</p>
          <p style={{ fontWeight: 700, fontSize: '16px', marginBottom: '4px' }}>Zac Morgan</p>
          <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>
            <a href="mailto:zacmorgan101@gmail.com">zacmorgan101@gmail.com</a> · +61 490 163 783
          </p>

          {/* Footer note */}
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
            STAR method applied to all 6 Industrus Engineering selection criteria (3.1 – 3.6). Client details from KPMG are not disclosed in accordance with professional confidentiality obligations.
          </div>
        </div>
      </div>
    </section>
  )
}
