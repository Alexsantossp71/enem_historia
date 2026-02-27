export default function Home() {
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
          <a href="/" style={{
            fontSize: '1.5rem',
            fontWeight: 700,
            color: 'white',
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            📚 História ENEM
          </a>
          <nav style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            <a href="#modulos" style={{ color: 'rgba(255,255,255,0.9)', textDecoration: 'none', fontWeight: 500 }}>Módulos</a>
            <a href="#sobre" style={{ color: 'rgba(255,255,255,0.9)', textDecoration: 'none', fontWeight: 500 }}>Sobre</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section style={{
        background: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 50%, #ec4899 100%)',
        color: 'white',
        padding: '4rem 1rem',
        textAlign: 'center'
      }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem' }}>
          História para ENEM
        </h1>
        <p style={{ fontSize: '1.2rem', opacity: 0.9, maxWidth: '600px', margin: '0 auto 2rem' }}>
          Domine todos os períodos históricos cobrados no ENEM com nosso curso completo e interativo
        </p>
        <a href="#modulos" style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          padding: '0.875rem 2rem',
          background: 'white',
          color: '#4f46e5',
          borderRadius: '8px',
          fontWeight: 600,
          textDecoration: 'none'
        }}>
          Começar Agora →
        </a>
      </section>

      {/* Modules */}
      <section id="modulos" style={{ padding: '3rem 1rem', maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '2rem', textAlign: 'center' }}>
          📖 Módulos do Curso
        </h2>

        {/* Módulo 1 - História Geral */}
        <div style={{ marginBottom: '3rem' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            marginBottom: '1.5rem'
          }}>
            <div style={{
              width: '50px',
              height: '50px',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, #3b82f6, #2563eb)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.5rem'
            }}>🌍</div>
            <div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 600 }}>Módulo 1: História Geral</h3>
              <p style={{ color: '#64748b', fontSize: '0.95rem' }}>Da Pré-História à Idade Contemporânea</p>
            </div>
          </div>

          <div style={{ display: 'grid', gap: '0.75rem' }}>
            <LessonItem number="1" title="Pré-História" href="/aula/pre-historia" />
            <LessonItem number="2" title="Civilizações Antigas" href="/aula/civilizacoes-antigas" />
            <LessonItem number="3" title="Idade Antiga - Grécia" href="/aula/idade-antiga-grecia" />
            <LessonItem number="4" title="Idade Antiga - Roma" href="/aula/idade-antiga-roma" />
            <LessonItem number="5" title="Idade Média" href="/aula/idade-media" />
            <LessonItem number="6" title="Renascimento e Reforma" href="/aula/renascimento-reforma" />
            <LessonItem number="7" title="Absolutismo e Mercantilismo" href="/aula/absolutismo-mercantilismo" />
            <LessonItem number="8" title="Iluminismo" href="/aula/iluminismo" />
            <LessonItem number="9" title="Revoluções Burguesas" href="/aula/revolucoes-burguesas" />
            <LessonItem number="10" title="Revolução Industrial" href="/aula/revolucao-industrial" />
            <LessonItem number="11" title="Idade Contemporânea" href="/aula/idade-contemporanea" />
            <LessonItem number="12" title="Imperialismo" href="/aula/imperialismo" />
            <LessonItem number="13" title="Primeira Guerra Mundial" href="/aula/primeira-guerra" />
            <LessonItem number="14" title="Revolução Russa" href="/aula/revolucao-russa" />
            <LessonItem number="15" title="Entre Guerras e Segunda Guerra" href="/aula/segunda-guerra" />
            <LessonItem number="16" title="Guerra Fria" href="/aula/guerra-fria" />
            <LessonItem number="17" title="Mundo Contemporâneo" href="/aula/mundo-contemporaneo" />
          </div>
        </div>

        {/* Módulo 2 - História do Brasil */}
        <div style={{ marginBottom: '3rem' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            marginBottom: '1.5rem'
          }}>
            <div style={{
              width: '50px',
              height: '50px',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, #22c55e, #16a34a)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.5rem'
            }}>🇧🇷</div>
            <div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 600 }}>Módulo 2: História do Brasil</h3>
              <p style={{ color: '#64748b', fontSize: '0.95rem' }}>Do Período Pré-Colonial à República</p>
            </div>
          </div>

          <div style={{ display: 'grid', gap: '0.75rem' }}>
            <LessonItem number="18" title="Período Pré-Colonial e Povos Indígenas" href="/aula/povos-indigenas" />
            <LessonItem number="19" title="Brasil Colônia" href="/aula/brasil-colonia" />
            <LessonItem number="20" title="Império" href="/aula/imperio" />
            <LessonItem number="21" title="República Velha" href="/aula/republica-velha" />
            <LessonItem number="22" title="Era Vargas" href="/aula/era-vargas" />
            <LessonItem number="23" title="República Populista" href="/aula/republica-populista" />
            <LessonItem number="24" title="Ditadura Militar" href="/aula/ditadura-militar" />
            <LessonItem number="25" title="Redemocratização" href="/aula/redemocratizacao" />
          </div>
        </div>
      </section>

      {/* About */}
      <section id="sobre" style={{
        background: '#f1f5f9',
        padding: '3rem 1rem'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1rem' }}>
            Sobre o Curso
          </h2>
          <p style={{ color: '#64748b', lineHeight: 1.8, marginBottom: '1rem' }}>
            Este curso foi desenvolvido especialmente para estudantes que estão se preparando para o ENEM. 
            Cobrimos todos os principais períodos históricos, desde a Pré-História até os dias atuais, 
            com foco nos conteúdos mais cobrados nas provas.
          </p>
          <p style={{ color: '#64748b', lineHeight: 1.8 }}>
            Cada aula inclui explicações detalhadas, contextualização histórica e pontos-chave 
            para você ter sucesso na prova de História do ENEM.
          </p>
        </div>
      </section>

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

function LessonItem({ number, title, href }: { number: string; title: string; href: string }) {
  return (
    <a href={href} style={{
      display: 'flex',
      alignItems: 'center',
      padding: '1rem 1.5rem',
      background: 'white',
      borderRadius: '10px',
      border: '1px solid #e2e8f0',
      textDecoration: 'none',
      color: '#1e293b',
      transition: 'all 0.2s'
    }}>
      <span style={{
        width: '32px',
        height: '32px',
        borderRadius: '50%',
        background: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 600,
        fontSize: '0.875rem',
        marginRight: '1rem',
        flexShrink: 0
      }}>
        {number}
      </span>
      <span style={{ flex: 1, fontWeight: 500 }}>{title}</span>
      <span style={{ color: '#64748b' }}>→</span>
    </a>
  );
}
