import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <section className="flex min-h-[80vh] items-center justify-center px-6 py-16">
      <div className="max-w-xl text-center">
        <span className="inline-block rounded-full bg-pink-100 px-4 py-2 text-sm font-semibold text-pink-600">
          404 Error
        </span>

        <h1 className="mt-6 text-5xl font-extrabold text-gray-900 sm:text-6xl">
          Page not found
        </h1>

        <p className="mt-4 text-base leading-8 text-gray-600 sm:text-lg">
          Sorry, the page you’re looking for doesn’t exist or may have been
          moved.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/"
            className="rounded-xl bg-gradient-to-r from-pink-500 to-orange-400 px-6 py-3 font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
          >
            Go Home
          </Link>

          <Link
            to="/pets"
            className="rounded-xl border border-gray-200 bg-white px-6 py-3 font-semibold text-gray-800 shadow-sm transition hover:bg-gray-50"
          >
            Browse Pets
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFoundPage;