import { NextSeo } from 'next-seo';
import H1 from '../common/components/layout/headings/H1';
import { DefaultLayout } from '../common/layouts/Default';

export default function Home() {
  return (
    <DefaultLayout>
      <NextSeo />
      <div className="min-h-screen flex flex-col justify-center items-center">
        <H1 className="text-3xl md:text-6xl md:!leading-[5rem] text-transparent max-w-4xl bg-gradient-to-br from-brand-primary-100 to-brand-primary-150 bg-clip-text">
          Boilerplate for building web applications with React
        </H1>
      </div>
    </DefaultLayout>
  );
}
