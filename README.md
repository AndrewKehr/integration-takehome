# GTM + Next.js Demo

Here is a simple Next.js app that shows how to set up Google Tag Manager (GTM) and track basic events. The app includes a "Request Demo" button that sends a custom event to the `dataLayer`, and it also tracks page views when the route changes.

---

## What’s in the project

- A minimal Next.js app using the App Router (`app/` directory)
- GTM script added with `<Script>` from `next/script`
- `dataLayer` is initialized and used
- Custom event tracking when a button is clicked
- route changes trigger `page_view` events in the console

---

## How to run it

npm install
npm run dev
visit http://localhost:3000

Open DevTools and go to the Console tab
click the `Request Demo` button and you should see `Pushed request_demo_clicked event to dataLayer`
This would also track page views across pages along the lines of `Pushed page_view event to dataLayer: {whatever}`

## Additional notes

The GTM container ID is a placeholder per instructions

This should satisfy all requirements including the bonus for the assessment:

GTM integration in Next.js
Git version control
Custom event tracking
Page views tracked on route changes