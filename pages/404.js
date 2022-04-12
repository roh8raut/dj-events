import Link from "next/link";
import Layout from "../components/Layout";

export default function NotFoundPage() {
  return (
    <Layout title="Page Not Found">
      <div className={''}>
        <h1>404 :(</h1>
        <h4>Sorry, there is nothing here</h4>
        <Link href="/">Go Back Home</Link>
      </div>
    </Layout>
  );
}
