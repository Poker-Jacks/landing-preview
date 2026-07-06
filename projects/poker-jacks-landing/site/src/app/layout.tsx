import type { Metadata } from "next";
import { Schibsted_Grotesk, DM_Sans } from "next/font/google";
import "./globals.css";

const schibsted = Schibsted_Grotesk({
  subsets: ["latin"],
  variable: "--font-schibsted",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Poker Jacks — Software a la medida desde Costa Rica",
  description:
    "Cuatro ingenieros en Costa Rica. Diseñamos, construimos y mantenemos plataformas web y móviles para empresas que ya no caben en Excel. Agendá una llamada de 30 minutos.",
  keywords: [
    "desarrollo de software Costa Rica",
    "software a la medida",
    "apps móviles Flutter",
    "plataformas web",
    "Poker Jacks",
    "Vivco",
  ],
  authors: [{ name: "Poker Jacks" }],
  openGraph: {
    title: "Poker Jacks — Construimos software que la gente de verdad usa",
    description:
      "Estudio de cuatro ingenieros en Costa Rica. Plataformas web y móviles para empresas que ya no caben en Excel. Vivco, nuestra plataforma de condominios, está en producción.",
    type: "website",
    locale: "es_CR",
    siteName: "Poker Jacks",
  },
  twitter: {
    card: "summary",
    title: "Poker Jacks — Software a la medida desde Costa Rica",
    description:
      "Cuatro ingenieros. Plataformas web y móviles para empresas que ya no caben en Excel.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${schibsted.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Poker Jacks",
              description:
                "Estudio de software de cuatro ingenieros en Costa Rica. Plataformas web y móviles a la medida.",
              email: "hola@pokerjacks.dev",
              areaServed: "Costa Rica y Latinoamérica",
              knowsLanguage: ["es", "en"],
            }),
          }}
        />
      </body>
    </html>
  );
}
