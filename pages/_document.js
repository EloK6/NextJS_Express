import Document, { Head, Main, NextScript } from "next/document";

export default class Mydocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <title>Next JS AWESOME</title>
          <link rel="stylesheet" href="/_next/static/style.css" />
        </Head>
        <Main></Main>
        <NextScript />
      </html>
    );
  }
}
