

import Image from "next/image";
import {
  CalendarDays,
  Clock3,
  GraduationCap,
  Monitor,
  Star,
  Users,
} from "lucide-react";
import { FieldError, Input, TextField } from "@heroui/react";
import Link from "next/link";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export default async function TutorDetailsPage({params}) {
    const {id} =await params;
    const {token} = await auth.api.getToken({
      headers: await headers()
    })
    
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URI}/tutors/${id}`, {
        headers:{
            authorization: `Bearer ${token}`,
        }
    });
    const  tutorDetails= await res.json()
    

  const tutor = {
    tutorName: "Tanvir Ahmed",
    image:
      "https://i.ibb.co/4f6j2Ff/tutor.jpg",
    subject: "Web Development",
    experience: "5+ Years",
    teachingMode: "Online",
    availableTime: "Saturday - Thursday (7PM - 10PM)",
    sessionDate: "25 May 2026",
    totalSlot: 5,
    fee: 800,
  };

  return (
    <div className="min-h-screen bg-slate-100 py-10 px-4">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 bg-white rounded-3xl p-6 shadow-sm">
          {/* Left */}
          <div className="relative rounded-3xl overflow-hidden">
            {tutorDetails?.photo ? (
  <Image
    src={tutorDetails?.photo}
    alt="Tutor"
    width={700}
    height={700}
    className="w-full h-full object-cover"
  />
) : (
  <div className="w-full h-[400px] flex items-center justify-center bg-gray-200">
    No Image Available
  </div>
)}

            <div className="absolute top-5 left-5 bg-indigo-600 text-white px-4 py-2 rounded-xl text-sm font-medium">
              Verified Tutor
            </div>

            <div className="absolute top-5 right-5 bg-white px-5 py-3 rounded-2xl shadow">
              <div className="flex items-center gap-2 font-semibold">
                <Star size={18} className="text-yellow-500 fill-yellow-500" />
                4.8
              </div>
              <p className="text-sm text-gray-500">(32 Reviews)</p>
            </div>

            <div className="absolute bottom-0 left-0 w-full bg-black/55 text-white p-6">
              <h1 className="text-4xl font-bold">{tutor.tutorName}</h1>
              <p className="mt-2 text-lg">{tutorDetails?.subject}</p>

              <div className="grid grid-cols-4 gap-4 mt-8 text-center">
                <div>
                  <p className="text-2xl font-bold">5+</p>
                  <span className="text-sm text-gray-200">Years Exp.</span>
                </div>

                <div>
                  <p className="text-2xl font-bold">120+</p>
                  <span className="text-sm text-gray-200">Students</span>
                </div>

                <div>
                  <p className="text-2xl font-bold">98%</p>
                  <span className="text-sm text-gray-200">Success Rate</span>
                </div>

                <div>
                  <p className="text-2xl font-bold">${tutorDetails?.hourlyFee}</p>
                  <span className="text-sm text-gray-200">Per Session</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="text-4xl font-bold text-slate-800">
                About Tutor
              </h2>

              <p className="text-gray-600 mt-4 leading-8">
                Hi, I’m Tanvir Ahmed. I have more than 5 years of
                experience in web development. I teach HTML, CSS,
                JavaScript, React, Node.js and MongoDB with practical
                projects.
              </p>

              <div className="mt-10 space-y-7">
                <InfoRow
                  icon={<GraduationCap size={22} />}
                  title="Subject"
                  value={tutorDetails.subject}
                />

                <InfoRow
                  icon={<Users size={22} />}
                  title="Experience"
                  value={tutorDetails?.experience}
                />

                <InfoRow
                  icon={<Monitor size={22} />}
                  title="Teaching Mode"
                  value={tutorDetails?.teachingMode}
                />

                <InfoRow
                  icon={<Clock3 size={22} />}
                  title="Available Time"
                  value={tutor.availableTime}
                />

                <InfoRow
                  icon={<CalendarDays size={22} />}
                  title="Session Start Date"
                  value={tutorDetails.startDate}
                />

                <InfoRow
                  icon={<Users size={22} />}
                  title="Total Slot Limit"
                  value={`${tutorDetails?.totalSlots} Slots Available`}
                  green
                />
              </div>
            </div>

            <Link href={`${id}/booking`}>
            <button className="mt-10 cursor-pointer w-full py-4 rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-semibold text-lg hover:opacity-95 transition">
              Book Session
            </button></Link>
          </div>
        </div>

        {/* Bottom Section */}
        
      </div>
    </div>
  );
}

/* Info Row */
function InfoRow({ icon, title, value, green }) {
  return (
    <div className="flex items-center justify-between border-b pb-5">
      <div className="flex items-center gap-3 text-slate-700 font-medium">
        <span className="text-indigo-600">{icon}</span>
        {title}
      </div>

      <div
        className={`font-semibold ${
          green ? "text-green-600" : "text-slate-700"
        }`}
      >
        {value}
      </div>
    </div>
  );
}

/* Input Field */
function InputField({
  label,
  placeholder,
  value,
  disabled,
}) {
  return (
    <div>
      <label className="block mb-2 font-medium text-slate-700">
        {label}
      </label>

      <Input
        type="text"
        placeholder={placeholder}
        
        
        className="w-full p-4 rounded-2xl border border-slate-200 bg-slate-50 outline-none focus:ring-2 focus:ring-indigo-500"
      />
      
    </div>
  );
}


