import { DefaultSeo } from 'next-seo';
import '../styles/globals.css'; // Import global styles if any

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo
        title="UP Board Model Papers 2024-25 - English Medium"
        description="Download UP Board sample papers for Class 12. Subjects: Hindi, English, Math, Chemistry, Physics, and Biology."
        openGraph={{
          type: 'Sample Papper',
          locale: 'en_IN',
          url: 'https://samplepapers.arbab.shop',
          site_name: 'UP Board Model Papers of 2024-25 - English Medium',
        }}
      />
      <Component {...pageProps} />
    </>
  );
}
