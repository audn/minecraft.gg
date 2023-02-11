import { GetStaticPaths, GetStaticProps } from 'next';
import { NextSeo } from 'next-seo';
import { MouseEvent, useEffect, useState } from 'react';
import * as skinview3d from 'skinview3d';
import Logo from '../../common/components/misc/Logo';
import { DefaultLayout } from '../../common/layouts/Default';
import concat from '../../common/utils/helpers/concat';
import { getUser } from '../../common/utils/hooks/api/cats';

function UserProfile({ user }: { user: any }) {
  const [showControls, setShowControls] = useState<boolean>(false);
  const [dragStartPos, setDragStartPos] = useState({ x: 0, y: 0 });

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
        skin: '/skin.png',
      });
      console.log(skinViewer.pixelRatio);

      skinViewer.width = 220;
      skinViewer.height = 450;

      //   skinViewer.loadCape('img/cape.png');
      //   skinViewer.loadCape('img/cape.png', { backEquipment: 'elytra' });
      skinViewer.controls.enableZoom = false;

      skinViewer.fov = 70;
      //   const arm = skinViewer.playerObject.skin.rightArm.children[0].children[1];
      //   arm.visible = false;

      const body = skinViewer.playerObject.skin;
      let head = body.head.children;
      head.forEach((x) => {
        if (!showControls) {
          x.rotateY(5.6);
        }
      });

      //   console.log(skinViewer.playerObject);

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
  return (
    <DefaultLayout>
      <div className="max-w-6xl px-5 py-8 mx-auto">
        <Logo />
      </div>
      <NextSeo />
      <div className="min-h-screen bg-types-100">
        <div className={concat('flex items-center px-2 bg-types-50 ')}>
          <div className="flex flex-col items-center w-full max-w-6xl mx-auto sm:flex-row">
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
                //   onDrag={handleSkinClick}
              ></canvas>
            </div>
            <div className="bg-types-50 z-10 flex flex-col py-5 sm:py-0 sm:pb-0 pb-10 font-inter sm:ml-[25%]">
              <h1 className="mb-3 text-4xl font-bold text-white sm:text-6xl">
                audn
              </h1>
              <ul>
                <li>
                  <span className="text-white/50">UUID </span>
                  <span className="font-semibold text-white/80">
                    a4da5ef3a942492f8e3f748e9efcf9b7
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="absolute inset-x-0 bottom-0 w-full h-10 bg-gradient-to-t from-types-50" />
        </div>
        <div className="relative z-10 p-24 bg-types-100">
          {/* <div className="w-full max-w-6xl mx-auto">hgey</div> */}
        </div>
      </div>
    </DefaultLayout>
  );
}

export default UserProfile;
export const getStaticProps: GetStaticProps = async (ctx) => {
  const username = (ctx.params?.username || '') as string;

  const data = await getUser(username);

  if (!data) {
    return {
      notFound: true,
      revalidate: 10,
    };
  }

  return {
    props: { user: JSON.stringify(data) },
    revalidate: 5,
  };
};

export const getStaticPaths: GetStaticPaths = () =>
  Promise.resolve({ paths: [], fallback: 'blocking' });
