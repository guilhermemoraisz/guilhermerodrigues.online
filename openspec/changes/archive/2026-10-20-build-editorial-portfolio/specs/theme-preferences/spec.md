## ADDED Requirements

### Requirement: System-based initial theme
Na ausência de escolha manual salva, a interface SHALL seguir a preferência de tema do sistema e apresentar tokens neutros próprios para claro e escuro, sem flash perceptível de tema incorreto ou erro de hidratação.

#### Scenario: Dark system without saved choice
- **WHEN** um visitante com preferência escura abre a página pela primeira vez
- **THEN** a página é apresentada em tema escuro e o controle permite mudar para claro

#### Scenario: Light system without saved choice
- **WHEN** um visitante com preferência clara abre a página sem escolha salva
- **THEN** a página é apresentada em tema claro

### Requirement: Accessible persistent toggle
A interface SHALL disponibilizar botão shadcn/ui para alternar entre claro e escuro, acionável por teclado e com nome acessível localizado que descreva o tema de destino. A escolha manual MUST persistir entre visitas e prevalecer sobre o sistema; a alternância na sessão MUST funcionar mesmo com armazenamento indisponível.

#### Scenario: Manual override persists
- **WHEN** o visitante escolhe claro em sistema escuro e recarrega a página
- **THEN** o tema claro permanece selecionado

#### Scenario: Keyboard activation
- **WHEN** o visitante foca o botão e pressiona Enter ou Espaço
- **THEN** o tema é alternado, o foco permanece visível e o nome acessível passa a indicar a próxima ação no idioma da página

#### Scenario: Storage unavailable
- **WHEN** o navegador impede persistência e o visitante aciona o botão
- **THEN** o tema muda na sessão sem interromper a navegação

### Requirement: Equivalent visual quality
Os dois temas SHALL preservar hierarquia editorial, legibilidade, foco e contraste WCAG AA de textos e controles, sem depender de cores fora da paleta neutra.

#### Scenario: Reading in either theme
- **WHEN** o visitante alterna o tema no desktop ou mobile
- **THEN** textos secundários, links, bordas relevantes e foco continuam distinguíveis e não há deslocamento estrutural do conteúdo
