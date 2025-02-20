// import React, { useContext, useState } from "react";

// import { Link, useNavigate } from "react-router-dom";
// import { BASE_URL ,token} from "../utilities/Confiig";
// import { AuthContext } from "../Context/authContext";
// import "../Login/login.css"
// import { IoMdPerson } from "react-icons/io";

// const Login = ()=>{

//     const [credentails,setcredentials]=useState({
//         email:undefined,
//         password:undefined,
//     })
//     const navigate = useNavigate();
//     const {dispatch } = useContext(AuthContext)
    
   
   
//     const handleChange=(e)=>{
//         setcredentials((prev)=>({...prev,[e.target.name]:e.target.value}))
//     }
//     // console.log(credentails)
//     const handlesubmitChange = async(e)=>{
//         e.preventDefault();
//         dispatch({type:"LOGIN_START"})
//         try {
//             const response = await fetch(`${BASE_URL}/users/login`,{
//                 method:"POST",
//                 headers:{"content-type":"application/json"},
//                 credentials:"include",
//                 body:JSON.stringify(credentails)
//             });
//             const result = await response.json();
//             if(!result.ok){

//                 // console.log(result.message)
//             }
//             console.log("after login",result.token);
//             dispatch({type:"LOGIN_SUCCESS",
//                 payload:result.data,
//                 token:result.token,
//                 role:result.role,
//             })
//         } catch (error) {
//             dispatch({type:"LOGIN_FAILURE",
//                 payload:error.message
//             })
            
//         }
//     }

//     return(

//         <div className="container">
//             <div className="card-body">
//                 <div className="row">
//                     <div className="col-md-2"></div>
//                     <div className="col-md-4">
//                         <img src="https://media.mktg.workday.com/is/image/workday/illustration-people-login?fmt=png-alpha&wid=1000"  alt="loimg" className="limg" />
//                     </div>
//                     <div className="col-md-4 logined">
//                         <form onSubmit={handlesubmitChange}>
//                               <h1 ><IoMdPerson  className="icon"/></h1>
//                             <h1 className="login">Login</h1>
                            
//                             <input type="email" placeholder="Email" name="email" className="mt-3 input" onChange={handleChange}/><br></br>
//                             <input type="number" placeholder="Password" name="password" className="mt-3 input"  onChange={handleChange}/><br></br>
//                             <button type="submit" className="btn btn-primary mt-3 input">Login</button>
//                             <p>Don't have an account <Link to="/register">Register</Link> </p>
//                         </form>
//                     </div>
//                     <div className="col-md-2"></div>
//                 </div>

//             </div>


           
//         </div>
//     )
// }
// export default Login

import React, { useContext, useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import { BASE_URL ,token} from "../utilities/Confiig";
import { AuthContext } from "../Context/authContext";
import "../Login/login.css"
import { IoMdPerson } from "react-icons/io";

const Login = ()=>{

    const [credentails,setcredentials]=useState({
        email:undefined,
        password:undefined,
    })
    const navigate = useNavigate();
    const {dispatch } = useContext(AuthContext)
    const accesstoken =token
   
    
    const handleChange=(e)=>{
        setcredentials((prev)=>({...prev,[e.target.name]:e.target.value}))
    }
     console.log(credentails)
    const handlesubmitChange = async(e)=>{
        e.preventDefault();
        dispatch({type:"LOGIN_START"})
        try {
            const response = await fetch(`${BASE_URL}/users/login`,{
                method:"POST",
                headers:{"content-type":"application/json"},
                credentials:"include",
                body:JSON.stringify(credentails)
            });
            const result = await response.json();
            if(!result.ok){

                 console.log(result.message)
            }
          
            dispatch({type:"LOGIN_SUCCESS",
                payload:result.data,
                token:result.token,
                role:result.role,
            })
            navigate("/home")
        } catch (error) {
            dispatch({type:"LOGIN_FAILURE",
                payload:error.message
            })
            
        }
    }

    return(

        <div className="container">
            <div className="card-body">
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-4">
                        <img src="https://media.mktg.workday.com/is/image/workday/illustration-people-login?fmt=png-alpha&wid=1000"  alt="loimg" className="limg" />
                    </div>
                    <div className="col-md-4 logined">
                        <form onSubmit={handlesubmitChange}>
                              <h1 ><IoMdPerson  className="icon"/></h1>
                            <h1 className="login">Login</h1>
                            
                            <input type="email" placeholder="Email" name="email" className="mt-3 input" onChange={handleChange}/><br></br>
                            <input type="number" placeholder="Password" name="password" className="mt-3 input"  onChange={handleChange}/><br></br>
                            <button type="submit" className="btn btn-primary mt-3 input">Login</button>
                            <p>Don't have an account <Link to="/register">Register</Link> </p>
                        </form>
                    </div>
                    <div className="col-md-2"></div>
                </div>

            </div>


           
        </div>
    )
}
export default Login