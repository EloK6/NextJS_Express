import Navbar from "../components/Navbar";
import Head from "next/head";
import "../scss/style.scss";

const Index = () => (
  <section>
    <Head>
      <title>Next JS AWESOME</title>
    </Head>
    <Navbar />
    <h1>Hello world</h1>
  </section>
);

export default Index;
