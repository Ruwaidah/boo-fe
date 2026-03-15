import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { mockPets } from "../data/mockPets";
import { toggleFavorite } from "../features/favorites/favoritesSlice";

const PetDetailsPage = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const favoriteIds = useSelector((state) => state.favorites.items);

    const pet = mockPets.find((item) => item.id === id);

    if (!pet) {
        return (
            <section className="mx-auto max-w-7xl px-6 py-16">
                <div className="rounded-3xl border border-dashed border-gray-300 bg-white p-10 text-center shadow-sm">
                    <h1 className="text-3xl font-bold text-gray-900">Pet not found</h1>
                    <p className="mt-3 text-gray-600">
                        The pet you are looking for does not exist or may have been removed.
                    </p>
                    <Link
                        to="/pets"
                        className="mt-6 inline-block rounded-xl bg-gray-900 px-5 py-3 font-semibold text-white transition hover:bg-gray-800"
                    >
                        Back to Pets
                    </Link>
                </div>
            </section>
        );
    }

    const isFavorite = favoriteIds.includes(pet.id);

    return (
        <section className="mx-auto max-w-7xl px-6 py-14">
            <div className="mb-8">
                <Link
                    to="/pets"
                    className="inline-flex items-center rounded-full bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm ring-1 ring-gray-200 transition hover:bg-gray-50"
                >
                    ← Back to Pets
                </Link>
            </div>

            <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
                <div className="overflow-hidden rounded-[2rem] bg-white shadow-xl">
                    <img
                        src={pet.image}
                        alt={pet.name}
                        className="h-[420px] w-full object-cover sm:h-[520px]"
                    />
                </div>

                <div>
                    <div className="flex flex-wrap items-center gap-3">
                        <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600">
                            {pet.type}
                        </span>

                        {pet.featured && (
                            <span className="rounded-full bg-pink-100 px-4 py-2 text-sm font-semibold text-pink-600">
                                Featured
                            </span>
                        )}
                    </div>

                    <h1 className="mt-5 text-4xl font-extrabold text-gray-900 sm:text-5xl">
                        {pet.name}
                    </h1>

                    <p className="mt-3 text-lg text-gray-600">
                        {pet.breed} • {pet.location}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-3">
                        <span className="rounded-full bg-white px-4 py-2 text-sm text-gray-700 shadow-sm ring-1 ring-gray-200">
                            {pet.age}
                        </span>
                        <span className="rounded-full bg-white px-4 py-2 text-sm text-gray-700 shadow-sm ring-1 ring-gray-200">
                            {pet.gender}
                        </span>
                        <span className="rounded-full bg-white px-4 py-2 text-sm text-gray-700 shadow-sm ring-1 ring-gray-200">
                            {pet.size}
                        </span>
                        <span className="rounded-full bg-white px-4 py-2 text-sm text-gray-700 shadow-sm ring-1 ring-gray-200">
                            {pet.color}
                        </span>
                    </div>

                    <div className="mt-8 rounded-3xl bg-white p-6 shadow-md ring-1 ring-gray-100">
                        <h2 className="text-xl font-bold text-gray-900">About {pet.name}</h2>
                        <p className="mt-4 leading-8 text-gray-600">{pet.description}</p>
                    </div>

                    <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div className="rounded-3xl bg-white p-5 shadow-md ring-1 ring-gray-100">
                            <h3 className="text-lg font-bold text-gray-900">Health & Care</h3>
                            <ul className="mt-4 space-y-3 text-sm text-gray-600">
                                <li>
                                    Vaccinated:{" "}
                                    <span className="font-semibold text-gray-900">
                                        {pet.vaccinated ? "Yes" : "No"}
                                    </span>
                                </li>
                                <li>
                                    House Trained:{" "}
                                    <span className="font-semibold text-gray-900">
                                        {pet.houseTrained ? "Yes" : "No"}
                                    </span>
                                </li>
                            </ul>
                        </div>

                        <div className="rounded-3xl bg-white p-5 shadow-md ring-1 ring-gray-100">
                            <h3 className="text-lg font-bold text-gray-900">Compatibility</h3>
                            <ul className="mt-4 space-y-3 text-sm text-gray-600">
                                <li>
                                    Good with kids:{" "}
                                    <span className="font-semibold text-gray-900">
                                        {pet.goodWithKids ? "Yes" : "No"}
                                    </span>
                                </li>
                                <li>
                                    Good with dogs:{" "}
                                    <span className="font-semibold text-gray-900">
                                        {pet.goodWithDogs ? "Yes" : "No"}
                                    </span>
                                </li>
                                <li>
                                    Good with cats:{" "}
                                    <span className="font-semibold text-gray-900">
                                        {pet.goodWithCats ? "Yes" : "No"}
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="mt-8 flex flex-wrap gap-4">
                        <button className="rounded-xl bg-gradient-to-r from-pink-500 to-orange-400 px-6 py-3 font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl">
                            Adopt {pet.name}
                        </button>

                        <button
                            onClick={() => dispatch(toggleFavorite(pet.id))}
                            className={`rounded-xl px-6 py-3 font-semibold shadow-sm transition ${isFavorite
                                    ? "bg-pink-100 text-pink-600 ring-1 ring-pink-200 hover:bg-pink-200"
                                    : "border border-gray-200 bg-white text-gray-800 hover:bg-gray-50"
                                }`}
                        >
                            {isFavorite ? "Saved to Favorites" : "Save to Favorites"}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PetDetailsPage;