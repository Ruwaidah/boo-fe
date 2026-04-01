import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { mockPets } from "../data/mockPets";
import PetCard from "../components/pets/PetCard";

const PetsPage = () => {
  const [searchParams] = useSearchParams();
  const typeParam = searchParams.get("type") || "";

  const [filters, setFilters] = useState({
    search: "",
    type: typeParam,
    age: "",
    gender: "",
    size: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const clearFilters = () => {
    setFilters({
      search: "",
      type: "",
      age: "",
      gender: "",
      size: "",
    });
  };

  const filteredPets = useMemo(() => {
    return mockPets.filter((pet) => {
      const matchesSearch =
        pet.name.toLowerCase().includes(filters.search.toLowerCase()) ||
        pet.breed.toLowerCase().includes(filters.search.toLowerCase());

      const matchesType =
        !filters.type ||
        pet.type.toLowerCase() === filters.type.toLowerCase();

      const matchesAge =
        !filters.age ||
        pet.age.toLowerCase() === filters.age.toLowerCase();

      const matchesGender =
        !filters.gender ||
        pet.gender.toLowerCase() === filters.gender.toLowerCase();

      const matchesSize =
        !filters.size ||
        pet.size.toLowerCase() === filters.size.toLowerCase();

      return (
        matchesSearch &&
        matchesType &&
        matchesAge &&
        matchesGender &&
        matchesSize
      );
    });
  }, [filters]);

  return (
    <section className="mx-auto max-w-7xl px-6 py-14">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900">Browse Pets</h1>
        <p className="mt-2 text-gray-600">
          Find the right companion by searching and filtering pets.
        </p>
      </div>

      <div className="mb-8 rounded-3xl bg-white p-5 shadow-md ring-1 ring-gray-100">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-5">
          <input
            type="text"
            name="search"
            value={filters.search}
            onChange={handleChange}
            placeholder="Search by name or breed"
            className="rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-pink-400"
          />

          <select
            name="type"
            value={filters.type}
            onChange={handleChange}
            className="rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-pink-400"
          >
            <option value="">All Types</option>
            <option value="Dog">Dogs</option>
            <option value="Cat">Cats</option>
          </select>

          <select
            name="age"
            value={filters.age}
            onChange={handleChange}
            className="rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-pink-400"
          >
            <option value="">All Ages</option>
            <option value="Puppy">Puppy</option>
            <option value="Kitten">Kitten</option>
            <option value="Young">Young</option>
            <option value="Adult">Adult</option>
            <option value="Senior">Senior</option>
          </select>

          <select
            name="gender"
            value={filters.gender}
            onChange={handleChange}
            className="rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-pink-400"
          >
            <option value="">All Genders</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>

          <select
            name="size"
            value={filters.size}
            onChange={handleChange}
            className="rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-pink-400"
          >
            <option value="">All Sizes</option>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-3">
          <button
            onClick={clearFilters}
            className="rounded-xl border border-gray-200 bg-white px-5 py-2.5 font-medium text-gray-700 transition hover:bg-gray-50"
          >
            Clear Filters
          </button>

          <span className="rounded-full bg-pink-100 px-4 py-2 text-sm font-medium text-pink-600">
            {filteredPets.length} pets found
          </span>
        </div>
      </div>

      {filteredPets.length === 0 ? (
        <div className="rounded-3xl border border-dashed border-gray-300 bg-white p-10 text-center">
          <h2 className="text-2xl font-bold text-gray-900">No pets found</h2>
          <p className="mt-2 text-gray-600">
            Try changing your filters to see more pets.
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