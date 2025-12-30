import { useState } from 'react';
import { FaAngleDown } from 'react-icons/fa6';

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

      {isOpen && <div>{}</div>}
    </div>
  );
};
export default PropertyType;
