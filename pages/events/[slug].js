import Image from "next/image";
import Layout from "../../components/Layout";
import { API_URL } from "../../config";

export default function EventPage({ event }) {
  console.log(event);
  const { name, image, date } = event?.data?.attributes;
  return (
    <Layout>
      Eevent page
      {<h1>{name}</h1>}
      <h3>{new Date(date).toString()}</h3>
      {image?.data && (
        <Image
          src={image.data.attributes.formats.medium.url}
          width={250}
          height={250}
          alt="not avilaale"
        />
      )}
    </Layout>
  );
}

export async function getStaticPaths() {
  const res = await fetch(`${API_URL}/api/events`);
  let result = await res.json();
  console.log(result);
  result = result.data.map((dataObj) => ({
    params: { slug: `${dataObj.id}` },
  }));

  return {
    paths: result,
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const slug = context.params.slug;
  const res = await fetch(`${API_URL}/api/events/${slug}?populate=*`);
  const result = await res.json();
  console.log("slug>>>>>>>>>>>>>>>>.", slug, result);

  return {
    props: { event: result },
  };
}
