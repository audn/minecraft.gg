import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import { SyntheticEvent, useEffect, useState } from 'react';
import { Button } from '../common/components/Buttons';
import { Form } from '../common/components/Form';
import Link from '../common/components/layout/Link';
import Tooltip from '../common/components/layout/Tooltip';
import Logo from '../common/components/misc/Logo';
import { DefaultLayout } from '../common/layouts/Default';

export default function Home() {
  const [search, setSearch] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [users, setUsers] = useState<string[]>([]);

  const router = useRouter();
  function onSearch(e: SyntheticEvent) {
    const storage = localStorage.getItem('history');
    if (!storage) {
      localStorage.setItem('history', JSON.stringify([search]));
    } else {
      localStorage.setItem(
        'history',
        JSON.stringify(JSON.parse(storage).concat(search)),
      );
    }

    setIsLoading(true);
    e.preventDefault();
    router.push({ pathname: `/user/${search}` }, undefined, { shallow: true });
  }
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const viewed = localStorage.getItem('viewed');
      if (viewed) setUsers(JSON.parse(viewed));

      const input = document.getElementById('username');
      if (input) {
        input.focus();
      }
    }
  }, []);

  return (
    <DefaultLayout video={true}>
      <NextSeo />
      <div className="absolute inset-x-0 flex justify-center w-full top-5">
        <Logo color="blue" />
      </div>
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
                disabled={search.length < 3}
                onClick={onSearch}
              />
            </Form.Layout>
          </div>
          {users.length && (
            <div className="roundedsmd max-w-lg flex items-center flex-col w-full 0 contents-border !mt-5">
              History
              <div className="flex flex-wrap gap-2">
                {[...new Set(users)].map((user) => (
                  <Tooltip id={user} text={user} key={user}>
                    <Link href={`/user/${user}`}>
                      <img
                        src={`https://mc-heads.net/avatar/${user}`}
                        className="w-6 h-6"
                      />
                    </Link>
                  </Tooltip>
                ))}
              </div>
            </div>
          )}
          <Link href="/discord" target="_blank">
            <Button.Primary
              icon="fa-brands fa-discord"
              title="Join Discord"
              className="mt-10 !font-normal !text-base !px-2 !py-1 btn-border-discord !bg-brand-discord-100"
            />
          </Link>
        </div>
      </div>
    </DefaultLayout>
  );
}
