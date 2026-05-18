"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddTutorPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const TutorData = Object.fromEntries(formData.entries());

    const res = await fetch(`http://localhost:8000/tutors`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(TutorData),
    });

    const data = await res.json();

    if (data) {
      router.push("/my-tutors");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center mb-8">➕ Add Tutor</h1>

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Tutor Name */}
          <div>
            <label className="text-sm font-medium">Tutor Name</label>
            <input
              type="text"
              name="tutorName"
              className="w-full mt-1 p-3 border rounded-xl"
              placeholder="Enter tutor name"
              required
            />
          </div>

          {/* Photo */}
          <div>
            <label className="text-sm font-medium">Photo URL</label>
            <input
              type="text"
              name="photo"
              className="w-full mt-1 p-3 border rounded-xl"
              placeholder="https://image-link.com"
            />
          </div>

          {/* Subject */}
          <div>
            <label className="text-sm font-medium">Subject / Category</label>
            <select name="subject" className="w-full mt-1 p-3 border rounded-xl">
              <option>Mathematics</option>
              <option>Physics</option>
              <option>Chemistry</option>
              <option>Biology</option>
              <option>English</option>
            </select>
          </div>

          {/* Availability */}
          <div>
            <label className="text-sm font-medium">Available Days & Time</label>
            <input
              type="text"
              name="availability"
              className="w-full mt-1 p-3 border rounded-xl"
              placeholder="Sun - Thu 5:00 PM - 8:00 PM"
            />
          </div>

          {/* Fee + Slots */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium">Hourly Fee ($)</label>
              <input
                type="number"
                name="hourlyFee"
                className="w-full mt-1 p-3 border rounded-xl"
                placeholder="100"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Total Slots</label>
              <input
                type="number"
                name="totalSlots"
                className="w-full mt-1 p-3 border rounded-xl"
                placeholder="10"
              />
            </div>
          </div>

          {/* Start Date */}
          <div>
            <label className="text-sm font-medium">Session Start Date</label>
            <input
              type="date"
              name="startDate"
              className="w-full mt-1 p-3 border rounded-xl"
            />
          </div>

          {/* Experience */}
          <div>
            <label className="text-sm font-medium">
              Institution & Experience
            </label>
            <textarea
              name="experience"
              className="w-full mt-1 p-3 border rounded-xl"
              rows="3"
              placeholder="e.g. 5 years teaching at ABC School"
            ></textarea>
          </div>

          {/* Location */}
          <div>
            <label className="text-sm font-medium">Location</label>
            <input
              type="text"
              name="location"
              className="w-full mt-1 p-3 border rounded-xl"
              placeholder="City / Area"
            />
          </div>

          {/* Teaching Mode */}
          <div>
            <label className="text-sm font-medium">Teaching Mode</label>
            <select name="teachingMode" className="w-full mt-1 p-3 border rounded-xl">
              <option>Online</option>
              <option>Offline</option>
              <option>Both</option>
            </select>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
          >
            {loading ? "Submitting..." : "Submit Tutor"}
          </button>
        </form>
      </div>
    </div>
  );
}
