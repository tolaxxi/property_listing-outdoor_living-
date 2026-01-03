import { NavItems } from '../../../../../utils/constants';

const StayPopup = () => {
  return (
    <div className="flex flex-col gap-2 border border-gray-700 text-gray-400 rounded-xl bg-slate-900  text-sm p-3">
      <span className="text-gray-500">
        <p className="text-sm mb-2">Location</p>
        <hr />
      </span>
      <div className="flex-col flex gap-2  justify-center items-start">
        {NavItems.map(({ id, label }) => {
          return (
            <button
              key={id}
              className="active:text-gray-950 active:bg-gray-400  w-full text-start rounded-lg px-2.5 py-1"
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
