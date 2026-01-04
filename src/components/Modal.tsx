import { FaStar } from 'react-icons/fa6';
import image from '../../src/assets/Background_Images/pexels-eberhardgross-3389531.jpg';
import { GoHome } from 'react-icons/go';
import { IoPersonSharp } from 'react-icons/io5';
import { IoMdClose } from 'react-icons/io';
const Modal = () => {
  return (
    <section className="fixed w-full inset-0 h-dvh flex items-center z-50 justify-center">
      {/* modal backdrop */}
      <div className=" absolute bg-gray-900 inset-0 opacity-70"></div>
      {/* modal content */}
      <div
        className=" border-gray-700 border bg-gray-950 text-gray-400 md:w-[45%] relative rounded-2xl flex flex-col overflow-hidden w-[90%] 
     max-h-[90vh] 
"
      >
        {/* modal image */}
        <div className=" relative  h-80">
          <button className="absolute top-5 right-5 bg-gray-500 rounded-md p-1 text-gray-950 text-2xl">
            <IoMdClose />
          </button>
          <img src={image} alt="" className="w-full h-full object-cover" />
        </div>

        {/* modal content details */}
        <div className="p-4 gap-5 flex flex-col">
          {/* modal title and desc */}
          <span className="flex flex-col gap-2.5">
            <h2 className="font-medium text-3xl text-gray-200">Cabin With Private Sauna</h2>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure a tempora numquam eos facere doloremque nam
              eum ipsum. Recusandae eveniet neque quos commodi a nesciunt exercitationem aspernatur eaque amet tempore.
            </p>
          </span>

          {/*bedrooms and no. of guests  */}
          <span className="flex gap-5 text-sm items-center">
            <p className="flex gap-2 items-center">
              <GoHome /> 2 bedroom
            </p>
            <p className="flex gap-2 items-center">
              <IoPersonSharp />4 guest
            </p>
          </span>

          <hr />

          {/* price and rating */}
          <div className="flex justify-between items-center">
            <h2 className="text-gray-200 text-2xl">
              $170 <span className="text-xs text-gray-400">/night</span>
            </h2>

            <p className="flex items-center gap-2 text-lg">
              <FaStar className="text-amber-500" /> 4.9
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Modal;
