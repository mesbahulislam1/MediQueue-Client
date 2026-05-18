
import { tutorsOne } from "@/lib/data";
import { FieldError, Input, Label, TextField } from "@heroui/react";
import React from "react";
import { FaCheck } from "react-icons/fa";
import { FaAsterisk } from "react-icons/fa6";

const BookingDetails = async({params}) => {
  const {id} = await params;
   const tutorDetails =await tutorsOne(id)
   console.log(tutorDetails)
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Booking Form */}
      <div className="lg:col-span-2 bg-white rounded-3xl p-6 shadow-sm">
        <h2 className="text-3xl font-bold mb-8">Book a Session</h2>

        <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-4 text-indigo-700 mb-8">
          Please fill in your details to book a session with this tutor.
        </div>

        <form className="space-y-6">
          <div className="grid md:grid-cols-2 gap-5">
            <TextField isRequired name="name" type="text">
              <Label className="text-[16px] font-bold">Student Name</Label>
              <Input
                placeholder="Enter your name"
                className={" border border-black/20 py-4 rounded-[9px]"}
              />
              <FieldError />
            </TextField>

            <TextField isRequired name="name" type="text">
              <Label className="text-[16px] font-bold">Phone </Label>
              <Input
                placeholder="Enter your name"
                className={"border border-black/20 py-4 rounded-[9px]"}
              />
              <FieldError />
            </TextField>

            <TextField isRequired name="name" type="text">
              <Label className="text-[16px] font-bold">Tutor ID (Auto)</Label>
              <Input value={tutorDetails?._id} disabled
                placeholder="Enter your name"
                className={" border border-black/20 py-4 disabled:opacity-100 disabled:font-bold disabled:text-[#4F545F] rounded-[9px]"}
              />
              <FieldError />
            </TextField>

            <TextField isRequired name="name" type="text">
              <Label className="text-[16px] font-bold">Tutor Name (Auto)</Label>
              <Input value={tutorDetails?.tutorName} disabled
                placeholder="Enter your name"
                className={" border border-black/20 disabled:opacity-100 disabled:font-bold disabled:text-[#4F545F] py-4 rounded-[9px]"}
              />
              <FieldError />
            </TextField>

            <TextField isRequired name="name" type="text">
              <Label className="text-[16px] font-bold">
                Student Email (auto)
              </Label>
              <Input
                placeholder="Enter your name"
                className={" border border-black/20 py-4 rounded-[9px] disabled:opacity-100 disabled:font-bold disabled:text-[#4F545F]"}
              />
              <FieldError />
            </TextField>

            <TextField isRequired name="name" type="text">
              <Label className="text-[16px] font-bold">
                Book Status (Auto)
              </Label>
              <Input
                placeholder="Enter your name"
                className={" border border-black/20 py-4 rounded-[9px] disabled:opacity-100 disabled:font-bold disabled:text-[#4F545F]"}
              />
              <FieldError />
            </TextField>
          </div>

          <div className="grid md:grid-cols-2 gap-5"></div>

          <div className="grid md:grid-cols-2 gap-5"></div>

          <div className="bg-green-50 border border-green-200 rounded-2xl p-5 text-green-700">
            <h1 className="flex items-center gap-2 p-2">
              <span className=" h-5 w-5">
                <FaCheck></FaCheck>
              </span>
              Note:{" "}
            </h1>
            After successful booking, one slot will be deducted automatically.
          </div>

          <button className="w-full cursor-pointer py-4 rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 text-white text-lg font-semibold">
            Confirm Booking
          </button>
        </form>
      </div>

      {/* Sidebar */}
      <div className="space-y-5">
        <div className="bg-white rounded-3xl p-6 shadow-sm">
          <h3 className="text-2xl font-bold mb-5">Booking Information</h3>

          <div className="space-y-4">
            <div className="bg-green-50 border border-green-200 rounded-2xl p-5">
              <p className="font-semibold text-gray-700">
                Total Slot Availability
              </p>

              <h4 className="text-3xl font-bold text-green-600 mt-2">
                5 / 5 Slots Available
              </h4>

              <p className="text-sm text-gray-500 mt-2">
                Each booking will decrease slot by 1.
              </p>
            </div>

            <div className="bg-orange-50 border border-orange-200 rounded-2xl p-5">
              <p className="font-semibold text-gray-700">Session Start Date</p>

              <h4 className="text-2xl font-bold text-orange-500 mt-2">
                25 May 2026
              </h4>

              <p className="text-sm text-gray-500 mt-2">
                Booking is available from this date.
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5">
              <h4 className="font-bold text-blue-700 mb-3">Important Notes</h4>

              <ul className="space-y-2 text-sm text-gray-600 list-disc pl-5">
                <li>If total slot is 0, booking is blocked.</li>
                <li>
                  If current date is earlier than session date, booking is not
                  allowed.
                </li>
                <li>After successful booking, slot will decrease by 1.</li>
                <li>If slot reaches 0, you can’t book this session.</li>
              </ul>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-2xl p-5">
              <h4 className="font-bold text-red-600">
                This session is not fully booked.
              </h4>

              <p className="text-sm text-gray-600 mt-2">
                You can book your seat now.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingDetails;
