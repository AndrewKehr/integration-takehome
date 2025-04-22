import Head from 'next/head';

export default function Home() {
  const handleRequestDemoClick = () => {
    if (window.dataLayer) {
      window.dataLayer.push({
        event: 'request_demo_clicked',
      });
      console.log('Pushed request_demo_clicked event to dataLayer');
      alert('Demo request sent!'); // Just for visual feedback
    } else {
      console.warn('dataLayer is not defined');
    }
  };

  return (
    <div>
      <Head>
        <title>GTM Integration Demo</title>
      </Head>
      <main>
        <h1>Welcome to our Demo Page</h1>
        <button onClick={handleRequestDemoClick}>Request Demo</button>
      </main>
    </div>
  );
}