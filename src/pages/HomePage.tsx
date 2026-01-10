import felix from '../assets/Background_Images/largeScreens/pexels-serra-nur-kaynak-2156630399-34303478.jpg';

const HomePage = () => {
  return (
    <main
      className={`w-full bg-cover items-center justify-center md:justify-start h-dvh flex pl-5 md:pl-30`}
      style={{ backgroundImage: `url(${felix})` }}
    >
      <div className=" w-full md:w-190  text-gray-950  ">
        <h2
          className=" leading-13 md:leading-29 md:text-8xl md:wrap-break-word 
   text-5xl  font-bold "
        >
          Peace, nature, dream
        </h2>
        <p className="md:text-2xl text-lg leading-15 md:leading-20 text-shadow-black text-shadow-2xs">Find and book a great experience</p>
      </div>
    </main>
  );
};
export default HomePage;
