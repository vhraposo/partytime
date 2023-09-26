# API RESTful para Eventos e Festas

🎪 Uma API completa para organizar seus eventos e festas!

### 🚀 Tecnologias:

- Node.js
- Express
- MongoDB
- Mongoose

### 📃 Documentação:

Endpoints:

```http
- /api/services: Cria, lista, recupera, atualiza e exclui serviços.
- /api/parties: Cria, lista, recupera, atualiza e exclui festas.
```

#### Requisições:

```
POST: Cria um novo registro.
GET: Recupera um registro.
PUT: Atualiza um registro.
DELETE: Exclui um registro.
```

#### Respostas:

```
200 OK: Sucesso.
400 Bad Request: Erro de requisição.
401 Unauthorized: Usuário não autenticado.
403 Forbidden: Usuário não autorizado.
404 Not Found: Registro não encontrado.
```

### 🔨 Instalação:

1. Clone o repositório:

```bash
git clone https://github.com/[seu-usuário]/api-eventos-festas.git
```

ou com a CLI

```bash
gh repo clone vhraposo/partytime
```

2. Instale as dependências:

```bash
npm install
```

3. Crie um arquivo .env como mostra o [.env.exemple](./.env.example)

4. Inicie o servidor:

```bash
npm start
```

🎉 Pronto! A API estará rodando na porta 3000.

### Exemplos de requisições:

## Criar um serviço

## Endpoints

### Cria um serviço

```http
curl http://localhost:3000/api/services
```

```json
{
  "name": "Algum serviço",
  "description": "Uma descrição",
  "price": 1000,
  "image": "https://example.com/imagem.jpg"
}
```

### Listar todos os serviços

- Metodo: GET

```http
curl http://localhost:3000/api/services
```

### Recuperar um serviço

```http
curl http://localhost:3000/api/services/1234567890
```

### Atualizar um serviço

- Metodo: PUT
  ```http
  curl http://localhost:3000/api/services/1234567890
  ```

```json
{
  "name": "Novo nome",
  "description": "Uma nova descrição",
  "price": 2000,
  "image": "https://example.com/nova-imagem.jpg"
}
```

### Excluir um serviço

- Metodo: DELETE
  ```http
  curl http://localhost:3000/api/services/1234567890
  ```

### Criar uma festa

- Metodo: POST
  ```http
  curl http://localhost:3000/api/parties
  ```

```json
{
  "title": "Minha festa",
  "author": "Victor",
  "description": "Uma festa de aniversário",
  "budget": 10000,
  "image": "https://example.com/imagem.jpg",
  "services": [
    {
      "name": "Algum serviço",
      "id": 1234567890
    }
  ]
}
```

## Listar todas as festas

```http
curl http://localhost:3000/api/parties
```

## Recuperar uma festa

```http
curl http://localhost:3000/api/parties/1234567890
```

## Atualizar uma festa

- Metodo: PUT
  curl http://localhost:3000/api/parties

```json
{
"title": "Minha festa atualizada",
"author": "Victor Raposo",
"description": "Uma
}
```
