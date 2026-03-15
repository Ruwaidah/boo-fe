import { useNavigate } from "react-router-dom";
import ragdoll from "../../assets/images/ragdoll.jpg";
import dog from "../../assets/images/dog.jpg";
import kitten from "../../assets/images/kitten.jpg";
import whiteDog from "../../assets/images/white-dog.jpg";
import playCat from "../../assets/images/play-cat.jpg";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-14 lg:grid-cols-2">
      <div>
        <span className="inline-block rounded-full border border-pink-200 bg-pink-100 px-4 py-2 text-sm font-semibold text-pink-600">
          Find your new best friend
        </span>

        <h1 className="mt-5 text-4xl font-extrabold leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
          Adopt happiness, one paw at a time
        </h1>

        <p className="mt-5 max-w-xl text-base leading-8 text-gray-600 sm:text-lg">
          Discover lovable pets looking for a safe and happy home through a
          clean, modern adoption experience.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <button
            onClick={() => navigate("/pets")}
            className="rounded-xl bg-gradient-to-r from-pink-500 to-orange-400 px-6 py-3 font-semibold text-white shadow-lg transition hover:-translate-y-0.5"
          >
            Find a Pet
          </button>

          <button
            onClick={() => navigate("/about")}
            className="rounded-xl border border-gray-200 bg-white px-6 py-3 font-semibold text-gray-800 shadow-sm transition hover:bg-gray-50"
          >
            Learn More
          </button>
        </div>
      </div>

      <div className="space-y-4">
        <div className="overflow-hidden rounded-3xl shadow-xl">
          <img
            src={ragdoll}
            alt="Ragdoll cat"
            className="h-80 w-full object-cover"
          />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {[dog, kitten, whiteDog, playCat].map((img, index) => (
            <div key={index} className="overflow-hidden rounded-3xl shadow-lg">
              <img src={img} alt="Pet" className="h-44 w-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;