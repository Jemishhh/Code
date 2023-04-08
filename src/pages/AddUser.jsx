import React from 'react'
import { Link } from 'react-router-dom'

const AddUser = () => {
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
            <span className="text-primary">Employer Details</span>
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
                  <input type="text" id="form3Example3" className="form-control" />
                  <label className="form-label" for="form3Example3">Name</label>
                </div>

                <div className="form-outline mb-4">
                  <input type="email" id="form3Example3" className="form-control" />
                  <label className="form-label" for="form3Example3">Email address</label>
                </div>
                
                <div className="form-outline mb-4">
                  <input type="number" id="form3Example3" className="form-control" />
                  <label className="form-label" for="form3Example3">Mobile No.</label>
                </div>
                <div className="form-outline mb-4">
                  <textarea type="text" id="form3Example3" className="form-control" />
                  <label className="form-label" for="form3Example3">Address</label>
                </div>

                <div className="form-outline mb-4">
                  <input type="text" id="form3Example3" className="form-control" />
                  <label className="form-label" for="form3Example3">Previous Company (If Any)</label>
                </div>
                <div className="form-outline mb-4">
                  <input type="text" id="form3Example3" className="form-control" />
                  <label className="form-label" for="form3Example3">Aadhar Number</label>
                </div>
              
                <div className="form-outline mb-4">
                  <input type="text" id="form3Example3" className="form-control" />
                  <label className="form-label" for="form3Example3">PAN Number</label>
                </div>

              
                <div className="form-outline mb-4">
                  <input type="file" id="form3Example3" className="form-control" />
                  <label className="form-label" for="form3Example3">Photo</label>
                </div>

                
                {/* <!-- Submit button --> */}
                <Link to="/SignUp" className="btn btn-primary btn-block mb-4">
          Sign Up
          </Link>

                
               
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* <!-- Jumbotron --> */}
</section>

    </div>
    </div>
  )
}

export default AddUser
