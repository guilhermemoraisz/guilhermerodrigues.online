## ADDED Requirements

### Requirement: Single-page professional narrative
O portfólio SHALL apresentar, em uma página por idioma, nome, título Desenvolvedor Full Stack, resumo, experiências, formação e contato, sem foto ou dependência de páginas de casos.

#### Scenario: Recruiter reads the portfolio
- **WHEN** um visitante abre uma versão localizada
- **THEN** encontra Guilherme Rodrigues, posicionamento full stack, atuação na CI&T para um cliente do setor automotivo e experiências completas sem precisar abrir detalhes em outra página

### Requirement: Accurate professional experience
O conteúdo SHALL identificar o cargo de estágio na CI&T desde abril de 2026, agrupar bootcamp e atuação para um cliente do setor automotivo nesse vínculo e apresentar Screen Network como trabalho remunerado de janeiro de 2018 a janeiro de 2019. MUST distinguir responsabilidades de resultados comprovados e não inventar métricas, projetos ou garantias de segurança. O cliente MUST permanecer anônimo nos textos, metadados e dados serializados da aplicação nos dois idiomas.

#### Scenario: Automotive client remains anonymous
- **WHEN** o visitante acessa qualquer idioma ou seus metadados
- **THEN** o cliente é descrito como cliente do setor automotivo, sem seu nome nem chaves internas que o identifiquem nos dados da aplicação

#### Scenario: CI&T experience is presented
- **WHEN** o visitante lê a experiência da CI&T
- **THEN** encontra estágio, sistema de feedbacks com React/Spring/Nginx e atuação atual com Angular, migração de telas, padrões e validação de testes
- **AND** a participação com ferramentas de segurança não é apresentada como especialização comprovada

#### Scenario: Earlier paid experience is presented
- **WHEN** o visitante lê Screen Network
- **THEN** encontra desenvolvimento remunerado em JavaScript/discord.js para comunidade Discord/Minecraft, período correto, moderação e mecânicas de progressão e recompensas

#### Scenario: Security contribution is described
- **WHEN** a contribuição de acesso por token é mencionada
- **THEN** o texto descreve substituição do e-mail explícito na URL por token processado no backend, sem afirmar algoritmo criptográfico confirmado nem exposição impossível

### Requirement: Education is distinct from employment
O portfólio SHALL apresentar Análise e Desenvolvimento de Sistemas na PUC Goiás, desde outubro de 2024, com previsão de conclusão em meados de 2027, em seção de formação distinta de trabalho.

#### Scenario: Education is read
- **WHEN** o visitante chega à formação
- **THEN** consegue identificar curso, instituição e conclusão prevista sem interpretar a graduação como vínculo empregatício

### Requirement: Editorial accessible presentation
A interface SHALL usar títulos Geist Mono, textos Geist Sans, paleta neutra e componentes interativos shadcn/ui, com hierarquia editorial, foco visível e contraste WCAG AA. MUST permanecer legível sem overflow horizontal em larguras de 320 px a desktop e respeitar movimento reduzido.

#### Scenario: Mobile reading
- **WHEN** a página é aberta em 390×844 ou largura de 320 px
- **THEN** textos e ações permanecem acessíveis sem rolagem horizontal ou sobreposição

#### Scenario: Keyboard and reduced motion
- **WHEN** o visitante navega com Tab e prefere movimento reduzido
- **THEN** todos os controles exibem foco visível e nenhuma animação impede leitura ou interação

### Requirement: Direct contact and valid resume
O portfólio SHALL oferecer GitHub `https://github.com/guilhermemoraisz`, LinkedIn `https://www.linkedin.com/in/guilhermemoraisz/` e e-mail `mailto:guilhermemorais.dev@gmail.com`, sem formulário. O link de currículo MUST existir apenas quando apontar para arquivo ou URL validado. A descrição de contato SHALL convidar à troca de ideias e experiências sem afirmar busca atual por vaga.

#### Scenario: Contact invitation does not imply job seeking
- **WHEN** o visitante lê a descrição de contato em português ou inglês
- **THEN** encontra um convite para conversar sobre tecnologia ou compartilhar experiências, sem indicação de que Guilherme busca uma oportunidade no momento

#### Scenario: Contact is selected
- **WHEN** o visitante aciona um contato
- **THEN** é encaminhado ao destino confirmado correspondente

#### Scenario: Resume is not provided
- **WHEN** não há currículo validado configurado
- **THEN** a página continua funcional e não exibe link de download quebrado ou PDF fictício

#### Scenario: Resume is available
- **WHEN** um currículo validado é configurado
- **THEN** a página apresenta link acessível para esse documento
