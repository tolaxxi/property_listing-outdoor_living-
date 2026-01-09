import { useDispatch, useSelector } from 'react-redux';
import PropertyCard from '../components/PropertyCard';
import { useGetPropertiesQuery } from '../service/Property';
import type { RootState } from '../app/store';
import Modal from '../features/ui/modal/Modal';

const PropertyListing = () => {
  const { data, error, isLoading } = useGetPropertiesQuery();
  const { isOpen, selectedProperty } = useSelector((state: RootState) => state.propertyModal);
  const superHost = useSelector((state: RootState) => state.superHost.isChecked);
  const oneToTwoPeople = useSelector((state: RootState) => state.propertyType.oneToTwoPeople);
  const threeToFourPeople = useSelector((state: RootState) => state.propertyType.threeToFourPeople);
  const fivePlusPeople = useSelector((state: RootState) => state.propertyType.fivePlusPeople);

  if (isLoading) return <p>Loading...</p>;
  if (error || !data) return <p>Error</p>;

  return (
    <section className="w-full flex gap-10 flex-wrap items-center  justify-center md:py-30 p-10">
      {data.map((property) => {
        const people = property.capacity?.people;
        //  super host  filter

        if (superHost && !property.superhost) {
          return null;
        }

        // 1-2 people filter
        if ((oneToTwoPeople && people <= 1) || people <= 2) {
          return <PropertyCard property={property} key={property.id} />;
        }

        // 3-4 people filter
        if ((threeToFourPeople && people > 2) || people >= 4) {
          return null;
        }

        // 5 plus people filter
        if (fivePlusPeople && people > 5) {
          return null;
        }
        {
          return null;
        }
        // passed all active filters
        return <PropertyCard property={property} key={property.id} />;
      })}

      {isOpen && selectedProperty && <Modal property={selectedProperty} />}
    </section>
  );
};
export default PropertyListing;
