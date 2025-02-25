# LMS Frontend

### Setup instructions

1. Clone the project

```
  git clone https://github.com/anujpal247/lms-frontend.git
```

2. Move into the directory

```
  cd lms-frontend
```

3. install dependencies

```
  npm i
```

4. run the server

```
  npm run dev
```

### Setup instrunctions for Tailwind

[tailwind official docs](https://tailwindcss.com/docs/installation/using-vite)

1. install Tailwind CSS

```
  npm install tailwindcss @tailwindcss/vite
```

2. Add the `tailwindcss` plugin to your Vite configuration file

```
  import tailwindcss from '@tailwindcss/vite'

  plugins: [
    tailwindcss(),
  ],
```

3. import tailwind CSS into `index.css` file

```
  @import "tailwindcss";
```

### Add plugins and dependencies

```
  npm i @reduxjs/toolkit @tailwindcss/line-clamp axios chart.js daisyui react-chartjs-2 react-hot-toast react-icons react-redux react-router-dom tailwindcss
```

### Configure auto import sort eslint

1. Install simple import sort

```
  npm i -D eslint-plugin-simple-import-sort
```

2. Add rule in `.eslint.config.js`

```
  rules: {
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
    },
```

3. Add simple import sort plugin in `.eslint.config.js`

```
  plugins: {
      "simple-import-sort": simpleImportSort,
      ...
    }
```
