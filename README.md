## giacomocamposampiero.github.io

This repository contains my personal website, made with Gatsby.js.

### Clone and run locally

To clone and run the website locally, use the following commands.

```
git clone https://github.com/giacomocamposampiero/giacomocamposampiero.github.io
cd giacomocamposampiero.github.io
npm install
gatsby develop
```

Make sure that `npm` and `gatsby` are installed.

### Deploy the project to Github Pages

Just run the following command in the shell.

```
npm run deploy
```

### Deploy the project to Github Pages from scratches

First of all, create a new branch `source` with the command 

```
git checkout -b source
```

Then, change the default branch from `main` to `source`. This is necessary as the website will be directly deployed on the `main` branch. 
Add the following deployment script to `package.json`.

```
{
  "scripts": {
    "deploy": "gatsby build && gh-pages -d public -b main"
  }
}
```

Finally, just run the command from the previous section.
