## ADDED Requirements

### Requirement: Automatic browser language selection
A entrada `/` SHALL resolver o idioma no servidor usando a primeira preferência concreta válida de `Accept-Language`, em ordem de qualidade, ignorando faixas com `q=0`. Somente o idioma primário `pt` MUST selecionar português; todos os demais idiomas, wildcard, cabeçalho ausente ou inválido MUST selecionar inglês. Não SHALL existir seletor de idioma nem preferência manual persistida de idioma.

#### Scenario: Portuguese browser
- **WHEN** o cabeçalho preferencial é `pt-BR,pt;q=0.9,en;q=0.8` ou `pt-PT`
- **THEN** `/` redireciona temporariamente para `/pt` e apresenta português

#### Scenario: Unsupported language with secondary Portuguese
- **WHEN** o cabeçalho é `ja,pt;q=0.5`
- **THEN** `/` redireciona para `/en`, pois o idioma preferencial não é português

#### Scenario: Missing or invalid preference
- **WHEN** o cabeçalho está ausente, não contém faixa válida, contém apenas wildcard ou exclui português com `q=0`
- **THEN** a versão selecionada é inglês

#### Scenario: Quality order determines preferred language
- **WHEN** o cabeçalho é `en;q=0.5,pt-BR;q=0.9`
- **THEN** a versão selecionada é português

### Requirement: Stable localized routes
O sistema SHALL servir `/pt` e `/en` sem redirecionamentos pela preferência do navegador, preservar aliases `/pt-br` e `/en-us` para as respectivas rotas novas e retornar 404 para locales desconhecidos. MUST excluir ativos e rotas técnicas da negociação e impedir cache global incorreto do redirecionamento dependente de idioma.

#### Scenario: Explicit localized URL
- **WHEN** um navegador em português acessa `/en`
- **THEN** a URL permanece `/en` e o conteúdo permanece inglês

#### Scenario: Existing public links
- **WHEN** alguém acessa `/en-us` ou `/pt-br`
- **THEN** é redirecionado para `/en` ou `/pt`, respectivamente

#### Scenario: Asset request
- **WHEN** o navegador solicita um arquivo público ou `_next`
- **THEN** não há redirecionamento de idioma para esse recurso

#### Scenario: Different visitors
- **WHEN** visitantes com preferências distintas acessam `/` através de cache compartilhado
- **THEN** um redirecionamento previamente gerado não força o idioma incorreto no visitante seguinte

### Requirement: Complete localized content and metadata
As duas versões SHALL possuir conteúdo equivalente, rótulos acessíveis traduzidos, datas localizadas, atributo `html lang` correto e metadados localizados com canonical e alternates. MUST renderizar o idioma correto no servidor, sem troca tardia por JavaScript.

#### Scenario: English version
- **WHEN** `/en` é renderizada
- **THEN** conteúdo, nomes acessíveis, datas e metadados estão em inglês e o documento informa `lang="en"`

#### Scenario: Portuguese version
- **WHEN** `/pt` é renderizada
- **THEN** conteúdo, nomes acessíveis, datas e metadados estão em português e o documento informa `lang="pt"`
