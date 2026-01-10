import { useSelector } from 'react-redux';
import PropertyCard from '../components/PropertyCard';
import { useGetPropertiesQuery } from '../service/Property';
import type { RootState } from '../app/store';
import Modal from '../features/ui/modal/Modal';

const PropertyListing = () => {
  const { data, error, isLoading } = useGetPropertiesQuery();
  const { isOpen, selectedProperty } = useSelector((state: RootState) => state.propertyModal);

  // location filters
  const allStays = useSelector((state: RootState) => state.selectStayLocation.allStays);
  const finland = useSelector((state: RootState) => state.selectStayLocation.finland);
  const norway = useSelector((state: RootState) => state.selectStayLocation.norway);
  const sweden = useSelector((state: RootState) => state.selectStayLocation.sweden);
  const switzerland = useSelector((state: RootState) => state.selectStayLocation.switzerland);

  // guest filters
  const superHost = useSelector((state: RootState) => state.superHost.isChecked);
  const oneToTwoPeople = useSelector((state: RootState) => state.propertyType.oneToTwoPeople);
  const threeToFourPeople = useSelector((state: RootState) => state.propertyType.threeToFourPeople);
  const fivePlusPeople = useSelector((state: RootState) => state.propertyType.fivePlusPeople);

  if (isLoading) return <p>Loading...</p>;
  if (error || !data) return <p>Error</p>;

  return (
    <section className="w-full flex gap-10 flex-wrap items-center  justify-center md:py-30 p-10">
      {data.map((property) => {
        const people = property.capacity?.people ?? 0;
        const location = property.location?.toLowerCase() ?? '';

        /* 1️⃣ Superhost filter */
        if (superHost && !property.superhost) return null;

        /* 2️⃣ Capacity filters */
        const capacityFilterActive = oneToTwoPeople || threeToFourPeople || fivePlusPeople;

        if (capacityFilterActive) {
          let matchesCapacity = false;

          if (oneToTwoPeople && people >= 1 && people <= 2) matchesCapacity = true;
          if (threeToFourPeople && people >= 3 && people <= 4) matchesCapacity = true;
          if (fivePlusPeople && people >= 5) matchesCapacity = true;
          if (!matchesCapacity) return null;
        }
        // location filter
        if (!allStays) {
          if (
            (norway && location !== 'norway') ||
            (finland && location !== 'finland') ||
            (sweden && location !== 'sweden') ||
            (switzerland && location !== 'switzerland')
          ) {
            return null;
          }
        }

        /* 3️⃣ Passed all filters */
        return <PropertyCard property={property} key={property.id} />;
      })}
      {isOpen && selectedProperty && <Modal property={selectedProperty} />}
    </section>
  );
};
export default PropertyListing;
