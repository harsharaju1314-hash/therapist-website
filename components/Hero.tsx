export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center bg-blue-50 px-6">
      <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
        Find Balance. Heal. Grow.
      </h1>

      <p className="text-gray-600 max-w-xl mb-6">
        Professional therapy services to help you navigate life’s challenges with confidence.
      </p>

      <button className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow-lg hover:bg-blue-700 transition">
        Book a Session
      </button>
    </section>
  );
}
