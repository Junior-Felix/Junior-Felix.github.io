---
title: "The Discourse Around React Server Components"
description: "Explore the evolving conversation about React Server Components"
pubDatetime: 2023-10-13T21:00:00.000Z
ogImage: "/assets/images/preview-image-rsc.png"
featured: false
slug: the-discourse-around-react-server-components
tags: ["insight"]
---

On December 21, 2020, an [RFC](https://github.com/reactjs/rfcs/pull/188) was published in ReactJs that started the React Server Components discussion. This RFC was accompanied by a [YouTube video](https://www.youtube.com/watch?v=TQQPAU21ZUw) that detailed an implementation that would allow ReactJs developers to ship zero bundle-sized components. The bundle size issue frequently arises when React applications face performance issues. Consequently, over the years, the react community has developed strategies such as tree shaking, minification, code-splitting and lazy loading to reduce bundle size.

Despite solving a significant problem, React Server Components have received mixed reactions from the ReactJs community. To get a clearer picture of this discourse, let us start with an understanding of React Server Components.

## Table of contents

## Understanding React Server Components

As the name suggests, RSCs are React Components that run exclusively on the server.

During ReactJs's early years, Client Side Rendering (CSR) was the norm. Consequently, when a browser visited a website built with ReactJs, it would receive an HTML file that resembled this:

```xml
<!DOCTYPE html>
<html>
  <body>
    <div id="root"></div>
    <script src="/static/js/bundle.js"></script>
  </body>
</html>
```

The bundle.js file would contain all the rendering logic and include all the ReactJs code that had been written. Upon receiving the bundle.js file, the browser would parse the JavaScript and show the intended content to the user.

The problem that came with this approach is that as the application grew in complexity, the bundle size also increased. Consequently, users are likely to experience longer loading times; which is a negative in user experience.

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1694293302575/273b0a2d-5600-45d8-a2c7-1ef51561eb60.jpeg)

Let's take a closer look at an example of a React Server Component:

```javascript
async function ItemsPage() {
  const data = await fetch("your-api-url/items/");

  return (
    <>
      <h1>Available Items</h1>
      {data.items.map((item) => (
        <article>
          <h1>{data.title}</h1>
          <p>{data.description}</p>
        </article>
      ))}
    </>
  );
}

export default Itemspage;
```

In this instance, the data fetching is carried out on the server and the corresponding HTML is generated. The browser receives an HTML document without the JavaScript that was used in its creation.

Additionally, since this component is on the server, it has direct access to the server's database and filesystem.

Apart from reduced bundle size, server components offer the following benefits:

- **Improved data fetching**: By moving data fetching to the server, the amount of network requests the client has to make is reduced significantly. Moreover, fetching data in this manner reduces the need for loading states and data query libraries; which simplifies the developer experience.
- **Caching**: As rendering occurs on the server, the resulting HTML and assets can be cached and reused when a similar request is received. This is significantly better than re-rendering on each request; resulting in better performance.
- **Improves First Contentful Paint(**[**FCP**](https://web.dev/fcp/)**) metric**: Since HTML is generated on the server, the client does not have to download and parse JavaScript before rendering. Consequently, initial load time is shortened; thus resulting in a better user experience.

## Community Adoption and Response

Currently, it is not advisable to use React Server Components with React only as a library in production. Instead, React meta-frameworks are highly recommended. Among those frameworks, NextJs has emerged as the top advocate for RSCs.

It is important to note that other alternatives such as
[Waku](https://github.com/dai-shi/waku) and [Vite RSC
Experiments](https://github.com/cyco130/vite-rsc) implement RSCs. For a simple
implementation, the [simple rsc
repository](https://github.com/bholmesdev/simple-rsc) would suffice.

### React Server Components in NextJs

Vercel went all in on RSCs in their NextJs 13 rollout. They developed the [App Router](https://nextjs.org/docs/app) that is built on RSCs which provides support for features such as parallel routes, intercepting routes, layouts, loading states and error handling. Additionally, Vercel strongly recommends using the app router when building applications with NextJs.

### Community Response

As mentioned earlier, the React Server Components have received mixed reactions. On one hand, we have RSC adopters who are experiencing its intended benefits. For instance, the team behind [dbt docs](https://github.com/dbt-labs/dbt-docs) was able to reduce page load time from 4.5s to 220ms and memory storage from 350 MB to 16 MB, as detailed [here](https://dagster.io/blog/dbt-docs-on-react).

On the other hand, there seems to be a lot of frustration in the ReactJs community. Some of the concerns voiced in this frustration include:

**Added Complexity**

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1694634293165/f30002c6-0a75-444d-9c25-daaff21b39f7.jpeg)

sauce: [https://x.com/MelkeyDev/status/1655620353601974274?s=20](https://x.com/MelkeyDev/status/1655620353601974274?s=20)

For a significant number of ReactJs developers, server components introduce added complexity to the development of ReactJs applications. Before server components, the decision of whether a component should be server-side or client-side wasn't a factor to consider.

**Limited Documentation**

Currently, apart from the basic implementation of React Server Components and NextJs documentation, there is inadequate documentation around RSC. The Next.js documentation is well-written; however, it's confined in scope as it primarily caters to individuals utilizing Next.js. Therefore, changes brought by RSC are likely to leave library maintainers at a disadvantage. This is further elaborated in [this blog post](https://phryneas.de/react-server-components-controversy) by [Lenz Weber-Tronic](https://phryneas.de/), a co-maintainer of Redux Toolkit and TypeScript Apollo Client.

**RSC Makes Library Maintenance Harder**

Since React Server Components run exclusively on the server, libraries have to accommodate the server context during development. Moreover, development features such as React Context and hooks such as useState are not available; hence libraries are likely to experience errors when used with server components.

## Conclusion

Despite React Server Components being touted as the future, it is important to note that they don't work for every ReactJs application. At the end of the day, the goal is to provide a better user/developer experience and RSC are just a tool to get there. Therefore, it would be wise to consider if they are a good fit for the application you are building before going all in.

## Additional Resources

Here are some resources that helped me understand server components better:

### Introduction

- [https://www.joshwcomeau.com/react/server-components/#introduction-to-react-server-components-3](https://www.joshwcomeau.com/react/server-components/#introduction-to-react-server-components-3)
- [https://www.mux.com/blog/what-are-react-server-components](https://www.mux.com/blog/what-are-react-server-components)

### Repositories That Use RSC

- [https://github.com/SashenJayathilaka/Airbnb-Build](https://github.com/SashenJayathilaka/Airbnb-Build)
- [https://github.com/sadmann7/skateshop](https://github.com/sadmann7/skateshop)
- [https://github.com/joschan21/breadit](https://github.com/joschan21/breadit)

  [This Week In React](https://thisweekinreact.com/) is a great resource that keeps readers up to date with what's happening in
  the ReactJs developer community. Kindly consider subscribing!
