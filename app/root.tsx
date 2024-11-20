import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction, MetaFunction } from "@remix-run/node";

import "./tailwind.css";

export const meta: MetaFunction = () => {
  return [
    { title: "Composers.dev - Modern Web Development Boilerplates" },
    { charSet: "utf-8" },
    { name: "viewport", content: "width=device-width,initial-scale=1" },
    { name: "description", content: "Professional boilerplates and starter kits for modern web development. Built with React, TypeScript, Tailwind CSS, and more." },
    // Open Graph / Facebook
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://composers.dev/" },
    { property: "og:title", content: "Composers.dev - Modern Web Development Boilerplates" },
    { property: "og:description", content: "Professional boilerplates and starter kits for modern web development. Built with React, TypeScript, Tailwind CSS, and more." },
    { property: "og:image", content: "https://composers.dev/og-image.jpg" }, // You'll need to create this image
    // Twitter
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:url", content: "https://composers.dev/" },
    { name: "twitter:title", content: "Composers.dev - Modern Web Development Boilerplates" },
    { name: "twitter:description", content: "Professional boilerplates and starter kits for modern web development. Built with React, TypeScript, Tailwind CSS, and more." },
    { name: "twitter:image", content: "https://composers.dev/og-image.jpg" }, // Same image as OG
    // Additional SEO tags
    { name: "keywords", content: "web development, boilerplate, react, typescript, tailwind css, starter kit, template, modern web development" },
    { name: "author", content: "Composers.dev" },
    { name: "theme-color", content: "#000000" }, // Adjust color to match your brand
  ];
};

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
  { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" },
  { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" },
  { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
  { rel: "manifest", href: "/site.webmanifest" },
];

export default function App() {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Composers.dev",
            "url": "https://composers.dev",
            "description": "Professional boilerplates and starter kits for modern web development",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://composers.dev/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })}
        </script>
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}