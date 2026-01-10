import lgScreenImg from '../assets/Background_Images/largeScreens/pexels-lkloeppel-577697.jpg';
import smScreenImg from '../assets/Background_Images/smallScreens/pexels-mlkbnl-28001434.jpg';

const HomePage = () => {
  return (
    <main
      className={`w-full bg-cover items-center justify-center md:justify-start h-dvh flex pl-5 md:pl-30`}
      // style={{ backgroundImage: `url(${lgScreenImg})` }}
    >
      {/* Desktop */}
      <div
        className="absolute inset-0 hidden md:block bg-cover bg-center"
        style={{ backgroundImage: `url(${lgScreenImg})` }}
      />

      {/* Mobile */}
      <div
        className="absolute inset-0 block md:hidden bg-cover bg-center"
        style={{ backgroundImage: `url(${smScreenImg})` }}
      />
      <div className=" w-full md:w-190  text-gray-950 z-20 ">
        <h2
          className=" leading-13 md:leading-29 md:text-8xl md:wrap-break-word 
   text-5xl  font-bold "
        >
          Peace, nature, dream
        </h2>
        <p className="md:text-2xl text-lg leading-15 md:leading-20 text-shadow-black text-shadow-2xs">
          Find and book a great experience
        </p>
      </div>
    </main>
  );
};
export default HomePage;
