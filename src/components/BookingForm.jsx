"use client";
import { authClient } from "@/lib/auth-client";
import { FieldError, Input, Label, TextField } from "@heroui/react";
import { redirect } from "next/navigation";

import React from "react";
import { FaCheck } from "react-icons/fa";
import { toast } from "react-toastify";

const BookingForm = ({ tutorDetails, user }) => {
  

  const bookingData = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries());
    const bookingData = {
      studentName: userData?.name,
      phone: userData?.phone,
      tutorId: tutorDetails?._id,
      tutorName: tutorDetails?.tutorName,
      bookStatus: "Booked",
    };
    const {data: tokenData}= await authClient.token()

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URI}/booking`, {
        method: "POST",
        headers: {
            'content-type':'application/json',
            authorization: `Bearer ${tokenData?.token}`,
        },
        body: JSON.stringify(bookingData)
    })
    const data = await res.json()
    if (data) {
        redirect('/my-booked')
    }
  };

  return (
    <form onSubmit={bookingData} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-5">
        <TextField isRequired name="name" type="text">
          <Label className="text-[16px] font-bold">Student Name</Label>
          <Input
            placeholder="Enter your name"
            className={" border border-black/20 py-4 rounded-[9px]"}
          />
          <FieldError />
        </TextField>

        <TextField isRequired name="phone" type="number">
          <Label className="text-[16px] font-bold">Phone </Label>
          <Input
            placeholder="Enter your name"
            className={"border border-black/20 py-4 rounded-[9px]"}
          />
          <FieldError />
        </TextField>

        <TextField isRequired name="tutorId" type="text">
          <Label className="text-[16px] font-bold">Tutor ID (Auto)</Label>
          <Input
            value={tutorDetails?._id}
            disabled
            readOnly
            placeholder="Enter your name"
            className={
              " border border-black/20 py-4 disabled:opacity-100 disabled:font-bold disabled:text-[#4F545F] rounded-[9px]"
            }
          />
          <FieldError />
        </TextField>

        <TextField isRequired name="tutorName" type="text">
          <Label className="text-[16px] font-bold">Tutor Name (Auto)</Label>
          <Input
            value={tutorDetails?.tutorName}
            disabled
            placeholder="Enter your name"
            className={
              " border border-black/20 disabled:opacity-100 disabled:font-bold disabled:text-[#4F545F] py-4 rounded-[9px]"
            }
          />
          <FieldError />
        </TextField>

        <TextField isRequired name="email" type="text">
          <Label className="text-[16px] font-bold">Student Email (auto)</Label>
          <Input
            value={user?.email}
            disabled
            placeholder="Enter your name"
            className={
              "border border-black/20 disabled:opacity-100 disabled:font-bold disabled:text-[#4F545F] py-4 rounded-[9px]"
            }
          />
          <FieldError />
        </TextField>

        <TextField isRequired name="name" type="text">
          <Label className="text-[16px] font-bold">Book Status (Auto)</Label>
          <Input
            value={"Booked"}
            disabled
            placeholder="Enter your name"
            className={
              " border border-black/20 py-4 rounded-[9px] disabled:opacity-100 disabled:font-bold disabled:text-[#4F545F]"
            }
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

      <button onClick={() => toast.success('Booking Succesfull')}
        disabled={tutorDetails?.totalSlots === 0}
        className="w-full cursor-pointer py-4 rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 text-white"
      >
       Confirm Booking
      </button>
    </form>
  );
};

export default BookingForm;
