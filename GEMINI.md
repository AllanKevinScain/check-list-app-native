# Registro de Evolução do Projeto - Design System & Padronização

## 1. Reestruturação do Tema (`src/global/themes.tsx`)
- **Arquitetura Semântica:** Substituição de cores genéricas por categorias funcionais:
  - `Brand`: `primary`, `secondary`.
  - `Backgrounds`: `background`, `surface`, `surfaceSecondary`.
  - `Typography`: `textPrimary`, `textSecondary`, `textOnPrimary`.
  - `Feedback`: `success`, `warning`, `error`.
- **Tokens de Layout:** Inclusão de escalas de `spacing` e `borderRadius` para garantir consistência em margens e arredondamentos.

## 2. Refatoração de Componentes Core
### Button
- **Variantes:** Implementação de suporte para `primary`, `secondary` e `ghost`.
- **Estados:** Tratamento visual para `loading` e `disabled`.
- **Sombras:** Padronização de elevação para Android e iOS usando tokens do tema.

### TextField
- **Contraste:** Correção do erro de legibilidade onde fundo e texto tinham cores similares.
- **Feedback:** Estilização de bordas e mensagens de erro integradas ao tema.
- **Ícones:** Padronização da cor dos ícones para garantir visibilidade contra o fundo `surface`.

### Flag
- **Dinâmico:** Atualizado para receber cores semânticas e aplicar opacidade/bordas conforme seleção.

## 3. Padronização Visual das Telas
- **Login:** Atualização total dos containers e textos para os novos tokens.
- **Listagem:** Refatoração do header e dos itens da lista (`ItemList`, `Ball`) para remover cores hardcoded.
- **Modal de Tarefas:** Ajuste de contraste para ícones e rótulos, garantindo usabilidade em fundos claros/escuros.

## 4. Manutenção e Escalabilidade
- **Eliminação de Hardcoded Colors:** Remoção de strings como `"white"`, `"black"` e `"red"` em favor dos tokens do tema.
- **Consistência de Rotas:** Definição da cor de fundo padrão nas configurações do `RootStack`.

---
*Nota: Este projeto agora segue rigorosamente os tokens definidos em `src/global/themes.tsx` para qualquer nova implementação visual.*
