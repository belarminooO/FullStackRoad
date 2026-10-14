# PrimeFlix

Aplicação React para descobrir filmes em exibição, consultar detalhes e criar uma lista pessoal de favoritos.

<a href="./docs/media/preview.png">
  <img src="./docs/media/preview.png" alt="Pré-visualização do PrimeFlix" width="900" />
</a>

## Vídeo de demonstração

[▶ Ver demonstração curta](./docs/media/demo.mp4)

## Funcionalidades

- Lista filmes atualmente em cartaz através da API do TMDB.
- Mostra título, imagem, sinopse e avaliação de cada filme.
- Pesquisa trailers no YouTube.
- Guarda e remove filmes da lista pessoal através de `localStorage`.
- Mostra notificações de sucesso e de itens repetidos.

## O que aprofundei

- Gestão de estado e ciclo de vida de componentes com `useState` e `useEffect`.
- Navegação entre páginas e leitura de parâmetros de rota com React Router.
- Consumo assíncrono da API do TMDB com Axios, incluindo estados de carregamento e erro.
- Persistência de favoritos no `localStorage`, notificações e configuração segura de variáveis de ambiente.

## Tecnologias

<div align="center">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&amp;logo=javascript&amp;logoColor=black" alt="JavaScript" />
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&amp;logo=react&amp;logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&amp;logo=vite&amp;logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/React%20Router-CA4245?style=for-the-badge&amp;logo=reactrouter&amp;logoColor=white" alt="React Router" />
  <img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&amp;logo=axios&amp;logoColor=white" alt="Axios" />
  <img src="https://img.shields.io/badge/TMDB_API-01B4E4?style=for-the-badge&amp;logo=themoviedatabase&amp;logoColor=white" alt="TMDB API" />
</div>

## Como executar

```bash
npm install
cp .env.example .env
# Adiciona a tua chave da API do TMDB em VITE_TMDB_API_KEY
npm run dev
```

Para gerar uma chave, cria uma conta no [TMDB](https://www.themoviedb.org/settings/api). O ficheiro `.env` não é versionado.

## Scripts

```bash
npm run dev
npm run build
npm run lint
```
