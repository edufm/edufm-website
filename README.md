# edufm.com

Site pessoal de Eduardo Ferrari.

O objetivo do site é reunir artigos, projetos e um breve histórico
profissional em um formato simples, rápido e totalmente estático.

O site foi construído com foco em:

-   simplicidade
-   performance
-   controle total sobre o conteúdo
-   facilidade para escrever novos artigos

Todo o conteúdo dos artigos é escrito em **Markdown**, permitindo
versionamento direto no Git e um fluxo simples de publicação.

------------------------------------------------------------------------

## Stack

-   React
-   Vite
-   TailwindCSS
-   React Router
-   React Markdown

O site é totalmente **estático** e pode ser hospedado em qualquer
serviço de static hosting (GitHub Pages, Cloudflare Pages, Netlify,
etc).

------------------------------------------------------------------------

## Estrutura do projeto

    src/
      components/        # Componentes reutilizáveis
      pages/             # Páginas do site
      articles/          # Artigos em Markdown
      data/              # Metadados e helpers
      assets/            # Imagens e recursos

    public/              # Arquivos públicos (favicon, CV, etc)

Os artigos ficam na pasta:

    src/articles

Cada artigo é um arquivo `.md`.

Exemplo:

    src/articles/tecnologia-como-meio.md

------------------------------------------------------------------------

## Escrevendo artigos

Cada artigo utiliza **frontmatter** para os metadados.

Exemplo:

``` markdown
---
title: Tecnologia não é fim. É meio.
date: 2026-01-07
readingTime: 3 min
external:
  name: TIInside
  url: https://tiinside.com.br/07/01/2026/tecnologia-como-meio-nao-como-vaidade/
---

Conteúdo do artigo em Markdown...
```

------------------------------------------------------------------------

## Rodando localmente

Instalar dependências:

``` bash
npm install
```

Rodar o ambiente de desenvolvimento:

``` bash
npm run dev
```

O site estará disponível em:

    http://localhost:5173

------------------------------------------------------------------------

## Build

Para gerar o build estático:

``` bash
npm run build
```

Os arquivos finais serão gerados em:

    dist/

------------------------------------------------------------------------

## Recursos

O site inclui alguns recursos simples mas úteis:

-   modo claro / escuro
-   artigos escritos em Markdown
-   tempo estimado de leitura
-   indicação de publicação externa
-   design minimalista
-   build totalmente estático

------------------------------------------------------------------------

## Licença

Este projeto está disponível para uso como referência pessoal.

Conteúdo dos artigos © Eduardo Ferrari.
