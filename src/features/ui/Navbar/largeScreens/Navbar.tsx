import SuperHostToggle from '../../superHostToggle/SuperHostToggle';
import { NavItems } from '../../../../utils/constants';
import PropertyType from './PropertyType';
import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import { selectStayLocation } from '../../filters/StayLocationSlice';

const Navbar = () => {
  const dispatch = useAppDispatch();
  const selectedTypes = useAppSelector((state) => state.selectStayLocation);

  return (
    <nav
      className="bg-slate-900 border md:flex relative hidden items-center justify-between border-gray-700
     w-[90%] opacity-90  py-7 px-10 rounded-2xl"
    >
      {/* locations */}
      <div className=" flex gap-5">
        {NavItems.map(({ id, label, key }) => {
          const isActive = selectedTypes[key];
          return (
            <button
              className={`hover:bg-gray-700  ${isActive && 'bg-gray-700'} text-gray-200 p-2 rounded-md`}
              key={id}
              onClick={() => dispatch(selectStayLocation(key))}
            >
              {label}
            </button>
          );
        })}
      </div>

      <div className=" flex gap-6">
        {/* super host toggle */}
        <SuperHostToggle />
        <PropertyType />
      </div>
    </nav>
  );
};
export default Navbar;
