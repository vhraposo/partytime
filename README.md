
API RESTful para Eventos e Festas

🎪 Uma API completa para organizar seus eventos e festas!

🚀 Tecnologias:

Node.js
Express
MongoDB
Mongoose
📃 Documentação:

Endpoints:
/api/services: Cria, lista, recupera, atualiza e exclui serviços.
/api/parties: Cria, lista, recupera, atualiza e exclui festas.
Requisições:
POST: Cria um novo registro.
GET: Recupera um registro.
PUT: Atualiza um registro.
DELETE: Exclui um registro.
Respostas:
200 OK: Sucesso.
400 Bad Request: Erro de requisição.
401 Unauthorized: Usuário não autenticado.
403 Forbidden: Usuário não autorizado.
404 Not Found: Registro não encontrado.
🔐 Segurança:

Autenticação: Usuários são autenticados com o token JWT.
Autorização: Usuários são autorizados com base no seu papel.
🔨 Instalação:

Clone o repositório:
git clone https://github.com/[seu-usuário]/api-eventos-festas.git
Instale as dependências:
npm install
Crie um arquivo .env com as seguintes variáveis de ambiente:
MONGODB_URI=mongodb://localhost:27017/api-eventos-festas
Inicie o servidor:
npm run dev
🎉 Pronto! A API estará rodando na porta 3000.

Exemplos de requisições:

# Criar um serviço
curl -X POST \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Algum serviço",
    "description": "Uma descrição",
    "price": 1000,
    "image": "https://example.com/imagem.jpg"
  }' \
  http://localhost:3000/api/services

# Listar todos os serviços
curl http://localhost:3000/api/services

# Recuperar um serviço
curl http://localhost:3000/api/services/1234567890

# Atualizar um serviço
curl -X PUT \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Novo nome",
    "description": "Uma nova descrição",
    "price": 2000,
    "image": "https://example.com/nova-imagem.jpg"
  }' \
  http://localhost:3000/api/services/1234567890

# Excluir um serviço
curl -X DELETE \
  http://localhost:3000/api/services/1234567890

# Criar uma festa
curl -X POST \
  -H "Content-Type: application/json" \
  -d '{
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
  }' \
  http://localhost:3000/api/parties

# Listar todas as festas
curl http://localhost:3000/api/parties

# Recuperar uma festa
curl http://localhost:3000/api/parties/1234567890

# Atualizar uma festa
curl -X PUT \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Minha festa atualizada",
    "author": "Victor Raposo",
    "description": "Uma
