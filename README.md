# Adonis API application

This is the boilerplate for creating an API server in AdonisJs, it comes pre-configured with.

1. Bodyparser
2. Authentication
3. CORS
4. Lucid ORM
5. Migrations and seeds
6. Jobs/File - Redis
7. Hooks
8. Services Exception

## Setup

Use o seguinte comando para instalar todas as dependencias

```bash
yarn install
```
ou

```bash
npm install
```


### Migrations

Execute a migrations para gerar as tabelas no banco de dados

```js
adonis migration:run
```

### Execute
Execute o servidor para ter acesso a api no http://localhost:3333

```bash
adonis serve --dev
```
