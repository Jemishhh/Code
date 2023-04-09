// import { Link } from 'react-router-dom'
import React, {useEffect, useState} from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom';

  

function Company() {
const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [address, setAddress] = useState("");
  const [company, setCompanyName] = useState("");
  const [website, setWebsiteName] = useState("");
  const email =localStorage.getItem("email")
  const [user, setUser] = useState({})
  // console.log(email)


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const email =localStorage.getItem("email")
      console.log(email)
      const { data } = await axios.post(
        "https://localhost:7153/api/employer",
        {
          "managerName": username,
          "companyName" : company,
          "email":email,
          "website": website,
          "address":address
        }
      );
      console.log("data ", data);
      // toast.success("Login successfully");
      setUser(data);
      navigate("/AddUser");
    } catch (err) {
      console.log(err);
      // toast.error("Something went wrong login through google account");
   }
  };



  return (
   
    <div>
    {/* <!-- Section: Design Block --> */}
<section className="">
{/* <!-- Jumbotron --> */}

<div className="px-4 py-5 px-md-5 text-center text-lg-start" style={{backgroundColor:'hsl(0, 0%, 96%)'}}>
  <div className="container">
    <div className="row gx-lg-5 align-items-center">
      <div className="col-lg-6 mb-5 mb-lg-0">
        <h1 className="my-5 display-3 fw-bold ls-tight">
          Userr <br />
          <span className="text-primary">for your business</span>
        </h1>
        <p style={{color: "hsl(217, 10%, 50.8%)"}}>
       Add Details of th user
        </p>
      </div>

      <div className="col-lg-6 mb-5 mb-lg-0">
        <div className="card">
          <div className="card-body py-5 px-md-5">
          <form>
          {/* <!-- 2 column grid layout with text inputs for the first and last names --> */}
          <div className="form-outline mb-4">
            <input type="text" id="form3Example3" className="form-control" onChange={(e) => setUsername(e.target.value)} />
            <label className="form-label" htmlFor="form3Example3">Manager name</label>
          </div>
          

          {/* <!-- Email input --> */}
          <div className="form-outline mb-4">
            <input type="text" id="form3Example3" className="form-control" onChange={(e) => setCompanyName(e.target.value)} />
            <label className="form-label" htmlFor="form3Example3">Company name</label>
          </div>

          {/* <!-- Password input --> */}
          <div className="form-outline mb-4">
            <input type="text" id="form3Example4" className="form-control" onChange={(e) => setWebsiteName(e.target.value)} />
            <label className="form-label" htmlFor="form3Example4">Website name</label>
          </div>

          <div className="form-outline mb-4">
            <textarea id="form3Example4" className="form-control" onChange={(e) => setAddress(e.target.value)}/>
            <label className="form-label" htmlFor="form3Example4">Address</label>
          </div>
        
         

          {/* <!-- Submit button --> */}
          {/* <button type="submit" className="btn btn-primary btn-block mb-4">
            Add User
          </button> */}
          <button className="btn btn-primary btn-block mb-4" onClick={handleSubmit}> Register now</button>

          
        </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
{/* <!-- Jumbotron --> */}
</section>
{/* <!-- Section: Design Block --> */}
  </div>


  )
}


    

export default Company
