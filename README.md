<!-- Visualizar: Ctrl + Shift + v -->
<!-- Icones: https://github.com/shyoutarou/README-Model/blob/master/gistfile1.md -->

<h1 align="center">NLW Valoriza - Aulas 👋 </h1>
<h1 align="center">
 <img alt="NLW Valoriza" height="100" title="" src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" />
</h1>

# Tecnologias Utilizadas no Projeto 💻

* Nodejs versão: v16.13.2
* Yarn versão: 1.22.10
* Typescript
* Express
* ts-node-dev
* git
* Type ORM
* Sqlite3
* Beekeeper Studio

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

 :arrow_forward: GET    => Buscar uma informação
 :arrow_forward:  POST   => Inserir (Criar) uma informação
 :arrow_forward:  PUT    => Alterar uma informação
 :arrow_forward:  DELETE => Remover um dado
 :arrow_forward:  PATCH  => Alterar uma informação específica
 
- app.get('/', (req,res) =>{return res.send("Teste GET!!!");})

## :question: Tipos de parâmetros

* Ruotes Params => http://localhost:3000/produtos/93129128
* Query Params => http://localhost:3000/produtos?name=XXX&description=YYYY&outros=...
* Body Params => No corpo da requisição:
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

# Regras Feitas

- Cadastro de usuário

  [ x ] Não é permitido cadastrar mais de um usuário com o mesmo e-mail

  [ x ] Não é permitido cadastrar usuário sem e-mail

- Cadastro de TAG

  [ ] Não é permitido cadastrar mais de uma tag com o mesmo nome

  [ ] Não é permitido cadastrar tag sem nome

  [ ] Não é permitido o cadastro por usuários que não sejam administradores

- Cadastro de elogios

  [ ] Não é permitido um usuário cadastrar um elogio para si

  [ ] Não é permitido cadastrar elogios para usuários inválidos

  [ ] O usuário precisa estar autenticado na aplicação