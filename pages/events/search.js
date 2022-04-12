import Link from "next/link";
import qs from "qs";
import Layout from "../../components/Layout";
import { API_URL } from "../../config";

export default function SearchPage({ events }) {
  const data = events.data;
  return (
    <Layout>
      <Link href="/">Go Back</Link>
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

export async function getServerSideProps({ query: { term }, req }) {
  console.log(req.headers.cookie);
  const query = qs.stringify(
    {
      filters: {
        $or: [
          {
            name: {
              $containsi: term,
            },
          },
          {
            venue: {
              $containsi: term,
            },
          },
          {
            description: {
              $containsi: term,
            },
          },
        ],
      },
    },
    {
      encodeValuesOnly: true,
    }
  );

  const res = await fetch(`${API_URL}/api/events?${query}`);
  const result = await res.json();

  return {
    props: { events: result },
  };
}
