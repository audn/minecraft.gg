import Router from 'next/router';
import { ReactNode } from 'react';
import { trackPageview } from '../utils/analytics';

Router.events.on('routeChangeComplete', (url) => {
  trackPageview(url);
});

type Props = {
  children: ReactNode;
};
export const DefaultLayout = ({ children }: Props) => {
  return (
    <div className="container flex flex-col min-h-screen ">
      <main className={'flex-1 w-full text-on-100 z-30'}>{children}</main>
      <div className="bg-types-50/80 absolute inset-0 z-20" />
      <div className="inset-0 absolute video">
        <video
          className="z-10 object-cover rounded-lg w-full"
          autoPlay={true}
          muted={true}
          loop={true}
          playsInline={true}
        >
          <source src="/video/movie.webm" type="video/webm" />
          <source src="/video/movie.mp4" type="video/mp4" />
          Sorry, your browser doesn't support videos.
        </video>
      </div>
    </div>
  );
};
