
API RESTful para Eventos e Festas

🎪 Uma API completa para organizar seus eventos e festas!

🚀 Tecnologias:

Node.js <br>
Express <br>
MongoDB <br>
Mongoose <br>
<br>
📃 Documentação:

Endpoints:
/api/services: Cria, lista, recupera, atualiza e exclui serviços. <br>
/api/parties: Cria, lista, recupera, atualiza e exclui festas. <br>
Requisições:  <br>
POST: Cria um novo registro. <br>
GET: Recupera um registro. <br>
PUT: Atualiza um registro. <br>
DELETE: Exclui um registro. <br>
Respostas: <br>
200 OK: Sucesso. <br>
400 Bad Request: Erro de requisição. <br>
401 Unauthorized: Usuário não autenticado. <br>
403 Forbidden: Usuário não autorizado. <br>
404 Not Found: Registro não encontrado. <br>

🔨 Instalação: 

Clone o repositório: <br>
git clone https://github.com/[seu-usuário]/api-eventos-festas.git <br>
Instale as dependências: <br>
npm install <br>
Crie um arquivo .env com as seguintes variáveis de ambiente: <br>
MONGODB_URI=mongodb://localhost:27017/api-eventos-festas <br>
Inicie o servidor: <br>
npm start <br>
🎉 Pronto! A API estará rodando na porta 3000. <br>

Exemplos de requisições: <br>

# Criar um serviço <br>
curl -X POST \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Algum serviço",
    "description": "Uma descrição",
    "price": 1000,
    "image": "https://example.com/imagem.jpg"
  }' \
  http://localhost:3000/api/services
<br>
# Listar todos os serviços  <br>
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
<br>
# Excluir um serviço <br>
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
<br>
# Listar todas as festas <br>
curl http://localhost:3000/api/parties
<br>
# Recuperar uma festa
curl http://localhost:3000/api/parties/1234567890
<br>
# Atualizar uma festa
curl -X PUT \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Minha festa atualizada",
    "author": "Victor Raposo",
    "description": "Uma
