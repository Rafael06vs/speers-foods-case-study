# Speers Foods — Showcase (demonstração)

Projeto demonstrativo de interface desenvolvido em React, TypeScript e Vite. **Não é o sistema oficial de vendas.**

## Executar

```bash
npm ci
npm run dev
```

Para gerar os arquivos estáticos: `npm run build` (saída em `dist/`).

## Escopo público

- Catálogo reduzido com identificadores fictícios, sem preços, códigos de fornecedores ou dados de estoque.
- Carrinho e avaliações são simulações: **não enviam informações**.
- Não há autenticação administrativa, conexão Supabase, API de orçamentos ou integração ERP.
- Os assets incluídos são referências visuais; confirme autorização de uso de marcas, fotos e logotipos antes da publicação.

## Publicar

Crie um **repositório novo**, sem reutilizar o histórico Git do projeto interno. Não inclua `.env`, `node_modules`, `dist` ou quaisquer arquivos internos.

Deploy estático (por exemplo, Render): build `npm ci && npm run build`; diretório `dist`.

> Portfólio independente. Dados e fluxos de contato são demonstrativos.
