import { NavItems } from '../../../../utils/constants';
import PropertyType from './PropertyType';

const Navbar = () => {
  return (
    <nav
      className="bg-slate-900 border md:flex relative hidden items-center justify-between border-gray-700
     w-[90%] opacity-90  py-7 px-10 rounded-2xl"
    >
      {/* locations */}
      <div className=" flex gap-5">
        {NavItems.map(({ id, label }) => {
          return (
            <button className="hover:bg-gray-700 text-gray-200 p-2 rounded-md" key={id}>
              {label}
            </button>
          );
        })}
      </div>

      <div className=" flex gap-6">
        {/* super host toggle */}
        <span className=" flex gap-2 items-center text-gray-400">
          <label className="switch">
            <input type="checkbox" />
            <span className="slider round"></span>
          </label>

          <p>Super Host</p>
        </span>
        <PropertyType />
      </div>
    </nav>
  );
};
export default Navbar;
