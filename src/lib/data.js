export const TutorsInfo = async()=>{
    const res =await fetch(`http://localhost:8000/tutors`)
    const data = await res.json();
    return data
}
export const tutorsOne= async(id)=>{
    const res = await fetch(`http://localhost:8000/tutors/${id}`);
    const data = await res.json()
    return data
}
export const getBookingData = async()=>{
    const res = await fetch('http://localhost:8000/booking');
    const data =await res.json()
    return data ;
}
