---
title: "Becoming an AWS Solutions Architect Associate"
pubDatetime: 2022-05-19T21:00:00.000Z
ogImage: "/assets/images/mehmet-ali-peker-hfiym43qBpk-unsplash.jpg"
description: "This blog post summarizes my experience studying for the AWS Solutions Architect-Associate exam. I discuss my motivation to study for the exam, the process I went through and my key takeaways from the whole experience."
featured: false
tags: ["reflection"]
slug: becoming-an-aws-solutions-architect-associate
---

It has been a while since I got certified as an AWS Solutions Architect - Associate level; thus, I wanted to share my journey through it all. I’m hoping that this article provides insight to anyone who plans on studying and eventually taking the exam.

## Table of contents

## Reasons for getting the certification

I’m a software developer(_insert surprised Pikachu_) who has done quite a bit of front-end work. I’ve been looking for an opportunity to improve my knowledge of the back-end side of things. Thus, I began looking at the available AWS Certifications I could study in the hopes that I would learn more things.

## Choosing which certification to take

The AWS Certifications that I felt I could take were as follows:

- **AWS Certified Cloud Practitioner:** This is a foundational level certificate that is aimed at individuals that have no prior experience with AWS. Even though I fit the bill for this certificate, I chose to skip it. From my perspective, just knowing what AWS services do wouldn’t help me improve my technical skills as a developer.

- **AWS Certified SysOps Administrator – Associate:** This is an associate-level certificate that targets individuals who are in or aspire to be in a Systems Administrator role. Since being a sysadmin isn’t in my immediate plans, I chose not to take it. (_Plus, it seems quite challenging. Not saying that the others are easy, but this one seemed to be quite something._)

- **AWS Certified Developer - Associate:** This is an associate-level certificate that goes deeper into AWS services that revolve around software development such as Elastic Beanstalk, SQS, and SNS. I’ll admit it; the term “Developer” in the title was appealing. Instead, I chose its counterpart that had a more inviting name.

- **AWS Certified Solutions Architect - Associate:** This is an associate-level certification that covers a wide range of AWS services that focus on the design of an application that runs on AWS. It equips one with the skills to design a solution on AWS that balances the key pillars of a well-architected solution: Operational Excellence, Security, Reliability, Performance, and Cost. It allows you to see all these beautiful moving parts of software and its underlying infrastructure work in harmony to serve the intended customer. It’s like being a conductor in an orchestra. (_No, I take that back. It’s really not that cool_). Plus, it has the word “Architect” in the title.

I eventually chose to go for the AWS Certified Solutions Architect - Associate.

💡 All these definitions are from my perspective. To get a clearer explanation of all these certifications, please visit the official AWS documentation <a href="https://aws.amazon.com/certification/" target="_blank">here</a>. (_The badges are clickable on the page in case you get confused when you get there_). Also, this article <a href="https://acloudguru.com/blog/engineering/which-aws-certification-should-i-take?" target="_blank">here</a> gives a clearer definition of the certifications if you’re stuck on deciding which certificate to go for.

After deciding on which certification to take, I started gathering information on resources I could use to successfully get it.

## Resources I Used

In the information-gathering phase, I was overwhelmed by the wealth of information that is present on the internet. However, I was lucky to find a community on Reddit called [r/AWSCertifications](https://www.reddit.com/r/AWSCertifications/) that provided useful information as well as user testimonials on what they used to pass the certification. From the discussions in the subreddit, I narrowed my options to two courses:

- [**Stephane Maarek’s Udemy SAA-C03 Course**](https://www.udemy.com/course/aws-certified-solutions-architect-associate-saa-c03/): As a complete beginner in AWS, this course gave me an adequate introduction; one that didn’t make me feel overwhelmed. Additionally, following through with the lectures while doing the hands-on exercises significantly helped in understanding the AWS ecosystem. Moreover, Stephane provides explanations on programming concepts such as CORS from a beginner’s perspective.

- [**Tutorials Dojo Practice Exams for SAA-C03**](https://portal.tutorialsdojo.com/courses/aws-certified-solutions-architect-associate-practice-exams/): After completing Stephane’s course, I began doing practice tests on Tutorials Dojo. Here, I was humbled by my test scores in the practice tests. Here’s a picture of the practice test I took:

  ![practice-test-1.png](/assets/images/practice-test-1.png)

  While completing Stephane’s course made me feel like a had a good grasp of AWS, my lack of in-depth knowledge showed in the practice tests. After getting bad scores on my practice tests, I decided to highlight the areas where I scored poorly and revise these areas thoroughly before moving to the next practice. Thankfully, Tutorials Dojo gives detailed explanations of each question and answer after completing each practice test.

- [**AWS Whitepapers**](https://aws.amazon.com/architecture/?cards-all.sort-by=item.additionalFields.sortDate&cards-all.sort-order=desc&awsf.content-type=content-type%23whitepaper&awsf.methodology=*all&awsf.tech-category=*all&awsf.industries=*all&awsf.business-category=*all): The available AWS whitepapers cover a huge range of issues surrounding the AWS ecosystem. For me, the [Well-Architected Framework](https://docs.aws.amazon.com/wellarchitected/latest/framework/welcome.html) and [Disaster Recovery](https://docs.aws.amazon.com/whitepapers/latest/disaster-recovery-workloads-on-aws/disaster-recovery-workloads-on-aws.html?did=wp_card&trk=wp_card) proved very useful in understanding why certain actions are considered best practices.

- [**AWS Architecture Centre**](https://aws.amazon.com/architecture):The AWS documentation not only offers whitepapers, but also provides architectural diagrams. You can refer to these diagrams to enhance your comprehension of AWS solutions. These diagrams illustrate how various AWS services can be integrated to build highly scalable and resilient applications.

I continued with my preparations until I felt confident enough to take the AWS Certification. In this phase, I would go over areas I found challenging and do practice tests to identify my weaknesses.

💡 Practice tests can be a trap, sometimes. There are cases of people passing practice tests and still failing the certification exam. This article <a href="https://www.linkedin.com/pulse/you-might-using-practice-exams-all-wrong-adrian-cantrill/" target="_blank">here </a> details how you can leverage practice tests to your benefit.

## Taking the Test

For the certification examination, I opted to use a testing center near me. I did not want to worry about the technical stuff like setting up the OnVue testing software. Additionally, I was worried about scenarios like experiencing a power outage while taking the test or the neighbor's dog deciding to bark loudly on that particular day. True to my concerns, on the day I had scheduled my exam, my power went out.

Fortunately, I was able to do the certification exam at the testing center on time. The questions felt familiar to me because I had encountered similar situations in my practice tests. They weren't exact replicas of my practice tests, but the thought process required to arrive at an answer was similar.

After a couple of days, my results came in my mail. I managed a passing score of 772/1000.

## My Takeaways From The Process

When I was starting this process, I hoped to learn more about back-end software development. At the end of the process, I realized I got more out of the process than I had anticipated. There are concepts I knew about that were reinforced by learning about how AWS implements them. Additionally, I was introduced to new concepts (to me) that I found fascinating. Here are some of the concepts I found intriguing.

### Least Privilege Principle

![security-guard.gif](/assets/images/security-guard.gif)

Sauce: [https://tenor.com/view/ziekenhuisbal-steward-guard-security-guard-guard-check-gif-15705678](https://tenor.com/view/ziekenhuisbal-steward-guard-security-guard-guard-check-gif-15705678)

In my personal experience, access has always been a key factor in security; whether on the internet or in real life. This was reiterated when I was studying the IAM (Identity and Access Management) section of AWS. With the least privilege principle, individuals are only given permission that they need to perform their duty. AWS provides enough tools that facilitate the implementation of this principle. Some of these tools/techniques include:

- **IAM Groups**: In this method, instead of assigning permissions to an individual user, a group is created and has permissions assigned to it. Afterward, the users are assigned to the created groups. This allows the admin to monitor the privileges granted to many users from a central point; thus making oversight easier.

- **IAM Access Advisor**: This tool shows services granted to a user and service last accessed information; which is critical when determining if a specific user needs certain permissions. Together with AWS Organizations and Service Control Policies, it can be used to enforce permission restrictions on AWS. More information can be found <a href="https://aws.amazon.com/about-aws/whats-new/2019/06/now-use-iam-access-advisor-with-aws-organizations-to-set-permission-guardrails-confidently/" target="_blank">here</a>.

- **AWS CloudTrail**: This AWS service tracks all the activity on your AWS service. Through CloudTrail logs, an audit of everyone’s activities within an AWS account can be conducted. Furthermore, you can do a deep dive into these logs using advanced analysis tools; if the need arises.

### Living on the Edge

![edge.jpeg](/assets/images/edge.jpeg)

Sauce: [https://imgflip.com/i/7io09o](https://imgflip.com/i/7io09o)

Recently, applications have continued to grow a global audience; which has prompted the need to cater to consumers around the world. Hence, we have the edge. Since AWS has multiple regions and availability zones around the globe, leveraging its infrastructure can be significantly beneficial to a global business. Some of the services that involve the edge include:

- **Amazon CloudFront**: This is AWS’ global Content Delivery Network (CDN) that distributes videos, files, APIs, applications, and data to the intended consumers. In addition to content delivery, additional features such as geo-restriction, firewall setup, and DDoS protection measures can be implemented here. Additionally, using caching strategies can be deployed using CloudFront; hence making response time faster.

- **AWS Lambda@Edge**: In conjunction with Amazon CloudFront, you can deploy functions that execute at the edge locations instead of a centralized location. This service can be beneficial in situations such as conducting A/B testing on your application. Additionally, you can modify headers and cookies before forwarding the request to the origin. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-edge.html" target="_blank">here</a>.

There are significant contributions made in the edge space: varying from deploying functions at the edge to database edge databases by companies such as Vercel and Cloudflare. It will be interesting to see how computing at the edge develops in the future.

### Managed Services

![https://media.giphy.com/media/BY8ORoRpnJDXeBNwxg/giphy.gif](https://media.giphy.com/media/BY8ORoRpnJDXeBNwxg/giphy.gif)

Sauce: [https://media.giphy.com/media/BY8ORoRpnJDXeBNwxg/giphy.gif](https://media.giphy.com/media/BY8ORoRpnJDXeBNwxg/giphy.gif)

In a managed service, users are only concerned with using the service and are not required to know the setup details. For instance, let’s say we want to use a database to use for a web application. We can decide to implement it in two ways:

- **Using Amazon Aurora**: In this scenario, we won’t have to provision a server to host our database. Additionally, if auto-scaling is enabled, we are not required to monitor our database to ensure that it can handle the load it gets. Furthermore, we do not have to manually update Aurora when there’s a new update.

- **Using a PostgreSQL/MySQL Instance on a Live Server**: In this instance, we have to provision resources and monitor our database to ensure that it appropriately handles its load. Moreover, we have to manually set up backups and deploy updates.

From a glance, it may seem like managed services are the better option; since they can significantly reduce the overhead that comes with the alternative. However, there are concerns, such as <a href="https://www.cloudflare.com/learning/cloud/what-is-vendor-lock-in/" target="_blank">vendor lock-in</a>, that eliminate the possibility of managed services being viewed as a silver bullet for all the problems that other frameworks provide.

### Serverless Ecosystem

![serverless.jpg](/assets/images/serverless.jpg)

Sauce: [https://imgflip.com/i/7insfr](https://imgflip.com/i/7insfr)

Over the years, serverless architectures have gained traction. The idea of not having idle servers when there is no traffic was what sold me on going serverless. Moreover, the automatic scaling that comes with serverless is also advantageous when dealing with unexpected workloads. In the AWS ecosystem, these services help in creating a serverless solution:

- **AWS Lambda**: This service enables a user to deploy functions regardless of the programming language used.

- **Amazon API Gateway**: Using this service, RESTful APIs and WebSocket APIs can easily be deployed. By using the Amazon API Gateway to invoke AWS Lambda, our Lambda functions can be reached through HTTP endpoints, which leads to a completely serverless configuration.

- **Amazon DynamoDB**: This is a NoSQL, serverless database that auto-scales based on demand.

There are more AWS services under the serverless umbrella; you can find them <a href="https://aws.amazon.com/serverless/" target="_blank"> here</a>.

## What’s Next?

Currently, I don’t intend on taking another associate-level AWS certification exam; despite it being an attractive option. Instead, I would like to apply the foundational knowledge I have acquired on building resilient systems and explore open-source alternatives to AWS's proprietary tools. I also hope to gain more experience in designing solutions on AWS. I also plan to take the <a href="https://roadmap.sh/system-design">System Design Roadmap</a>.

Thank you for taking the time to read this to the end! If you are planning to take the SAA-C03 examination I wish you the best of luck.

💡 This <a href="https://valenciandigital.com/insights/are-certifications-worth-it" target="_blank"> article </a> provides a detailed analysis of the value of certifications in the tech industry.

Featured Image Credit: <a href="https://unsplash.com/@mrpeker" target="_blank">Mehmet Ali Peker </a>on<a href="https://unsplash.com/photos/hfiym43qBpk" target="_blank">Unsplash</a>
