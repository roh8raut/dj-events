import Link from "next/link";
import Layout from "../../components/Layout";
import { API_URL } from "../../config";

export default function Events({ events }) {
  console.log(events);
  const data = events.data;
  return (
    <Layout>
      Events
      {!data?.length ? (
        "No results Found"
      ) : (
        <ul>
          {data.map(({ attributes, id }) => {
            return (
              <div style={{ display: "flex" }}>
                <li>{attributes.name}</li>{" "}
                <button>
                  <Link href={`/events/${id}`}>
                    <a className="btn">Event</a>
                  </Link>
                </button>
              </div>
            );
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
