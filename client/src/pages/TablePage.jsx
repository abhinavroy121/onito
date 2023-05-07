import React, {useEffect, useState} from "react";
import DataTable from "datatables.net-dt";
import "datatables.net-responsive-dt";
import {getApi} from "../apiService";

// import $ from "jquery";
import {useNavigate} from "react-router-dom";

const TablePage = () => {
    const [loading, setLoading] = useState(false);
    const [tableData, setTableData] = useState([]);
    const navigate = useNavigate();
    let table = new DataTable("#myTable");
    useEffect(() => {
        getData();
        // if (tableData) {
        //     if (!$.fn.DataTable?.isDataTable("#table")) {
        //         $(document).ready(function () {
        //             setTimeout(function () {
        //                 $("#table").DataTable({
        //                     pagingType: "full_numbers",
        //                     pageLength: 20,
        //                     processing: true,
        //                     dom: "Bfrtip",
        //                     select: {
        //                         style: "single",
        //                     },

        //                     buttons: [
        //                         {
        //                             extend: "pageLength",
        //                             className: "btn btn-secondary bg-secondary",
        //                         },
        //                         {
        //                             extend: "copy",
        //                             className: "btn btn-secondary bg-secondary",
        //                         },
        //                         {
        //                             extend: "csv",
        //                             className: "btn btn-secondary bg-secondary",
        //                         },
        //                         {
        //                             extend: "print",
        //                             customize: function (win) {
        //                                 $(win.document.body).css(
        //                                     "font-size",
        //                                     "10pt"
        //                                 );
        //                                 $(win.document.body)
        //                                     .find("table")
        //                                     .addClass("compact")
        //                                     .css("font-size", "inherit");
        //                             },
        //                             className: "btn btn-secondary bg-secondary",
        //                         },
        //                     ],

        //                     fnRowCallback: function (
        //                         nRow,
        //                         aData,
        //                         iDisplayIndex,
        //                         iDisplayIndexFull
        //                     ) {
        //                         var index = iDisplayIndexFull + 1;
        //                         $("td:first", nRow).html(index);
        //                         return nRow;
        //                     },

        //                     lengthMenu: [
        //                         [10, 20, 30, 50, -1],
        //                         [10, 20, 30, 50, "All"],
        //                     ],
        //                     columnDefs: [
        //                         {
        //                             targets: 0,
        //                             render: function (data, type, row, meta) {
        //                                 return type === "export"
        //                                     ? meta.row + 1
        //                                     : data;
        //                             },
        //                         },
        //                     ],
        //                 });
        //             }, 1000);
        //         });
        //     }
        // }
    }, []);

    async function getData() {
        setLoading(true);
        const data = await getApi();
        setLoading(false);
        setTableData(data);
        console.log(data);
    }

    return (
        <div>
            <div className="text-left m-left mt-4">
                <span
                    className=" py-4 px-6 bg-black text-white rounded-xl  cursor-pointer"
                    onClick={() => navigate("/")}
                >
                    Add Patient
                </span>
            </div>
            {loading && (
                <h2 className="text-2xl font-lg text-bold align-center">
                    Loading Page...
                </h2>
            )}
            {tableData.length < 1 && <h3>No Data Avaliable</h3>}

            <div className="my-8">
                {tableData && tableData.length > 0 && (
                    <table
                        id="myTable"
                        className="display align-items-center justify-content-center"
                    >
                        <thead>
                            <tr className="">
                                {tableData[0]?._id && <th>ID</th>}
                                {tableData[0]?.name && <th>Patient Name</th>}
                                {tableData[0]?.age && <th>Age/Sex</th>}
                                {tableData[0]?.email && <th>Email</th>}
                                {tableData[0]?.mobile && <th>Mobile</th>}
                                {tableData[0]?.issueid && <th>Card Type</th>}
                                {tableData[0]?.govtid && <th>Govt. ID</th>}
                                {tableData[0]?.maritalStatus && (
                                    <th>Marital Status</th>
                                )}
                                {tableData[0]?.bloodgroup && (
                                    <th>Blood Group</th>
                                )}
                                {tableData[0]?.occupation && (
                                    <th>Occupation</th>
                                )}
                                {tableData[0]?.religion && <th>Religion</th>}
                                {tableData[0]?.address && <th>Address</th>}
                                {tableData[0]?.city && <th>City</th>}
                                {tableData[0]?.pincode && <th>PinCode</th>}
                                {tableData[0]?.state && <th>State</th>}
                                {tableData[0]?.country && <th>Country</th>}
                                {tableData[0]?.nationality && (
                                    <th>Nationality</th>
                                )}
                            </tr>
                        </thead>
                        <tbody>
                            {tableData &&
                                tableData?.map((item, index) => (
                                    <tr key={item._id}>
                                        <td>{index + 1}</td>
                                        <td>{item?.name}</td>
                                        <td>
                                            {item?.age} / {item?.sex}
                                        </td>
                                        {item?.email ? <td>{item?.email}</td> : <td>-</td>}
                                        {item?.mobile ? (
                                            <td>{item?.mobile}</td>
                                        ) : <td>-</td>}
                                        {item?.issueid ? (
                                            <td>{item?.issueid}</td>
                                        ) : <td>-</td>}
                                        {item?.govtid ? (
                                            <td>{item?.govtid}</td>
                                        ) : <td>-</td>}
                                        {item?.maritalStatus ? (
                                            <td>{item?.maritalStatus}</td>
                                        ):  <td>-</td>}
                                        {item?.bloodgroup ? (
                                            <td>{item?.bloodgroup}</td>
                                        ) : <td>-</td>}
                                        {item?.occupation ? (
                                            <td>{item?.occupation}</td>
                                        ): <td>-</td>}
                                        {item?.religion ? (
                                            <td>{item?.religion}</td>
                                        ) : <td>-</td>}
                                        {item?.address ? (
                                            <td>{item?.address}</td>
                                        ) : <td>-</td>}
                                        {item?.city ? <td>{item?.city}</td> : <td>-</td>}
                                        {item?.pincode ? (
                                            <td>{item?.pincode}</td>
                                        ) : <td>-</td>}
                                        {item?.state ? <td>{item?.state}</td> : <td>-</td>}
                                        {item?.country ? (
                                            <td>{item?.country}</td>
                                        ) : <td>-</td>}
                                        {item?.nationality ? (
                                            <td>{item?.nationality}</td>
                                        ) : <td>-</td>}
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
};

export default TablePage;
