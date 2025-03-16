import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Cape Town Photography</title>
        <meta name="description" content="Cape Town Photography Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Welcome to Cape Town Photography</h1>
        <p>Your visual journey through the Mother City begins here.</p>
      </main>

      <footer>
        <p>© 2024 Cape Town Photography. All rights reserved.</p>
      </footer>
    </div>
  );
}