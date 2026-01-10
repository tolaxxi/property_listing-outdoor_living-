import { useDispatch, useSelector } from 'react-redux';
import { propertyTypes } from '../../../../../utils/constants';
import type { RootState } from '../../../../../app/store';
import { selectPropertyType } from '../../../filters/propertyTypeSlice';
import type { PropertyTypeKey } from '../../../../../utils/constants';

const PropertyTypesPopup = () => {
  const dispatch = useDispatch();
  const propertyTypeState = useSelector((state: RootState) => state.propertyType);

  const handleSelect = (key: PropertyTypeKey) => {
    dispatch(selectPropertyType(key));
  };

  return (
    <div className="flex flex-col gap-2 border border-gray-700 text-gray-400 rounded-xl bg-slate-900 text-sm p-3">
      <p className="text-sm mb-2 text-gray-500">Property Type</p>
      <hr />

      <div className="flex flex-col gap-2">
        {propertyTypes.map(({ label, key }) => {
          const isActive = propertyTypeState[key];

          return (
            <button
              key={key}
              onClick={() => handleSelect(key)}
              className={`w-full text-start rounded-lg px-2.5 py-1
                ${isActive ? 'bg-gray-400 text-gray-950' : 'hover:bg-slate-800'}
              `}
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
