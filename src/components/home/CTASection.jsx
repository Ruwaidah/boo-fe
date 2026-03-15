import { useNavigate } from "react-router-dom";

const CTASection = () => {
  const navigate = useNavigate();

  return (
    <section className="mx-auto max-w-7xl px-6 pb-16">
      <div className="rounded-[2rem] bg-gray-900 px-8 py-14 text-center text-white shadow-2xl">
        <h2 className="text-3xl font-bold sm:text-4xl">
          Ready to meet your new companion?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl leading-8 text-gray-300">
          Start exploring pets and discover a friend that fits your home and
          your heart.
        </p>
        <button
          onClick={() => navigate("/pets")}
          className="mt-8 rounded-xl bg-gradient-to-r from-pink-500 to-orange-400 px-6 py-3 font-semibold text-white shadow-lg transition hover:-translate-y-0.5"
        >
          Explore Pets
        </button>
      </div>
    </section>
  );
};

export default CTASection;