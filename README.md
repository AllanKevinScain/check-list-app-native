# Check-List App Native

Um aplicativo de Checklist (Todo List) desenvolvido para ajudar na organização pessoal e produtividade.

## 🚀 Tecnologias

Este projeto utiliza as seguintes tecnologias:

- **[React Native](https://reactnative.dev/)**: Framework para criação de aplicações nativas.
- **[Expo](https://expo.dev/)**: Plataforma de código aberto para fazer aplicativos nativos universais para Android, iOS e web.
- **[TypeScript](https://www.typescriptlang.org/)**: Superset de JavaScript que adiciona tipagem estática ao código.
- **[MaterialIcons (@expo/vector-icons)](https://icons.expo.fyi/Index)**: Biblioteca de ícones integrada ao ecossistema Expo.
- **StyleSheet**: Abstração de CSS do React Native para estilização.

## 🏗️ Estrutura do Projeto

O projeto segue uma organização modular:

- `src/assets`: Recursos estáticos como imagens e logotipos.
- `src/components`: Componentes reutilizáveis (em progresso).
- `src/global`: Definições globais, como temas e cores.
- `src/pages`: Telas da aplicação.
- `src/@types`: Definições de tipos TypeScript.

## 📝 Estado Atual

Atualmente, o projeto conta com a **Tela de Login** em construção, apresentando as seguintes funcionalidades:

- Interface limpa com suporte a temas globais.
- Campos de entrada para e-mail e senha com ícones contextuais.
- Lógica de validação básica para preenchimento de campos.
- Feedback visual através de alertas nativos.
- Design responsivo utilizando proporções de tela (`Dimensions`).

## ⚙️ Como executar

1. Instale as dependências:
   ```bash
   npm install
   ```

2. Inicie o servidor do Expo:
   ```bash
   npm start
   ```

3. Utilize o Expo Go no seu dispositivo móvel ou um emulador para visualizar o app.
