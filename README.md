<!-- Visualizar: Ctrl + Shift + v -->
<!-- Icones: https://github.com/shyoutarou/README-Model/blob/master/gistfile1.md -->
<!--  mazera3/nlwvaloriza: Settings > Branches > Default branch > Switch default branch to another branch -->

<h1 align="center">NLW Valoriza - Aulas 👋 </h1>
<h1 align="center">
 <img alt="NLW Valoriza" height="100" title="" src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" />
</h1>

# Tecnologias Utilizadas no Projeto 💻

- Nodejs versão: v16.13.2
- Yarn versão: 1.22.10
- Typescript [Typescript](https://www.typescriptlang.org/docs/)
- Express [Express](https://expressjs.com/pt-br/)
- ts-node-dev
- git
- Type ORM
- Sqlite3
- Beekeeper Studio

## 🔨 Instalar Beekeeper Studio no Linux [linux - Apt / DEB](https://docs.beekeeperstudio.io/installation/#linux-installation)

### 🚧 Install our GPG key

wget --quiet -O - https://deb.beekeeperstudio.io/beekeeper.key | sudo apt-key add -

### add our repo to your apt lists directory

echo "deb https://deb.beekeeperstudio.io stable main" | sudo tee /etc/apt/sources.list.d/beekeeper-studio-app.list

### Update apt and install

- sudo apt update && sudo apt install beekeeper-studio

# 🏃‍♂️ Primeiros comandos:

- yarn init => Cria package.json
- yarn add typescript -D => Adicion a typescript como dependência de desenvlovimento
- yarn tsc --init => inicia o typescript
- yarn tsc
- yarn add express => Instala a bilioteca express
- yarn add ts-node-dev -D => Instala a biblioteca ts-node-dev

## 🚧 Criar script dentro de package.json

"scripts":{
"dev": "ts-node-dev src/server.ts",
"typeorm": "ts-node-dev ./node_modules/typeorm/cli.js"
},

## 🚧 Executa script

- yarn dev

## 🚧 Criar 1º Repositório

- criar .gitignore +> ignora determinados arquivos como `node_modules/`
- git init
- git add .
- git commit -m "aula 01"
- git branch -M aula01
- git remote add origin git@github.com:mazera3/nlwvaloriza.git
- git push -u origin aula01

## 🚧 Alterar Repositório para aula 02

- git add . && git commit -m "aula 02" && git branch -M aula02 && git push -u origin aula02

## :question: Métodos da api

:arrow_forward: GET => Buscar uma informação

:arrow_forward: POST => Inserir (Criar) uma informação

:arrow_forward: PUT => Alterar uma informação

:arrow_forward: DELETE => Remover um dado

:arrow_forward: PATCH => Alterar uma informação específica

- app.get('/', (req,res) =>{return res.send("Teste GET!!!");})

## :question: Tipos de parâmetros

- Ruotes Params => http://localhost:3000/produtos/93129128
- Query Params => http://localhost:3000/produtos?name=XXX&description=YYYY&outros=...
- Body Params => No corpo da requisição:
  {"name":"XXX",
  "description": "YYY",
  "outros":"..." }

## :question: Banco de dados

- Nativo: ex: node-postgres: https://node-postgres.com/
- Knex.js: https://knexjs.org/
- Sequelize ORM: https://sequelize.org/master/
- Type ORM: https://typeorm.io/#/
- Prisma ORM: https://www.prisma.io/

## 🚧 Usando o Type ORM

- yarn add typeorm reflect-metadata sqlite3
- import "reflect-metadata" em server.ts

## 🚧 ormconfig.json

- Criar arquivo ormconfig.json com as linhas:
- "type": "sqlite",
- "database": "src/database/database.sqlite",
- "cli": { "migrationsDir": "src/database/migrations", "entitiesDir": "src/entities" }

## 🚧 Comando TypeORM

- yarn typeorm -help
- typeorm executa: "ts-node-dev ./node_modules/typeorm/cli.js"
- Cria entidade como nome: CreateUsers: yarn typeorm migration:create -n CreateUsers
- Editar a tabela: 1646224012275-CreateUsers.ts
- definir em ormconfig.json os caminhos: migrations e entities
- executar: yarn typeorm migration:run
- reverter: yarn typeorm migration:revert
- criar entidade User: yarn typeorm entity:create -n User
- instalar @types/uuid: yarn add @types/uuid -D
- descomentar em tsconfig.json:
- "experimentalDecorators": true,
- "emitDecoratorMetadata": true,
- "strictPropertyInitialization": false,

## 🚧 Repositórios

- criar pasta/arquivo: repositories/UsersRepositories.ts

## 🚧 Services

- criar pasta/arquivo: services/CreateUserService.ts

## 🚧 Controllers

- criar pasta/arquivo: controllers/CreateUserController.ts

## 🚧 Controllers

- criar pasta/arquivo: controllers/CreateUserController.ts

## 🚧 Rotas

- criar arquivo de roras em src: tsroutes.ts

### Fluxo

- server -> controller -> service -> ...

## 🚧 MiddleWares

- middleware de tratamento de erros:
- Função com 4 parâmetros: app.use(err, request, response, next)
- err
- request
- response
- next
- Instalar a biblioteca: yarn add express-async-errors
- importar express-async-errors antes de router

## CreateTags

- Cria entidade como nome: CreateTags: yarn typeorm migration:create -n CreateTags
- Editar a tabela: 1646244129579-CreateTags.ts
- executar: yarn typeorm migration:run
- criar entidade Tags: yarn typeorm entity:create -n Tags
- criar arquivo: repositories/TagsRepositories.ts
- criar arquivo: controllers/CreateTagController.ts
- criar rota em routes

- criar pasta/arquivo:: middlewares/ensureAdmin.ts
- Se não for Admin - Status/401: [401](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status/401)

# JSON Web Token [jwt](https://jwt.io/)

- Biblioteca: [JsonWebToken](https://www.npmjs.com/package/jsonwebtoken)
- Instalação: npm install jsonwebtoken ou yarn add jsonwebtoken
- Tyipagem: yarn add @types/jsonwebtoken -D
- [Bcrypt](https://www.npmjs.com/package/bcryptjs): npm install bcryptjs ou yarn add bcryptjs
- Tyipagem: yarn add @types/bcryptjs -D
- Criar arquivo: repositories/ComplimentsRepositories.ts e entities/Compliment.ts

## Adicionar nova coluna chamada password ao User:

## 🚧 alterar password em entities, services e controllers

- yarn typeorm migration:create -n AlterUserAddPassweord
- executar: yarn typeorm migration:run
- Em entities/User.ts criar a coluna: @Column() password: string;
- Em services/CreateUserService.ts acrescentar: password
- Em controllers/CreateUserController.ts acrescentar: password

## 🚧 Authenticate User

- Criar arquivos:
  - services: AuthenticateUserService.ts
  - Gerar Key com a string (mazera3eebfmazzola2022) [md5](https://www.md5hashgenerator.com/)
  - Key gerada: d665ce14ecc982fd0529a7ce3027ac78 (recomenda-se deixar em .env) (process.env.KEY_TOKEN)
  - controller: AuthenticateUserController.ts
  - Acrescentar a rota /login em: routes.ts

## 🚧 Elogios

- yarn typeorm migration:create -n CreateCompliments
- Criar as chaves estrangeiras para as colunas: user_sender, user_receiver, tag_id
- name: FKTabelaNome
- referencedTableName: Tabela (referencia a qual tabela?)
- referencedColumnNames: Coluna (referencia a qwual coluna?)
- columnNames: Coluna (da tabela atual)
- onDelete: seta com null caso a referencia seja excluida.
- onUpdate: seta com null
  { 
  name: "FKTagCompliments", 
  referencedTableName: "tags",
  referencedColumnNames: ["id"],
  columnNames: ["tag_id"],
  onDelete: "SET NULL",
  onUpdate: "SET NULL",
  }
- executar: yarn typeorm migration:run

- Criar arquivos:
  - entities/Compliment.ts
  - repositories/ComplimentsRepositories.ts
  - services/CreateComplimentService.ts
  - controllers/CreateComplimentController.ts

## 🚧 Alterar Repositório para aula 05

- git add . && git commit -m "aula 05" && git branch -M aula05 && git push -u origin aula05

# Regras Feitas

- Cadastro de usuário

  [ x ] Não é permitido cadastrar mais de um usuário com o mesmo e-mail

  [ x ] Não é permitido cadastrar usuário sem e-mail

- Cadastro de TAG

  [ x ] Não é permitido cadastrar mais de uma tag com o mesmo nome

  [ x ] Não é permitido cadastrar tag sem nome

  [ x ] Não é permitido o cadastro por usuários que não sejam administradores

- Cadastro de elogios

  [ x ] Não é permitido um usuário cadastrar um elogio para si

  [ x ] Não é permitido cadastrar elogios para usuários inválidos

  [ x ] O usuário precisa estar autenticado na aplicação
  
# Arvore de diretórios
- Gerado com (<img alt="File Tree to Text Generator" height="30" title="File Tree to Text Generator" src="https://github.com/mazera3/nlwvaloriza/blob/main/img/FileTreetoTextGenerator.png" />)[File Tree to Text Generator](https://marketplace.visualstudio.com/items?itemName=d-koppenhagen.file-tree-to-text-generator)

# Ultima aula
## ensureAuthenticated
- Criar arquivo: middlewares/ensureAuthenticated.ts
- Criar pasta/arquivo: @types/express/index.d.ts
- Alterar tsconfig.json
  - "typeRoots": ["./src/@types"],
## Compliments
- Criar services/ListUserReceiveComplimentsService.ts
- Criar services/ListUserSendComplimentsService.ts
- Criar controllers/ListUserReceiveComplimentsController.ts
- Criar controllers/ListUserSendComplimentsController.ts
- Criar rotas: routes.ts
## Tags
- Criar services/ListTagsService.ts
- Criar controllers/ListTagsController.ts
- Criar rotas: routes.ts
- Instalar: yarn add class-transformer@v0.4.0 (ultima versão não funciona)
## Usuários
- Criar services/ListUsersService.ts
- Criar controllers/ListUsersController.ts
- Criar rotas: routes.ts

## Fron-end
- Instalar cors:
  - yarn add cors
  - yarn add @types/cors -D

## ENV
- yarn add env
- git rm .env.local --cached
- git rm .env --cached

# Árvore de diretórios
<pre>
src/
┣ @types/
┃ ┗ express/
┃   ┗ index.d.ts
┣ controllers/
┃ ┣ AuthenticateUserController.ts
┃ ┣ CreateComplimentController.ts
┃ ┣ CreateTagController.ts
┃ ┣ CreateUserController.ts
┃ ┣ ListTagsController.ts
┃ ┣ ListUserReceiveComplimentsController.ts
┃ ┣ ListUserSendComplimentsController.ts
┃ ┗ ListUsersController.ts
┣ database/
┃ ┣ migrations/
┃ ┃ ┣ 1646224012275-CreateUsers.ts
┃ ┃ ┣ 1646244129579-CreateTags.ts
┃ ┃ ┣ 1646311462095-AlterUserAddPassweord.ts
┃ ┃ ┗ 1646317282186-CreateCompliments.ts
┃ ┣ database.sqlite
┃ ┗ index.ts
┣ entities/
┃ ┣ Compliment.ts
┃ ┣ Tag.ts
┃ ┗ User.ts
┣ middlewares/
┃ ┣ ensureAdmin.ts
┃ ┗ ensureAuthenticated.ts
┣ repositories/
┃ ┣ ComplimentsRepositories.ts
┃ ┣ TagsRepositories.ts
┃ ┗ UsersRepositories.ts
┣ services/
┃ ┣ AuthenticateUserService.ts
┃ ┣ CreateComplimentService.ts
┃ ┣ CreateTagService.ts
┃ ┣ CreateUserService.ts
┃ ┣ ListTagsService.ts
┃ ┣ ListUserReceiveComplimentsService.ts
┃ ┣ ListUserSendComplimentsService.ts
┃ ┗ ListUsersService.ts
┣ routes.ts
┗ server.ts
</pre>

## 🚧 Alterar Repositório para MAIN

- git add . && git commit -m "Master" && git branch -M main && git push -u origin main