# Welcome to Remix!

- 📖 [Remix docs](https://remix.run/docs)

## Development

Run the dev server:

```shellscript
npm run dev
```

## Deployment

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying Node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `npm run build`

- `build/server`
- `build/client`

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever css framework you prefer. See the [Vite docs on css](https://vitejs.dev/guide/features.html#css) for more information.

## Remix + Vite Integration

This project leverages Remix v2's official Vite integration through `@remix-run/dev`, combining:

- **Remix**: Server-side rendering, routing, and data loading
- **Vite**: Fast development server, optimized builds, and rich plugin ecosystem

Benefits of this integration:
- Faster development server startup
- Improved Hot Module Replacement (HMR)
- Enhanced asset handling
- Access to Vite's plugin ecosystem
- Maintained SSR capabilities from Remix

## Getting Started

# Project Name

[Brief project description]

## Tech Stack

- **Framework**: [Remix](https://remix.run/) (v2) with [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with [shadcn/ui](https://ui.shadcn.com/)
- **Development Tools**: ESLint, PostCSS
