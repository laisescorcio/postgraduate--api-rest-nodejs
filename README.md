# postgraduate--api-rest-nodejs

## To install
- `npm install`
- `npm i fastify`
- `npm i -D typescript`
- `npx tsc --init // to create tsconfig.json`
- `npm install -D @types/node`
- `npx tsc src/server.ts`
- `node src/server.js`
    - Node.js v18.18.2 = "fastify": "^4.24.0"
        OR
    - Node.js v20+ = "fastify": "^5.2.1"
- `npm i eslint @rocketseat/eslint-config -D` // eslint config
- `npm run knex -- migrate:make create-documents` // to create a data base table

## To run
- `npm run dev`

## Node + Typescript
Necessary to install `npm install -D @types/node`

## Fastify x Express

- Microframework (it doesn't require requirements to work, such as mass structure, which framework will work, etc.)
- Fastify has more updates than Express
- Fastify is more popular
- Fastifay is more performant
- Fastify is very similar to Express (if you ever need to work with Express there will be no problem)
- Fastify is more ready to deal with new JS features (TypeScript is already developed, Express has to be installed)
- Better working with async await (Express has to have a library)

## Fundamentals
### Options to communicate with Data Base
- Drivers: tools to help to communicate with data base 
    Example: 
        `SELECT id 
        FROM users 
        WHERE first_name = "Test" 
            AND last_name = "User"`
- Query Builders (KnexJs): to facilitate the communication using Javascript 
    Example: 
        `knex("users").where({
            first_name: "Test",
            last_name: "User"
        }).select("id")` 
- ORM

- Migrations: to work with data bases with a team - version management (timeline of changes of the data base tables)

## Tools

- SQLite: relational data base (SQLite, MySQL, PostgreSQL) - good performance
