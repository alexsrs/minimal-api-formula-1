<div align="center">

  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs-6qziLk5rwaX6pFpElxk4N89awppGDlGmg&s" alt="Logo" height="200">
  <h1 align="center"><strong>MINIMAL API - FORMULA 1</strong></h1>
  <p align="center">
	  This project is a minimal API designed for Formula 1 enthusiasts. It provides a lightweight and efficient backend built with Fastify and TypeScript. The system allows users to retrieve information about Formula 1 teams, drivers, and races through a set of pre-defined endpoints. With its modular architecture, it is easy to extend and integrate with other services. The API is optimized for performance and adheres to modern development practices, making it a great starting point for building scalable applications.
    </p>
    <p>
    Don't start a new Node project from zero!<br> Use this simple <b>Nodejs</b> boilerplate with pre-configured <b>Typescript</b> in a modern way.
    </p>
    <p>
    Node blue boilerplate - https://github.com/alexsrs/node-blue-boilerplate
    </p>

</div>

<br />

  <!-- Badges -->
<div align="center">
  
  [![TypeScript version][ts-badge]][typescript-5-4]
  [![Node.js version][nodejs-badge]][nodejs]
  [![Fastify version][fastify-badge]][fastify]

</div>

# 🚀 Technologies

This code source was developed with the following items:

### 📦 Dependencies

- [typescript][typescript-npm] - Superset for application scale JavaScript development
- [tsx][tsx-npm] - TypeScript Execute (tsx): Enable Node.js to run TypeScript
- [tsup][tsup-npm] - Bundle your TypeScript library with no config, powered by esbuild
- [@types/node][@types/node-npm] - type definitions for node
- [fastify][fastify-npm] - Minimal API using Fastify
- [@fastify/cors] - enables the use of CORS in a Fastify application.

### 📄 Files

- `.gitignore` - Ignore folders like node_modules
- `.env` - Enviroment variables
- `tsconfig.json` - Typescript configure Options

### ⚡ Scripts

- `npm run dist`: Compiles TypeScript files to JavaScript in the dist directory.
- `npm run start:dev`: Runs the server in development mode with environment variables loaded from the .env file.
- `npm run start:watch`: Runs the server in development mode with support for automatic reload on file changes.
- `npm run start:dist`: Compiles the project and runs the compiled version from the dist directory.

# 👨‍💻 How To Use

To clone and run this application, you'll need [Git](https://git-scm.com), [Node.js v20+](https://nodejs.org/en/) + [NPM v10+](https://nodejs.org/en/) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/alexsrs/minimal-api-formula-1.git

# Go into the repository
$ cd .\minimal-api-formula-1\

# Install dependencies
$ npm install

# run dev mode
$ npm run start:dev
```

## Author


| [<img src="https://avatars.githubusercontent.com/u/9590903?s=96&v=4"><br><sub>Alex Sandro R. de Souza</sub>](https://github.com/alexsrs) |
| :---------------------------------------------------------------------------------------------------------------------------------------: |
|                                            [Linkedin](https://www.linkedin.com/in/alex4/)                                             |

[typescript]: https://www.typescriptlang.org/
[typescript-5-4]: https://www.typescriptlang.org/
[ts-badge]: https://img.shields.io/badge/TypeScript-v5.4-blue.svg
[nodejs-badge]: https://img.shields.io/badge/Node.js->=%2020.00-blue.svg
[fastify-badge]: https://img.shields.io/badge/Fastify-v5.2.2-blue.svg

[nodejs]: https://nodejs.org/
[typescript-npm]: https://www.npmjs.com/package/typescript
[tsx-npm]: https://www.npmjs.com/package/tsx
[tsup-npm]: https://www.npmjs.com/package/tsup
[@types/node-npm]: https://www.npmjs.com/package/@types/node

[fastify-npm]: https://www.npmjs.com/package/fastify
[fastify]: https://fastify.dev/
[@fastify/cors]: https://www.npmjs.com/package/@fastify/cors