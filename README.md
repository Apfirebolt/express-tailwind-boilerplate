# Express Tailwind Boilerplate

[![Express](https://img.shields.io/badge/Express-4.x-orange)](https://expressjs.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-2.x-blue)](https://tailwindcss.com/)
[![Nginx](https://img.shields.io/badge/Nginx-1.x-green)](https://nginx.org/)
[![Docker](https://img.shields.io/badge/Docker-20.x-blue)](https://www.docker.com/)

This is a boilerplate project for creating web applications using Express.js and Tailwind CSS.

## Features

- Express.js server setup
- Basic folder structure
- Tailwind CSS integration
- Preconfigured scripts for development and production

## Getting Started

1. Clone the repository: `git clone https://github.com/your-username/express-tailwind-boilerplate.git`
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`
4. Open your browser and visit `http://localhost:3000`

## Folder Structure

## Installing Tailwind

```

```
## Using both Tailwind CSS and Bootstrap using Layouts

The project is configured to use both Tailwind CSS and Bootstrap. Tailwind CSS is installed using npm, Bootstrap is imported using external CDN link.

I have a folder called layouts inside views. I have two files inside this folder called main.hbs and dashboard.hbs. Main layout is configured to use styles from Tailwind css compiled each time a change is made in the views directory. Tailwind css script needs to run after each change.

```
npm run tailwind:css

...

"tailwind:css": "npx tailwindcss -i ./assets/css/tailwind.css -o ./assets/css/style.css",

```

Following packages are installed locally to configure Tailwind CSS to be used without CDN.

```
...

"dependencies": {
    "express": "^4.19.2",
    "express-handlebars": "^7.1.2"
  },
  "devDependencies": {
    "autoprefixer": "^10.4.19",
    "postcss": "^8.4.38",
    "tailwindcss": "^3.4.3",
    "postcss-cli": "^10.0.0"
  }

```