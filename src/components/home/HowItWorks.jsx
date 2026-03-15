const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: "Browse pets",
      text: "Explore available pets and find the perfect match for your lifestyle.",
    },
    {
      id: 2,
      title: "View details",
      text: "Learn about age, breed, personality, and important care information.",
    },
    {
      id: 3,
      title: "Adopt with confidence",
      text: "Connect with shelters and take the next step toward adoption.",
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 py-14">
      <h2 className="mb-8 text-3xl font-bold text-gray-900">How BOO works</h2>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {steps.map((step) => (
          <div
            key={step.id}
            className="rounded-3xl border border-gray-100 bg-white p-7 shadow-md"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-orange-400 font-bold text-white">
              {step.id}
            </div>
            <h3 className="mt-4 text-xl font-bold text-gray-900">
              {step.title}
            </h3>
            <p className="mt-2 leading-7 text-gray-600">{step.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;