import TutorCard from '@/components/TutorCard'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const TutorsPage =  async({params}) => {
  const {id} = await params;

  const res =await fetch(`${process.env.NEXT_PUBLIC_SERVER_URI}/tutors`)
 const tutors  = await res.json();

  
 
  
  
  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-10">
        🎓 All Tutors
      </h1>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tutors.map((tutor) => (
           <TutorCard key={tutor._id} tutor={tutor}></TutorCard>
        ))}
      </div>
    </div>
  )
}

export default TutorsPage