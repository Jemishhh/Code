import React, {useEffect, useState} from 'react'
import axios from "axios"
import { useParams } from 'react-router-dom';
import Aaadhar from "../components/1.gif"



const Aadhar = () => {
const [users, setUsers] = useState([]);
const [aadhaar, setaadhar] = useState("");
const [otp, setOtp] = useState("");
  const {employeeEmail} = useParams()
  // localStorage.setItem("email", username);
  // navigate('/company');
console.log(employeeEmail)
// https://localhost:7153/api/aadhaar/jemish%40example.com/573951974575

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    
    const { data } = await axios.get(
    `https://localhost:7153/api/aadhaar/${employeeEmail}/${aadhaar} `
    );
    console.log("12423 ", data);
    
    
    // toast.success("Login successfully");
    
    setUsers(email);
    // navigate("/");
  } catch (err) {
    console.log(err?.response?.data?.message);
    // toast.error("Something went wrong login through google account");
    }
  };

   useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get(`https://localhost:7153/api/employee/${employeeEmail}`);
            console.log(response.data)
            // setLocations(response.data);
            return response.data;   
          } catch (error) {
            console.error(error);
          }
        };
  
  
        fetchData().then((res) => {
          // setLocations(res);
          console.log(res);
          setUsers(res);
        })

        // localStorage.setItem("employeemail", employeeName);
      }, []);
      const handleSubmit2 = async (e) => {
        e.preventDefault();
        try {
          console.log(otp)
          const { data1 } = await axios.get(
          `https://localhost:7153/api/aadhaar/all/${employeeEmail}/${otp} `
          );
          console.log("data ", data1);
          
          
          // toast.success("Login successfully");
          
          // setUsers(email);
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
<section class="">
  {/* <!-- Jumbotron --> */}
  
  <div class="px-4 py-5 px-md-5 text-center text-lg-start" style={{backgroundColor:'hsl(0, 0%, 96%)'}}>
    <div class="container">
      <div class="row gx-lg-5 align-items-center">
        <div class="col-lg-6 mb-5 mb-lg-0">
          <img src={Aaadhar}/>
          
        </div>

        <div class="col-lg-6 mb-5 mb-lg-0">
          <div class="card">
            <div class="card-body py-5 px-md-5">
              <form>
                {/* <!-- 2 column grid layout with text inputs for the first and last names --> */}
                

                {/* <!-- Email input --> */}
                <div class="form-outline mb-4">
                <label class="form-label" for="form3Example3">Enter your Aadhar number</label>
                  <input type="number" id="form3Example3" class="form-control" onChange={(e) => setaadhar(e.target.value)} />
                  
                </div>

                <div class="d-flex justify-content-center mb-4">
                  <button class="btn btn-primary" onClick={handleSubmit} id="form2Example33">SEND OTP</button>
                  
                </div>

                {/* <!-- Password input --> */}
                <div class="form-outline mb-4">
                <label class="form-label" for="form3Example4">Enter OTP</label>
                  <input type="number" id="form3Example4" class="form-control"  onChange={(e) => setOtp(e.target.value)} />
                  
                </div>

                {/* <!-- Checkbox --> */}
                

                {/* <!-- Submit button --> */}
                <div class="d-flex justify-content-center mb-4">
                <button onClick={handleSubmit2} class="btn btn-primary btn-block mb-4">
                  Submit
                </button>
                </div>
               

                {/* <!-- Register buttons --> */}
               
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
  

    </div>
  )
}

export default Aadhar
