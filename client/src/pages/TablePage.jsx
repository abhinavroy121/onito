import React, { useEffect, useState } from 'react'
import DataTable from 'datatables.net-dt';
import 'datatables.net-responsive-dt';
import { getApi } from '../apiService';
import "jquery/dist/jquery.min.js";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import "datatables.net-buttons/js/dataTables.buttons.js";
import "datatables.net-buttons/js/buttons.colVis.js";
import "datatables.net-buttons/js/buttons.flash.js";
import "datatables.net-buttons/js/buttons.html5.js";
import "datatables.net-buttons/js/buttons.print.js";
import $ from "jquery";
import { useNavigate } from 'react-router-dom';
 
const TablePage = () => {
const [loading, setLoading] = useState(false)
const [tableData,setTableData] = useState([])
const navigate = useNavigate()
useEffect(()=> {
  getData()
   if(tableData) {
    if (!$.fn.DataTable?.isDataTable("#table")) {
      $(document).ready(function () {
        setTimeout(function () {
          $("#table").DataTable({
            pagingType: "full_numbers",
            pageLength: 20,
            processing: true,
            dom: "Bfrtip",
            select: {
              style: "single",
            },

            buttons: [
              {
                extend: "pageLength",
                className: "btn btn-secondary bg-secondary",
              },
              {
                extend: "copy",
                className: "btn btn-secondary bg-secondary",
              },
              {
                extend: "csv",
                className: "btn btn-secondary bg-secondary",
              },
              {
                extend: "print",
                customize: function (win) {
                  $(win.document.body).css("font-size", "10pt");
                  $(win.document.body)
                    .find("table")
                    .addClass("compact")
                    .css("font-size", "inherit");
                },
                className: "btn btn-secondary bg-secondary",
              },
            ],

            fnRowCallback: function (
              nRow,
              aData,
              iDisplayIndex,
              iDisplayIndexFull
            ) {
              var index = iDisplayIndexFull + 1;
              $("td:first", nRow).html(index);
              return nRow;
            },

            lengthMenu: [
              [10, 20, 30, 50, -1],
              [10, 20, 30, 50, "All"],
            ],
            columnDefs: [
              {
                targets: 0,
                render: function (data, type, row, meta) {
                  return type === "export" ? meta.row + 1 : data;
                },
              },
            ],
          });
        }, 1000);
      });
    }
   }
},[])



 async function getData () {
  setLoading(true)
   const data = await getApi()
   setLoading(false)
   setTableData(data)
   console.log(data)
   
 }


 
 
//   let table = new DataTable('#table', {

//       paging: false,
  
    
   
//       // destroy: true,
//       searching: false
   
// });

 
  return (
    <div>
     <div className="text-left m-left">
      <span className="py-4 px-6 bg-green-200 rounded-xl mb-5 mt-1 cursor-pointer" onClick={()=>navigate("/")}>Add Patient</span>
     </div>
   {loading && <h2 className='text-2xl font-lg text-bold align-center'>Loading Page...</h2>}
   {tableData.length <1 && <h3>No Data Avaliable</h3>}
  {tableData && tableData.length >0 && <table id="table" className="table align-items-center justify-content-center mb-0">
          <thead>
            <tr className=''>
       
            {tableData[0]?._id && <th>ID</th>}
              {tableData[0]?.name && <th>Patient Name</th>}
              {tableData[0]?.age && <th>Age/Sex</th>}
              {tableData[0]?.email && <th>Email</th>}
              {tableData[0]?.mobile && <th>Mobile</th>}
              {tableData[0]?.issueid && <th>Card Type</th>}
              {tableData[0]?.govtid && <th>Govt. ID</th>}
              {tableData[0]?.maritalStatus && <th>Marital Status</th>}
              {tableData[0]?.bloodgroup && <th>Blood Group</th>}
              {tableData[0]?.occupation && <th>Occupation</th>}
              {tableData[0]?.religion && <th>Religion</th>}
              {tableData[0]?.address && <th>Address</th>}
              {tableData[0]?.city && <th>City</th>}
              {tableData[0]?.pincode && <th>PinCode</th>}
              {tableData[0]?.state && <th>State</th>}
              {tableData[0]?.country && <th>Country</th>}
              {tableData[0]?.nationality && <th>Nationality</th>}
              </tr>
       </thead>
       <tbody>
          {tableData && tableData?.map((item,index)=> (
            <tr key={item._id}>
              <td>{index +1}</td>
              <td>{item?.name}</td>
              <td>{item?.age} / {item?.sex}</td>
              <td>{item?.email}</td>
              <td>{item?.mobile}</td>
              <td>{item?.issueid}</td>
              <td>{item?.govtid}</td>
              <td>{item?.maritalStatus}</td>
              <td>{item?.bloodgroup}</td>
              <td>{item?.occupation}</td>
              <td>{item?.religion}</td>
              <td>{item?.address}</td>
              <td>{item?.city}</td>
              <td>{item?.pincode}</td>
              <td>{item?.state}</td>
              <td>{item?.country}</td>
              <td>{item?.nationality}</td>
            </tr>
          ))}
       </tbody>
          </table>}
    </div>
  )
}

export default TablePage