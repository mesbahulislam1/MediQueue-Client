import React from 'react'

const PlatformStats = () => {
  return (
    <section className="py-16 w-full px-6 bg-gradient-to-r from-indigo-50 via-white to-indigo-50">
      
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900">
          Platform Statistics
        </h1>
        <p className="text-gray-500 mt-3 max-w-xl mx-auto">
          We are growing every day with students and tutors joining our platform.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        
        {/* Stat 1 */}
        <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-10 text-center border">
          <h2 className="text-4xl font-bold text-indigo-600">
            100+
          </h2>
          <p className="text-gray-700 mt-2 text-lg font-medium">
            Tutors
          </p>
        </div>

        {/* Stat 2 */}
        <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-10 text-center border">
          <h2 className="text-4xl font-bold text-indigo-600">
            1000+
          </h2>
          <p className="text-gray-700 mt-2 text-lg font-medium">
            Students
          </p>
        </div>

        {/* Stat 3 */}
        <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-10 text-center border">
          <h2 className="text-4xl font-bold text-indigo-600">
            5000+
          </h2>
          <p className="text-gray-700 mt-2 text-lg font-medium">
            Sessions
          </p>
        </div>

      </div>
    </section>
  )
}

export default PlatformStats