import { FaStar } from 'react-icons/fa6';
import { GoHome } from 'react-icons/go';
import { IoPersonSharp } from 'react-icons/io5';

import type { Properties } from '../types/propertyListing';

interface propertyCardProp {
  property: Properties;
}
const PropertyCard = ({ property }: propertyCardProp) => {
  
  return (
    <div className=" overflow-hidden border border-gray-700 w-85  rounded-2xl">
      <div className="relative">
        {property.superhost && (
          <span className="absolute flex items-center bg-gray-950 gap-2 text-gray-300 text-sm px-3 py-1 rounded-2xl top-2 left-2">
            Superhost <FaStar className="text-amber-300" />
          </span>
        )}
        <img src={property.image} alt={property.title} />
      </div>
      <div className="p-5 text-gray-500">
        <div className="">
          <h2
            className="text-gray-300 mb-2 font-medium
         text-lg"
          >
            {property.title}
          </h2>
          <p className="text-sm">{property.description}</p>
        </div>
        <div className=" my-3 flex items-center gap-5 text-sm justify-start">
          <p className="flex items-center gap-2">
            <GoHome /> {property.capacity.bedroom} bedroom
          </p>
          <p className="flex items-center gap-2">
            <IoPersonSharp /> {property.capacity.people} guests
          </p>
        </div>
        <hr />
        {/* price and rating */}
        <div className="pt-3 flex items-center justify-between">
          <p className="flex font-medium text-gray-300 items-center">
            ${property.price} <span className="text-gray-400 font-light text-xs">/night</span>
          </p>
          <p className="font-medium flex items-center text-gray-300 gap-1.5">
            <FaStar className="text-yellow-500" /> {property.rating}
          </p>
        </div>
      </div>
    </div>
  );
};
export default PropertyCard;
