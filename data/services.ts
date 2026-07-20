export type ServiceBenefit = { title: string; description: string };
export type ServiceFaq = { question: string; answer: string };

export type Service = {
  slug: string;
  navLabel: string;
  name: string;
  shortDescription: string;
  icon: "Globe" | "Rocket" | "ShoppingCart" | "Bot";
  hero: { eyebrow: string; title: string; subtitle: string };
  problem: { title: string; points: string[] };
  solution: { title: string; description: string };
  benefits: ServiceBenefit[];
  technologies: string[];
  faq: ServiceFaq[];
  ctaText: string;
};

export const services: Service[] = [
  {
    slug: "criacao-de-sites",
    navLabel: "Sites institucionais",
    name: "Criação de Sites",
    shortDescription:
      "Um site que representa sua empresa de verdade e transforma visitantes em contatos reais.",
    icon: "Globe",
    hero: {
      eyebrow: "Criação de Sites",
      title: "Um site que representa o seu negócio — e traz cliente novo todo mês",
      subtitle:
        "Design profissional, carregamento rápido e estrutura pensada para aparecer no Google e transformar visita em orçamento.",
    },
    problem: {
      title: "Seu negócio ainda depende só de indicação?",
      points: [
        "Sem site, todo cliente novo depende de boca a boca ou de anúncio pago direto para o WhatsApp.",
        "Concorrente com site profissional parece mais confiável — mesmo entregando menos que você.",
        "Perfil de rede social não aparece no Google e some no feed em poucas horas.",
        "Página lenta ou feita em template genérico afasta visitante antes mesmo de ler a proposta.",
      ],
    },
    solution: {
      title: "Um site institucional feito para vender, não só para existir",
      description:
        "Construímos cada site do zero, com estrutura pensada para o seu negócio específico: hierarquia clara de informação, prova social nos lugares certos e caminho direto até o WhatsApp ou formulário. Nada de template genérico com seções que não fazem sentido para o seu segmento.",
    },
    benefits: [
      { title: "Sua empresa causa uma ótima primeira impressão", description: "Design autoral alinhado à identidade da sua marca, sem cara de template." },
      { title: "Sua empresa aparece quando o cliente procura no Google", description: "Estrutura de SEO on-page, títulos e descrições otimizados desde o primeiro dia." },
      { title: "Ninguém desiste esperando a página abrir", description: "Site leve, otimizado para carregar rápido — sem visitante indo embora antes de conhecer sua proposta." },
      { title: "Você atualiza o site sem depender de programador", description: "Orientação simples para trocar textos e imagens sempre que precisar." },
      { title: "O caminho até o contato fica óbvio", description: "Botões de WhatsApp e formulário posicionados nos momentos certos da leitura." },
      { title: "Seu cliente tem uma experiência perfeita em qualquer tela", description: "Testado em celular, tablet e desktop — onde a maioria das suas visitas acontece." },
    ],
    technologies: [
      "HTML5, CSS3 e JavaScript modernos",
      "Next.js/React para sites com mais complexidade",
      "Hospedagem otimizada com SSL grátis",
      "Formulário integrado ao WhatsApp",
      "Google Search Console e Analytics configurados",
    ],
    faq: [
      { question: "Preciso ter conteúdo e fotos prontos?", answer: "Não é obrigatório. Ajudamos a organizar a estrutura de conteúdo e podemos indicar bancos de imagens profissionais caso você ainda não tenha fotos próprias." },
      { question: "O site vai funcionar bem no celular?", answer: "Sim. Todo site é construído responsivo e testado em diferentes tamanhos de tela antes da entrega — a maioria dos seus visitantes vai chegar pelo celular." },
      { question: "Quantas páginas o site vai ter?", answer: "Depende do seu negócio. Sites institucionais simples costumam ter entre 4 e 6 páginas (Home, Sobre, Serviços, Contato). Definimos isso juntos na etapa de briefing." },
      { question: "Vocês cuidam do domínio e da hospedagem?", answer: "Sim, cuidamos de toda a parte técnica: domínio, hospedagem, SSL e publicação. Você só acompanha o andamento." },
      { question: "Depois de pronto, consigo continuar recebendo suporte?", answer: "Sim. Após a entrega você tem 7 dias de ajustes gratuitos, e pode contratar um dos planos mensais para atualizações contínuas e evolução do site." },
    ],
    ctaText: "Quero um site profissional",
  },
  {
    slug: "landing-pages",
    navLabel: "Landing pages",
    name: "Landing Pages",
    shortDescription:
      "Páginas desenvolvidas para transformar cliques de anúncio em oportunidades de negócio.",
    icon: "Rocket",
    hero: {
      eyebrow: "Landing Pages",
      title: "Landing pages feitas para transformar clique de anúncio em cliente",
      subtitle:
        "Página única, focada em uma oferta, com carregamento rápido e caminho direto até a conversão — sem menu, sem distração, sem visitante perdido.",
    },
    problem: {
      title: "Seu anúncio está pagando por cliques que não viram cliente?",
      points: [
        "Tráfego pago sendo enviado para o site institucional ou perfil do Instagram, que não foram feitos para converter.",
        "Visitante chega, se distrai com menu e outras páginas, e sai sem preencher nada.",
        "Página lenta derruba o índice de qualidade do anúncio e aumenta o custo por clique.",
        "Sem rastreamento de conversão, fica impossível saber quais anúncios realmente trazem retorno.",
      ],
    },
    solution: {
      title: "Uma página, uma oferta, um caminho até a conversão",
      description:
        "Cada landing page é construída em torno de um único objetivo: fazer o visitante preencher o formulário, chamar no WhatsApp ou comprar. Copy direta, prova social nos pontos certos e formulário curto — tudo otimizado para o tráfego pago que você já está investindo.",
    },
    benefits: [
      { title: "O visitante sabe exatamente o que fazer, sem rolar a página", description: "Chamada principal e botão de ação logo na primeira tela." },
      { title: "Sua campanha paga menos por clique e converte mais", description: "Página leve, o que ajuda o índice de qualidade do anúncio e reduz o custo por clique." },
      { title: "Nada tira a atenção do visitante da sua oferta", description: "Sem menu, sem links de saída — só o caminho até a conversão." },
      { title: "Menos atrito, mais gente preenchendo o formulário", description: "Só os campos essenciais para não perder contato por cansaço de preenchimento." },
      { title: "A confiança certa aparece bem na hora que o visitante hesita", description: "Depoimentos, números e selos posicionados exatamente onde geram confiança." },
      { title: "Você sabe quais anúncios realmente trazem retorno", description: "Pixel do Meta e tag de conversão do Google Ads configurados desde a entrega." },
    ],
    technologies: [
      "Next.js com geração estática (carregamento quase instantâneo)",
      "Google Tag Manager e Meta Pixel",
      "Rastreamento de conversão do Google Ads",
      "Formulário conectado a WhatsApp e/ou e-mail",
      "Estrutura pronta para testes A/B de headline e CTA",
    ],
    faq: [
      { question: "Vocês configuram o pixel e o rastreamento de conversão?", answer: "Sim. Deixamos o Meta Pixel e/ou a tag de conversão do Google Ads instalados e testados antes de você começar a rodar tráfego." },
      { question: "A landing page substitui o meu site institucional?", answer: "Não. São páginas com objetivos diferentes: a landing page é focada só em campanha, sem menu de navegação, e trabalha em paralelo com o site institucional." },
      { question: "Consigo usar a mesma página para mais de uma campanha?", answer: "Recomendamos uma landing page por oferta/público para manter a mensagem específica — isso melhora a taxa de conversão e o índice de qualidade do anúncio." },
      { question: "Em quanto tempo a página fica pronta?", answer: "Landing pages costumam ficar prontas em até 5 dias úteis, já que têm escopo mais enxuto que um site completo." },
      { question: "Depois de publicada, dá para testar títulos e imagens diferentes?", answer: "Sim, a estrutura já é pensada para permitir testes A/B de headline, imagem e CTA conforme os dados da campanha forem chegando." },
    ],
    ctaText: "Quero uma landing page de conversão",
  },
  {
    slug: "lojas-virtuais",
    navLabel: "Lojas virtuais",
    name: "Lojas Virtuais",
    shortDescription:
      "Uma loja que vende por você, mesmo enquanto sua equipe está offline.",
    icon: "ShoppingCart",
    hero: {
      eyebrow: "Lojas Virtuais",
      title: "Uma loja virtual pronta para vender — do catálogo ao pagamento aprovado",
      subtitle:
        "Catálogo organizado, checkout em poucos cliques e frete calculado automaticamente. Sem depender só do WhatsApp para fechar cada venda.",
    },
    problem: {
      title: "Vender só pelo WhatsApp ou Instagram está limitando seu crescimento?",
      points: [
        "Cada pedido exige atendimento manual — cálculo de frete, forma de pagamento, confirmação, tudo por mensagem.",
        "Sem catálogo organizado, cliente desiste de procurar o produto que quer.",
        "Sem checkout próprio, você perde venda de quem prefere comprar sem conversar com ninguém.",
        "Controle de estoque manual gera venda de produto que já acabou.",
      ],
    },
    solution: {
      title: "Uma loja virtual que vende sozinha, mesmo fora do horário comercial",
      description:
        "Construímos sua loja com catálogo completo, carrinho, checkout otimizado e meios de pagamento configurados — Pix, cartão e boleto. O cliente encontra, escolhe, paga e recebe a confirmação, sem precisar de alguém disponível para atender.",
    },
    benefits: [
      { title: "Seu cliente encontra o que quer em segundos", description: "Produtos organizados por categoria, com filtros e busca." },
      { title: "Menos gente desistindo no meio da compra", description: "Checkout enxuto, pensado para reduzir abandono de carrinho." },
      { title: "Você não perde venda por falta de forma de pagamento", description: "Pix, cartão e boleto configurados desde o primeiro dia." },
      { title: "Ninguém espera resposta manual para saber o frete", description: "Cálculo automático, integrado com transportadoras." },
      { title: "Você nunca vende o que não tem mais em estoque", description: "Produto esgotado some da loja automaticamente." },
      { title: "Você administra tudo sem depender de suporte técnico", description: "Painel simples para acompanhar pedidos, estoque e vendas." },
    ],
    technologies: [
      "Plataforma de e-commerce adequada ao porte do seu negócio",
      "Gateway de pagamento com Pix, cartão e boleto",
      "Integração com cálculo de frete (Correios/transportadoras)",
      "Certificado SSL e checkout seguro",
      "Otimização para compra pelo celular",
    ],
    faq: [
      { question: "Preciso ter estoque cadastrado de antemão?", answer: "Recomendamos, mas ajudamos na organização inicial do catálogo durante o processo de desenvolvimento." },
      { question: "Quais formas de pagamento a loja aceita?", answer: "Pix, cartão de crédito e boleto, através de um gateway de pagamento configurado especificamente para o seu negócio." },
      { question: "O frete é calculado automaticamente?", answer: "Sim, integramos o cálculo de frete com base no CEP do cliente, sem necessidade de cálculo manual." },
      { question: "Consigo adicionar novos produtos sozinho depois?", answer: "Sim. Você recebe acesso ao painel de gestão e orientação para cadastrar novos produtos sem depender de programador." },
      { question: "Quanto tempo leva para a loja ficar pronta?", answer: "Em média de 3 a 4 semanas, dependendo da quantidade de produtos e das integrações necessárias — combinamos o prazo exato após entender seu catálogo." },
    ],
    ctaText: "Quero minha loja virtual",
  },
  {
    slug: "bots-whatsapp",
    navLabel: "Bots de WhatsApp",
    name: "Bots de WhatsApp",
    shortDescription:
      "Atendimento que nunca dorme e nunca deixa um cliente esperando.",
    icon: "Bot",
    hero: {
      eyebrow: "Bots de WhatsApp",
      title: "Atendimento automático no WhatsApp, 24 horas por dia",
      subtitle:
        "Um bot que responde dúvidas frequentes, agenda horários e qualifica o cliente antes de chegar no seu time — sem precisar de alguém disponível o dia inteiro.",
    },
    problem: {
      title: "Quantos clientes você perde por demorar a responder?",
      points: [
        "Mensagem chega fora do horário comercial e o cliente já procurou outra empresa até o outro dia.",
        "Sua equipe gasta o dia respondendo as mesmas perguntas sobre preço, horário e disponibilidade.",
        "Agendamento manual por mensagem gera confusão, falta e retrabalho.",
        "Sem qualificação prévia, o time perde tempo com contatos que não têm potencial real de compra.",
      ],
    },
    solution: {
      title: "Um bot configurado para o seu negócio, não um chatbot genérico",
      description:
        "Mapeamos as perguntas e o fluxo de atendimento reais do seu negócio para construir um bot que responde dúvidas, agenda horários direto na sua agenda e transfere para um atendente humano quando o assunto exige — sem parecer robótico.",
    },
    benefits: [
      { title: "Sua empresa nunca mais perde cliente por demorar a responder", description: "Responde a qualquer hora, inclusive fora do horário comercial e nos fins de semana." },
      { title: "Seu cliente agenda sozinho, sem trocar mensagem com sua equipe", description: "Marcação direto pelo WhatsApp, sincronizada com sua agenda." },
      { title: "Seu time só fala com quem já está pronto para comprar", description: "Perguntas iniciais filtram quem está decidido de quem só está pesquisando." },
      { title: "Sua equipe para de responder as mesmas perguntas o dia inteiro", description: "Preço, horário e localização respondidos automaticamente." },
      { title: "Nenhum cliente fica preso a um robô quando o assunto é sério", description: "O bot transfere a conversa para um atendente real quando o assunto exige." },
      { title: "Você enxerga o retorno real do atendimento automático", description: "Acompanhe quantos atendimentos e agendamentos o bot está gerando por mês." },
    ],
    technologies: [
      "Integração com WhatsApp Business API",
      "Fluxos de automação configurados sob medida",
      "Integração com Google Agenda ou sistema de agendamento próprio",
      "Painel de acompanhamento de conversas e agendamentos",
    ],
    faq: [
      { question: "O bot substitui totalmente o atendimento humano?", answer: "Não necessariamente. O bot cuida do volume repetitivo e da qualificação inicial, e transfere para um atendente humano nos casos que exigem — você decide onde fica esse limite." },
      { question: "Preciso ter WhatsApp Business já configurado?", answer: "Ajudamos a configurar do zero se você ainda não tiver. O importante é ter um número dedicado para o atendimento automatizado." },
      { question: "O bot consegue marcar horários direto na minha agenda?", answer: "Sim, integramos o fluxo de agendamento com Google Agenda ou com o sistema que você já utiliza." },
      { question: "Dá para mudar as respostas do bot depois de pronto?", answer: "Sim. Você recebe orientação para ajustes simples, e pode contratar suporte contínuo para evoluções maiores no fluxo." },
      { question: "Funciona para qualquer tipo de negócio?", answer: "Funciona bem para negócios com alto volume de perguntas repetitivas ou agendamento — clínicas, salões, escritórios, academias, entre outros. Avaliamos seu caso antes de propor o fluxo ideal." },
    ],
    ctaText: "Quero automatizar meu atendimento",
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}
