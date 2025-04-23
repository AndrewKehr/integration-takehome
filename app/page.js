'use client';

export default function Home() {
  const handleRequestDemoClick = () => {
    if (window.dataLayer) {
      window.dataLayer.push({
        event: 'request_demo_clicked',
      });
      console.log('Pushed request_demo_clicked event to dataLayer');
      alert('Demo request sent!'); //Visual feedback per demo instructions
    } else {
      console.warn('dataLayer is not defined');
    }
  };

  return (
    <main>
      <h1>GTM Demo Page</h1>
      <button onClick={handleRequestDemoClick}>Request Demo</button>
    </main>
  );
}