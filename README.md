# README

# Front-End-ART-CREA
Repositório contendo a documentação e codificação do Front-End da solução da ART do CREA-CE 2023.

## Introdução
Este é um projeto de sistema Web que utiliza as tecnologias React Redux, Next, Tailwind, Javascript, MU, Axios, JWT de autenticação e Prisma como ORM.

## Instalação
Para instalar as dependências do projeto, utilize o comando:
```
npm install
```

## Configuração
Antes de rodar o projeto, é necessário criar um arquivo `.env.local` na raiz do projeto, contendo as variáveis de ambiente necessárias. O arquivo deve ter o seguinte formato:

```
DATABASE_URL=postgresql://user:password@host:port/database
JWT_SECRET=mySecretKey
```

- `DATABASE_URL` deve ser substituído com as informações de acesso ao banco de dados PostgreSQL utilizado pelo Prisma.
- `JWT_SECRET` é uma chave secreta que será usada para a autenticação JWT.

## Uso
Para rodar o projeto em modo de desenvolvimento, utilize o comando:
```
npm run dev
```

Para rodar o projeto em modo de produção, utilize o comando:
```
npm run build
npm start
```

## Tecnologias utilizadas
- React: Biblioteca Javascript para construir interfaces de usuário.
- Redux: Biblioteca Javascript para gerenciar o estado da aplicação.
- Next: Framework Javascript para construir aplicações web do lado do servidor.
- Tailwind: Biblioteca CSS utilitária para estilização rápida e consistente.
- MU: Biblioteca Javascript para implementação de UI components.
- Axios: Biblioteca Javascript para fazer requisições HTTP.
- JWT: Biblioteca Javascript para autenticação baseada em tokens.
- Prisma: ORM para interação com banco de dados PostgreSQL.

## Contribuição
Contribuições são sempre bem-vindas! Sinta-se à vontade para abrir issues e pull requests.

## Licença
Este projeto está licenciado sob a Licença Creative Commons Zero v1.0 Universal. Consulte o arquivo LICENSE para obter mais informações.
