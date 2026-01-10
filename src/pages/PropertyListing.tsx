import { useSelector } from 'react-redux';
import PropertyCard from '../components/PropertyCard';
import { useGetPropertiesQuery } from '../service/Property';
import type { RootState } from '../app/store';
import Modal from '../features/ui/modal/Modal';

const PropertyListing = () => {
  const { data, error, isLoading } = useGetPropertiesQuery();
  const { isOpen, selectedProperty } = useSelector((state: RootState) => state.propertyModal);

  // filters
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

        /* 1️⃣ Superhost filter */
        if (superHost && !property.superhost) {
          return null;
        }

        /* 2️⃣ Capacity filters */
        const capacityFilterActive = oneToTwoPeople || threeToFourPeople || fivePlusPeople;

        if (capacityFilterActive) {
          let matchesCapacity = false;

          if (oneToTwoPeople && people >= 1 && people <= 2) {
            matchesCapacity = true;
          }

          if (threeToFourPeople && people >= 3 && people <= 4) {
            matchesCapacity = true;
          }

          if (fivePlusPeople && people >= 5) {
            matchesCapacity = true;
          }

          if (!matchesCapacity) {
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
