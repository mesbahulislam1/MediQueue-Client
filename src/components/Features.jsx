import React from 'react'

const Features = () => {
    const features = [
    "Trusted Tutors",
    "Easy Booking",
    "Secure System",
    "Fast Support",
  ];
  return (
    <section className="py-16 w-full px-6 bg-white">
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900">
          Why Choose Us
        </h1>
        <p className="text-gray-500 mt-3 max-w-xl mx-auto">
          We provide a smart, fast, and secure tutor booking experience
          designed to make learning simple and effective.
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        
        {/* Card 1 */}
        <div className="p-9 cursor-pointer border border-black/10 rounded-2xl shadow-md hover:shadow-xl transition bg-gray-50 text-center">
          <h2 className="text-2xl font-semibold text-gray-900">
            Trusted Tutors
          </h2>
          <p className="text-gray-600 mt-2 text-sm">
            Verified and experienced tutors to ensure quality learning.
          </p>
        </div>

        {/* Card 2 */}
        <div className="p-9 cursor-pointer border border-black/10 rounded-2xl shadow-md hover:shadow-xl transition bg-gray-50 text-center">
          <h2 className="text-2xl  font-semibold text-gray-900">
            Easy Booking
          </h2>
          <p className="text-gray-600 mt-2 text-sm">
            Book your favorite tutor in just a few clicks without hassle.
          </p>
        </div>

        {/* Card 3 */}
        <div className="p-9 cursor-pointer border border-black/10 rounded-2xl shadow-md hover:shadow-xl transition bg-gray-50 text-center">
          <h2 className="text-2xl  font-semibold text-gray-900">
            Secure System
          </h2>
          <p className="text-gray-600 mt-2 text-sm">
            Your data and bookings are fully protected and encrypted.
          </p>
        </div>

        {/* Card 4 */}
        <div className="p-9 cursor-pointer border border-black/10 rounded-2xl shadow-md hover:shadow-xl transition bg-gray-50 text-center">
          <h2 className="text-2xl  font-semibold text-gray-900">
            Fast Support
          </h2>
          <p className="text-gray-600 mt-2 text-sm">
            Quick response support to solve your problems anytime.
          </p>
        </div>

      </div>
    </section>
  )
}

export default Features