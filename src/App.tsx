import Navbar from './features/ui/Navbar/largeScreens/Navbar';
import MobileNav from './features/ui/Navbar/mobile/MobileNav';
import HomePage from './pages/HomePage';
import PropertyListing from './pages/PropertyListing';

const App = () => {
  return (
    <main className="">
      <HomePage />
      <PropertyListing />
      <div className="z-10 sticky bottom-5 flex justify-center items-center  ">
        <Navbar />
        <MobileNav />
      </div>
    </main>
  );
};
export default App;
