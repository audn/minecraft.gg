import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import { SyntheticEvent, useState } from 'react';
import { Button } from '../common/components/Buttons';
import { Form } from '../common/components/Form';
import { DefaultLayout } from '../common/layouts/Default';

export default function Home() {
  const [search, setSearch] = useState<string>('');
  const router = useRouter();
  function onSearch(e: SyntheticEvent) {
    e.preventDefault();
    router.push({ pathname: `/user/${search}` }, undefined, { shallow: true });
  }
  return (
    <DefaultLayout>
      <NextSeo />
      <div className="px-5 ">
        <div className="min-h-screen flex flex-col justify-center items-center">
          <div className="p-10 bg-types-100 max-w-lg w-full  content-border text-center flex flex-col justify-center items-center space-y-10">
            <h1 className="font-ten text-white text-3xl">
              Minecraft User Lookup
            </h1>
            <Form.Layout
              onSubmit={onSearch}
              className="flex justify-center flex-col items-center space-y-10"
            >
              <Form.Input
                id="username"
                placeholder="Username..."
                value={search}
                onChange={setSearch}
              />

              <Button.Primary
                title="GO!"
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
