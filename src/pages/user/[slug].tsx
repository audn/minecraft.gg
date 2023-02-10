function UserProfile() {
  return (
    <div className="min-h-screen bg-types-100">
      <div className="bg-types-50 px-24 pt-44 relative">
        <div className="max-w-6xl w-full mx-auto ">
          <div className="flex items-center h-[250px]">
            <img src="/audn.png" className="w-[25%] mr-10" />
            <div className="flex flex-col font-inter -mt-20">
              <h1 className="text-5xl mb-3 text-white font-bold">audn</h1>
              <ul>
                <li>
                  <span className="text-white/50">UUID </span>
                  <span className="text-white/80 font-semibold">
                    a4da5ef3a942492f8e3f748e9efcf9b7
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-t from-types-50 h-10 absolute w-full bottom-0 inset-x-0" />
      </div>
      <div className="p-24 bg-types-100 z-10 relative">
        {/* <div className="max-w-6xl w-full mx-auto">hgey</div> */}
      </div>
    </div>
  );
}

export default UserProfile;
