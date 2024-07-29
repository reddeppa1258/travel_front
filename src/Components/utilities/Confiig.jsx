export const BASE_URL = "https://travel-mern-j6ju.onrender.com/api/v1"
export const token =localStorage.getItem("token")
export const gettoken =()=>{
    const token=localStorage.getItem("token")
    console.log("inside get token",token)
    return token
}