(function(){
  var html = document.documentElement;
  var saved = localStorage.getItem('vw-theme') || 'dark';
  html.setAttribute('data-theme', saved);
  document.getElementById('themeToggle').addEventListener('click', function(){
    var next = html.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    html.setAttribute('data-theme', next);
    localStorage.setItem('vw-theme', next);
  });
})();

document.getElementById('copyYear').textContent = new Date().getFullYear();

function toggleFaq(el) {
  var item = el.parentElement;
  var isOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item.open').forEach(function(i){ i.classList.remove('open'); });
  if (!isOpen) item.classList.add('open');
}

var demos = {
  restaurante: {
    title: '🍽 Demo — Sabores & Arte',
    html: '<div class="demo-site"><div class="dr-hero"><div class="dr-ey">Gastronomia Premium · São Paulo</div><h2>Sabor que <span>marca memória</span></h2><p>Ingredientes selecionados, receitas autorais e um ambiente que transforma qualquer refeição em experiência.</p><div class="dr-btns"><button class="dr-btn">📅 Reservar Mesa</button><button class="dr-btn-g">🍴 Ver Cardápio</button></div></div><div class="dr-menu"><div class="dr-mhdr"><div class="dr-mt">Destaques do Chef</div><div class="dr-filt"><div class="dr-fc on">Todos</div><div class="dr-fc">Carnes</div><div class="dr-fc">Massas</div><div class="dr-fc">Sobremesas</div></div></div><div class="dr-grid"><div class="dr-item"><div class="dr-img dr-i1">🥩</div><div class="dr-ib"><div class="dr-in">Picanha Premium</div><div class="dr-ip">R$ 89,90</div></div></div><div class="dr-item"><div class="dr-img dr-i2">🫕</div><div class="dr-ib"><div class="dr-in">Risoto de Cogumelos</div><div class="dr-ip">R$ 62,00</div></div></div><div class="dr-item"><div class="dr-img dr-i3">🍮</div><div class="dr-ib"><div class="dr-in">Crème Brûlée</div><div class="dr-ip">R$ 28,50</div></div></div></div></div></div>'
  },
  clinica: {
    title: '🏥 Demo — Clínica Saúde Plena',
    html: '<div class="demo-site"><div class="dc-wrap"><div class="dc-side"><div class="dc-brand">🏥 Saúde Plena</div><div class="dc-menu"><div class="dc-mi on">🏠 Dashboard</div><div class="dc-mi">📅 Agendamentos</div><div class="dc-mi">👥 Pacientes</div><div class="dc-mi">🩺 Especialidades</div><div class="dc-mi">📋 Prontuários</div></div></div><div class="dc-main"><div class="dc-top"><div class="dc-wlc">Bom dia, Dr. Silva 👋</div><div class="dc-dt">📅 Segunda, 9 Jun</div></div><div class="dc-stats"><div class="dc-stat"><div class="dc-sn">24</div><div class="dc-sl">Pacientes hoje</div></div><div class="dc-stat"><div class="dc-sn" style="color:#16a34a">3</div><div class="dc-sl">Aguardando</div></div><div class="dc-stat"><div class="dc-sn" style="color:#d97706">5</div><div class="dc-sl">Confirmados</div></div></div><div class="dc-apts"><div class="dc-at">Próximas consultas</div><div class="dc-apt"><div class="dc-atm">09:30</div><div class="dc-an">Maria Oliveira — Cardiologia</div><div class="dc-ab apt-ok">Confirmado</div></div><div class="dc-apt"><div class="dc-atm">10:00</div><div class="dc-an">João Santos — Clínico Geral</div><div class="dc-ab apt-wt">Aguardando</div></div><div class="dc-apt"><div class="dc-atm">11:15</div><div class="dc-an">Ana Ferreira — Dermatologia</div><div class="dc-ab apt-ok">Confirmado</div></div></div></div></div></div>'
  },
  bot: {
    title: '🤖 Demo — AgendaBot Pro',
    html: '<div class="demo-site"><div class="db-wrap"><div class="db-header"><div class="db-brand"><div class="db-brand-icon">🤖</div><div><div class="db-brand-name">AgendaBot Pro</div><div class="db-brand-sub">Assistente de Agendamentos</div></div></div><div class="db-status"><span style="width:6px;height:6px;background:#4ade80;border-radius:50%;display:inline-block;margin-right:4px;"></span> Online agora</div></div><div class="db-chat"><div class="db-msg bot">👋 Olá! Sou o AgendaBot. Vou te ajudar a marcar seu horário. Qual serviço você deseja?</div><div class="db-options"><div class="db-opt">💆 Consulta</div><div class="db-opt">🔁 Retorno</div><div class="db-opt">🧪 Exame</div></div><div class="db-msg usr">Consulta</div><div class="db-msg bot">📅 Perfeito! Aqui estão os dias disponíveis essa semana:</div><div class="db-calendar"><div class="db-cal-title">Junho 2026 — Dias disponíveis</div><div class="db-cal-grid"><div class="db-cal-day hdr">D</div><div class="db-cal-day hdr">S</div><div class="db-cal-day hdr">T</div><div class="db-cal-day hdr">Q</div><div class="db-cal-day hdr">Q</div><div class="db-cal-day hdr">S</div><div class="db-cal-day hdr">S</div><div class="db-cal-day">1</div><div class="db-cal-day avail">2</div><div class="db-cal-day avail">3</div><div class="db-cal-day sel">4</div><div class="db-cal-day avail">5</div><div class="db-cal-day">6</div><div class="db-cal-day">7</div></div></div><div class="db-msg bot">✅ Você escolheu <strong>Quarta, 4 de Junho</strong>. Qual horário prefere?</div><div class="db-options"><div class="db-opt">🌅 09:00</div><div class="db-opt">🌅 10:30</div><div class="db-opt">🌇 14:00</div><div class="db-opt">🌇 16:00</div></div></div></div></div>'
  },
  loja: {
    title: '🛍 Demo — Shop Premium',
    html: '<div class="demo-site"><div class="dl-wrap"><div class="dl-nav"><div class="dl-logo">Shop<span>Premium</span></div><div class="dl-navl"><span class="dl-nl">Feminino</span><span class="dl-nl">Masculino</span><span class="dl-nl">Acessórios</span></div><button class="dl-cart">🛒 Carrinho (2)</button></div><div class="dl-hero"><div class="dl-hl">🔥 Coleção Verão 2025</div><h2>Estilo que fala<br>por você</h2><p>Peças exclusivas para quem não se contenta com o óbvio.</p><button class="dl-hcta">Ver coleção completa →</button></div><div class="dl-grid"><div class="dl-item"><div class="dl-img dl-i1">👗</div><div class="dl-ib"><div class="dl-in">Vestido Exclusivo</div><div><span class="dl-ip">R$ 249,90</span><span class="dl-io">R$ 399</span></div></div></div><div class="dl-item"><div class="dl-img dl-i2">👟</div><div class="dl-ib"><div class="dl-in">Tênis Urban</div><div><span class="dl-ip">R$ 389,00</span></div></div></div><div class="dl-item"><div class="dl-img dl-i3">👜</div><div class="dl-ib"><div class="dl-in">Bolsa Couro</div><div><span class="dl-ip">R$ 179,90</span><span class="dl-io">R$ 280</span></div></div></div></div></div></div>'
  }
};

function openDemo(type) {
  var d = demos[type];
  if (!d) return;
  document.getElementById('modalTitle').textContent = d.title;
  document.getElementById('modalContent').innerHTML = d.html;
  document.getElementById('demoModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeDemo() {
  document.getElementById('demoModal').classList.remove('open');
  document.body.style.overflow = '';
}

document.getElementById('demoModal').addEventListener('click', function(e){
  if (e.target === this) closeDemo();
});

document.addEventListener('keydown', function(e){
  if (e.key === 'Escape') closeDemo();
});

var WHATSAPP_NUMBER = '5511934900204';

function submitForm(btn) {
  var name = document.getElementById('ctName').value.trim();
  var email = document.getElementById('ctEmail').value.trim();
  var project = document.getElementById('ctProject').value.trim();
  var message = document.getElementById('ctMessage').value.trim();

  if (!name || !project || !message) {
    alert('Preencha nome, tipo de projeto e uma breve descrição antes de enviar.');
    return;
  }

  var text = 'Olá! Vim pelo site da VorinWeb.\n\n' +
    'Nome: ' + name + '\n' +
    (email ? 'E-mail: ' + email + '\n' : '') +
    'Tipo de projeto: ' + project + '\n' +
    'Mensagem: ' + message;

  window.open('https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(text), '_blank');

  btn.innerHTML = '<svg class="ico"><use href="#ic-check-circle"/></svg> Abrindo o WhatsApp...';
  btn.style.background = '#15803d';
  setTimeout(function(){
    btn.innerHTML = '<svg class="ico"><use href="#ic-send"/></svg> Enviar mensagem';
    btn.style.background = '';
  }, 3000);
}
