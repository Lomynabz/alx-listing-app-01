import { PROPERTYLISTINGSAMPLE } from "@/constants";
import { useRouter } from "next/router";
import PropertyDetail from "@/components/property/PropertyDetail";

export default function PropertyPage() {
  const router = useRouter();
  const { id } = router.query;
  const property = PROPERTYLISTINGSAMPLE.find((item) => item.id === id);

  if (!property) return <p className="text-center text-red-500 mt-10">Property not found</p>;

  return (
    <div className="bg-gray-100 min-h-screen">
      <PropertyDetail property={property} />
    </div>
  );
}