# ============================================================
# VorinWeb Push Script
# Run from inside your cloned repo folder:
#   cd C:\Users\<you>\VORINWEB
#   Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
#   .\push_vorinweb.ps1
# ============================================================

$branch = "claude/optimistic-maxwell-yx5y8t"
git fetch origin $branch 2>$null
git checkout $branch 2>$null
if ($LASTEXITCODE -ne 0) { git checkout -b $branch }

New-Item -ItemType Directory -Force -Path "projetos\techflow" | Out-Null
New-Item -ItemType Directory -Force -Path "projetos\advocacia" | Out-Null
New-Item -ItemType Directory -Force -Path "projetos\fitmax" | Out-Null
New-Item -ItemType Directory -Force -Path "projetos\sabor-carioca" | Out-Null
New-Item -ItemType Directory -Force -Path "projetos\lumina" | Out-Null
Write-Host "Directories ready." -ForegroundColor Cyan

@'
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>VorinWeb — Sites Profissionais e Bots de WhatsApp</title>
  <meta name="description" content="Desenvolvemos landing pages, sites institucionais e bots de WhatsApp que geram resultados reais para o seu negócio. Entrega em até 5 dias." />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="./style.css" />
</head>
<body>

  <!-- NAVIGATION -->
  <nav class="nav" id="nav">
    <div class="nav-container">
      <a href="/" class="nav-logo">
        <img src="./imgs/vorninweblogo.png" alt="VorinWeb Logo" width="40" height="40" />
        <span class="nav-logo-text">VORINWEB</span>
      </a>
      <button class="nav-toggle" id="navToggle" aria-label="Abrir menu">
        <span></span><span></span><span></span>
      </button>
      <ul class="nav-links" id="navLinks">
        <li><a href="#inicio" class="nav-link">Início</a></li>
        <li><a href="#servicos" class="nav-link">Serviços</a></li>
        <li><a href="#portfolio" class="nav-link">Portfólio</a></li>
        <li><a href="#depoimentos" class="nav-link">Depoimentos</a></li>
        <li>
          <a href="https://wa.me/5511934900204?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento!" class="btn btn-primary nav-cta" target="_blank" rel="noopener">
            Solicitar orçamento
          </a>
        </li>
      </ul>
    </div>
  </nav>

  <!-- HERO -->
  <section class="hero" id="inicio">
    <div class="hero-bg"></div>
    <div class="container">
      <div class="hero-content reveal">
        <div class="badge">⚡ Entrega em até 5 dias</div>
        <h1 class="hero-title">
          Seu site profissional ou automação para WhatsApp
          <span class="accent">pronta em até 5 dias.</span>
        </h1>
        <p class="hero-sub">
          Desenvolvemos landing pages, sites institucionais e bots de WhatsApp que geram resultados reais para o seu negócio.
        </p>
        <div class="hero-actions">
          <a href="https://wa.me/5511934900204?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento!" class="btn btn-primary btn-lg" target="_blank" rel="noopener">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.553 4.123 1.522 5.856L0 24l6.335-1.506A11.944 11.944 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.808 9.808 0 0 1-5.006-1.368l-.36-.214-3.727.977.999-3.634-.234-.374A9.786 9.786 0 0 1 2.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/></svg>
            Solicitar orçamento
          </a>
          <a href="#portfolio" class="btn btn-outline btn-lg">Ver portfólio</a>
        </div>
        <div class="hero-stats">
          <div class="stat">
            <span class="stat-value">5 dias</span>
            <span class="stat-label">Prazo de entrega</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat">
            <span class="stat-value">100%</span>
            <span class="stat-label">Responsivo</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat">
            <span class="stat-value">24h</span>
            <span class="stat-label">Suporte inicial</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- SERVICES -->
  <section class="section" id="servicos">
    <div class="container">
      <div class="section-header reveal">
        <span class="section-tag">Serviços</span>
        <h2 class="section-title">O que fazemos</h2>
        <p class="section-sub">Soluções digitais completas para impulsionar o seu negócio</p>
      </div>
      <div class="services-grid">
        <div class="service-card reveal">
          <div class="service-icon" style="background: linear-gradient(135deg, #2563eb22, #3b82f622);">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>
          </div>
          <h3 class="service-title">Landing Pages</h3>
          <p class="service-desc">Páginas de alta conversão para capturar leads e vender mais</p>
        </div>
        <div class="service-card reveal">
          <div class="service-icon" style="background: linear-gradient(135deg, #7c3aed22, #8b5cf622);">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
          </div>
          <h3 class="service-title">Sites Institucionais</h3>
          <p class="service-desc">Presença digital profissional para sua empresa ou negócio</p>
        </div>
        <div class="service-card reveal">
          <div class="service-icon" style="background: linear-gradient(135deg, #16a34a22, #22c55e22);">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#22c55e" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
          </div>
          <h3 class="service-title">Bots de WhatsApp</h3>
          <p class="service-desc">Atendimento automatizado 24h que nunca perde um cliente</p>
        </div>
        <div class="service-card reveal">
          <div class="service-icon" style="background: linear-gradient(135deg, #ea580c22, #f9731622);">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#f97316" stroke-width="2"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>
          </div>
          <h3 class="service-title">Projetos Personalizados</h3>
          <p class="service-desc">Soluções sob medida para necessidades específicas</p>
        </div>
      </div>
    </div>
  </section>

  <!-- PORTFOLIO -->
  <section class="section section-dark" id="portfolio">
    <div class="container">
      <div class="section-header reveal">
        <span class="section-tag">Portfólio</span>
        <h2 class="section-title">Projetos que criamos</h2>
        <p class="section-sub">Veja exemplos reais de sites que desenvolvemos</p>
      </div>
      <div class="portfolio-grid">

        <div class="portfolio-card reveal">
          <div class="portfolio-thumb" style="background: linear-gradient(135deg, #1e3a5f 0%, #2563eb 50%, #1d4ed8 100%);">
            <div class="portfolio-thumb-inner">
              <div class="pt-logo">TF</div>
              <div class="pt-lines">
                <div class="pt-line" style="width:60%"></div>
                <div class="pt-line" style="width:80%"></div>
                <div class="pt-line" style="width:40%"></div>
              </div>
            </div>
          </div>
          <div class="portfolio-info">
            <span class="portfolio-badge">Site Institucional</span>
            <h3 class="portfolio-name">TechFlow Soluções</h3>
            <p class="portfolio-desc">Empresa de consultoria em TI com presença digital moderna e profissional</p>
            <a href="./projetos/techflow/" class="portfolio-link">Ver projeto →</a>
          </div>
        </div>

        <div class="portfolio-card reveal">
          <div class="portfolio-thumb" style="background: linear-gradient(135deg, #0f1623 0%, #1e293b 60%, #2a2015 100%);">
            <div class="portfolio-thumb-inner">
              <div class="pt-logo" style="color:#c9a227; border-color:#c9a227;">SB</div>
              <div class="pt-lines">
                <div class="pt-line" style="width:70%; background:#c9a22740;"></div>
                <div class="pt-line" style="width:50%; background:#c9a22740;"></div>
                <div class="pt-line" style="width:90%; background:#c9a22740;"></div>
              </div>
            </div>
          </div>
          <div class="portfolio-info">
            <span class="portfolio-badge" style="color:#c9a227; border-color:#c9a22740; background:#c9a22710;">Site Institucional</span>
            <h3 class="portfolio-name">Advocacia Silva &amp; Braga</h3>
            <p class="portfolio-desc">Escritório de advocacia com site que transmite autoridade e confiança</p>
            <a href="./projetos/advocacia/" class="portfolio-link">Ver projeto →</a>
          </div>
        </div>

        <div class="portfolio-card reveal">
          <div class="portfolio-thumb" style="background: linear-gradient(135deg, #052e16 0%, #14532d 50%, #16a34a 100%);">
            <div class="portfolio-thumb-inner">
              <div class="pt-logo" style="color:#16a34a; border-color:#16a34a;">FM</div>
              <div class="pt-lines">
                <div class="pt-line" style="width:55%; background:#16a34a40;"></div>
                <div class="pt-line" style="width:75%; background:#16a34a40;"></div>
                <div class="pt-line" style="width:35%; background:#16a34a40;"></div>
              </div>
            </div>
          </div>
          <div class="portfolio-info">
            <span class="portfolio-badge" style="color:#16a34a; border-color:#16a34a40; background:#16a34a10;">Landing Page</span>
            <h3 class="portfolio-name">FitMax Pro</h3>
            <p class="portfolio-desc">Landing page de suplementos com foco total em conversão e vendas</p>
            <a href="./projetos/fitmax/" class="portfolio-link">Ver projeto →</a>
          </div>
        </div>

        <div class="portfolio-card reveal">
          <div class="portfolio-thumb" style="background: linear-gradient(135deg, #1a0f07 0%, #451a03 50%, #92400e 100%);">
            <div class="portfolio-thumb-inner">
              <div class="pt-logo" style="color:#f59e0b; border-color:#f59e0b;">SC</div>
              <div class="pt-lines">
                <div class="pt-line" style="width:65%; background:#f59e0b40;"></div>
                <div class="pt-line" style="width:85%; background:#f59e0b40;"></div>
                <div class="pt-line" style="width:45%; background:#f59e0b40;"></div>
              </div>
            </div>
          </div>
          <div class="portfolio-info">
            <span class="portfolio-badge" style="color:#f59e0b; border-color:#f59e0b40; background:#f59e0b10;">Restaurante</span>
            <h3 class="portfolio-name">Sabor Carioca</h3>
            <p class="portfolio-desc">Site completo para restaurante com cardápio digital e reservas</p>
            <a href="./projetos/sabor-carioca/" class="portfolio-link">Ver projeto →</a>
          </div>
        </div>

        <div class="portfolio-card reveal">
          <div class="portfolio-thumb" style="background: linear-gradient(135deg, #4c0519 0%, #9f1239 50%, #e11d48 100%);">
            <div class="portfolio-thumb-inner">
              <div class="pt-logo" style="color:#fda4af; border-color:#fda4af;">LE</div>
              <div class="pt-lines">
                <div class="pt-line" style="width:60%; background:#fda4af40;"></div>
                <div class="pt-line" style="width:80%; background:#fda4af40;"></div>
                <div class="pt-line" style="width:50%; background:#fda4af40;"></div>
              </div>
            </div>
          </div>
          <div class="portfolio-info">
            <span class="portfolio-badge" style="color:#e11d48; border-color:#e11d4840; background:#e11d4810;">Clínica Estética</span>
            <h3 class="portfolio-name">Lumina Estética</h3>
            <p class="portfolio-desc">Clínica estética com site elegante que atrai e converte novos clientes</p>
            <a href="./projetos/lumina/" class="portfolio-link">Ver projeto →</a>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- TESTIMONIALS -->
  <section class="section" id="depoimentos">
    <div class="container">
      <div class="section-header reveal">
        <span class="section-tag">Depoimentos</span>
        <h2 class="section-title">O que dizem sobre nosso trabalho</h2>
        <p class="section-sub">A opinião de quem conhece e aprecia nossos projetos</p>
      </div>
      <div class="testimonials-grid">

        <div class="testimonial-card reveal">
          <div class="stars">⭐⭐⭐⭐⭐</div>
          <p class="testimonial-text">"Analisei os projetos da VorinWeb e o nível técnico é impressionante. Código limpo, design moderno e responsividade perfeita."</p>
          <div class="testimonial-author">
            <div class="author-avatar">JC</div>
            <div class="author-info">
              <span class="author-name">João Carlos M.</span>
              <span class="author-role">Desenvolvedor Web</span>
            </div>
          </div>
        </div>

        <div class="testimonial-card reveal">
          <div class="stars">⭐⭐⭐⭐⭐</div>
          <p class="testimonial-text">"Vi os trabalhos deles e fiquei surpreso com a qualidade. Sites rápidos, bonitos e com muito cuidado nos detalhes."</p>
          <div class="testimonial-author">
            <div class="author-avatar">FR</div>
            <div class="author-info">
              <span class="author-name">Fernanda R.</span>
              <span class="author-role">Designer UI/UX</span>
            </div>
          </div>
        </div>

        <div class="testimonial-card reveal">
          <div class="stars">⭐⭐⭐⭐⭐</div>
          <p class="testimonial-text">"A VorinWeb entregou exatamente o que eu precisava. Processo transparente e comunicação excelente durante todo o projeto."</p>
          <div class="testimonial-author">
            <div class="author-avatar">MA</div>
            <div class="author-info">
              <span class="author-name">Marcos A.</span>
              <span class="author-role">Empreendedor</span>
            </div>
          </div>
        </div>

        <div class="testimonial-card reveal">
          <div class="stars">⭐⭐⭐⭐⭐</div>
          <p class="testimonial-text">"Profissionalismo acima da média. O site ficou muito além das minhas expectativas, já recebi vários elogios dos meus clientes."</p>
          <div class="testimonial-author">
            <div class="author-avatar">PL</div>
            <div class="author-info">
              <span class="author-name">Patrícia L.</span>
              <span class="author-role">Consultora de Marketing</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- FINAL CTA -->
  <section class="cta-section">
    <div class="cta-bg"></div>
    <div class="container">
      <div class="cta-content reveal">
        <h2 class="cta-title">Pronto para ter seu site no ar?</h2>
        <p class="cta-sub">Entre em contato agora e receba uma proposta em até 24 horas.</p>
        <a href="https://wa.me/5511934900204?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento!" class="btn btn-primary btn-xl" target="_blank" rel="noopener">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.553 4.123 1.522 5.856L0 24l6.335-1.506A11.944 11.944 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.808 9.808 0 0 1-5.006-1.368l-.36-.214-3.727.977.999-3.634-.234-.374A9.786 9.786 0 0 1 2.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/></svg>
          Falar no WhatsApp agora
        </a>
      </div>
    </div>
  </section>

  <!-- FOOTER -->
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <a href="/" class="footer-logo">
            <img src="./imgs/vorninweblogo.png" alt="VorinWeb" width="36" height="36" />
            <span>VORINWEB</span>
          </a>
          <p class="footer-tagline">Transformando ideias em experiências digitais que convertem.</p>
        </div>
        <div class="footer-nav">
          <span class="footer-nav-title">Navegação</span>
          <ul>
            <li><a href="#inicio">Início</a></li>
            <li><a href="#servicos">Serviços</a></li>
            <li><a href="#portfolio">Portfólio</a></li>
            <li><a href="#depoimentos">Depoimentos</a></li>
          </ul>
        </div>
        <div class="footer-contact">
          <span class="footer-nav-title">Contato</span>
          <ul>
            <li>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              vorinweb@gmail.com
            </li>
            <li>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.553 4.123 1.522 5.856L0 24l6.335-1.506A11.944 11.944 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/></svg>
              WhatsApp: (11) 93490-0204
            </li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p>© 2025 VORINWEB. Todos os direitos reservados.</p>
      </div>
    </div>
  </footer>

  <!-- FLOATING WHATSAPP BUTTON -->
  <a href="https://wa.me/5511934900204?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento!" class="whatsapp-float" target="_blank" rel="noopener" aria-label="Falar no WhatsApp">
    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.553 4.123 1.522 5.856L0 24l6.335-1.506A11.944 11.944 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.808 9.808 0 0 1-5.006-1.368l-.36-.214-3.727.977.999-3.634-.234-.374A9.786 9.786 0 0 1 2.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/>
    </svg>
  </a>

  <script>
    // Sticky nav
    const nav = document.getElementById('nav');
    window.addEventListener('scroll', () => {
      nav.classList.toggle('nav-scrolled', window.scrollY > 50);
    });

    // Mobile menu
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');
    navToggle.addEventListener('click', () => {
      navLinks.classList.toggle('nav-open');
      navToggle.classList.toggle('active');
    });

    // Close menu on link click
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('nav-open');
        navToggle.classList.remove('active');
      });
    });

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          e.preventDefault();
          const offset = 80;
          const top = target.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      });
    });

    // Reveal animations
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    reveals.forEach(el => observer.observe(el));

    // Stagger children in grids
    document.querySelectorAll('.services-grid, .portfolio-grid, .testimonials-grid').forEach(grid => {
      grid.querySelectorAll('.reveal').forEach((child, i) => {
        child.style.transitionDelay = `${i * 0.1}s`;
      });
    });
  </script>
</body>
</html>

'@ | Set-Content -Path "index.html" -Encoding UTF8
Write-Host "Written: index.html" -ForegroundColor Green

@'
/* ========================================================================== */
/* RESET & BASE */
/* ========================================================================== */
*, *::before, *::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --bg: #0d0d0d;
  --bg2: #111827;
  --bg3: #1f2937;
  --primary: #2563eb;
  --accent: #3b82f6;
  --accent-hover: #1d4ed8;
  --text: #f9fafb;
  --muted: #9ca3af;
  --border: #1f2937;
  --card-bg: #111827;
  --card-border: #1f2937;
  --font: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --radius: 12px;
  --radius-sm: 8px;
  --shadow: 0 4px 24px rgba(0,0,0,0.4);
  --shadow-lg: 0 8px 48px rgba(0,0,0,0.6);
  --transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

html {
  scroll-behavior: smooth;
  font-size: 16px;
}

body {
  font-family: var(--font);
  background-color: var(--bg);
  color: var(--text);
  line-height: 1.6;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

img {
  max-width: 100%;
  height: auto;
  display: block;
}

a {
  text-decoration: none;
  color: inherit;
  transition: var(--transition);
}

ul {
  list-style: none;
}

/* ========================================================================== */
/* TYPOGRAPHY */
/* ========================================================================== */
.accent {
  background: linear-gradient(90deg, var(--primary), var(--accent), #60a5fa);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* ========================================================================== */
/* LAYOUT */
/* ========================================================================== */
.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.section {
  padding: 6rem 0;
}

.section-dark {
  background: var(--bg2);
}

/* ========================================================================== */
/* BUTTONS */
/* ========================================================================== */
.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-family: var(--font);
  font-weight: 600;
  font-size: 0.95rem;
  padding: 0.65rem 1.5rem;
  border-radius: var(--radius-sm);
  cursor: pointer;
  border: none;
  transition: var(--transition);
  white-space: nowrap;
  text-decoration: none;
}

.btn-primary {
  background: var(--primary);
  color: #fff;
}
.btn-primary:hover {
  background: var(--accent-hover);
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(37,99,235,0.4);
}

.btn-outline {
  background: transparent;
  color: var(--text);
  border: 1.5px solid var(--border);
}
.btn-outline:hover {
  border-color: var(--accent);
  color: var(--accent);
  transform: translateY(-2px);
}

.btn-lg {
  padding: 0.85rem 2rem;
  font-size: 1rem;
}

.btn-xl {
  padding: 1rem 2.5rem;
  font-size: 1.1rem;
  border-radius: var(--radius);
}

/* ========================================================================== */
/* NAVIGATION */
/* ========================================================================== */
.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 1.25rem 0;
  transition: var(--transition);
}

.nav-scrolled {
  background: rgba(13, 13, 13, 0.92);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-bottom: 1px solid var(--border);
  padding: 0.85rem 0;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.nav-logo {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  flex-shrink: 0;
}

.nav-logo img {
  border-radius: 8px;
}

.nav-logo-text {
  font-weight: 800;
  font-size: 1.1rem;
  letter-spacing: 0.05em;
  color: var(--text);
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.nav-link {
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--muted);
  padding: 0.5rem 0.75rem;
  border-radius: var(--radius-sm);
  transition: var(--transition);
}

.nav-link:hover {
  color: var(--text);
  background: rgba(255,255,255,0.05);
}

.nav-cta {
  margin-left: 0.5rem;
  font-size: 0.875rem;
  padding: 0.6rem 1.25rem;
}

.nav-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
}

.nav-toggle span {
  display: block;
  width: 24px;
  height: 2px;
  background: var(--text);
  border-radius: 2px;
  transition: var(--transition);
}

.nav-toggle.active span:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}
.nav-toggle.active span:nth-child(2) {
  opacity: 0;
}
.nav-toggle.active span:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}

/* ========================================================================== */
/* HERO */
/* ========================================================================== */
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 8rem 0 5rem;
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse 80% 50% at 50% -20%, rgba(37,99,235,0.25) 0%, transparent 70%),
    radial-gradient(ellipse 50% 50% at 80% 80%, rgba(59,130,246,0.1) 0%, transparent 60%);
  pointer-events: none;
}

.hero-content {
  max-width: 800px;
  text-align: center;
  margin: 0 auto;
}

.badge {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  background: rgba(37,99,235,0.15);
  border: 1px solid rgba(37,99,235,0.3);
  color: var(--accent);
  font-size: 0.875rem;
  font-weight: 600;
  padding: 0.4rem 1rem;
  border-radius: 100px;
  margin-bottom: 1.5rem;
  letter-spacing: 0.02em;
}

.hero-title {
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 800;
  line-height: 1.15;
  letter-spacing: -0.02em;
  margin-bottom: 1.25rem;
  color: var(--text);
}

.hero-sub {
  font-size: clamp(1rem, 2vw, 1.2rem);
  color: var(--muted);
  max-width: 600px;
  margin: 0 auto 2.5rem;
  line-height: 1.7;
}

.hero-actions {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 3.5rem;
}

.hero-stats {
  display: inline-flex;
  align-items: center;
  gap: 0;
  background: rgba(255,255,255,0.04);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 1rem 1.5rem;
  flex-wrap: wrap;
  justify-content: center;
}

.stat {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1.5rem;
}

.stat-value {
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--accent);
  line-height: 1;
  margin-bottom: 0.25rem;
}

.stat-label {
  font-size: 0.8rem;
  color: var(--muted);
  font-weight: 500;
}

.stat-divider {
  width: 1px;
  height: 40px;
  background: var(--border);
  flex-shrink: 0;
}

/* ========================================================================== */
/* SECTIONS COMMON */
/* ========================================================================== */
.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-tag {
  display: inline-block;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 0.75rem;
}

.section-title {
  font-size: clamp(1.75rem, 3.5vw, 2.5rem);
  font-weight: 800;
  letter-spacing: -0.02em;
  margin-bottom: 1rem;
  color: var(--text);
}

.section-sub {
  font-size: 1.05rem;
  color: var(--muted);
  max-width: 560px;
  margin: 0 auto;
}

/* ========================================================================== */
/* SERVICES */
/* ========================================================================== */
.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.5rem;
}

.service-card {
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  border-radius: var(--radius);
  padding: 2rem;
  transition: var(--transition);
  cursor: default;
}

.service-card:hover {
  border-color: rgba(59,130,246,0.3);
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(0,0,0,0.4);
}

.service-icon {
  width: 60px;
  height: 60px;
  border-radius: var(--radius-sm);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.25rem;
}

.service-title {
  font-size: 1.15rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: var(--text);
}

.service-desc {
  font-size: 0.95rem;
  color: var(--muted);
  line-height: 1.6;
}

/* ========================================================================== */
/* PORTFOLIO */
/* ========================================================================== */
.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.portfolio-card {
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  border-radius: var(--radius);
  overflow: hidden;
  transition: var(--transition);
}

.portfolio-card:hover {
  border-color: rgba(59,130,246,0.3);
  transform: translateY(-6px);
  box-shadow: var(--shadow-lg);
}

.portfolio-thumb {
  height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.portfolio-thumb-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 100%;
  padding: 1.5rem;
}

.pt-logo {
  width: 52px;
  height: 52px;
  border-radius: 10px;
  border: 2px solid rgba(255,255,255,0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  font-size: 1rem;
  color: rgba(255,255,255,0.8);
  background: rgba(255,255,255,0.1);
  backdrop-filter: blur(4px);
}

.pt-lines {
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 100%;
  max-width: 160px;
}

.pt-line {
  height: 6px;
  border-radius: 3px;
  background: rgba(255,255,255,0.2);
}

.portfolio-info {
  padding: 1.25rem 1.5rem 1.5rem;
}

.portfolio-badge {
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.25rem 0.65rem;
  border-radius: 100px;
  border: 1px solid rgba(59,130,246,0.3);
  color: var(--accent);
  background: rgba(59,130,246,0.1);
  margin-bottom: 0.75rem;
}

.portfolio-name {
  font-size: 1.05rem;
  font-weight: 700;
  margin-bottom: 0.4rem;
  color: var(--text);
}

.portfolio-desc {
  font-size: 0.875rem;
  color: var(--muted);
  line-height: 1.5;
  margin-bottom: 1rem;
}

.portfolio-link {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--accent);
  transition: var(--transition);
}

.portfolio-link:hover {
  color: #60a5fa;
  letter-spacing: 0.02em;
}

/* ========================================================================== */
/* TESTIMONIALS */
/* ========================================================================== */
.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}

.testimonial-card {
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  border-radius: var(--radius);
  padding: 2rem;
  transition: var(--transition);
}

.testimonial-card:hover {
  border-color: rgba(59,130,246,0.25);
  box-shadow: var(--shadow);
}

.stars {
  font-size: 0.9rem;
  margin-bottom: 1rem;
  letter-spacing: 0.05em;
}

.testimonial-text {
  font-size: 0.975rem;
  color: var(--muted);
  line-height: 1.7;
  margin-bottom: 1.5rem;
  font-style: italic;
}

.testimonial-author {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.author-avatar {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary), var(--accent));
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  font-weight: 700;
  color: #fff;
  flex-shrink: 0;
}

.author-info {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
}

.author-name {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--text);
}

.author-role {
  font-size: 0.8rem;
  color: var(--muted);
}

/* ========================================================================== */
/* CTA SECTION */
/* ========================================================================== */
.cta-section {
  position: relative;
  padding: 6rem 0;
  overflow: hidden;
  text-align: center;
}

.cta-bg {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse 60% 80% at 50% 50%, rgba(37,99,235,0.2) 0%, transparent 70%);
  pointer-events: none;
}

.cta-content {
  position: relative;
  z-index: 1;
}

.cta-title {
  font-size: clamp(1.75rem, 4vw, 2.75rem);
  font-weight: 800;
  letter-spacing: -0.02em;
  margin-bottom: 1rem;
}

.cta-sub {
  font-size: 1.1rem;
  color: var(--muted);
  margin-bottom: 2.5rem;
}

/* ========================================================================== */
/* FOOTER */
/* ========================================================================== */
.footer {
  background: var(--bg2);
  border-top: 1px solid var(--border);
  padding: 4rem 0 2rem;
}

.footer-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 3rem;
  margin-bottom: 3rem;
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-weight: 800;
  font-size: 1rem;
  letter-spacing: 0.05em;
  margin-bottom: 1rem;
}

.footer-logo img {
  border-radius: 6px;
}

.footer-tagline {
  font-size: 0.9rem;
  color: var(--muted);
  line-height: 1.6;
  max-width: 280px;
}

.footer-nav-title {
  display: block;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--muted);
  margin-bottom: 1.25rem;
}

.footer-nav ul,
.footer-contact ul {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.footer-nav ul a {
  font-size: 0.9rem;
  color: var(--muted);
}
.footer-nav ul a:hover {
  color: var(--text);
}

.footer-contact ul li {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: var(--muted);
}

.footer-contact ul li svg {
  flex-shrink: 0;
}

.footer-bottom {
  border-top: 1px solid var(--border);
  padding-top: 1.5rem;
  text-align: center;
}

.footer-bottom p {
  font-size: 0.85rem;
  color: var(--muted);
}

/* ========================================================================== */
/* FLOATING WHATSAPP */
/* ========================================================================== */
.whatsapp-float {
  position: fixed;
  bottom: 1.75rem;
  right: 1.75rem;
  z-index: 999;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: #25d366;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 20px rgba(37, 211, 102, 0.5);
  transition: var(--transition);
  animation: float-pulse 3s ease-in-out infinite;
}

.whatsapp-float:hover {
  background: #1ebe5d;
  transform: scale(1.1);
  box-shadow: 0 6px 28px rgba(37, 211, 102, 0.65);
}

@keyframes float-pulse {
  0%, 100% { box-shadow: 0 4px 20px rgba(37,211,102,0.5); }
  50% { box-shadow: 0 4px 30px rgba(37,211,102,0.75), 0 0 0 8px rgba(37,211,102,0.1); }
}

/* ========================================================================== */
/* ANIMATIONS */
/* ========================================================================== */
.reveal {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.6s cubic-bezier(0.4,0,0.2,1), transform 0.6s cubic-bezier(0.4,0,0.2,1);
}

.reveal.revealed {
  opacity: 1;
  transform: translateY(0);
}

/* ========================================================================== */
/* RESPONSIVE */
/* ========================================================================== */
@media (max-width: 1024px) {
  .portfolio-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .section {
    padding: 4rem 0;
  }

  /* Nav */
  .nav-toggle {
    display: flex;
  }

  .nav-links {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(13,13,13,0.97);
    backdrop-filter: blur(20px);
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s ease;
    z-index: 999;
  }

  .nav-links.nav-open {
    opacity: 1;
    pointer-events: all;
  }

  .nav-link {
    font-size: 1.25rem;
    padding: 0.75rem 1.5rem;
  }

  .nav-cta {
    margin-left: 0;
    font-size: 1rem;
    padding: 0.85rem 2rem;
  }

  /* Hero */
  .hero {
    padding: 7rem 0 4rem;
  }

  .hero-stats {
    gap: 0.5rem;
  }

  .stat-divider {
    display: none;
  }

  .stat {
    padding: 0.75rem 1rem;
  }

  /* Services */
  .services-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  /* Portfolio */
  .portfolio-grid {
    grid-template-columns: 1fr;
  }

  /* Testimonials */
  .testimonials-grid {
    grid-template-columns: 1fr;
  }

  /* Footer */
  .footer-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}

@media (max-width: 480px) {
  .hero-actions {
    flex-direction: column;
    align-items: stretch;
  }

  .btn-lg {
    text-align: center;
    justify-content: center;
  }

  .hero-stats {
    width: 100%;
    justify-content: space-around;
  }

  .stat {
    padding: 0.5rem 0.5rem;
    flex: 1;
  }
}

'@ | Set-Content -Path "style.css" -Encoding UTF8
Write-Host "Written: style.css" -ForegroundColor Green

@'
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>TechFlow Soluções — Consultoria em TI</title>
  <meta name="description" content="Soluções em TI que transformam negócios. Consultoria, desenvolvimento, cloud e suporte especializado." />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
  <style>
    *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
    :root {
      --bg: #0d0d0d;
      --bg2: #0f1729;
      --primary: #2563eb;
      --accent: #3b82f6;
      --text: #f9fafb;
      --muted: #94a3b8;
      --border: #1e293b;
      --card: #111827;
      --font: 'Inter', sans-serif;
      --radius: 12px;
      --radius-sm: 8px;
      --transition: 0.3s cubic-bezier(0.4,0,0.2,1);
    }
    html { scroll-behavior: smooth; }
    body { font-family: var(--font); background: var(--bg); color: var(--text); line-height: 1.6; overflow-x: hidden; -webkit-font-smoothing: antialiased; }
    a { text-decoration: none; color: inherit; transition: var(--transition); }
    ul { list-style: none; }
    .container { max-width: 1100px; margin: 0 auto; padding: 0 1.5rem; }

    /* NAV */
    nav { position: fixed; top: 0; left: 0; right: 0; z-index: 100; padding: 1.25rem 0; background: rgba(13,13,13,0.85); backdrop-filter: blur(16px); border-bottom: 1px solid var(--border); }
    .nav-inner { display: flex; align-items: center; justify-content: space-between; }
    .nav-brand { display: flex; align-items: center; gap: 0.6rem; font-weight: 800; font-size: 1.15rem; letter-spacing: -0.01em; }
    .brand-icon { width: 36px; height: 36px; background: linear-gradient(135deg, var(--primary), var(--accent)); border-radius: 8px; display: flex; align-items: center; justify-content: center; }
    .brand-icon svg { width: 20px; height: 20px; fill: #fff; }
    nav ul { display: flex; gap: 0.25rem; align-items: center; }
    nav ul li a { font-size: 0.9rem; color: var(--muted); padding: 0.5rem 0.75rem; border-radius: 6px; }
    nav ul li a:hover { color: var(--text); background: rgba(255,255,255,0.05); }
    .nav-cta { background: var(--primary); color: #fff !important; padding: 0.55rem 1.2rem !important; border-radius: 8px !important; font-weight: 600 !important; }
    .nav-cta:hover { background: #1d4ed8 !important; }

    /* HERO */
    .hero { min-height: 100vh; display: flex; align-items: center; padding: 8rem 0 5rem; position: relative; overflow: hidden; }
    .hero::before { content: ''; position: absolute; inset: 0; background: radial-gradient(ellipse 80% 60% at 50% 0%, rgba(37,99,235,0.22) 0%, transparent 70%); pointer-events: none; }
    .hero::after { content: ''; position: absolute; bottom: -100px; right: -100px; width: 500px; height: 500px; background: radial-gradient(circle, rgba(37,99,235,0.08), transparent 70%); pointer-events: none; }
    .hero-inner { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center; position: relative; z-index: 1; }
    .hero-badge { display: inline-flex; align-items: center; gap: 0.4rem; background: rgba(37,99,235,0.12); border: 1px solid rgba(37,99,235,0.3); color: var(--accent); font-size: 0.8rem; font-weight: 600; padding: 0.35rem 0.9rem; border-radius: 100px; margin-bottom: 1.25rem; letter-spacing: 0.04em; }
    .hero h1 { font-size: clamp(2rem, 4vw, 3rem); font-weight: 800; line-height: 1.15; letter-spacing: -0.02em; margin-bottom: 1.25rem; }
    .hero h1 span { background: linear-gradient(90deg, #2563eb, #60a5fa); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
    .hero p { font-size: 1.05rem; color: var(--muted); margin-bottom: 2rem; line-height: 1.7; }
    .hero-btns { display: flex; gap: 1rem; flex-wrap: wrap; }
    .btn { display: inline-flex; align-items: center; gap: 0.5rem; font-family: var(--font); font-weight: 600; font-size: 0.95rem; padding: 0.75rem 1.75rem; border-radius: var(--radius-sm); cursor: pointer; border: none; transition: var(--transition); }
    .btn-primary { background: var(--primary); color: #fff; }
    .btn-primary:hover { background: #1d4ed8; transform: translateY(-2px); box-shadow: 0 8px 24px rgba(37,99,235,0.35); }
    .btn-ghost { background: transparent; color: var(--text); border: 1.5px solid var(--border); }
    .btn-ghost:hover { border-color: var(--accent); color: var(--accent); }
    .hero-visual { position: relative; }
    .hero-card { background: var(--card); border: 1px solid var(--border); border-radius: var(--radius); padding: 1.5rem; margin-bottom: 1rem; }
    .hc-row { display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.75rem; }
    .hc-icon { width: 36px; height: 36px; border-radius: 8px; background: rgba(37,99,235,0.15); display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
    .hc-title { font-weight: 600; font-size: 0.9rem; }
    .hc-bar { height: 6px; background: var(--border); border-radius: 3px; margin-bottom: 0.5rem; overflow: hidden; }
    .hc-bar-fill { height: 100%; background: linear-gradient(90deg, var(--primary), var(--accent)); border-radius: 3px; }
    .hc-stat { font-size: 0.8rem; color: var(--muted); }
    .hero-badge-mini { display: inline-flex; align-items: center; gap: 0.35rem; font-size: 0.75rem; color: #22c55e; background: rgba(34,197,94,0.1); border: 1px solid rgba(34,197,94,0.2); padding: 0.25rem 0.65rem; border-radius: 100px; font-weight: 600; }
    .dot { width: 6px; height: 6px; border-radius: 50%; background: #22c55e; display: inline-block; animation: blink 1.5s ease-in-out infinite; }
    @keyframes blink { 0%,100%{opacity:1;} 50%{opacity:0.3;} }

    /* SERVICES */
    .section { padding: 5.5rem 0; }
    .section-dark { background: var(--bg2); }
    .section-header { text-align: center; margin-bottom: 3.5rem; }
    .section-tag { font-size: 0.78rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: var(--accent); display: block; margin-bottom: 0.5rem; }
    .section-title { font-size: clamp(1.6rem, 3vw, 2.25rem); font-weight: 800; letter-spacing: -0.02em; margin-bottom: 0.75rem; }
    .section-sub { font-size: 1rem; color: var(--muted); max-width: 520px; margin: 0 auto; }
    .services-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.25rem; }
    .service-card { background: var(--card); border: 1px solid var(--border); border-radius: var(--radius); padding: 1.75rem; transition: var(--transition); }
    .service-card:hover { border-color: rgba(37,99,235,0.4); transform: translateY(-4px); box-shadow: 0 12px 40px rgba(0,0,0,0.4); }
    .svc-icon { width: 52px; height: 52px; border-radius: 10px; display: flex; align-items: center; justify-content: center; margin-bottom: 1.25rem; }
    .svc-title { font-weight: 700; font-size: 1rem; margin-bottom: 0.5rem; }
    .svc-desc { font-size: 0.875rem; color: var(--muted); line-height: 1.6; }

    /* ABOUT */
    .about-inner { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center; }
    .about-visual { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
    .about-stat { background: var(--card); border: 1px solid var(--border); border-radius: var(--radius); padding: 1.5rem; text-align: center; }
    .about-stat-value { font-size: 2rem; font-weight: 800; color: var(--accent); display: block; margin-bottom: 0.25rem; }
    .about-stat-label { font-size: 0.85rem; color: var(--muted); }
    .about-text h2 { font-size: clamp(1.5rem, 2.5vw, 2rem); font-weight: 800; letter-spacing: -0.02em; margin-bottom: 1rem; }
    .about-text p { color: var(--muted); line-height: 1.75; margin-bottom: 1rem; font-size: 0.975rem; }
    .check-list { display: flex; flex-direction: column; gap: 0.75rem; margin-top: 1.5rem; }
    .check-item { display: flex; align-items: center; gap: 0.65rem; font-size: 0.9rem; color: var(--muted); }
    .check-item::before { content: '✓'; color: var(--accent); font-weight: 700; font-size: 0.85rem; width: 20px; height: 20px; background: rgba(37,99,235,0.1); border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }

    /* CTA FINAL */
    .cta-section { background: linear-gradient(135deg, #0f1729 0%, #1e293b 100%); text-align: center; padding: 5.5rem 0; position: relative; overflow: hidden; }
    .cta-section::before { content: ''; position: absolute; top: -100px; left: 50%; transform: translateX(-50%); width: 600px; height: 600px; background: radial-gradient(circle, rgba(37,99,235,0.15), transparent 70%); pointer-events: none; }
    .cta-section h2 { font-size: clamp(1.75rem, 3.5vw, 2.5rem); font-weight: 800; letter-spacing: -0.02em; margin-bottom: 1rem; position: relative; z-index: 1; }
    .cta-section p { color: var(--muted); font-size: 1.05rem; margin-bottom: 2.5rem; position: relative; z-index: 1; }
    .btn-lg { padding: 0.9rem 2.25rem; font-size: 1rem; position: relative; z-index: 1; }

    /* FOOTER */
    footer { background: var(--bg2); border-top: 1px solid var(--border); padding: 2.5rem 0; }
    .footer-inner { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem; }
    .footer-brand { font-weight: 700; font-size: 0.95rem; color: var(--muted); }
    .footer-back { font-size: 0.875rem; color: var(--accent); border: 1px solid rgba(37,99,235,0.3); padding: 0.4rem 1rem; border-radius: 6px; }
    .footer-back:hover { background: rgba(37,99,235,0.1); }
    .footer-copy { font-size: 0.8rem; color: var(--muted); }

    @media (max-width: 900px) {
      .services-grid { grid-template-columns: repeat(2, 1fr); }
      .hero-inner, .about-inner { grid-template-columns: 1fr; }
      .hero-visual { display: none; }
    }
    @media (max-width: 600px) {
      .services-grid { grid-template-columns: 1fr; }
      .about-visual { grid-template-columns: repeat(2, 1fr); }
      nav ul { display: none; }
    }
  </style>
</head>
<body>

  <nav>
    <div class="container">
      <div class="nav-inner">
        <div class="nav-brand">
          <div class="brand-icon">
            <svg viewBox="0 0 24 24"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
          </div>
          TechFlow
        </div>
        <ul>
          <li><a href="#servicos">Serviços</a></li>
          <li><a href="#sobre">Sobre</a></li>
          <li><a href="https://wa.me/5511934900204?text=Olá,%20vim%20pelo%20site%20TechFlow!" class="nav-cta" target="_blank" rel="noopener">Fale conosco</a></li>
        </ul>
      </div>
    </div>
  </nav>

  <section class="hero">
    <div class="container">
      <div class="hero-inner">
        <div class="hero-text">
          <div class="hero-badge">🚀 Especialistas em tecnologia</div>
          <h1>Soluções em TI que <span>transformam negócios</span></h1>
          <p>Da consultoria estratégica à implementação técnica, ajudamos empresas a crescer com a tecnologia certa. Mais eficiência, menos custo, mais resultado.</p>
          <div class="hero-btns">
            <a href="https://wa.me/5511934900204?text=Olá,%20vim%20pelo%20site%20TechFlow!" class="btn btn-primary" target="_blank" rel="noopener">
              Falar com especialista
            </a>
            <a href="#servicos" class="btn btn-ghost">Ver serviços</a>
          </div>
        </div>
        <div class="hero-visual">
          <div class="hero-card">
            <div class="hc-row">
              <div class="hc-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
              </div>
              <div>
                <div class="hc-title">Performance do sistema</div>
                <div class="hero-badge-mini"><span class="dot"></span> Online</div>
              </div>
            </div>
            <div class="hc-bar"><div class="hc-bar-fill" style="width:87%"></div></div>
            <div class="hc-stat">Uptime: 99.9% — Latência: 12ms</div>
          </div>
          <div class="hero-card">
            <div class="hc-row">
              <div class="hc-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <div>
                <div class="hc-title">Segurança ativa</div>
                <div class="hero-badge-mini"><span class="dot"></span> Protegido</div>
              </div>
            </div>
            <div class="hc-bar"><div class="hc-bar-fill" style="width:100%"></div></div>
            <div class="hc-stat">Firewall + SSL + Monitoramento 24h</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="section section-dark" id="servicos">
    <div class="container">
      <div class="section-header">
        <span class="section-tag">Serviços</span>
        <h2 class="section-title">Tudo que sua empresa precisa em TI</h2>
        <p class="section-sub">Soluções completas, do planejamento à execução, com foco em resultados reais</p>
      </div>
      <div class="services-grid">
        <div class="service-card">
          <div class="svc-icon" style="background: linear-gradient(135deg, #2563eb22, #3b82f622);">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
          </div>
          <h3 class="svc-title">Consultoria em TI</h3>
          <p class="svc-desc">Diagnóstico completo da infraestrutura e roadmap estratégico personalizado para o seu negócio.</p>
        </div>
        <div class="service-card">
          <div class="svc-icon" style="background: linear-gradient(135deg, #7c3aed22, #8b5cf622);">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
          </div>
          <h3 class="svc-title">Desenvolvimento</h3>
          <p class="svc-desc">Sistemas web, APIs e automações sob medida para otimizar processos e aumentar produtividade.</p>
        </div>
        <div class="service-card">
          <div class="svc-icon" style="background: linear-gradient(135deg, #0891b222, #06b6d422);">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#06b6d4" stroke-width="2"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>
          </div>
          <h3 class="svc-title">Cloud & Infraestrutura</h3>
          <p class="svc-desc">Migração para nuvem, escalabilidade automática e redução de custos com AWS, GCP e Azure.</p>
        </div>
        <div class="service-card">
          <div class="svc-icon" style="background: linear-gradient(135deg, #16a34a22, #22c55e22);">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#22c55e" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
          </div>
          <h3 class="svc-title">Suporte Especializado</h3>
          <p class="svc-desc">Suporte técnico ágil e preventivo, com SLAs definidos e equipe dedicada ao seu negócio.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="section" id="sobre">
    <div class="container">
      <div class="about-inner">
        <div class="about-visual">
          <div class="about-stat">
            <span class="about-stat-value">200+</span>
            <span class="about-stat-label">Projetos entregues</span>
          </div>
          <div class="about-stat">
            <span class="about-stat-value">98%</span>
            <span class="about-stat-label">Satisfação dos clientes</span>
          </div>
          <div class="about-stat">
            <span class="about-stat-value">8 anos</span>
            <span class="about-stat-label">De experiência</span>
          </div>
          <div class="about-stat">
            <span class="about-stat-value">24h</span>
            <span class="about-stat-label">Suporte disponível</span>
          </div>
        </div>
        <div class="about-text">
          <span class="section-tag">Sobre nós</span>
          <h2>Tecnologia como <span style="color:#3b82f6;">vantagem competitiva</span></h2>
          <p>A TechFlow nasceu com um propósito claro: tornar a tecnologia acessível e estratégica para empresas de todos os tamanhos. Nossa equipe combina profundo conhecimento técnico com visão de negócios.</p>
          <p>Não somos apenas um fornecedor de TI — somos parceiros de crescimento que entendem seus desafios e entregam soluções que funcionam.</p>
          <div class="check-list">
            <div class="check-item">Equipe certificada em AWS, Azure e Google Cloud</div>
            <div class="check-item">Metodologia ágil com entregas em sprints</div>
            <div class="check-item">Contratos flexíveis sem lock-in</div>
            <div class="check-item">Relatórios mensais de performance e ROI</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="cta-section">
    <div class="container">
      <h2>Pronto para transformar sua TI?</h2>
      <p>Agende uma conversa gratuita com nossos especialistas e descubra como podemos ajudar.</p>
      <a href="https://wa.me/5511934900204?text=Olá,%20vim%20pelo%20site%20TechFlow%20e%20gostaria%20de%20agendar%20uma%20conversa!" class="btn btn-primary btn-lg" target="_blank" rel="noopener">
        Falar com um especialista
      </a>
    </div>
  </section>

  <footer>
    <div class="container">
      <div class="footer-inner">
        <div class="footer-brand">© 2025 TechFlow Soluções. Todos os direitos reservados.</div>
        <div class="footer-copy" style="font-size:0.8rem; color: #475569;">São Paulo, SP — contato@techflow.com.br</div>
        <a href="/" class="footer-back">← Criado pela VorinWeb</a>
      </div>
    </div>
  </footer>

</body>
</html>

'@ | Set-Content -Path "projetos\techflow\index.html" -Encoding UTF8
Write-Host "Written: projetos/techflow/index.html" -ForegroundColor Green

@'
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Advocacia Silva &amp; Braga — Escritório de Advocacia</title>
  <meta name="description" content="Defendendo seus direitos com excelência e comprometimento. Advocacia especializada em Direito Civil, Trabalhista, Empresarial e de Família." />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Playfair+Display:wght@600;700;800&display=swap" rel="stylesheet" />
  <style>
    *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
    :root {
      --bg: #0f1623;
      --bg2: #0a0f1a;
      --bg3: #141e30;
      --gold: #c9a227;
      --gold-light: #e0bb58;
      --gold-dim: rgba(201,162,39,0.15);
      --text: #f0ebe0;
      --muted: #8899aa;
      --border: #1e2d42;
      --card: #111827;
      --font: 'Inter', sans-serif;
      --serif: 'Playfair Display', Georgia, serif;
      --radius: 10px;
      --transition: 0.3s cubic-bezier(0.4,0,0.2,1);
    }
    html { scroll-behavior: smooth; }
    body { font-family: var(--font); background: var(--bg); color: var(--text); line-height: 1.6; overflow-x: hidden; -webkit-font-smoothing: antialiased; }
    a { text-decoration: none; color: inherit; transition: var(--transition); }
    ul { list-style: none; }
    .container { max-width: 1100px; margin: 0 auto; padding: 0 1.5rem; }

    /* NAV */
    nav { position: fixed; top: 0; left: 0; right: 0; z-index: 100; padding: 1.25rem 0; background: rgba(15,22,35,0.92); backdrop-filter: blur(16px); border-bottom: 1px solid var(--border); }
    .nav-inner { display: flex; align-items: center; justify-content: space-between; }
    .nav-brand { font-family: var(--serif); font-size: 1.2rem; font-weight: 700; color: var(--gold); letter-spacing: 0.02em; }
    .nav-brand span { color: var(--text); font-size: 0.75rem; display: block; font-family: var(--font); font-weight: 400; letter-spacing: 0.05em; text-transform: uppercase; color: var(--muted); }
    nav ul { display: flex; gap: 0.25rem; align-items: center; }
    nav ul li a { font-size: 0.875rem; color: var(--muted); padding: 0.5rem 0.75rem; border-radius: 6px; }
    nav ul li a:hover { color: var(--text); }
    .nav-cta { background: var(--gold) !important; color: #0f1623 !important; font-weight: 700 !important; padding: 0.55rem 1.2rem !important; border-radius: 6px !important; font-size: 0.875rem !important; }
    .nav-cta:hover { background: var(--gold-light) !important; }

    /* HERO */
    .hero { min-height: 100vh; display: flex; align-items: center; padding: 8rem 0 5rem; position: relative; overflow: hidden; }
    .hero-bg { position: absolute; inset: 0; background: linear-gradient(160deg, #0a0f1a 0%, #0f1623 40%, #141e30 100%); }
    .hero-bg::after { content: ''; position: absolute; top: 0; right: 0; width: 60%; height: 100%; background: linear-gradient(to left, rgba(201,162,39,0.04) 0%, transparent 60%); }
    .hero-deco { position: absolute; bottom: -60px; left: -60px; width: 400px; height: 400px; background: radial-gradient(circle, rgba(201,162,39,0.05), transparent 70%); pointer-events: none; }
    .hero-inner { display: grid; grid-template-columns: 3fr 2fr; gap: 5rem; align-items: center; position: relative; z-index: 1; }
    .hero-label { display: flex; align-items: center; gap: 0.6rem; margin-bottom: 1.5rem; }
    .hero-label span { width: 28px; height: 1px; background: var(--gold); }
    .hero-label p { font-size: 0.78rem; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: var(--gold); }
    .hero h1 { font-family: var(--serif); font-size: clamp(2rem, 4vw, 3.2rem); font-weight: 700; line-height: 1.2; letter-spacing: -0.01em; margin-bottom: 1.5rem; }
    .hero h1 span { color: var(--gold); }
    .hero p { font-size: 1rem; color: var(--muted); margin-bottom: 2.5rem; line-height: 1.75; max-width: 480px; }
    .btn { display: inline-flex; align-items: center; gap: 0.5rem; font-family: var(--font); font-weight: 600; font-size: 0.95rem; padding: 0.75rem 1.75rem; border-radius: var(--radius); cursor: pointer; border: none; transition: var(--transition); }
    .btn-gold { background: var(--gold); color: #0f1623; }
    .btn-gold:hover { background: var(--gold-light); transform: translateY(-2px); box-shadow: 0 8px 24px rgba(201,162,39,0.3); }
    .btn-outline { background: transparent; color: var(--text); border: 1.5px solid var(--border); }
    .btn-outline:hover { border-color: var(--gold); color: var(--gold); }
    .hero-btns { display: flex; gap: 1rem; flex-wrap: wrap; margin-bottom: 3rem; }
    .hero-trust { display: flex; gap: 2rem; padding-top: 2rem; border-top: 1px solid var(--border); }
    .trust-item { text-align: center; }
    .trust-num { font-size: 1.5rem; font-weight: 800; color: var(--gold); font-family: var(--serif); }
    .trust-label { font-size: 0.78rem; color: var(--muted); }
    .hero-badge-box { background: var(--bg3); border: 1px solid var(--border); border-radius: var(--radius); padding: 2rem; text-align: center; }
    .hbb-icon { font-size: 3rem; margin-bottom: 1rem; }
    .hbb-title { font-family: var(--serif); font-size: 1.2rem; color: var(--gold); margin-bottom: 0.5rem; }
    .hbb-sub { font-size: 0.85rem; color: var(--muted); line-height: 1.6; }
    .hbb-list { display: flex; flex-direction: column; gap: 0.6rem; margin-top: 1.25rem; text-align: left; }
    .hbb-item { display: flex; align-items: center; gap: 0.5rem; font-size: 0.85rem; color: var(--muted); }
    .hbb-item::before { content: '§'; color: var(--gold); font-weight: 700; flex-shrink: 0; }

    /* AREAS */
    .section { padding: 5.5rem 0; }
    .section-dark { background: var(--bg2); }
    .section-header { text-align: center; margin-bottom: 3.5rem; }
    .section-tag { font-size: 0.78rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: var(--gold); display: block; margin-bottom: 0.5rem; }
    .section-title { font-family: var(--serif); font-size: clamp(1.6rem, 3vw, 2.25rem); font-weight: 700; letter-spacing: -0.01em; margin-bottom: 0.75rem; }
    .section-sub { font-size: 1rem; color: var(--muted); max-width: 520px; margin: 0 auto; }
    .areas-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.25rem; }
    .area-card { background: var(--bg3); border: 1px solid var(--border); border-radius: var(--radius); padding: 2rem 1.5rem; transition: var(--transition); }
    .area-card:hover { border-color: var(--gold); transform: translateY(-4px); box-shadow: 0 12px 40px rgba(0,0,0,0.4); }
    .area-number { font-family: var(--serif); font-size: 2.5rem; font-weight: 700; color: rgba(201,162,39,0.2); line-height: 1; margin-bottom: 1rem; }
    .area-title { font-weight: 700; font-size: 1rem; color: var(--text); margin-bottom: 0.5rem; }
    .area-desc { font-size: 0.875rem; color: var(--muted); line-height: 1.6; }

    /* TEAM */
    .team-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 2rem; max-width: 700px; margin: 0 auto; }
    .team-card { background: var(--bg3); border: 1px solid var(--border); border-radius: var(--radius); padding: 2rem; display: flex; gap: 1.25rem; align-items: flex-start; transition: var(--transition); }
    .team-card:hover { border-color: var(--gold); }
    .team-avatar { width: 64px; height: 64px; border-radius: 50%; background: linear-gradient(135deg, var(--gold), #8b6914); display: flex; align-items: center; justify-content: center; font-family: var(--serif); font-size: 1.25rem; font-weight: 700; color: #0f1623; flex-shrink: 0; }
    .team-name { font-weight: 700; font-size: 1rem; margin-bottom: 0.2rem; }
    .team-role { font-size: 0.8rem; color: var(--gold); font-weight: 600; margin-bottom: 0.6rem; }
    .team-desc { font-size: 0.85rem; color: var(--muted); line-height: 1.6; }
    .team-oab { display: inline-block; font-size: 0.75rem; color: var(--muted); border: 1px solid var(--border); padding: 0.2rem 0.6rem; border-radius: 4px; margin-top: 0.5rem; }

    /* CTA */
    .cta-section { background: linear-gradient(160deg, #0a0f1a 0%, #141e30 100%); text-align: center; padding: 5.5rem 0; position: relative; overflow: hidden; }
    .cta-section::before { content: ''; position: absolute; top: 0; left: 50%; transform: translateX(-50%); width: 600px; height: 3px; background: linear-gradient(90deg, transparent, var(--gold), transparent); }
    .cta-section h2 { font-family: var(--serif); font-size: clamp(1.75rem, 3.5vw, 2.5rem); font-weight: 700; margin-bottom: 1rem; }
    .cta-section h2 span { color: var(--gold); }
    .cta-section p { color: var(--muted); font-size: 1rem; margin-bottom: 2.5rem; max-width: 500px; margin-left: auto; margin-right: auto; }

    /* FOOTER */
    footer { background: var(--bg2); border-top: 1px solid var(--border); padding: 2.5rem 0; }
    .footer-inner { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem; }
    .footer-brand { font-family: var(--serif); font-weight: 600; color: var(--gold); font-size: 0.95rem; }
    .footer-copy { font-size: 0.8rem; color: var(--muted); }
    .footer-back { font-size: 0.875rem; color: var(--gold); border: 1px solid rgba(201,162,39,0.3); padding: 0.4rem 1rem; border-radius: 6px; }
    .footer-back:hover { background: var(--gold-dim); }

    @media (max-width: 900px) {
      .hero-inner { grid-template-columns: 1fr; }
      .hero-badge-box { display: none; }
      .areas-grid { grid-template-columns: repeat(2, 1fr); }
      .team-grid { grid-template-columns: 1fr; }
    }
    @media (max-width: 600px) {
      .areas-grid { grid-template-columns: 1fr; }
      nav ul { display: none; }
    }
  </style>
</head>
<body>

  <nav>
    <div class="container">
      <div class="nav-inner">
        <div class="nav-brand">
          Silva &amp; Braga Advocacia
          <span>Escritório de Advocacia</span>
        </div>
        <ul>
          <li><a href="#areas">Áreas</a></li>
          <li><a href="#equipe">Equipe</a></li>
          <li><a href="https://wa.me/5511934900204?text=Olá,%20vim%20pelo%20site%20Silva%20%26%20Braga%20e%20gostaria%20de%20agendar%20uma%20consulta" class="nav-cta" target="_blank" rel="noopener">Agendar consulta</a></li>
        </ul>
      </div>
    </div>
  </nav>

  <section class="hero">
    <div class="hero-bg"></div>
    <div class="hero-deco"></div>
    <div class="container">
      <div class="hero-inner">
        <div>
          <div class="hero-label">
            <span></span>
            <p>Advocacia especializada</p>
          </div>
          <h1>Defendendo seus direitos com <span>excelência</span> e comprometimento</h1>
          <p>Com mais de 15 anos de atuação, o escritório Silva &amp; Braga oferece assessoria jurídica completa, ética e personalizada para pessoas físicas e empresas.</p>
          <div class="hero-btns">
            <a href="https://wa.me/5511934900204?text=Olá,%20vim%20pelo%20site%20Silva%20%26%20Braga%20e%20gostaria%20de%20agendar%20uma%20consulta" class="btn btn-gold" target="_blank" rel="noopener">
              Agendar consulta gratuita
            </a>
            <a href="#areas" class="btn btn-outline">Nossas áreas</a>
          </div>
          <div class="hero-trust">
            <div class="trust-item">
              <div class="trust-num">+500</div>
              <div class="trust-label">Casos resolvidos</div>
            </div>
            <div class="trust-item">
              <div class="trust-num">15+</div>
              <div class="trust-label">Anos de experiência</div>
            </div>
            <div class="trust-item">
              <div class="trust-num">98%</div>
              <div class="trust-label">Taxa de êxito</div>
            </div>
          </div>
        </div>
        <div class="hero-badge-box">
          <div class="hbb-icon">⚖️</div>
          <div class="hbb-title">Consultoria jurídica</div>
          <div class="hbb-sub">Atendimento personalizado para cada situação</div>
          <div class="hbb-list">
            <div class="hbb-item">Análise completa do caso</div>
            <div class="hbb-item">Estratégia jurídica personalizada</div>
            <div class="hbb-item">Acompanhamento em todas as fases</div>
            <div class="hbb-item">Comunicação clara e transparente</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="section section-dark" id="areas">
    <div class="container">
      <div class="section-header">
        <span class="section-tag">Especialidades</span>
        <h2 class="section-title">Áreas de atuação</h2>
        <p class="section-sub">Expertise jurídica abrangente para proteger seus interesses em diferentes esferas do direito</p>
      </div>
      <div class="areas-grid">
        <div class="area-card">
          <div class="area-number">01</div>
          <h3 class="area-title">Direito Civil</h3>
          <p class="area-desc">Contratos, responsabilidade civil, indenizações, direito do consumidor e questões patrimoniais em geral.</p>
        </div>
        <div class="area-card">
          <div class="area-number">02</div>
          <h3 class="area-title">Direito Trabalhista</h3>
          <p class="area-desc">Representação de empregados e empregadores em ações trabalhistas, rescisões, horas extras e assédio moral.</p>
        </div>
        <div class="area-card">
          <div class="area-number">03</div>
          <h3 class="area-title">Direito Empresarial</h3>
          <p class="area-desc">Constituição de empresas, contratos comerciais, fusões, aquisições e recuperação judicial.</p>
        </div>
        <div class="area-card">
          <div class="area-number">04</div>
          <h3 class="area-title">Direito de Família</h3>
          <p class="area-desc">Divórcio, guarda de filhos, pensão alimentícia, inventário e partilha de bens com sensibilidade e técnica.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="section" id="equipe">
    <div class="container">
      <div class="section-header">
        <span class="section-tag">Nossa equipe</span>
        <h2 class="section-title">Advogados especializados</h2>
        <p class="section-sub">Profissionais comprometidos com a excelência e com os resultados dos nossos clientes</p>
      </div>
      <div class="team-grid">
        <div class="team-card">
          <div class="team-avatar">RS</div>
          <div>
            <div class="team-name">Dr. Ricardo Silva</div>
            <div class="team-role">Sócio fundador — Direito Civil e Empresarial</div>
            <div class="team-desc">Especialista em contratos e direito empresarial, com pós-graduação pela USP e mais de 15 anos de atuação nos principais tribunais do país.</div>
            <div class="team-oab">OAB/SP 245.678</div>
          </div>
        </div>
        <div class="team-card">
          <div class="team-avatar">CB</div>
          <div>
            <div class="team-name">Dra. Camila Braga</div>
            <div class="team-role">Sócia — Direito Trabalhista e Família</div>
            <div class="team-desc">Mestra em Direito do Trabalho pela PUC-SP, com vasta experiência em mediação e processos sensíveis de família e sucessões.</div>
            <div class="team-oab">OAB/SP 312.456</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="cta-section">
    <div class="container">
      <h2>Agende sua <span>consulta gratuita</span></h2>
      <p>Fale com um de nossos advogados e entenda como podemos proteger seus direitos e interesses.</p>
      <a href="https://wa.me/5511934900204?text=Olá,%20vim%20pelo%20site%20Silva%20%26%20Braga%20e%20gostaria%20de%20agendar%20uma%20consulta%20gratuita" class="btn btn-gold" target="_blank" rel="noopener">
        Agendar consulta gratuita
      </a>
    </div>
  </section>

  <footer>
    <div class="container">
      <div class="footer-inner">
        <div class="footer-brand">Silva &amp; Braga Advocacia</div>
        <div class="footer-copy">Rua da Justiça, 1024 — São Paulo, SP</div>
        <a href="/" class="footer-back">← Criado pela VorinWeb</a>
      </div>
    </div>
  </footer>

</body>
</html>

'@ | Set-Content -Path "projetos\advocacia\index.html" -Encoding UTF8
Write-Host "Written: projetos/advocacia/index.html" -ForegroundColor Green

@'
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>FitMax Pro — Suplementos que entregam resultado</title>
  <meta name="description" content="Suplementos premium com fórmulas testadas e aprovadas. Ganhe massa, perca gordura, melhore sua performance. Frete grátis hoje!" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
  <style>
    *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
    :root {
      --bg: #0a0a0a;
      --bg2: #0f1410;
      --bg3: #111811;
      --green: #16a34a;
      --green-light: #22c55e;
      --green-dim: rgba(22,163,74,0.15);
      --text: #f0fdf4;
      --muted: #86a88e;
      --border: #1a2a1c;
      --card: #0f1a10;
      --font: 'Inter', sans-serif;
      --radius: 12px;
      --transition: 0.3s cubic-bezier(0.4,0,0.2,1);
    }
    html { scroll-behavior: smooth; }
    body { font-family: var(--font); background: var(--bg); color: var(--text); line-height: 1.6; overflow-x: hidden; -webkit-font-smoothing: antialiased; }
    a { text-decoration: none; color: inherit; transition: var(--transition); }
    ul { list-style: none; }
    .container { max-width: 1100px; margin: 0 auto; padding: 0 1.5rem; }

    /* URGENCY BAR */
    .urgency-bar { background: var(--green); color: #fff; text-align: center; padding: 0.65rem 1rem; font-size: 0.875rem; font-weight: 700; letter-spacing: 0.03em; }
    .urgency-bar span { opacity: 0.8; font-weight: 400; margin-left: 0.5rem; }

    /* NAV */
    nav { position: sticky; top: 0; z-index: 100; padding: 1.1rem 0; background: rgba(10,10,10,0.95); backdrop-filter: blur(16px); border-bottom: 1px solid var(--border); }
    .nav-inner { display: flex; align-items: center; justify-content: space-between; }
    .nav-brand { font-weight: 900; font-size: 1.3rem; letter-spacing: -0.01em; }
    .nav-brand .max { color: var(--green-light); }
    nav ul { display: flex; gap: 0.25rem; align-items: center; }
    nav ul li a { font-size: 0.875rem; color: var(--muted); padding: 0.45rem 0.75rem; border-radius: 6px; }
    nav ul li a:hover { color: var(--text); }
    .nav-cta { background: var(--green) !important; color: #fff !important; font-weight: 700 !important; padding: 0.55rem 1.2rem !important; border-radius: 8px !important; }
    .nav-cta:hover { background: #15803d !important; }

    /* HERO */
    .hero { padding: 5rem 0; position: relative; overflow: hidden; }
    .hero::before { content: ''; position: absolute; inset: 0; background: radial-gradient(ellipse 70% 60% at 50% 20%, rgba(22,163,74,0.15) 0%, transparent 60%); pointer-events: none; }
    .hero-inner { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center; position: relative; z-index: 1; }
    .hero-eyebrow { display: flex; align-items: center; gap: 0.5rem; margin-bottom: 1.25rem; }
    .hero-eyebrow span { font-size: 0.78rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: var(--green-light); }
    .hero-eyebrow::before { content: ''; width: 24px; height: 2px; background: var(--green-light); }
    .hero h1 { font-size: clamp(2rem, 4vw, 3.2rem); font-weight: 900; line-height: 1.1; letter-spacing: -0.03em; margin-bottom: 1.25rem; }
    .hero h1 em { font-style: normal; color: var(--green-light); }
    .hero-sub { font-size: 1.05rem; color: var(--muted); margin-bottom: 2rem; line-height: 1.7; }
    .btn { display: inline-flex; align-items: center; gap: 0.5rem; font-family: var(--font); font-weight: 700; font-size: 0.95rem; padding: 0.85rem 2rem; border-radius: var(--radius); cursor: pointer; border: none; transition: var(--transition); }
    .btn-green { background: var(--green); color: #fff; width: 100%; justify-content: center; }
    .btn-green:hover { background: #15803d; transform: translateY(-2px); box-shadow: 0 10px 30px rgba(22,163,74,0.4); }
    .btn-outline { background: transparent; color: var(--text); border: 1.5px solid var(--border); width: 100%; justify-content: center; }
    .btn-outline:hover { border-color: var(--green); color: var(--green-light); }
    .hero-btns { display: flex; flex-direction: column; gap: 0.75rem; margin-bottom: 1.5rem; }
    .hero-guarantee { display: flex; align-items: center; gap: 0.5rem; font-size: 0.8rem; color: var(--muted); justify-content: center; }
    .hero-guarantee::before { content: '🔒'; }
    .hero-visual { display: flex; flex-direction: column; gap: 1rem; }
    .product-hero { background: var(--card); border: 1px solid var(--border); border-radius: var(--radius); padding: 1.5rem; display: flex; gap: 1rem; align-items: center; transition: var(--transition); }
    .product-hero:hover { border-color: var(--green); }
    .ph-icon { width: 56px; height: 80px; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 1.75rem; flex-shrink: 0; }
    .ph-name { font-weight: 700; font-size: 1rem; margin-bottom: 0.2rem; }
    .ph-desc { font-size: 0.8rem; color: var(--muted); }
    .ph-price { font-size: 1.2rem; font-weight: 800; color: var(--green-light); margin-top: 0.35rem; }
    .ph-badge { font-size: 0.7rem; font-weight: 700; background: rgba(22,163,74,0.15); color: var(--green-light); border: 1px solid rgba(22,163,74,0.3); padding: 0.15rem 0.5rem; border-radius: 4px; display: inline-block; margin-top: 0.25rem; }

    /* SECTION */
    .section { padding: 5.5rem 0; }
    .section-dark { background: var(--bg2); }
    .section-header { text-align: center; margin-bottom: 3.5rem; }
    .section-tag { font-size: 0.78rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: var(--green-light); display: block; margin-bottom: 0.5rem; }
    .section-title { font-size: clamp(1.6rem, 3vw, 2.25rem); font-weight: 800; letter-spacing: -0.02em; margin-bottom: 0.75rem; }
    .section-sub { font-size: 1rem; color: var(--muted); max-width: 520px; margin: 0 auto; }

    /* PRODUCTS */
    .products-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; }
    .product-card { background: var(--card); border: 1px solid var(--border); border-radius: var(--radius); padding: 2rem 1.5rem; text-align: center; transition: var(--transition); position: relative; overflow: hidden; }
    .product-card.featured { border-color: var(--green); }
    .product-card.featured::before { content: 'MAIS VENDIDO'; position: absolute; top: 1rem; right: -2rem; background: var(--green); color: #fff; font-size: 0.65rem; font-weight: 700; padding: 0.3rem 3rem; transform: rotate(45deg); letter-spacing: 0.05em; }
    .product-card:hover { transform: translateY(-6px); box-shadow: 0 16px 50px rgba(0,0,0,0.5); }
    .product-icon { font-size: 3.5rem; margin-bottom: 1.25rem; }
    .product-name { font-size: 1.1rem; font-weight: 700; margin-bottom: 0.25rem; }
    .product-flavor { font-size: 0.8rem; color: var(--green-light); font-weight: 600; margin-bottom: 0.75rem; }
    .product-desc { font-size: 0.875rem; color: var(--muted); line-height: 1.6; margin-bottom: 1.5rem; }
    .product-price-old { font-size: 0.875rem; color: var(--muted); text-decoration: line-through; }
    .product-price { font-size: 2rem; font-weight: 900; color: var(--green-light); line-height: 1.1; }
    .product-parcel { font-size: 0.8rem; color: var(--muted); margin-bottom: 1.25rem; }
    .btn-buy { background: var(--green); color: #fff; font-weight: 700; padding: 0.75rem 1.5rem; border-radius: var(--radius); font-family: var(--font); font-size: 0.9rem; cursor: pointer; border: none; width: 100%; transition: var(--transition); display: block; text-align: center; }
    .btn-buy:hover { background: #15803d; transform: translateY(-2px); }

    /* BENEFITS */
    .benefits-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; }
    .benefit-item { display: flex; align-items: flex-start; gap: 1rem; }
    .benefit-check { width: 24px; height: 24px; border-radius: 50%; background: var(--green); display: flex; align-items: center; justify-content: center; flex-shrink: 0; margin-top: 2px; }
    .benefit-check svg { width: 14px; height: 14px; fill: none; stroke: #fff; stroke-width: 2.5; }
    .benefit-title { font-weight: 700; font-size: 0.95rem; margin-bottom: 0.25rem; }
    .benefit-desc { font-size: 0.85rem; color: var(--muted); line-height: 1.6; }

    /* TESTIMONIALS */
    .tests-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; }
    .test-card { background: var(--card); border: 1px solid var(--border); border-radius: var(--radius); padding: 1.5rem; }
    .test-avatar { width: 48px; height: 48px; border-radius: 50%; background: linear-gradient(135deg, var(--green), #15803d); display: flex; align-items: center; justify-content: center; font-weight: 700; color: #fff; margin-bottom: 1rem; }
    .test-result { font-size: 1.25rem; font-weight: 800; color: var(--green-light); margin-bottom: 0.25rem; }
    .test-name { font-weight: 700; font-size: 0.9rem; margin-bottom: 0.1rem; }
    .test-meta { font-size: 0.78rem; color: var(--muted); margin-bottom: 0.75rem; }
    .test-text { font-size: 0.875rem; color: var(--muted); line-height: 1.65; font-style: italic; }

    /* CTA FINAL */
    .cta-section { background: linear-gradient(135deg, #0a0a0a 0%, #0f1a10 100%); text-align: center; padding: 5.5rem 0; position: relative; overflow: hidden; }
    .cta-section::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px; background: linear-gradient(90deg, transparent, var(--green), transparent); }
    .cta-urgency { display: inline-block; background: rgba(22,163,74,0.15); border: 1px solid rgba(22,163,74,0.3); color: var(--green-light); font-size: 0.8rem; font-weight: 700; padding: 0.4rem 1rem; border-radius: 100px; margin-bottom: 1.25rem; letter-spacing: 0.04em; }
    .cta-section h2 { font-size: clamp(1.75rem, 3.5vw, 2.5rem); font-weight: 900; letter-spacing: -0.02em; margin-bottom: 1rem; }
    .cta-section p { color: var(--muted); font-size: 1rem; margin-bottom: 2.5rem; }
    .btn-cta-big { background: var(--green); color: #fff; font-weight: 700; font-size: 1.05rem; padding: 1rem 2.5rem; border-radius: var(--radius); border: none; cursor: pointer; display: inline-flex; align-items: center; gap: 0.6rem; font-family: var(--font); transition: var(--transition); }
    .btn-cta-big:hover { background: #15803d; transform: translateY(-2px); box-shadow: 0 10px 30px rgba(22,163,74,0.4); }
    .cta-trust { display: flex; align-items: center; justify-content: center; gap: 2rem; margin-top: 1.5rem; flex-wrap: wrap; }
    .cta-trust-item { font-size: 0.8rem; color: var(--muted); display: flex; align-items: center; gap: 0.4rem; }

    /* FOOTER */
    footer { background: #050505; border-top: 1px solid var(--border); padding: 2.5rem 0; }
    .footer-inner { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem; }
    .footer-brand { font-weight: 900; font-size: 0.95rem; color: var(--muted); }
    .footer-brand .max { color: var(--green-light); }
    .footer-copy { font-size: 0.8rem; color: var(--muted); }
    .footer-back { font-size: 0.875rem; color: var(--green-light); border: 1px solid rgba(22,163,74,0.3); padding: 0.4rem 1rem; border-radius: 6px; }
    .footer-back:hover { background: var(--green-dim); }

    @media (max-width: 900px) {
      .hero-inner, .benefits-grid, .tests-grid { grid-template-columns: 1fr; }
      .products-grid { grid-template-columns: 1fr; max-width: 400px; margin: 0 auto; }
      .hero-visual { display: none; }
    }
    @media (max-width: 600px) {
      nav ul { display: none; }
    }
  </style>
</head>
<body>

  <div class="urgency-bar">
    🔥 OFERTA RELÂMPAGO — Frete grátis em pedidos acima de R$ 149,90 <span>Válido hoje!</span>
  </div>

  <nav>
    <div class="container">
      <div class="nav-inner">
        <div class="nav-brand">FIT<span class="max">MAX</span> PRO</div>
        <ul>
          <li><a href="#produtos">Produtos</a></li>
          <li><a href="#beneficios">Benefícios</a></li>
          <li><a href="https://wa.me/5511934900204?text=Quero%20comprar%20FitMax%20Pro!" class="nav-cta" target="_blank" rel="noopener">Comprar agora</a></li>
        </ul>
      </div>
    </div>
  </nav>

  <section class="hero">
    <div class="container">
      <div class="hero-inner">
        <div>
          <div class="hero-eyebrow"><span>Suplementação premium</span></div>
          <h1>Suplementos que entregam <em>resultado de verdade</em></h1>
          <p class="hero-sub">Fórmulas desenvolvidas com os melhores ingredientes do mercado para quem leva o treino a sério. Sem desculpas, só resultado.</p>
          <div class="hero-btns">
            <a href="https://wa.me/5511934900204?text=Quero%20comprar%20FitMax%20Pro!" class="btn btn-green" target="_blank" rel="noopener">
              🛒 Quero meu suplemento agora
            </a>
            <a href="#produtos" class="btn btn-outline">Ver produtos</a>
          </div>
          <div class="hero-guarantee">Pagamento seguro • Entrega em 3-5 dias • Satisfação garantida</div>
        </div>
        <div class="hero-visual">
          <div class="product-hero">
            <div class="ph-icon" style="background: linear-gradient(135deg, #16a34a, #15803d);">🏋️</div>
            <div>
              <div class="ph-name">Whey Protein Max</div>
              <div class="ph-desc">25g proteína por dose</div>
              <div class="ph-price">R$ 189,90</div>
              <div class="ph-badge">⚡ FRETE GRÁTIS</div>
            </div>
          </div>
          <div class="product-hero">
            <div class="ph-icon" style="background: linear-gradient(135deg, #0891b2, #06b6d4);">⚡</div>
            <div>
              <div class="ph-name">Creatina Ultra</div>
              <div class="ph-desc">Monohidratada pura</div>
              <div class="ph-price">R$ 79,90</div>
              <div class="ph-badge">🔥 MAIS VENDIDO</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="section" id="produtos">
    <div class="container">
      <div class="section-header">
        <span class="section-tag">Produtos</span>
        <h2 class="section-title">Escolha seu suplemento</h2>
        <p class="section-sub">Produtos com qualidade verificada, fórmulas comprovadas e o menor preço do mercado</p>
      </div>
      <div class="products-grid">
        <div class="product-card">
          <div class="product-icon">🥤</div>
          <div class="product-name">Whey Protein Max</div>
          <div class="product-flavor">Chocolate / Baunilha / Morango</div>
          <div class="product-desc">25g de proteína por dose, com aminoácidos essenciais e baixo teor de gordura. Ideal para ganho de massa magra.</div>
          <div class="product-price-old">R$ 229,90</div>
          <div class="product-price">R$ 189,90</div>
          <div class="product-parcel">ou 12x de R$ 18,23</div>
          <a href="https://wa.me/5511934900204?text=Quero%20comprar%20Whey%20Protein%20Max!" class="btn-buy" target="_blank" rel="noopener">Comprar agora</a>
        </div>
        <div class="product-card featured">
          <div class="product-icon">⚡</div>
          <div class="product-name">Creatina Ultra</div>
          <div class="product-flavor">Sem sabor — 300g</div>
          <div class="product-desc">Creatina monohidratada pura, micronizada para máxima absorção. Aumenta força, potência e massa muscular.</div>
          <div class="product-price-old">R$ 99,90</div>
          <div class="product-price">R$ 79,90</div>
          <div class="product-parcel">ou 6x de R$ 14,39</div>
          <a href="https://wa.me/5511934900204?text=Quero%20comprar%20Creatina%20Ultra!" class="btn-buy" target="_blank" rel="noopener">Comprar agora</a>
        </div>
        <div class="product-card">
          <div class="product-icon">🔥</div>
          <div class="product-name">Termogênico Fire</div>
          <div class="product-flavor">60 cápsulas</div>
          <div class="product-desc">Acelera o metabolismo e potencializa a queima de gordura, com cafeína e extrato de chá verde de alta concentração.</div>
          <div class="product-price-old">R$ 129,90</div>
          <div class="product-price">R$ 99,90</div>
          <div class="product-parcel">ou 6x de R$ 17,99</div>
          <a href="https://wa.me/5511934900204?text=Quero%20comprar%20Termogênico%20Fire!" class="btn-buy" target="_blank" rel="noopener">Comprar agora</a>
        </div>
      </div>
    </div>
  </section>

  <section class="section section-dark" id="beneficios">
    <div class="container">
      <div class="section-header">
        <span class="section-tag">Por que FitMax?</span>
        <h2 class="section-title">Diferenciais que fazem a diferença</h2>
      </div>
      <div class="benefits-grid">
        <div class="benefit-item">
          <div class="benefit-check"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg></div>
          <div>
            <div class="benefit-title">Ingredientes certificados</div>
            <div class="benefit-desc">Matérias-primas testadas em laboratório e aprovadas pela ANVISA para máxima segurança.</div>
          </div>
        </div>
        <div class="benefit-item">
          <div class="benefit-check"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg></div>
          <div>
            <div class="benefit-title">Fórmulas clinicamente testadas</div>
            <div class="benefit-desc">Cada produto foi desenvolvido com base em estudos científicos para garantir eficácia real.</div>
          </div>
        </div>
        <div class="benefit-item">
          <div class="benefit-check"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg></div>
          <div>
            <div class="benefit-title">Entrega rápida</div>
            <div class="benefit-desc">Estoque no Brasil, entrega em até 5 dias úteis para todo o território nacional.</div>
          </div>
        </div>
        <div class="benefit-item">
          <div class="benefit-check"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg></div>
          <div>
            <div class="benefit-title">Garantia de 30 dias</div>
            <div class="benefit-desc">Não gostou? Devolvemos seu dinheiro sem perguntas. Sua satisfação é nossa prioridade.</div>
          </div>
        </div>
        <div class="benefit-item">
          <div class="benefit-check"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg></div>
          <div>
            <div class="benefit-title">Suporte nutricional</div>
            <div class="benefit-desc">Time de nutricionistas disponível para orientar seu uso e maximizar seus resultados.</div>
          </div>
        </div>
        <div class="benefit-item">
          <div class="benefit-check"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg></div>
          <div>
            <div class="benefit-title">Melhor custo-benefício</div>
            <div class="benefit-desc">Qualidade premium a um preço justo. Sem intermediários, direto do fabricante para você.</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="section-header">
        <span class="section-tag">Resultados reais</span>
        <h2 class="section-title">O que nossos clientes dizem</h2>
      </div>
      <div class="tests-grid">
        <div class="test-card">
          <div class="test-avatar">RA</div>
          <div class="test-result">+8kg de massa em 3 meses</div>
          <div class="test-name">Rafael A.</div>
          <div class="test-meta">Treino há 2 anos • Whey Protein Max</div>
          <div class="test-text">"Nunca vi resultado tão rápido. Comecei a usar o Whey da FitMax e em 3 meses atingi meu objetivo de ganhar massa magra de verdade."</div>
        </div>
        <div class="test-card">
          <div class="test-avatar">JS</div>
          <div class="test-result">-12kg em 4 meses</div>
          <div class="test-name">Juliana S.</div>
          <div class="test-meta">Foco em emagrecimento • Termogênico Fire</div>
          <div class="test-text">"O termogênico aliado com minha dieta foi um divisor de águas. Me sinto com muito mais energia nos treinos e o resultado apareceu rápido."</div>
        </div>
        <div class="test-card">
          <div class="test-avatar">MC</div>
          <div class="test-result">PR novo toda semana</div>
          <div class="test-name">Marcos C.</div>
          <div class="test-meta">Powerlifting • Creatina Ultra</div>
          <div class="test-text">"Com a creatina da FitMax minha força no agachamento subiu 15kg em 2 meses. Produto puro, sem aquela retenção excessiva de outras marcas."</div>
        </div>
      </div>
    </div>
  </section>

  <section class="cta-section">
    <div class="container">
      <div class="cta-urgency">🚚 FRETE GRÁTIS HOJE — Só por tempo limitado!</div>
      <h2>Pare de esperar pelo resultado perfeito.</h2>
      <p>Com a FitMax Pro, você tem os suplementos certos para transformar seu treino. Comece agora.</p>
      <a href="https://wa.me/5511934900204?text=Quero%20comprar%20FitMax%20Pro%20com%20frete%20grátis!" class="btn-cta-big" target="_blank" rel="noopener">
        🛒 Garantir meu pedido com frete grátis
      </a>
      <div class="cta-trust">
        <div class="cta-trust-item">🔒 Pagamento seguro</div>
        <div class="cta-trust-item">📦 Entrega garantida</div>
        <div class="cta-trust-item">↩️ 30 dias para devolver</div>
        <div class="cta-trust-item">⭐ 4.9/5 de avaliação</div>
      </div>
    </div>
  </section>

  <footer>
    <div class="container">
      <div class="footer-inner">
        <div class="footer-brand">FIT<span class="max">MAX</span> PRO</div>
        <div class="footer-copy">CNPJ: 45.678.901/0001-23 — São Paulo, SP</div>
        <a href="/" class="footer-back">← Criado pela VorinWeb</a>
      </div>
    </div>
  </footer>

</body>
</html>

'@ | Set-Content -Path "projetos\fitmax\index.html" -Encoding UTF8
Write-Host "Written: projetos/fitmax/index.html" -ForegroundColor Green

@'
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Sabor Carioca — A tradição carioca no seu prato</title>
  <meta name="description" content="Restaurante tradicional carioca com cardápio autêntico, ambiente acolhedor e reservas online. Venha saborear o Rio de Janeiro." />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Playfair+Display:ital,wght@0,600;0,700;1,600&display=swap" rel="stylesheet" />
  <style>
    *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
    :root {
      --bg: #1a0f07;
      --bg2: #120b05;
      --bg3: #241508;
      --orange: #f59e0b;
      --orange-light: #fbbf24;
      --orange-dim: rgba(245,158,11,0.12);
      --red: #dc2626;
      --text: #fef3e2;
      --muted: #b08860;
      --border: #2d1a08;
      --card: #1f1009;
      --font: 'Inter', sans-serif;
      --serif: 'Playfair Display', Georgia, serif;
      --radius: 10px;
      --transition: 0.3s cubic-bezier(0.4,0,0.2,1);
    }
    html { scroll-behavior: smooth; }
    body { font-family: var(--font); background: var(--bg); color: var(--text); line-height: 1.6; overflow-x: hidden; -webkit-font-smoothing: antialiased; }
    a { text-decoration: none; color: inherit; transition: var(--transition); }
    ul { list-style: none; }
    .container { max-width: 1100px; margin: 0 auto; padding: 0 1.5rem; }

    /* NAV */
    nav { position: fixed; top: 0; left: 0; right: 0; z-index: 100; padding: 1.1rem 0; background: rgba(26,15,7,0.94); backdrop-filter: blur(16px); border-bottom: 1px solid var(--border); }
    .nav-inner { display: flex; align-items: center; justify-content: space-between; }
    .nav-brand { font-family: var(--serif); font-size: 1.2rem; font-weight: 700; color: var(--orange); }
    .nav-brand span { color: var(--muted); font-family: var(--font); font-size: 0.72rem; display: block; font-weight: 400; letter-spacing: 0.06em; text-transform: uppercase; margin-top: -2px; }
    nav ul { display: flex; gap: 0.25rem; align-items: center; }
    nav ul li a { font-size: 0.875rem; color: var(--muted); padding: 0.45rem 0.75rem; border-radius: 6px; }
    nav ul li a:hover { color: var(--text); }
    .nav-reserva { background: var(--orange) !important; color: #1a0f07 !important; font-weight: 700 !important; padding: 0.55rem 1.2rem !important; border-radius: 8px !important; }
    .nav-reserva:hover { background: var(--orange-light) !important; }

    /* HERO */
    .hero { min-height: 100vh; display: flex; align-items: center; padding: 7rem 0 4rem; position: relative; overflow: hidden; }
    .hero-bg { position: absolute; inset: 0; background: linear-gradient(160deg, #0a0600 0%, #1a0f07 40%, #241508 100%); }
    .hero-overlay { position: absolute; inset: 0; background: radial-gradient(ellipse 80% 70% at 50% 30%, rgba(245,158,11,0.1) 0%, transparent 70%); pointer-events: none; }
    .hero-inner { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center; position: relative; z-index: 1; }
    .hero-tag { display: flex; align-items: center; gap: 0.5rem; margin-bottom: 1.5rem; }
    .hero-tag span { font-size: 0.78rem; letter-spacing: 0.1em; text-transform: uppercase; font-weight: 700; color: var(--orange); }
    .hero-tag::before { content: ''; width: 24px; height: 2px; background: var(--orange); }
    .hero h1 { font-family: var(--serif); font-size: clamp(2rem, 4vw, 3.2rem); font-weight: 700; line-height: 1.2; margin-bottom: 1.25rem; }
    .hero h1 em { font-style: italic; color: var(--orange); }
    .hero p { font-size: 1rem; color: var(--muted); margin-bottom: 2rem; line-height: 1.75; max-width: 450px; }
    .hero-btns { display: flex; gap: 1rem; flex-wrap: wrap; }
    .btn { display: inline-flex; align-items: center; gap: 0.5rem; font-family: var(--font); font-weight: 600; font-size: 0.95rem; padding: 0.8rem 1.75rem; border-radius: var(--radius); cursor: pointer; border: none; transition: var(--transition); }
    .btn-orange { background: var(--orange); color: #1a0f07; }
    .btn-orange:hover { background: var(--orange-light); transform: translateY(-2px); box-shadow: 0 8px 24px rgba(245,158,11,0.3); }
    .btn-outline { background: transparent; color: var(--text); border: 1.5px solid var(--border); }
    .btn-outline:hover { border-color: var(--orange); color: var(--orange); }
    .hero-visual { background: var(--card); border: 1px solid var(--border); border-radius: 16px; overflow: hidden; }
    .hv-top { background: linear-gradient(135deg, #451a03, #1a0f07); padding: 2.5rem; text-align: center; border-bottom: 1px solid var(--border); }
    .hv-emoji { font-size: 4rem; display: block; margin-bottom: 0.5rem; }
    .hv-name { font-family: var(--serif); font-size: 1.25rem; color: var(--orange); }
    .hv-sub { font-size: 0.85rem; color: var(--muted); }
    .hv-items { padding: 1.5rem; display: flex; flex-direction: column; gap: 1rem; }
    .hv-item { display: flex; align-items: center; justify-content: space-between; padding-bottom: 0.75rem; border-bottom: 1px solid var(--border); }
    .hv-item:last-child { border-bottom: none; padding-bottom: 0; }
    .hv-item-name { font-size: 0.9rem; font-weight: 600; }
    .hv-item-desc { font-size: 0.78rem; color: var(--muted); }
    .hv-item-price { font-weight: 700; color: var(--orange); font-size: 0.95rem; flex-shrink: 0; }

    /* SECTION */
    .section { padding: 5.5rem 0; }
    .section-dark { background: var(--bg2); }
    .section-header { text-align: center; margin-bottom: 3.5rem; }
    .section-tag { font-size: 0.78rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: var(--orange); display: block; margin-bottom: 0.5rem; }
    .section-title { font-family: var(--serif); font-size: clamp(1.6rem, 3vw, 2.25rem); font-weight: 700; margin-bottom: 0.75rem; }
    .section-sub { font-size: 1rem; color: var(--muted); max-width: 520px; margin: 0 auto; }

    /* MENU */
    .menu-tabs { display: flex; justify-content: center; gap: 0.5rem; margin-bottom: 3rem; flex-wrap: wrap; }
    .menu-tab { padding: 0.5rem 1.25rem; border-radius: 100px; font-size: 0.875rem; font-weight: 600; cursor: pointer; transition: var(--transition); border: 1.5px solid var(--border); color: var(--muted); background: transparent; font-family: var(--font); }
    .menu-tab.active, .menu-tab:hover { border-color: var(--orange); color: var(--orange); background: var(--orange-dim); }
    .menu-category { margin-bottom: 3.5rem; }
    .menu-cat-title { font-family: var(--serif); font-size: 1.35rem; font-weight: 600; color: var(--orange); margin-bottom: 1.5rem; padding-bottom: 0.75rem; border-bottom: 1px solid var(--border); display: flex; align-items: center; gap: 0.5rem; }
    .menu-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.25rem; }
    .menu-card { background: var(--card); border: 1px solid var(--border); border-radius: var(--radius); padding: 1.5rem; transition: var(--transition); }
    .menu-card:hover { border-color: rgba(245,158,11,0.3); transform: translateY(-3px); }
    .mc-icon { font-size: 2rem; margin-bottom: 0.75rem; }
    .mc-name { font-weight: 700; font-size: 0.975rem; margin-bottom: 0.25rem; }
    .mc-desc { font-size: 0.85rem; color: var(--muted); line-height: 1.55; margin-bottom: 0.75rem; }
    .mc-price { font-weight: 700; color: var(--orange); font-size: 1rem; }

    /* ABOUT */
    .about-inner { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center; }
    .about-img { background: linear-gradient(135deg, #2d1a08, #451a03); border-radius: 16px; padding: 3rem; text-align: center; border: 1px solid var(--border); }
    .about-img-emoji { font-size: 5rem; display: block; margin-bottom: 1rem; }
    .about-img-caption { font-family: var(--serif); font-style: italic; font-size: 1rem; color: var(--orange); }
    .about-content span { font-size: 0.78rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: var(--orange); display: block; margin-bottom: 0.5rem; }
    .about-content h2 { font-family: var(--serif); font-size: clamp(1.5rem, 2.5vw, 2rem); font-weight: 700; margin-bottom: 1rem; }
    .about-content p { color: var(--muted); line-height: 1.75; margin-bottom: 1rem; font-size: 0.975rem; }

    /* HOURS */
    .info-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; }
    .info-card { background: var(--card); border: 1px solid var(--border); border-radius: var(--radius); padding: 2rem; }
    .info-card-title { display: flex; align-items: center; gap: 0.6rem; font-weight: 700; font-size: 1rem; margin-bottom: 1.25rem; color: var(--orange); }
    .info-row { display: flex; justify-content: space-between; align-items: center; padding: 0.6rem 0; border-bottom: 1px solid var(--border); font-size: 0.875rem; }
    .info-row:last-child { border-bottom: none; }
    .info-day { color: var(--muted); }
    .info-time { font-weight: 600; }
    .info-closed { color: #ef4444; }
    .info-address { font-size: 0.9rem; color: var(--muted); line-height: 1.7; }
    .info-address strong { color: var(--text); display: block; margin-bottom: 0.25rem; }

    /* CTA */
    .cta-section { background: linear-gradient(160deg, #0a0600 0%, #1a0f07 100%); text-align: center; padding: 5.5rem 0; position: relative; }
    .cta-section::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px; background: linear-gradient(90deg, transparent, var(--orange), transparent); }
    .cta-section h2 { font-family: var(--serif); font-size: clamp(1.75rem, 3.5vw, 2.5rem); font-weight: 700; margin-bottom: 1rem; }
    .cta-section p { color: var(--muted); font-size: 1rem; margin-bottom: 2.5rem; }

    /* FOOTER */
    footer { background: var(--bg2); border-top: 1px solid var(--border); padding: 2.5rem 0; }
    .footer-inner { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem; }
    .footer-brand { font-family: var(--serif); font-weight: 600; color: var(--orange); font-size: 0.95rem; }
    .footer-copy { font-size: 0.8rem; color: var(--muted); }
    .footer-back { font-size: 0.875rem; color: var(--orange); border: 1px solid rgba(245,158,11,0.3); padding: 0.4rem 1rem; border-radius: 6px; }
    .footer-back:hover { background: var(--orange-dim); }

    @media (max-width: 900px) {
      .hero-inner, .about-inner, .info-grid { grid-template-columns: 1fr; }
      .hero-visual { display: none; }
      .menu-grid { grid-template-columns: repeat(2, 1fr); }
    }
    @media (max-width: 600px) {
      .menu-grid { grid-template-columns: 1fr; }
      nav ul { display: none; }
    }
  </style>
</head>
<body>

  <nav>
    <div class="container">
      <div class="nav-inner">
        <div class="nav-brand">
          Sabor Carioca
          <span>Restaurante Tradicional</span>
        </div>
        <ul>
          <li><a href="#cardapio">Cardápio</a></li>
          <li><a href="#sobre">Nossa história</a></li>
          <li><a href="https://wa.me/5511934900204?text=Olá,%20gostaria%20de%20reservar%20uma%20mesa%20no%20Sabor%20Carioca!" class="nav-reserva" target="_blank" rel="noopener">Reservar mesa</a></li>
        </ul>
      </div>
    </div>
  </nav>

  <section class="hero">
    <div class="hero-bg"></div>
    <div class="hero-overlay"></div>
    <div class="container">
      <div class="hero-inner">
        <div>
          <div class="hero-tag"><span>Desde 1987</span></div>
          <h1>A tradição carioca <em>no seu prato</em></h1>
          <p>Sabores autênticos do Rio de Janeiro preparados com receitas de família, ingredientes frescos e o carinho de quem ama a boa cozinha brasileira.</p>
          <div class="hero-btns">
            <a href="#cardapio" class="btn btn-orange">Ver cardápio</a>
            <a href="https://wa.me/5511934900204?text=Olá,%20gostaria%20de%20reservar%20uma%20mesa%20no%20Sabor%20Carioca!" class="btn btn-outline" target="_blank" rel="noopener">Reservar mesa</a>
          </div>
        </div>
        <div class="hero-visual">
          <div class="hv-top">
            <span class="hv-emoji">🍲</span>
            <div class="hv-name">Prato do Dia</div>
            <div class="hv-sub">Feijoada Completa — Sábados</div>
          </div>
          <div class="hv-items">
            <div class="hv-item">
              <div>
                <div class="hv-item-name">Picanha na Brasa</div>
                <div class="hv-item-desc">com arroz, farofa e vinagrete</div>
              </div>
              <div class="hv-item-price">R$ 89,90</div>
            </div>
            <div class="hv-item">
              <div>
                <div class="hv-item-name">Feijoada Completa</div>
                <div class="hv-item-desc">porção para 2 pessoas</div>
              </div>
              <div class="hv-item-price">R$ 75,00</div>
            </div>
            <div class="hv-item">
              <div>
                <div class="hv-item-name">Camarão na Moranga</div>
                <div class="hv-item-desc">com creme de coco</div>
              </div>
              <div class="hv-item-price">R$ 69,90</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="section section-dark" id="cardapio">
    <div class="container">
      <div class="section-header">
        <span class="section-tag">Cardápio</span>
        <h2 class="section-title">Nossa culinária</h2>
        <p class="section-sub">Pratos preparados com ingredientes selecionados e receitas passadas de geração em geração</p>
      </div>

      <div class="menu-category">
        <div class="menu-cat-title">🥗 Entradas</div>
        <div class="menu-grid">
          <div class="menu-card">
            <div class="mc-icon">🥗</div>
            <div class="mc-name">Salada Carioca</div>
            <div class="mc-desc">Mix de folhas frescas com manga, castanha-do-pará, palmito e molho de maracujá.</div>
            <div class="mc-price">R$ 32,00</div>
          </div>
          <div class="menu-card">
            <div class="mc-icon">🍢</div>
            <div class="mc-name">Bolinho de Bacalhau</div>
            <div class="mc-desc">Porção com 8 unidades, servidos com maionese de ervas e azeitonas pretas.</div>
            <div class="mc-price">R$ 38,90</div>
          </div>
          <div class="menu-card">
            <div class="mc-icon">🐟</div>
            <div class="mc-name">Ceviche Carioca</div>
            <div class="mc-desc">Peixe branco marinado no limão taiti com pimenta dedo-de-moça, coentro e milho.</div>
            <div class="mc-price">R$ 45,00</div>
          </div>
        </div>
      </div>

      <div class="menu-category">
        <div class="menu-cat-title">🍖 Pratos Principais</div>
        <div class="menu-grid">
          <div class="menu-card">
            <div class="mc-icon">🥩</div>
            <div class="mc-name">Picanha na Brasa</div>
            <div class="mc-desc">350g de picanha grelhada na brasa, acompanhada de arroz, farofa e vinagrete da casa.</div>
            <div class="mc-price">R$ 89,90</div>
          </div>
          <div class="menu-card">
            <div class="mc-icon">🍲</div>
            <div class="mc-name">Feijoada Completa</div>
            <div class="mc-desc">Feijoada tradicional com todos os cortes, arroz, couve refogada, farofa e laranja. Serve 2.</div>
            <div class="mc-price">R$ 75,00</div>
          </div>
          <div class="menu-card">
            <div class="mc-icon">🦐</div>
            <div class="mc-name">Camarão na Moranga</div>
            <div class="mc-desc">Camarões salteados com alho, servidos dentro da moranga com creme de queijo e coco.</div>
            <div class="mc-price">R$ 69,90</div>
          </div>
        </div>
      </div>

      <div class="menu-category">
        <div class="menu-cat-title">🍮 Sobremesas</div>
        <div class="menu-grid">
          <div class="menu-card">
            <div class="mc-icon">🍮</div>
            <div class="mc-name">Pudim de Leite</div>
            <div class="mc-desc">Clássico pudim de leite condensado com calda de caramelo dourado. Receita de avó.</div>
            <div class="mc-price">R$ 18,00</div>
          </div>
          <div class="menu-card">
            <div class="mc-icon">🍰</div>
            <div class="mc-name">Mousse de Maracujá</div>
            <div class="mc-desc">Mousse cremoso de maracujá com calda ácida e raspas de limão. Refrescante e delicioso.</div>
            <div class="mc-price">R$ 16,00</div>
          </div>
          <div class="menu-card">
            <div class="mc-icon">🍫</div>
            <div class="mc-name">Brigadeiro Gourmet</div>
            <div class="mc-desc">3 brigadeiros artesanais de chocolate belga 70%, servidos com sorvete de creme.</div>
            <div class="mc-price">R$ 22,00</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="section" id="sobre">
    <div class="container">
      <div class="about-inner">
        <div class="about-img">
          <span class="about-img-emoji">👨‍🍳</span>
          <div class="about-img-caption">"Cozinhar é um ato de amor"<br>— Dona Maria, fundadora</div>
        </div>
        <div class="about-content">
          <span>Nossa história</span>
          <h2>Mais de 35 anos alimentando corações cariocas</h2>
          <p>O Sabor Carioca nasceu em 1987 quando Dona Maria trouxe da Zona Norte do Rio as receitas da família para um pequeno boteco no Leblon. O que era um humilde ponto de feijoada tornou-se um dos restaurantes mais queridos da cidade.</p>
          <p>Hoje, sob o comando do chef Eduardo — filho de Dona Maria — o restaurante mantém as receitas originais com o cuidado de sempre, mas com um toque contemporâneo que conquistou até os paladares mais exigentes.</p>
          <p>Cada prato conta uma história. Venha fazer parte da nossa.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="section section-dark">
    <div class="container">
      <div class="section-header">
        <span class="section-tag">Informações</span>
        <h2 class="section-title">Horários &amp; Localização</h2>
      </div>
      <div class="info-grid">
        <div class="info-card">
          <div class="info-card-title">🕐 Horário de funcionamento</div>
          <div class="info-row"><span class="info-day">Segunda a Quinta</span><span class="info-time">12h – 23h</span></div>
          <div class="info-row"><span class="info-day">Sexta e Sábado</span><span class="info-time">12h – 00h</span></div>
          <div class="info-row"><span class="info-day">Domingo</span><span class="info-time">12h – 22h</span></div>
          <div class="info-row"><span class="info-day">Feriados</span><span class="info-time">12h – 20h</span></div>
        </div>
        <div class="info-card">
          <div class="info-card-title">📍 Onde estamos</div>
          <div class="info-address">
            <strong>Sabor Carioca — Restaurante</strong>
            Rua do Leblon, 428<br>
            Leblon — Rio de Janeiro, RJ<br>
            CEP: 22430-060<br><br>
            📞 (21) 98765-4321<br>
            📧 contato@saborcarioca.com.br<br><br>
            <em style="color: var(--orange); font-size: 0.85rem;">Estacionamento conveniado ao lado</em>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="cta-section">
    <div class="container">
      <h2>Reserve sua mesa agora</h2>
      <p>Garanta seu lugar e venha saborear a verdadeira culinária carioca. Aceitamos reservas para grupos a partir de 4 pessoas.</p>
      <a href="https://wa.me/5511934900204?text=Olá,%20gostaria%20de%20reservar%20uma%20mesa%20no%20Sabor%20Carioca!" class="btn btn-orange" target="_blank" rel="noopener">
        📅 Reservar uma mesa
      </a>
    </div>
  </section>

  <footer>
    <div class="container">
      <div class="footer-inner">
        <div class="footer-brand">Sabor Carioca</div>
        <div class="footer-copy">Leblon, Rio de Janeiro — Desde 1987</div>
        <a href="/" class="footer-back">← Criado pela VorinWeb</a>
      </div>
    </div>
  </footer>

</body>
</html>

'@ | Set-Content -Path "projetos\sabor-carioca\index.html" -Encoding UTF8
Write-Host "Written: projetos/sabor-carioca/index.html" -ForegroundColor Green

@'
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Lumina Estética — Sua beleza, nossa especialidade</title>
  <meta name="description" content="Clínica estética premium com tratamentos avançados para pele, corpo e bem-estar. Agende sua avaliação gratuita." />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:ital,wght@0,600;0,700;1,600&display=swap" rel="stylesheet" />
  <style>
    *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
    :root {
      --bg: #faf9f7;
      --bg2: #f5f0eb;
      --bg3: #fff;
      --rose: #e11d48;
      --rose-light: #f43f5e;
      --rose-dim: rgba(225,29,72,0.08);
      --rose-medium: rgba(225,29,72,0.15);
      --blush: #fda4af;
      --text: #1c1917;
      --muted: #78716c;
      --border: #e7e0d8;
      --card: #ffffff;
      --font: 'Inter', sans-serif;
      --serif: 'Playfair Display', Georgia, serif;
      --radius: 14px;
      --shadow-sm: 0 2px 8px rgba(0,0,0,0.06);
      --shadow: 0 4px 20px rgba(0,0,0,0.1);
      --shadow-lg: 0 8px 40px rgba(0,0,0,0.14);
      --transition: 0.3s cubic-bezier(0.4,0,0.2,1);
    }
    html { scroll-behavior: smooth; }
    body { font-family: var(--font); background: var(--bg); color: var(--text); line-height: 1.6; overflow-x: hidden; -webkit-font-smoothing: antialiased; }
    a { text-decoration: none; color: inherit; transition: var(--transition); }
    ul { list-style: none; }
    .container { max-width: 1100px; margin: 0 auto; padding: 0 1.5rem; }

    /* NAV */
    nav { position: fixed; top: 0; left: 0; right: 0; z-index: 100; padding: 1.1rem 0; background: rgba(250,249,247,0.94); backdrop-filter: blur(16px); border-bottom: 1px solid var(--border); }
    .nav-inner { display: flex; align-items: center; justify-content: space-between; }
    .nav-brand { display: flex; align-items: center; gap: 0.6rem; }
    .brand-dot { width: 32px; height: 32px; background: linear-gradient(135deg, var(--rose), #fb7185); border-radius: 50%; display: flex; align-items: center; justify-content: center; }
    .brand-dot::after { content: '✦'; color: #fff; font-size: 0.75rem; }
    .brand-name { font-family: var(--serif); font-size: 1.2rem; font-weight: 700; color: var(--text); }
    .brand-name span { color: var(--rose); }
    nav ul { display: flex; gap: 0.25rem; align-items: center; }
    nav ul li a { font-size: 0.875rem; color: var(--muted); padding: 0.45rem 0.75rem; border-radius: 6px; }
    nav ul li a:hover { color: var(--text); background: var(--bg2); }
    .nav-cta { background: var(--rose) !important; color: #fff !important; font-weight: 600 !important; padding: 0.55rem 1.2rem !important; border-radius: 8px !important; }
    .nav-cta:hover { background: var(--rose-light) !important; }

    /* HERO */
    .hero { min-height: 100vh; display: flex; align-items: center; padding: 8rem 0 5rem; position: relative; overflow: hidden; }
    .hero-blob1 { position: absolute; top: -100px; right: -100px; width: 500px; height: 500px; background: radial-gradient(circle, rgba(225,29,72,0.08), transparent 70%); pointer-events: none; }
    .hero-blob2 { position: absolute; bottom: -80px; left: -80px; width: 400px; height: 400px; background: radial-gradient(circle, rgba(253,164,175,0.12), transparent 70%); pointer-events: none; }
    .hero-inner { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center; position: relative; z-index: 1; }
    .hero-eyebrow { display: flex; align-items: center; gap: 0.6rem; margin-bottom: 1.5rem; }
    .eyebrow-line { width: 24px; height: 2px; background: var(--rose); }
    .eyebrow-text { font-size: 0.78rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: var(--rose); }
    .hero h1 { font-family: var(--serif); font-size: clamp(2rem, 4vw, 3.2rem); font-weight: 700; line-height: 1.2; letter-spacing: -0.01em; margin-bottom: 1.25rem; color: var(--text); }
    .hero h1 em { font-style: italic; color: var(--rose); }
    .hero p { font-size: 1.05rem; color: var(--muted); margin-bottom: 2rem; line-height: 1.75; max-width: 460px; }
    .btn { display: inline-flex; align-items: center; gap: 0.5rem; font-family: var(--font); font-weight: 600; font-size: 0.95rem; padding: 0.8rem 1.75rem; border-radius: var(--radius); cursor: pointer; border: none; transition: var(--transition); }
    .btn-rose { background: var(--rose); color: #fff; }
    .btn-rose:hover { background: var(--rose-light); transform: translateY(-2px); box-shadow: 0 8px 24px rgba(225,29,72,0.3); }
    .btn-outline { background: transparent; color: var(--text); border: 1.5px solid var(--border); }
    .btn-outline:hover { border-color: var(--rose); color: var(--rose); }
    .hero-btns { display: flex; gap: 1rem; flex-wrap: wrap; margin-bottom: 2rem; }
    .hero-trust { display: flex; gap: 2rem; }
    .ht-item { font-size: 0.82rem; color: var(--muted); display: flex; align-items: center; gap: 0.35rem; }
    .hero-visual { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
    .hv-card { background: var(--card); border: 1px solid var(--border); border-radius: var(--radius); padding: 1.5rem; box-shadow: var(--shadow-sm); transition: var(--transition); }
    .hv-card:hover { box-shadow: var(--shadow); transform: translateY(-3px); }
    .hv-card.wide { grid-column: span 2; }
    .hv-icon { font-size: 1.75rem; margin-bottom: 0.6rem; }
    .hv-title { font-weight: 700; font-size: 0.9rem; margin-bottom: 0.2rem; }
    .hv-sub { font-size: 0.78rem; color: var(--muted); }
    .hv-badge { display: inline-block; margin-top: 0.4rem; font-size: 0.7rem; font-weight: 600; background: var(--rose-dim); color: var(--rose); border: 1px solid var(--rose-medium); padding: 0.15rem 0.5rem; border-radius: 4px; }

    /* SECTION */
    .section { padding: 5.5rem 0; }
    .section-light { background: var(--bg); }
    .section-cream { background: var(--bg2); }
    .section-header { text-align: center; margin-bottom: 3.5rem; }
    .section-tag { font-size: 0.78rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: var(--rose); display: block; margin-bottom: 0.5rem; }
    .section-title { font-family: var(--serif); font-size: clamp(1.6rem, 3vw, 2.25rem); font-weight: 700; margin-bottom: 0.75rem; color: var(--text); }
    .section-sub { font-size: 1rem; color: var(--muted); max-width: 520px; margin: 0 auto; }

    /* SERVICES */
    .services-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; }
    .service-card { background: var(--card); border: 1px solid var(--border); border-radius: var(--radius); padding: 2rem 1.5rem; transition: var(--transition); box-shadow: var(--shadow-sm); }
    .service-card:hover { border-color: var(--blush); box-shadow: var(--shadow); transform: translateY(-4px); }
    .sc-icon { font-size: 2.25rem; margin-bottom: 1rem; }
    .sc-title { font-weight: 700; font-size: 1rem; color: var(--text); margin-bottom: 0.4rem; }
    .sc-desc { font-size: 0.875rem; color: var(--muted); line-height: 1.6; margin-bottom: 1rem; }
    .sc-time { font-size: 0.78rem; color: var(--rose); font-weight: 600; }

    /* BEFORE/AFTER */
    .ba-section { background: linear-gradient(135deg, #fff0f3 0%, #fdf2f4 100%); }
    .ba-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; }
    .ba-card { text-align: center; }
    .ba-visual { display: flex; gap: 4px; height: 160px; border-radius: var(--radius); overflow: hidden; margin-bottom: 1rem; box-shadow: var(--shadow-sm); }
    .ba-before { flex: 1; background: linear-gradient(160deg, #d1c4b8, #b8a89a); display: flex; align-items: flex-end; padding: 0.75rem; }
    .ba-after { flex: 1; background: linear-gradient(160deg, #fda4af, #fb7185); display: flex; align-items: flex-end; padding: 0.75rem; }
    .ba-label { font-size: 0.65rem; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; color: rgba(255,255,255,0.85); }
    .ba-title { font-weight: 700; font-size: 0.95rem; color: var(--text); margin-bottom: 0.25rem; }
    .ba-desc { font-size: 0.83rem; color: var(--muted); }

    /* TEAM */
    .team-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 2rem; max-width: 700px; margin: 0 auto; }
    .team-card { background: var(--card); border: 1px solid var(--border); border-radius: var(--radius); padding: 2rem; display: flex; gap: 1.25rem; box-shadow: var(--shadow-sm); transition: var(--transition); }
    .team-card:hover { box-shadow: var(--shadow); border-color: var(--blush); }
    .team-avatar { width: 64px; height: 64px; border-radius: 50%; background: linear-gradient(135deg, var(--rose), #fb7185); display: flex; align-items: center; justify-content: center; font-family: var(--serif); font-size: 1.25rem; font-weight: 700; color: #fff; flex-shrink: 0; }
    .team-name { font-weight: 700; font-size: 1rem; margin-bottom: 0.15rem; color: var(--text); }
    .team-role { font-size: 0.8rem; color: var(--rose); font-weight: 600; margin-bottom: 0.5rem; }
    .team-desc { font-size: 0.85rem; color: var(--muted); line-height: 1.6; }
    .team-creds { display: flex; flex-wrap: wrap; gap: 0.35rem; margin-top: 0.6rem; }
    .team-cred { font-size: 0.7rem; background: var(--bg2); color: var(--muted); border: 1px solid var(--border); padding: 0.2rem 0.5rem; border-radius: 4px; }

    /* CTA */
    .cta-section { background: linear-gradient(135deg, #fff0f3 0%, #ffe4e6 100%); text-align: center; padding: 5.5rem 0; position: relative; overflow: hidden; }
    .cta-section::before { content: '✦'; position: absolute; top: 2rem; left: 50%; transform: translateX(-50%); font-size: 1.5rem; color: var(--rose); opacity: 0.3; }
    .cta-section h2 { font-family: var(--serif); font-size: clamp(1.75rem, 3.5vw, 2.5rem); font-weight: 700; margin-bottom: 1rem; color: var(--text); }
    .cta-section h2 span { color: var(--rose); font-style: italic; }
    .cta-section p { color: var(--muted); font-size: 1rem; margin-bottom: 2.5rem; }
    .cta-note { margin-top: 1rem; font-size: 0.85rem; color: var(--muted); }

    /* FOOTER */
    footer { background: var(--text); padding: 2.5rem 0; }
    .footer-inner { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem; }
    .footer-brand { font-family: var(--serif); font-weight: 600; color: var(--bg2); font-size: 0.95rem; }
    .footer-copy { font-size: 0.8rem; color: #78716c; }
    .footer-back { font-size: 0.875rem; color: var(--blush); border: 1px solid rgba(253,164,175,0.3); padding: 0.4rem 1rem; border-radius: 6px; }
    .footer-back:hover { background: rgba(253,164,175,0.1); }

    @media (max-width: 900px) {
      .hero-inner { grid-template-columns: 1fr; }
      .hero-visual { display: none; }
      .services-grid, .ba-grid { grid-template-columns: repeat(2, 1fr); }
      .team-grid { grid-template-columns: 1fr; }
    }
    @media (max-width: 600px) {
      .services-grid, .ba-grid { grid-template-columns: 1fr; }
      nav ul { display: none; }
    }
  </style>
</head>
<body>

  <nav>
    <div class="container">
      <div class="nav-inner">
        <div class="nav-brand">
          <div class="brand-dot"></div>
          <div class="brand-name">Lumina<span> Estética</span></div>
        </div>
        <ul>
          <li><a href="#servicos">Serviços</a></li>
          <li><a href="#equipe">Equipe</a></li>
          <li><a href="https://wa.me/5511934900204?text=Olá,%20gostaria%20de%20agendar%20uma%20avaliação%20na%20Lumina%20Estética!" class="nav-cta" target="_blank" rel="noopener">Agendar agora</a></li>
        </ul>
      </div>
    </div>
  </nav>

  <section class="hero">
    <div class="hero-blob1"></div>
    <div class="hero-blob2"></div>
    <div class="container">
      <div class="hero-inner">
        <div>
          <div class="hero-eyebrow">
            <div class="eyebrow-line"></div>
            <div class="eyebrow-text">Clínica estética premium</div>
          </div>
          <h1>Sua beleza, <em>nossa especialidade</em></h1>
          <p>Tratamentos estéticos avançados com tecnologia de ponta e equipe especializada. Cuide de você com quem realmente entende do assunto.</p>
          <div class="hero-btns">
            <a href="https://wa.me/5511934900204?text=Olá,%20gostaria%20de%20agendar%20minha%20avaliação%20gratuita%20na%20Lumina%20Estética!" class="btn btn-rose" target="_blank" rel="noopener">
              Agendar avaliação gratuita
            </a>
            <a href="#servicos" class="btn btn-outline">Ver tratamentos</a>
          </div>
          <div class="hero-trust">
            <div class="ht-item">✦ +2000 clientes</div>
            <div class="ht-item">✦ 12 anos de experiência</div>
            <div class="ht-item">✦ Avaliação gratuita</div>
          </div>
        </div>
        <div class="hero-visual">
          <div class="hv-card">
            <div class="hv-icon">✨</div>
            <div class="hv-title">Limpeza de Pele</div>
            <div class="hv-sub">Resultado imediato</div>
            <div class="hv-badge">A partir de R$ 120</div>
          </div>
          <div class="hv-card">
            <div class="hv-icon">💉</div>
            <div class="hv-title">Botox</div>
            <div class="hv-sub">Anti-idade eficaz</div>
            <div class="hv-badge">Consultar</div>
          </div>
          <div class="hv-card">
            <div class="hv-icon">🌸</div>
            <div class="hv-title">Peeling Facial</div>
            <div class="hv-sub">Pele renovada</div>
            <div class="hv-badge">A partir de R$ 180</div>
          </div>
          <div class="hv-card">
            <div class="hv-icon">🤝</div>
            <div class="hv-title">Drenagem</div>
            <div class="hv-sub">Modelagem corporal</div>
            <div class="hv-badge">A partir de R$ 150</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="section section-cream" id="servicos">
    <div class="container">
      <div class="section-header">
        <span class="section-tag">Tratamentos</span>
        <h2 class="section-title">Nossos serviços</h2>
        <p class="section-sub">Protocolos personalizados desenvolvidos para realçar sua beleza natural com segurança e eficácia</p>
      </div>
      <div class="services-grid">
        <div class="service-card">
          <div class="sc-icon">✨</div>
          <div class="sc-title">Limpeza de Pele</div>
          <div class="sc-desc">Limpeza profunda com extração de impurezas, hidratação e proteção. Para todos os tipos de pele, com resultado imediato.</div>
          <div class="sc-time">⏱ 60 min — A partir de R$ 120</div>
        </div>
        <div class="service-card">
          <div class="sc-icon">🌿</div>
          <div class="sc-title">Peeling Facial</div>
          <div class="sc-desc">Renovação celular com ácidos de alta concentração. Elimina manchas, reduz poros e melhora a textura da pele.</div>
          <div class="sc-time">⏱ 45 min — A partir de R$ 180</div>
        </div>
        <div class="service-card">
          <div class="sc-icon">💉</div>
          <div class="sc-title">Botox &amp; Toxina</div>
          <div class="sc-desc">Aplicação de toxina botulínica para suavizar rugas e linhas de expressão. Procedimento seguro com resultados naturais.</div>
          <div class="sc-time">⏱ 30 min — Preço sob consulta</div>
        </div>
        <div class="service-card">
          <div class="sc-icon">💋</div>
          <div class="sc-title">Preenchimento Labial</div>
          <div class="sc-desc">Preenchimento com ácido hialurônico para volume e definição labial. Resultado natural e harmonioso.</div>
          <div class="sc-time">⏱ 30 min — Preço sob consulta</div>
        </div>
        <div class="service-card">
          <div class="sc-icon">🤲</div>
          <div class="sc-title">Drenagem Linfática</div>
          <div class="sc-desc">Massagem especializada que reduz retenção de líquidos, modela o corpo e melhora a circulação.</div>
          <div class="sc-time">⏱ 60 min — A partir de R$ 150</div>
        </div>
        <div class="service-card">
          <div class="sc-icon">🌸</div>
          <div class="sc-title">Tratamento para Acne</div>
          <div class="sc-desc">Protocolo completo para controle e tratamento da acne, com produtos dermatologicamente testados e técnicas avançadas.</div>
          <div class="sc-time">⏱ 75 min — A partir de R$ 200</div>
        </div>
      </div>
    </div>
  </section>

  <section class="section ba-section">
    <div class="container">
      <div class="section-header">
        <span class="section-tag">Resultados</span>
        <h2 class="section-title">Transformações reais</h2>
        <p class="section-sub">Veja como nossos tratamentos transformam a pele e a autoestima dos nossos clientes</p>
      </div>
      <div class="ba-grid">
        <div class="ba-card">
          <div class="ba-visual">
            <div class="ba-before"><span class="ba-label">Antes</span></div>
            <div class="ba-after" style="background: linear-gradient(160deg, #f9a8d4, #ec4899);"><span class="ba-label">Depois</span></div>
          </div>
          <div class="ba-title">Limpeza de Pele</div>
          <div class="ba-desc">Pele mais limpa, luminosa e uniforme após 1 sessão</div>
        </div>
        <div class="ba-card">
          <div class="ba-visual">
            <div class="ba-before" style="background: linear-gradient(160deg, #c4b5a5, #a8998a);"></div>
            <div class="ba-after" style="background: linear-gradient(160deg, #fecdd3, #fda4af);">
              <span class="ba-label">Depois</span>
            </div>
          </div>
          <div class="ba-before"><span class="ba-label">Antes</span></div>
          <div class="ba-title">Peeling Facial</div>
          <div class="ba-desc">Manchas reduzidas e pele renovada após protocolo de 3 sessões</div>
        </div>
        <div class="ba-card">
          <div class="ba-visual">
            <div class="ba-before" style="background: linear-gradient(160deg, #b8a99a, #9e8878);"><span class="ba-label">Antes</span></div>
            <div class="ba-after" style="background: linear-gradient(160deg, #fba4af, #e879a0);"><span class="ba-label">Depois</span></div>
          </div>
          <div class="ba-title">Botox Expressão</div>
          <div class="ba-desc">Rugas suavizadas com resultado natural e duradouro</div>
        </div>
      </div>
    </div>
  </section>

  <section class="section section-cream" id="equipe">
    <div class="container">
      <div class="section-header">
        <span class="section-tag">Nossa equipe</span>
        <h2 class="section-title">Especialistas em beleza</h2>
        <p class="section-sub">Profissionais apaixonadas pelo que fazem, comprometidas com os seus resultados</p>
      </div>
      <div class="team-grid">
        <div class="team-card">
          <div class="team-avatar">AC</div>
          <div>
            <div class="team-name">Ana Claudia Santos</div>
            <div class="team-role">Esteticista Sênior &amp; Harmonizadora</div>
            <div class="team-desc">Mais de 10 anos de experiência em tratamentos faciais e procedimentos estéticos avançados. Especialista em harmonização facial e rejuvenescimento.</div>
            <div class="team-creds">
              <span class="team-cred">COREN-SP</span>
              <span class="team-cred">Botox Certificada</span>
              <span class="team-cred">Peeling Avançado</span>
            </div>
          </div>
        </div>
        <div class="team-card">
          <div class="team-avatar">MF</div>
          <div>
            <div class="team-name">Mariana Ferreira</div>
            <div class="team-role">Esteticista &amp; Massoterapeuta</div>
            <div class="team-desc">Especialista em tratamentos corporais, drenagem linfática e massoterapia. Pós-graduada em estética integrativa e bem-estar.</div>
            <div class="team-creds">
              <span class="team-cred">COREN-SP</span>
              <span class="team-cred">Drenagem Especializada</span>
              <span class="team-cred">Massoterapia</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="cta-section">
    <div class="container">
      <h2>Agende sua <span>avaliação gratuita</span></h2>
      <p>Conheça nossa clínica, fale com nossas especialistas e descubra o tratamento ideal para você — sem compromisso.</p>
      <a href="https://wa.me/5511934900204?text=Olá,%20gostaria%20de%20agendar%20minha%20avaliação%20gratuita%20na%20Lumina%20Estética!" class="btn btn-rose" target="_blank" rel="noopener">
        ✦ Agendar minha avaliação gratuita
      </a>
      <p class="cta-note">📍 São Paulo, SP — Atendimento de segunda a sábado</p>
    </div>
  </section>

  <footer>
    <div class="container">
      <div class="footer-inner">
        <div class="footer-brand">✦ Lumina Estética</div>
        <div class="footer-copy">Rua das Flores, 245 — Jardins, São Paulo</div>
        <a href="/" class="footer-back">← Criado pela VorinWeb</a>
      </div>
    </div>
  </footer>

</body>
</html>

'@ | Set-Content -Path "projetos\lumina\index.html" -Encoding UTF8
Write-Host "Written: projetos/lumina/index.html" -ForegroundColor Green


git add index.html style.css projetos\techflow\index.html projetos\advocacia\index.html projetos\fitmax\index.html "projetos\sabor-carioca\index.html" projetos\lumina\index.html

git commit -m "Add VorinWeb landing page and 5 demo projects"

git push -u origin $branch

Write-Host ""
Write-Host "DONE! All files pushed to branch: $branch" -ForegroundColor Green
Write-Host "Now go to GitHub and merge this branch into main to publish the site." -ForegroundColor Yellow
