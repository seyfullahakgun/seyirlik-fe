import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Hata!";
  let details = "Beklenmeyen bir hata oluştu.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Hata";
    details =
      error.status === 404
        ? "Sayfa bulunamadı."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="min-h-screen flex items-center justify-center p-4">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">{message}</h1>
        <p className="text-lg mb-4">{details}</p>
        {stack && (
          <pre className="w-full p-4 overflow-x-auto text-left bg-gray-100 rounded">
            <code>{stack}</code>
          </pre>
        )}
      </div>
    </main>
  );
}
