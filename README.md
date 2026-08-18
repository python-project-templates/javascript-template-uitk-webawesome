# @python-project-templates/uitk-webawesome

Shared brand identity, design tokens, and reusable Lit and Web Awesome components.

See [`BRAND.md`](./BRAND.md) for the canonical brand guide.

## Install

```bash
pnpm add @python-project-templates/uitk-webawesome
```

Import design tokens once at the application root:

```css
@import '@python-project-templates/uitk-webawesome/tokens.css';
```

```ts
import '@python-project-templates/uitk-webawesome';
```

```html
<example-brand-mark></example-brand-mark> <example-theme-toggle></example-theme-toggle>
```

## Develop

```bash
pnpm install
pnpm dev
pnpm check
pnpm lint
pnpm fix
pnpm test
pnpm build
```

After customizing the showcase, run `pnpm test:e2e:update` once to establish its visual baseline.
