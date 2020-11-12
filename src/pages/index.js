import Layout from "../components/Layout/Layout";

export default function Home({ players }) {
  console.log(players);

  return (
    <Layout title='Next Foot League'>
      <h1>
        Welcome to the <mark>Next Foot League</mark> ⚽
      </h1>
    </Layout>
  );
}
