# Trybe Futebol Clube!

Esse é o projeto desenvolve uma API com CRUD para gerenciar uma concessionária de veículos. Nesse projeto foram aplicados conceitor de Programação Orientada a Objetos (POO) e SOLID. Tambeḿ foram desenvolvidos testes unitários para as camadas de Model, Service buscando desenvolver o projeto utilizando a metodologia TDD. Além disso foi utilizado o banco de dados MongoDB e o ORM Mongoose.

Esse foi um projeto desenvolvido durante o curso de desenvolvimento web da Trybe.

## Arquitetura Utilizada

A aplicação tentou aplicar a filosofia **SOLID** em conjunto com a arquitetura **MSC** e **orientação a objetos**. A seguir é apresentada a estrutura da aplicação back-end desenvolvida.

```
📦src
 ┣ 📂controllers
 ┃ ┣ 📜.gitkeep
 ┃ ┣ 📜Car.ts
 ┃ ┗ 📜Motorcycle.ts
 ┣ 📂errors
 ┃ ┗ 📜catalog.ts
 ┣ 📂interfaces
 ┃ ┣ 📜ICar.ts
 ┃ ┣ 📜IModel.ts
 ┃ ┣ 📜IMotorcycle.ts
 ┃ ┣ 📜IVehicle.ts
 ┃ ┗ 📜Iservice.ts
 ┣ 📂middleware
 ┃ ┗ 📜error.ts
 ┣ 📂models
 ┃ ┣ 📜.gitkeep
 ┃ ┣ 📜Cars.ts
 ┃ ┣ 📜MongoModel.ts
 ┃ ┣ 📜Motorcycle.ts
 ┃ ┗ 📜connection.ts
 ┣ 📂routes
 ┃ ┣ 📜Car.ts
 ┃ ┗ 📜Motorcycle.ts
 ┣ 📂services
 ┃ ┣ 📜.gitkeep
 ┃ ┣ 📜Car.ts
 ┃ ┗ 📜Motorcycle.ts
 ┣ 📂tests
 ┃ ┣ 📂mocks
 ┃ ┃ ┗ 📜carMocks.ts
 ┃ ┗ 📂unit
 ┃ ┃ ┣ 📂controllers
 ┃ ┃ ┃ ┗ 📜car.test.ts
 ┃ ┃ ┣ 📂models
 ┃ ┃ ┃ ┗ 📜car.test.ts
 ┃ ┃ ┗ 📂services
 ┃ ┃ ┃ ┗ 📜car.test.ts
 ┣ 📜app.ts
 ┗ 📜index.ts
```

## Tecnologias utilizadas

Na sequeência são listadas as principais tecnologias utilizadas para a implementação do projeto. Inicialmente são apresentadas as utilizadas para o desenvolvimento da aplicação:

- [Express](https://expressjs.com/): web framework para construir APIs com Node.js.
- [Mongoose](https://mongoosejs.com): é uma biblioteca JavaScript com orientação a objetos que cria uma conexão entre o banco de dados MongoDb e uma aplicação com Node.js.
- [TypeScript](https://www.typescriptlang.org): é um superset do JavaScript que adiciona tipagem estática à linguagem.
- [Zod](https://www.npmjs.com/package/zod): é uma biblioteca para validação de dados.
- [ESLint](https://eslint.org/) para padronização do código.

Para a implementação dos testes unitários foram utilizadas:

- [Mocha.js](https://mochajs.org/): é um framework JavaScript para criar testes assíncronos.
- [Sinon.js](https://sinonjs.org/): utilizado para realizar o stub de funções.
- [Chai](https://www.chaijs.com/): é uma biblioteca de asserção, que torna os testes mais legíveis.

Para a implementação do banco de dados se utilizou o [MongoDB](https://www.mongodb.com/), o qual rodou a partir de um container local. Todavia, outra opção é utilizar o serviço [Atlas](https://www.mongodb.com/atlas).

## Rodando o Projeto na sua máquina

Na sua máquina você deve ter:

- Sistema Operacional Distribuição Unix
- Node versão 16 (versão igual ou superior à `16.15.0 LTS`)
- Docker
- Docker-compose versão >=1.29.2

A seguir você encontra um guia de como instalar e rodar o projeto localmente. Em caso de dúvidas, problemas ou feedbacks, entre em contato.

Passo 1. Crie o repositório local utilizando `mkdir`:

```bash
mkdir project-car-shoop
```

Passo 2. Mude para o repositório criado:

```bash
cd project-car-shoop
```

Passo 3. Clone o projeto:

```bash
git clone git@github.com:heitortessaro/Car-Shoop.git
```

Passo 4. Mude para o diretório clonado:

```bash
cd Car-Shoop
```

Passo 5. Inslate todas as dependências:

```bash
npm install
```

Step 6. Rode os containers da aplicação

```bash
npm run compose:up
```

### Acessando a Aplicação Localmente

Depois de subir os container da aplicação, você pode acessar as rotas utilizando o endereço http://localhost:3001.

### Testando o Back-End

Neste projeto, a aplicação back-end foi desenvolvida seguindo os princípios do TDD (test driving development). Foram utilizados testes unitários para as camadas de Model, Service e Controller.

Para rodar os testes na sua máquina rodando o comando:

Passo 1. Rode os containers da aplicação:

```bash
docker-compose up -d
```

Passo 2. Rode o seguinte comando para acessar o terminal do container com a aplicação da API.

```bash
docker exec -it car_shop bash
```

Passo 3. Por precaução, certifique-se de que as dependências estão instaladas, rodando:

```bash
npm install
```

Passo 4. Rode o comando que executa os testes unitários:

```bash
npm run test:dev
```

Além disso, a cobertura dos testes também pode ser analisada com o comando:

```bash
npm run test:coverage
```

### Comandos Complementares

Caso você queira reiniciar a aplicação local, você pode desmontar os containers utilizando:

```bash
npm run compose:down
```

E depois reiniciar a aplicação com:

```bash
npm run compose:up
```
