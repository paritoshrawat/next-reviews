// import { ReactNode } from "react";

import "./globals.css";
import NavBar from "../components/NavBar";
import { exo2, orbitron } from "./fonts";

// interface LayoutProps {
//   children: ReactNode;
// }
export const metadata = {
  title: {
    default: "Indie Gamer",
    template: "%s | Indie Gamer",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${orbitron.variable} ${exo2.variable}`}>
      <body className="bg-orange-50 px-4 py-2 flex flex-col min-h-screen">
        <header>
          <NavBar />
        </header>
        <main className="py-3 grow">{children}</main>
        <footer className="text-center text-xs text-slate-500 border-t py-3">
          Game data and images courtsey of{" "}
          <a
            href="https://rawg.io/"
            target="_blank"
            className="text-orange-800 hover:underline"
          >
            RAWG
          </a>
        </footer>
      </body>
    </html>
  );
}
