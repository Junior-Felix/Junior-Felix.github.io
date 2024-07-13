---
title: "Catching up with Node.js Improvements"
pubDatetime: 2024-05-08T00:00:00.000Z
ogImage: "/assets/images/catching-up-with-node.jpg"
description: "A summary of node.js features I like from the latest versions."
featured: false
tags:
  - node.js
slug: "catching-up-with-node.js-improvements"
---

I'll admit it; I may have skipped the last few Node.js release notes. The only thing I've done is upgrading dependencies and dockerfiles to mitigate against security vulnerabilities. When Node.js 22 was released, I decided to look into Node.js improvements and I was pleasantly surprised. Here are some of the features I liked.

- **Node.js Watch Mode**: For a while now, making incremental changes to Node.js application, without restarting the server, has always been a pain. To fulfill this need, [nodemon](https://www.npmjs.com/package/nodemon) has been a go-to tool in my Node.js projects. With node.js 22, I only need to add this line to my package.json, and I'm set.
  ```json
  {
    "scripts": {
      "dev": "node --watch ./src/index.js"
    }
  }
  ```
- **Built-in .env Files Support:** Using .env files has become a standard in most of my Node.js setups. Prior to Node.js 20, adding .env files into a Node.js project required a third party library. In my case, I've used the [dotenv npm package](https://www.npmjs.com/package/dotenv) to serve this purpose. In Node.js 22, I can add the following lines in my package.json and it works:
  ```json
  {
    "scripts": {
      "start": "node --env-file ./env/.env.prod ./src/index.js",
      "dev": "node --env-file ./env/.env.dev --watch ./src/index.js"
    }
  }
  ```
- **Stable Fetch API:** The Fetch API has been a standard of making network requests in the browser environment. Its key advantage is its simplicity, which helps users avoid complex callback structures. As of Node.js 21, the Fetch API has been stable; which has npm libraries such as [node-fetch](https://www.npmjs.com/package/node-fetch) redundant.
- **Text Styling Feature**: Node.js has a feature that allows you to easily style text in your console logs. An example of this can be as follows:
  ```javascript
  import { styleText } from "node:util";
  const errorMessage = styleText("red", "I am error! I am error!");
  console.log(errorMessage);
  ```
  Adding underline, bold or italic formats can be achieved as follows:
  ```javascript
  import { styleText } from "node:util";
  const italicMessage = styleText("italic", "rare Node.js Dub");
  const boldMessage = styleText("bold", "I am boulder");
  ```
  More formats are available in the [Node.js docs](https://nodejs.org/api/util.html#modifiers).
- **Built-in Test Runner:** The JavaScript community has been relying on test frameworks such as [Jest](https://jestjs.io/) and [Mocha](https://mochajs.org/) to run tests. As of version 20, Node.js built-in test runner has been [declared stable](https://nodejs.org/en/blog/announcements/v20-release-announce#stable-test-runner). This means users now have the option to replace third-party test frameworks with the built-in solution.

Overall, I am happy with the improvements that Node.js has implemented. The fewer additional npm packages needed in my Node.js projects, the better. I also acknowledge the impact of other JavaScript runtimes such as Bun and Deno, which seem to motivate Node.js to improve.

## Credits

Featured Image: Photo by [Anton Mislawsky](https://unsplash.com/@antonmislawsky?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash) on [Unsplash](https://unsplash.com/photos/person-pouring-liquor-from-clear-glass-bottle-into-wine-glass-amQPH1ZOzBQ?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash)
