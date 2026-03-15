import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { mockPets } from "../data/mockPets";
import PetCard from "../components/pets/PetCard";

const FavoritesPage = () => {
  const favoriteIds = useSelector((state) => state.favorites.items);

  const favoritePets = mockPets.filter((pet) => favoriteIds.includes(pet.id));

  return (
    <section className="mx-auto max-w-7xl px-6 py-14">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900">Favorites</h1>
        <p className="mt-2 text-gray-600">Your saved pets all in one place.</p>
      </div>

      {favoritePets.length === 0 ? (
        <div className="rounded-3xl border border-dashed border-gray-300 bg-white p-10 text-center">
          <h2 className="text-2xl font-bold text-gray-900">
            No favorite pets yet
          </h2>
          <p className="mt-2 text-gray-600">
            Start browsing pets and save the ones you love.
          </p>
          <Link
            to="/pets"
            className="mt-6 inline-block rounded-xl bg-gray-900 px-5 py-3 font-semibold text-white transition hover:bg-gray-800"
          >
            Browse Pets
          </Link>
        </div>
      ) : (
        <>
          <div className="mb-8">
            <span className="rounded-full bg-pink-100 px-4 py-2 text-sm font-medium text-pink-600">
              {favoritePets.length} saved {favoritePets.length === 1 ? "pet" : "pets"}
            </span>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {favoritePets.map((pet) => (
              <PetCard key={pet.id} pet={pet} />
            ))}
          </div>
        </>
      )}
    </section>
  );
};

export default FavoritesPage;