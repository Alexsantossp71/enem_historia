import { getLessonBySlug, getAllLessons } from '@/data/lessons';
import { notFound } from 'next/navigation';
import Link from 'next/link';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const lessons = getAllLessons();
  return lessons.map((lesson) => ({
    slug: lesson.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const lesson = getLessonBySlug(slug);
  
  if (!lesson) {
    return { title: 'Aula não encontrada' };
  }
  
  return {
    title: `${lesson.title} - História ENEM`,
    description: `Aula de ${lesson.title} do curso de História para ENEM`,
  };
}

function parseMarkdown(content: string): string {
  return content
    .replace(/^## (.*$)/gm, '<h2 style="font-size: 1.5rem; font-weight: 600; margin: 2rem 0 1rem; color: #1e293b;">$1</h2>')
    .replace(/^### (.*$)/gm, '<h3 style="font-size: 1.25rem; font-weight: 600; margin: 1.5rem 0 0.75rem; color: #1e293b;">$1</h3>')
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/^- (.*$)/gm, '<li style="margin-bottom: 0.5rem; color: #64748b;">$1</li>')
    .replace(/^(\d+)\. (.*$)/gm, '<li style="margin-bottom: 0.5rem; color: #64748b;">$2</li>')
    .replace(/\n\n/g, '</p><p style="margin-bottom: 1rem; color: #64748b; line-height: 1.8;">')
    .replace(/^([^<].*)/gm, '<p style="margin-bottom: 1rem; color: #64748b; line-height: 1.8;">$1</p>');
}

export default async function LessonPage({ params }: PageProps) {
  const { slug } = await params;
  const lesson = getLessonBySlug(slug);

  if (!lesson) {
    notFound();
  }

  const htmlContent = parseMarkdown(lesson.content);

  return (
    <div style={{ minHeight: '100vh' }}>
      {/* Header */}
      <header style={{
        background: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)',
        color: 'white',
        padding: '1rem',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <Link href="/" style={{
            fontSize: '1.5rem',
            fontWeight: 700,
            color: 'white',
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            📚 História ENEM
          </Link>
          <nav style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            <Link href="/" style={{ color: 'rgba(255,255,255,0.9)', textDecoration: 'none', fontWeight: 500 }}>← Voltar ao Início</Link>
          </nav>
        </div>
      </header>

      {/* Breadcrumb */}
      <div style={{
        maxWidth: '900px',
        margin: '0 auto',
        padding: '1rem'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          fontSize: '0.875rem'
        }}>
          <Link href="/" style={{ color: '#64748b', textDecoration: 'none' }}>Início</Link>
          <span style={{ color: '#64748b' }}>›</span>
          <span style={{ color: '#1e293b', fontWeight: 500 }}>{lesson.title}</span>
        </div>
      </div>

      {/* Content */}
      <main style={{
        maxWidth: '900px',
        margin: '0 auto',
        padding: '0 1rem 3rem'
      }}>
        {/* Title */}
        <div style={{
          marginBottom: '2rem',
          padding: '2rem',
          background: `linear-gradient(135deg, ${lesson.moduleColor}15 0%, ${lesson.moduleColor}25 100%)`,
          borderRadius: '12px',
          borderLeft: `4px solid ${lesson.moduleColor}`
        }}>
          <span style={{
            display: 'inline-block',
            background: lesson.moduleColor,
            color: 'white',
            padding: '0.25rem 0.75rem',
            borderRadius: '20px',
            fontSize: '0.75rem',
            fontWeight: 600,
            marginBottom: '0.75rem'
          }}>
            {lesson.module}
          </span>
          <h1 style={{
            fontSize: '2rem',
            fontWeight: 700,
            color: '#1e293b',
            margin: 0
          }}>
            {lesson.title}
          </h1>
        </div>

        {/* Lesson Content */}
        <article style={{
          background: 'white',
          padding: '2rem',
          borderRadius: '12px',
          boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)',
          border: '1px solid #e2e8f0'
        }}>
          <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
        </article>

        {/* Conto Button */}
        {lesson.contoLink && (
          <div style={{ marginTop: '2rem', textAlign: 'center' }}>
            <a 
              href={lesson.contoLink}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '1rem 2rem',
                background: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '12px',
                fontWeight: 600,
                boxShadow: '0 4px 15px rgba(139, 92, 246, 0.3)'
              }}
            >
              📖 Leia o Conto Histórico
            </a>
          </div>
        )}

        {/* Navigation */}
        <div style={{
          marginTop: '3rem',
          display: 'flex',
          justifyContent: 'space-between',
          gap: '1rem',
          flexWrap: 'wrap'
        }}>
          <Link 
            href="/"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.75rem 1.5rem',
              background: '#f1f5f9',
              color: '#1e293b',
              textDecoration: 'none',
              borderRadius: '8px',
              fontWeight: 500
            }}
          >
            ← Ver todas as aulas
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer style={{
        background: '#1e293b',
        color: 'white',
        padding: '2rem 1rem',
        textAlign: 'center'
      }}>
        <p style={{ opacity: 0.8, marginBottom: '0.5rem' }}>
          © 2025 História para ENEM - Todos os direitos reservados
        </p>
        <p style={{ opacity: 0.6, fontSize: '0.875rem' }}>
          Preparado para ajudar você a conquistar sua aprovação
        </p>
      </footer>
    </div>
  );
}
