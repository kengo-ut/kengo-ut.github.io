## Environment

- check your node & yarn version (volta)

```bash
volta install node
volta install yarn
```

## Getting Started

```bash
yarn install
yarn dev
```

## Installations

### Dependencies

```bash
yarn add -D @types/node @types/react @types/react-dom prettier eslint-config-prettier eslint-plugin-react-hooks @next/eslint-plugin-next
```

### Styling

```bash
yarn add react-icons lucide-react
npx shadcn@latest init -d
```

## Settings

### ESLint

- write your rules in `eslint.config.mjs` (if you want)

### VSCode

- write below in `.vscode/settings.json`

```json
{
  "npm.packageManager": "yarn",
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "editor.formatOnPaste": true,
  "editor.codeActionsOnSave": {
    "source.addMissingImports": "explicit"
  },
  "javascript.preferences.importModuleSpecifier": "non-relative",
  "typescript.preferences.importModuleSpecifier": "non-relative"
}
```

### Environment Variables

- write confidential information in `.env.local`

## Deploy

- modify `next.config.ts` as below

```ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
```
- add GAS_URL as secret in GitHub Actions
