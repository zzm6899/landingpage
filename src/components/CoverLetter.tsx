export default function CoverLetter() {
  return (
    <section id="cover-letter" className="section">
      <div className="container">
        <p className="section-label">05. Cover Letter</p>
        <h2 className="section-title">Professional Cover Letter</h2>

        <div className="card" style={{ maxWidth: '800px', lineHeight: 1.9 }}>
          {/* Letter header */}
          <div style={{ marginBottom: '32px', paddingBottom: '24px', borderBottom: '1px solid var(--border)' }}>
            <div style={{ fontWeight: 700, fontSize: '18px', marginBottom: '4px' }}>Zac Morgan</div>
            <div style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>
              Sydney, NSW, Australia · Zacmorgan101@gmail.com · +61 490 163 783
            </div>
            <div style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>
              <a href="https://www.linkedin.com/in/zacmorgan1/" target="_blank" rel="noopener noreferrer">
                linkedin.com/in/zacmorgan1
              </a>
            </div>
          </div>

          <p style={{ color: 'var(--text-secondary)', marginBottom: '20px' }}>
            [Date] · [Hiring Manager Name] · [Company Name] · [Company Address]
          </p>

          <p style={{ marginBottom: '20px', color: 'var(--text-secondary)' }}>
            Dear Hiring Manager,
          </p>

          <p style={{ marginBottom: '20px', color: 'var(--text-secondary)' }}>
            I am writing to express my strong interest in the <strong style={{ color: 'var(--text-primary)' }}>
            [Position Title]
            </strong> role at <strong style={{ color: 'var(--text-primary)' }}>[Company Name]</strong>. As a
            final-year Bachelor of Data Science Engineering (Honours) student at the University of Technology
            Sydney — maintaining a GPA of 6.38 — combined with hands-on industry experience at KPMG Australia,
            I am confident in my ability to contribute meaningfully to your team from day one.
          </p>

          {/* STAR method sections */}
          {[
            {
              criterion: 'Technical Proficiency in Data & Analytics',
              s: 'During my internship at KPMG, I was assigned to a Long Service Leave remediation engagement requiring complex data analysis across large, historical payroll datasets.',
              t: 'I was tasked with designing SQL database schemas, building automation workflows, and producing accurate reconciliation reports under tight client deadlines.',
              a: 'I developed optimised SQL stored procedures and Python scripts to automate data extraction and transformation processes. I identified and resolved data discrepancies through systematic querying and cross-referencing.',
              r: 'My contributions directly improved reporting speed and accuracy, and my outputs were used by senior engagement managers in client deliverables — demonstrating my ability to perform at a professional standard in a compliance-driven environment.',
            },
            {
              criterion: 'Problem Solving & Independent Delivery',
              s: 'As part of my academic projects, I undertook the development of a machine learning model for breast cancer tumour recognition.',
              t: 'The goal was to design, train, and validate a TensorFlow and YOLOv5-based model capable of accurately identifying cancerous tumours from medical imaging data.',
              a: 'I independently researched model architectures, designed image augmentation pipelines, and iteratively tuned hyperparameters to improve performance.',
              r: 'The resulting model achieved 98% detection accuracy — demonstrating my capability to apply advanced technical skills to solve high-stakes problems independently.',
            },
            {
              criterion: 'Communication & Stakeholder Engagement',
              s: 'In my role as Treasurer and Sponsorship Director across multiple UTS clubs, I was responsible for managing corporate relationships and securing event sponsorships.',
              t: 'My objective was to negotiate multi-event sponsorship agreements with major brands to fund club operations and events.',
              a: 'I developed sponsorship proposals, conducted professional negotiations with brands including TimeZone, HobbyCo, CrunchyRoll, Hoyts, and Kinokuniya, and managed ongoing stakeholder communication.',
              r: 'I successfully secured multi-event funding agreements that supported club visibility, membership growth, and high-quality events for hundreds of UTS students.',
            },
          ].map((block, i) => (
            <div key={i} style={{
              marginBottom: '28px',
              padding: '20px',
              background: 'var(--bg-secondary)',
              borderRadius: 'var(--radius)',
              borderLeft: '3px solid var(--accent)',
            }}>
              <h4 style={{ color: 'var(--accent)', fontSize: '14px', fontFamily: 'var(--font-mono)', marginBottom: '12px' }}>
                Selection Criterion: {block.criterion}
              </h4>
              {['Situation', 'Task', 'Action', 'Result'].map((label, j) => (
                <p key={label} style={{ color: 'var(--text-secondary)', marginBottom: j < 3 ? '10px' : '0', fontSize: '15px' }}>
                  <strong style={{ color: 'var(--text-primary)' }}>{label}: </strong>
                  {[block.s, block.t, block.a, block.r][j]}
                </p>
              ))}
            </div>
          ))}

          <p style={{ marginBottom: '20px', color: 'var(--text-secondary)' }}>
            I am excited about the opportunity to bring my technical expertise, professional experience, and
            collaborative mindset to <strong style={{ color: 'var(--text-primary)' }}>[Company Name]</strong>.
            I am available at your earliest convenience for an interview and can be reached at{' '}
            <a href="mailto:Zacmorgan101@gmail.com">Zacmorgan101@gmail.com</a> or +61 490 163 783.
          </p>

          <p style={{ color: 'var(--text-secondary)', marginBottom: '8px' }}>Yours sincerely,</p>
          <p style={{ fontWeight: 700, fontSize: '16px' }}>Zac Morgan</p>

          {/* Note */}
          <div style={{
            marginTop: '32px',
            paddingTop: '20px',
            borderTop: '1px solid var(--border)',
            fontSize: '13px',
            fontFamily: 'var(--font-mono)',
            color: 'var(--text-secondary)',
          }}>
            💡 This cover letter uses the STAR method (Situation, Task, Action, Result) to address selection criteria.
            Replace placeholders in [brackets] with the specific job advertisement details.
          </div>
        </div>
      </div>
    </section>
  )
}
