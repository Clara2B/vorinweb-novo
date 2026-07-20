export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] };

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readingTime: string;
  content: BlogBlock[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "site-institucional-ou-landing-page",
    title: "Site institucional ou landing page: qual o certo para o seu negócio?",
    excerpt:
      "Os dois parecem parecidos, mas resolvem problemas diferentes. Entenda quando usar cada um antes de investir no desenvolvimento.",
    category: "Estratégia",
    author: "Equipe VorinWeb",
    date: "2026-06-02",
    readingTime: "5 min de leitura",
    content: [
      {
        type: "p",
        text: "É uma das perguntas mais comuns de quem está prestes a investir em presença digital: preciso de um site ou de uma landing page? A resposta curta é: depende do seu objetivo. A resposta longa explica por que confundir os dois pode custar caro em conversão.",
      },
      { type: "h2", text: "O que é um site institucional" },
      {
        type: "p",
        text: "Um site institucional é a casa digital do seu negócio. Ele reúne várias páginas — Home, Sobre, Serviços, Contato — e tem como objetivo apresentar sua empresa de forma completa, gerar autoridade e aparecer no Google para diferentes buscas relacionadas ao seu negócio. É o lugar para onde você direciona alguém que quer conhecer sua empresa a fundo.",
      },
      { type: "h2", text: "O que é uma landing page" },
      {
        type: "p",
        text: "Uma landing page é uma página única, com um objetivo específico: converter. Ela nasce para receber tráfego pago (Google Ads, Meta Ads) ou uma campanha específica, e por isso não tem menu de navegação nem links de saída — só o caminho até o formulário, o WhatsApp ou o checkout.",
      },
      { type: "h2", text: "Quando usar cada um" },
      {
        type: "ul",
        items: [
          "Use um site institucional se você quer presença permanente no Google e credibilidade de longo prazo.",
          "Use uma landing page se você vai rodar uma campanha específica de tráfego pago com uma oferta clara.",
          "Use os dois juntos se você já investe em anúncios: o site sustenta a marca, a landing page converte a campanha.",
        ],
      },
      {
        type: "p",
        text: "Na prática, a maioria dos negócios em crescimento acaba precisando dos dois — em momentos diferentes. Se você está começando a investir em Google Ads, comece pela landing page: é o investimento com retorno mais rápido de medir.",
      },
    ],
  },
  {
    slug: "quanto-custa-um-site-profissional",
    title: "Quanto custa um site profissional em 2026?",
    excerpt:
      "Os preços variam muito no mercado — entenda o que realmente influencia o investimento em um site e como evitar pagar caro por pouco.",
    category: "Orçamento",
    author: "Equipe VorinWeb",
    date: "2026-06-16",
    readingTime: "6 min de leitura",
    content: [
      {
        type: "p",
        text: "Se você já pesquisou 'quanto custa um site', provavelmente encontrou respostas que vão de algumas centenas a dezenas de milhares de reais. A variação é real — e entender o que a explica ajuda a tomar uma decisão melhor.",
      },
      { type: "h2", text: "O que influencia o preço" },
      {
        type: "ul",
        items: [
          "Complexidade: um site institucional simples custa menos que uma loja virtual com catálogo e checkout.",
          "Design: templates prontos custam menos que design autoral construído do zero para a sua marca.",
          "Integrações: formulários, pagamento, agendamento e automações aumentam o escopo do projeto.",
          "Suporte pós-entrega: sites 'e depois some' costumam ser mais baratos — e mais arriscados a médio prazo.",
        ],
      },
      { type: "h2", text: "O risco do preço baixo demais" },
      {
        type: "p",
        text: "Um site muito barato geralmente significa um de três cenários: template genérico sem personalização, ausência de otimização de SEO e performance, ou nenhum suporte após a entrega. O prejuízo aparece meses depois, quando o site não aparece no Google ou quando você precisa de um ajuste simples e não tem para quem ligar.",
      },
      { type: "h2", text: "Como pensar no investimento" },
      {
        type: "p",
        text: "Em vez de perguntar 'quanto custa um site', pergunte 'quanto vale um cliente novo para o meu negócio'. Um site bem construído se paga com poucos clientes convertidos ao longo do ano — e continua trazendo resultado muito depois do investimento inicial.",
      },
      {
        type: "p",
        text: "Por isso trabalhamos com orçamento personalizado: o valor certo é o que faz sentido para o tamanho do seu projeto, não um preço de tabela genérico. Conte pra gente o que você precisa e receba um orçamento claro, sem compromisso.",
      },
    ],
  },
  {
    slug: "sinais-que-seu-negocio-precisa-de-bot-whatsapp",
    title: "5 sinais de que o seu negócio precisa de um bot no WhatsApp",
    excerpt:
      "Se sua equipe passa o dia respondendo as mesmas perguntas, talvez a solução não seja contratar mais gente — e sim automatizar o que já é repetitivo.",
    category: "Automação",
    author: "Equipe VorinWeb",
    date: "2026-07-01",
    readingTime: "4 min de leitura",
    content: [
      {
        type: "p",
        text: "Automatizar o atendimento no WhatsApp não é sobre substituir pessoas — é sobre liberar o time humano para o que realmente exige atenção. Veja os sinais mais comuns de que chegou a hora.",
      },
      {
        type: "ul",
        items: [
          "Você perde clientes que mandam mensagem fora do horário comercial e não recebem resposta a tempo.",
          "Sua equipe responde as mesmas 5 perguntas (preço, horário, endereço, disponibilidade) várias vezes por dia.",
          "O agendamento é feito manualmente por mensagem, e isso gera confusão de horários e faltas.",
          "Você não consegue medir quantos contatos realmente viram cliente.",
          "O crescimento do negócio está sendo travado pela capacidade de atendimento, não pela demanda.",
        ],
      },
      { type: "h2", text: "O que muda com um bot bem configurado" },
      {
        type: "p",
        text: "Um bot de atendimento bem construído não parece um robô genérico. Ele responde dúvidas frequentes, qualifica o interesse do cliente, agenda horários direto na sua agenda e transfere para um atendente humano exatamente quando o assunto exige — sem fazer o cliente repetir tudo de novo.",
      },
      {
        type: "p",
        text: "O resultado prático costuma aparecer em duas frentes: menos tempo da equipe gasto com perguntas repetitivas, e menos clientes perdidos por demora na resposta. Se algum dos sinais acima soou familiar, vale a conversa.",
      },
    ],
  },
];

export function getPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
