import './App.css'

const navItems = [
  { label: '소개', href: '#about' },
  { label: '프로젝트', href: '#projects' },
  { label: '경험', href: '#experience' },
  { label: '스킬', href: '#skills' },
  { label: '연락처', href: '#contact' },
]

const hero = {
  title: '정영선 Youngsun Joung / AI Developer',
  subtitle: '제작중',
  ctas: [
    { label: '프로젝트 보기', href: '#projects', kind: 'primary' },
    { label: '연락하기', href: '#contact', kind: 'ghost' },
  ],
  metrics: [
    { label: '수정중', value: '수정중' },
    { label: '수정중', value: '수정중' },
    { label: '수정중', value: '수정중' },
  ],
}

const heroCards = [
  {
    title: '프로젝트',
    desc: '수정중',
    href: '#projects',
  },
  {
    title: '스킬',
    desc: '수정중',
    href: '#skills',
  },
  {
    title: '경험',
    desc: '수정중',
    href: '#experience',
  },
  {
    title: '연락처',
    desc: '수정중',
    href: '#projects',
  },
]

const highlightTiles = [
  {
    title: '핵심 임팩트',
    desc: '수정중',
    href: '#projects',
    size: 'wide',
  },
  {
    title: 'LLM / RAG',
    desc: '수정중',
    href: '#skills',
  },
  {
    title: '팀 리딩',
    desc: '수정중',
    href: '#experience',
  },
  {
    title: '도메인',
    desc: '수정중',
    href: '#projects',
  },
]

const about = {
  paragraph: ['수정중'],
  tags: ['수정중'],
  highlights: [
    { title: '수정중', desc: '수정중' },
    { title: '수정중', desc: '수정중' },
    { title: '수정중', desc: '수정중' },
  ],
}

const projects = [
  {
    title: '프로젝트 1',
    role: '수정중',
    period: '수정중',
    description: '수정중',
    tags: ['수정중'],
    link: null,
    impact: '수정중',
    thumbnail: null,
  },
  {
    title: '프로젝트 2',
    role: '수정중',
    period: '수정중',
    description: '수정중',
    tags: ['수정중'],
    link: null,
    impact: '수정중',
    thumbnail: null,
  },
  {
    title: '프로젝트 3',
    role: '수정중',
    period: '수정중',
    description: '수정중',
    tags: ['수정중'],
    link: null,
    impact: '수정중',
    thumbnail: null,
  },
  {
    title: '프로젝트 4',
    role: '수정중',
    period: '수정중',
    description: '수정중',
    tags: ['수정중'],
    link: null,
    impact: '수정중',
    thumbnail: null,
  },
]

const experiences = [
  {
    title: '경험 1',
    org: '수정중',
    period: '수정중',
    bullets: ['수정중'],
  },
  {
    title: '경험 2',
    org: '수정중',
    period: '수정중',
    bullets: ['수정중'],
  },
  {
    title: '경험 3',
    org: '수정중',
    period: '수정중',
    bullets: ['수정중'],
  },
  {
    title: '경험 4',
    org: '수정중',
    period: '수정중',
    bullets: ['수정중'],
  },
]

const skillGroups = [
  { title: '스킬', items: ['수정중'] },
  { title: '도구', items: ['수정중'] },
  { title: '도메인', items: ['수정중'] },
]

const contact = {
  email: 'joungyoungsun20@gmail.com',
  github: 'https://github.com/YS-2357',
  linkedin: 'http://www.linkedin.com/in/youngsun-joung-5b0584345',
  blog: 'https://velog.io/@ys2357/posts',
  phone: '010-8766-4095',
  note: '제작중',
}

function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <header className="section-heading">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <div>
        <h2>{title}</h2>
        {subtitle && <p className="subtitle">{subtitle}</p>}
      </div>
    </header>
  )
}

function Tag({ label }) {
  return <span className="tag">{label}</span>
}

function NavBar() {
  return (
    <nav className="top-nav">
      <a className="brand" href="#top">
        정영선 · AI 개발자
      </a>
      <div className="nav-links">
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  )
}

function App() {
  return (
    <main className="page">
      <NavBar />

      <section className="hero" id="top">
        <div className="hero-text">
          <p className="eyebrow">AI Developer</p>
          <h1>{hero.title}</h1>
          <p className="lede">{hero.subtitle}</p>
          <div className="cta-row">
            {hero.ctas.map((cta) => (
              <a
                key={cta.label}
                href={cta.href}
                className={`button ${cta.kind}`}
              >
                {cta.label}
              </a>
            ))}
          </div>
          <div className="metrics">
            {hero.metrics.map((m) => (
              <div key={m.label} className="metric">
                <p className="metric-label">{m.label}</p>
                <p className="metric-value">{m.value}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-card hero-abstract">
            <div className="hero-overlay">
              <p>수정중</p>
              <span>제작중</span>
            </div>
          </div>
        </div>
      </section>

      <section className="hero-cards">
        <div className="hero-card-grid">
          {heroCards.map((card) => (
            <a key={card.title} href={card.href} className="mini-card">
              <p className="mini-title">{card.title}</p>
              <p className="mini-desc">{card.desc}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="section highlight-tiles">
        <div className="tile-grid">
          {highlightTiles.map((tile) => (
            <a
              key={tile.title}
              href={tile.href}
              className={`tile ${tile.size === 'wide' ? 'wide' : ''}`}
            >
              <p className="tile-title">{tile.title}</p>
              <p className="tile-desc">{tile.desc}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="section" id="about">
        <SectionHeading
          eyebrow="About"
          title="소개"
          subtitle="제작중"
        />
        <div className="about-content">
          <div className="about-text">
            {about.paragraph.map((line) => (
              <p key={line}>{line}</p>
            ))}
            <div className="tag-wrap">
              {about.tags.map((tag) => (
                <Tag key={tag} label={tag} />
              ))}
            </div>
          </div>
          <div className="about-highlights">
            {about.highlights.map((item) => (
              <div key={item.title} className="highlight-card">
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="projects">
        <SectionHeading
          eyebrow="Projects"
          title="프로젝트"
          subtitle="제작중"
        />
        <div className="card-grid">
          {projects.map((project) => (
            <article className="card project-card" key={project.title}>
              <div className="thumb">
                {project.thumbnail ? (
                  <img src={project.thumbnail} alt={`${project.title} 썸네일`} />
                ) : (
                  <div className="thumb-fallback" aria-hidden="true" />
                )}
              </div>
              <div className="card-top">
                <div className="card-meta">
                  <span className="pill">{project.role}</span>
                  <span className="pill ghost">{project.period}</span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
              <div className="tag-wrap">
                {project.tags.map((tag) => (
                  <Tag key={tag} label={tag} />
                ))}
              </div>
              <p className="impact">임팩트: {project.impact}</p>
              {project.link && (
                <a
                  className="link"
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  링크 열기 →
                </a>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="experience">
        <SectionHeading
          eyebrow="Experience"
          title="경험"
          subtitle="제작중"
        />
        <div className="timeline">
          {experiences.map((exp) => (
            <article className="timeline-item" key={exp.title + exp.period}>
              <div className="dot" aria-hidden="true" />
              <div className="timeline-card">
                <div className="timeline-head">
                  <div>
                    <h3>{exp.title}</h3>
                    <p className="org">{exp.org}</p>
                  </div>
                  <p className="period">{exp.period}</p>
                </div>
                <ul>
                  {exp.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="skills">
        <SectionHeading eyebrow="Skills" title="스킬" />
        <div className="skill-grid">
          {skillGroups.map((group) => (
            <div key={group.title} className="skill-card">
              <p className="skill-title">{group.title}</p>
              <div className="tag-wrap">
                {group.items.map((item) => (
                  <Tag key={item} label={item} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section contact" id="contact">
        <SectionHeading eyebrow="Contact" title="연락처" />
        <div className="contact-grid">
          <div className="contact-card">
            <p className="contact-label">Email</p>
            <a href={`mailto:${contact.email}`} className="link">
              {contact.email}
            </a>
          </div>
          <div className="contact-card">
            <p className="contact-label">GitHub</p>
            <a
              href={contact.github}
              className="link"
              target="_blank"
              rel="noreferrer"
            >
              {contact.github}
            </a>
          </div>
          <div className="contact-card">
            <p className="contact-label">LinkedIn</p>
            <a
              href={contact.linkedin}
              className="link"
              target="_blank"
              rel="noreferrer"
            >
              {contact.linkedin}
            </a>
          </div>
          <div className="contact-card">
            <p className="contact-label">Blog</p>
            <a
              href={contact.blog}
              className="link"
              target="_blank"
              rel="noreferrer"
            >
              {contact.blog}
            </a>
          </div>
          <div className="contact-card">
            <p className="contact-label">Phone</p>
            <a href={`tel:${contact.phone}`} className="link">
              {contact.phone}
            </a>
          </div>
        </div>
        <p className="contact-note">{contact.note}</p>
      </section>
    </main>
  )
}

export default App
