export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      

    <section
  id="home"
  className="relative flex items-center justify-center text-center w-full"
>
  {/* Background Image */}
  <img
    src="/image1.jpeg"
    alt="Home background"
    className="w-full h-96 object-cover"
  />

  {/* Overlay (optional for darkening image) */}
  <div className="absolute inset-0 bg-black/40"></div>

  {/* Text Content */}
  <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4">
    <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome Home</h1>
    <p className="text-lg md:text-xl max-w-2xl mx-auto">
      Your one-stop platform for surveys and feedback collection.
    </p>
  </div>
</section>

<section id="services" className="py-16 bg-white">
  <div className="max-w-6xl mx-auto px-6">
    <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
      Our Services
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {/* Service Item */}
      <div className="text-left">
        <h3 className="text-blue-600 font-semibold text-xl mb-2">
          Consultancy
        </h3>
        <p className="text-gray-600">
          Reliable and dependable consultancy on all matters of surveying and land subdivision.
        </p>
      </div>

      <div className="text-left">
        <h3 className="text-blue-600 font-semibold text-xl mb-2">
          Land Surveying
        </h3>
        <p className="text-gray-600">
          Our team is highly experienced in all types of surveys and offers expertise you can trust.
        </p>
      </div>

      <div className="text-left">
        <h3 className="text-blue-600 font-semibold text-xl mb-2">
          Equipment Leasing
        </h3>
        <p className="text-gray-600">
          Access the latest surveying technology and lease equipment with ease.
        </p>
      </div>

      <div className="text-left">
        <h3 className="text-blue-600 font-semibold text-xl mb-2">
          Training Programs
        </h3>
        <p className="text-gray-600">
          Professional training for upcoming surveyors and land experts, tailored to community needs.
        </p>
      </div>

      <div className="text-left">
        <h3 className="text-blue-600 font-semibold text-xl mb-2">
          Expert Witness in Court
        </h3>
        <p className="text-gray-600">
          Skilled in providing clear, professional surveyor submissions for land-related cases.
        </p>
      </div>

      <div className="text-left">
        <h3 className="text-blue-600 font-semibold text-xl mb-2">
          Engineering Design
        </h3>
        <p className="text-gray-600">
          Offering survey-based designs, route maps, and topographical maps customized for your needs.
        </p>
      </div>
    </div>
  </div>
</section>


      <section
        id="about"
        style={{
          padding: "60px 0",
          textAlign: "center",
          background: "#f5f5f5",
        }}
      >
        <h2 className="text-2xl font-semibold mb-4">About Us</h2>
        <p>
          We are dedicated to making survey creation and analysis simple and
          effective for everyone.
        </p>
      </section>
    </div>
  );
}



