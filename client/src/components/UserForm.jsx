import React from "react";
import {useForm} from "react-hook-form";
import * as yup from "yup";
import "yup-phone";
import {yupResolver} from "@hookform/resolvers/yup";
import { postApi } from "../apiService";
import { useNavigate } from "react-router-dom";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
const validationSchema = yup.object().shape({
    name: yup.string().required("Name is required"),
    age: yup.string().required("Age is required"),
    sex: yup.string().required("Sex is required"),
    mobile: yup.string().matches(phoneRegExp, 'phone number is not valid').min(10).max(10),
    govtid: yup.string().when("issueid", (issueid, schema)=> {
        if(issueid== "aadhar") return schema.min(12).max(12)
        if(issueid == "pan") return schema.min(10).max(10)
    }),
    email: yup.string().email('Invalid email'),
    contact: yup.string().matches(phoneRegExp, 'phone number is not valid').min(10).max(10),

});
const UserForm = () => {

    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm({resolver: yupResolver(validationSchema)});

    function formSubmit(data) {
        const payload = JSON.stringify(data)
        console.log(payload);
        postApi(payload).then(()=> {
            navigate("/usertable")
        })
    }

    return (
        <div className="h-auto bg-gray-300">
            <p  className="text-2xl font-bold text-left ml-3 mb-5 border-b-2">User Information Form</p>
            <form onSubmit={handleSubmit(formSubmit)}>
                <div >
                    <p className="text-xl text-bold text-left ml-3 border-b-2">
                        Personal Details
                    </p>
                    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        <div className="w-2/3  my-4 mx-auto flex flex-col text-left">
                            <label htmlFor="name">Name<span className="text-red-500 font-bold ml-1">*</span></label>
                            <input
                                className="w-full shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                type="text"
                                {...register("name", {required: true})}
                            />
                            <p className="text-red-400">
                                {errors.name?.message}
                            </p>
                        </div>
                        <div className="w-2/3 my-4 mx-auto flex flex-col text-left ">
                            <label htmlFor="age">Date of Birth or Age<span className="text-red-500 font-bold ml-1">*</span></label>
                            <input
                                className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                type="text"
                                {...register("age", {required: true})}
                            />
                            <p className="text-red-400">
                                {errors.age?.message}
                            </p>
                        </div>
                        <div className="w-2/3 my-4 mx-auto flex flex-col text-left">
                            <label htmlFor="sex">Sex<span className="text-red-500 font-bold ml-1">*</span></label>
                            <select
                                className="shadow  border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                type="text"
                                {...register("sex", {required: true})}
                            >
                                <option value="" hidden>Select here</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="others">others</option>
                            </select>
                            <p className="text-red-400">
                                {errors.sex?.message}
                            </p>
                        </div>
                        <div className="w-2/3 my-4 mx-auto flex flex-col text-left ">
                            <label htmlFor="mobile">Mobile</label>
                            <input
                                className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                type="text"
                                {...register("mobile")}
                            />
                             <p className="text-red-400">
                                {errors.mobile?.message}
                            </p>
                        </div>
                        <div className="w-2/3 my-4 mx-auto flex flex-col text-left ">
                            <label htmlFor="issueid">Govt Issued ID</label>
                            <span>
                            <select
                            className="py-1.5 rounded px-2 mr-1"
                                type="text"
                                {...register("issueid", {required: true})}
                            >
                                 <option value="" hidden>Select here</option>
                                <option value="aadhar">Aadhar</option>
                                <option value="pan">PAN</option>
                            </select>

                            <input
                                className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                type="text"
                                {...register("govtid")}
                            />
                            <p className="text-red-400">
                                {errors.govtid?.message}
                            </p>
                            </span>
                        </div>
                    </div>
                    <p className="text-xl text-bold text-left ml-3 border-b-2">
                        Contact Details
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        <div className="w-2/3 my-4 mx-auto flex flex-col text-left ">
                            <label htmlFor="guardian">guardian</label>
                           <span>
                           <select  className="py-1.5 rounded px-2 mr-1"
                                type="text"
                                {...register("guardianlabel")}
                            >
                                 <option value="" hidden>Select here</option>
                                <option value="mr">Mr</option>
                                <option value="mrs">Mrs</option>
                                <option value="ms">Ms</option>
                            </select>
                            <input
                                className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                type="text"
                                {...register("guardian")}
                            />
                           </span>
                        </div>

                        <div className="w-2/3 my-4 mx-auto flex flex-col text-left ">
                            <label htmlFor="email">email</label>
                            <input
                                className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                type="text"
                                {...register("email")}
                            />
                            <p>{errors.email?.message}</p>
                        </div>
                        <div className="w-2/3 my-4 mx-auto flex flex-col text-left ">
                            <label htmlFor="contact">contact</label>
                            <input
                                className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                type="text"
                                {...register("contact")}
                            />
                        </div>
                    </div>
                    <p  className="text-xl text-bold text-left ml-3 border-b-2">Address Details</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        <div className="w-2/3 my-4 mx-auto flex flex-col text-left ">
                            <label htmlFor="address">address</label>
                            <input
                                className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                type="text"
                                {...register("address")}
                            />
                        </div>
                        <div className="w-2/3 my-4 mx-auto flex flex-col text-left ">
                            <label htmlFor="state">state</label>
                            <input
                                className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                type="text"
                                {...register("state")}
                            />
                        </div>
                        <div className="w-2/3 my-4 mx-auto flex flex-col text-left ">
                            <label htmlFor="city">city</label>
                            <input
                                className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                type="text"
                                {...register("city")}
                            />
                        </div>
                        <div className="w-2/3 my-4 mx-auto flex flex-col text-left ">
                            <label htmlFor="country">country</label>
                            <input
                                className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                type="text"
                                {...register("country")}
                            />
                        </div>
                        <div className="w-2/3 my-4 mx-auto flex flex-col text-left ">
                            <label htmlFor="pincode">pincode</label>
                            <input
                                className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                type="text"
                                {...register("pincode")}
                            />
                        </div>
                    </div>
                    <p  className="text-xl text-bold text-left ml-3 border-b-2">Other Details</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        <div className="w-2/3 my-4 mx-auto flex flex-col text-left ">
                            <label htmlFor="occupation">occupation</label>
                            <input
                                className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                type="text"
                                {...register("occupation")}
                            />
                        </div>
                        <div className="w-2/3 my-4 mx-auto flex flex-col text-left ">
                            <label htmlFor="religion">Religion</label>
                            <input
                                className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                type="text"
                                {...register("religion")}
                            />
                        </div>
                        <div className="w-2/3 my-4 mx-auto flex flex-col text-left ">
                            <label htmlFor="maritalStatus">maritalStatus</label>
                            <select  type="text"
                            className="shadow  border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                {...register("maritalStatus")}
                                 >
                                    <option value="" hidden>Select here</option>
                                <option value="single">Single</option>
                                <option value="married">Married</option>
                            </select>
                           
                        </div>
                        <div className="w-2/3 my-4 mx-auto flex flex-col text-left ">
                            <label htmlFor="bloodgroup">bloodgroup</label>
                            <input
                                className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                type="text"
                                {...register("bloodgroup")}
                            />
                        </div>
                        <div className="w-2/3 my-4 mx-auto flex flex-col text-left ">
                            <label htmlFor="nationality">nationality</label>
                            <input
                                className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                type="text"
                                {...register("nationality")}
                            />
                        </div>
                    </div>
                    <div className="w-60 flex gap-4">
                        <button >Cancel</button>
                        <input className="bg-green-300 px-2 py-1 rounded cursor-pointer" type="submit" />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default UserForm;
