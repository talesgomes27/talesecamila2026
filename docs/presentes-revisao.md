# Revisão de conteúdo da lista de presentes

Data: 03/11/2026. Diagnóstico da base; autorização parcial do Gate D registrada abaixo.

Este relatório reproduz o catálogo da base de 24 presentes. IDs, títulos, descrições, valores e imagens foram preservados; nenhuma exclusão está aprovada. O usuário autorizou reorganizar a apresentação com abertura nos IDs 6, 4, 5, 19, 7, 9 e 17 e cotas especiais posteriores. Confirmou que todos os itens são contribuições simbólicas, mas posteriormente pediu retirar o parágrafo explicativo geral da vitrine. A reorganização dos presentes continua aprovada; o pedido de manter a ordem original refere-se às seções do site. A introdução foi atualizada para “Criamos uma lista virtual com opções de presentes via Pix para esta nossa nova fase e para a lua de mel.” A tabela abaixo registra a ordem original do catálogo para comparação. As sugestões que alterem títulos, descrições ou o significado material de um presente continuam dependendo de autorização específica.

## Evidência e leitura do fluxo na base auditada

Fontes locais consultadas: [weddingData.ts](../src/data/weddingData.ts), [GiftsSection.astro](../src/components/home/GiftsSection.astro), [GiftCard.astro](../src/components/home/GiftCard.astro), [PixModal.astro](../src/components/home/PixModal.astro), [pix.ts](../src/utils/pix.ts) e [Ceremony.astro](../src/components/home/Ceremony.astro). A avaliação de tom e adequação é editorial; não constitui pesquisa com convidados nem evidência de arrecadação.

A apresentação atual usa a ordem do array, com nove cartões inicialmente visíveis depois da execução do JavaScript. Os primeiros nove IDs são `1, 5, 10, 14, 24, 2, 3, 4, 6`. O botão expande as outras quinze opções. “Destaques” restaura essa ordem; os outros controles ordenam por preço. Os selos estão associados aos IDs `1, 5, 10, 14, 24`, independentemente da posição dos cartões. Títulos e descrições têm limite visual de duas linhas no cartão, de modo que uma ressalva longa pode ficar escondida.

Os cartões geram um PIX com o valor do item. A opção “Contribuir com Valor Livre” já existe antes da lista e gera um código sem valor, acompanhado da instrução “Você define o valor no app do seu banco”. Não há necessidade demonstrada de acrescentar um campo de valor ao site para que o convidado possa contribuir livremente.

O catálogo vai de R$ 100,00 a R$ 6.627,50. Começar pela maior cota e por uma “Cota de Padrinho” pode sugerir obrigação ou estabelecer uma referência financeira alta. Isso é uma hipótese de leitura, não uma constatação sobre o comportamento dos convidados.

## Catálogo atual completo

“Ordem” significa posição no array atual, começando em 1. Os textos e valores abaixo reproduzem os dados consultados. “Revisar” e “reposicionar” são recomendações, sem aplicação ou exclusão automática.

| Ordem | ID | Título atual | Descrição atual | Valor atual | Clareza, ambiguidade e adequação ao público | Recomendação |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | 1 | Deus tocou no seu coração! | Para os padrinhos e amigos generosos que desejam nos abençoar com essa cota especial! | R$ 6.627,50 | A linguagem combina com a presença de uma cerimônia religiosa, mas relacionar bênção e generosidade à maior cota pode criar pressão financeira e religiosa. O valor não revela o destino da contribuição. | Revisar descrição e reposicionar; confirmar título e intenção no Gate D. |
| 2 | 5 | Passeio de barco ao pôr do sol, lua de mel | Para brindarmos ao início dessa nova jornada com um cenário cinematográfico. | R$ 520,00 | Tema claro, com boa leitura para familiares e amigos. Confirmar se é destino efetivo do dinheiro ou inspiração simbólica; o texto não distingue os dois. | Manter como opção de lua de mel, com esclarecimento geral aprovado. |
| 3 | 10 | Cota de Padrinho | Uma bênção e contribuição especial dos padrinhos queridos para marcar o início dessa nova etapa! | R$ 950,00 | Pode parecer valor esperado de cada padrinho e afastar outros convidados interessados na cota. | Revisar descrição e reposicionar depois das opções mais acessíveis. |
| 4 | 14 | Open de engov para a festa | Garantindo a dignidade e a animação de todos os convidados durante e após a comemoração! | R$ 180,00 | “Open” pode prometer distribuição real de produto; a descrição sugere benefício garantido. Humor sobre medicamento e consumo de álcool pode não servir a todo o público. | Revisar título e descrição mediante Gate D; retirar do bloco inicial como proposta. |
| 5 | 24 | Primeiro lugar a ser servido pelo garçom no rodízio | Acesso VIP garantido à primeira rodada de pizza quentinha saindo do forno d'O Teimoso! | R$ 120,00 | A promessa é literal: pagar para receber tratamento prioritário. Pode criar diferença entre convidados e expectativa operacional para a equipe. | Revisar a promessa e reposicionar; só chamar de brincadeira se os noivos confirmarem. |
| 6 | 2 | Ajuda para a aposentadoria dos noivos | Garantindo nosso cafezinho e tranquilidade para quando ficarmos velhinhos juntos. | R$ 4.422,21 | Humor compreensível, mas valor e “garantindo” dão impressão de compromisso financeiro concreto. | Revisar descrição para explicitar o caráter escolhido pelos noivos e reposicionar. |
| 7 | 3 | Cota 'amigos para sempre' | Uma contribuição para celebrar a nossa amizade que atravessa todas as fases! | R$ 3.690,96 | A intenção afetiva é clara, porém o valor alto associado à amizade pode sugerir uma medida de proximidade. | Revisar descrição e reposicionar; não vincular amizade ao valor do presente. |
| 8 | 4 | Jantar romântico à luz de velas na lua de mel | Uma noite inesquecível com vista para o mar e o melhor da gastronomia local. | R$ 350,00 | Opção clara e ampla. Vista para o mar e experiência específica precisam ser verdadeiras se forem entendidas como destino real. | Manter; confirmar destinação real ou simbólica. |
| 9 | 6 | Um ano de café da manhã na cama para a noiva | Garantindo que a doçura e os mimos continuem todos os fins de semana. | R$ 180,00 | Tom carinhoso e acessível. “Um ano” e “todos os fins de semana” parecem quantidade contratada se o caráter simbólico não estiver claro. | Manter tema, revisar descrição e propor posição inicial. |
| 10 | 7 | Kit sobrevivência aos primeiros dias de casados | Pizzas de emergência, café reforçado e muita paciência para organizar a casa nova! | R$ 250,00 | Humor cotidiano com bom alcance. “Casa nova” pode conflitar com o lar já montado da introdução. | Revisar descrição após confirmar situação do lar; propor posição inicial. |
| 11 | 8 | Cota para o noivo não lavar a louça por 1 mês | Uma ajuda humanitária valiosa para a harmonia do lar recém-formado! | R$ 150,00 | Pode ser lido como transferir o trabalho doméstico à noiva; “ajuda humanitária” exagera uma situação banal. O benefício por um mês parece literal. | Revisar descrição e confirmar conforto do casal com o título. |
| 12 | 9 | Brinde com champanhe na praia, lua de mel | Duas taças e um champanhe gelado para brindar à felicidade sem fim. | R$ 280,00 | Tema simples de lua de mel; envolve bebida, sem a promessa de privilégio na festa. Confirmar se praia e brinde são reais ou simbólicos. | Manter; propor posição inicial e esclarecimento geral. |
| 13 | 11 | Curso de Culinária para a noiva | Para a noiva preparar banquetes maravilhosos (ou pelo menos garantir que o arroz não queime)! | R$ 300,00 | Pode constranger a noiva ou reforçar a expectativa de que cozinhar é responsabilidade dela. Não está claro se haverá curso real. | Revisar título e descrição no Gate D; reposicionar até decisão. |
| 14 | 12 | Cueca sexy para o noivo | Garantindo que a lua de mel comece com muito estilo, charme e boas risadas! | R$ 100,00 | É o menor valor da lista, mas o humor íntimo pode inibir familiares, colegas ou convidados menos próximos. | Confirmar conforto dos dois; revisar descrição e reposicionar, sem exclusão presumida. |
| 15 | 13 | Lingerie sexy para a noiva | Um mimo especial e charmoso para a mala da lua de mel ficar completa! | R$ 120,00 | Humor íntimo com leitura semelhante ao ID 12. O título pode constranger mesmo com descrição discreta. | Confirmar conforto dos dois; revisar descrição e reposicionar, sem exclusão presumida. |
| 16 | 15 | Ajuda para mobiliar a casa | Uma contribuição especial para transformar o nosso cantinho em um lar acolhedor e confortável. | R$ 1.500,00 | Conflito direto com “nosso lar já está montado”. Pode existir uma necessidade de completar móveis, mas ela não está documentada. | Decisão factual no Gate D antes de revisar título, descrição ou introdução. |
| 17 | 16 | Garanta o jantar do noivo durante o 1º mês de casado | Salvando o recém-casado de viver à base de miojo e delivery nos primeiros 30 dias! | R$ 650,00 | Pode reforçar dependência do noivo ou crítica à habilidade doméstica da noiva. “Garanta” e “30 dias” parecem uma entrega mensurável. | Revisar descrição e confirmar intenção do título no Gate D. |
| 18 | 17 | Um ano de cabelo feito para o noivo | Para o noivo manter o corte na régua, a barba impecável e a noiva sempre admirada! | R$ 480,00 | Humor pessoal de baixa ambiguidade temática, mas “um ano” pode significar pacote real de serviços. | Manter tema; esclarecer cota simbólica se confirmado e propor posição inicial. |
| 19 | 18 | Kit ressaca para os noivos | Água de coco, café reforçado e glicose na veia para nos recuperarmos da melhor festa da vida! | R$ 320,00 | “Glicose na veia” introduz linguagem de procedimento médico numa brincadeira; pode gerar desconforto ou uma leitura de recomendação. | Revisar descrição; confirmar título e tom sobre álcool no Gate D. |
| 20 | 19 | Tampão de ouvido pra noiva enquanto noivo ronca | Item de utilidade pública essencial para a paz matrimonial e o sono sagrado da noiva! | R$ 120,00 | Piada cotidiana relativamente compreensível; ainda exige concordância dos dois sobre expor o ronco. Não distingue objeto real de cota. | Manter se ambos concordarem; revisar descrição e propor posição inicial. |
| 21 | 20 | Cota para pedir um bebê para os noivos | Para incentivar a fábrica da cegonha e garantir a futura fofura da família! | R$ 500,00 | Sugere comprar influência sobre uma decisão íntima. “Garantir” pode estimular cobrança sobre filhos e planos não informados. | Prioridade de decisão no Gate D; descrição isolada pode não resolver o título. |
| 22 | 21 | Ajuda para pagar a terapia da noiva depois de organizar o casamento | Uma contribuição humanitária para devolver a paz de espírito após planejar a festa do século! | R$ 200,00 | Pode expor ou fazer graça com saúde mental e concentrar o trabalho da festa na noiva. Título longo perde informação com o corte visual. | Revisar título e descrição mediante Gate D; reposicionar até decisão. |
| 23 | 22 | Cota para a noiva jogar o buquê na sua direção | Mira calibrada com precisão estratégica para você ser a próxima a subir ao altar! | R$ 150,00 | Parece vantagem paga numa atividade da festa e associa pegar o buquê a uma previsão de casamento. | Confirmar se é só humor; revisar promessa e reposicionar. |
| 24 | 23 | Cota para a noiva não jogar o buquê na direção da sua namorada | Seguro de emergência e alívio imediato para manter a paz no relacionamento por mais um ano! | R$ 250,00 | Parece vantagem paga para evitar uma brincadeira e pode constranger um casal convidado. Título longo sofre corte no cartão. | Confirmar se é só humor; revisar promessa e reposicionar. |

## Proposta completa inicial, não aplicada integralmente

Proposta completa de IDs, cada um utilizado uma vez:

`6, 4, 5, 19, 7, 9, 17, 8, 10, 15, 16, 24, 14, 18, 21, 22, 23, 11, 12, 13, 20, 3, 2, 1`

Os primeiros nove misturam cotidiano e lua de mel, com valores entre R$ 120,00 e R$ 950,00. As três maiores cotas ficam depois das opções mais comuns. A opção de valor livre continua disponível antes do catálogo. O menor item, ID 12 de R$ 100,00, fica fora da abertura por envolver humor íntimo; a ordenação por menor valor continua sendo uma alternativa de descoberta.

A proposta é condicional: os IDs 8 e 10 precisam do esclarecimento editorial indicado na tabela antes de serem destacados. Os IDs com intimidade, filhos, saúde ou vantagens na festa continuam no catálogo proposto para permitir revisão explícita; sua presença não equivale a recomendação de aprovar os textos atuais. Se o casal preferir manter a ordem atual, nenhuma mudança de ordem deve ser aplicada por conta deste relatório.

Os selos “Destaque Especial”, “Favorito dos Noivos” e “Tradição Local” também precisam de confirmação: não há evidência aqui de favoritismo, tradição ou preferência dos convidados. Reordenar não altera os selos atuais. Aprovar ordem e selos juntos evita promover uma promessa que ainda está sob revisão.

## Alternativas de descrição para o Gate D

As redações abaixo são propostas, não substituições autorizadas. Quando dizem “simbólica” ou retiram uma garantia, só podem ser usadas depois da confirmação de que o presente nunca pretendeu oferecer aquele produto, serviço ou privilégio. Não alterar títulos ou imagens silenciosamente para acomodar uma descrição.

| ID | Descrição alternativa proposta | Decisão necessária |
| --- | --- | --- |
| 1 | Uma cota especial para quem desejar contribuir com a nossa nova fase. Todo carinho é bem-vindo, em qualquer valor. | Confirmar tom religioso do título e retirar a relação entre valor e generosidade. |
| 2 | Uma cota bem-humorada para sonharmos com muitos cafezinhos e anos felizes juntos. | Confirmar que aposentadoria é tema simbólico, sem destinação financeira específica. |
| 3 | Uma forma de celebrar nossa amizade e contribuir com a nossa nova fase, sem obrigação de escolher esta cota. | Confirmar se o título e valor continuam confortáveis para o casal. |
| 6 | Uma cota simbólica para cafés na cama e muitos momentos de carinho na vida a dois. | Confirmar que não representa um pacote de um ano. |
| 7 | Pizzas de emergência, café e boas risadas para curtirmos os primeiros dias de casados. | Confirmar que “casa nova” não descreve uma mudança real que precisa ser preservada. |
| 8 | Uma brincadeira para celebrar as pequenas folgas e a parceria na rotina da casa. | Confirmar caráter simbólico; a descrição não corrige sozinha a divisão implícita no título. |
| 10 | Para quem quiser escolher esta cota especial e celebrar conosco. Não há um valor esperado dos padrinhos. | Confirmar expressamente que o valor não é uma obrigação dos padrinhos. |
| 11 | Uma cota para novas receitas e boas experiências na nossa cozinha. | Confirmar se existe curso real; considerar título voltado ao casal, mediante aprovação. |
| 12 | Uma cota bem-humorada para os preparativos da lua de mel. | Exige concordância dos dois com o título e a imagem íntimos; descrição discreta não os neutraliza. |
| 13 | Um carinho para os preparativos e a mala da lua de mel. | Exige concordância dos dois com o título e a imagem íntimos. |
| 14 | Uma brincadeira para celebrar a animação e as boas lembranças da nossa festa. | Se não houver distribuição de produto, revisar também o título; não prometer efeito ou fornecimento. |
| 15 | Uma contribuição para os detalhes e melhorias que ainda queremos fazer no nosso lar. | Usar apenas se essas melhorias existirem; a mudança de mobiliar para melhorar é material e depende do Gate D. |
| 16 | Uma cota bem-humorada para jantares gostosos nos primeiros dias da nossa vida de casados. | Confirmar que não existe compromisso real de custear um mês; avaliar título centrado no casal. |
| 17 | Uma cota simbólica para o noivo manter o corte na régua e colecionar boas fotos. | Confirmar ausência de pacote real de um ano. |
| 18 | Uma cota bem-humorada para nosso descanso depois da festa, com água de coco e boas lembranças. | Retirar linguagem de procedimento médico; confirmar conforto com o tema do título. |
| 19 | Uma brincadeira sobre o nosso sono e a convivência a dois, com carinho dos dois lados. | Confirmar consentimento sobre a piada e se o item é simbólico. |
| 20 | Uma brincadeira de família, sem promessa ou cobrança sobre ter filhos. O carinho de vocês já nos faz felizes. | Priorizar decisão sobre o próprio tema e título; não usar ressalva para manter uma cobrança que o casal não deseja. |
| 21 | Um carinho para a noiva descansar e aproveitar a nova fase depois dos preparativos. | Confirmar se terapia é tema que a noiva quer expor; mudar para descanso altera o significado e exige Gate D. |
| 22 | Uma brincadeira com o momento do buquê, sem preferência na hora de participar. | Confirmar que não existe mira comprada; título atual também precisará de revisão se essa for a decisão. |
| 23 | Uma brincadeira com o momento do buquê, para todos participarem com leveza e sem cobrança. | Confirmar que não existe garantia comprada nem intenção de constranger convidados; revisar título se aprovado. |
| 24 | Uma brincadeira com a ansiedade pela primeira pizza, para celebrarmos juntos o rodízio. | Confirmar que não existe atendimento prioritário pago; revisar o título e a promessa “VIP garantido”. |

Os IDs 4, 5 e 9 não exigem reescrita individual para manter o tema. Antes de apresentá-los como sugestões simbólicas, os noivos devem confirmar se o dinheiro tem destinação livre ou se há compromisso com jantar, passeio e brinde descritos. Não prometer hotel, praia, serviços, produtos ou experiências ainda não confirmados.

### Lar montado e contribuição para móveis

A introdução afirma que o lar já está montado; o ID 15 pede ajuda para mobiliar, e o ID 7 fala em casa nova. Há três decisões possíveis, todas dependentes da informação real dos noivos:

1. O lar está montado, mas faltam móveis ou melhorias específicas: explicar essa necessidade sem sugerir que toda a casa precisa ser mobiliada. Revisar título e descrição do ID 15 somente com aprovação.
2. O lar está integralmente montado e a cota é simbólica: confirmar isso e decidir um tema coerente para o ID 15. Não inventar uma necessidade doméstica para justificá-lo.
3. O casal ainda está montando a casa: a introdução precisa ser corrigida após confirmação, em vez de mudar apenas o presente.

Texto de abertura candidato, caso o caráter simbólico e o lar montado sejam confirmados: “Nosso lar já está montado, e sua presença é o que mais queremos celebrar. Para quem desejar nos presentear, reunimos sugestões simbólicas em PIX para a nova fase e a lua de mel. Você também pode escolher qualquer valor no aplicativo do seu banco.”

Esse texto substitui uma afirmação sobre a modalidade das cotas; portanto, é proposta do Gate D. Não declarar que itens específicos serão adquiridos se a contribuição tiver destinação livre.

## Valor livre: comparação com o menor esforço necessário

| Opção | O que o convidado faz | Complexidade adicional | Leitura e limite |
| --- | --- | --- | --- |
| Valor livre definido no banco, como hoje | Abre o modal, copia o código ou lê o QR e informa o valor no banco. | Nenhuma nova entrada ou geração dinâmica no site. | Preserva liberdade de valor; o site não conhece quanto foi transferido. O fluxo real ainda precisa ser validado nos aplicativos bancários usados pelos convidados. |
| Valores sugeridos no site, sem mudar o código livre | Lê sugestões e escolhe quanto digitar no banco. | Pequena mudança de texto. | Pode ajudar quem está em dúvida, mas também sugerir um mínimo. Não resolve uma dificuldade de uso já demonstrada. Valores novos exigem decisão explícita, não devem ser inventados neste diagnóstico. |
| Valor digitado ou escolhido no site e embutido no PIX | Informa o valor antes de copiar um código novo. | Entrada acessível, tratamento de centavos e vírgula, validação, atualização de QR/código e verificações extras. | Poupa digitação no banco para alguns usuários; cria outra decisão e outro ponto de erro. Não confirma pagamento e não é necessário para a liberdade de valor já existente. |

Recomendação: manter a escolha no banco e tornar a instrução fácil de localizar. Candidata de instrução: “Copie o código, abra o PIX Copia e Cola no seu banco e escolha o valor por lá.” Não criar faixas, valor mínimo, limite ou dependência nova sem uma necessidade concreta. Nenhuma mudança de código ou teste bancário foi feita nesta revisão.

## Medição que não confunde intenção com recebimento

O caminho inspecionado abre o modal, disponibiliza código/QR e abre uma conversa de WhatsApp. Não consulta o banco para confirmar transferência. A mensagem do WhatsApp já diz “Acabei de enviar” mesmo sem evidência do envio; clicar nesse botão não comprova que a mensagem foi enviada, lida ou que houve PIX.

| Sinal | O que pode mostrar | O que não comprova |
| --- | --- | --- |
| Abrir o modal de um presente | Interesse naquela opção. | Reserva, intenção firme ou pagamento. |
| Copiar código ou chave com sucesso | A ação de copiar foi concluída no navegador. | Abertura do banco ou transferência. |
| Gerar ou exibir o QR | O QR ficou disponível na interface. | Leitura do QR por outro dispositivo. |
| Clicar no WhatsApp | Tentativa de abrir uma conversa. | Envio de mensagem, comprovante ou dinheiro recebido. |
| Mensagem dizendo que pagou | Declaração do convidado, se efetivamente recebida. | Crédito confirmado na conta. |
| Crédito confirmado no extrato dos noivos | Recebimento real conferido por quem controla a conta. | Vínculo inequívoco a um cartão só pelo clique anterior. |

Se houver autorização futura para medir o fluxo, começar por contagens agregadas de abertura, cópia bem-sucedida e clique no WhatsApp, usando o ID do item ou a indicação de valor livre. Não enviar nomes, mensagens, telefone, chave PIX ou conteúdo do código para um serviço de análise. Não criar placar público de generosidade, pressão por escassez, contagem de “comprados” ou recibo automático a partir de um clique.

Recebimentos devem ser conciliados em controle privado pelos noivos, a partir de créditos reais e sem colocar extratos ou comprovantes neste repositório. Os códigos usam `GIFT{id}` nos cartões e `PIXLIVRE` no valor livre; essas referências se repetem por item e não são identificadores únicos de uma transação. A presença delas no código não garante que o banco as exponha de forma utilizável para conciliação.

Até existir conciliação autorizada e validada, relatar separadamente “aberturas”, “códigos copiados”, “cliques para recado” e “recebimentos conferidos”. Não chamar os primeiros de conversão paga ou arrecadação. Candidata de mensagem neutra no WhatsApp: “Olá, Tales e Camila! Quero deixar um recado para vocês sobre a nossa celebração.” Se for desejado mencionar um presente enviado, o convidado deve poder revisar essa declaração; o site não deve apresentá-la como verificação bancária.

## Fatos pendentes para os organizadores e checklist do Gate D

As pendências seguintes são perguntas para apuração com os responsáveis. Este relatório não certifica o espaço, altera políticas de convidados ou confirma serviços de fornecedores.

- [ ] Confirmar se todas as cotas são simbólicas, se alguma corresponde a produto/serviço real e se o valor tem destinação livre. Registrar a decisão por ID quando houver exceção.
- [ ] Confirmar separadamente títulos, descrições, ordem proposta e selos. IDs, valores, exclusões e mudanças de significado permanecem pendentes de aprovação explícita.
- [ ] Resolver o lar montado versus mobiliar a casa antes de aprovar a introdução e os IDs 7 e 15.
- [ ] Confirmar com ambos os noivos o conforto com os IDs 8, 11, 12, 13, 16, 19, 20 e 21. Não presumir que uma piada familiar é adequada para todos os convidados.
- [ ] Confirmar se há qualquer vantagem real de atendimento ou atividade nos IDs 22, 23 e 24. Se forem brincadeiras, aprovar a revisão dos títulos e das garantias; se forem reais, esclarecer operação e implicações para os outros convidados antes de publicar.
- [ ] **Mobilidade:** apurar como é o trajeto entre estacionamento e entrada, distância, piso firme ou arenoso, degraus, rampas, banheiro acessível e possibilidade de desembarque próximo. O FAQ diz “acesso fácil a pé”, mas isso não comprova acesso para idosos, pessoas com deficiência ou carrinhos de bebê. Confirmar um contato de apoio sem publicar novo telefone não autorizado.
- [ ] **Traje:** confirmar a orientação “Casual Chique”, a restrição a verde e branco e se evitar vestido longo é recomendação por conforto ou regra. A cerimônia e o convite têm texto próprio sobre traje; o FAQ inclui a opção de rasteira elegante. Se houver esclarecimento aprovado, conferir os três pontos para manter a mesma política, sem flexibilizar ou ampliar restrições por inferência.
- [ ] **Acompanhantes:** confirmar como cada convite identifica as pessoas incluídas e como resolver dúvidas sem prometer vaga extra. Manter a política atual de convite pessoal até decisão expressa. A frase “convidado não convida” pode receber proposta de tom mais acolhedor preservando essa regra.
- [ ] **Crianças:** esclarecer se informar a quantidade significa autorização, pedido sujeito a confirmação ou apenas registro de quem já foi convidado. Confirmar como nomes e quantidade serão conferidos pelos organizadores. Não transformar a instrução atual em liberação geral nem em proibição.
- [ ] **Horários:** o conteúdo registra chegada às 16h30 e cerimônia às 17h. O início do calendário é `19:30Z`, equivalente a 16h30 no fuso UTC−03, coerente com a chegada. O fim `02:00Z` de 20/12 corresponde a **23h de 19/12** no mesmo fuso; o roteiro, porém, fala em festa “até o amanhecer”. Confirmar o término real antes de mudar Google Agenda, ICS e texto do roteiro.
- [ ] **Intervalos do roteiro:** “cerimônia breve” e recepção “em seguida” podem criar expectativa diferente dos horários de 17h para cerimônia, 18h30 para brinde/fotos e 19h30 para jantar. Confirmar duração e serviço efetivos; não inventar horários de alimentação intermediária.
- [ ] Após a decisão, revisar a redação completa em celular: o corte de duas linhas não pode esconder uma condição essencial. Confirmar também a instrução de valor livre e a distinção entre recado e pagamento, sem enviar PIX ou WhatsApp como parte da revisão.

## Verificação e limites deste relatório

O inventário foi conferido contra os 24 registros do array atual: IDs 1 a 24, sem exclusão, duplicação ou mudança de valor. A ordem proposta contém os mesmos 24 IDs uma única vez. A conversão dos horários foi calculada com o deslocamento explícito UTC−03 utilizado nos dados locais.

Não foram executados pagamentos, enviados recados, consultados extratos, alterados dados bancários ou telefônicos, nem publicados arquivos. Não houve teste em aplicativo de banco, entrevista com convidados ou confirmação com o local e os fornecedores. As conclusões sobre tom e posição são propostas editoriais; o principal risco restante é publicar como fato ou promessa uma intenção que os noivos ainda não confirmaram.
