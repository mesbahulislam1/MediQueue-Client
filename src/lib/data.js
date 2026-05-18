export const TutorsInfo = async()=>{
    const res =await fetch(`${process.env.LOCAL_HOST}/tutors`)
    const data = await res.json();
    return data
}
export const tutorsOne= async(id)=>{
    const res = await fetch(`http://localhost:8000/tutors/${id}`);
    const data = await res.json()
    return data
}