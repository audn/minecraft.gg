import Link from 'next/link';
import { useState } from 'react';
const nav = [
  {
    title: 'Home',
    route: '/',
  },
];
function Header() {
  const [isExpanded, toggleExpansion] = useState(false);

  return (
    <div className="relative mb-12">
      <div className="bg-default-200">
        <div className="container mx-auto flex text-white opacity-75">
          <div className="py-6 md:flex text-white text-center md:text-left align-middle items-center justify-center">
            <i className="twa twa-scroll text-2xl mr-6"></i> Not official
            Minecraft product. Not approved by or associated with Mojang.
            <div className="inline md:hidden text-center mx-auto">
              <a
                className="px-12 py-4 block mt-6 bg-default-400 text-center rounded-full hover:underline cursor-pointer"
                href="https://www.minecraft.net/"
                target="_blank"
              >
                <div>
                  <i className="fad fa-external-link mr-3" />
                  Official website
                </div>
              </a>
            </div>
          </div>
          <div className="ml-auto hidden md:flex ">
            <a
              className="ml-3 py-6 px-6 bg-default-250 text-center w-56 hover:underline cursor-pointer justify-center items-center flex content-center flex-wrap"
              href="https://www.minecraft.net/"
              target="_blank"
            >
              <div>
                <i className="fad fa-external-link mr-3" />
                Official website
              </div>
            </a>
          </div>
        </div>
      </div>
      <header className="bg-default-500 hidden md:block">
        <div className="container mx-auto flex">
          {nav.map(({ title, route }, i) => (
            <Link href={route} key={i}>
              <a className={'text-white  regular px-12 bg-default-700 py-6'}>
                {title}
              </a>
            </Link>
          ))}
          <div className="flex ml-auto">
            <a
              className="py-6 px-6 bg-default-400 text-white text-center sm:w-56 hover:underline cursor-pointer"
              href="https://twitter.com/tryminecraftgg"
              target="_blank"
            >
              <div>
                <i className="fab fa-twitter sm:mr-3" />
                <span className="hidden sm:inline"> Follow us</span>
              </div>
            </a>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
