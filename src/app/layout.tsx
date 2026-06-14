import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bhagyesh Sunil Chaudhari | AI & Full-Stack Software Engineer",
  description: "Portfolio of Bhagyesh Sunil Chaudhari, Software Engineer specializing in AI, Agentic AI, RAG, and Full-Stack Web Development.",
  keywords: ["Bhagyesh Sunil Chaudhari", "AI Engineer", "Agentic AI", "RAG", "Full Stack Developer", "Software Engineer", "Portfolio"],
  authors: [{ name: "Bhagyesh Sunil Chaudhari" }],
  openGraph: {
    title: "Bhagyesh Sunil Chaudhari | AI & Full-Stack Software Engineer",
    description: "Explore the portfolio of Bhagyesh Sunil Chaudhari, showcasing expertise in AI, Agentic AI, RAG systems, and Full-Stack Web Development.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
      data-theme="dark"
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme");if(t)document.documentElement.setAttribute("data-theme",t)}catch(e){}})()`,
          }}
        />
      </head>
      <body>
        <div className="grid-bg" />
        {children}
      </body>
    </html>
  );
}

