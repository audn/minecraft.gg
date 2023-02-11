import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import { SyntheticEvent, useState } from 'react';
import { Button } from '../common/components/Buttons';
import { Form } from '../common/components/Form';
import { DefaultLayout } from '../common/layouts/Default';

export default function Home() {
  const [search, setSearch] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const router = useRouter();
  function onSearch(e: SyntheticEvent) {
    setIsLoading(true);
    e.preventDefault();
    router.push({ pathname: `/user/${search}` }, undefined, { shallow: true });
  }
  return (
    <DefaultLayout video={true}>
      <NextSeo />
      <div className="px-5 ">
        <div className="flex flex-col items-center justify-center min-h-screen">
          <div className="flex flex-col items-center justify-center w-full max-w-lg p-10 space-y-10 text-center bg-types-100 content-border">
            <h1 className="text-3xl text-white font-ten">
              Minecraft User Lookup
            </h1>
            <Form.Layout
              onSubmit={onSearch}
              className="flex flex-col items-center justify-center space-y-10"
            >
              <Form.Input
                id="username"
                placeholder="Username..."
                value={search}
                onChange={setSearch}
              />

              <Button.Primary
                title="GO!"
                isLoading={isLoading}
                className="text-xl"
                onClick={onSearch}
              />
            </Form.Layout>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}
