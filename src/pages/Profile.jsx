import React, {useEffect, useState} from 'react'
import axios from "axios"
import { useParams } from 'react-router-dom';


const Profile = () => {
    const [users, setUsers] = useState([]);
    const {email} = useParams()
    console.log(email)

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get(`https://localhost:7153/api/employee/${email}`);
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
      }, []);


  return (
    <div>
 <div>
      <section className="background-color: #eee;" >
      <div className="container py-5">
        <div className="row">
          <div className="col">
            <nav aria-label="breadcrumb" className="bg-light rounded-3 p-3 mb-4">
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item"><a href="#">Home</a></li>
                <li className="breadcrumb-item"><a href="#">User</a></li>
                <li className="breadcrumb-item active" aria-current="page">User Profile</li>
              </ol>
            </nav>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4">
            <div className="card mb-4">
              <div className="card-body text-center">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar"
                  className="rounded-circle img-fluid" styles="width: 150px;" />
                <h5 className="my-3">John Smith</h5>
                <p className="text-muted mb-1">Full Stack Developer</p>
                <p className="text-muted mb-4">Bay Area, San Francisco, CA</p>
                <div className="d-flex justify-content-center mb-2">
                  <button type="button" className="btn btn-primary">Follow</button>
                  <button type="button" className="btn btn-outline-primary ms-1">Message</button>
                </div>
              </div>
            </div>
            
          </div>
          <div className="col-lg-8">
            <div className="card mb-4">
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Full Name</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{users.employeeName}</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Email</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{users.email}</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Phone</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{users.mobile}</p>
                  </div>
                </div>
                <hr />
                
                  
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Address</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{users.address}</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Pan</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{users.pan}</p>
                  </div>
                </div>
                <hr />

                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Previous Company</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{users.previousCompany}</p>
                  </div>
                </div>
                <hr />

              </div>
            </div>
         
          </div>
        </div>
      </div>

    </section>
  
  </div >

    </div>
  )
}

export default Profile
