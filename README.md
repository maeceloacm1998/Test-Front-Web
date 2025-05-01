# Desafio Frontend - Checkout

## Sobre o Projeto
Este é um projeto de checkout desenvolvido com React, TypeScript e Vite. O objetivo é criar um fluxo de finalização de compra com três etapas: carrinho, pagamento e sucesso.

## Layout
O layout do projeto está disponível no Figma:
[Ver Layout](https://www.figma.com/design/VAOqGCWUNg13WE1t05I7xy/TestFront?node-id=15211-254388&t=8Ycv9aND6NIfKzgK-1)

## Tecnologias Utilizadas
- React
- TypeScript
- Vite
- React Router
- React Query
- Axios
- Tailwind CSS

## Arquitetura do Projeto

### Estrutura de Pastas
```
src/
  ├── components/          # Componentes globais reutilizáveis
  ├── screens/            # Páginas da aplicação
  │   └── Example/        # Exemplo de estrutura de uma página
  │       ├── components/ # Componentes específicos da página
  │       ├── services/   # Serviços e chamadas à API
  │       ├── types/      # Tipagens TypeScript
  │       └── index.tsx   # Componente principal
  ├── services/           # Serviços globais
  └── types/              # Tipagens globais
```

### Padrões a Seguir

1. **Mobile First & Responsividade**
   - Desenvolver primeiro para mobile
   - Usar breakpoints do Tailwind (sm, md, lg, xl)
   - Testar em diferentes tamanhos de tela
   - Exemplo de classe responsiva:
     ```tsx
     className="text-sm md:text-base lg:text-lg"
     ```

2. **Tailwind CSS**
   - Usar classes utilitárias do Tailwind
   - Seguir o padrão de cores definido
   - Criar componentes reutilizáveis com @apply quando necessário
   - Exemplo de componente:
     ```tsx
     <div className="container-padding max-w-7xl mx-auto">
       <h1 className="text-xl md:text-2xl font-bold text-text-primary">
         Título
       </h1>
     </div>
     ```

3. **Componentes**
   - Um componente por arquivo
   - Usar TypeScript para props
   - Documentar componentes complexos
   - Manter componentes pequenos e focados

4. **Chamadas à API**
   - Usar o serviço de exemplo como base
   - Centralizar chamadas em arquivos de serviço
   - Usar React Query para cache e loading states
   - Tratar erros adequadamente

5. **TypeScript**
   - Definir interfaces para todos os tipos
   - Evitar uso de 'any'
   - Documentar tipos complexos
   - Usar tipos estritos

6. **Boas Práticas**
   - Código limpo e legível
   - Commits semânticos
   - Documentação quando necessário
   - Testes para lógicas importantes

## Requisitos
- Node.js (versão 16 ou superior)
- Yarn ou NPM

## Configuração do Ambiente
1. Clone o repositório
2. Instale as dependências:
```bash
yarn install
```
3. Crie um arquivo `.env` na raiz do projeto com a URL da API:
```
VITE_API_URL=https://run.mocky.io/v3/d5db7020-67c5-4619-9593-cf9faf591538
```
4. Inicie o servidor de desenvolvimento:
```bash
yarn dev
```

## Desafio
O desafio consiste em implementar um checkout com 3 passos:

1. **Carrinho**
   - Consumir a API fornecida para listar os itens do carrinho
   - Exibir imagem, nome, preço e quantidade de cada produto
   - Mostrar o resumo do pedido com subtotal, frete e desconto
   - Implementar layout responsivo
   - Botão "Seguir para o pagamento" que leva para a próxima etapa

2. **Pagamento**
   - Criar formulário de cartão de crédito com os seguintes campos:
     - Número do cartão
     - Nome do titular
     - Data de validade
     - Código CVV
   - Implementar validação em todos os campos
   - Habilitar o botão "Finalizar Pedido" apenas quando o formulário estiver válido
   - Ao finalizar, deve seguir para a tela de sucesso

3. **Sucesso**
   - Exibir mensagem de confirmação
   - Mostrar resumo dos produtos comprados
   - Exibir os dados do pagamento (com dados mascarados)
   - Botão para voltar ao início

## Critérios de Avaliação
- Fidelidade ao layout fornecido
- Responsividade (mobile-first)
- Organização e estrutura do código
- Uso correto de TypeScript
- Componentização e reutilização
- Tratamento de erros
- Validação de formulários
- Performance
- Clean Code

## Dicas
- Utilize os hooks do React Query para gerenciar o estado e cache
- Implemente máscaras nos campos do cartão
- Valide o formulário conforme o usuário digita
- Persista os dados entre as etapas
- Mantenha o código organizado e bem documentado

## Entrega
- Criar um repositório no GitHub
- Implementar todas as telas e funcionalidades solicitadas
- Documentar as decisões técnicas no README
- Publicar o projeto (Vercel, Netlify, etc)
- Enviar o link do repositório e da aplicação publicada

Boa sorte! 🚀
