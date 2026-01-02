import { useState } from 'react';
import { FaAngleDown } from 'react-icons/fa6';
import { propertyTypes } from '../../../../utils/constants';

const PropertyType = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        className="border flex gap-2 items-center text-gray-400 border-slate-600  rounded-lg p-2"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        Property type <FaAngleDown />
      </button>

      {isOpen && (
        <div className="absolute bottom-27 w-45 flex flex-col bg-slate-900  py-3 px-5 gap-2 rounded-md text-gray-300 items-start right-0">
          {propertyTypes.map(({ label }) => {
            return (
              <button className="" key={label}>
                {label}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
export default PropertyType;
