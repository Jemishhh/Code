import React from 'react'
import Aaadhar from "../components/1.gif"


const Aadhar = () => {
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
                  <input type="number" id="form3Example3" class="form-control" />
                  <label class="form-label" for="form3Example3">Enter your Aadhar number</label>
                </div>

                <div class="d-flex justify-content-center mb-4">
                  <button class="btn white"  id="form2Example33">SEND OTP</button>
                  
                </div>

                {/* <!-- Password input --> */}
                <div class="form-outline mb-4">
                  <input type="number" id="form3Example4" class="form-control" />
                  <label class="form-label" for="form3Example4">Enter OTP</label>
                </div>

                {/* <!-- Checkbox --> */}
                

                {/* <!-- Submit button --> */}
                <button type="submit" class="btn btn-primary btn-block mb-4">
                  Submit
                </button>

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
