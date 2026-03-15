import kitten from "../assets/images/kitten.jpg";
import dog from "../assets/images/dog.jpg";
import puppies from "../assets/images/puppies.jpg";
import playCat from "../assets/images/play-cat.jpg";
import ragdoll from "../assets/images/ragdoll.jpg";
import whiteDog from "../assets/images/white-dog.jpg";

import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const goToPets = () => {
    navigate("/pets");
  };

  const goToCats = () => {
    navigate("/pets?type=cat");
  };

  const goToDogs = () => {
    navigate("/pets?type=dog");
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-orange-50 text-gray-800">
        <section className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-14 lg:grid-cols-2">
          <div>
            <span className="inline-block rounded-full border border-pink-200 bg-pink-100 px-4 py-2 text-sm font-semibold text-pink-600">
              Find your new best friend
            </span>

            <h1 className="mt-5 text-4xl font-extrabold leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Adopt happiness, one paw at a time
            </h1>

            <p className="mt-5 max-w-xl text-base leading-8 text-gray-600 sm:text-lg">
              BOO helps you discover lovable pets looking for a safe and happy
              home. Browse dogs, cats, and more with a clean, modern adoption
              experience built for real people.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button
                onClick={goToPets}
                className="rounded-xl bg-gradient-to-r from-pink-500 to-orange-400 px-6 py-3 font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
              >
                Find a Pet
              </button>

              <button
                onClick={() => navigate("/about")}
                className="rounded-xl border border-gray-200 bg-white px-6 py-3 font-semibold text-gray-800 shadow-sm transition hover:-translate-y-0.5 hover:bg-gray-50"
              >
                Learn More
              </button>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <div className="rounded-2xl border border-white/70 bg-white/80 px-5 py-4 shadow-md backdrop-blur">
                <h3 className="text-2xl font-bold text-gray-900">500+</h3>
                <p className="text-sm text-gray-500">Pets listed</p>
              </div>

              <div className="rounded-2xl border border-white/70 bg-white/80 px-5 py-4 shadow-md backdrop-blur">
                <h3 className="text-2xl font-bold text-gray-900">120+</h3>
                <p className="text-sm text-gray-500">Happy adoptions</p>
              </div>

              <div className="rounded-2xl border border-white/70 bg-white/80 px-5 py-4 shadow-md backdrop-blur">
                <h3 className="text-2xl font-bold text-gray-900">24/7</h3>
                <p className="text-sm text-gray-500">Pet discovery</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="overflow-hidden rounded-3xl shadow-xl">
              <img
                src={ragdoll}
                alt="Ragdoll cat"
                className="h-80 w-full object-cover transition duration-300 hover:scale-105"
              />
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="overflow-hidden rounded-3xl shadow-lg">
                <img
                  src={dog}
                  alt="Dog"
                  className="h-44 w-full object-cover transition duration-300 hover:scale-105"
                />
              </div>

              <div className="overflow-hidden rounded-3xl shadow-lg">
                <img
                  src={kitten}
                  alt="Kitten"
                  className="h-44 w-full object-cover transition duration-300 hover:scale-105"
                />
              </div>

              <div className="overflow-hidden rounded-3xl shadow-lg">
                <img
                  src={whiteDog}
                  alt="White dog"
                  className="h-44 w-full object-cover transition duration-300 hover:scale-105"
                />
              </div>

              <div className="overflow-hidden rounded-3xl shadow-lg">
                <img
                  src={playCat}
                  alt="Playful cat"
                  className="h-44 w-full object-cover transition duration-300 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-10">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Start your search</h2>
            <p className="mt-2 text-gray-600">
              Choose the type of companion you’re looking for.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div
              onClick={goToDogs}
              className="group relative cursor-pointer overflow-hidden rounded-3xl shadow-xl"
            >
              <img
                src={puppies}
                alt="Puppies"
                className="h-80 w-full object-cover transition duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 p-6 text-white">
                <h3 className="text-3xl font-bold">Dogs</h3>
                <p className="mt-1 text-sm text-white/90">Explore playful pups</p>
              </div>
            </div>

            <div
              onClick={goToCats}
              className="group relative cursor-pointer overflow-hidden rounded-3xl shadow-xl"
            >
              <img
                src={kitten}
                alt="Cats"
                className="h-80 w-full object-cover transition duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 p-6 text-white">
                <h3 className="text-3xl font-bold">Cats</h3>
                <p className="mt-1 text-sm text-white/90">Meet cuddly companions</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-14">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900">How BOO works</h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-gray-100 bg-white p-7 shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-orange-400 font-bold text-white">
                1
              </div>
              <h3 className="mt-4 text-xl font-bold text-gray-900">Browse pets</h3>
              <p className="mt-2 leading-7 text-gray-600">
                Explore available animals and find the perfect match for your
                lifestyle.
              </p>
            </div>

            <div className="rounded-3xl border border-gray-100 bg-white p-7 shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-orange-400 font-bold text-white">
                2
              </div>
              <h3 className="mt-4 text-xl font-bold text-gray-900">View details</h3>
              <p className="mt-2 leading-7 text-gray-600">
                Learn about breed, age, personality, and everything you need to
                know before adopting.
              </p>
            </div>

            <div className="rounded-3xl border border-gray-100 bg-white p-7 shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-orange-400 font-bold text-white">
                3
              </div>
              <h3 className="mt-4 text-xl font-bold text-gray-900">
                Adopt with confidence
              </h3>
              <p className="mt-2 leading-7 text-gray-600">
                Connect with shelters and take the next step toward giving a pet
                a loving home.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-16">
          <div className="rounded-[2rem] bg-gray-900 px-8 py-14 text-center text-white shadow-2xl">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Ready to meet your new companion?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl leading-8 text-gray-300">
              Start exploring pets and discover a friend that fits your home,
              your lifestyle, and your heart.
            </p>
            <button
              onClick={goToPets}
              className="mt-8 rounded-xl bg-gradient-to-r from-pink-500 to-orange-400 px-6 py-3 font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
            >
              Explore Pets
            </button>
          </div>
        </section>
      </div>

    </>
  );
};

export default HomePage;