
import React, {useEffect, useState} from 'react'
import SignUp from './SignUp'
import axios from "axios"
import { useNavigate } from 'react-router-dom';
import "@fortawesome/fontawesome-free/css/all.min.css";



function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
 


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      
      const { data } = await axios.post(
        "https://localhost:7153/api/authentication/login",
        {
          "email" : username,
          "password" : password,
        }
      );
      console.log("data ", data);
      localStorage.setItem("email", username);
      navigate('/company');
      // toast.success("Login successfully");
      
      setUser(email);
      // navigate("/");
    } catch (err) {
      console.log(err?.response?.data?.message);
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
            The best offer <br />
            <span className="text-primary">for your business</span>
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
                  <h3 className='h2 text-center pb-3 '>Login</h3>
                  
                </div>

                {/* <!-- Email input --> */}
                <div className="form-outline mb-4">
                <label className="form-label" for="form3Example3">Email address</label>
                  <input type="email" id="form3Example3" className="form-control" onChange={(e) => setUsername(e.target.value)}/>
                  
                </div>

                {/* <!-- Password input --> */}
                <div className="form-outline mb-4">
                <label className="form-label" for="form3Example4">Password</label>
                  <input type="password" id="form3Example4" className="form-control" onChange={(e) => setPassword(e.target.value)}/>
                  
                </div>

                {/* <!-- Checkbox --> */}
                {/* <div className="form-check d-flex justify-content-center mb-4">
                  <input className="form-check-input me-2" type="checkbox" value="" id="form2Example33" checked />
                  <label className="form-check-label" for="form2Example33">
                    Subscribe to our newsletter
                  </label>
                </div> */}

                {/* <!-- Submit button --> */}
                <div class="d-flex justify-content-center mb-4">
                <button className="btn btn-primary btn-block mb-4" onClick={handleSubmit}> Sign Up</button>

                </div>  
       

                {/* <!-- Register buttons --> */}
                <div className="text-center">
                  <p>or sign up with:</p>
                  <button type="button" className="btn btn-link btn-floating mx-1">
                    <i className="fab fa-facebook-f"></i>
                  </button>

                  <button type="button" className="btn btn-link btn-floating mx-1">
                    <i className="fab fa-google"></i>
                  </button>

                  <button type="button" className="btn btn-link btn-floating mx-1">
                    <i className="fab fa-twitter"></i>
                  </button>

                  <button type="button" className="btn btn-link btn-floating mx-1">
                    <i className="fab fa-github"></i>
                  </button>
                </div>
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

export default Login