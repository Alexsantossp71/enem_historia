export interface Lesson {
  slug: string;
  title: string;
  module: string;
  moduleColor: string;
  content: string;
  contoLink?: string;
}

export const lessons: Lesson[] = [
  {
    slug: 'pre-historia',
    title: 'Pré-História',
    module: 'História Geral',
    moduleColor: '#3b82f6',
    contoLink: '/contos/conto_pre_historia.html',
    content: `
## O que é a Pré-História?

A Pré-História é o período da história humana que antecede o surgimento da escrita, aproximadamente entre 4 milhões de anos atrás até cerca de 4000 a.C. Este período é fundamental para compreendermos a evolução da humanidade e o desenvolvimento das primeiras sociedades.

## Períodos da Pré-História

### Paleolítico (Idade da Pedra Lascada)

O Paleolítico é o período mais longo da história humana, durando cerca de 99% de toda a existência da humanidade. Durante este período, os humanos eram nômades, vivendo da caça, pesca e coleta de frutos. As principais características incluem:

- **Modo de vida nômade**: Os grupos humanos se deslocavam constantemente em busca de alimentos
- **Instrumentos de pedra lascada**: Ferramentas rudimentares feitas batendo uma pedra contra outra
- **Descoberta do fogo**: Uma das mais importantes conquistas humanas, permitindo cozinhar alimentos, se aquecer e afugentar animais
- **Arte rupestre**: Pinturas em cavernas representando animais e cenas de caça
- **Organização social em bandos**: Grupos pequenos e familiares

### Neolítico (Idade da Pedra Polida)

O Neolítico representa uma revolução no modo de vida humano, com o surgimento da agricultura e da pecuária, por volta de 10.000 a.C. Este período é marcado por:

- **Revolução Neolítica**: Transição da coleta para a produção de alimentos
- **Sedentarização**: Fixação em aldeias e vilas
- **Domesticação de animais**: Cabras, ovelhas, bois e porcos
- **Desenvolvimento da cerâmica**: Utensílios para armazenar alimentos
- **Tecelagem**: Produção de tecidos para vestuário
- **Comércio inicial**: Troca de produtos entre comunidades

### Idade dos Metais

A Idade dos Metais marca o início do trabalho com metais, dividida em três fases:

- **Idade do Cobre**: Primeiro metal trabalhado pelo homem
- **Idade do Bronze**: Liga de cobre e estanho, mais resistente
- **Idade do Ferro**: Metal mais resistente, revolucionou a produção de armas e ferramentas

## Dicas para o ENEM

1. Compreenda a diferença entre modo de vida nômade e sedentário
2. Entenda a importância da Revolução Neolítica para o surgimento das civilizações
3. Relacione as descobertas técnicas com as transformações sociais
4. Conheça as principais teorias sobre o povoamento da América
    `
  },
  {
    slug: 'civilizacoes-antigas',
    title: 'Civilizações Antigas',
    module: 'História Geral',
    moduleColor: '#3b82f6',
    contoLink: '/contos/conto_civilizacoes_antigas.html',
    content: `
## As Primeiras Civilizações

As primeiras civilizações surgiram em regiões de vales fluviais, onde as condições naturais favoreciam o desenvolvimento da agricultura e a fixação de populações. Essas civilizações são chamadas de "civilizações hidráulicas" devido à dependência dos rios para irrigação.

## Mesopotâmia

A Mesopotâmia ("terra entre rios") localizava-se entre os rios Tigre e Eufrates, na região do atual Iraque. Esta civilização desenvolveu-se através de diferentes povos:

### Sumérios
- Criaram a escrita cuneiforme
- Desenvolveram as primeiras cidades-estado (Ur, Uruk, Lagash)
- Construíram zigurates (templos em forma de torre)

### Babilônios
- Código de Hamurabi: um dos primeiros códigos de leis escritos
- Desenvolveram a matemática e a astronomia

### Assírios
- Conhecidos pelo poderio militar
- Estabeleceram um grande império

## Egito Antigo

O Egito desenvolveu-se às margens do rio Nilo, cujas cheias periódicas fertilizavam o solo. A sociedade egípcia era altamente estruturada:

### Organização Política
- O Faraó era considerado um deus vivo
- Governo teocrático e centralizado
- Burocracia complexa com escribas e funcionários

### Religião e Cultura
- Politeísmo com deuses como Rá, Ísis, Osíris e Anúbis
- Acreditavam na vida após a morte
- Mumificação e construção de pirâmides

## Dicas para o ENEM

1. Compare as diferentes formas de organização política
2. Entenda a relação entre religião e poder político
3. Reconheça as contribuições de cada civilização para a humanidade
4. Analise as diferenças entre as sociedades hidráulicas
    `
  },
  {
    slug: 'idade-antiga-grecia',
    title: 'Idade Antiga - Grécia',
    module: 'História Geral',
    moduleColor: '#3b82f6',
    contoLink: '/contos/conto_grecia.html',
    content: `
## A Civilização Grega

A Grécia Antiga desenvolveu-se na península Balcânica e nas ilhas do Mar Egeu, entre os séculos VIII e I a.C. A geografia montanhosa favoreceu o surgimento de cidades-estado independentes, as pólis.

## Períodos da História Grega

### Período Homérico (séculos XII-VIII a.C.)
- Desenvolvimento após a invasão dórica
- Sociedade gentílica baseada em clãs familiares
- Economia agrícola e pastoril

### Período Arcaico (séculos VIII-VI a.C.)
- Formação das pólis
- Colonização grega pelo Mediterrâneo
- Desenvolvimento da escrita alfabética
- Surgimento da tirania

### Período Clássico (séculos V-IV a.C.)
- Era de ouro da Grécia
- Apogeu de Atenas sob Péricles
- Guerras Pérsicas e Guerras do Peloponeso
- Desenvolvimento da filosofia, arte e democracia

## A Democracia Ateniense

A democracia ateniense desenvolveu-se em várias etapas:

1. **Drácon**: Primeiro código de leis escrito
2. **Sólon**: Reformas sociais e políticas
3. **Clístenes**: Base da democracia (século VI a.C.)
4. **Péricles**: Apogeu da democracia (século V a.C.)

Características da democracia ateniense:
- Participação direta dos cidadãos
- Assembleia (Eclésia) como órgão principal
- Sorteio para cargos públicos
- Exclusão de mulheres, estrangeiros e escravos

## Dicas para o ENEM

1. Compare democracia ateniense com a moderna
2. Entenda as diferenças entre Atenas e Esparta
3. Analise o legado cultural grego para o ocidente
4. Relacione filosofia grega com valores contemporâneos
    `
  },
  {
    slug: 'idade-antiga-roma',
    title: 'Idade Antiga - Roma',
    module: 'História Geral',
    moduleColor: '#3b82f6',
    contoLink: '/contos/conto_roma.html',
    content: `
## A Civilização Romana

Roma foi uma das maiores civilizações da antiguidade, cujo império dominou todo o Mediterrâneo e grande parte da Europa. A civilização romana exerceu profunda influência no desenvolvimento do mundo ocidental.

## Períodos da História Romana

### Monarquia (753-509 a.C.)
- Governada por reis
- Sociedade patriarcal
- Desenvolvimento inicial da cidade

### República (509-27 a.C.)
- Governo baseado no Senado e magistraturas
- Conquista da península Itálica e Mediterrâneo
- Conflitos entre patrícios e plebeus
- Guerras Púnicas contra Cartago

### Império (27 a.C.-476 d.C.)
- Poder centralizado no imperador
- Pax Romana (séculos I e II)
- Cristianismo e crise do século III
- Divisão do império e queda do Ocidente

## O Cristianismo

O cristianismo surgiu no século I na Palestina e se expandiu pelo império:
- Perseguido inicialmente
- Constantino: Edito de Milão (313 d.C.) - liberdade religiosa
- Teodósio: Cristianismo como religião oficial (391 d.C.)

## Legado Romano

- Direito romano: base do direito moderno
- Latim: origem das línguas românicas
- Arquitetura e engenharia: estradas, aquedutos
- Cristianismo: religião difundida pela Europa

## Dicas para o ENEM

1. Entenda a evolução política de Roma
2. Compare república romana com ateniense
3. Analise os fatores da queda do império
4. Reconheça o legado romano para o mundo atual
    `
  },
  {
    slug: 'idade-media',
    title: 'Idade Média',
    module: 'História Geral',
    moduleColor: '#3b82f6',
    contoLink: '/contos/conto_idade_media.html',
    content: `
## A Idade Média

A Idade Média é o período histórico compreendido entre a queda do Império Romano do Ocidente (476 d.C.) e a queda de Constantinopla (1453 d.C.), marca do início da Idade Moderna.

## Alta Idade Média (séculos V-X)

### Os Reinos Germânicos
Após a queda de Roma, os povos germânicos fundaram reinos na Europa:
- **Reino dos Francos**: Dinastia merovíngia e carolíngia
- **Reino Visigodo**: Península Ibérica
- **Reino Ostrogodo**: Itália

### O Feudalismo
O feudalismo desenvolveu-se como sistema político, econômico e social:
- **Suserania e vassalagem**: Relações de dependência pessoal
- **Modo de produção feudal**: Economia agrária e autossuficiente
- **Estamentos sociais**: Clero, nobreza e servos

## Baixa Idade Média (séculos XI-XV)

### Renascimento Comercial e Urbano
- Reabertura do Mediterrâneo após as Cruzadas
- Surgimento de burgos e cidades
- Desenvolvimento do comércio e feiras
- Surgimento da burguesia

### Cruzadas
Expedições militares cristãs para reconquistar a Terra Santa:
- Oito cruzadas entre 1096 e 1270
- Consequências: abertura de rotas comerciais, contato com o Oriente

## Dicas para o ENEM

1. Compreenda as transformações entre Alta e Baixa Idade Média
2. Entenda o feudalismo como sistema completo
3. Analise o papel da Igreja na sociedade medieval
4. Relacione as mudanças econômicas com o fim do feudalismo
    `
  },
  {
    slug: 'renascimento-reforma',
    title: 'Renascimento e Reforma',
    module: 'História Geral',
    moduleColor: '#3b82f6',
    contoLink: '/contos/conto_renascimento.html',
    content: `
## O Renascimento

O Renascimento foi um movimento cultural que marcou a transição da Idade Média para a Idade Moderna, caracterizado pelo resgate dos valores da cultura clássica greco-romana e pela valorização do ser humano.

## Características do Renascimento

### Humanismo
- Valorização do ser humano como centro do universo (antropocentrismo)
- Racionalismo: confiança na razão humana
- Individualismo: valorização das qualidades individuais

### Resgate da Antiguidade
- Estudo de textos gregos e romanos
- Imitação dos modelos clássicos
- Latim e grego como línguas de cultura

## A Reforma Protestante

A Reforma foi um movimento religioso que dividiu a cristandade ocidental, iniciado por Martinho Lutero em 1517.

## Causas da Reforma

- Corrupção do clero (venda de cargos, luxo)
- Venda de indulgências
- Nacionalismo em oposição ao poder papal
- Desejo de uma religião mais pessoal

## Contrarreforma (Reforma Católica)

A Igreja Católica respondeu com reformas:
- **Concílio de Trento** (1545-1563): Reforma doutrinária
- **Companhia de Jesus** (Jesuítas): Educação e missões
- **Índice de Livros Proibidos**: Censura
- **Inquisição**: Combate à heresia

## Dicas para o ENEM

1. Relacione Renascimento com o surgimento da burguesia
2. Conecte Reforma com o nacionalismo
3. Analise as diferenças entre as vertentes protestantes
4. Entenda o papel da Contrarreforma na colonização
    `
  },
  {
    slug: 'absolutismo-mercantilismo',
    title: 'Absolutismo e Mercantilismo',
    module: 'História Geral',
    moduleColor: '#3b82f6',
    contoLink: '/contos/conto_absolutismo.html',
    content: `
## O Absolutismo

O Absolutismo foi o sistema político predominante na Europa entre os séculos XVI e XVIII, caracterizado pela concentração de poderes nas mãos do rei.

## Características do Absolutismo

### Poder Real
- Poder centralizado e ilimitado
- Rei como representante de Deus na Terra
- Exército permanente sob comando real
- Burocracia estatal

### Teorias Absolutistas

**Jacques Bossuet:**
- Direito divino dos reis
- O rei é ministro de Deus

**Thomas Hobbes:**
- O homem é lobo do homem
- Estado de natureza é guerra
- Contrato social para segurança

## O Mercantilismo

O Mercantilismo foi a política econômica dos estados absolutistas, baseada na intervenção do Estado na economia.

## Princípios do Mercantilismo

### Metalismo
- Acúmulo de metais preciosos (ouro e prata)
- Riqueza medida pela quantidade de metais

### Balança Comercial Favorável
- Exportar mais do que importar
- Superávit comercial

### Protecionismo
- Taxação de importações
- Incentivo às manufaturas nacionais

## Dicas para o ENEM

1. Relacione absolutismo com centralização política
2. Conecte mercantilismo com expansão colonial
3. Analise a relação entre Estado e economia
4. Compare modelos absolutistas entre países
    `
  },
  {
    slug: 'iluminismo',
    title: 'Iluminismo',
    module: 'História Geral',
    moduleColor: '#3b82f6',
    contoLink: '/contos/conto_iluminismo.html',
    content: `
## O Iluminismo

O Iluminismo foi um movimento intelectual e filosófico do século XVIII que defendeu o uso da razão como guia para a sociedade, em oposição ao absolutismo e ao tradicionalismo.

## Características do Iluminismo

### Racionalismo
- Fé na razão como instrumento de conhecimento
- Crítica à superstição e ao dogma religioso

### Naturalismo
- Leis naturais que regem a sociedade
- Direitos naturais do homem

### Progresso
- Crença no aperfeiçoamento da humanidade
- Educação como transformação social

## Principais Pensadores

### John Locke (Inglaterra)
- Direito natural à vida, liberdade e propriedade
- Estado como garantidor de direitos
- Direito de revolta contra tirania

### Montesquieu (França)
- Espírito das Leis
- Tripartição dos poderes (Executivo, Legislativo, Judiciário)
- Freios e contrapesos

### Rousseau (França/Suíça)
- Contrato Social
- Soberania popular
- Vontade geral

## Legado do Iluminismo

- Independência dos EUA
- Revolução Francesa
- Direitos humanos
- Constituições liberais
- Separação dos poderes

## Dicas para o ENEM

1. Relacione iluminismo com revoluções burguesas
2. Compare diferentes pensadores iluministas
3. Analise a aplicação das ideias iluministas
4. Conecte iluminismo com direitos humanos
    `
  },
  {
    slug: 'revolucoes-burguesas',
    title: 'Revoluções Burguesas',
    module: 'História Geral',
    moduleColor: '#3b82f6',
    contoLink: '/contos/conto_revolucoes_burguesas.html',
    content: `
## As Revoluções Burguesas

As revoluções burguesas foram movimentos que derrubaram o Antigo Regime e estabeleceram regimes liberais, representando a ascensão política da burguesia.

## Revolução Inglesa (século XVII)

### Revolução Gloriosa (1688)
- Deposição de Jaime II
- Guilherme de Orange
- Declaração de Direitos
- Monarquia parlamentar

## Independência dos EUA (1776)

### Causas
- Guerra dos Sete Anos e endividamento
- Leis que prejudicavam as colônias
- "Não tributação sem representação"

### Declaração de Independência (1776)

### Constituição Americana (1787)
- Federação de estados
- Tripartição dos poderes
- Bill of Rights

## Revolução Francesa (1789)

### Causas
- Crise econômica e fiscal
- Sociedade estamental privilegiada
- Influência iluminista

### Fases da Revolução

**Fase Constitucional (1789-1792)**
- Estados Gerais e Assembleia Nacional
- Queda da Bastilha (14 de julho)
- Declaração dos Direitos do Homem

**Fase Jacobina (1793-1794)**
- Comitê de Salvação Pública
- Terror: Robespierre

## Dicas para o ENEM

1. Compare as diferentes revoluções burguesas
2. Analise a participação popular em cada revolução
3. Relacione ideias iluministas com revoluções
4. Entenda as consequências do Congresso de Viena
    `
  },
  {
    slug: 'revolucao-industrial',
    title: 'Revolução Industrial',
    module: 'História Geral',
    moduleColor: '#3b82f6',
    contoLink: '/contos/conto_revolucao_industrial.html',
    content: `
## A Revolução Industrial

A Revolução Industrial foi um processo de transformações econômicas, sociais e tecnológicas que substituiu a produção artesanal pela industrial, iniciando-se na Inglaterra no século XVIII.

## Primeira Revolução Industrial (séculos XVIII-XIX)

### Características
- Uso do carvão como fonte de energia
- Máquina a vapor (James Watt)
- Indústria têxtil como setor pioneiro
- Sistema fabril

### Consequências Sociais
- Urbanização acelerada
- Surgimento da classe operária
- Condições precárias de trabalho
- Trabalho infantil e feminino
- Movimentos operários (ludismo, cartismo)

## Segunda Revolução Industrial (século XIX-XX)

### Características
- Novas fontes de energia: petróleo e eletricidade
- Novos materiais: aço e produtos químicos
- Novos setores: automobilístico, elétrico
- Produção em massa (fordismo)

## O Movimento Operário

### Ludismo
- Quebra de máquinas
- Reação ao desemprego

### Sindicalismo
- Organização dos trabalhadores
- Greves e negociações

## Dicas para o ENEM

1. Relacione revolução industrial com capitalismo
2. Analise as condições de vida dos trabalhadores
3. Conecte imperialismo com industrialização
4. Entenda as teorias socialistas
    `
  },
  {
    slug: 'povos-indigenas',
    title: 'Período Pré-Colonial e Povos Indígenas',
    module: 'História do Brasil',
    moduleColor: '#22c55e',
    contoLink: '/contos/conto_povos_indigenas.html',
    content: `
## Os Povos Indígenas do Brasil

Antes da chegada dos portugueses, o território brasileiro era habitado por diversas nações indígenas com culturas, línguas e modos de vida distintos.

## Origens e Povoamento

### Teorias sobre o Povoamento
- Estreito de Bering: migração da Ásia
- Ondas migratórias múltiplas
- Datação: cerca de 12.000 anos

### Diversidade Cultural
- Cerca de 1.000 povos diferentes
- Línguas das famílias Tupi e Jê
- Diferentes níveis de complexidade social

## Principais Povos

### Tupis
- Ocupavam o litoral
- Agricultores itinerantes
- Prática da antropofagia ritual
- Língua mais difundida

### Jês (Tapuias)
- Interior do Brasil
- Caçadores e coletores
- Organização tribal

## Modo de Vida

### Organização Social
- Tribos e aldeias
- Malocas (casas coletivas)
- Caciques (líderes)
- Pajés (líderes espirituais)

### Economia
- Agricultura de coivara
- Caça, pesca e coleta
- Sustentabilidade

## Dicas para o ENEM

1. Valorize a diversidade indígena
2. Analise impactos da colonização
3. Conecte passado com presente
4. Reconheça direitos indígenas
    `
  },
  {
    slug: 'brasil-colonia',
    title: 'Brasil Colônia',
    module: 'História do Brasil',
    moduleColor: '#22c55e',
    contoLink: '/contos/conto_brasil_colonia.html',
    content: `
## O Brasil Colônia (1500-1822)

O período colonial brasileiro foi marcado pela exploração econômica, escravidão africana e formação de uma sociedade hierarquizada.

## Período Pré-Colonial (1500-1530)

### Características
- Exploração do pau-brasil
- Escambo com indígenas
- Feitorias costeiras
- Negligência portuguesa

## Colonização Efetiva (a partir de 1530)

### Sistema de Capitanias Hereditárias
- Divisão em 15 lotes
- Donatários com poderes
- Apenas Pernambuco e São Vicente prosperaram

### Governo-Geral (1549)
- Centralização administrativa
- Tomé de Sousa
- Criação de Salvador
- Jesuítas e catequese

## Economia Colonial

### Açúcar (séculos XVI-XVII)
- Nordeste: Pernambuco e Bahia
- Engenhos
- Latifúndio e monocultura
- Escravidão africana

### Mineração (século XVIII)
- Descoberta do ouro em Minas Gerais
- Interiorização da colonização
- Transferência da capital para RJ

## Dicas para o ENEM

1. Relacione economia com estrutura social
2. Analise o papel da escravidão
3. Compare diferentes regiões coloniais
4. Conecte reformismo com independência
    `
  },
  {
    slug: 'imperio',
    title: 'Império',
    module: 'História do Brasil',
    moduleColor: '#22c55e',
    contoLink: '/contos/conto_imperio.html',
    content: `
## O Brasil Império (1822-1889)

O período imperial foi marcado pela consolidação da independência, centralização política e lenta transição para o trabalho livre.

## Primeiro Reinado (1822-1831)

### Independência
- Dia do Fico (1822)
- Grito do Ipiranga
- Reconhecimento internacional

### Constituição de 1824
- Constituição outorgada
- Quatro poderes (incluindo Moderador)
- Senado vitalício

## Período Regencial (1831-1840)

### Rebeliões
- Cabanagem (Pará)
- Balaiada (Maranhão)
- Farroupilha (Rio Grande do Sul)
- Sabinada (Bahia)

## Segundo Reinado (1840-1889)

### Questão Escravista
- Tráfico negreiro (fim em 1850)
- Lei do Ventre Livre (1871)
- Lei dos Sexagenários (1885)
- Lei Áurea (1888)

## Proclamação da República (1889)

- 15 de novembro de 1889
- Marechal Deodoro da Fonseca

## Dicas para o ENEM

1. Compare Primeiro e Segundo Reinado
2. Analise as rebeliões regenciais
3. Relacione economia com política
4. Conecte abolição com República
    `
  },
  {
    slug: 'republica-velha',
    title: 'República Velha',
    module: 'História do Brasil',
    moduleColor: '#22c55e',
    contoLink: '/contos/conto_republica_velha.html',
    content: `
## A República Velha (1889-1930)

O primeiro período republicano foi marcado pela hegemonia das oligarquias cafeicultoras e pelo coronelismo.

## República da Espada (1889-1894)

### Governo Provisório
- Marechal Deodoro da Fonseca
- Decretos republicanos
- Separação Igreja-Estado

### Constituição de 1891
- Federalismo
- Três poderes
- Eleição indireta

## Política do Café com Leite

### Oligarquias
- São Paulo (café)
- Minas Gerais (leite)
- Alternância no poder

### Coronelismo
- Poder local dos coronéis
- Voto de cabresto
- Mandonismo

## Movimentos Sociais

### Guerra de Canudos (1896-1897)
- Antônio Conselheiro
- Comunidade sertaneja
- Massacre militar

### Revolta da Vacina (1904)
- Rio de Janeiro
- Oposição à vacinação obrigatória

## Revolução de 1930

- 3 de outubro de 1930
- Fim da República Velha

## Dicas para o ENEM

1. Analise o coronelismo e suas bases
2. Relacione economia com política
3. Conecte movimentos sociais com exclusão
4. Entenda a crise do sistema oligárquico
    `
  },
  {
    slug: 'era-vargas',
    title: 'Era Vargas',
    module: 'História do Brasil',
    moduleColor: '#22c55e',
    contoLink: '/contos/conto_era_vargas.html',
    content: `
## A Era Vargas (1930-1945)

O período varguista foi marcado pela centralização política, industrialização e construção de uma sociedade urbano-industrial.

## Governo Provisório (1930-1934)

### Revolução de 1930
- Fim da República Velha
- Interventores nos estados
- Primeiras leis trabalhistas

## Estado Novo (1937-1945)

### Características
- Centralização autoritária
- DOPS (repressão)
- Censura
- Culto a Vargas

### Política Econômica
- CSN (Companhia Siderúrgica Nacional)
- Vale do Rio Doce
- Petrobras (início)

### Trabalhismo
- CLT (Consolidação das Leis do Trabalho)
- Salário mínimo
- Férias remuneradas

## Queda de Vargas (1945)

- Golpe militar (outubro 1945)

## Dicas para o ENEM

1. Analise o caráter autoritário do Estado Novo
2. Relacione industrialização com trabalhismo
3. Conecte Segunda Guerra com queda de Vargas
4. Entenda o legado varguista
    `
  },
  {
    slug: 'republica-populista',
    title: 'República Populista',
    module: 'História do Brasil',
    moduleColor: '#22c55e',
    contoLink: '/contos/conto_republica_populista.html',
    content: `
## A República Populista (1945-1964)

O período populista foi marcado pela experiência democrática, desenvolvimento econômico e tensões políticas.

## Segundo Governo Vargas (1951-1954)

### Programa
- Nacionalismo
- "O petróleo é nosso"
- Criação da Petrobras (1953)

### Crise
- Oposição da UDN
- Suicídio (1954)

## Governo JK (1956-1961)

### Plano de Metas
- "Cinqüenta anos em cinco"
- Construção de Brasília
- Rodovias
- Indústrias de base

## Governo João Goulart (1961-1964)

### Reformas de Base
- Reforma agrária
- Reforma bancária
- Voto dos analfabetos

### Golpe militar (31 de março 1964)

## Dicas para o ENEM

1. Compare os diferentes governos
2. Analise o nacionalismo econômico
3. Conecte reformas com golpe
4. Relacione cultura com política
    `
  },
  {
    slug: 'ditadura-militar',
    title: 'Ditadura Militar',
    module: 'História do Brasil',
    moduleColor: '#22c55e',
    contoLink: '/contos/conto_ditadura_militar.html',
    content: `
## A Ditadura Militar (1964-1985)

O regime militar brasileiro foi um período de autoritarismo, repressão política e profundas transformações econômicas.

## O Golpe de 1964

- 31 de março de 1964
- Medo do comunismo
- Oposição às reformas de base

## Governos Militares

### Castelo Branco (1964-1967)
- Ato Institucional nº 1
- Cassações e prisões

### Médici (1969-1974)
- Anos de Chumbo
- Repressão (DOI-CODI)
- Milagre Econômico

### Geisel (1974-1979)
- "Abertura lenta, gradual e segura"
- Fim do AI-5

## Resistência à Ditadura

### Oposição
- MDB (Movimento Democrático Brasileiro)
- Movimento estudantil
- Greves operárias

### Guerrilha
- MR-8, ALN
- Araguaia

## Dicas para o ENEM

1. Analise os mecanismos de repressão
2. Relacione economia com política
3. Conecte resistência com redemocratização
4. Entenda a transição democrática
    `
  },
  {
    slug: 'redemocratizacao',
    title: 'Redemocratização',
    module: 'História do Brasil',
    moduleColor: '#22c55e',
    contoLink: '/contos/conto_redemocratizacao.html',
    content: `
## A Redemocratização (1985-presente)

O período contemporâneo brasileiro é marcado pela consolidação democrática, estabilidade econômica e desafios persistentes.

## Nova República (1985-1990)

### Constituição de 1988
- "Constituição Cidadã"
- Direitos sociais ampliados
- SUS

## Governo Collor (1990-1992)

### Impeachment
- Escândalos de corrupção
- Caras-pintadas
- Renúncia (1992)

## Plano Real (1994)

- Fim da hiperinflação
- Estabilização econômica

## Governos Recentes

### FHC (1995-2002)
- Privatizações
- Estabilidade econômica

### Lula (2003-2010)
- Bolsa Família
- Crescimento econômico

### Dilma (2011-2016)
- Impeachment (2016)

## Desafios Contemporâneos

- Desigualdade
- Corrupção
- Democracia

## Dicas para o ENEM

1. Analise a transição democrática
2. Compare os diferentes governos
3. Conecte economia com política social
4. Entenda os desafios atuais
    `
  }
];

export function getLessonBySlug(slug: string): Lesson | undefined {
  return lessons.find(lesson => lesson.slug === slug);
}

export function getAllLessons(): Lesson[] {
  return lessons;
}
