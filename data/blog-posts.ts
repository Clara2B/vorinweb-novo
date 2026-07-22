export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "quote"; text: string; author: string; role: string; photo?: string }
  | { type: "link"; href: string; label: string; description: string };

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readingTime: string;
  coverImage?: string;
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
  {
    slug: "nosso-resultado-vai-alem-do-site",
    title: "Nosso resultado vai além do site",
    excerpt:
      "Entenda por que o resultado de um projeto digital vai além da criação do site e envolve estratégia, comunicação, organização e parceria com o cliente.",
    category: "Processo",
    author: "Equipe VorinWeb",
    date: "2026-07-22",
    readingTime: "6 min de leitura",
    content: [
      {
        type: "p",
        text: "Quando uma empresa contrata a criação de um site, é comum imaginar que está comprando páginas, um design bonito e algumas linhas de código. Faz sentido pensar assim — é o que fica visível no final. Mas quem já passou por um projeto digital de verdade sabe que o resultado percebido depende de muito mais do que aquilo que aparece na tela.",
      },
      { type: "h2", text: "Um site não é apenas uma entrega técnica" },
      {
        type: "p",
        text: "O código e o design são a parte visível do trabalho — mas não são o trabalho inteiro. Entre o primeiro contato e a publicação, existe um processo inteiro de entendimento do negócio, organização de prioridades, decisões de experiência e ajustes ao longo do caminho. Quando esse processo funciona bem, o cliente sente — mesmo sem saber nomear exatamente o quê.",
      },
      { type: "h2", text: "O que realmente influencia o resultado de um projeto" },
      {
        type: "p",
        text: "Depois de vários projetos entregues, uma coisa fica clara: a satisfação do cliente raramente depende só da qualidade técnica final. Ela depende de um conjunto de fatores que, juntos, definem se a experiência foi boa ou apenas aceitável.",
      },
      {
        type: "ul",
        items: [
          "Entendimento real do negócio do cliente, não só do que foi pedido no briefing.",
          "Organização do projeto, com prioridades e etapas claras desde o início.",
          "Comunicação constante — sem deixar o cliente no escuro sobre o andamento.",
          "Disponibilidade genuína para esclarecer dúvidas ao longo do caminho.",
          "Atenção aos detalhes que ninguém pediu explicitamente, mas que fazem diferença.",
          "Capacidade de resolver problemas rápido, sem travar a entrega.",
        ],
      },
      { type: "h2", text: "O papel da comunicação e da organização" },
      {
        type: "p",
        text: "Grande parte da frustração em projetos digitais não vem de um trabalho tecnicamente ruim — vem da falta de organização e de comunicação. Cliente sem retorno sobre o andamento, prazos que mudam sem aviso, decisões tomadas sem consulta. Um processo bem estruturado, com etapas visíveis e comunicação frequente, evita boa parte dos atritos antes mesmo que eles aconteçam.",
      },
      { type: "h2", text: "Como sugestões e decisões estratégicas melhoram o projeto" },
      {
        type: "p",
        text: "Um bom parceiro digital não é só quem executa o que foi pedido — é quem também sugere melhorias ao longo do caminho. Muitas vezes o cliente sabe o que quer alcançar, mas não necessariamente o melhor caminho técnico ou de experiência para chegar lá. É nesse espaço que decisões conjuntas fazem a diferença entre um projeto correto e um projeto que realmente representa a marca.",
      },
      { type: "h2", text: "O case da Nu3tion" },
      {
        type: "p",
        text: "Um exemplo recente disso foi o projeto da página de produto do OraProtein®, para a Nu3tion, marca de suplementos. O desafio não era só construir uma página bonita — era traduzir exatamente a ideia que o cliente já tinha em mente, com organização, comunicação aberta e agilidade para resolver cada desafio que surgisse pelo caminho.",
      },
      {
        type: "link",
        href: "/projetos/nu3tion",
        label: "Conheça o case completo da Nu3tion",
        description: "O desafio, a solução e o resultado percebido pelo cliente.",
      },
      { type: "h2", text: "O que o Lucas disse sobre a experiência" },
      {
        type: "quote",
        text: "Contratar a VorinWeb foi uma ótima escolha e uma excelente experiência. Desde o início, demonstraram muito profissionalismo, organização e atenção aos detalhes. O novo site da Nu3tion ficou moderno, intuitivo e exatamente como imaginávamos.",
        author: "Lucas Rizzi",
        role: "Nu3tion",
        photo: "/images/nu3tion/lucas-rizzi.webp",
      },
      {
        type: "p",
        text: "O que chama atenção nesse depoimento não é só o elogio ao resultado final — é a menção específica à organização, à disponibilidade para dúvidas, às sugestões de melhoria e à agilidade na resolução de desafios. São exatamente os fatores que, na prática, mais pesam na experiência de quem contrata.",
      },
      { type: "h2", text: "O que aprendemos com esse projeto" },
      {
        type: "p",
        text: "Cada projeto reforça a mesma conclusão: entregar um site bem feito é o ponto de partida, não o objetivo final. O objetivo é que o cliente termine o processo com a sensação de que teve um parceiro no caminho — alguém que entendeu o negócio, organizou o processo, comunicou com clareza e resolveu os desafios junto. É isso que faz um projeto ser lembrado como uma boa experiência, não só como uma entrega técnica.",
      },
      {
        type: "p",
        text: "Se você está avaliando quem vai construir a próxima etapa da presença digital da sua empresa, vale considerar isso: o resultado que você vai lembrar não é só o site no ar. É como foi chegar até ele.",
      },
      {
        type: "link",
        href: "/criacao-de-sites",
        label: "Quer um projeto com esse mesmo cuidado?",
        description: "Conheça como trabalhamos a criação de sites na VorinWeb.",
      },
      {
        type: "link",
        href: "/orcamento",
        label: "Solicitar orçamento",
        description: "Conta pra gente o que sua empresa precisa.",
      },
    ],
  },
];

export function getPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
