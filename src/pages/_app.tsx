import { AppProps } from 'next/app';
import '../assets/css/style.css';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { DefaultSeo } from 'next-seo';
import SEO from '../../next-seo.config';
import { Header } from '../common/components/Header';
import DisclaimerAlert from '../common/components/layout/Alerts/Disclaimer';
const queryClient = new QueryClient();

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <DisclaimerAlert />
      <Header />
      <DefaultSeo {...SEO} />
      <div className="px-5">
        <Component {...pageProps} key={router.route} />
      </div>
    </QueryClientProvider>
  );
}
