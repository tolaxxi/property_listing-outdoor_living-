import { propertyTypes } from '../../../../../utils/constants';

const PropertyTypesPopup = () => {
  return (
    <div className="flex flex-col gap-2 text-nowrap border border-gray-700 text-gray-400 rounded-xl bg-slate-900 text-sm p-3">
      <span className="text-gray-500">
        <p className="text-sm mb-2">Property Type</p>
        <hr />
      </span>
      <div className="flex-col flex gap-2 justify-center items-start">
        {propertyTypes.map(({ id, label }) => {
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
export default PropertyTypesPopup;
