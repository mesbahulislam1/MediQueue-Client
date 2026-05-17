export const TutorsInfo = async()=>{
    const res =await fetch(`${process.env.LOCAL_HOST}/tutors`)
    const data = await res.json();
    return data
}