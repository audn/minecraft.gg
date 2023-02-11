import { GetStaticPaths, GetStaticProps } from 'next';
import { NextSeo } from 'next-seo';
import { MouseEvent, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import * as skinview3d from 'skinview3d';
import Logo from '../../common/components/misc/Logo';
import { DefaultLayout } from '../../common/layouts/Default';
import concat from '../../common/utils/helpers/concat';
import { getUser } from '../../common/utils/hooks/api/users';

function UserProfile({
  user,
}: {
  user: {
    name: string;
    id: string;
    SKIN: { url: string; metadata: { model: string } };
    CAPE?: { url: string };
  };
}) {
  const [showControls, setShowControls] = useState<boolean>(false);
  const [dragStartPos, setDragStartPos] = useState({ x: 0, y: 0 });

  const copyCommand = (val: string) => {
    navigator.clipboard.writeText(val);
    toast.success('Copied!');
  };
  const onStart = (e: MouseEvent<HTMLCanvasElement>) => {
    setDragStartPos({ x: e.screenX, y: e.screenY });
  };

  const onStop = (e: MouseEvent<HTMLCanvasElement>) => {
    const dragX = Math.abs(dragStartPos.x - e.screenX);
    const dragY = Math.abs(dragStartPos.y - e.screenY);
    if (dragX < 3 || dragY < 3) {
      console.log(`click with drag of ${dragX}, ${dragY}`);
      setShowControls(!showControls);
    } else {
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const canvas = document.getElementById(
        'skin_container',
      ) as HTMLCanvasElement;

      let skinViewer = new skinview3d.SkinViewer({
        canvas,
        width: 220,
        height: 400,
        skin: user.SKIN.url,
      });
      console.log(skinViewer.playerObject);

      skinViewer.width = 220;
      skinViewer.height = 450;
      if (user.CAPE) {
        skinViewer.loadCape(user.CAPE.url);
      }
      skinViewer.controls.enableZoom = false;

      skinViewer.fov = 70;

      const body = skinViewer.playerObject.skin;
      let head = body.head.children;
      head.forEach((x) => {
        if (!showControls) {
          x.rotateY(5.6);
        }
      });

      if (showControls) {
        skinViewer.animation = new skinview3d.WalkingAnimation();
        skinViewer.animation.speed = 0.6;
      } else {
        skinViewer.animation = new skinview3d.IdleAnimation();
        skinViewer.animation.speed = 1.4;
        // skinViewer.controls.enableRotate = false;
        skinViewer.camera.position.y = 10;
        skinViewer.camera.position.x = -23;
      }
      skinViewer.zoom = 0.9;
      //   skinViewer.animation.paused = !true;
      //   skinViewer.autoRotate = false;
      //   skinViewer.animation = null;
    }
  }, [showControls]);
  useEffect(() => {
    const storage = localStorage.getItem('viewed');
    if (!storage) {
      localStorage.setItem('viewed', JSON.stringify([user.name]));
    } else {
      localStorage.setItem(
        'viewed',
        JSON.stringify(JSON.parse(storage).concat(user.name)),
      );
    }

    const head = document.getElementById('favicon');
    head?.setAttribute('href', `https://mc-heads.net/avatar/${user.id}`);
  }, []);
  return (
    <DefaultLayout>
      <div className="max-w-6xl px-5 py-8 mx-auto">
        <Logo />
      </div>
      <NextSeo
        twitter={{
          cardType: 'summary',
        }}
        title={`${user.name} | Minecraft Profile | minecraft.gg`}
        openGraph={{
          images: [
            {
              url: `https://mc-heads.net/avatar/${user.id}`,
              height: 96,
              width: 96,
              alt: `${user.name}`,
              type: 'image/jpeg',
            },
          ],
        }}
      />

      <div className="min-h-screen bg-types-100">
        <div className={concat('flex items-center px-2 bg-types-50 ')}>
          <div className="relative flex flex-col items-center w-full max-w-6xl mx-auto sm:flex-row">
            <div
              className={concat(
                showControls
                  ? 'max-h-[430px] sm:max-h-[590px] '
                  : 'max-h-[300px] sm:max-h-[410px]',
                'transition-all ease-out justify-start duration-700 relative h-screen',
              )}
            >
              <canvas
                className="cursor-grab top-10 sm:absolute "
                id="skin_container"
                onMouseDown={(e) => onStart(e)}
                onMouseUp={(e) => onStop(e)}
              ></canvas>
            </div>
            <div className="bg-types-50 z-10 flex flex-col py-5 sm:py-0 sm:pb-0 pb-10 font-inter sm:ml-[25%]">
              <h1 className="mb-3 text-4xl font-bold text-white sm:text-6xl">
                {user.name}
              </h1>
              <ul>
                <li>
                  <span className="text-white/50">UUID </span>
                  <span className="font-semibold text-white/80">{user.id}</span>
                </li>
              </ul>
            </div>
            <div className="absolute inset-x-0 bottom-0 z-50 w-full h-10 bg-gradient-to-t from-types-50" />
          </div>
        </div>
        <div className="relative z-10 p-3 sm:p-12 bg-types-100">
          <div className="flex w-full max-w-6xl mx-auto">
            <div className="flex flex-col items-start justify-center p-5 rounded-md bg-types-50">
              <h2 className="mb-3 text-white/80">Player Head Command</h2>
              <div className="flex flex-col space-y-2">
                <button
                  onClick={() =>
                    copyCommand(
                      `/give @p minecraft:player_head{SkullOwner:"${user.name}"}`,
                    )
                  }
                  className="flex items-center px-3 py-2 rounded-md hover:text-white animate text-white/60 bg-types-150 w-80"
                >
                  <img
                    src={`https://mc-heads.net/avatar/${user.id}`}
                    className="w-6 h-6 mr-2"
                  />
                  <span className="truncate">
                    {`/give @p minecraft:player_head{SkullOwner:"${user.name}"}'`}
                  </span>
                  <span className="flex items-center px-2 py-1 ml-2 -m-1 text-xs rounded-full whitespace-nowrap bg-types-100">
                    &gt; 1.13
                  </span>
                </button>
                <button
                  onClick={() =>
                    copyCommand(
                      `/give @p minecraft:skull 1 3 {SkullOwner:"${user.name}"}`,
                    )
                  }
                  className="flex items-center px-3 py-2 rounded-md hover:text-white animate text-white/60 bg-types-150 w-80"
                >
                  <img
                    src={`https://mc-heads.net/avatar/${user.id}`}
                    className="w-6 h-6 mr-2"
                  />
                  <span className="truncate">{`/give @p minecraft:skull 1 3 {SkullOwner:"${user.name}"}`}</span>
                  <span className="flex items-center px-2 py-1 ml-2 -m-1 text-xs rounded-full whitespace-nowrap bg-types-100">
                    &lt; 1.12
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}

export default UserProfile;
export const getStaticProps: GetStaticProps = async (ctx) => {
  const username = (ctx.params?.username || '') as string;

  const data = await getUser(username);

  if (data.err) {
    return {
      notFound: true,
      revalidate: 10,
    };
  }

  return {
    props: { ...data },
    revalidate: 5,
  };
};

export const getStaticPaths: GetStaticPaths = () =>
  Promise.resolve({ paths: [], fallback: 'blocking' });
