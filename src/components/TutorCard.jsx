import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const TutorCard = ({tutor}) => {
  return (
    <div
            
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
          >
            {/* Image */}
            <Image
              src={tutor.photo}
              alt={tutor.tutorName}
              width={500}
              height={500}
              className="w-full h-48 object-cover"
            />

            {/* Content */}
            <div className="p-5 space-y-2">
              <h2 className="text-xl font-semibold">
                {tutor.tutorName}
              </h2>

              <p className="text-sm text-gray-600">
                📘 Subject: {tutor.subject}
              </p>

              <p className="text-sm text-gray-600">
                📍 Location: {tutor.location}
              </p>

              <p className="text-sm text-gray-600">
                💰 Fee: ${tutor.hourlyFee}/hr
              </p>

              <p className="text-sm text-gray-600">
                🕒 Mode: {tutor.teachingMode}
              </p>

              {/* Button */}
              <Link href={`/tutors/${tutor._id}`}>
                <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition">
                  Book Session
                </button>
              </Link>
            </div>
          </div>
  )
}

export default TutorCard