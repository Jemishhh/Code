import React, {useEffect, useState} from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Selection, Inject, Edit, Toolbar, Sort, Filter } from '@syncfusion/ej2-react-grids';
import { customersData, customersGrid } from '../data/dummy';
import { Header } from '../components';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const Customers = () => {
  const selectionsettings = { persistSelection: true };
  const toolbarOptions = ['Delete'];
  const editing = { allowDeleting: false, allowEditing: false };
  
  const [users, setUsers] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    const email = localStorage.getItem("email")
    
      console.log(email)
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://localhost:7153/api/employee/all/${email}`);
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
    }).catch((error) => console.log(error));
  }, []);

  const handleClick = (email) => {
    navigate(`/user/${email}`);
  }

  return (
    <>
      <div>
     
     <div className="table-responsive">
       <table className="table table-striped table-sm m-2">
         <thead>
           <tr>
             <th>Name</th>
             <th>Email</th>
             <th>Mobile</th>
             <th>Address</th>
             <th>Flags</th>
           </tr>
         </thead>
         <tbody>
         {
         users &&  users.map((obj)=> 
              <tr key={obj.id}>
                <td onClick={() => handleClick(obj.employeeEmail)}>{obj?.employeeName}</td>
                <td>{obj?.employeeEmail}</td>
                <td>{obj?.mobile}</td>
                <td>{obj?.address}</td>
                <td>{obj?.flags}</td>
              </tr>
            )
         }
          
           </tbody>
           </table>
           </div>


           <div>

           </div>
          
 



</div>

    </>
  );
};

export default Customers;
