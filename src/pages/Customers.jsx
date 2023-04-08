import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Selection, Inject, Edit, Toolbar, Sort, Filter } from '@syncfusion/ej2-react-grids';

import { customersData, customersGrid } from '../data/dummy';
import { Header } from '../components';

function handleActionBegin(args) {
  if (args.requestType === 'beginedit' && args.column.field === 'id') {
    // Open a new tab with the user's details
    console.log("clickec");
    const userId = args.rowData.id;
    window.open(`/users/${userId}`);
  }
}
const handleSubmit=() => {
    
}

const Customers = () => {
  const selectionsettings = { persistSelection: true };
  const toolbarOptions = ['Delete'];
  const editing = { allowDeleting: false, allowEditing: false };

  return (
    <>
      <div>
     
     <div class="table-responsive">
       <table class="table table-striped table-sm">
         <thead>
           <tr>
             <th>#</th>
             <th>Header</th>
             <th>Header</th>
             <th>Header</th>
             <th>Header</th>
           </tr>
         </thead>
         <tbody>
           <tr>
             <td><btn onClick={handleSubmit}> 1,001</btn></td>
             <td>Lorem</td>
             <td>ipsum</td>
             <td>dolor</td>
             <td>sit</td>
           </tr>
           <tr>
             <td><btn  > 1,002</btn></td>
             <td>Lorem</td>
             <td>ipsum</td>
             <td>dolor</td>
             <td>sit</td>
           </tr>
           </tbody>
           </table>
           </div>
          
 



</div>
   
    </>
  );
};

export default Customers;
