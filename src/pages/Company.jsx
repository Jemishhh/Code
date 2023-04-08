import React from 'react'
import { Link } from 'react-router-dom'


function Company() {
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
            <input type="text" id="form3Example3" className="form-control" />
            <label className="form-label" for="form3Example3">Username</label>
          </div>
          

          {/* <!-- Email input --> */}
          <div className="form-outline mb-4">
            <input type="text" id="form3Example3" className="form-control" />
            <label className="form-label" for="form3Example3">Company name</label>
          </div>

          {/* <!-- Password input --> */}
          <div className="form-outline mb-4">
            <input type="text" id="form3Example4" className="form-control" />
            <label className="form-label" for="form3Example4">Website name</label>
          </div>

          <div className="form-outline mb-4">
            <textarea id="form3Example4" className="form-control" />
            <label className="form-label" for="form3Example4">Address</label>
          </div>
        
         

          {/* <!-- Submit button --> */}
          {/* <button type="submit" className="btn btn-primary btn-block mb-4">
            Add User
          </button> */}
          <Link to="/SignUp" className="btn btn-primary btn-block mb-4">
          ADD DETAILS
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
{/* <!-- Section: Design Block --> */}
  </div>


  )
}


    

export default Company
