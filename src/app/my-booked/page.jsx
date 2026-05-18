
import { getBookingData } from '@/lib/data'
import React from 'react'

const MyBookingPage = async() => {
    const bookingData = await getBookingData()

  return (
     <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        My Bookings
      </h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {bookingData?.map((booking, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-5 border hover:shadow-lg transition"
          >
            {/* Status */}
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-gray-800">
                {booking.tutorName}
              </h2>

              <span
                className={`px-3 py-1 text-xs rounded-full font-semibold ${
                  booking.bookStatus === 'Booked'
                    ? 'bg-green-100 text-green-700'
                    : 'bg-yellow-100 text-yellow-700'
                }`}
              >
                {booking.bookStatus}
              </span>
            </div>

            {/* Info */}
            <div className="space-y-2 text-gray-600 text-sm">
              <p>
                <span className="font-medium text-gray-800">Student:</span>{' '}
                {booking.studentName}
              </p>

              <p>
                <span className="font-medium text-gray-800">Phone:</span>{' '}
                {booking.phone}
              </p>

              <p>
                <span className="font-medium text-gray-800">Tutor ID:</span>{' '}
                {booking.tutorId}
              </p>
            </div>

            {/* Footer */}
            <div className="mt-4 pt-4 border-t text-xs text-gray-400">
              Booking ID: {index + 1}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MyBookingPage