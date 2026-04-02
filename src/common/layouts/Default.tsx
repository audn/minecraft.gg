import Router from 'next/router';
import { ReactNode } from 'react';
import { trackPageview } from '../utils/analytics';

Router.events.on('routeChangeComplete', (url) => {
  trackPageview(url);
});

type Props = {
  children: ReactNode;
  video?: boolean;
};
export const DefaultLayout = ({ children, video = false }: Props) => {
  return (
    <div className="flex flex-col min-h-screen bg-types-50">
      <main className={'flex-1 w-full text-on-100 z-30'}>{children}
        {/* <p>Not an official Minecraft product or service. Not approved by Mojang or Microsoft.      </p> */}

      </main>
      {video && (
        <>
          <div className="absolute inset-0 z-20 bg-types-50/80" />
          <div className="absolute inset-0 video">
            <video
              className="z-10 object-cover w-full rounded-lg"
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
        </>
      )}
      <p className="text-center z-50 text-sm text-gray-500 fixed bottom-0 inset-x-0">
        Not an official Minecraft product or service. Not approved by Mojang
        or Microsoft.{' '}
      </p>
    </div>
  );
};
