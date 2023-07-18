import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import Input from '../Components/ReusableComponents/Input';
import { useNavigate } from "react-router-dom";
import { updateUserProfile } from '../features/user/userSlice';

const Profile = () => {
    const dispatch = useDispatch();
    const {user, Token} = useSelector((state)=>state.user)

    let schema = Yup.object().shape({
      firstName: Yup.string().required("First Name is Required"),
      lastName: Yup.string().required("Last Name is Required"),
      email: Yup.string()
        .email("Email Should be Valid")
        .required("Email is Required"),
      mobile: Yup.number().required("Mobile Number is Required"),
    });

    const formik = useFormik({
      enableReinitialize: true,
      initialValues: {
        firstName: user?.firstName || "",
        lastName:  user?.lastName || "",
        email: user?.email || "",
        mobile: user?.mobile || "",
      },
      validationSchema: schema,
      onSubmit: (values) => {
        dispatch(updateUserProfile({body:values, Token : Token}))
      },
    });
 return (
   <div className="flex flex-col flex-wrap justify-center items-center">
     <p className="font-roboto font-normal text-[#fff] text-2xl text-center my-6">
       You can update your Profile
     </p>

     <form
       onSubmit={formik.handleSubmit}
       style={{
         background: "linear-gradient(180deg, #ACE7FF 0%, #53FFB8 100%)",
       }}
       className="flex flex-col flex-no-wrap justify-center items-center min-[320px]:w-[280px] sm:w-[360px] lg:w-[500px] rounded-[25px] m-4 pt-6 "
     >
       <Input
         className="bg-[#0D103C] min-[320px]:w-[250px] sm:w-[300px] lg:w-[400px] h-[75px] text-[#fff] px-4  m-4"
         id="firstName"
         type="text"
         placeholder="First Name"
         name="firstName"
         value={formik.values.firstName}
         onChange={formik.handleChange("firstName")}
         onBlur={formik.handleBlur("firstName")}
       />
       <div className="text-black font-bold text-lg">
         {formik.touched.firstName && formik.errors.firstName ? (
           <div>{formik.errors.firstName}</div>
         ) : null}
       </div>
       <Input
         className="bg-[#0D103C] min-[320px]:w-[250px] sm:w-[300px] lg:w-[400px] h-[75px] text-[#fff] px-4  m-4"
         id="lastName"
         type="text"
         placeholder="Last Name"
         name="lastName"
         value={formik.values.lastName}
         onChange={formik.handleChange("lastName")}
         onBlur={formik.handleBlur("lastName")}
       />
       <div className="text-black font-bold text-lg">
         {formik.touched.lastName && formik.errors.lastName ? (
           <div>{formik.errors.lastName}</div>
         ) : null}
       </div>

       <Input
         className="bg-[#0D103C] min-[320px]:w-[250px] sm:w-[300px] lg:w-[400px] h-[75px] text-[#fff] px-4  m-4"
         id="email"
         type="text"
         placeholder="Email"
         name="email"
         value={formik.values.email}
         onChange={formik.handleChange("email")}
         onBlur={formik.handleBlur("email")}
       />
       <div className="text-black font-bold text-lg">
         {formik.touched.email && formik.errors.email ? (
           <div>{formik.errors.email}</div>
         ) : null}
       </div>
       <Input
         className="bg-[#0D103C] min-[320px]:w-[250px] sm:w-[300px] lg:w-[400px] h-[75px] text-[#fff] px-4 m-4"
         id="mobile"
         type="number"
         placeholder="Phone Number"
         name="mobile"
         value={formik.values.mobile}
         onChange={formik.handleChange("mobile")}
         onBlur={formik.handleBlur("mobile")}
       />
       <div className="text-black font-bold text-lg">
         {formik.touched.mobile && formik.errors.mobile ? (
           <div>{formik.errors.mobile}</div>
         ) : null}
       </div>
       <div className="flex flex-row flex-no-wrap justify-between items-center">
         <button
           onClick={() => formik.resetForm()}
           style={{ boxShadow: "8px 8px 4px #0D103C" }}
           className="bg-[#fff] w-[100px] h-[75px] font-roboto font-bold text-2xl text-[#0D103C] rounded-[20px]  px-4 mx-4 mt-4 mb-8"
         >
           Reset
         </button>
         <button
           type="submit"
           style={{ boxShadow: "8px 8px 4px #0D103C" }}
           className="bg-[#fff] w-[100px] h-[75px] text-[#0D103C] rounded-[20px] font-roboto font-bold text-2xl px-4 mx-4 mt-4 mb-8"
         >
           Save
         </button>
       </div>
     </form>
   </div>
 );
}

export default Profile