# food

## frontend

+ first create a new project using vite [docs](https://tailwindcss.com/docs/guides/vite)

```
npm create vite@latest my-project
cd my-project
```

```
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Add the paths to all of your template files in your tailwind.config.js file.
```
content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
```

Add the @tailwind directives for each of Tailwind’s layers to your ./src/index.css file.
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

```
npm run dev
```

## backend

create a new folder

```
mkdir Backend
cd Backend
```

```
npm init -y
```

install express mongoose

```
npm install express mongoose
```

create a index.js file
