import Head from "next/head";
import { useRouter } from "next/router";

import Header from "../components/Header";
import Footer from "./Footer";
import Showcase from "./Showcase";

export default function Layout({ title, children }) {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>{title || "Create Next App"}</title>
      </Head>
      <Header />
      {router.pathname === "/" && <Showcase />}
      {children}
      <Footer />
    </div>
  );
}
