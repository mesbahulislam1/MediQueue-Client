import { BookingDelete } from "@/components/BookingDelete";
import { getBookingData } from "@/lib/data";
import { Button } from "@heroui/react";
import Link from "next/link";
import React from "react";

const MyBookingPage = async () => {
  const bookingData = await getBookingData();

  return (
    <>
      <div className="min-h-screen bg-gray-50 p-6">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">My Bookings</h1>

        {bookingData.length > 0 ? (
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
                      booking.bookStatus === "Booked"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {booking.bookStatus}
                  </span>
                </div>

                {/* Info */}
                <div className="space-y-2 text-gray-600 text-sm">
                  <p>
                    <span className="font-medium text-gray-800">Student:</span>{" "}
                    {booking.studentName}
                  </p>

                  <p>
                    <span className="font-medium text-gray-800">Phone:</span>{" "}
                    {booking.phone}
                  </p>

                  <p>
                    <span className="font-medium text-gray-800">Tutor ID:</span>{" "}
                    {booking.tutorId}
                  </p>
                </div>

                {/* Footer */}
                <div className="mt-4 pt-4 border-t text-xs text-gray-400">
                  Booking ID: {index + 1}
                </div>
                <div className="pt-4 flex gap-2">
                  <BookingDelete booking={booking}></BookingDelete>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="min-h-[60vh] flex items-center justify-center px-4">
            <div className="text-center bg-white border shadow-md rounded-2xl p-10 max-w-md w-full">
              {/* Icon */}
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 13h6m2 6H7a2 2 0 01-2-2V7a2 2 0 012-2h5l2 2h5a2 2 0 012 2v10a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
              </div>

              {/* Title */}
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                No Bookings Found
              </h2>

              {/* Subtitle */}
              <p className="text-gray-500 text-sm mb-6">
                You don’t have any bookings yet. Once you book a tutor, it will
                appear here.
              </p>

              {/* Action button */}
              <Link href={'/tutors'}><button className="px-5 cursor-pointer py-2 rounded-xl bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition">
                Browse Tutors
              </button></Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default MyBookingPage;
