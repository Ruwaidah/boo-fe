import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../../features/favorites/favoritesSlice";

const PetCard = ({ pet }) => {
  const dispatch = useDispatch();
  const favoriteIds = useSelector((state) => state.favorites.items);

  const isFavorite = favoriteIds.includes(pet.id);

  return (
    <div className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl">
      <div className="relative">
        <img
          src={pet.image}
          alt={pet.name}
          className="h-64 w-full object-cover"
        />

        {pet.featured && (
          <span className="absolute left-4 top-4 rounded-full bg-pink-500 px-3 py-1 text-xs font-semibold text-white">
            Featured
          </span>
        )}

        <button
          onClick={() => dispatch(toggleFavorite(pet.id))}
          className={`absolute right-4 top-4 rounded-full px-3 py-2 text-xs font-semibold shadow-md transition ${
            isFavorite
              ? "bg-pink-500 text-white"
              : "bg-white/90 text-gray-700 hover:bg-white"
          }`}
        >
          {isFavorite ? "♥" : "♡"}
        </button>
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-xl font-bold text-gray-900">{pet.name}</h3>
            <p className="text-sm text-gray-500">
              {pet.breed} • {pet.location}
            </p>
          </div>
          <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-600">
            {pet.type}
          </span>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          <span className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-600">
            {pet.age}
          </span>
          <span className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-600">
            {pet.gender}
          </span>
          <span className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-600">
            {pet.size}
          </span>
        </div>

        <p className="mt-4 line-clamp-3 text-sm leading-6 text-gray-600">
          {pet.description}
        </p>

        <Link
          to={`/pets/${pet.id}`}
          className="mt-5 inline-block rounded-xl bg-gray-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-gray-800"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default PetCard;