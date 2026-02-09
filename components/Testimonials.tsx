export default function Testimonials() {
  return (
    <section className="py-20 bg-white px-6">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          What Clients Say
        </h2>
        <p className="text-gray-600 mt-2">
          Real stories of growth and healing.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        <div className="bg-blue-50 p-6 rounded-2xl shadow-md">
          <p className="text-gray-700 mb-4">
            “Therapy here changed my life. I feel more confident and in control.”
          </p>
          <h4 className="font-semibold text-gray-800">— Sarah M.</h4>
        </div>

        <div className="bg-blue-50 p-6 rounded-2xl shadow-md">
          <p className="text-gray-700 mb-4">
            “I learned to manage anxiety and communicate better.”
          </p>
          <h4 className="font-semibold text-gray-800">— Daniel K.</h4>
        </div>

        <div className="bg-blue-50 p-6 rounded-2xl shadow-md">
          <p className="text-gray-700 mb-4">
            “The sessions helped me grow emotionally.”
          </p>
          <h4 className="font-semibold text-gray-800">— Priya R.</h4>
        </div>
      </div>
    </section>
  );
}
