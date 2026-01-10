import { NavItems, type NavItemsKey } from '../../../../../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { selectStayLocation, type StayLocationType } from '../../../filters/StayLocationSlice';
import type { RootState } from '../../../../../app/store';

const StayPopup = () => {
  const dispatch = useDispatch();
  const stayLocationState = useSelector((state: RootState) => state.selectStayLocation);

  const handleSelect = (key: NavItemsKey) => {
    dispatch(selectStayLocation(key));
  };

  return (
    <div className="flex flex-col gap-2 border border-gray-700 text-gray-400 rounded-xl bg-slate-900  text-sm p-3">
      <span className="text-gray-500">
        <p className="text-sm mb-2">Location</p>
        <hr />
      </span>
      <div className="flex-col flex gap-2  justify-center items-start">
        {NavItems.map(({ id, label, key }) => {
          const isActive = stayLocationState[key];
          return (
            <button
              key={id}
              className={` ${isActive && 'text-gray-950 bg-gray-400'}  w-full text-start rounded-lg px-2.5 py-1`}
              onClick={() => handleSelect(key)}
            >
              {label}
            </button>
          );
        })}
      </div>
    </div>
  );
};
export default StayPopup;
