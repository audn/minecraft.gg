import { useEffect, useState } from 'react';
import concat from '../../utils/helpers/concat';
import Link from '../layout/Link';

function Logo({ color }: { color?: 'blue' | 'dark' }) {
  const [data, setData] = useState<{ max: number; now: number }>({
    max: 150,
    now: 0,
  });
  useEffect(() => {
    async function getPlayers() {
      const data = await fetch(
        'https://mcapi.us/server/status?ip=play.minecraft.gg',
      );
      return data.json();
    }
    getPlayers().then((data) => setData(data.players));
  }, []);

  return (
    <div className="flex">
      <Link
        href="/"
        className={concat(
          color === 'blue'
            ? 'bg-brand-primary-100/10 border-brand-primary-100/10'
            : 'bg-types-100/80 border-types-150',
          'flex items-center px-3 py-[0.35rem] text-xl text-white border rounded-md font- whitespace-nowrap ',
        )}
      >
        {/* <img src="/logo.svg" className="w-6 h-6 mr-2" /> */}
        play.minecraft.gg
        <div className="px-2 py-1 ml-2 text-sm text-white rounded-full bg-white/10">
          {data.now} online
        </div>
      </Link>
    </div>
  );
}

export default Logo;
