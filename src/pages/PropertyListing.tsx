import { useDispatch, useSelector } from 'react-redux';
import PropertyCard from '../components/PropertyCard';
import { useGetPropertiesQuery } from '../service/Property';
import type { RootState } from '../app/store';
import Modal from '../features/ui/modal/Modal';

const PropertyListing = () => {
  const { data, error, isLoading } = useGetPropertiesQuery();
  const { isOpen, selectedProperty } = useSelector((state: RootState) => state.propertyModal);

  if (isLoading) return <p>Loading...</p>;
  if (error || !data) return <p>Error</p>;

  return (
    <section className="w-full flex gap-10 flex-wrap items-center  justify-center md:py-30 p-10">
      {data.map((property) => (
        <PropertyCard property={property} key={property.id} />
      ))}

      {isOpen && selectedProperty && <Modal property={selectedProperty} />}
    </section>
  );
};
export default PropertyListing;
