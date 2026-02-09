export default function About() {
  return (
    <section className="py-20 bg-white px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        <img
          src="/therapist.jpg"
          alt="Therapist"
          className="rounded-2xl shadow-lg"
        />

        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Meet Your Therapist
          </h2>
          <p className="text-gray-600 mb-4">
            I’m a licensed therapist dedicated to helping individuals overcome anxiety,
            stress, and emotional challenges through compassionate care.
          </p>
          <p className="text-gray-600">
            My approach focuses on creating a safe, supportive space where healing and
            personal growth can thrive.
          </p>
        </div>

      </div>
    </section>
  );
}
