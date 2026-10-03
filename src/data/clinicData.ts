import { ServiceItem, BeforeAfterItem, Testimonial, BlogPost, FAQItem } from '../types';

export const CLINIC_INFO = {
  name: 'Fio a Fio | Studio de Beleza',
  shortName: 'Fio a Fio',
  tagline: 'Onde você realça sua Beleza e se apaixona pela sua Autoestima',
  yearsOfExcellence: 15,
  phoneDisplay: '(14) 99671-1716',
  whatsappRaw: '5514996711716',
  whatsappUrl: 'https://wa.me/5514996711716',
  instagramHandle: '@fioafio.bauru',
  instagramUrl: 'https://www.instagram.com/fioafio.bauru/',
  address: 'Rua Abrahão Rahal, 14-29',
  neighborhood: 'Vila Universitária',
  city: 'Bauru, SP',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Rua+Abrahao+Rahal+14-29+Bauru+SP',
  hours: 'Terça a Sábado das 09h às 19h',
  satisfactionRate: '99.4%',
  servicesCount: '+18.000',
  years: '15 anos',
};

export const SERVICES: ServiceItem[] = [
  // 1. Cabeleireiro & Alinhamento
  {
    id: 'alinhamento-capilar-organico',
    name: 'Alinhamento Capilar Orgânico & Brilho Espelhado',
    category: 'cabeleireiro',
    categoryLabel: 'Cabeleireiro & Alinhamento',
    shortDesc: 'Alinhamento térmico orgânico sem formol, reduz volume e frizz, conferindo brilho espelhado e balanço solto.',
    fullDesc: 'O serviço de maior sucesso da Fio a Fio em Bauru. Fórmula tecnológica e orgânica enriquecida com queratina vegetal, óleos nobres e aminoácidos essenciais. Alinha a estrutura dos fios sem agredir a fibra, sem cheiro forte e sem ardência nos olhos, deixando o cabelo com caimento liso natural e brilho vitrificado imediato.',
    duration: '2h a 3h',
    frequency: 'Manutenção a cada 3 a 5 meses',
    benefits: [
      'Cabelo liso, alinhado e com toque aveludado',
      '100% livre de formol ou químicos tóxicos',
      'Praticidade matinal: fios prontos apenas secando com ar morno',
      'Selamento da cutícula com brilho espelhado que reflete a luz'
    ],
    recommendedFor: ['Cabelos com frizz rebelde', 'Fios ondulados ou volumosos', 'Quem busca praticidade no dia a dia'],
    careNotes: 'Utilizar shampoo com pH fisiológico sem sal e protetor térmico antes do secador.'
  },
  {
    id: 'mechas-iluminadas-loiro',
    name: 'Mechas Iluminadas & Morena Iluminada com Proteção Plex',
    category: 'cabeleireiro',
    categoryLabel: 'Cabeleireiro & Alinhamento',
    shortDesc: 'Técnicas personalizadas de morena iluminada, balayage e loiros elegantes com máxima preservação da saúde dos fios.',
    fullDesc: 'Colorimetria avançada planejada sob medida para harmonizar com seu subtom de pele e estilo. Realizamos teste de mecha rigoroso e utilizamos protetores plex em todas as etapas para manter a elasticidade, maciez e força da fibra capilar.',
    duration: '3h a 4h30',
    frequency: 'Retoque semestral ou anual',
    benefits: [
      'Iluminação estratégica que valoriza o corte e o contorno do rosto',
      'Preservação da massa capilar e resistência dos fios',
      'Transição suave sem marcas ou linhas demarcadas'
    ],
    recommendedFor: ['Mudança de visual sofisticada', 'Mulheres que buscam luminosidade sem ficarem escravas de raiz'],
    careNotes: 'Intercalar máscaras de nutrição e reconstrução pós-química semanalmente.'
  },
  {
    id: 'corte-visagista-feminino',
    name: 'Corte Feminino Visagista & Escova Modelada',
    category: 'cabeleireiro',
    categoryLabel: 'Cabeleireiro & Alinhamento',
    shortDesc: 'Cortes personalizados (bob moderno, em camadas, long bob) para valorizar os traços do seu rosto.',
    fullDesc: 'Mais que um corte, uma consultoria de visagismo que leva em conta a textura do seu cabelo, formato do rosto e rotina pessoal. Finalizado com higienização especial, tratamento instantâneo de brilho e escova modelada luxuosa.',
    duration: '1h',
    frequency: 'Manutenção a cada 60 a 90 dias',
    benefits: [
      'Harmonização das proporções faciais',
      'Leveza, caimento e movimento natural aos fios',
      'Remoção de pontas duplas e ressecadas mantendo o comprimento'
    ],
    recommendedFor: ['Quem deseja renovar o estilo', 'Pontas afinadas que precisam de densidade'],
    careNotes: 'Use óleo reparador de pontas diariamente nas extremidades dos fios.'
  },
  {
    id: 'penteados-noivas-festas',
    name: 'Penteados Sofisticados para Noivas, Madrinhas e Eventos',
    category: 'cabeleireiro',
    categoryLabel: 'Cabeleireiro & Alinhamento',
    shortDesc: 'Coques clássicos e polidos, semi-presos românticos e ondas hollywoodianas com alta durabilidade.',
    fullDesc: 'Criações autorais para datas inesquecíveis. Preparação capilar com produtos de alta fixação que garantem que seu penteado permaneça impecável do início da cerimônia até o final da festa, mesmo em dias quentes ou úmidos.',
    duration: '1h 30min',
    frequency: 'Ocasiões especiais e festividades',
    benefits: [
      'Estruturação firme sem rigidez aparente',
      'Acabamento polido e sofisticado de alta joalheria',
      'Atendimento pontual para você aproveitar seu dia com tranquilidade'
    ],
    recommendedFor: ['Noivas, formandas, debutantes e madrinhas de casamento'],
    careNotes: 'Lavar os cabelos apenas com shampoo neutro no dia anterior ao evento.'
  },

  // 2. Manicure & Pedicure
  {
    id: 'alongamento-fibra-vidro',
    name: 'Alongamento em Fibra de Vidro Slim & Natural',
    category: 'manicure',
    categoryLabel: 'Manicure & Pedicure',
    shortDesc: 'Estruturação fina com fibra de vidro que proporciona formato perfeito, resistência incomparável e visual ultra natural.',
    fullDesc: 'O serviço de unhas assinatura da Fio a Fio! Utiliza filamentos de fibra de vidro de alta pureza moldados sobre a lâmina natural. O resultado é uma unha fina, com curvatura C perfeita e sem aspecto grosso, garantindo mãos elegantes que não quebram nas tarefas cotidianas.',
    duration: '2h',
    frequency: 'Manutenção a cada 20 a 28 dias',
    benefits: [
      'Unhas longas, resistentes e com acabamento imperceptível',
      'Resistência superior a impactos mecânicos e digitação',
      'Cutilagem limpa sem cortes ou repuxados',
      'Liberdade para escolher formatos: almond, quadrada, ballerina ou stiletto'
    ],
    recommendedFor: ['Unhas fracas, roídas ou que lascam fácil', 'Mulheres que necessitam de mãos sempre impecáveis'],
    careNotes: 'Hidratar as cutículas com óleo vegetal e não utilizar as unhas como ferramentas.'
  },
  {
    id: 'esmaltacao-em-gel',
    name: 'Esmaltação em Gel de Longa Duração (Até 25 Dias)',
    category: 'manicure',
    categoryLabel: 'Manicure & Pedicure',
    shortDesc: 'Secagem instantânea na cabine UV/LED com brilho vítreo que não descasca, risca ou perde o brilho.',
    fullDesc: 'Perfeito para quem não tem tempo de fazer as unhas toda semana. A esmaltação em gel seca instantaneamente na cabine UV/LED, permitindo mexer na bolsa, colocar sapatos ou digitar no celular imediatamente após o término do atendimento, sem risco de borrar.',
    duration: '1h 15min',
    frequency: 'Manutenção a cada 20 a 25 dias',
    benefits: [
      'Secagem imediata 100% na cabine UV/LED',
      'Brilho vítreo espelhado durante todas as semanas',
      'Proteção extra contra quebra da unha natural'
    ],
    recommendedFor: ['Rotina corrida, viagens, formaturas e dia a dia'],
    careNotes: 'Não arrancar o esmalte com os dentes; a remoção correta é feita com profissional no salão.'
  },
  {
    id: 'spa-dos-pes-pedicure',
    name: 'Spa dos Pés Relaxante & Pedicure Completa',
    category: 'manicure',
    categoryLabel: 'Manicure & Pedicure',
    shortDesc: 'Higienização aromática, esfoliação com sais marinhos, remoção de asperezas, hidratação parafínica e massagem podal.',
    fullDesc: 'Uma experiência de puro alívio e renovação para os pés. Envolve imersão em água morna com sais calmantes, esfoliação suave para renovação celular, cutilagem técnica, máscara ultra-hidratante e massagem relaxante na sola e panturrilha.',
    duration: '1h',
    frequency: 'A cada 15 a 20 dias',
    benefits: [
      'Pés macios como seda, livres de calosidades e ressecamentos',
      'Alívio das tensões acumuladas da semana',
      'Esmaltação perfeita nas unhas dos pés'
    ],
    recommendedFor: ['Pés ressecados, quem usa muito salto ou fica em pé por longos períodos'],
    careNotes: 'Aplicar creme hidratante nos pés antes de deitar para prolongar a maciez.'
  },

  // 3. Maquiagem Profissional
  {
    id: 'maquiagem-social-festas',
    name: 'Maquiagem Social para Festas & Formaturas',
    category: 'maquiagem',
    categoryLabel: 'Maquiagem Profissional',
    shortDesc: 'Pele blindada de alta resistência, acabamento aveludado e realce sofisticado do olhar para fotos e eventos.',
    fullDesc: 'Técnica de maquiagem profissional com pele blindada que resiste ao calor, suor e lágrimas. Utilizamos produtos de padrão internacional (MAC, Atelier Paris, NARS, Dior) para valorizar sua beleza natural sem criar aspecto de máscara pesada.',
    duration: '1h 15min',
    frequency: 'Festas, jantares, formaturas e eventos corporativos',
    benefits: [
      'Pele resistente à prova de água e atrito',
      'Fotogênica tanto na luz do dia quanto em fotos com flash profissional',
      'Aplicação de cílios postiços confortáveis e sob medida'
    ],
    recommendedFor: ['Formandas, madrinhas, convidadas de casamento e aniversariantes'],
    careNotes: 'Retirar com cleansing oil ou demaquilante bifásico suave.'
  },
  {
    id: 'producao-noivas-madrinhas',
    name: 'Produção Completa Noiva & Madrinha dos Sonhos',
    category: 'maquiagem',
    categoryLabel: 'Maquiagem Profissional',
    shortDesc: 'Consultoria de beleza com prévia e dia da noiva exclusivo no studio com sala climatizada.',
    fullDesc: 'Atendimento prioritário e relaxante para o dia mais especial da sua vida. Inclui teste de maquiagem prévio, preparação dermocosmética da pele e acompanhamento para colocação do véu e grinalda.',
    duration: '2h a 3h',
    frequency: 'Casamentos e cerimônias religiosas',
    benefits: [
      'Tranquilidade absoluta no cronograma do seu grande dia',
      'Sala exclusiva e aconchegante para fotos de making of',
      'Durabilidade de mais de 16 horas intacta'
    ],
    recommendedFor: ['Noivas que exigem perfeição e pontualidade em Bauru'],
    careNotes: 'Agendar com pelo menos 60 dias de antecedência para garantir a data.'
  },

  // 4. Depilação Especializada
  {
    id: 'depilacao-cera-suave',
    name: 'Depilação Feminina com Cera Suave e Hipoalergênica',
    category: 'depilacao',
    categoryLabel: 'Depilação Suave',
    shortDesc: 'Método rápido, suave e 100% descartável, com cera de mel e própolis que reduz o desconforto e hidrata a pele.',
    fullDesc: 'Nosso protocolo de depilação é conduzido com rigor absoluto de higiene. Todo o material é descartável, a cera possui temperatura morna agradável que dilata os poros suavemente, extraindo os pelos desde a raiz com menos dor e retardando o crescimento.',
    duration: '30min a 1h',
    frequency: 'A cada 20 a 30 dias',
    benefits: [
      'Extração do pelo pela raiz com afinamento progressivo',
      'Pele lisa, macia e sem irritações',
      'Biossegurança máxima com espátulas e lençóis descartáveis'
    ],
    recommendedFor: ['Pernas, virilha, axilas e buço'],
    careNotes: 'Evitar sol direto e roupas apertadas nas primeiras 24 horas.'
  },
  {
    id: 'design-sobrancelhas-facial',
    name: 'Design de Sobrancelhas Personalizado & Depilação Facial',
    category: 'depilacao',
    categoryLabel: 'Depilação Suave',
    shortDesc: 'Mapeamento geométrico das sobrancelhas para valorizar a simetria facial e depilação suave de buço.',
    fullDesc: 'Desenho sob medida respeitando a anatomia natural das suas sobrancelhas. Retira os pelos com pinça de precisão ou linha/cera calmante, realçando a expressividade do olhar com harmonia.',
    duration: '40 min',
    frequency: 'A cada 15 a 20 dias',
    benefits: [
      'Olhar marcante e simetria harmônica',
      'Sem afinamento excessivo das sobrancelhas',
      'Remoção delicada da penugem do buço'
    ],
    recommendedFor: ['Alinhamento do olhar e limpeza facial'],
    careNotes: 'Usar protetor solar na região do buço para prevenir manchinhas.'
  }
];

export const BEFORE_AFTER_ITEMS: BeforeAfterItem[] = [
  {
    id: 'ba-cabelo-alinhamento',
    title: 'Alinhamento Capilar Orgânico & Brilho Espelhado',
    category: 'cabeleireiro',
    categoryLabel: 'Cabeleireiro & Alinhamento',
    serviceName: 'Alinhamento Capilar Orgânico + Tratamento de Nutrição',
    description: 'Transformação real realizada no salão Fio a Fio Bauru. Cabelos com pontas ressecadas, frizz, porosidade e ondulação desalinhada transformados em fios completamente selados, lisos com balanço natural e reflexo espelhado da raiz às pontas.',
    timeframe: 'Sessão de 2h 30min',
    beforeLabel: 'Antes: Fios porosos, frizz rebelde e pontas ressecadas',
    afterLabel: 'Depois: Liso impecável, cutículas seladas e brilho vitrificado',
    beforeDetails: [
      'Porosidade e pontas com aspecto ressecado',
      'Frizz e volume desordenado',
      'Dificuldade para secar e pentear no dia a dia'
    ],
    afterDetails: [
      'Fios 100% alinhados com caimento fluido e leve',
      'Brilho espelhado que reflete a iluminação',
      'Liso prático apenas secando com ar do secador'
    ],
    visualType: 'hair'
  },
  {
    id: 'ba-unhas-alongamento',
    title: 'Alongamento em Fibra de Vidro & Esmaltação Magenta Luxo',
    category: 'manicure',
    categoryLabel: 'Manicure & Pedicure',
    serviceName: 'Fibra de Vidro Slim + Esmaltação em Gel Magenta',
    description: 'Transformação real das mãos na Fio a Fio Bauru. Unhas curtas e sem esmaltação transformadas em unhas alongadas com fibra de vidro ultrafina, cutilagem milimétrica e esmaltação magenta vibrante com brilho espelhado duradouro.',
    timeframe: 'Sessão de 2h',
    beforeLabel: 'Antes: Unhas curtas naturais, lâminas irregulares e cutículas ásperas',
    afterLabel: 'Depois: Alongamento fino em fibra, cutilagem perfeita e cor magenta intensa',
    beforeDetails: [
      'Unhas curtas com lâminas irregulares',
      'Cutículas ressecadas e sem contorno definido',
      'Unhas quebradiças que não conseguiam crescer'
    ],
    afterDetails: [
      'Alongamento estruturado com espessura fina e natural',
      'Esmaltação em gel magenta de alta joalheria',
      'Durabilidade de até 25 dias sem lascar nem perder o brilho'
    ],
    visualType: 'nails'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    name: 'Camila Guimarães',
    role: 'Cliente em Bauru',
    avatarText: 'CG',
    service: 'Alinhamento Capilar Orgânico & Corte',
    category: 'cabeleireiro',
    stars: 5,
    timeAsClient: 'Cliente há 5 anos',
    quote: 'Fiz o alinhamento orgânico na Fio a Fio e minha vida mudou! Meus cabelos secam alinhados sozinhos em 10 minutos, com um brilho que todo mundo elogia. A foto do antes e depois do meu cabelo mostra exatamente a qualidade do trabalho da equipe. Há 15 anos são as melhores de Bauru!',
    verified: true
  },
  {
    id: 't-2',
    name: 'Beatriz Silveira',
    role: 'Cliente em Bauru',
    avatarText: 'BS',
    service: 'Alongamento em Fibra de Vidro & Esmaltação em Gel',
    category: 'manicure',
    stars: 5,
    timeAsClient: 'Cliente há 7 anos',
    quote: 'Minhas unhas viviam quebrando e eu tinha vergonha de mostrar as mãos. Com a fibra de vidro da Fio a Fio e o esmalte em gel magenta, minhas unhas duram quase um mês intactas! Ficam finas e super naturais, sem parecer postiças.',
    verified: true
  },
  {
    id: 't-3',
    name: 'Marina Prado',
    role: 'Cliente em Bauru',
    avatarText: 'MP',
    service: 'Produção Completa: Cabelo & Maquiagem Social',
    category: 'maquiagem',
    stars: 5,
    timeAsClient: 'Cliente há 3 anos',
    quote: 'Fui madrinha de casamento e fiz cabelo e maquiagem na Fio a Fio. A maquiagem durou a festa inteira, chorei na cerimônia e não borrou nada! O ambiente na Rua Abrahão Rahal é super gostoso, com café quentinho e pontualidade britânica.',
    verified: true
  },
  {
    id: 't-4',
    name: 'Fernanda Alencar',
    role: 'Cliente em Bauru',
    avatarText: 'FA',
    service: 'Depilação Suave & Spa dos Pés',
    category: 'depilacao',
    stars: 5,
    timeAsClient: 'Cliente há 2 anos',
    quote: 'A depilação é extremamente cuidadosa, não machuca e a cera é muito suave. O spa dos pés é maravilhoso para quem passa o dia todo de sapato fechado. Atendimento carinhoso e profissional!',
    verified: true
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'cuidados-cabelo-alinhado',
    title: 'Como manter o alinhamento capilar brilhante e sem frizz por até 5 meses',
    summary: 'Aprenda os segredos das nossas cabeleireiras para prolongar o efeito liso espelhado e a hidratação dos fios em casa.',
    category: 'Cabelos & Alinhamento',
    readTime: '3 min de leitura',
    date: 'Setembro 2026',
    author: 'Equipe Fio a Fio',
    authorRole: 'Especialistas em Cabelos & Visagismo',
    content: [
      'Após fazer um alinhamento capilar orgânico no salão, as cutículas dos fios estão perfeitamente seladas. Para manter esse resultado espelhado por meses, os cuidados no banho são cruciais.',
      'O primeiro passo é utilizar shampoos com pH fisiológico (entre 4.5 e 5.5) e livres de sulfatos pesados, que preservam o tratamento dentro do córtex capilar sem abrir as cutículas precocemente.',
      'Nunca dispense o protetor térmico: mesmo que o cabelo seque alinhado naturalmente, o calor do secador ativa as partículas de brilho do alinhamento sem causar quebra térmica.',
      'Uma vez por semana, faça uma máscara de nutrição rica em manteiga de murumuru ou óleo de argan para repor os lipídios perdidos na lavagem diária.'
    ],
    keyTips: [
      'Seque os fios sempre de cima para baixo na direção da cutícula',
      'Use fronha de cetim para evitar o atrito e frizz noturno',
      'Aplique 2 gotinhas de óleo reparador nas pontas pela manhã e antes de dormir',
      'Evite prender os fios muito apertados com elásticos de borracha'
    ],
    relatedServiceId: 'alinhamento-capilar-organico'
  },
  {
    id: 'durabilidade-unhas-fibra',
    title: 'Alongamento em fibra de vidro: o que você precisa saber para durar até 28 dias',
    summary: 'Dicas práticas para manter suas unhas alongadas e esmaltadas sempre perfeitas, resistentes e sem descolamentos.',
    category: 'Manicure & Unhas',
    readTime: '4 min de leitura',
    date: 'Agosto 2026',
    author: 'Nail Designers Fio a Fio',
    authorRole: 'Especialistas em Fibra de Vidro & Gel',
    content: [
      'A fibra de vidro é hoje a técnica mais procurada no nosso studio de beleza em Bauru por unir extrema resistência com espessura ultrafina e natural.',
      'Para garantir que seu alongamento não descole, evite usar as unhas para abrir latas, caixas ou raspar etiquetas. A unha alongada deve ser tratada como uma joia, não como uma chave de fenda.',
      'Ao lavar louça ou manipular produtos de limpeza com cloro e alvejantes, utilize luvas de borracha. Os solventes químicos agridem a camada de top coat em gel e enfraquecem a estrutura da fibra.',
      'Mantenha as cutículas hidratadas com óleo mineral ou ceras nutritivas: isso evita ressecamento, pelezinhas soltas e mantém o contorno das unhas impecável.'
    ],
    keyTips: [
      'Não puxe nem tente arrancar o alongamento com os dentes',
      'Faça a manutenção rigorosamente no intervalo de 20 a 28 dias',
      'Use luvas em tarefas domésticas pesadas',
      'Passe óleo de cutículas diariamente antes de dormir'
    ],
    relatedServiceId: 'alongamento-fibra-vidro'
  },
  {
    id: 'maquiagem-blindada-durabilidade',
    title: 'Os segredos da maquiagem blindada: como fazer sua produção durar a festa toda',
    summary: 'Entenda como nossa técnica de pele blindada resiste ao calor de Bauru, lágrimas de emoção e horas na pista de dança.',
    category: 'Maquiagem Profissional',
    readTime: '3 min de leitura',
    date: 'Julho 2026',
    author: 'Maquiadoras Fio a Fio',
    authorRole: 'Studio de Beleza Bauru',
    content: [
      'A preparação da pele é 80% do sucesso de uma maquiagem de festa. No Studio Fio a Fio, começamos higienizando, tonificando e aplicando hidratantes de alta permeabilidade que não deixam a pele oleosa.',
      'Em seguida, utilizamos blindagens cosméticas e fixadores termoprotetores que criam um filme impermeável sobre a base e o corretivo.',
      'O resultado é uma maquiagem fotogênica em fotos com flash, que não craquela nas linhas finas e permanece intacta mesmo se você dançar a noite inteira.'
    ],
    keyTips: [
      'Beba bastante água na semana do evento para a pele estar viçosa',
      'Não faça depilação no buço no mesmo dia da maquiagem',
      'Tenha em mãos um lencinho antioleosidade para apenas encostar suavemente'
    ],
    relatedServiceId: 'maquiagem-social-festas'
  },
  {
    id: 'depilacao-suave-sem-dor',
    title: 'Depilação com cera suave: como evitar pelos encravados e manter a pele de seda',
    summary: 'Descubra a rotina de cuidados pré e pós-depilação que reduz o desconforto e deixa sua pele macia por semanas.',
    category: 'Depilação Suave',
    readTime: '3 min de leitura',
    date: 'Junho 2026',
    author: 'Depiladoras Fio a Fio',
    authorRole: '15 Anos de Tradição',
    content: [
      'A depilação na Fio a Fio é feita com cera natural morna e descartável, desenvolvida com ativos de mel e própolis que acalmam a pele na hora da extração.',
      'Para evitar foliculite (pelos encravados), faça uma esfoliação suave na região 3 dias antes do atendimento. Isso remove células mortas e facilita a saída do pelo pela raiz.',
      'Após a sessão, evite água muito quente no banho e roupas justas que causem atrito nas primeiras 24 horas.'
    ],
    keyTips: [
      'Esfolie a pele 3 dias antes, nunca no dia da depilação',
      'Evite desodorantes com álcool nas primeiras 24h após depilar axilas',
      'Mantenha a pele hidratada com loções calmantes de camomila ou babosa'
    ],
    relatedServiceId: 'depilacao-cera-suave'
  }
];

export const FAQS: FAQItem[] = [
  {
    question: 'Quais serviços são oferecidos no Fio a Fio Studio de Beleza?',
    answer: 'Somos um studio de beleza completo especializado em 4 áreas principais: Cabeleireiro (cortes visagistas, alinhamento capilar orgânico, mechas e penteados), Manicure e Pedicure (alongamento em fibra de vidro, esmaltação em gel e spa dos pés), Maquiagem Profissional (social e noivas) e Depilação Feminina com cera suave 100% descartável.',
    category: 'Serviços'
  },
  {
    question: 'Como funciona o agendamento rápido via WhatsApp?',
    answer: 'Você escolhe o serviço desejado em nosso formulário interativo, seleciona o dia e turno de preferência (manhã ou tarde) e clica no botão "Agendar no WhatsApp". Nosso sistema já prepara uma mensagem pronta e direciona você diretamente para a conversa com nossa recepcionista no número (14) 99671-1716 para confirmar o horário.',
    category: 'Agendamento'
  },
  {
    question: 'O alinhamento capilar contém formol?',
    answer: 'Não! Nosso alinhamento é totalmente orgânico e livre de formol. Ele reconstrói e alinha a fibra capilar sem agredir sua saúde, sem cheiro forte e sem incômodo nos olhos, deixando o cabelo com caimento liso e brilho espelhado deslumbrante.',
    category: 'Cabeleireiro'
  },
  {
    question: 'Quanto tempo dura o alongamento de unhas em fibra de vidro?',
    answer: 'Com a manutenção correta realizada a cada 20 a 28 dias, o alongamento em fibra de vidro dura indefinidamente! A esmaltação em gel mantém o brilho espelhado e a cor intacta durante todas as semanas sem descascar.',
    category: 'Manicure'
  },
  {
    question: 'Onde o Studio Fio a Fio está localizado em Bauru?',
    answer: 'Estamos na Rua Abrahão Rahal, 14-29, no bairro Vila Universitária em Bauru (SP). Contamos com ambiente climatizado, café quentinho, atendimento com hora marcada e facilidade para estacionar nas imediações.',
    category: 'Localização'
  },
  {
    question: 'Quais são as formas de pagamento aceitas?',
    answer: 'Aceitamos Pix, cartões de crédito (com possibilidade de parcelamento dependendo do valor) e cartões de débito.',
    category: 'Pagamentos'
  }
];
