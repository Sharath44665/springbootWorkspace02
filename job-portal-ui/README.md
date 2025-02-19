# Tailwind tips:

in `classname = '[&>span]:font-semibold'`
- [&_] : to target parent or child
- [&>] : only target child(s)
- [&>*]: target all childs

---

**Redux** is a predictable state management library for JavaScript applications, commonly used with libraries like React. It helps manage the state of an application in a centralized way, making it easier to understand and debug.

# Key Concepts of Redux

**Store:** The store is a single source of truth for the application's state. It holds the entire state tree of the application. You can think of it as a container that holds the state and provides methods to access and update that state.

**Actions:** Actions are plain JavaScript objects that describe an event that has occurred in the application. Each action must have a type property that indicates the type of action being performed. Actions can also carry additional data (payload) that is needed to update the state.

**Reducers:** Reducers are pure functions that take the current state and an action as arguments and return a new state. They specify how the application's state changes in response to actions. Reducers are responsible for updating the state based on the action received.

> Component ---> dispatch(action) ---> action(type, payload) ---> reducer ---> store(app state) ---> update state stored in store ---> application will rerender


# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
