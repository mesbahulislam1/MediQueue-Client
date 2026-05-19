"use client";

import { Envelope } from "@gravity-ui/icons";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export function UpdateTutorsModal({tutor}) {
  const router = useRouter()
  const updateHandel = async(e)=>{

    const formData = new FormData(e.currentTarget)
    const updateData = Object.fromEntries(formData.entries());
    const res = await fetch(`http://localhost:8000/tutors/${tutor._id}`,{
      method: 'PATCH',
      headers:{
        'content-type':'application/json',
      },
      body: JSON.stringify(updateData)
    })

    const data = await res.json()
    toast.success('Update Succesfull')
    if (data) {
      router.push('/my-tutors')
    }
  }
  return (
    <Modal>
      <Button className="px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600">
        Update
      </Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="w-full max-w-[1000px]">
            <Modal.CloseTrigger />
            <Modal.Header>
              
              <Modal.Heading>Update Tutors</Modal.Heading>
              
            </Modal.Header>
            <Modal.Body className="p-3">
              <Surface variant="default">
                <form onSubmit={updateHandel} className="space-y-5">

  {/* Tutor Name */}
  <div>
    <label className="text-sm font-medium">Tutor Name</label>
    <input
      defaultValue={tutor.tutorName}
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
      defaultValue={tutor.photo}
      type="text"
      name="photo"
      className="w-full mt-1 p-3 border rounded-xl"
      placeholder="https://image-link.com"
    />
  </div>

  {/* Subject */}
  <div>
    <label className="text-sm font-medium">Subject / Category</label>
    <select
      name="subject"
      defaultValue={tutor.subject}
      className="w-full mt-1 p-3 border rounded-xl"
    >
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
      defaultValue={tutor.availability}
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
        defaultValue={tutor.hourlyFee}
        type="number"
        name="hourlyFee"
        className="w-full mt-1 p-3 border rounded-xl"
        placeholder="100"
      />
    </div>

    <div>
      <label className="text-sm font-medium">Total Slots</label>
      <input
        defaultValue={tutor.totalSlots}
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
      defaultValue={tutor.startDate}
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
      defaultValue={tutor.experience}
      name="experience"
      className="w-full mt-1 p-3 border rounded-xl"
      rows="3"
    />
  </div>

  {/* Location */}
  <div>
    <label className="text-sm font-medium">Location</label>
    <input
      defaultValue={tutor.location}
      type="text"
      name="location"
      className="w-full mt-1 p-3 border rounded-xl"
    />
  </div>

  {/* Teaching Mode */}
  <div>
    <label className="text-sm font-medium">Teaching Mode</label>
    <select
      name="teachingMode"
      defaultValue={tutor.teachingMode}
      className="w-full mt-1 p-3 border rounded-xl"
    >
      <option>Online</option>
      <option>Offline</option>
      <option>Both</option>
    </select>
  </div>

  {/* Footer */}
  <Modal.Footer>
    <Button slot="close" variant="secondary">
      Cancel
    </Button>
    <Button type="submit" >
      Save
    </Button>
  </Modal.Footer>

</form>
              </Surface>
            </Modal.Body>
            
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}
