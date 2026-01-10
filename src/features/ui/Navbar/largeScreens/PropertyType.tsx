import { useEffect, useRef, useState } from 'react';
import { FaAngleDown } from 'react-icons/fa6';
import { propertyTypes } from '../../../../utils/constants';
import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import { selectPropertyType } from '../../filters/propertyTypeSlice';

const PropertyType = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const dispatch = useAppDispatch();

  const selectedTypes = useAppSelector((state) => state.propertyType);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div ref={dropdownRef}>
      <button
        className="border flex gap-2 items-center text-gray-400 border-slate-600  rounded-lg p-2"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        Property type <FaAngleDown />
      </button>

      {isOpen && (
        <div className="absolute bottom-27 w-45 flex flex-col bg-slate-900  py-3 px-2 gap-2 rounded-md text-gray-300 items-start right-0">
          {propertyTypes.map(({ label, key }) => {
            const isActive = selectedTypes[key];
            return (
              <button
                className={`${isActive && 'bg-gray-400 text-slate-800'} w-full text-start px-5 rounded-lg`}
                key={key}
                onClick={() => dispatch(selectPropertyType(key))}
              >
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
