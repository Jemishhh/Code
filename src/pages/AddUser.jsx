import React, {useEffect, useState} from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom';


const AddUser = () => {

  const navigate = useNavigate();

  const [employeemail, setEmail] = useState("");
  const [address, setAddress] =useState("");
  const [mobile, setMobile] = useState("");
  const [prevcomp, setPrevComp] = useState("");
  const [name, setName]  = useState("");
  const [pan, setPan] = useState("");
  const [user, setUser] = useState({})
  const [flag, setFlag] = useState("")


  const handleSubmit = async (e) => {
    e.preventDefault();
    const email =localStorage.getItem("email")
    console.log(email)
    try {
      
      const { data } = await axios.post(
        "https://localhost:7153/api/employee",
        {
          "employeeName" : name,
          "employeeEmail" : employeemail,
          "mobile" : mobile,
          "email":email,
          "address" : address,
          "previousCompany" : prevcomp,
          "pan" : pan,
        }
      );
      console.log("data ", data);
      
      // toast.success("Login successfully");
      
      setUser(email);
      navigate('/customers');
      // navigate("/");
    } catch (err) {
      console.log(err);
      // toast.error("Something went wrong login through google account");
    }
  };



  return (
    <div>
      <div>
      {/* <!-- Section: Design Block --> */}
<section className="">
  {/* <!-- Jumbotron --> */}
  <div className="px-4 py-5 px-md-5 text-center text-lg-start" style={{backgroundColor:'hsl(0, 0%, 96%)'}}>
    <div className="container">
      <div className="row gx-lg-5 align-items-center">
        <div className="col-lg-6 mb-5 mb-lg-0">
          <h1 className="my-5 display-3 fw-bold ls-tight">
            Enter <br />
            <span className="text-primary">Employee Details</span>
          </h1>
          <p style={{color: "hsl(217, 10%, 50.8%)"}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Eveniet, itaque accusantium odio, soluta, corrupti aliquam
            quibusdam tempora at cupiditate quis eum maiores libero
            veritatis? Dicta facilis sint aliquid ipsum atque?
          </p>
        </div>

        <div className="col-lg-6 mb-5 mb-lg-0">
          <div className="card">
            <div className="card-body py-5 px-md-5">
              <form>
                {/* <!-- 2 column grid layout with text inputs for the first and last names --> */}
                <div className="row">
                  
                </div>

                {/* <!-- Email input --> */}
                <div className="form-outline mb-4 ">
                 <label className="form-label" for="form3Example3">Name</label>
                  <input type="text" id="form3Example3" className="form-control" onChange={(e) => setName(e.target.value)}/>
                 
                </div>

                <div className="form-outline mb-4">
                <label className="form-label" for="form3Example3">Email address</label>

                  <input type="email" id="form3Example3" className="form-control" onChange={(e) => setEmail(e.target.value)} />
                </div>
                
                <div className="form-outline mb-4">
                <label className="form-label" for="form3Example3">Mobile No.</label>
                  <input type="number" id="form3Example3" className="form-control" onChange={(e) => setMobile(e.target.value)} />
                  
                </div>
                <div className="form-outline mb-4">
                 <label className="form-label" for="form3Example3">Address</label>
                  <textarea type="text" id="form3Example3" className="form-control" onChange={(e) => setAddress(e.target.value)} />
                 
                </div>

                <div className="form-outline mb-4">
                  <label className="form-label" for="form3Example3">Previous Company (If Any)</label>
                  <input type="text" id="form3Example3" className="form-control"onChange={(e) => setPrevComp(e.target.value)} />
                
                </div>
                
              
                <div className="form-outline mb-4">
                <label className="form-label" for="form3Example3">PAN Number</label>
                  <input type="text" id="form3Example3" className="form-control" onChange={(e) => setPan(e.target.value)} />
                  
                </div>

                {/* <div className="form-outline mb-4">
                <label className="form-label" for="form3Example3">Flags</label>
                  <input type="text" id="form3Example3" className="form-control" onChange={(e) => setFlag(e.target.value)} />
                  
                </div>
               */}
                {/* <div className="form-outline mb-4">
                  <input type="file" id="form3Example3" className="form-control"  />
                  <label className="form-label" for="form3Example3">Photo</label>
                </div> */}

                
                {/* <!-- Submit button --> */}
                <div class="d-flex justify-content-center mb-4">
                <button className="btn btn-primary btn-block mb-4 "  onClick={handleSubmit}> Add User</button>
                </div>
               


                
               
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
    </div>
  )
}

export default AddUser
