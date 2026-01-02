import PropertyCard from '../components/PropertyCard';
import { useGetPropertiesQuery } from '../service/Property';

const PropertyListing = () => {
  const { data, error, isLoading } = useGetPropertiesQuery();

  if (isLoading) return <p>Loading...</p>;
  if (error || !data) return <p>Error</p>;

  return (
    <section className="w-full flex gap-10 flex-wrap items-center  justify-center md:py-30 p-10 bg-gray-950 ">
      {data.map((property) => {
        return <PropertyCard property={property} key={property.id} />;
      })}
    </section>
  );
};
export default PropertyListing;
