import { useNavigate } from "react-router-dom";
import puppies from "../../assets/images/puppies.jpg";
import kitten from "../../assets/images/kitten.jpg";

const QuickSearch = () => {
  const navigate = useNavigate();

  return (
    <section className="mx-auto max-w-7xl px-6 py-10">
      <h2 className="text-3xl font-bold text-gray-900">Start your search</h2>
      <p className="mt-2 text-gray-600">
        Choose the type of companion you’re looking for.
      </p>

      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
        <div
          onClick={() => navigate("/pets?type=dog")}
          className="group relative cursor-pointer overflow-hidden rounded-3xl shadow-xl"
        >
          <img
            src={puppies}
            alt="Dogs"
            className="h-80 w-full object-cover transition duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          <div className="absolute bottom-0 p-6 text-white">
            <h3 className="text-3xl font-bold">Dogs</h3>
            <p className="mt-1 text-sm text-white/90">Explore playful pups</p>
          </div>
        </div>

        <div
          onClick={() => navigate("/pets?type=cat")}
          className="group relative cursor-pointer overflow-hidden rounded-3xl shadow-xl"
        >
          <img
            src={kitten}
            alt="Cats"
            className="h-80 w-full object-cover transition duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          <div className="absolute bottom-0 p-6 text-white">
            <h3 className="text-3xl font-bold">Cats</h3>
            <p className="mt-1 text-sm text-white/90">Meet cuddly companions</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickSearch;