import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "História para ENEM - Curso Completo",
  description: "Curso completo de História para o ENEM. Aprenda todos os períodos históricos desde a Pré-História até a História Contemporânea do Brasil e do Mundo.",
  keywords: ["ENEM", "História", "Brasil", "curso", "vestibular", "educação"],
  authors: [{ name: "Curso História ENEM" }],
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
