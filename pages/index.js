import Layout from "../components/Layout";
import { API_URL } from "../config";

export default function Home({ events }) {
  console.log(events);
  const data = events.data || []
  return (
    <Layout>
      hello
      {!data?.length ? (
        "Noresults Found"
      ) : (
        <ul>
          {data.map((event) => {
            return <li key={event.id}>{event.attributes.name}</li>;
          })}
        </ul>
      )}
    </Layout>
  );
}

export async function getStaticProps(path) {
  const res = await fetch(`${API_URL}/api/events`);
  const result = await res.json();
  console.log(result);

  return {
    props: { events: result },
  };
}
