# Portfólio — Nelson Alexandre Matsinhe

Portfólio profissional de Nelson Alexandre Matsinhe, desenvolvedor Full-Stack em Maputo, Moçambique. A aplicação apresenta projetos, experiência, tecnologias e contactos.

## Tecnologias

- React 19 e TypeScript
- Vite 7
- Motion para animações subtis e interações, com suporte a movimento reduzido
- CSS próprio com Tailwind CSS 4 integrado no build

## Desenvolvimento

```sh
npm install
npm run dev
```

## Validação e publicação

```sh
npm run lint
npm run build
npm run preview
npm run deploy
```

O build gera os ficheiros estáticos em `dist/` e pré-renderiza a página inicial com a API SSR do Vite, sem dependências adicionais. O React hidrata o HTML gerado. A base de publicação está definida como `/portfolio/` em `vite.config.ts`, e o endereço canónico é `https://nelsonmatsinhe.github.io/portfolio/`. `npm run deploy` publica a pasta `dist/` através do pacote `gh-pages`.

As capturas de projetos ficam em `public/projects/`; os metadados e os dados apresentados na página estão centralizados em `src/data.ts`.
