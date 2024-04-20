import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="description"
          content="EXTENSIVE MONGOLIA TRAVEL , TOUR "
        />
        {/* <!-- Google fonts --> */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Jost:wght@400;500;600&display=swap"
          rel="stylesheet"
        />

        <meta
          name="keywords"
          content=" cruise, destination, experiences, resort, tour, travel, travel agency, trip, vacation ,mongolia ,mongolia travel , extensive , extensivemon , mongolia resort , mongolia travel , mongolia tour, mongolian trip , mongolian  extensive "
        />

        <link rel="icon" href="/logog.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
