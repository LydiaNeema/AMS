export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      

    <section
  id="home"
  className="relative flex items-center justify-center text-center w-full"
>
  {/* Background Image */}
  <img
    src="/survey4.jpg"
    alt="Home background"
    className="w-full h-96 object-cover"
  />

  {/* Overlay (optional for darkening image) */}
  <div className="absolute inset-0 bg-black/40"></div>

  {/* Text Content */}
  <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4">
    <h1 className="text-4xl md:text-5xl font-bold mb-4">Shaping Land, Building Trust</h1>
    <p className="text-lg md:text-xl max-w-2xl mx-auto">
      
    </p>
  </div>
</section>

{/* Services Section */}
      <section id="services" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Our Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            
            {/* Consultancy */}
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 font-bold text-lg">
                C
              </div>
              <div>
                <h3 className="text-blue-600 font-semibold text-xl mb-2">Consultancy</h3>
                <p className="text-gray-600">
                  Reliable consultancy on surveying and land subdivision matters.
                </p>
              </div>
            </div>

            {/* Land Surveying */}
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 font-bold text-lg">
                L
              </div>
              <div>
                <h3 className="text-blue-600 font-semibold text-xl mb-2">Land Surveying</h3>
                <p className="text-gray-600">
                  Highly experienced team for all types of surveys with trusted expertise.
                </p>
              </div>
            </div>

            {/* Equipment Leasing */}
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 font-bold text-lg">
                E
              </div>
              <div>
                <h3 className="text-blue-600 font-semibold text-xl mb-2">Equipment Leasing</h3>
                <p className="text-gray-600">
                  Access the latest surveying equipment available for lease.
                </p>
              </div>
            </div>

            {/* Training Programs */}
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 font-bold text-lg">
                T
              </div>
              <div>
                <h3 className="text-blue-600 font-semibold text-xl mb-2">Training Programs</h3>
                <p className="text-gray-600">
                  Professional training tailored for upcoming surveyors and communities.
                </p>
              </div>
            </div>

            {/* Expert Witness */}
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 font-bold text-lg">
                W
              </div>
              <div>
                <h3 className="text-blue-600 font-semibold text-xl mb-2">Expert Witness in Court</h3>
                <p className="text-gray-600">
                  Professional surveyor submissions for land-related legal cases.
                </p>
              </div>
            </div>

            {/* Engineering Design */}
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 font-bold text-lg">
                D
              </div>
              <div>
                <h3 className="text-blue-600 font-semibold text-xl mb-2">Engineering Design</h3>
                <p className="text-gray-600">
                  Custom survey-based designs, route maps, and topographical layouts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* About Section */}
<section id="about" className="py-16 bg-gray-50">
  <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
    {/* Left Column - Quick Contacts */}
    <div className="md:col-span-1 bg-white shadow-lg rounded-lg p-6">
      <h3 className="text-lg font-bold text-blue-600 mb-4 flex items-center">
        <span className="mr-2">⏰</span> Quick Contacts
      </h3>
      <p className="font-semibold text-gray-700">Phone:</p>
      <p className="mb-4">+25495979586</p>

      <p className="font-semibold text-gray-700">Location:</p>
      <p className="mb-4">
        Mombasa Kenya: Services countrywide
      </p>

      <p className="font-semibold text-gray-700">Email:</p>
      <p className="mb-4">abednegoamani@gmail.com</p>

      <h4 className="text-blue-600 font-bold mb-2">Need Help?</h4>
      <p className="text-sm text-gray-600 mb-4">
        You can chat with our surveyors on Whatsapp
      </p>
      <a
        href="https://wa.me/254713527865"
        target="_blank"
        rel="noopener noreferrer"
        className="block bg-green-700 text-white text-center py-2 rounded-lg hover:bg-green-800"
      >
        Whatsapp Chat
      </a>
    </div>

    {/* Right Column - Main Content */}
    <div className="md:col-span-3 text-center">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-blue-600 mb-4">
        Accurate measurement surveyors:
      </h2>
      <h3 className="text-2xl font-bold text-gray-800 mb-6">
        AMS  Land Surveyors
      </h3>

      {/* Description */}
      <p className="max-w-3xl mx-auto text-gray-700 mb-12">
       Located in Mombasa, we are a trusted surveying firm committed to delivering precise and dependable
        land survey solutions. Our portfolio spans projects of all scales,
         from individual plots to large developments, across different parts of Kenya.
          With a dedicated team of licensed professionals,
           we combine local expertise with modern practices to provide services you can count on. 
      </p>

      {/* 3 Columns with Images */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div>
          <img
            src="/survey3.jpg"
            alt="Experienced"
            className="w-full h-64 object-cover rounded-lg shadow-md"
          />
          <h4 className="mt-4 text-xl font-semibold text-blue-600">
            Experienced
          </h4>
        </div>

        {/* Card 2 */}
        <div>
          <img
            src="/survey2.jpg"
            alt="Modern Technology"
            className="w-full h-64 object-cover rounded-lg shadow-md"
          />
          <h4 className="mt-4 text-xl font-semibold text-blue-600">
            Modern Technology
          </h4>
        </div>

        {/* Card 3 */}
        <div>
          <img
            src="/survey1.jpg"
            alt="Excellent Service"
            className="w-full h-64 object-cover rounded-lg shadow-md"
          />
          <h4 className="mt-4 text-xl font-semibold text-blue-600">
            Excellent Service
          </h4>
        </div>
      </div>
    </div>
  </div>
</section>


    </div>
  );
}



