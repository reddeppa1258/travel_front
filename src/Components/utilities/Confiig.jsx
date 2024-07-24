export const BASE_URL = "http://localhost:5000/api/v1"
export const token =localStorage.getItem("token")
export const gettoken =()=>{
    const token=localStorage.getItem("token")
    console.log("inside get token",token)
    return token
}