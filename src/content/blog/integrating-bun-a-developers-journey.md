---
title: "Integrating Bun: A Developer's Journey"
description: "An outline of my initial exploration into Bun, including my impressions, and a speculation of the future outlook."
pubDatetime: 2023-11-23T21:00:00.000Z
ogImage: "/assets/images/bun-preview.jpg"
featured: true
slug: integrating-bun-a-developers-journey
tags: ["post mortem"]
---

I have often thought of the JavaScript ecosystem as a free market; where multiple solutions to the same problem can co-exist. In this dynamic environment, new tools can emerge and gain prominence by addressing the specific needs of developers. Recently, Bun has been the cause of "buzz" in the JavaScript "marketplace" with the release of [Bun 1.0](https://bun.sh/blog/bun-v1.0).

[Bun](https://bun.sh/) is a new JavaScript runtime and toolset that aims to fulfill the needs of the modern JavaScript ecosystem. Bun's selling points include:

- **Speed**: Bun extends the JavaScript Core engine, which prioritizes speed and powers Safari(the browser). In contrast, Node.js and Deno use the V8 engine that powers Chromium.

- **Better Tooling**: Aside from being a runtime, Bun also serves as a bundler, package manager and test runner.

- **Node.js Compatibility**: Bun is a drop-in replacement for Node.js; meaning you can run Node.js projects with Bun without significantly changing your code.

As a JavaScript/TypeScript developer, I found Bun's pitch to be quite compelling. Therefore, I set off on a journey to personally evaluate the noteworthy benefits it promises.

## Table of contents

![](/assets/images/bilbo.jpg)

## Getting Started

Before picking tools/libraries for my development workflow, I ask myself these three questions:

- **Does it prevent me from shooting myself in the foot?**
  This question mainly focuses on questioning a tool's or library's reliability and safety. It's about choosing a tool or library that has enough safeguards to protect against unintended consequences or potential missteps.

- **Does it get in my way when I'm rolling out new features?**
  This question assesses a tool's adaptability and user-friendliness. If a tool is a roadblock during feature development, it may not be the right fit.

- **Will it cost me more to use?**
  In addition to assessing the financial aspect, I consider the tool's resource demands. This involves memory usage, computational power, time consumed and other software or hardware resources it may require.

With these considerations in mind, I started the process of integrating Bun into my Node.js/Express API.

### Initial Setup

My local development environment had the following key features/components:

- **Application Stack**: Node.js/Express application
- **Language**: TypeScript
- **Database**: PostgreSQL
- **Deployment Tool**: Docker
- **Process flow**:
  - Code is written in TypeScript(".ts")
  - Transpilation from TypeScript to JavaScript
  - Node.js/Express server serving the application
  - PostgreSQL for data storage
  - Docker containers for running both the API and the Database.

The main benefit of this setup was the ability to operate the application in a self-contained environment, offering enhanced portability and isolation. Additionally, with this setup, I could start up my application in two commands; `docker compose build` and `docker compose up`. Moreover, the "it only works on my machine" issue is dealt with.

## The Integration Process

In the reconfigured setup, I wanted Bun to serve the following roles:

- **As a Runtime**: Bun is capable of executing TypeScript without requiring a transpilation step; thus simplifying the development. Moreover, Bun allows you to run your application in watch mode without installing another package.

- **As a Package manager**: Bun would replace npm in executing scripts in my project. Since Bun's main selling point is speed, I'd reap the intended benefits.

### Installation

First, I had to install Bun locally. To accomplish this, I run the following command on my Ubuntu computer:

```bash
curl -fsSL https://bun.sh/install | bash
```

Afterward, I ran `bun install` in my project's root directory. This action generated a `bun.lockb` file. This is a binary file that serves a similar role as `yarn.lock` and `package-lock.json`. The key distinction from the previously mentioned lock files lies in its binary format, which enables `bun.lockb` to store more data and load swiftly, resulting in enhanced performance.

### Streamlining Dependencies

Since Bun executes TypeScript out-of-the-box, we can remove the npm packages we added to support TypeScript. These packages include:

- **@types/node**: Provides types for node.js runtime

- **ts-node**: Provides a TypeScript execution engine and REPL for Node.

- **nodemon**: Provides hot reloading by automatically restarting Node.Js upon file changes.

I removed all these packages by running:

```bash
bun remove @types/node ts-node nodemon
```

Afterwards, I added the package bun/types using the command:

```bash
bun add bun-types
```

I also edited the tsconfig.json file to include bun-types in the global scope as follows:

```json
{
  "compilerOptions": {
    "types": ["bun-types"]
  }
}
```

### Updating the "dev" script

Before running the application, I added the following script in my project's package.json:

```json
{
  "scripts": {
    "dev": "bun --watch run ./src/index.ts"
  }
}
```

### Updating the Dockerfile

Initially, this was my Dockerfile.dev:

```yaml
FROM node:14-alpine

WORKDIR /app

COPY . .

RUN npm install

CMD ["npm", "run", "dev"]
```

I updated it to this:

```yaml
FROM oven/bun:1 as dev
WORKDIR /usr/src/app

COPY package.json bun.lockb ./

RUN bun install

COPY . .

CMD ["bun", "run", "dev"]
```

My `docker-compose.yml` file remained as follows:

```yaml
version: "3.8"
services:
  db:
    image: postgres:15.2-bullseye
    restart: always
    environment:
      POSTGRES_DB: bookclub
      POSTGRES_USER: master
      POSTGRES_PASSWORD: root
    ports:
      - 5432:5432
    volumes:
      - bookclub-postgres-data:/var/lib/postgres/data

  api:
    build:
      context: .
      dockerfile: Dockerfile.dev
    depends_on:
      - db
    volumes:
      - .:/app
    env_file:
      - ./env/.env.development
    ports:
      - 4000:4000
    restart: always

volumes:
  bookclub-postgres-data:
```

By following these steps, I successfully configured Bun as the runtime and package manager for my Node.Js/Express application. I got a running application at `http://localhost:4000` after running the `docker compose build` and `docker compose up` commands.

## Impact on Workflow

After switching to Bun, my setup became faster and used less space. Running both setups in [GIthub Codespaces](https://github.com/features/codespaces) yielded the following results:

Running `docker compose build` on the Node.Js setup finished in 69.2s as shown below:

![nodejs build image](/assets/images/docker-compose-node-build.png)

Running `docker compose build` on the Bun setup finished in 26.4s as shown below:

![bun build image](/assets/images/docker-compose-bun-build.png)

The docker image sizes also differ for both setups. The results were as follows:

For the Node.Js setup:

![nodejs docker image](/assets/images/docker-image-node.png)

For the Bun setup:

![bunjs docker image](/assets/images/docker-image-bun.png)

## Caveats

### Bun is still relatively new

Since this is version 1, users will occasionally run into unlikely bugs. I experienced this issue myself during my initial installation of Bun. When I ran `bun run index.ts`, there were no logs or feedback on my terminal. Fortunately, a fix was released shortly after my encounter, and I was able to get rolling.

### Challenges in Cloud Provider Integration

Due to Bun being relatively new, cloud providers have not rushed to provide supporting infrastructure for it. Consequently, there are cases where Node.Js outperforms Bun due to the optimizations these providers have implemented for Node.Js. The following articles outline this issue in the context of AWS lambda; where performance is very important:

- [https://medium.com/@mitchellkossoris/serverless-bun-vs-node-benchmarking-on-aws-lambda-ecd4fe7c2fc2](https://medium.com/@mitchellkossoris/serverless-bun-vs-node-benchmarking-on-aws-lambda-ecd4fe7c2fc2)

- [https://lumigo.io/blog/is-bun-the-next-big-thing-for-aws-lambda-a-thorough-investigation/](https://lumigo.io/blog/is-bun-the-next-big-thing-for-aws-lambda-a-thorough-investigation/)

### Bun has backward compatibility issues

When Bun 1.0 was released, libraries such as [Pino](https://github.com/pinojs/pino) and [Fastify](https://github.com/fastify/fastify) had problems working with Bun because Bun did not support all Node.js APIs, as indicated [here](https://adventures.nodeland.dev/archive/my-thoughts-on-bun/). This resulted in the lead maintainer of Fastify giving [this response](https://twitter.com/matteocollina/status/1700489064867123674) on Twitter to clarify this issue. Again, Bun is relatively new and these issues are expected as they iron them out.

## Conclusion

Bun feels like a true challenger to Node.js, the default runtime for people who want to run JavaScript or TypeScript on the server. While there are many unknowns with Bun, especially regarding the success of its all-in-one approach, it's been a while since I've felt this excited about a new JavaScript runtime. As a participant in the JavaScript marketplace, I'm always rooting for alternate solutions to the problems we face as developers.

## Additional Resources

- [Unleashing the Speed: Exploring the Power of Bun.js and the Future of JavaScript Runtimes](https://medium.com/data-science-community-srm/unleashing-the-speed-exploring-the-power-of-bun-js-and-the-future-of-javascript-runtimes-a689ff274952)

- [Bun's official documentation](https://bun.sh/docs)

- [Bun's Discord Community](https://bun.sh/discord)
