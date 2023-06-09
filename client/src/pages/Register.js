import React from 'react'
import { useState,useEffect } from 'react'
import { Logo ,FormRow, Alert } from '../components'
import Wrapper from '../assets/wrappers/RegisterPage'
import { useAppContext } from '../context/appContext'

const initialState = {
    name:'',
    email:'',
    password:'',
    isMember:true,
    // showAlert:false
}

const Register = () => {
  //i could use multiple states but this will be faster as a single object
  const [values , setValues] = useState(initialState);
  //global state and useNavigate

//   const state = useAppContext();
//   console.log(state);


    const {isLoading , showAlert} = useAppContext()
    
   const toggleMember = () =>{
    setValues({...values, isMember:!values.isMember})
   }

   const handleChange = (e) =>{
    console.log(e.target);// it will tell which input we are working for
   }

   const onSubmit = (e) =>{
    e.preventDefault();
    console.log(e.target);
   }

   return (
     <Wrapper className="full-page">
       {/* Register */}
       <form className="form" onSubmit={onSubmit}>
         <Logo />
         <h3>{values.isMember ? "Login" : "Regsiter"}</h3>
         {showAlert && <Alert />}

         {/* name input */}
         {!values.isMember && (
           <FormRow
             type="text"
             name="name"
             value={values.name}
             handleChange={handleChange}
           />
         )}

         {/* email input */}
         <FormRow
           type="email"
           name="email"
           value={values.email}
           handleChange={handleChange}
         />

         {/* password input */}
         <FormRow
           type="password"
           name="password"
           value={values.password}
           handleChange={handleChange}
         />

         <button type="submit" className="btn btn-block">
           Submit
         </button>

         <p>
            {values.isMember?'Not a member yet?':'Already a member?'}
           <button type="button" onClick={toggleMember} className="member-btn">

            {/* if user is on login page then has to be shown the Regsiter and if he is on Register then he has to be shown Login option */}

             {values.isMember ? 'Register' : 'Login'}
           </button>
         </p>
       </form>
     </Wrapper>
   );

}

export default Register