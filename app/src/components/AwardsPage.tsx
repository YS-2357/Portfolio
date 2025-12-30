import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const fetchText = async (url: string) => {
  const res = await fetch(url)
  if (!res.ok) return ''
  const contentType = res.headers.get('content-type') || ''
  const text = await res.text()
  if (contentType.includes('text/html')) return ''
  if (text.trim().toLowerCase().startsWith('<!doctype html')) return ''
  return text
}

export default function AwardsPage() {
  const [content, setContent] = useState('')

  useEffect(() => {
    fetchText('/content/awards/all.md')
      .then((text) => setContent(text))
      .catch(() => setContent(''))
  }, [])

  return (
    <div className="landing">
      <header className="hero">
        <div className="hero__copy">
          <p className="hero__eyebrow">수상</p>
          <h1>전체 수상 목록</h1>
          <div className="hero__cta">
            <Link className="btn" to="/">
              랜딩
            </Link>
          </div>
        </div>
      </header>

      <section className="section markdown">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {content || '내용이 없습니다.'}
        </ReactMarkdown>
      </section>
    </div>
  )
}
