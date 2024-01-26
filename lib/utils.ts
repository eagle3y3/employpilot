import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import type { BadgeUrls } from "./types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const badgeUrls: BadgeUrls = {
  "C#": "https://img.shields.io/badge/C%23-239120?style=for-the-badge&logo=c-sharp&logoColor=white",
  Xamarin:
    "https://img.shields.io/badge/Xamarin-3498DB?style=for-the-badge&logo=xamarin&logoColor=white",
  Python:
    "https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white",
  HTML: "https://img.shields.io/badge/HTML-239120?style=for-the-badge&logo=html5&logoColor=white",
  CSS: "https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white",

  JavaScript:
    "https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white",
  "p5.js":
    "https://img.shields.io/badge/p5%20js-ED225D?style=for-the-badge&logo=p5dotjs&logoColor=white",
  ReactiveX:
    "https://img.shields.io/badge/ReactiveX-B7178C?style=for-the-badge&logo=ReactiveX&logoColor=white",
  ScrollReveal:
    "https://img.shields.io/badge/ScrollReveal-FFCB36?style=for-the-badge&logo=ScrollReveal&logoColor=white",
  "Node.js":
    "https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white",
  NodeJS:
    "https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white",
  Hugo: "https://img.shields.io/badge/Hugo-FF4088?style=for-the-badge&logo=hugo&logoColor=white",
  CodinGame:
    "https://img.shields.io/badge/CodinGame-F2BB13?style=for-the-badge&logo=codingame&logoColor=white",
  Crowdsource:
    "https://img.shields.io/badge/Crowdsource-4285F4?style=for-the-badge&logo=Crowdsource&logoColor=white",
  Hoppscotch:
    "https://img.shields.io/badge/Hoppscotch-31C48D?style=for-the-badge&logo=Hoppscotch&logoColor=white",
  Lit: "https://img.shields.io/badge/Lit-324FFF?style=for-the-badge&logo=Lit&logoColor=white",
  TypeScript:
    "https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white",
  Typescript:
    "https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white",
  HTML5:
    "https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white",
  "ts-node":
    "https://img.shields.io/badge/ts--node-3178C6?style=for-the-badge&logo=ts-node&logoColor=white",
  JSS: "https://img.shields.io/badge/JSS-F7DF1E?style=for-the-badge&logo=JSS&logoColor=white",
  CSS3: "https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white",
  "Node-Red":
    "https://img.shields.io/badge/Node--Red-8F0000?style=for-the-badge&logo=nodered&logoColor=white",
  Sass: "https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white",
  C: "https://img.shields.io/badge/C-00599C?style=for-the-badge&logo=c&logoColor=white",
  "C++":
    "https://img.shields.io/badge/C%2B%2B-00599C?style=for-the-badge&logo=c%2B%2B&logoColor=white",
  Java: "https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white",
  PHP: "https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white",
  R: "https://img.shields.io/badge/R-276DC3?style=for-the-badge&logo=r&logoColor=white",
  Swift:
    "https://img.shields.io/badge/Swift-FA7343?style=for-the-badge&logo=swift&logoColor=white",
  Kotlin:
    "https://img.shields.io/badge/Kotlin-0095D5?&style=for-the-badge&logo=kotlin&logoColor=white",
  Go: "https://img.shields.io/badge/Go-00ADD8?style=for-the-badge&logo=go&logoColor=white",
  Ruby: "https://img.shields.io/badge/Ruby-CC342D?style=for-the-badge&logo=ruby&logoColor=white",
  Scala:
    "https://img.shields.io/badge/Scala-DC322F?style=for-the-badge&logo=scala&logoColor=white",
  Rust: "https://img.shields.io/badge/Rust-000000?style=for-the-badge&logo=rust&logoColor=white",
  "Matter.js":
    "https://img.shields.io/badge/Matter.js-4B5562?style=for-the-badge&logo=Matter.js&logoColor=white",
  Dart: "https://img.shields.io/badge/Dart-0175C2?style=for-the-badge&logo=dart&logoColor=white",
  Lua: "https://img.shields.io/badge/Lua-2C2D72?style=for-the-badge&logo=lua&logoColor=white",
  Perl: "https://img.shields.io/badge/Perl-39457E?style=for-the-badge&logo=perl&logoColor=white",
  Elixir:
    "https://img.shields.io/badge/Elixir-4B275F?style=for-the-badge&logo=elixir&logoColor=white",
  Markdown:
    "https://img.shields.io/badge/Markdown-000000?style=for-the-badge&logo=markdown&logoColor=white",
  "Shell Script":
    "https://img.shields.io/badge/Shell_Script-121011?style=for-the-badge&logo=gnu-bash&logoColor=white",
  "Express.js":
    "https://img.shields.io/badge/Express.js-404D59?style=for-the-badge",
  Gatsby:
    "https://img.shields.io/badge/Gatsby-663399?style=for-the-badge&logo=gatsby&logoColor=white",
  React:
    "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB",
  ReactJS:
    "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB",
  "React Native":
    "https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB",
  Svelte:
    "https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00",
  "Vue.js":
    "https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vue.js&logoColor=4FC08D",
  Angular:
    "https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white",
  AngularJS:
    "https://img.shields.io/badge/AngularJS-E23237?style=for-the-badge&logo=angularjs&logoColor=white",
  "Angular JS":
    "https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white",

  "Tailwind CSS":
    "https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white",
  Bootstrap:
    "https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white",
  "styled-components":
    "https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white",
  "Material-UI":
    "https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=material-ui&logoColor=white",
  Redux:
    "https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white",
  "React Router":
    "https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white",
  jQuery:
    "https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white",
  Django:
    "https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=white",
  "Ruby on Rails":
    "https://img.shields.io/badge/Ruby_on_Rails-CC0000?style=for-the-badge&logo=ruby-on-rails&logoColor=white",
  Laravel:
    "https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white",
  Spring:
    "https://img.shields.io/badge/Spring-6DB33F?style=for-the-badge&logo=spring&logoColor=white",
  Flask:
    "https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white",
  Flutter:
    "https://img.shields.io/badge/Flutter-02569B?style=for-the-badge&logo=flutter&logoColor=white",
  MySQL:
    "https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white",
  PostgreSQL:
    "https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white",
  MongoDB:
    "https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white",
  SQLite:
    "https://img.shields.io/badge/SQLite-07405E?style=for-the-badge&logo=sqlite&logoColor=white",
  Unity:
    "https://img.shields.io/badge/Unity-100000?style=for-the-badge&logo=unity&logoColor=white",
  "Unreal Engine":
    "https://img.shields.io/badge/unrealengine-%23313131.svg?style=for-the-badge&logo=unrealengine&logoColor=white",
  Netlify:
    "https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white",
  Heroku:
    "https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white",
  "Amazon AWS":
    "https://img.shields.io/badge/Amazon_AWS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white",
  "Google Cloud":
    "https://img.shields.io/badge/Google_Cloud-4285F4?style=for-the-badge&logo=google-cloud&logoColor=white",
  "Microsoft Azure":
    "https://img.shields.io/badge/Microsoft_Azure-0089D6?style=for-the-badge&logo=microsoft-azure&logoColor=white",
  "Microsoft Excel":
    "https://img.shields.io/badge/Microsoft_Excel-217346?style=for-the-badge&logo=microsoft-excel&logoColor=white",
  "Microsoft PowerPoint":
    "https://img.shields.io/badge/Microsoft_PowerPoint-B7472A?style=for-the-badge&logo=microsoft-powerpoint&logoColor=white",
  "Microsoft Access":
    "https://img.shields.io/badge/Microsoft_Access-A4373A?style=for-the-badge&logo=microsoft-access&logoColor=white",
  "Microsoft SQL Server":
    "https://img.shields.io/badge/Microsoft_SQL_Server-CC2927?style=for-the-badge&logo=microsoft-sql-server&logoColor=white",
  "Microsoft Office":
    "https://img.shields.io/badge/Microsoft_Office-D83B01?style=for-the-badge&logo=microsoft-office&logoColor=white",
  "Microsoft SharePoint":
    "https://img.shields.io/badge/Microsoft_SharePoint-0078D4?style=for-the-badge&logo=microsoft-sharepoint&logoColor=white",
  "Microsoft Word":
    "https://img.shields.io/badge/Microsoft_Word-2B579A?style=for-the-badge&logo=microsoft-word&logoColor=white",
  "Microsoft Visio":
    "https://img.shields.io/badge/Microsoft_Visio-3955A3?style=for-the-badgee&logo=microsoft-visio&logoColor=white",
  Microsoft:
    "https://img.shields.io/badge/Microsoft-666666?style=for-the-badge&logo=microsoft&logoColor=white",
  SAP: "https://img.shields.io/badge/SAP-0FAAFF?style=for-the-badge&logo=sap&logoColor=white",
  Powershell:
    "https://img.shields.io/badge/Powershell-2CA5E0?style=for-the-badge&logo=powershell&logoColor=white",
  "NX Workspace":
    "https://img.shields.io/badge/workspace-143157?style=for-the-badge&logo=NX&logoColor=white",
  Sequelize:
    "https://img.shields.io/badge/sequelize-323330?style=for-the-badge&logo=sequelize&logoColor=blue",
  "JSON Web Tokens":
    "https://img.shields.io/badge/json%20web%20tokens-323330?style=for-the-badge&logo=json-web-tokens&logoColor=pink",
  NPM: "https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white",
  "Next.js":
    "https://img.shields.io/badge/Next.js-000?logo=nextdotjs&logoColor=fff&style=for-the-badge",
  "Vue JS":
    "https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vue.js&logoColor=4FC08",
  Redis:
    "https://img.shields.io/badge/redis-%23DD0031.svg?&style=for-the-badge&logo=redis&logoColor=white",
  AWS: "https://img.shields.io/badge/Amazon_AWS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white",
  GIT: "https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white",
  Git: "https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white",
  git: "https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white",

  Jenkins:
    "https://img.shields.io/badge/Jenkins-D24939?style=for-the-badge&logo=Jenkins&logoColor=white",
  Kubernetes:
    "https://img.shields.io/badge/kubernetes-%23326ce5.svg?style=for-the-badge&logo=kubernetes&logoColor=white",
  Terraform:
    "https://img.shields.io/badge/terraform-%235835CC.svg?style=for-the-badge&logo=terraform&logoColor=white",
  Docker:
    "https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white",
  Azure:
    "https://img.shields.io/badge/azure-%230072C6.svg?style=for-the-badge&logo=microsoftazure&logoColor=white",
  Kafka:
    "https://img.shields.io/badge/Apache%20Kafka-000?style=for-the-badge&logo=apachekafka",
  Github:
    "https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white",
  GraphQL:
    "https://img.shields.io/badge/-ApolloGraphQL-311C87?style=for-the-badge&logo=apollo-graphql)",
};
