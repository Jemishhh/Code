import React, {useEffect, useState} from 'react'
import axios from "axios"
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



const Profile = () => {
    const [users, setUsers] = useState([]);
    const {email} = useParams()
    const [employeeEmail,setEmployeeEmail]= useState("")
    const [aadhaarUser, setAadhaarUser] = useState({});
    console.log(email)
    const navigate = useNavigate()
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


    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get(`https://localhost:7153/api/employee/${email}`);
            // const anotherRes = await axios.get(`https://localhost:7153/api/aadhaar/aadhaar/${email}`);
            // console.log("Another response is : ", anotherRes.data);
            console.log(response.data)
            // setLocations(response.data);
            return response.data;   
          } catch (error) {
            console.error(error);
          }
        };

        const fetchDataAadharr = async () => {
          try {
            // const response = await axios.get(`https://localhost:7153/api/employee/${email}`);
            const anotherRes = await axios.get(`https://localhost:7153/api/aadhaar/aadhaar/${email}`);
            console.log("Another response is : ", anotherRes.data);
            // console.log(anotherRes.data)
            // setLocations(response.data);
            return anotherRes.data;   
          } catch (error) {
            return {}
            console.error(error);
          }
        };

        fetchDataAadharr().then(res => {
          setAadhaarUser(res)
        }).catch(err => {
          setAadhaarUser({})
        })
  
  
        fetchData().then((res) => {
          // setLocations(res);
          // console.log(res);
          setUsers(res);
        })

        // localStorage.setItem("employeemail", employeeName);
      }, [employeeEmail]);
      const handleClick = (employeeEmail) => {
        setEmployeeEmail(employeeEmail);
        navigate(`/AadharVerification/${employeeEmail}`);
      }




      const Green = async (e) => {
        e.preventDefault();
        try {
          console.log(email)
          const { data1 } = await axios.get(
            `https://localhost:7153/api/flags/${employeeEmail}/green`,
            
          );
          console.log("data ", data1);
         
          // toast.success("Login successfully");
          
          
          // navigate("/");
        } catch (err) {
          console.log(err);
          // toast.error("Something went wrong login through google account");
        }
      };

    
    const Yellow = async (e) => {
      e.preventDefault();
      try {
        console.log(employeeEmail)
        const { data1 } = await axios.get(
          `https://localhost:7153/api/flags/${email}/yellow`,
          
        );
        console.log("data ", data1);
       
        // toast.success("Login successfully");
        
        
        // navigate("/");
      } catch (err) {
        console.log(err);
        // toast.error("Something went wrong login through google account");
      }
    };
  

  const Red = async (e) => {
    e.preventDefault();
    try {
      console.log(employeeEmail)
      const { data1 } = await axios.get(
        `https://localhost:7153/api/flags/${email}/red`,
        
      );
      console.log("data ", data1);
     
      // toast.success("Login successfully");
      
      
      // navigate("/");
    } catch (err) {
      console.log(err);
      // toast.error("Something went wrong login through google account");
    }
  };




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
                <h5 className="my-3">{users.employeeName}</h5>
                
                <p className="text-muted mb-4">{users.address}</p>
                <div className="d-flex justify-content-center mb-2">
                  
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
            <div >
<button  className='btn btn-primary m-3' onClick={() => handleClick(users.employeeEmail)}>Verify Aaadhar</button>
<button type="button"  className="btn btn-outline-secondary m-3"  >Delete</button>
<button type="button" onClick={Green} className="btn btn-outline-success m-3" >Green Flag</button>
<button type="button" onClick={Red} className="btn btn-outline-danger m-3">Red Flag</button>
<button type="button" onClick={Yellow} className="btn btn-outline-warning m-3">Yellow Flag</button>
    </div>
    <br></br>
<h1 className='ml-3'>Aaadhar Details</h1>
    <div className="col-lg-12">
            <div className="card mb-4">
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">DOB</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{aadhaarUser && aadhaarUser.dob}</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Gender</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{aadhaarUser && aadhaarUser.gender}</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">House</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{aadhaarUser && aadhaarUser.house}</p>
                  </div>
                </div>
                <hr />
                
                  
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Street</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{aadhaarUser && aadhaarUser.street}</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Sub District</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{aadhaarUser && aadhaarUser.subdist}</p>
                  </div>
                </div>
                <hr />

                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">City</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{aadhaarUser && aadhaarUser.vtc}</p>
                  </div>
                </div>
                <hr />
  
                
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

export default Profile
