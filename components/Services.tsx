import React from "react";
export default function Services() {
  return (
    <section className="py-20 bg-blue-50 px-6">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Services Offered
        </h2>
        <p className="text-gray-600 mt-2">
          Personalized support for emotional well-being and growth.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h3 className="text-xl font-semibold mb-2">Anxiety Therapy</h3>
          <p className="text-gray-600">
            Techniques to manage stress, panic, and overwhelming thoughts.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h3 className="text-xl font-semibold mb-2">Relationship Counseling</h3>
          <p className="text-gray-600">
            Improve communication and strengthen emotional connections.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h3 className="text-xl font-semibold mb-2">Personal Growth</h3>
          <p className="text-gray-600">
            Build confidence, clarity, and a healthier mindset.
          </p>
        </div>
      </div>
    </section>
  );
}
