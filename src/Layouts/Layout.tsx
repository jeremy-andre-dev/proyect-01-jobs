// components/Layout.tsx
import type { ReactNode } from "react";
import Head from "next/head";

import NavBar from "./NavBar/NavBar";
import Footer from "./Footer/Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Head>
        <title>Pets-proyect-job</title>
        <meta name="Pets-proyect-job" content="Pets-proyect-job" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="flex justify-center ">
        <NavBar />
      </header>

      <main className="flex min-h-screen justify-center">{children}</main>

      <footer className="flex justify-center">
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
