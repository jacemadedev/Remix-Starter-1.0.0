import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction, MetaFunction, LoaderFunctionArgs } from "@remix-run/node";
import { createBrowserClient, createServerClient } from '@supabase/auth-helpers-remix';
import { useState, useEffect } from 'react';
import { json } from '@remix-run/node';

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

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const env = {
    SUPABASE_URL: import.meta.env.VITE_SUPABASE_URL,
    SUPABASE_ANON_KEY: import.meta.env.VITE_SUPABASE_ANON_KEY,
  };

  const response = new Response();

  const supabase = createServerClient(
    env.SUPABASE_URL,
    env.SUPABASE_ANON_KEY,
    { request, response }
  );

  const { data: { session } } = await supabase.auth.getSession();

  return json(
    { env, session },
    { headers: response.headers }
  );
};

export default function App() {
  const [supabase, setSupabase] = useState(() => {
    if (typeof window === 'undefined') {
      return null;
    }
    return createBrowserClient(
      import.meta.env.VITE_SUPABASE_URL,
      import.meta.env.VITE_SUPABASE_ANON_KEY
    );
  });

  useEffect(() => {
    if (!supabase && typeof window !== 'undefined') {
      setSupabase(
        createBrowserClient(
          import.meta.env.VITE_SUPABASE_URL,
          import.meta.env.VITE_SUPABASE_ANON_KEY
        )
      );
    }
  }, []);

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.getItem('darkMode') === 'true' ||
                    (!localStorage.getItem('darkMode') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark');
                }
              } catch (e) {}
            `,
          }}
        />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet context={{ supabase }} />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}