import React, { ReactNode } from "react";
import styles from "./Layout.module.css";
import Navigation from "./Navigation";
import Header from "./Header";
import Meta from "./Meta";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Meta />
      <Navigation />
      <div className={styles.container}>
        <main className={styles.main}>
          <Header />
          {children}
        </main>
      </div>
    </>
  );
};

export default Layout;
