import { useGetPropertiesQuery } from '../service/Property';

const PropertyListing = () => {
  const { data, error, isLoading } = useGetPropertiesQuery();

  return <div className="h-dvh w-full bg-gray-950">PropertyListing</div>;
};
export default PropertyListing;
