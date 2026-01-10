import { FaStar } from 'react-icons/fa6';
import { GoHome } from 'react-icons/go';
import { IoLocationOutline, IoPersonSharp } from 'react-icons/io5';
import { IoMdClose } from 'react-icons/io';
import type { Properties } from '../../../types/propertyListing';
import { useDispatch } from 'react-redux';
import { close } from './modalSlice';

interface PropertyModalProps {
  property: Properties;
}

const Modal = ({ property }: PropertyModalProps) => {
  const dispatch = useDispatch();
  return (
    <section className="fixed w-full inset-0 h-dvh flex items-center z-50 justify-center">
      {/* modal backdrop */}
      <div className=" absolute bg-gray-950 inset-0 opacity-60" onClick={() => dispatch(close())}></div>
      {/* modal content */}
      <div
        className=" border-gray-700 border bg-gray-950 text-gray-400 md:w-[40%] relative rounded-2xl flex flex-col overflow-hidden w-[90%] 
     max-h-[99dvh] 
"
      >
        {/* modal image */}
        <div className=" relative h-75">
          <button
            className="absolute top-5 right-5 bg-gray-500 rounded-md p-1 text-gray-950 text-2xl"
            onClick={() => {
              dispatch(close());
            }}
          >
            <IoMdClose />
          </button>
          {/* superHost tag */}
          {property.superhost && (
            <span className="absolute flex items-center bg-gray-950 gap-4 justify-center text-gray-300 text-sm px-5 py-2 rounded-4xl top-5 left-5">
              Superhost <FaStar className="text-amber-300" />
            </span>
          )}
          <img src={property.image} alt="" className="w-full h-full object-cover" />
        </div>

        {/* modal content details */}
        <div className="p-4 gap-5 flex flex-col">
          {/* modal title and desc */}
          <span className="flex flex-col gap-5">
            <h2 className="font-medium text-3xl text-gray-200">{property.title}</h2>

            <p className="text-sm">{property.description}</p>
          </span>

          {/* bedroom,location and guests */}
          <span className="flex justify-between text-sm items-center">
            {/*bedrooms and no. of guests  */}
            <div className="flex gap-5 items-center">
              <p className="flex gap-2 items-center">
                <GoHome /> {property.capacity.bedroom} bedroom
              </p>
              <p className="flex gap-2 items-center">
                <IoPersonSharp /> {property.capacity.people} guests
              </p>
            </div>

            {/* modal location */}
            <span className="flex items-center  border-gray-700 gap-1  justify-start text-gray-300 text-sm  p-1.5 rounded-4xl">
              <IoLocationOutline />
              {property.location}
            </span>
          </span>

          <hr />

          {/* price and rating */}
          <div className="flex justify-between items-center">
            <h2 className="text-gray-200 text-2xl">
              ${property.price} <span className="text-xs text-gray-400">/night</span>
            </h2>

            <p className="flex items-center gap-2 text-lg">
              <FaStar className="text-amber-500" /> {property.rating}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Modal;
