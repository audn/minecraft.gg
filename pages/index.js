import React, { useState, useEffect } from 'react';

{
  /*
let output;
got('https://api.minetools.eu/ping/skyblock.minecraft.gg/8141').then((res) => {
  output = JSON.parse(res).body;
});
*/
}

function Index() {
  return (
    <div className="container mx-auto ">
      <div className="block xl:flex xl:space-x-12">
        <div className="w-full align-middle items-center justify-center">
          <div className="bg-default-blue rounded-tl-lg rounded-tr-lg">
            <h1 className="text-bold font-inter text-white font-bold px-12 text-xl py-8">
              Introducing minecraft.gg - the site for everything.
            </h1>
          </div>
          <div className="bg-default-600 px-12 py-8 rounded-bl-lg rounded-br-lg">
            Upcoming website for Minecraft lovers.
            <p className="mt-6" />
            Our goal is to provide all our users with free content! Users can
            post their Worlds, share their Servers to collect votes, and even
            upload their Plugins!
            <p />
            <h3 className="my-6 text-color-100 text-lg font-bold">
              This site isn't ready to be shown yet.
            </h3>
            Magic isn’t brewed over night, so you’ll have to wait alongside with
            the others. Feel free to join our SkyBlock server if you'd like to
            get involved early!
          </div>
        </div>
        <div className="mt-12 xl:mt-0 select-none w-full xl:w-1/2 align-middle items-center justify-center">
          <div className="bg-default-600 px-5 py-5 rounded-lg">
            {/* SkyBlock*/}
            <div className="bg-default-100 rounded-lg">
              <div className="flex items-center justify-center px-4 py-4">
                <div className="w-10 mr-6">
                  <img src="grass_block.png" />
                </div>
                <div className="flex-1">
                  <h2 className="text-green-500">SkyBlock</h2>
                  {/*
                  <h3 id="players" className="text-sm inline">
                    Loading..
                  </h3>
                  */}
                </div>
                <div className="flex ml-auto">
                  <div className="bg-default-300 rounded-lg px-6 py-3 text-center  hover:bg-default-300">
                    mc.minecraft.gg
                  </div>
                </div>
              </div>
            </div>
            {/* 
            <div className="bg-default-400 rounded-lg mb-3">
              <div className="flex items-center justify-center px-4 py-4">
                <div className="w-10 mr-6">
                  <img src="redstone_block.png" />
                </div>
                <div className="flex-1">
                  <h2 className="text-green-500">KitPvP</h2>
                  <h3 className="text-sm inline">Whitelisted!</h3>
                </div>
                <div className="flex ml-auto">
                  <div className="bg-default-300 rounded-lg px-6 py-3 text-center cursor-not-allowed hover:bg-default-300">
                    :(
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-default-400 rounded-lg">
              <div className="flex items-center justify-center px-4 py-4">
                <div className="w-10 mr-6">
                  <img src="obsidian.png" />
                </div>
                <div className="flex-1">
                  <h2 className="text-green-500">Factions</h2>
                  <h3 className="text-sm inline">Whitelisted!</h3>
                </div>
                <div className="flex ml-auto">
                  <div className="bg-default-300 rounded-lg px-6 py-3 text-center cursor-not-allowed hover:bg-default-300">
                    :(
                  </div>
                </div>
              </div>
            </div>
                    */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
