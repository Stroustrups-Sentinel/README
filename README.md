[![Deploy Gatsby site to Pages](https://github.com/Stroustrups-Sentinel/readme/actions/workflows/gatsby.yml/badge.svg)](https://github.com/Stroustrups-Sentinel/readme/actions/workflows/gatsby.yml)&nbsp;
[![Static Badge](https://img.shields.io/badge/visit_website-SWE_Portfolio-blue?logo=gatsby&labelColor=%231e4039&color=%23357266&link=https%3A%2F%2Fstroustrups-sentinel.github.io%2Freadme%2F)](https://stroustrups-sentinel.github.io/readme "my website / SWE portfolio")&nbsp;

<p align="center">
 <a href="https://stroustrups-sentinel.github.io/readme">
    <img alt="Gatsby" src="https://raw.githubusercontent.com/Stroustrups-Sentinel/readme/3dd46cdef054e046be507558bef9d0cbbafed4dc/design/maki-logo-perfectedx4800.svg" width="160" />
  </a>
</p>
<hr/>

<Details>
      <Summary>Gatsby Minimal TypeScript Starter</Summary>

<p align="center">
  <a href="https://www.gatsbyjs.com/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter-ts">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
Gatsby Minimal TypeScript Starter
</h1>

## 🚀 Quick start

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying the minimal TypeScript starter.

    ```shell
    # create a new Gatsby site using the minimal TypeScript starter
    npm init gatsby -- -ts
    ```

2.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd my-gatsby-site/
    npm run develop
    ```

3.  **Open the code and start customizing!**

    Your site is now running at http://localhost:8000!

    Edit `src/pages/index.tsx` to see your site update in real-time!

4.  **Learn more**

    - [Documentation](https://www.gatsbyjs.com/docs/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter-ts)
    - [Tutorials](https://www.gatsbyjs.com/docs/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter-ts)
    - [Guides](https://www.gatsbyjs.com/docs/how-to/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter-ts)
    - [API Reference](https://www.gatsbyjs.com/docs/api-reference/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter-ts)
    - [Plugin Library](https://www.gatsbyjs.com/plugins?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter-ts)
    - [Cheat Sheet](https://www.gatsbyjs.com/docs/cheat-sheet/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter-ts)

## 🚀 Quick start (Netlify)

Deploy this starter with one click on [Netlify](https://app.netlify.com/signup):

[<img src="https://www.netlify.com/img/deploy/button.svg" alt="Deploy to Netlify" />](https://app.netlify.com/start/deploy?repository=https://github.com/gatsbyjs/gatsby-starter-minimal-ts)

</Details>

---

## File Structure

    readme/
    ├── .github/
    | └── workflows/
    |    └── gatsby.yaml                  (github actions workflow for gatsby)
    ├── design/                           (design files & resources)
    ├── public/
    ├── src/
    ├── .gitignore
    ├── gatsby-config.ts
    ├── LICENSE                           (license file | MPL 2.0)
    ├── package-lock.json
    ├── package.json
    ├── README.md                         (readme documentation | this file)
    ├── tailwind.config.js                (tailwindCss config file)
    └── tsconfig.json

The other files not described are either [**gatsby**](https://www.gatsbyjs.com/) files. And it has its project structure properly explained [**here**](https://www.gatsbyjs.com/docs/reference/gatsby-project-structure/).

[<https://www.gatsbyjs.com/docs/reference/gatsby-project-structure/>]

<br/>

## Installing Dependencies

- The project uses **Typescript**, although it needs **Nodejs** since on running **Gatsby** commands it will be of use.
- For styling there is use of **TailwindCss** which depends on npm & nodejs.
- This project uses **`npm`**, which requires the following :
  1. installing Nodejs
  2. opening the terminal in the root folder which resides the `package.json` file
  3. running ```npm install``` to get the modules used by the project.


<br>

- Here are the links and the install links when using **`npm`** as your package manager, which usually comes along by default with Nodejs.

| Name | Link | Npm global install| Other npm ways |
|---|---|--|---|
|Nodejs|<https://nodejs.org/>|--|--
|Gatsby|<https://www.gatsbyjs.com/>| ```npm install -g gatsby-cli``` | [[link](https://www.npmjs.com/package/gatsby)], [[link](https://www.gatsbyjs.com/docs/tutorial/getting-started/part-0/)] |
|TailwindCss|<https://tailwindcss.com/>|```npm install -g tailwindcss```|[[link](https://www.npmjs.com/package/tailwindcss)], [[link](https://tailwindcss.com/docs/installation)]|
|Typescript|<https://www.typescriptlang.org/>|```npm install -g typescript``` |[[link](https://www.npmjs.com/package/typescript)], [[link](https://www.typescriptlang.org/download)]|

<br/>

## Running the project

To run the project its fairly simple, after installing the required dependencies all that's needed is to run the following in **two** separate terminals .

|||
|---|---|
|Gatsby|```gatsby develop```|
|TailwindCss|```npm run watch```|

<br/>

## Building the project

- Since the main purpose of Gatsby is its awesomeness as a `static site generator`. And wits its pros and cons like every other software out there, it shines brightly as a good option for this project.
- Building the project means compiling it into its static site form, meaning just the plain usual `html`, `css` and `javascript` into the `├── public/` folder.
- For more info on building the site you can checkout the official gatsby documentation **[here](https://www.gatsbyjs.com/docs/glossary/build/)**.

[<https://www.gatsbyjs.com/docs/glossary/build/>]

<br/>

<!-- ---

<Details>
  <Summary>Whats with the logo ? </Summary>

    - As for the 3As logo its for the triple A 
      standards in quality, grade and standardization. 
      or something like that 😅. Still have not decided 
      but its along the AAA standards for when you know 
      something really is good.
    - and the colours represent {thinking:blue}, 
      {envisioning:orange}, {creating:green}

</Details> -->
