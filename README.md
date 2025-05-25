# 📇 API Lista de Contatos

API simples feita em Node.js com TypeScript que permite listar, adicionar e remover contatos. Os dados são armazenados em um arquivo `.txt`, sem necessidade de banco de dados.

---

## ✅ Funcionalidades

- Listar todos os contatos
- Criar um novo contato
- Deletar um contato pelo nome

---

## 🧰 Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/)
- [Helmet](https://helmetjs.github.io/)
- [TSX](https://www.npmjs.com/package/tsx) – para rodar TypeScript direto no terminal

---

## 📦 Pré-requisitos

- Node.js instalado (versão recomendada: 18+)
- npm (gerenciador de pacotes)

---

## ⚙️ Instalação e Execução

### 1. Clone o repositório

```bash
git clone https://github.com/guilhermedomeneghini/node-api-contatos
cd node-api-contatos
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Execute o servidor em modo desenvolvimento

```bash
npm run dev
```

> Isso usará o `tsx` para executar `src/server.ts` em modo watch.

---

## 🗂️ Estrutura de Pastas

```
api-lista-contatos/
└── data/
    └── list.txt         # Arquivo onde os dados são armazenados
├── package.json
├── tsconfig.json
└── src/
    └── routes
        └── index.ts     # Arquivo das rotas
    └── server.ts        # Arquivo principal da aplicação
    └── services.ts
        └── contact.ts  # Funções das rotas (Ex: delete, create, list)
```

---

## 🔌 Endpoints da API

### ✅ Listar Contatos

**GET** `/contatos`  
Retorna todos os contatos salvos.

📄 Exemplo de resposta:
```json
[
  "João da Silva",
  "Maria Oliveira"
]
```

---

### ➕ Criar Contato

**POST** `/contato`

📥 Body (JSON):
```json
{
  "name": "João da Silva",
}
```

📄 Resposta:
```json
{
  "mensagem": "Contato Fulano adicionado com sucesso!"
}
```

---

### ❌ Deletar Contato

**DELETE** `/contato?name=Guilherme`  
Remove um contato pelo nome utilizando Query Params

📄 Resposta:
```json
{
  "mensagem": "Contato Fulano deletado com sucesso!"
}
```

---

## 📝 Formato dos Dados

Os contatos são armazenados no arquivo `list.txt`, no seguinte formato (um por linha):

```
João da Silva
Maria Oliveira
```

---

## 🛡️ Segurança

Esta API usa o middleware [Helmet](https://www.npmjs.com/package/helmet) para adicionar cabeçalhos de segurança HTTP.

---
