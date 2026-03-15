import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { mockPets } from "../data/mockPets";
import PetCard from "../components/pets/PetCard";

const PetsPage = () => {
  const [searchParams] = useSearchParams();
  const type = searchParams.get("type");

  const filteredPets = useMemo(() => {
    if (!type) return mockPets;

    return mockPets.filter(
      (pet) => pet.type.toLowerCase() === type.toLowerCase()
    );
  }, [type]);

  return (
    <section className="mx-auto max-w-7xl px-6 py-14">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900">
          {type ? `${type.charAt(0).toUpperCase() + type.slice(1)}s` : "Browse Pets"}
        </h1>
        <p className="mt-2 text-gray-600">
          Discover pets looking for a loving home.
        </p>
      </div>

      <div className="mb-8 flex flex-wrap gap-3">
        <span className="rounded-full bg-pink-100 px-4 py-2 text-sm font-medium text-pink-600">
          {filteredPets.length} pets found
        </span>
        {type && (
          <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-medium text-orange-600">
            Filter: {type}
          </span>
        )}
      </div>

      {filteredPets.length === 0 ? (
        <div className="rounded-3xl border border-dashed border-gray-300 bg-white p-10 text-center">
          <h2 className="text-2xl font-bold text-gray-900">No pets found</h2>
          <p className="mt-2 text-gray-600">
            Try another category or remove the filter.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {filteredPets.map((pet) => (
            <PetCard key={pet.id} pet={pet} />
          ))}
        </div>
      )}
    </section>
  );
};

export default PetsPage;