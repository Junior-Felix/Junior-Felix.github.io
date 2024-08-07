---
title: "Revisiting GraphQL in 2023"
description: "A deep dive into the state of GraphQL in 2023"
pubDatetime: 2023-10-03T21:00:00.000Z
ogImage: "/assets/images/preview-image-graphql-1.png"
featured: false
slug: revisiting-graphql-in-2023
tags: ["deep dive"]
---

I first interacted with GraphQL in late 2019 in the [Saleor open source project](https://github.com/saleor/saleor). At the time, it had a lot of hype around it because it came from Meta(formerly Facebook), whose engineering team had open-sourced called ReactJs. I remember finding GraphQL fascinating because the principles that inspired seemed solid and it offered solutions to problems that using REST posed. Moreover, GraphQL was adopted by companies such as Airbnb and Github which gave it legitimacy as a viable alternative to REST.

In this article, I am going to explore the current state of GraphQL, considering its evolution since my first experience with it. To accomplish this, we are going to start with a brief introduction of GraphQL.

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1693792569047/6aa57d8f-9c65-4a3d-963a-14933d127786.jpeg)

## Table of contents

## An Introduction of GraphQL

GraphQL is a query language for APIs that empowers clients to ask for exactly what they need from pre-existing data sources. According to [Wikipedia](https://en.wikipedia.org/wiki/GraphQL), Meta (formerly Facebook) commenced development of GraphQL in 2012 and used it internally until it was released as open source in 2015. At the time, Meta encountered limitations of the REST and thus came up with GraphQL to address these shortcomings, as outlined [here](https://engineering.fb.com/2015/09/14/core-data/graphql-a-data-query-language/). Some of these bottlenecks are as follows:

### Over-fetching/Under-fetching of Data

Let’s say you’re building a user profile page in your web application and you only need the username and email of the user. Using the REST approach, you would need to perform a GET request to the `/user/<id>` endpoint that would return a result that resembles the following:

```json
{
	"id": "randomIdFffs",
	"username": "chaduser",
	"email": "gigachad@ayahoo.com",
	"createdAt": "2023-15-05 23:04:42",
	"address": {..},
	"verified": "false"
}
```

In this scenario, the client does not need the other fields apart from username and email; thus resulting in over-fetching. While this might not noticeably impact performance in a small application, it becomes problematic in a larger application. Over-fetching can lead to increased response times and unnecessary bandwidth consumption, negatively affecting the overall user experience. On the other hand, GraphQL clients can specify the exact data they need; thus avoiding the overfetching problem. Using the above scenario, we can structure our query to only fetch username as follows:

```json
query{
	User(id: "randomIdFffs") {
		username
		email
	}
}
```

By performing the above query, you will retrieve only the "username" and "email" properties of the user.

Using the same analogy, let’s say we want to display a user’s posts on the user profile age, including the post titles and descriptions. The current API request (a GET request to `/users/<id>`) does not provide us with the additional information we need. To implement this feature, we would need to make another GET request, thus showcasing the under-fetching problem of using REST APIs. In contrast, GraphQL allows you to get all the data you need in one query. The above scenario can be executed as follows:

```graphql
query {
  User(id: "") {
    username
    email
    posts {
      title
      description
    }
  }
}
```

### Multiple Endpoints

When working with REST APIs, the use of multiple endpoints can be a pain in large-scale applications. Let’s say we are building a blog website and we need to display each of our posts in their own pages. To accomplish this, we may need three endpoints:

- `/posts/<id>` to retrieve post content.
- `/users/<id>` to retrieve author information.
- `/posts/<postId>/comments` to retrieve post comments.

Using this approach would result in multiple round trips; just to retrieve a single blog post; thus showing the inefficiency that comes with the REST methodology. Moreover, additional client-side logic would be needed to ensure that the data is retrieved in the right sequence.

On the other hand, GraphQL facilitates the querying of multiple resources from a single endpoint; thus eliminating the drawbacks that come with multiple endpoints. Additionally, the need for multiple round trips to the server is eliminated since all this information can be retrieved with one request.

### API Versioning

In REST APIs, it is common practice to version APIs whenever a breaking change is introduced. Consequently, we may end up having multiple versions of the same API; thus leading to more work since we need to maintain the aforementioned versions.

For instance, let’s say we are renaming the `username` property in our user entity to `name`. To ensure that our API consumers’ applications don’t break, we may introduce a new version such as `/api/v1/users` or `/api/users?version=2` depending on our versioning strategy. In GraphQL, there’s more flexibility when it comes to introducing changes to APIs. Using the aforementioned analogy, we may choose to deprecate the field that we are changing instead of removing it completely while introducing the new field. By using this method, the API consumer can incrementally update their schema while maintaining backward compatibility. An example of this can be as follows:

```graphql
type MyType {
  id: ID!
  oldField: String
    @deprecated(reason: "oldField is deprecated. Use newField instead.")
  newField: String
  deprecatedField: String @deprecated
}
```

Moreover, GraphQL has introspection abilities that allow a client to explore the schema as it is being updated.

### Under-Documented APIs

In some cases, REST APIs lack consistent and adequate documentation; hence making it difficult for API consumers to effectively utilize the APIs. While tools like [Spot](https://www.npmjs.com/package/@airtasker/spot) can be utilized to document APIs, regularly updating the APIs can introduce additional overhead in terms of API maintenance.

On the other hand, GraphQL leverages its introspection capabilities to provide a well-defined schema with detailed field-level documentation. Moreover, GraphQL tools such as GraphiQL and GraphQL playground provide an interactive IDE where one can explore the schema, run queries, and view documentation on the fly.

## The Current State of GraphQL

Evaluating the current state of a specific technology can be challenging as there is often a lack of consensus on the criteria to use. However, I shall take upon this challenge while exploring the following factors:

- Developer surveys
- Case Studies
- VC Funding

### Developer Surveys

To gauge the level of interest in GraphQL, I am going to depend on statistics from the following sources:

- [Postman’s state of the API Report](https://www.postman.com/state-of-api/)
- [State of JavaScript Developer Survey Reports](https://stateofjs.com/en-us/)

**Postman’s State of the API Report**

The annual State of the API report provides key information regarding the API development landscape; which includes GraphQL interest levels over the last few years. Under the category “Future technologies”, survey respondents were asked about the technologies they were most excited to use. From 2018 to 2022, GraphQL managed to be among the top 5 technologies mentioned with the following trajectory.

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1693791900177/b582c4b3-fb57-4a37-9898-5bf82c9b8abf.png)

Based on the graph, it is evident that GraphQL peaked in interest in 2019, receiving a significant interest level of 36.9% from the survey respondents. It is also important to note that there has not been an extreme increase or decrease in its numbers over the years.

Under the category “Architectural style”, data from 2020 to 2022 was available and revealed the following:

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1693791972546/5a27f2a0-4b27-4ea9-ba57-6640c85a938a.png)

GraphQL was also listed among the API specifications used by respondents in the survey's "Specifications" section, and the numbers were as follows:

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1693792013528/7a4613a8-c5e2-4c2a-b10c-d21a9db927ce.png)

The statistics on both API specifications and architectural styles indicate that GraphQL is being utilized in API development. However, it doesn't show a significant wave suggesting that it is completely overtaking the industry. At the same time, we do not see a sharp decline in its use that would suggest that GraphQL is “dying”.

The sources for all the above data are as follows:

- [Postman State of the API Report 2018](https://www.postman.com/state-of-api/2018/)
- [Postman State of the API Report 2019](https://www.postman.com/state-of-api/2019/)
- [Postman State of the API Report 2020](https://www.postman.com/state-of-api/2020/)
- [Postman State of the API Report 2021](https://www.postman.com/state-of-api/2021/)
- [Postman State of the API Report 2022](https://www.postman.com/state-of-api/2022/)

**State of JavaScript Surveys**

Before we dive into the numbers, it is important to acknowledge the caveats that come with the State of JavaScript survey as compared to Postman’s State of the API survey. Firstly, it's important to note that the pool of respondents for this survey is limited to JavaScript developers, unlike Postman's surveys which typically gather responses from developers of various programming languages.

Furthermore, JavaScript developers are generally more likely to be familiar with GraphQL since it was originally developed by Meta, the same company that created ReactJS. Additionally, the State of JavaScript opted to remove GraphQL statistics from its survey in 2021 as it seemed out of place. Luckily, we still have numbers from 2016 to 2020. In the data layer section of these surveys, GraphQL statistics were as follows:

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1693792242443/a690f818-a8f2-47e9-8d8b-c0a096ad4259.png)

Source: [The State of JavaScript](https://2020.stateofjs.com/en-US/technologies/datalayer/)

From these numbers, we can infer that GraphQL has been gradually gaining popularity over the years among JavaScript developers. This can be attributed from:

- The declining number of respondents who’ve never heard of GraphQL; from 36.6% in 2016 to 2.3% in 2020.
- The growing number of respondents who are interested in GraphQL (combining both those who’ve used it and those who wish to learn); from 50% in 2016 to 88.1%.
- The declining number of respondents who would not use GraphQL; from 13.8% in 2016 to 6.8%.

### Case Studies of GraphQL Adoption

Various industry leaders have publicly endorsed and documented their adoption journeys with GraphQL. Analyzing these experiences reveals comparable challenges to those encountered by Meta, as previously discussed in the introduction. To get a clearer picture, let’s explore two specific adoption journeys: Cousera’s and Paypal’s.

**Coursera’s Adoption Journey**

Before adopting GraphQL, Coursera implemented a “resource-based” approach in the development of the API infrastructure (meaning an API for courses, another one for instructors, grades, and so on). Consequently, the number of APIs grew over time which led to issues such as multiple server round trips, maintaining documentation, and performance issues.

**Coursera’s Initial Implementation Process**

Initially, the Coursera engineering team opted to add a GraphQL layer that integrates the pre-existing REST APIs. In this implementation, the core business logic did not live in GraphQL itself but in the underlying services. This approach can be better understood through the following diagram.

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1693792327860/40809468-52ab-4b59-b161-846bda8243ae.png)

This implementation had the following key features:

- It consisted of a single GraphQL layer that acted as a proxy between incoming requests and the underlying services.
- [Naptime](https://github.com/coursera/naptime) and [Sangria](https://github.com/sangria-graphql/sangria) were used to generate a unified GraphQL schema.
- Teams could retain ownership over their individual services.
- It was easier to integrate pre-existing services into the GraphQL schema.
- Changes could only be previewed in production.

The setup’s flexibility empowered Coursera’s engineering team to successfully realize their goal of enabling clients to define the structure of the data they want from the API. Furthermore, they managed to achieve this without a complete overhaul of their existing infrastructure.

**Current State of GraphQL at Coursera**

Since its first implementation of GraphQL, Coursera has been re-evaluating its GraphQL approach as challenges arise. Initially, they had adopted a data-first approach, prioritizing the client’s retrieval of necessary data from the API over the schema’s quality. Consequently, the schema grew to encompass over 7000 GraphQL types, increasing the likelihood of duplication within these types. Moreover, the inability to preview changes from underlying services prompted testing them in production, which is not an ideal practice.

To address these challenges, Coursera is actively moving towards a schema-first approach that will prioritize schema quality over its quantity. This strategic shift aims to fully leverage the benefits offered by GraphQL. More on this can be found [here](https://medium.com/coursera-engineering/evolving-the-graph-4c587a4ad9a8).

**Paypal’s Adoption Journey**

PayPal began its GraphQL adoption by overhauling their [checkout application](https://www.paypal.com/us/business/accept-payments/checkout/integration) to use GraphQL, prompted by the limitations they encountered while using REST. These constraints include overfetching/underfetching of data, multiple round trips, and keeping up with new API versions, as indicated [here](https://medium.com/paypal-tech/graphql-at-paypal-an-adoption-story-b7e01175f2b7). The issue of multiple round trips led to slower rendering times, subsequently causing user frustration and a decrease in checkout conversion rates.

**PayPal’s Initial Implementation Process**

Before embracing GraphQL, PayPal's checkout team investigated Bulk REST, a method that empowered clients to define the specific structure and volume of data they required. In this approach, the request would resemble this structure:

```json
{
  "user": {
    "method": "get",
    "uri": "/api/user"
  },
  "createCheckout": {
    "method": "post",
    "uri": "/api/checkout/ec-1234",
    "params": { "total": "10.00", "currencyCode": "USD" }
  },
  "getCheckout": {
    "method": "get",
    "uri": "/api/checkout/ec-1234",
    "dependencies": ["createCheckout"]
  }
}
```

The response to the above request would resemble the following structure:

```json
{
  "user": {
    "ack": "success",
    "data": {
      "name": "Mark Stuart",
      "hobbies": ["chess", "painting"]
    }
  },
  "createCheckout": {
    "ack": "success"
  },
  "getCheckout": {
    "ack": "success",
    "data": {
      "shippingAddress": "123 Main St, San Jose, CA 23434",
      "fundingOptions": ["Visa", "SVB"]
    }
  }
}
```

Although this approach enabled clients to specify the desired structure and size of the data, it also brought about the following issues:

- **Clients still needed to understand the API’s inner workings**: While specifying the request, the clients had to be explicit with the method and URI needed. Consequently, more time was spent on configuring data fetching as opposed to actually building user interfaces. This led to an unfavorable developer experience for those focused on UI development.
- **Overfetching was still a problem**: Even in this approach, entire resources were being fetched as opposed to specific fields that were needed.

Since Bulk REST failed to solve their problems, the team at PayPal opted for GraphQL. This choice brought about these benefits:

- **Performance Improvements**: The clients’ ability to specify their required data in a single request effectively resolved the problem of multiple rounds.
- **Developer Productivity**: Unlike Bulk REST, developers did not need to understand the inner workings of the API. Furthermore, GraphQL delivers the necessary data in JSON format, which is a more comprehensible concept.
- **Evolution**: GraphQL enabled Paypal’s engineering team to know which fields are utilized by clients, thus simplifying the process of deprecating unused fields.

**The Current State of GraphQL at PayPal**

The adoption of GraphQL within PayPal has grown to the extent that it now serves as the default pattern for developing new UI applications. This progress culminated in the release of a [public GraphQL API](https://graphql.braintreepayments.com/explorer/), providing concrete evidence of the substantial advantages derived from embracing GraphQL.

To reach this point, PayPal had to undertake the following actions to ensure the scalability of GraphQL:

- **Standardizing GraphQL API definitions internally**: These guidelines indicated naming conventions, header standards, directive standards, and error handling strategies.
- **Enforcing Authorization with Special Directives in GraphQL Operations**: In this directive, every operation, such as queries and mutations, is required to explicitly outline authorization prerequisites. Consequently, the security and privacy of sensitive data are maintained.
- **Providing Essential Tooling for GraphQL Implementation**: As Paypal aimed to standardize GraphQL practices across the company, it became logical to implement common tools/libraries for common concerns. These shared aspects include logging, directives for data-classification, middleware for Apollo and playground, CLI, error classes, and Apollo graph variants.
- **Providing Adequate Support to Developers**: This assistance was provided through resources designed to onboard teams onto GraphQL, template samples for both backend and frontend development, and dedicated Slack channels established to address questions related to GraphQL.

As indicated in [this article](https://medium.com/paypal-tech/graphql-at-paypal-an-adoption-story-b7e01175f2b7), PayPal is moving towards implementing a “centralized graph” instead of every team maintaining its own graph. The purpose of this strategy is to uphold consistent GraphQL standards across engineering teams, as certain individual graphs were diverging from the established guidelines. Furthermore, this initiative aims to foster schema sharing within the organization.

### VC Funding

Regarding venture capitalist funding, companies offering GraphQL tools and infrastructure have continued to successfully close funding rounds. Some of the highlights in recent years include:

[**Apollo GraphQL Raising $130 Million in Series D**](https://www.apollographql.com/blog/announcement/apollo-raises-130m-to-pioneer-the-graph-for-app-developers/)

Apollo GraphQL is a key figure in the GraphQL space; with the widespread use of their open-source tools that include GraphQL clients and servers. I have worked with [React Apollo Client](https://www.apollographql.com/docs/react/) and [Apollo Server](https://www.apollographql.com/docs/apollo-server) in several projects. Based on my personal experience, these tools have greatly enhanced my developer experience and enhanced my comprehension of GraphQL.

On 17th August 2021, Apollo GraphQL declared the successful closure of its Series D funding round. This funding round was accompanied by the following objectives, as outlined in [their announcement post](https://www.apollographql.com/blog/announcement/apollo-raises-130m-to-pioneer-the-graph-for-app-developers/):

- **Developing Open-Source Software**: Aside from their current offerings, such as Apollo Client and Apollo Server, Apollo GraphQL is actively exploring new ideas in the GraphQL ecosystem. Additionally, Apollo GraphQL is aiming to invest in developer education around GraphQL.
- **Expand Apollo Federation to include more programming languages**: A common challenge frequently encountered by large engineering teams that implement GraphQL is the management and organization of their numerous graphs. Consequently, industry leaders such as PayPal and Walmart are leaning towards [federation architecture](https://medium.com/@luishrsoares/what-is-graphql-federation-26545a64cbb#:~:text=GraphQL%20Federation%20is%20an%20architecture%20model%20that%20allows%20multiple%20GraphQL,services%20using%20a%20single%20request) that combines multiple subgraphs into one supergraph. Apollo Federation aims to adopt this strategy while extending its support to additional programming languages, thereby rendering the process more accessible and manageable.

[**WunderGraph Raising $3 Million in Seed Funding to Build GitHub for APIs**](https://wundergraph.com/blog/seed_funding_announcement)

[WunderGraph](https://wundergraph.com/) is a framework that enables developers to compose multiple APIs into one interface. Additionally, it allows developers to create code pipelines that introspect the various APIs within the unified API structure, resulting in an optimized developer workflow.

On 26th April 2023, the team behind WunderGraph announced that they had raised $3M in seed funding for their “Github for APIs” project. The general idea of this endeavor is to treat APIs as dependencies; similar to how we handle npm packages for JavaScript, modules for Golang, and cargo for Rust. Currently, WunderGraph enables developers to combine APIs; and it holds promise in expanding its toolset and ecosystem to bring this vision to fruition.

## Conclusion

Throughout our recap of GraphQL, the growth of GraphQL is evident. Moreover, its unique approach to data query and manipulation has not only withstood the test of time but has also grown to address the challenges faced by large engineering teams. Going into this deep dive, I had the following questions:

### Is GraphQL Dying?

My answer is no. Factors such as substantial venture capital funding and the growing awareness of GraphQL as shown by the survey numbers refute this claim. However, it doesn't appear poised for the exponential growth it experienced during the peak of its popularity in 2019 and 2020.

### Is GraphQL Going to Replace REST?

My answer is no. Although it addresses the shortcomings of REST, GraphQL has its own fair of challenges that have already been addressed in REST. Hence, there are scenarios where GraphQL may prove less advantageous when compared to REST.

At the end of the day, technology is very dynamic; making it even more intriguing to watch. Perhaps a future day will witness GraphQL replacing REST completely or GraphQL “dying”. When that day comes, I look forward to revisiting the topic in another article. Till next time!
