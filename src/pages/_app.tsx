import { AppProps } from 'next/app';
import '../assets/css/style.css';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { DefaultSeo } from 'next-seo';
import { CookiesProvider, useCookies } from 'react-cookie';
import { Toaster } from 'react-hot-toast';
import SEO from '../../next-seo.config';
import DisclaimerAlert from '../common/components/layout/Alerts/Disclaimer';
const queryClient = new QueryClient();

export default function App({ Component, pageProps, router }: AppProps) {
  const [cookies, setCookie] = useCookies(['disclaimer']);
  const current = new Date();
  const sixMonths = new Date();
  sixMonths.setMonth(current.getMonth() + 6);

  function handleCookie(value: string) {
    setCookie('disclaimer', value, { path: '/', expires: sixMonths });
  }
  const showDisclaimer = cookies['disclaimer'] !== 'yes';

  return (
    <CookiesProvider>
      <QueryClientProvider client={queryClient}>
        <Toaster />
        <DefaultSeo {...SEO} />
        <DisclaimerAlert
          onClick={() => handleCookie('yes')}
          open={showDisclaimer}
        />
        <div>
          <Component {...pageProps} key={router.route} />
        </div>{' '}
      </QueryClientProvider>
    </CookiesProvider>
  );
}
