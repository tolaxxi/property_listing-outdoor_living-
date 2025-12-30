import { MobileIcon } from '../../../../utils/constants';

const MobileNav = () => {
  return (
    <nav className="md:hidden  flex justify-center items-center flex-col w-[90%]">
      <div
        className=" border-gray-700
     w-full opacity-90  rounded-4xl px-5 py-2 bg-slate-900 border text-3xl text-gray-400 flex justify-between"
      >
        {MobileIcon.map(({ id, icon: Icon }) => (
          <div className="flex-col flex" key={id}>
            <button className="active:bg-gray-400 flex active:text-gray-950 px-7 rounded-4xl py-2">
              <Icon />
            </button>
          </div>
        ))}
      </div>
    </nav>
  );
};
export default MobileNav;
